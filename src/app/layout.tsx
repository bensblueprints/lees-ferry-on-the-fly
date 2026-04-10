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
  title: "Lees Ferry On The Fly | Premium Fly Fishing Guides - Arizona",
  description:
    "Experience world-class fly fishing at Lees Ferry, Arizona. Expert guides, trophy rainbow trout, and the legendary Colorado River below Glen Canyon Dam.",
  keywords:
    "Lees Ferry, fly fishing, Arizona, Colorado River, rainbow trout, fishing guide, Glen Canyon Dam",
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
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
