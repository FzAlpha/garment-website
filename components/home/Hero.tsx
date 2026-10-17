"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/tokens";
import { company, mailtoLink, telLink, telLinkAlt } from "@/lib/company";
import { home, img } from "@/lib/media";
import styles from "./Hero.module.css";
import ProlinkWordmark from "@/components/ui/ProlinkWordmark";
import { useEnter } from "./motion/deck/useEnter";

const leftNav = [
  { label: "Garments", href: "/garments" },
  { label: "Uniforms", href: "/uniforms" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];
const rightNav = [
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
];

// Shown inside the notch's hover card (the business-card credentials panel).
const cardServices = [
  "Uniform Solutions",
  "Custom Design & Branding",
  "Bulk & Export Orders",
  "Men's & Women's Wear",
  "Textiles & Fabrics",
];

// Headline split into words; "Workforce!" keeps the outlined <em> treatment.
const titleLines: { text: string; em?: boolean }[][] = [
  [{ text: "Garments" }, { text: "Built" }, { text: "For" }],
  [{ text: "Every" }, { text: "Workforce!", em: true }],
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEnter(root, (tl, r) => {
    const q = (s: string) => r.querySelectorAll(s);
    // 1 — model scales down from 1.45 and settles at bottom-centre.
    tl.fromTo(q("[data-hero-fig]"), { scale: 1.45, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 }, 0);
    // Nav fades with the model.
    tl.fromTo(q("[data-hero-nav]"), { opacity: 0 }, { opacity: 1, duration: 0.8 }, 0.1);
    // 2 — headline reveals behind the shrinking model (typewriter stagger).
    tl.fromTo(q("[data-hero-word]"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 }, 0.35);
    // 3 — floating UI slides up once the model has settled.
    tl.fromTo(q("[data-hero-float]"), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 }, 1.0);
  });

  return (
    <section className={styles.hero} data-fit="hero" ref={root}>
      <div className={styles.panel} data-hero-panel>
        {/* Notched nav band inside the hero panel; the centre is a notch
            connected to the top. It scrolls away with the hero, after which the
            floating island (IslandNav) takes over. */}
        <div className={styles.navWrap} data-hero-nav>
          {/* One continuous bluish band (VEXO): shorter side shelves hold the
              writings; the centre drops down into a wide tongue with smooth
              shoulders, and the dark PROLINK notch hangs into that tongue. */}
          <svg
            className={styles.navBand}
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 0 H1000 V78 H680 C650 78 650 100 600 100 H400 C350 100 350 78 320 78 H0 Z" />
          </svg>
          <nav className={styles.navBar} aria-label="Primary">
            <div className={`${styles.navGroup} ${styles.navLeft}`}>
              {leftNav.map((n) => (
                <Link key={n.label} href={n.href} className={styles.navLink}>
                  {n.label}
                </Link>
              ))}
            </div>

            {/* The notch itself expands: on hover the dark tab widens and drops
                open into the business-card panel (name, what we do, founder and
                contacts), keeping PROLINK as its header. */}
            <div className={styles.logoDock}>
              <div className={styles.logoNotch} role="group" aria-label={`${company.legalName} details`}>
                <Link href="/" className={styles.logoBrand} aria-label={`${brand.name} home`}>
                  <ProlinkWordmark height={26} />
                </Link>

                <div className={styles.logoDetails}>
                  <div className={styles.cardCol}>
                  <p className={styles.cardName}>{company.legalName}</p>
                  <p className={styles.cardTag}>{company.tagline}</p>
                  <p className={styles.cardTrust}>India&apos;s trusted manufacturing partner</p>
                </div>

                <div className={styles.cardCol}>
                  <p className={styles.cardColTitle}>What We Do</p>
                  <ul className={styles.cardServices}>
                    {cardServices.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardCol}>
                  <p className={styles.cardFounderName}>{company.founder}</p>
                  <p className={styles.cardFounderTitle}>({company.founderTitle})</p>
                  <div className={styles.cardContact}>
                    <span className={styles.cardRow}>
                      <a href={telLink}>{company.phone}</a>
                      <a href={telLinkAlt}>{company.phoneAlt}</a>
                    </span>
                    <a href={mailtoLink}>{company.email}</a>
                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                      {company.website.replace(/^https?:\/\//, "")}
                    </a>
                    <span className={styles.cardAddr}>
                      {company.address.line1}, {company.address.line2}
                    </span>
                  </div>
                </div>
                </div>
              </div>
            </div>

            <div className={`${styles.navGroup} ${styles.navRight}`}>
              {rightNav.map((n) => (
                <Link key={n.label} href={n.href} className={styles.navLink}>
                  {n.label}
                </Link>
              ))}
              <Link href="/quote" className={styles.signPill}>
                Get a Quote
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
          <h1 className={styles.title} aria-label="Garments Built For Every Workforce!">
            {titleLines.map((line, li) => (
              <span className={styles.titleLine} key={li} aria-hidden="true">
                {line.map((word, wi) => (
                  <span
                    key={wi}
                    className={word.em ? styles.titleEm : undefined}
                    data-hero-word
                  >
                    {word.text}
                    {wi < line.length - 1 ? " " : ""}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <div className={styles.actions} data-hero-float>
            <Link href="/garments" className="btn">
              View Garments
            </Link>
            <Link href="/quote" className="btn btn-gold">
              Request a Quote
            </Link>
          </div>
        </div>

        <div className={styles.figure} aria-hidden="true" data-hero-fig>
          <Image
            src={home.hero}
            alt=""
            fill
            priority
            sizes="(max-width: 48rem) 90vw, 40vw"
            className={styles.figureImg}
          />
        </div>

        <div className={styles.bottom} data-hero-bottom>
          <div className={styles.intro} data-hero-float>
            <div className={styles.dots} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p>
              From security and healthcare uniforms to corporate formalwear and
              bulk apparel — manufactured to your specification, at any volume,
              with export-grade quality.
            </p>
          </div>

          <Link href="/manufacturing" className={styles.videoCard} aria-label="Watch" data-hero-float>
            <Image
              src={img(home.products[0], 500)}
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
