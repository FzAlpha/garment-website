import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import Icon from "@/components/ui/Icon";
import { garmentRanges } from "@/data/ranges";
import { categories } from "@/lib/navigation";
import styles from "./garments.module.css";

export const metadata: Metadata = {
  title: "Garment Ranges",
  description:
    "Men's wear, women's wear, traditional & ethnic garments and textiles & fabrics — plus our specialised production collections. Customized garment manufacturing to your specifications.",
};

export default function GarmentsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Garment Ranges"
        title="Garments We Manufacture"
        subtitle="Beyond uniforms, we manufacture a broad range of men's, women's, ethnic and textile products — all customizable to your design, fabric and branding."
        crumbs={[{ label: "Home", href: "/" }, { label: "Garments" }]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid} data-reveal-group>
            {garmentRanges.map((r) => (
              <Link key={r.slug} href={`/garments/${r.slug}`} className={styles.card}>
                <span className={styles.icon}>
                  <Icon name={r.icon} />
                </span>
                <span className={styles.eyebrow}>{r.eyebrow}</span>
                <h2 className={styles.title}>{r.label}</h2>
                <p className={styles.summary}>{r.summary}</p>
                <ul className={styles.preview}>
                  {r.items.slice(0, 4).map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <span className={styles.cta}>Explore range →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Production Collections</span>
            <h2>Specialised Manufacturing Lines</h2>
            <p className="section-intro">
              Dedicated catalogues with specifications, fabrics and colourways
              for our flagship uniform and apparel lines.
            </p>
          </div>
          <div className={styles.collections} data-reveal-group>
            {categories.map((c) => (
              <Link key={c.slug} href={c.href} className={styles.collection}>
                <h3>{c.label}</h3>
                <p>{c.blurb}</p>
                <span className={styles.cta}>View collection →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" data-reveal style={{ textAlign: "center", maxWidth: "46rem", marginInline: "auto" }}>
          <span className="eyebrow">Designed to Your Requirements</span>
          <h2>Need a garment that isn&apos;t listed?</h2>
          <p className="section-intro" style={{ marginInline: "auto" }}>
            Share your design, fabric, colour, logo and quantity — we develop
            and manufacture to specification.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/quote?type=custom-garments" className="btn btn-gold">Request a Quote</Link>
            <Link href="/custom" className="btn btn-ghost-light">Custom Design &amp; Development</Link>
          </div>
        </div>
      </section>
    </>
  );
}
