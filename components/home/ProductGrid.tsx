"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./clone.module.css";
import SplitHeading from "./motion/SplitHeading";
import Reveal from "./motion/Reveal";
import { useEnter } from "./motion/deck/useEnter";
import { addSplit, addAnim } from "./motion/deck/enterHelpers";
import { bg, home } from "@/lib/media";

const Arrow = () => (
  <svg className={styles.arrow} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const Heart = () => (
  <span className={styles.heart} aria-hidden="true">
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20s-7-4.6-9.3-8.3C1 8.9 2.3 5.8 5.3 5.4c1.8-.2 3.3.9 3.7 2 .4-1.1 1.9-2.2 3.7-2 3 .4 4.3 3.5 2.6 6.3C19 15.4 12 20 12 20z" />
    </svg>
  </span>
);

const Label = () => (
  <span className={styles.label}>
    <span>
      <b>ASRV x Equinox Lycra</b>
      <small>USD 116.00</small>
    </span>
    <Arrow />
  </span>
);

export default function ProductGrid() {
  const root = useRef<HTMLElement>(null);
  const row1 = [0, 1, 2, 3];
  const row2 = [4, 5, 6, 7];

  useEnter(root, (tl, r) => {
    addSplit(tl, r, 0);
    addAnim(tl, r, "rise", 0.15, 0.07); // 8-card left→right wave
    addAnim(tl, r, "fade", ">-0.1");
  });

  return (
    <section className={styles.wrap} data-fit="panel" ref={root}>
      <div className={styles.inner}>
        <SplitHeading
          as="h2"
          text="Fresh Fits For Your Next Workout!"
          className={styles.gridHead}
        />

        <div className={styles.grid} data-grid>
          {row1.map((i) => (
            <Link key={i} href="/products" className={styles.product} data-anim="rise">
              <span
                className={styles.media}
                aria-hidden="true"
                style={{ backgroundImage: bg(home.products[i], 500) }}
              />
              <Label />
            </Link>
          ))}
          {row2.map((i) => (
            <Link key={i} href="/products" className={styles.product} data-anim="rise">
              <span
                className={styles.media}
                aria-hidden="true"
                style={{ backgroundImage: bg(home.products[i], 500) }}
              />
              <span className={styles.tag}>
                <span className={styles.pill}>Winter</span>
                <Heart />
              </span>
              <Label />
            </Link>
          ))}
        </div>

        <Reveal className={styles.seeAll} variant="fade">
          <Link href="/products" className="btn">
            See All Brands
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
