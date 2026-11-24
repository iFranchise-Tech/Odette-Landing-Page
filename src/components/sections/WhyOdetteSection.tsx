"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_IMAGES } from "@/lib/images";
import { SectionShell } from "../ui/SectionShell";

const captions = [
  "A welcoming store experience",
  "Thoughtful details, everywhere",
  "Style made for every day",
  "Find your own point of view",
  "A world of Odette",
  "Made to be discovered",
];

export function WhyOdetteSection() {
  const cards = SITE_IMAGES.gallery.map((image, index) => ({
    ...image,
    caption: captions[index % captions.length],
  }));

  return (
    <SectionShell
      id="why-odette"
      ariaLabel="Discover the Odette brand"
      fullViewport={false}
      className="odette-motion-section"
    >
      <div className="odette-motion-heading">
        <span className="odette-motion-eyebrow">A closer look at Odette</span>
        <h2>Style that moves with you.</h2>
        <p>
          Explore the details, collections, and welcoming spaces that make up the Odette world.
        </p>
      </div>

      <div className="odette-motion-ribbon" aria-label="Odette brand highlights">
        <div className="odette-motion-ribbon__group">
          <span>Modern femininity</span><i />
          <span>Thoughtful design</span><i />
          <span>Everyday expression</span><i />
          <span>The Odette point of view</span>
        </div>
      </div>

      <div className="odette-motion-gallery" aria-label="Moving Odette image showcase">
        <div className="odette-motion-gallery__track">
          {[0, 1].map((copy) => (
            <div
              className="odette-motion-gallery__group"
              aria-hidden={copy === 1}
              key={copy}
            >
              {cards.map((card, index) => (
                <figure className="odette-motion-card" key={`${copy}-${card.src}`}>
                  <div className="odette-motion-card__image">
                    <Image
                      src={card.src}
                      alt={copy === 0 ? card.alt : ""}
                      fill
                      sizes="(max-width: 640px) 76vw, (max-width: 1024px) 42vw, 310px"
                      quality={85}
                      priority={copy === 0 && index < 2}
                    />
                  </div>
                  <figcaption>
                    <span>0{index + 1}</span>
                    <strong>{card.caption}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="odette-motion-footer">
        <p>Make room for a new kind of fashion business.</p>
        <Link href="/franchise-investment" className="odette-motion-link">
          Explore the investment <ArrowRight aria-hidden="true" size={17} />
        </Link>
      </div>
    </SectionShell>
  );
}
