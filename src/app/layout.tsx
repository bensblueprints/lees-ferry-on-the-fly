import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Lees Ferry On The Fly | Kayak & Paddleboard Shuttles - Horseshoe Bend, AZ",
  description:
    "Jet boat backhaul shuttles through Horseshoe Bend on the Colorado River. Kayak & paddleboard rentals, guided fishing. Book your adventure with Captain Dave Trimble.",
  keywords:
    "Horseshoe Bend, kayak shuttle, paddleboard, backhaul, Lees Ferry, Colorado River, jet boat, Arizona, Glen Canyon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
