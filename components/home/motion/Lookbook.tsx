"use client";

/* Section 6 — pinned interactive lookbook. The deck "pins" this section: each
   scroll step advances innerStep, cycling the centre card through 4 outfits
   (cross-fade + subtle vertical slide) before the deck is allowed to move on. */

import { useEffect, useRef } from "react";
import { gsap, EASE } from "./gsapSetup";
import { useSlide } from "./deck/SlideContext";
import { bg, home } from "@/lib/media";
import Marquee from "./Marquee";
import styles from "./Lookbook.module.css";

const OUTFITS = [
  { tag: "Liner Short & Inner Thermal", meta: "Fall / Winter 2024", img: home.lookbook[0] },
  { tag: "Compression Base Layer", meta: "All-Season Training", img: home.lookbook[1] },
  { tag: "Shell & Wind Jacket", meta: "Cold Weather Kit", img: home.lookbook[2] },
  { tag: "Performance Tee & Short", meta: "Summer 2025", img: home.lookbook[3] },
];

export default function Lookbook() {
  const root = useRef<HTMLDivElement>(null);
  const { active, innerStep, reduced } = useSlide();

  useEffect(() => {
    if (reduced || !root.current) return;
    const layers = root.current.querySelectorAll<HTMLElement>("[data-outfit]");
    layers.forEach((layer, i) => {
      const on = active && i === innerStep;
      gsap.to(layer, {
        opacity: on ? 1 : 0,
        y: on ? 0 : 15,
        duration: 0.5,
        ease: EASE,
        overwrite: "auto",
      });
    });
  }, [active, innerStep, reduced]);

  return (
    <section ref={root} className={styles.section} data-fit="panel">
      <Marquee
        rows={[
          { text: "Fresh Fits For Your", dir: 1, speed: 30 },
          { text: "Your Next Workout", dir: -1, speed: 34 },
        ]}
      />
      <div className={styles.inner}>
        <div className={styles.card}>
          {OUTFITS.map((o, i) => (
            <div
              key={i}
              className={styles.outfit}
              data-outfit={i}
              style={{ backgroundImage: bg(o.img, 700) }}
            >
              <div className={styles.meta}>
                <span className={styles.kicker}>{o.tag}</span>
                <div className={styles.rows}>
                  <span>{o.meta}</span>
                  <span>
                    {String(i + 1).padStart(2, "0")} / {String(OUTFITS.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.dots} aria-hidden="true">
          {OUTFITS.map((_, i) => (
            <span key={i} data-dot className={i === innerStep && active ? styles.dotOn : ""} />
          ))}
        </div>
      </div>
    </section>
  );
}
