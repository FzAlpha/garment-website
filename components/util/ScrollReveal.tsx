"use client";

import { useEffect } from "react";

/**
 * Site-wide scroll-reveal. One IntersectionObserver eases elements in as they
 * enter the viewport. Progressive enhancement: the `reveal-ready` gate class is
 * added pre-paint by an inline script in the layout, so without JS (or with
 * reduced-motion) all content stays visible. Mark elements with:
 *   - `data-reveal`            → the element itself glides in
 *   - `data-reveal-group`      → its direct children glide in, staggered
 */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // No animation path: reveal everything immediately.
    if (reduce || !("IntersectionObserver" in window)) {
      root.classList.remove("reveal-ready");
      document
        .querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group] > *")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    const armed = new WeakSet<Element>();

    const arm = (el: HTMLElement, delay = 0) => {
      if (armed.has(el)) return;
      armed.add(el);
      if (delay) el.style.animationDelay = `${delay}ms`;
      io.observe(el);
    };

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => arm(el));
      document
        .querySelectorAll<HTMLElement>("[data-reveal-group]")
        .forEach((group) => {
          const kids = Array.from(group.children) as HTMLElement[];
          kids.forEach((kid, i) => arm(kid, Math.min(i, 8) * 85));
        });
    };

    scan();

    // Catch content mounted later (e.g. catalog filters re-rendering cards).
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
