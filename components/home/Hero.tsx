import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/tokens";
import styles from "./Hero.module.css";

const leftNav = [
  { label: "Shop", href: "/products" },
  { label: "Men", href: "/garments/mens" },
  { label: "Women", href: "/garments/womens" },
  { label: "Trending", href: "/uniforms" },
];
const rightNav = [
  { label: "Seasonal", href: "/uniforms" },
  { label: "Accessories", href: "/products" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.panel}>
        {/* Notched nav band (scrolls away with the hero, as in the reference) */}
        <div className={styles.navWrap}>
          <span className={styles.navBand} aria-hidden="true" />
          <nav className={styles.navBar} aria-label="Primary">
            <div className={`${styles.navGroup} ${styles.navLeft}`}>
              {leftNav.map((n) => (
                <Link key={n.label} href={n.href} className={styles.navLink}>
                  {n.label}
                </Link>
              ))}
            </div>

            <Link href="/" className={styles.logo}>
              {brand.name}
            </Link>

            <div className={`${styles.navGroup} ${styles.navRight}`}>
              {rightNav.map((n) => (
                <Link key={n.label} href={n.href} className={styles.navLink}>
                  {n.label}
                </Link>
              ))}
              <Link href="/quote" className={styles.signPill}>
                Sign In / Up
              </Link>
              <Link href="/quote" className={styles.iconBtn} aria-label="Cart">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="5" y="8" width="14" height="12" rx="2" />
                  <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>

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

          <Link href="/manufacturing" className={styles.videoCard} aria-label="Watch">
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
