"use client";

/* Continuous dual-row background marquee (spec §4 & §6): giant low-opacity
   outline text scrolling horizontally, each row in the opposite direction. */

import { useEffect, useRef } from "react";
import { gsap } from "./gsapSetup";
import styles from "./Marquee.module.css";

export default function Marquee({
  rows,
  className,
}: {
  rows: { text: string; dir?: 1 | -1; speed?: number }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      el.querySelectorAll<HTMLElement>(`.${styles.track}`).forEach((track) => {
        const dir = Number(track.dataset.dir) || 1;
        const speed = Number(track.dataset.speed) || 28;
        // Track holds the text twice; shifting by -50% loops seamlessly.
        gsap.set(track, { xPercent: dir < 0 ? -50 : 0 });
        gsap.to(track, {
          xPercent: dir < 0 ? 0 : -50,
          duration: speed,
          ease: "none",
          repeat: -1,
        });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className={`${styles.marquee} ${className ?? ""}`} aria-hidden="true">
      {rows.map((row, i) => (
        <div
          key={i}
          className={styles.track}
          data-dir={row.dir ?? 1}
          data-speed={row.speed ?? 28}
        >
          <span>{row.text}&nbsp;</span>
          <span>{row.text}&nbsp;</span>
        </div>
      ))}
    </div>
  );
}
