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
    "Lees Ferry On The Fly | Guided Fishing & Kayak Shuttle - Colorado River, AZ",
  description:
    "Guided fly fishing & spin fishing trips on the Colorado River. Jet boat kayak & paddleboard shuttle through Horseshoe Bend. Book with Captain Dave Trimble at (928) 380-4504.",
  keywords:
    "Lees Ferry, fishing guide, fly fishing, spin fishing, Colorado River, Horseshoe Bend, kayak shuttle, backhaul, jet boat, Arizona, trout fishing, Marble Canyon",
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
