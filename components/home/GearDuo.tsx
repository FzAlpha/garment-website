"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./clone.module.css";
import SlatReveal from "./motion/SlatReveal";
import SplitHeading from "./motion/SplitHeading";
import Reveal from "./motion/Reveal";
import { useEnter } from "./motion/deck/useEnter";
import { addSplit, addAnim, addSlats } from "./motion/deck/enterHelpers";
import { bg, home } from "@/lib/media";

export default function GearDuo() {
  const root = useRef<HTMLElement>(null);

  useEnter(root, (tl, r) => {
    addSplit(tl, r, 0);
    addAnim(tl, r, "fade", 0.1);
    addSlats(tl, r, 0.15); // reveal cards in parallel with the heading
  });

  return (
    <section className={styles.wrap} data-fit="panel" ref={root}>
      <div className={styles.inner}>
        <div className={styles.duoHead}>
          <SplitHeading as="h2" text="Garments Engineered For Every Sector!" />
          <Reveal as="p" variant="fade">
            Explore our core manufacturing lines — built for institutions,
            corporates and brands across India and beyond.
          </Reveal>
        </div>

        <div className={styles.duo}>
          <Link href="/uniforms" className={styles.bigCard}>
            <SlatReveal img={'url("/images/showcase/uniforms-card.jpg")'} className={styles.cardMedia}>
              <div className={styles.cardInner}>
                <span className={styles.index}>01 / Uniforms</span>
                <h3>Institutional &amp; Corporate Uniform Programs</h3>
                <span className={styles.pill}>Uniform Solutions</span>
              </div>
            </SlatReveal>
          </Link>

          <Link href="/garments" className={styles.bigCard}>
            <SlatReveal img={bg(home.duo[1], 800)} className={styles.cardMedia}>
              <div className={styles.cardInner}>
                <span className={styles.index}>02 / Garments</span>
                <h3>Premium Formals, Knits &amp; Custom Apparel</h3>
                <span className={styles.pill}>Garment Ranges</span>
              </div>
            </SlatReveal>
          </Link>
        </div>
      </div>
    </section>
  );
}
