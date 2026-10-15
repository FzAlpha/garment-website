import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/navigation";
import { categoryMeta } from "@/data/products";
import styles from "./FlagshipShowcase.module.css";

const badges: Record<string, string[]> = {
  "security-uniforms": ["Durable Fabric", "Modern Fit", "Breathable"],
  "premium-formal": ["Executive Styling", "High Thread Count", "Wrinkle Resistant"],
  "premium-tshirts": ["180–200 GSM", "Combed Cotton", "Biowash"],
};

export default function FlagshipShowcase() {
  return (
    <section className="section" id="collections">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Garment Collections</span>
          <h2>Specialised Manufacturing Lines</h2>
          <p className="section-intro">
            Purpose-built production lines for institutional, corporate, and
            retail apparel — each with dedicated fabric programmes, sizing and
            finishing. Men&apos;s, women&apos;s and ethnic ranges available on
            request.
          </p>
        </div>

        <div className={styles.grid} data-reveal-group>
          {categories.map((c) => {
            const meta = categoryMeta[c.slug];
            return (
              <Link key={c.slug} href={c.href} className={styles.card}>
                <div className={styles.media}>
                  <Image
                    src={meta.heroImage}
                    alt={meta.title}
                    fill
                    sizes="(max-width: 48rem) 100vw, 22rem"
                  />
                </div>
                <div className={styles.caption}>
                  <span className={styles.kicker}>{meta.eyebrow}</span>
                  <h3 className={styles.title}>{c.label}</h3>
                  <div className={styles.badges}>
                    {badges[c.slug].map((b) => (
                      <span key={b}>{b}</span>
                    ))}
                  </div>
                  <span className={styles.cta}>Explore collection →</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div data-reveal style={{ marginTop: "clamp(2rem, 5vw, 3rem)", textAlign: "center" }}>
          <Link href="/garments" className="btn btn-ghost">
            View All Garment Ranges
          </Link>
        </div>
      </div>
    </section>
  );
}
