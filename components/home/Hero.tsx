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
            Customized Uniforms &amp; Garment Manufacturing
          </span>
          <h1>
            India-Based Garment Manufacturing.{" "}
            <em>Global Supply Capability.</em>
          </h1>
          <p className={styles.lead}>
            Prolink manufactures customized uniforms and garments for
            institutions, companies and organizations — designed to your
            requirements and supplied across India and international markets.
          </p>
          <div className={styles.actions}>
            <Link href="/uniforms" className="btn btn-gold">
              Explore Uniform Solutions
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
