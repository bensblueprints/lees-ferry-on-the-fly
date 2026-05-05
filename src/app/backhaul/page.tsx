import type { Metadata } from "next";
import Backhaul from "../components/Backhaul";

export const metadata: Metadata = {
  title: "Backhaul & Water Taxi Shuttle",
  description:
    "Jet boat kayak & paddleboard shuttle through Horseshoe Bend on the Colorado River. $80 per person. Drop-off up to 15 miles upstream. Kayak rentals from $40.",
  openGraph: {
    title: "Backhaul & Water Taxi Shuttle | Lees Ferry On The Fly",
    description:
      "Jet boat kayak & paddleboard shuttle through Horseshoe Bend. $80 per person. Drop-off up to 15 miles upstream.",
  },
};

export default function BackhaulPage() {
  return (
    <main>
      <Backhaul />
    </main>
  );
}
