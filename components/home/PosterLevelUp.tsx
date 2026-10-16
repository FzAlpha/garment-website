"use client";

import { useRef } from "react";
import { brand } from "@/lib/tokens";
import styles from "./clone.module.css";
import Marquee from "./motion/Marquee";
import Reveal from "./motion/Reveal";
import { useEnter } from "./motion/deck/useEnter";
import { addAnim } from "./motion/deck/enterHelpers";

export default function PosterLevelUp() {
  const root = useRef<HTMLElement>(null);

  useEnter(root, (tl, r) => {
    addAnim(tl, r, "pop", 0.1);
  });

  return (
    <section className={styles.wrap} data-fit="panel" ref={root}>
      <Marquee
        rows={[
          { text: "Fresh Fits For Your", dir: 1, speed: 30 },
          { text: "Your Next Workout", dir: -1, speed: 34 },
        ]}
      />
      <div className={styles.inner}>
        <Reveal variant="pop" className={styles.poster}>
          <div className={styles.meta}>
            <span className={styles.brandTag}>{brand.name}</span>
            <span className={styles.kicker}>Level Up</span>
            <h2>With The Latest In Workout Wear</h2>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
