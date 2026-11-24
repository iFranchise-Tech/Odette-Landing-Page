"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../ui/AnimatedSection";
import { SectionShell } from "../ui/SectionShell";

const brandFacts = [
  { value: "2020", label: "Founded in Bengaluru" },
  { value: "50+", label: "Stores and growing" },
  { value: "FICO", label: "Company operated" },
];

export function WhyConsiderSection() {
  return (
    <SectionShell
      id="about-odette"
      ariaLabel="About Odette and its founders"
      fullViewport={false}
      className="about-founder-section"
    >
      <div className="about-founder-layout">
        <motion.div
          className="about-founder-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <span className="about-founder-eyebrow">About Odette</span>
          <h2>A mass-premium fashion brand built for India.</h2>
          <p>
            Odette brings high-fashion style within reach, with trend-led Western and lifestyle
            collections designed for women aged 15 to 65.
          </p>
          <p>
            Founded in Bengaluru in 2020, Odette has grown to more than 50 stores. Fresh design,
            quality, and accessible pricing shape a retail experience made to grow with its
            customers and franchise partners.
          </p>

          <div className="about-founder-facts" aria-label="Odette at a glance">
            {brandFacts.map((fact) => (
              <div className="about-founder-fact" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-founder-visual"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
        >
          <figure className="about-founder-photo">
            <Image
              src="/images/brand/odette-founders.jpg"
              alt="Odette founder Mamta Roy and co-founder Amit Roy sharing their vision for the brand"
              width={2560}
              height={1360}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 55vw, 650px"
              quality={85}
              className="about-founder-photo__image"
            />
          </figure>
          <div className="about-founder-caption">
            <span>Meet the people behind the point of view</span>
            <strong>Mamta Roy <i /> Amit Roy</strong>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
