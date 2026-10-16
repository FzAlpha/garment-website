"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./clone.module.css";
import SlatReveal from "./motion/SlatReveal";
import SplitHeading from "./motion/SplitHeading";
import Reveal from "./motion/Reveal";
import { useEnter } from "./motion/deck/useEnter";
import { addSplit, addAnim, addSlats } from "./motion/deck/enterHelpers";

const CARD_GRAD = "linear-gradient(150deg,#3c4042 0%,#1c1f22 60%,#0c0e10 100%)";

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
          <SplitHeading as="h2" text="Top Workout Gear For Peak Performance!" />
          <Reveal as="p" variant="fade">
            Discover the best of our collection, designed to power your workouts
            all year round
          </Reveal>
        </div>

        <div className={styles.duo}>
          <Link href="/products" className={styles.bigCard}>
            <SlatReveal img={CARD_GRAD} className={styles.cardMedia}>
              <div className={styles.cardInner}>
                <span className={styles.index}>01 / Winter _2025</span>
                <h3>Top Workout Gear For Peak Performance!</h3>
                <span className={styles.pill}>Top Selling Gear</span>
              </div>
            </SlatReveal>
          </Link>

          <Link href="/products" className={styles.bigCard}>
            <SlatReveal img={CARD_GRAD} className={styles.cardMedia}>
              <div className={styles.cardInner}>
                <span className={styles.index}>02 / Summer _2025</span>
                <h3>Latest Styles And Innovations In Workout Gear!</h3>
                <span className={styles.pill}>New Arrival</span>
              </div>
            </SlatReveal>
          </Link>
        </div>
      </div>
    </section>
  );
}
