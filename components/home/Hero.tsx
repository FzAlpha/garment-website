import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

const stats = [
  { num: "50,000+", label: "Pieces / Month" },
  { num: "AQL 2.5", label: "Quality Standard" },
  { num: "Global", label: "Export Reach" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.media} aria-hidden="true">
        <Image
          src="/images/hero-factory.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 60rem) 1px, 58vw"
          className={styles.mediaImg}
        />
        <span className={styles.mediaVeil} />
      </div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={`eyebrow ${styles.eyebrow}`}>
            Precision Craftsmanship &amp; Bulk Production
          </span>
          <h1>
            Premier Garment Manufacturing &amp;{" "}
            <em>Uniform Solutions</em>
          </h1>
          <p className={styles.lead}>
            Engineered in India, trusted worldwide. From institutional security
            uniforms to executive formal wear and premium knits — Prolink
            delivers tech-pack-accurate garments at scale.
          </p>
          <div className={styles.actions}>
            <Link href="/products" className="btn btn-gold">
              Explore Collections
            </Link>
            <Link href="/quote" className="btn btn-ghost-light">
              Request a Quote
            </Link>
          </div>

          <dl className={styles.stats}>
            {stats.map((s) => (
              <div className={styles.stat} key={s.label}>
                <dt className={styles.statNum}>{s.num}</dt>
                <dd className={styles.statLabel}>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className={styles.scrollCue} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
