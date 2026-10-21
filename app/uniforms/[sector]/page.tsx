import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/ui/PageBanner";
import Icon from "@/components/ui/Icon";
import { getSector, getAllSectorParams } from "@/data/uniforms";
import styles from "./sector.module.css";

// Per-sector banner overrides (local images). Sectors not listed fall back to
// PageBanner's default banner.
const sectorBanner: Record<string, string> = {
  education: "/images/showcase/education-banner.jpg",
  industrial: "/images/showcase/industrial-banner.jpg",
  hospitality: "/images/showcase/hospitality-banner.jpg",
};

export function generateStaticParams() {
  return getAllSectorParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector } = await params;
  const s = getSector(sector);
  if (!s) return { title: "Uniform Solutions" };
  return {
    title: `${s.label} Uniforms`,
    description: s.summary,
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector } = await params;
  const s = getSector(sector);
  if (!s) notFound();

  return (
    <>
      <PageBanner
        eyebrow={s.eyebrow}
        title={`${s.label} Uniforms`}
        subtitle={s.summary}
        image={sectorBanner[sector]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Uniform Solutions", href: "/uniforms" },
          { label: s.label },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.split}>
            <div data-reveal>
              <span className={styles.badge}>
                <Icon name={s.icon} size="1.5rem" />
              </span>
              <h2>Who We Outfit</h2>
              <ul className={styles.checklist}>
                {s.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <span className="eyebrow">Garments We Manufacture</span>
              <ul className={styles.checklist}>
                {s.garments.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className={styles.twoCards} data-reveal-group>
            <article className={styles.panel}>
              <h3>Fabric Options</h3>
              <ul className={styles.chips}>
                {s.fabrics.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
            <article className={styles.panel}>
              <h3>Customization &amp; Branding</h3>
              <ul className={styles.chips}>
                {s.customization.map((c) => (
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
          <h2>Request a quote for {s.label.toLowerCase()} uniforms</h2>
          <p className="section-intro" style={{ marginInline: "auto" }}>
            Send us your design, fabric, colour, logo, size chart and quantity —
            we develop samples and manufacture to your specification.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={`/quote?type=${s.slug}`} className="btn btn-gold">
              Request a Quote
            </Link>
            <Link href="/uniforms" className="btn btn-ghost-light">
              All Uniform Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
