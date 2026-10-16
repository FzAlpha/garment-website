"use client";

import { useRef } from "react";
import styles from "./clone.module.css";
import SlatReveal from "./motion/SlatReveal";
import Reveal from "./motion/Reveal";
import { useEnter } from "./motion/deck/useEnter";
import { addSlats, addAnim } from "./motion/deck/enterHelpers";
import { EASE } from "./motion/gsapSetup";

const GRAD = "linear-gradient(160deg,#44484c 0%,#202326 55%,#0f1113 100%)";

export default function ShowcaseTriptych() {
  const root = useRef<HTMLElement>(null);

  useEnter(root, (tl, r) => {
    const ghost = r.querySelector("[data-ghost]");
    if (ghost) tl.fromTo(ghost, { opacity: 0, x: "4rem" }, { opacity: 0.9, x: 0, duration: 0.9, ease: EASE }, 0);
    addSlats(tl, r, 0.1);
    addAnim(tl, r, "rise", "-=0.2", 0.15);
  });

  return (
    <section className={styles.wrap} data-fit="panel" ref={root}>
      <span className={styles.ghost} aria-hidden="true" data-ghost>
        Workout
      </span>
      <div className={styles.inner}>
        <div className={styles.triptych}>
          <div className={styles.triLeft}>
            <SlatReveal img={GRAD} className={styles.photo} />
            <Reveal as="p" variant="rise" className={styles.copy}>
              Performance-driven gear for men—built for summer heat and winter
              cold.
            </Reveal>
          </div>

          <div className={styles.triCenter}>
            <SlatReveal img={GRAD} className={styles.photo} />
          </div>

          <div className={styles.triRight}>
            <Reveal as="p" variant="rise" className={styles.copy}>
              Stay warm, stay fit. Our winter workout wear blends insulation with
              flexibility to keep you going in the toughest conditions
            </Reveal>
            <SlatReveal img={GRAD} className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
}
