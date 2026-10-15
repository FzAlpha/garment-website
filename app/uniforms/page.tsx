import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import Icon from "@/components/ui/Icon";
import { uniformSectors } from "@/data/uniforms";
import styles from "./uniforms.module.css";

export const metadata: Metadata = {
  title: "Uniform Solutions",
  description:
    "Customized uniform manufacturing for education, healthcare, security, hospitality, corporate, industrial, institutional and retail sectors — designed to your specifications and supplied across India and worldwide.",
};

export default function UniformsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Uniform Solutions"
        title="Customized Uniforms for Every Sector"
        subtitle="Our core focus — complete, brand-aligned uniform programmes manufactured to your specifications for institutions, companies and organizations, in India and internationally."
        crumbs={[{ label: "Home", href: "/" }, { label: "Uniform Solutions" }]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid} data-reveal-group>
            {uniformSectors.map((s) => (
              <Link key={s.slug} href={`/uniforms/${s.slug}`} className={styles.card}>
                <span className={styles.icon}>
                  <Icon name={s.icon} />
                </span>
                <span className={styles.eyebrow}>{s.eyebrow}</span>
                <h2 className={styles.title}>{s.label}</h2>
                <p className={styles.summary}>{s.summary}</p>
                <ul className={styles.roles}>
                  {s.roles.slice(0, 4).map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <span className={styles.cta}>View solutions →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" data-reveal style={{ textAlign: "center", maxWidth: "46rem", marginInline: "auto" }}>
          <span className="eyebrow">Designed to Your Requirements</span>
          <h2>Don&apos;t see your exact uniform? We manufacture to specification.</h2>
          <p className="section-intro" style={{ marginInline: "auto" }}>
            Share your design, fabric, colour, logo, measurements and quantity —
            we develop and manufacture accordingly.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/quote?type=uniforms" className="btn btn-gold">Request a Quote</Link>
            <Link href="/custom" className="btn btn-ghost-light">Custom Design &amp; Development</Link>
          </div>
        </div>
      </section>
    </>
  );
}
