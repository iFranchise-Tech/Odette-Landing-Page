"use client";

import { SITE_IMAGES } from "@/lib/images";
import { CONTACT_PATH, SECTION_ID_TO_PATH } from "@/lib/site";
import { trackBookConsultation } from "@/lib/analytics";
import { useSectionNavigation } from "@/lib/useSectionNavigation";
import { type ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Calendar, IndianRupee, Tag } from "lucide-react";
import Image from "next/image";
import { fadeUp, staggerContainer } from "../ui/AnimatedSection";

const highlights: Array<{ label: string; value: string; icon: ElementType }> = [
  { label: "Investment", value: "₹45 Lakhs+", icon: IndianRupee },
  { label: "Business Model", value: "FICO", icon: Tag },
  { label: "Agreement Term", value: "5 Years", icon: Calendar },
  { label: "Outlets", value: "50+", icon: Building2 },
];

export function HeroSection() {
  const { navigate } = useSectionNavigation();

  return (
    <section id="hero" className="viewport-section snap-section odette-hero">
      <div className="odette-hero__visual" aria-label="Odette fashion collection">
        <picture className="odette-hero__picture">
          <source media="(max-width: 767px)" srcSet={SITE_IMAGES.hero.mobile.src} />
          <Image
            src={SITE_IMAGES.hero.desktop.src}
            alt="Three women wearing Odette-inspired contemporary fashion in a bright studio"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="odette-hero__image"
          />
        </picture>
        <div className="odette-hero__image-wash" aria-hidden="true" />
      </div>

      <div className="odette-hero__content">
        <motion.div
          initial={false}
          animate="visible"
          variants={staggerContainer}
          className="odette-hero__content-inner"
        >
          <motion.span variants={fadeUp} className="odette-hero__eyebrow">
            Fashion Franchise Opportunity
          </motion.span>

          <motion.h1 variants={fadeUp}>
            You Invest.<br />
            <span>We bring Odette to life.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="odette-hero__description">
            Own a premium women&apos;s fashion store with a professionally managed FICO business model.
          </motion.p>

          <motion.ul variants={fadeUp} className="odette-hero__highlights">
            {highlights.map(({ label, value, icon: Icon }) => (
              <li key={label}>
                <span className="odette-hero__icon"><Icon aria-hidden="true" /></span>
                <span className="odette-hero__stat-label">{label}</span>
                <strong className="odette-hero__stat-value">{value}</strong>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="odette-hero__actions">
            <a
              href={SECTION_ID_TO_PATH["invest-process"]}
              onClick={(event) => {
                navigate(event, SECTION_ID_TO_PATH["invest-process"]);
              }}
              className="odette-hero__primary"
            >
              View investment <ArrowRight aria-hidden="true" />
            </a>
            <a
              href={CONTACT_PATH}
              onClick={(event) => {
                trackBookConsultation("hero_talk_to_team");
                navigate(event, CONTACT_PATH);
              }}
              className="odette-hero__secondary"
            >
              Talk to team
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
