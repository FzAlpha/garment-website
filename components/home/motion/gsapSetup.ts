/* Single GSAP instance + plugin registration, shared by every home motion
   component. Importing this module registers ScrollTrigger + CustomEase and
   defines the project easing once, so the exact cubic-bezier from the spec is
   available by name ("prolink") regardless of effect order. */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { CustomEase } from "gsap/CustomEase";

/** Global easing — cubic-bezier(0.22, 1, 0.36, 1) from the animation spec. */
export const EASE = "prolink";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Observer, CustomEase);
  // Idempotent: re-creating simply overwrites with the same curve.
  CustomEase.create(EASE, "M0,0 C0.22,1 0.36,1 1,1");
}

export { gsap, ScrollTrigger, Observer };
