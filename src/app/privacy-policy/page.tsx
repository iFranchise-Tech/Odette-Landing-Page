import Link from "next/link";
import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Odette",
  description: "Learn how iFranchise uses information submitted through the Odette franchise enquiry website.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        iFranchise handles franchise enquiries for Odette through this website. This Privacy Policy
        describes the information we collect, how we use it, and the choices available to you when
        you explore an Odette franchise opportunity or contact our team.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you submit an enquiry, we collect the details requested in the form, which may include
        your name, mobile number, email address, state, city, franchise type, investment budget, and any additional
        information you choose to provide. The form may also capture the page or campaign through
        which you reached us, including campaign parameters.
      </p>
      <p>
        We may receive basic technical and usage information, such as browser and device details,
        pages visited, and interactions with the website, through analytics and similar tools.
      </p>

      <h2>How we use your information</h2>
      <p>We use enquiry information to:</p>
      <ul>
        <li>respond to your questions and contact you about the Odette franchise opportunity;</li>
        <li>understand your preferred location and investment requirements;</li>
        <li>coordinate follow-up and provide information about the FICO model, investment, and next steps;</li>
        <li>maintain enquiry records and improve our franchise enquiry process; and</li>
        <li>operate, secure, and measure the performance of this website.</li>
      </ul>

      <h2>How information is shared</h2>
      <p>
        Enquiry details are made available to the iFranchise team members who manage Odette franchise
        enquiries. We may use service providers to host and support the website, process form
        submissions, manage email communications, store enquiry records, and measure website
        performance. Depending on the services configured for this website, these providers may
        include Google services for enquiry records or analytics and Resend for email delivery.
      </p>
      <p>
        We may also disclose information where required by law, to respond to lawful requests, or to
        protect the rights and security of iFranchise, Odette, our users, or others. We do not sell
        personal information submitted through the franchise enquiry form.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This website may use cookies or similar technologies for site functionality, analytics, and
        campaign measurement. Google Tag Manager may be used to manage website tags, including
        analytics tools when enabled. You can manage cookies through your browser settings. Blocking
        some cookies may affect website functionality or measurement.
      </p>

      <h2>Retention and security</h2>
      <p>
        We retain enquiry information for as long as needed to respond to your enquiry, manage related
        follow-up, maintain appropriate business records, and meet applicable legal requirements.
        We use safeguards designed to protect the information we handle; however, no method of
        transmission or storage can be guaranteed to be completely secure.
      </p>

      <h2>Your choices and requests</h2>
      <p>
        You may ask us to access, correct, or delete information you have submitted, or to stop further
        follow-up, by using the <Link href="/contact">contact form</Link>. Please identify the
        information or request clearly so our team can respond. We may need to verify your identity
        and retain certain records where required by law or for legitimate business purposes.
      </p>

      <h2>External websites</h2>
      <p>
        This website may link to services such as Instagram, WhatsApp, or other third-party websites.
        Those services operate independently and have their own privacy practices. Please review their
        policies before sharing information with them.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy when our website, enquiry process, or applicable requirements
        change. The latest version will be posted on this page with its revision date.
      </p>
      <p>For privacy enquiries, please use the <Link href="/contact">contact form</Link>.</p>
    </LegalPage>
  );
}
