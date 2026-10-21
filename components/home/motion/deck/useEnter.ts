"use client";

/* Section entrance timelines for the slide deck. Each section builds a PAUSED
   timeline (its "from" state applied immediately, so off-screen slides sit
   hidden) and plays it from the start whenever the slide becomes active —
   matching the spec's "on section enter, trigger the timeline from the
   beginning". Under reduced motion nothing is built and content stays visible. */

import { useEffect, useLayoutEffect, useRef, type RefObject } from "react";
import { gsap, EASE, ScrollTrigger } from "../gsapSetup";
import { useSlide } from "./SlideContext";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Build = (tl: gsap.core.Timeline, root: HTMLElement) => void;

export function useEnter(rootRef: RefObject<HTMLElement | null>, build: Build) {
  const { active, reduced, scroll } = useSlide();
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    if (reduced || !root) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: EASE } });
      build(tl, root);
      tl.pause(0);
      tlRef.current = tl;
      // Scroll-reveal mode (mobile/tablet, native scroll): a ScrollTrigger plays
      // the entrance as the section scrolls in — and immediately for sections
      // already in view at load (e.g. the hero), via the onEnter toggle action.
      if (scroll) {
        ScrollTrigger.create({
          trigger: root,
          start: "top 80%",
          animation: tl,
          toggleActions: "play none none none",
        });
      }
    }, root);
    return () => {
      ctx.revert();
      tlRef.current = null;
    };
    // build is stable per render; deps intentionally limited to mode flags.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, scroll]);

  useEffect(() => {
    // In scroll mode the ScrollTrigger owns playback; the deck's active index
    // does not apply.
    if (scroll) return;
    const tl = tlRef.current;
    if (!tl) return;
    if (active) tl.restart();
    else tl.pause(0);
  }, [active, scroll]);
}
