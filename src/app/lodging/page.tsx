import type { Metadata } from "next";
import LodgingContent from "./lodging-content";

export const metadata: Metadata = {
  title: "Lodging & Dining",
  description:
    "Where to stay and eat near Lees Ferry, Arizona. Top picks include Vermilion Cliffs Lodge and Historic Marble Canyon Lodge. Restaurants, hotels, and camping options.",
  openGraph: {
    title: "Lodging & Dining | Lees Ferry On The Fly",
    description:
      "Where to stay and eat near Lees Ferry, Arizona. Hotels, lodges, and restaurants in Marble Canyon and Page.",
  },
};

export default function LodgingPage() {
  return <LodgingContent />;
}
