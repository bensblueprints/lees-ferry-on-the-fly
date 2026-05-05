import type { Metadata } from "next";
import BookingCTA from "../components/BookingCTA";
import HowItWorks from "../components/HowItWorks";

export const metadata: Metadata = {
  title: "Book Your Trip",
  description:
    "Book a guided fishing trip or backhaul shuttle on the Colorado River at Lees Ferry. Call Captain Dave Trimble at (928) 380-4504 or email leesferryonthefly@gmail.com.",
  openGraph: {
    title: "Book Your Trip | Lees Ferry On The Fly",
    description:
      "Book a guided fishing trip or backhaul shuttle on the Colorado River at Lees Ferry.",
  },
};

export default function BookingPage() {
  return (
    <main className="pt-[76px]">
      <BookingCTA />
      <div className="cinema-bar" />
      <HowItWorks />
    </main>
  );
}
