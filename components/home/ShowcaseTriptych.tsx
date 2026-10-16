"use client";

import { useRef } from "react";
import styles from "./clone.module.css";
import SlatReveal from "./motion/SlatReveal";
import Reveal from "./motion/Reveal";
import { useEnter } from "./motion/deck/useEnter";
import { addSlats, addAnim } from "./motion/deck/enterHelpers";
import { EASE } from "./motion/gsapSetup";
import { bg, home } from "@/lib/media";

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
        Garments
      </span>
      <div className={styles.inner}>
        <div className={styles.triptych}>
          <div className={styles.triLeft}>
            <SlatReveal img={bg(home.triptych[0], 700)} className={styles.photo} />
            <Reveal as="p" variant="rise" className={styles.copy}>
              Specification-accurate garments — cut, stitched and finished under
              one roof in India.
            </Reveal>
          </div>

          <div className={styles.triCenter}>
            <SlatReveal img={bg(home.triptych[1], 800)} className={styles.photo} />
          </div>

          <div className={styles.triRight}>
            <Reveal as="p" variant="rise" className={styles.copy}>
              From institutional uniforms to premium knits, every order is built
              to your tech pack with consistent quality at scale.
            </Reveal>
            <SlatReveal img={bg(home.triptych[2], 700)} className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
}
