import type { Metadata } from "next";
import BoatGearContent from "./boat-gear-content";

export const metadata: Metadata = {
  title: "Our Boat & Gear",
  description:
    "Custom Koffler jet boat, Sage & Echo fly rods, Galvan fly reels, and custom hand-tied flies. Professional-grade equipment for every trip on the Colorado River.",
  alternates: { canonical: "/boat-gear" },
  openGraph: {
    title: "Our Boat & Gear | Lees Ferry On The Fly",
    description:
      "Custom Koffler jet boat, Sage & Echo fly rods, Galvan fly reels, and custom hand-tied flies.",
  },
};

export default function BoatGearPage() {
  return <BoatGearContent />;
}
