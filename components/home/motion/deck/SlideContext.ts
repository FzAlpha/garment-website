"use client";

import { createContext, useContext } from "react";

export type SlideState = {
  /** Position of this slide in the deck (0-based). */
  index: number;
  /** True while this slide is the active (on-screen) one. */
  active: boolean;
  /** Current in-section step (used by the pinned lookbook); 0 otherwise. */
  innerStep: number;
  /** True when motion is disabled — the deck falls back to normal flow. */
  reduced: boolean;
};

export const SlideContext = createContext<SlideState>({
  index: 0,
  active: true,
  innerStep: 0,
  reduced: true,
});

export const useSlide = () => useContext(SlideContext);
