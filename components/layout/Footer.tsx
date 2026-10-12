import Link from "next/link";
import { company, mailtoLink, telLink, whatsappLink } from "@/lib/company";
import { categories } from "@/lib/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.brandName}>{company.name}</div>
            <div className={styles.brandSub}>{company.tagline}</div>
            <p className={styles.blurb}>
              Precision garment manufacturing and customized uniform solutions —
              engineered in India, trusted by institutions and brands worldwide.
            </p>
            <ul className={styles.compliance}>
              {company.compliance.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <nav aria-label="Collections">
            <h2 className={styles.colTitle}>Collections</h2>
            <div className={styles.links}>
              {categories.map((c) => (
                <Link key={c.slug} href={c.href}>
                  {c.label}
                </Link>
              ))}
              <Link href="/products">All Products</Link>
            </div>
          </nav>

          <nav aria-label="Company">
            <h2 className={styles.colTitle}>Company</h2>
            <div className={styles.links}>
              <Link href="/manufacturing">Manufacturing</Link>
              <Link href="/about">About Us</Link>
              <Link href="/quote">Request a Quote</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>

          <div>
            <h2 className={styles.colTitle}>Get in Touch</h2>
            <address className={styles.contact}>
              <span>{company.address.line1}</span>
              <span>{company.address.line2}</span>
              <span>{company.address.country}</span>
              <a href={telLink}>{company.phone}</a>
              <a href={mailtoLink}>{company.email}</a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp Enquiry
              </a>
              <span>{company.hours}</span>
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} {company.legalName}. All rights reserved.
          </span>
          <span>Engineered in India · Trusted Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
