"use client";

/* Section entrance timelines for the slide deck. Each section builds a PAUSED
   timeline (its "from" state applied immediately, so off-screen slides sit
   hidden) and plays it from the start whenever the slide becomes active —
   matching the spec's "on section enter, trigger the timeline from the
   beginning". Under reduced motion nothing is built and content stays visible. */

import { useEffect, useLayoutEffect, useRef, type RefObject } from "react";
import { gsap, EASE } from "../gsapSetup";
import { useSlide } from "./SlideContext";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Build = (tl: gsap.core.Timeline, root: HTMLElement) => void;

export function useEnter(rootRef: RefObject<HTMLElement | null>, build: Build) {
  const { active, reduced } = useSlide();
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    if (reduced || !root) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: EASE } });
      build(tl, root);
      tl.pause(0);
      tlRef.current = tl;
    }, root);
    return () => {
      ctx.revert();
      tlRef.current = null;
    };
    // build is stable per render; deps intentionally limited to `reduced`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;
    if (active) tl.restart();
    else tl.pause(0);
  }, [active]);
}
