"use client";

import { useState } from "react";
import Deck from "@/components/home/motion/deck/Deck";
import Hero from "@/components/home/Hero";
import ShowcaseTriptych from "@/components/home/ShowcaseTriptych";
import GearDuo from "@/components/home/GearDuo";
import PosterLevelUp from "@/components/home/PosterLevelUp";
import ProductGrid from "@/components/home/ProductGrid";
import Lookbook from "@/components/home/motion/Lookbook";
import Footer from "@/components/layout/Footer";
import IslandNav from "@/components/home/IslandNav";

export default function HomePage() {
  // On slide 0 (the hero) the nav lives in the hero's docked top notch; once the
  // deck advances, the floating island takes over.
  const [active, setActive] = useState(0);

  return (
    <>
      <IslandNav hidden={active === 0} />
      {/* Slide 5 (the lookbook) cycles its 4 outfits = 3 inner steps; the footer
          slide is terminal with none. */}
      <Deck innerSteps={[0, 0, 0, 0, 0, 3, 0]} onActive={setActive}>
        {/* Page 1 — Hero */}
        <Hero />
        {/* Page 2 — Triptych + positioning copy */}
        <ShowcaseTriptych />
        {/* Page 3 — Winter / Summer feature cards */}
        <GearDuo />
        {/* Page 4 — Level Up poster */}
        <PosterLevelUp />
        {/* Page 5 — Product grid */}
        <ProductGrid />
        {/* Page 6 — Interactive lookbook */}
        <Lookbook />
        {/* Page 7 — Footer */}
        <Footer showOnHome />
      </Deck>
    </>
  );
}
