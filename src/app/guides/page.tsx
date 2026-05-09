import type { Metadata } from "next";
import GuidesContent from "./guides-content";

export const metadata: Metadata = {
  title: "Your Guide - Captain Dave Trimble",
  description:
    "Meet Captain Dave Trimble, USCG Licensed Captain and owner of Lees Ferry On The Fly. Guiding on the Colorado River since 1999. Fly fishing and spin fishing expert.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Your Guide - Captain Dave Trimble | Lees Ferry On The Fly",
    description:
      "Meet Captain Dave Trimble, USCG Licensed Captain guiding on the Colorado River since 1999.",
  },
};

export default function GuidesPage() {
  return <GuidesContent />;
}
