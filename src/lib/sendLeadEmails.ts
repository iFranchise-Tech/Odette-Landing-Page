import { LeadConfirmationEmail } from "@/emails/LeadConfirmationEmail";
import { LeadNotificationEmail } from "@/emails/LeadNotificationEmail";
import { CONTACT_EMAIL } from "@/lib/site";
import { getServerEnv } from "@/lib/serverEnv";
import type { LeadRecord } from "@/lib/leadSchema";
import { render } from "@react-email/render";
import { Resend } from "resend";

let resendClient: Resend | null = null;
let resendClientKey: string | null = null;

const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const NAMED_EMAIL_PATTERN = /^[^<>]+<([^\s@<>]+@[^\s@<>]+\.[^\s@<>]+)>$/;

function getResendClient() {
  const apiKey = getServerEnv("RESEND_API_KEY");

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  if (!apiKey.startsWith("re_")) {
    throw new Error("RESEND_API_KEY is invalid (expected a key starting with re_)");
  }

  if (!resendClient || resendClientKey !== apiKey) {
    resendClient = new Resend(apiKey);
    resendClientKey = apiKey;
  }

  return resendClient;
}

function getFromAddress() {
  const from =
    getServerEnv("RESEND_FROM_EMAIL") || "iFranchise <contact@ifranchise.in>";

  if (!EMAIL_PATTERN.test(from) && !NAMED_EMAIL_PATTERN.test(from)) {
    throw new Error(
      'RESEND_FROM_EMAIL is invalid (use "email@domain" or "Name <email@domain>")'
    );
  }

  return from;
}

function getNotificationRecipient() {
  const recipient = getServerEnv("CONTACT_NOTIFICATION_EMAIL") || CONTACT_EMAIL;

  if (!EMAIL_PATTERN.test(recipient)) {
    throw new Error("CONTACT_NOTIFICATION_EMAIL is not a valid email address");
  }

  return recipient;
}

function resendErrorMessage(error: unknown): string {
  if (!error || typeof error !== "object") {
    return "Unknown Resend error";
  }

  const record = error as { message?: string; name?: string; statusCode?: number };
  const parts = [
    record.name,
    record.statusCode ? `HTTP ${record.statusCode}` : undefined,
    record.message,
  ].filter(Boolean);

  return parts.join(": ") || "Unknown Resend error";
}

async function sendRenderedEmail({
  subject,
  to,
  replyTo,
  html,
  idempotencyKey,
}: {
  subject: string;
  to: string;
  replyTo?: string;
  html: string;
  idempotencyKey?: string;
}) {
  const resend = getResendClient();

  const { data, error } = await resend.emails.send(
    {
      from: getFromAddress(),
      to: [to],
      replyTo: replyTo || undefined,
      subject,
      html,
    },
    idempotencyKey ? { idempotencyKey } : undefined
  );

  if (error) {
    throw new Error(resendErrorMessage(error));
  }

  return data;
}

export async function sendLeadNotificationEmail(lead: LeadRecord) {
  // Pre-render HTML so Workers do not rely on Resend's React renderer at runtime.
  const html = await render(LeadNotificationEmail({ lead }));

  return sendRenderedEmail({
    subject: `New Odette Franchise Inquiry — ${lead.fullName}`,
    to: getNotificationRecipient(),
    replyTo: lead.email || undefined,
    html,
    idempotencyKey: lead.submissionId
      ? `${lead.submissionId}:notification`
      : undefined,
  });
}

export async function sendLeadConfirmationEmail(lead: LeadRecord) {
  if (!lead.email) {
    return null;
  }

  const html = await render(LeadConfirmationEmail({ lead }));

  return sendRenderedEmail({
    subject: "Thank you for contacting Odette",
    to: lead.email,
    replyTo: getNotificationRecipient(),
    html,
    idempotencyKey: lead.submissionId
      ? `${lead.submissionId}:confirmation`
      : undefined,
  });
}

export async function sendLeadEmails(lead: LeadRecord) {
  const notification = await sendLeadNotificationEmail(lead);

  let confirmation: Awaited<ReturnType<typeof sendLeadConfirmationEmail>> = null;

  if (lead.email) {
    try {
      confirmation = await sendLeadConfirmationEmail(lead);
    } catch (error) {
      console.error(
        "Lead confirmation email failed:",
        error instanceof Error ? error.message : error
      );
    }
  }

  return { notification, confirmation, confirmationSent: Boolean(confirmation) };
}
