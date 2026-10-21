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
  { tag: "Security & Protective Uniforms", meta: "Institutional Programs", img: "/images/showcase/lb-security.jpg" },
  { tag: "Corporate & Executive Formalwear", meta: "Business Apparel", img: "/images/showcase/lb-business.jpg" },
  { tag: "Healthcare & Hospitality Wear", meta: "Service Sectors", img: "/images/showcase/lb-healthcare.jpg" },
  { tag: "Custom Knits & Textiles", meta: "Made To Specification", img: home.lookbook[3] },
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
          { text: "Garment Manufacturing", dir: 1, speed: 30 },
          { text: "Uniform Solutions", dir: -1, speed: 34 },
        ]}
      />
      <div className={styles.inner}>
        <div className={styles.card}>
          {OUTFITS.map((o, i) => (
            <div
              key={i}
              className={styles.outfit}
              data-outfit={i}
              style={{ backgroundImage: o.img.startsWith("/") ? `url("${o.img}")` : bg(o.img, 700) }}
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
