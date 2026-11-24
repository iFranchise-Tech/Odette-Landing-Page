import type { LeadPayload } from "@/lib/submitLead";

import { getServerEnv } from "@/lib/serverEnv";

export function getGoogleScriptUrl(): string | undefined {
  // Prefer the server-only Worker secret; retain NEXT_PUBLIC as a backwards-compatible fallback.
  return (
    getServerEnv("GOOGLE_SCRIPT_URL") ||
    getServerEnv("NEXT_PUBLIC_GOOGLE_SCRIPT_URL") ||
    undefined
  );
}

export function isGoogleAppsScriptConfigured(): boolean {
  return Boolean(getGoogleScriptUrl());
}

export function buildGoogleSheetsPayload(
  payload: LeadPayload
): Record<string, string> {
  return {
    ...(payload.submissionId ? { submissionId: payload.submissionId } : {}),
    fullName: payload.fullName,
    mobileNumber: payload.mobileNumber,
    email: payload.email,
    state: payload.state,
    city: payload.city,
    investmentBudget: payload.investmentBudget,
    franchiseType: payload.franchiseType,
    source: payload.source || "direct",
    utmParameters: payload.utmParameters || "",
  };
}
