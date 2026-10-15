import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.panel}>
        <span className={styles.rays} aria-hidden="true" />

        <div className={styles.top}>
          <span className={styles.eyebrow}>
            Customized Uniforms &amp; Garment Manufacturing
          </span>
          <h1 className={styles.title}>
            Uniforms For Every
            <br />
            Sector, Every <em>Shift</em>
          </h1>
          <div className={styles.actions}>
            <Link href="/quote" className="btn">
              Request a Quote
            </Link>
            <Link href="/uniforms" className="btn btn-gold">
              Explore Solutions
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.intro}>
            <div className={styles.dots} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p>
              Made in India and supplied worldwide — customized uniforms and
              garments for institutions, companies and organizations.
            </p>
          </div>

          <Link
            href="/manufacturing"
            className={styles.videoCard}
            aria-label="See how we manufacture"
          >
            <Image
              src="/images/hero-factory.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 48rem) 60vw, 22rem"
              className={styles.videoImg}
            />
            <span className={styles.play} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className={styles.videoLabel}>Inside Our Plant</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
