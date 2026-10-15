import Hero from "@/components/home/Hero";
import ShowcaseTriptych from "@/components/home/ShowcaseTriptych";
import GearDuo from "@/components/home/GearDuo";
import PosterLevelUp from "@/components/home/PosterLevelUp";
import ProductGrid from "@/components/home/ProductGrid";
import PosterThermal from "@/components/home/PosterThermal";

export default function HomePage() {
  return (
    <div className="home">
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Triptych + positioning copy */}
      <ShowcaseTriptych />

      {/* Section 3 — Winter / Summer feature cards */}
      <GearDuo />

      {/* Section 4 — Level Up poster */}
      <PosterLevelUp />

      {/* Section 5 — Product grid */}
      <ProductGrid />

      {/* Section 6 — Thermal poster */}
      <PosterThermal />
    </div>
  );
}
