import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/ui/PageBanner";
import Icon from "@/components/ui/Icon";
import { getRange, getAllRangeParams } from "@/data/ranges";
import styles from "./range.module.css";

export function generateStaticParams() {
  return getAllRangeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ range: string }>;
}): Promise<Metadata> {
  const { range } = await params;
  const r = getRange(range);
  if (!r) return { title: "Garment Ranges" };
  return { title: r.label, description: r.summary };
}

export default async function RangePage({
  params,
}: {
  params: Promise<{ range: string }>;
}) {
  const { range } = await params;
  const r = getRange(range);
  if (!r) notFound();

  return (
    <>
      <PageBanner
        eyebrow={r.eyebrow}
        title={r.label}
        subtitle={r.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Garments", href: "/garments" },
          { label: r.label },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className={styles.badge}>
              <Icon name={r.icon} size="1.5rem" />
            </span>
            <h2>{r.itemsLabel}</h2>
          </div>
          <ul className={styles.checklist} data-reveal-group>
            {r.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className={styles.twoCards} data-reveal-group>
            <article className={styles.panel}>
              <h3>{r.secondaryLabel}</h3>
              <ul className={styles.chips}>
                {r.secondary.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
            <article className={styles.panel}>
              <h3>Customization &amp; Branding</h3>
              <ul className={styles.chips}>
                {r.customization.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" data-reveal style={{ textAlign: "center", maxWidth: "46rem", marginInline: "auto" }}>
          <span className="eyebrow">Designed to Your Requirements</span>
          <h2>Request a quote for {r.label.toLowerCase()}</h2>
          <p className="section-intro" style={{ marginInline: "auto" }}>
            Share your design, fabric, colour, logo, size chart and quantity —
            we develop and manufacture to specification.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={`/quote?type=${r.slug}`} className="btn btn-gold">
              Request a Quote
            </Link>
            <Link href="/garments" className="btn btn-ghost-light">
              All Garment Ranges
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
