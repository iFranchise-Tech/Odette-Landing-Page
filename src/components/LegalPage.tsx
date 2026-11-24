import Link from "next/link";
import type { ReactNode } from "react";
import { OdetteWordmark } from "@/components/ui/OdetteWordmark";
import { Footer } from "@/components/sections/Footer";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="legal-page">
      <header className="legal-page__header page-container">
        <Link href="/" aria-label="Return to Odette home" className="legal-page__brand">
          <OdetteWordmark />
        </Link>
        <Link href="/" className="legal-page__back">Back to Odette</Link>
      </header>
      <main className="legal-page__main page-container">
        <p className="legal-page__eyebrow">iFranchise · Odette franchise opportunity</p>
        <h1>{title}</h1>
        <p className="legal-page__updated">Last updated: 24 November 2026</p>
        <div className="legal-page__content">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
