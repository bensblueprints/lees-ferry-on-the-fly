import type { Metadata } from "next";
import EntriesContent from "./entries-content";

export const metadata: Metadata = {
  title: "Entries & Reports",
  description:
    "Fishing reports, trip stories, and news from Lees Ferry On The Fly. Stay up to date with conditions, catches, and stories from the Colorado River.",
  openGraph: {
    title: "Entries & Reports | Lees Ferry On The Fly",
    description:
      "Fishing reports, trip stories, and news from Lees Ferry On The Fly.",
  },
};

export default function EntriesPage() {
  return <EntriesContent />;
}
