"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/tokens";
import { company, mailtoLink, telLink, telLinkAlt } from "@/lib/company";
import { img } from "@/lib/media";
import { garmentRanges } from "@/data/ranges";
import { uniformSectors } from "@/data/uniforms";
import { industries } from "@/data/industries";
import styles from "./Hero.module.css";
import ProlinkWordmark from "@/components/ui/ProlinkWordmark";
import { useEnter } from "./motion/deck/useEnter";

const leftNav = [
  { label: "Garments", href: "/garments" },
  { label: "Uniforms", href: "/uniforms" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

// ── Mega-menu content ───────────────────────────────────────────────────────
// Each nav mega-menu is a set of category columns (heading + blurb + sub-links)
// plus a featured image panel. Built from the real data files so the dropdowns
// stay in sync with the catalogue.
type MegaLink = { label: string; href: string };
type MegaColumn = { heading: string; href: string; blurb: string; links: MegaLink[] };
type MegaFeature = { href: string; img: string; kicker: string; title: string; cta: string };
type MegaConfig = { columns: MegaColumn[]; feature: MegaFeature };

const sector = (slug: string) => uniformSectors.find((s) => s.slug === slug)!;
const sectorLink = (slug: string): MegaLink => ({
  label: sector(slug).label,
  href: `/uniforms/${slug}`,
});

const megaMenus: Record<string, MegaConfig> = {
  // Garments — one column per garment range (data/ranges.ts).
  Garments: {
    columns: garmentRanges.map((r) => ({
      heading: r.label,
      href: `/garments/${r.slug}`,
      blurb: r.blurb,
      links: r.items.slice(0, 3).map((item) => ({ label: item, href: `/garments/${r.slug}` })),
    })),
    feature: {
      href: "/garments",
      img: "/catalog/tshirts/polo-range.jpg",
      kicker: "New Arrivals",
      title: "Premium Knit Collection",
      cta: "Explore all garments",
    },
  },

  // Uniforms — the eight uniform sectors grouped into two columns.
  Uniforms: {
    columns: [
      {
        heading: "Public & Frontline",
        href: "/uniforms",
        blurb: "Schools, hospitals, security & police",
        links: ["education", "healthcare", "security", "police-institutional"].map(sectorLink),
      },
      {
        heading: "Business & Industry",
        href: "/uniforms",
        blurb: "Corporate, hospitality, retail & industrial",
        links: ["corporate", "hospitality", "retail-services", "industrial"].map(sectorLink),
      },
    ],
    feature: {
      href: "/uniforms",
      img: "/catalog/security/security-officer.jpg",
      kicker: "Uniform Solutions",
      title: "Duty & Corporate Uniforms",
      cta: "Explore all uniforms",
    },
  },

  // Industries — the sectors we serve (data/industries.ts), split into two columns.
  Industries: {
    columns: [
      {
        heading: "Education & Services",
        href: "/industries",
        blurb: "Schooling, healthcare, security & public sector",
        links: industries.slice(0, 7).map((i) => ({ label: i.label, href: i.href })),
      },
      {
        heading: "Industry & Commerce",
        href: "/industries",
        blurb: "Manufacturing, retail, logistics & field teams",
        links: industries.slice(7).map((i) => ({ label: i.label, href: i.href })),
      },
    ],
    feature: {
      href: "/industries",
      img: img("photo-1486406146926-c627a92ad1ab", 600),
      kicker: "Who We Serve",
      title: "Tailored To Your Sector",
      cta: "View all industries",
    },
  },
};

/** A nav link that reveals a hover/focus mega-menu card (desktop nav only). */
function MegaMenu({
  label,
  href,
  config,
}: {
  label: string;
  href: string;
  config: MegaConfig;
}) {
  return (
    <div className={styles.hasMega}>
      <Link href={href} className={`${styles.navLink} ${styles.megaTrigger}`} aria-haspopup="true">
        {label}
        <svg className={styles.megaCaret} viewBox="0 0 10 6" width="10" height="6" aria-hidden="true">
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <div className={styles.megaWrap} role="menu" aria-label={label}>
        <div className={styles.megaPanel}>
          <div className={styles.megaCols}>
            {config.columns.map((col) => (
              <div key={col.heading} className={styles.megaCol}>
                <Link href={col.href} className={styles.megaHead} role="menuitem">
                  {col.heading}
                </Link>
                <p className={styles.megaBlurb}>{col.blurb}</p>
                <ul className={styles.megaLinks}>
                  {col.links.map((l, i) => (
                    <li key={`${l.href}-${i}`}>
                      <Link href={l.href} className={styles.megaLink} role="menuitem">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link href={config.feature.href} className={styles.megaFeature} role="menuitem">
            <Image
              src={config.feature.img}
              alt=""
              fill
              sizes="18rem"
              className={styles.megaFeatureImg}
            />
            <span className={styles.megaFeatureOverlay} aria-hidden="true" />
            <span className={styles.megaFeatureText}>
              <span className={styles.megaFeatureKicker}>{config.feature.kicker}</span>
              <span className={styles.megaFeatureTitle}>{config.feature.title}</span>
              <span className={styles.megaFeatureCta}>
                {config.feature.cta}
                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                  <path d="M3 8h9M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
const rightNav = [
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
];

// Shown inside the notch's hover card (the business-card credentials panel).
const cardServices = [
  "Customized garment manufacturing",
  "Uniform manufacturing",
  "Bulk garment production",
  "Custom design & development",
  "Fabric and material sourcing",
  "Sampling & product development",
  "Size and measurement customization",
  "Embroidery",
  "Printing",
  "Branding / logo application",
  "Stitching & finishing",
  "Bulk production",
  "Quality checking",
  "Packing & delivery coordination",
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
    // 1 — the figure greets the visitor LARGE and already visible (the full
    //     photo fills the hero), then settles down to its resting size. The
    //     figure is bottom-anchored, so scaling down lowers the subject — it
    //     reads as the revealed content pushing the man down into place.
    tl.fromTo(
      q("[data-hero-fig]"),
      { scale: 1.42, yPercent: 4, opacity: 1 },
      { scale: 1, yPercent: 0, opacity: 1, duration: 1.7, ease: "power3.out" },
      0
    );
    // Nav fades in with the figure.
    tl.fromTo(q("[data-hero-nav]"), { opacity: 0 }, { opacity: 1, duration: 0.8 }, 0.2);
    // 2 — after a beat on the photo, the headline reveals (typewriter stagger)
    //     while the figure is still settling, so the copy appears to push it down.
    tl.fromTo(
      q("[data-hero-word]"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: "power2.out" },
      0.85
    );
    // 3 — buttons, then the intro block, slide up last.
    tl.fromTo(
      q("[data-hero-float]"),
      { opacity: 0, y: 34 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.14, ease: "power2.out" },
      1.25
    );
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
              {leftNav.map((n) =>
                megaMenus[n.label] ? (
                  <MegaMenu key={n.label} label={n.label} href={n.href} config={megaMenus[n.label]} />
                ) : (
                  <Link key={n.label} href={n.href} className={styles.navLink}>
                    {n.label}
                  </Link>
                )
              )}
            </div>

            {/* The notch itself expands: on hover the dark tab widens and drops
                open into the business-card panel (name, what we do, founder and
                contacts), keeping PROLINK as its header. */}
            <div className={styles.logoDock}>
              <div className={styles.logoNotch} role="group" aria-label={`${company.legalName} details`}>
                <Link href="/" className={styles.logoBrand} aria-label={`${brand.name} home`}>
                  <Image
                    src="/images/prolink-emblem.png"
                    alt=""
                    width={24}
                    height={30}
                    className={styles.logoEmblem}
                    priority
                  />
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
            src="/images/hero/person.png"
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
              <span>
                <Image
                  src="/images/hero/avatar-healthcare.jpg"
                  alt="Healthcare Uniforms"
                  width={48}
                  height={48}
                  className={styles.dotImg}
                />
              </span>
              <span>
                <Image
                  src="/images/hero/avatar-corporate.jpg"
                  alt="Corporate Formalwear"
                  width={48}
                  height={48}
                  className={styles.dotImg}
                />
              </span>
              <span>
                <Image
                  src="/images/hero/avatar-workforce.jpg"
                  alt="Apparel and Workforce"
                  width={48}
                  height={48}
                  className={styles.dotImg}
                />
              </span>
            </div>
            <p>
              From security and healthcare uniforms to corporate formalwear and
              bulk apparel — manufactured to your specification, at any volume,
              with export-grade quality.
            </p>
          </div>

          <Link
            href="/garments"
            className={styles.videoCard}
            aria-label="Browse our garment range"
            data-hero-float
          >
            <Image
              src="/images/hero/rack.jpg"
              alt=""
              fill
              sizes="(max-width: 48rem) 90vw, 18rem"
              className={styles.videoImg}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
