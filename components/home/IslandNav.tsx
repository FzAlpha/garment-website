"use client";

/* Dynamic-island-style floating nav for the homepage. Fixed to the top centre
   so it follows through the deck; collapsed it shows the PROLINK notch, and on
   hover / keyboard focus it expands horizontally to reveal the nav links. */

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { brand } from "@/lib/tokens";
import styles from "./IslandNav.module.css";

const navItems = [
  { label: "Garments", href: "/garments" },
  { label: "Uniforms", href: "/uniforms" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
];

export default function IslandNav({ hidden = false }: { hidden?: boolean }) {
  const linksRef = useRef<HTMLElement>(null);
  // Measured natural width of the link row. Expanding to exactly this avoids
  // both clipping the last item and the "dead travel" snap from overshooting.
  const [expandedW, setExpandedW] = useState<number>();

  useEffect(() => {
    const el = linksRef.current;
    if (!el) return;
    // scrollWidth reports the full content width even while max-width:0 clips it.
    const measure = () => setExpandedW(el.scrollWidth);
    measure();
    window.addEventListener("resize", measure);
    // Re-measure once web fonts load — glyph metrics shift the row width.
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div
      className={`${styles.wrap} ${hidden ? styles.hidden : ""}`}
      aria-hidden={hidden}
      style={
        expandedW ? ({ "--links-w": `${expandedW}px` } as CSSProperties) : undefined
      }
    >
      <div className={styles.island} tabIndex={0}>
        <Link href="/" className={styles.brand} aria-label={`${brand.name} home`}>
          {brand.name}
        </Link>
        <nav ref={linksRef} className={styles.links} aria-label="Primary">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} className={styles.link}>
              {n.label}
            </Link>
          ))}
          <Link href="/quote" className={styles.cta}>
            Get a Quote
          </Link>
        </nav>
      </div>
    </div>
  );
}
