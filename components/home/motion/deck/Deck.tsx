"use client";

/* Full-page slide-deck controller (fullPage.js / GSAP Observer style). One wheel
   flick, swipe or arrow press advances exactly one section; a cooldown lock
   prevents skipping. The active section's entrance timeline fires on enter (see
   useEnter). The final section is "pinned": scrolling cycles its inner steps
   (lookbook outfits) before the deck moves on.

   Under prefers-reduced-motion the deck disengages: sections render in normal
   document flow and scroll natively — never a hard scroll-lock. */

import {
  Children,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { gsap, Observer, EASE } from "../gsapSetup";
import { SlideContext } from "./SlideContext";

const DURATION = 0.9;
const COOLDOWN = 1000; // ms

/** Inner steps per section (0 = none). The last section cycles 4 outfits → 3 advances. */
const innerMaxFor = (index: number, count: number) => (index === count - 1 ? 3 : 0);

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Deck({ children }: { children: ReactNode }) {
  const slides = Children.toArray(children);
  const count = slides.length;

  const [active, setActive] = useState(0);
  const [inner, setInner] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [engaged, setEngaged] = useState(false);

  const activeRef = useRef(0);
  const innerRef = useRef(0);
  const animating = useRef(false);
  const slideEls = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP owns the slide transforms from the first frame (no CSS transform to
  // conflict with): active slide at 0, the rest stacked just below.
  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
    setEngaged(true);
    slideEls.current.forEach((el, i) => {
      if (el) gsap.set(el, { yPercent: i === 0 ? 0 : 100 });
    });
  }, []);

  useEffect(() => {
    if (!engaged) return;

    const unlock = () => {
      window.setTimeout(
        () => {
          animating.current = false;
        },
        Math.max(COOLDOWN - DURATION * 1000, 0)
      );
    };

    const transition = (from: number, to: number, dir: 1 | -1) => {
      animating.current = true;
      activeRef.current = to;
      innerRef.current = 0;
      setActive(to);
      setInner(0);

      const fromEl = slideEls.current[from];
      const toEl = slideEls.current[to];
      if (fromEl) gsap.to(fromEl, { yPercent: dir > 0 ? -100 : 100, duration: DURATION, ease: EASE, overwrite: true });
      if (toEl) {
        gsap.set(toEl, { yPercent: dir > 0 ? 100 : -100 });
        gsap.to(toEl, { yPercent: 0, duration: DURATION, ease: EASE, overwrite: true, onComplete: unlock });
      } else unlock();
    };

    const stepInner = (next: number) => {
      animating.current = true;
      innerRef.current = next;
      setInner(next);
      window.setTimeout(() => {
        animating.current = false;
      }, 700);
    };

    const go = (dir: 1 | -1) => {
      if (animating.current) return;
      const a = activeRef.current;
      const i = innerRef.current;
      const maxInner = innerMaxFor(a, count);
      if (dir > 0) {
        if (i < maxInner) stepInner(i + 1);
        else if (a < count - 1) transition(a, a + 1, 1);
      } else {
        if (i > 0) stepInner(i - 1);
        else if (a > 0) transition(a, a - 1, -1);
      }
    };

    const observer = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      tolerance: 10,
      preventDefault: true,
      onDown: () => go(1), // scroll down → next section
      onUp: () => go(-1), // scroll up → previous section
    });

    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " ", "Spacebar"].includes(e.key)) {
        e.preventDefault();
        go(1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      observer.kill();
      window.removeEventListener("keydown", onKey);
    };
  }, [engaged, count]);

  return (
    <div className={`deck-root${engaged ? " deck-engaged" : ""}`}>
      {slides.map((child, i) => (
        <div
          key={i}
          className="deck-slide"
          ref={(el) => {
            slideEls.current[i] = el;
          }}
        >
          <SlideContext.Provider
            value={{
              index: i,
              active: reduced ? true : i === active,
              innerStep: i === active ? inner : 0,
              reduced,
            }}
          >
            {child}
          </SlideContext.Provider>
        </div>
      ))}
    </div>
  );
}
