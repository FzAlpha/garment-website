import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.panel}>
        <span className={styles.rays} aria-hidden="true" />

        <div className={styles.top}>
          <h1 className={styles.title}>
            Gear Up Every Season
            <br />
            Every <em>Workout!</em>
          </h1>
          <div className={styles.actions}>
            <Link href="/products" className="btn">
              Shop Now
            </Link>
            <Link href="/uniforms" className="btn btn-gold">
              Explore All
            </Link>
          </div>
        </div>

        <div className={styles.figure} aria-hidden="true">
          <Image
            src="/images/hero-factory.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 48rem) 90vw, 40vw"
            className={styles.figureImg}
          />
        </div>

        <div className={styles.bottom}>
          <div className={styles.intro}>
            <div className={styles.dots} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p>
              Stay cozy without compromising your range of motion. Our women&apos;s
              winter range is perfect for those chilly outdoor workouts.
            </p>
          </div>

          <Link
            href="/manufacturing"
            className={styles.videoCard}
            aria-label="Watch"
          >
            <Image
              src="/images/hero-factory.jpg"
              alt=""
              fill
              sizes="(max-width: 48rem) 60vw, 22rem"
              className={styles.videoImg}
            />
            <span className={styles.play} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
