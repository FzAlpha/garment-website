"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, mailtoLink, telLink, telLinkAlt, whatsappLink } from "@/lib/company";
import styles from "./Footer.module.css";

export default function Footer({ showOnHome = false }: { showOnHome?: boolean }) {
  const year = new Date().getFullYear();
  // The homepage uses the monochrome (VEXO) theme; match the footer to it there
  // while inner pages keep the locked maroon identity.
  const isHome = usePathname() === "/";

  // On the homepage the global (layout) footer is covered by the full-screen
  // deck; it's instead rendered as the deck's final slide with `showOnHome`.
  if (isHome && !showOnHome) return null;

  return (
    <footer
      className={`${styles.footer} ${isHome ? styles.mono : ""} ${
        showOnHome ? styles.deckSlide : ""
      }`}
    >
      {showOnHome && (
        <div className={styles.lead}>
          <h2 className={styles.leadTitle}>Let&apos;s outfit your workforce.</h2>
          <p className={styles.leadText}>
            Security, healthcare, corporate and bulk apparel — manufactured to
            your specification, at any volume, with export-grade quality.
          </p>
          <Link href="/quote" className={styles.leadCta}>
            Request a Quote
          </Link>
        </div>
      )}

      <div className={styles.inner}>
        <div className={styles.grid}>
          <nav aria-label="Solutions">
            <h2 className={styles.colTitle}>Solutions</h2>
            <div className={styles.links}>
              <Link href="/uniforms">Uniform Solutions</Link>
              <Link href="/custom">Custom Design</Link>
              <Link href="/bulk-orders">Bulk Orders</Link>
              <Link href="/industries">Industries</Link>
            </div>
          </nav>

          <nav aria-label="Garments">
            <h2 className={styles.colTitle}>Garments</h2>
            <div className={styles.links}>
              <Link href="/garments/mens">Men&apos;s Wear</Link>
              <Link href="/garments/womens">Women&apos;s Wear</Link>
              <Link href="/garments/ethnic">Traditional &amp; Ethnic</Link>
              <Link href="/garments/textiles">Textiles &amp; Fabrics</Link>
              <Link href="/products">Production Collections</Link>
            </div>
          </nav>

          <nav aria-label="Company">
            <h2 className={styles.colTitle}>Company</h2>
            <div className={styles.links}>
              <Link href="/manufacturing">Manufacturing &amp; Quality</Link>
              <Link href="/global">Global Supply</Link>
              <Link href="/about">About Us</Link>
              <Link href="/quote">Request a Quote</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>

          <div className={styles.contactCol}>
            <h2 className={styles.colTitle}>Get in Touch</h2>
            <address className={styles.contact}>
              <span>{company.address.line1}</span>
              <span>{company.address.line2}</span>
              <span>{company.address.country}</span>
              <a href={telLink}>{company.phone}</a>
              <a href={telLinkAlt}>{company.phoneAlt}</a>
              <a href={mailtoLink}>{company.email}</a>
              <a href={company.website} target="_blank" rel="noopener noreferrer">
                {company.website.replace(/^https?:\/\//, "")}
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp Enquiry
              </a>
              <span>{company.hours}</span>
            </address>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        <span>
          © {year} {company.legalName}. All rights reserved.
        </span>
        <span>Engineered in India · Trusted Worldwide</span>
      </div>
    </footer>
  );
}
