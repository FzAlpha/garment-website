"use client";

import { useRef } from "react";
import { brand } from "@/lib/tokens";
import styles from "./clone.module.css";
import Marquee from "./motion/Marquee";
import Reveal from "./motion/Reveal";
import { useEnter } from "./motion/deck/useEnter";
import { addAnim } from "./motion/deck/enterHelpers";
import { bg, home } from "@/lib/media";

export default function PosterLevelUp() {
  const root = useRef<HTMLElement>(null);

  useEnter(root, (tl, r) => {
    addAnim(tl, r, "pop", 0.1);
  });

  return (
    <section className={styles.wrap} data-fit="panel" ref={root}>
      <Marquee
        rows={[
          { text: "Garment Manufacturing", dir: 1, speed: 30 },
          { text: "Uniform Solutions", dir: -1, speed: 34 },
        ]}
      />
      <div className={styles.inner}>
        <Reveal variant="pop" className={styles.poster}>
          <span
            className={styles.posterImg}
            aria-hidden="true"
            style={{ backgroundImage: bg(home.poster, 800) }}
          />
          <div className={styles.meta}>
            <span className={styles.brandTag}>{brand.name}</span>
            <span className={styles.kicker}>End To End</span>
            <h2>From Tech Pack To Dispatch</h2>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
