import Link from "next/link";
import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Odette",
  description: "Terms governing use of the Odette franchise opportunity website presented by iFranchise.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>
        These Terms &amp; Conditions apply to your use of the Odette franchise opportunity website
        presented by iFranchise. By accessing or using this website, you agree to these terms.
      </p>

      <h2>Website information</h2>
      <p>
        This website provides general information about Odette and its franchise opportunity. The
        current page may describe an investment starting from ₹45 Lakhs, a franchise fee of ₹7 Lakhs
        plus GST, an indicative retail space requirement of 700 sq. ft., a five-year agreement term,
        a FICO (Franchise Invested, Company Operated) model, and a return structure described as
        ₹1.25 Lakhs per month or 12% of revenue share, whichever is higher. It may also refer to an
        indicative payback period of 24–28 months and a network of 50+ outlets.
      </p>
      <p>
        These figures and descriptions are indicative, may change, and are subject to verification and
        the definitive franchise documents. They do not constitute a guarantee of investment amount,
        sales, returns, profitability, payback, outlet count, or business performance.
      </p>

      <h2>Franchise enquiries and agreements</h2>
      <p>
        Submitting an enquiry or receiving information does not create a franchise, partnership,
        agency, or other business relationship. A franchise opportunity is subject to location
        availability, eligibility, due diligence, internal approval, and execution of a separate
        written franchise agreement. The signed agreement and its schedules govern the relationship
        and prevail over general website content.
      </p>

      <h2>Use of this website</h2>
      <p>
        You agree to use the website lawfully and not to disrupt its operation, attempt unauthorized
        access, introduce harmful code, or misuse the enquiry form. You are responsible for ensuring
        that information you submit is accurate and that you are authorized to provide it.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Odette and iFranchise names, logos, photographs, designs, text, and other website materials
        are owned by or used with permission by their respective rights holders. You may view and use
        this website for personal evaluation of the franchise opportunity. You may not copy, publish,
        modify, distribute, or commercially exploit website materials without prior written permission.
      </p>

      <h2>Third-party websites</h2>
      <p>
        Links to third-party websites and services are provided for convenience. iFranchise does not
        control those services and is not responsible for their content, availability, terms, or
        privacy practices.
      </p>

      <h2>Availability and changes</h2>
      <p>
        We may update, suspend, or remove website content or functionality at any time. We aim to keep
        information useful and current, but do not warrant that every page is complete, uninterrupted,
        or free from error. Updated terms will be posted on this page and apply from the date shown.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India, subject to any mandatory protections that apply
        to you. Any dispute will be handled by a court or authority with jurisdiction under applicable
        law.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these terms or the Odette franchise opportunity, please use the
        <Link href="/contact"> contact form</Link> on this website.
      </p>
    </LegalPage>
  );
}
