import Link from "next/link";
import { OdetteWordmark } from "@/components/ui/OdetteWordmark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner page-container">
        <Link href="/" aria-label="Odette home" className="site-footer__brand">
          <OdetteWordmark />
        </Link>
        <p className="site-footer__copyright">© {new Date().getFullYear()} Odette. All rights reserved.</p>
        <nav className="site-footer__legal" aria-label="Legal links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </nav>
      </div>
    </footer>
  );
}
