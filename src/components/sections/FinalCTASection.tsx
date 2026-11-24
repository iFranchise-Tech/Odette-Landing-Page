"use client";

import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { fadeUp } from "@/components/ui/AnimatedSection";
import { SectionHeading, sectionBodyTextClass } from "@/components/ui/GoldButton";
import { SectionShell } from "@/components/ui/SectionShell";
import { motion } from "framer-motion";
import { Globe, Instagram, Phone } from "lucide-react";
import { CONTACT_PHONE, CONTACT_WEBSITE } from "@/lib/site";

export function FinalCTASection() {
  return (
    <SectionShell id="contact" ariaLabel="Contact the Odette franchise team" fullViewport={false}>
      <div className="contact-layout mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="contact-copy flex flex-col items-center text-center"
        >
          <SectionHeading compact centered pill="Contact" title="Let’s talk about your Odette opportunity" />
          <p className={`contact-description max-w-xl ${sectionBodyTextClass}`}>
            Share your details and our franchise team will guide you through the investment,
            operating model, and next steps for your location.
          </p>
          <nav className="contact-social-links" aria-label="Odette contact and social links">
            <a href={CONTACT_PHONE} aria-label="Call the Odette franchise team">
              <Phone aria-hidden size={18} strokeWidth={1.7} />
            </a>
            <a href="https://www.instagram.com/ifranchise.in/" target="_blank" rel="noopener noreferrer" aria-label="Follow iFranchise on Instagram">
              <Instagram aria-hidden size={18} strokeWidth={1.7} />
            </a>
            <a href={CONTACT_WEBSITE} target="_blank" rel="noopener noreferrer" aria-label="Visit the iFranchise website">
              <Globe aria-hidden size={18} strokeWidth={1.7} />
            </a>
          </nav>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="contact-form-wrap mx-auto w-full max-w-[30rem]"
        >
          <EnquiryForm
            variant="hero"
            id="contact-form"
            heading="Check your franchise eligibility"
            buttonText="CHECK FRANCHISE AVAILABILITY"
            showHeading
            showEmail
            showBudget
            stackStateCityOnMobile
            showSecurityNote={false}
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}
