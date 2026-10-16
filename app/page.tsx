import Deck from "@/components/home/motion/deck/Deck";
import Hero from "@/components/home/Hero";
import ShowcaseTriptych from "@/components/home/ShowcaseTriptych";
import GearDuo from "@/components/home/GearDuo";
import PosterLevelUp from "@/components/home/PosterLevelUp";
import ProductGrid from "@/components/home/ProductGrid";
import Lookbook from "@/components/home/motion/Lookbook";

export default function HomePage() {
  return (
    <Deck>
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
    </Deck>
  );
}
