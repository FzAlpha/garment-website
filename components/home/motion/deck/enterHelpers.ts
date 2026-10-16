/* Reusable builders that add common reveals to a section's entrance timeline.
   They select by data-attribute within the section root, so they work regardless
   of CSS-module class hashing. */

import { EASE } from "../gsapSetup";

type TL = gsap.core.Timeline;

const sel = <T extends Element>(root: HTMLElement, q: string) =>
  Array.from(root.querySelectorAll<T>(q));

/** Staggered character reveal for every [data-split] heading in the section. */
export function addSplit(tl: TL, root: HTMLElement, at: gsap.Position = 0) {
  const chars = sel(root, "[data-char]");
  if (chars.length)
    tl.fromTo(
      chars,
      { opacity: 0, yPercent: 60 },
      { opacity: 1, yPercent: 0, duration: 0.45, ease: EASE, stagger: 0.018 },
      at
    );
}

/** Venetian-blind strips (scaleY 0→1) then the overlaid card content. */
export function addSlats(tl: TL, root: HTMLElement, at: gsap.Position = 0) {
  const strips = sel(root, "[data-strip]");
  const content = sel(root, "[data-slat-content]");
  if (strips.length)
    tl.fromTo(
      strips,
      { scaleY: 0 },
      { scaleY: 1, duration: 0.55, ease: EASE, stagger: { each: 0.02, from: "end" } },
      at
    );
  if (content.length)
    tl.fromTo(
      content,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.5, ease: EASE, stagger: 0.1 },
      "-=0.3"
    );
}

/** data-anim reveals: rise (y+fade), fade, pop (scale+fade). */
export function addAnim(
  tl: TL,
  root: HTMLElement,
  variant: "rise" | "fade" | "pop",
  at: gsap.Position = 0,
  stagger = 0.1
) {
  const items = sel(root, `[data-anim="${variant}"]`);
  if (!items.length) return;
  const from =
    variant === "rise"
      ? { opacity: 0, y: 40 }
      : variant === "pop"
        ? { opacity: 0, scale: 0.9 }
        : { opacity: 0 };
  tl.fromTo(
    items,
    from,
    { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: EASE, stagger },
    at
  );
}
