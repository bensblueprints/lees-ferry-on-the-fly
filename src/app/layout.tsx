import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

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
  title: {
    default: "Lees Ferry On The Fly | Guided Fishing & Kayak Shuttle - Colorado River, AZ",
    template: "%s | Lees Ferry On The Fly",
  },
  description:
    "Guided fly fishing & spin fishing trips on the Colorado River. Jet boat kayak & paddleboard shuttle through Horseshoe Bend. Book with Captain Dave Trimble at (928) 380-4504.",
  keywords: [
    "Lees Ferry",
    "fishing guide",
    "fly fishing",
    "spin fishing",
    "Colorado River",
    "Horseshoe Bend",
    "kayak shuttle",
    "backhaul",
    "jet boat",
    "Arizona",
    "trout fishing",
    "Marble Canyon",
    "water taxi",
    "paddleboard",
    "kayak rental",
  ],
  metadataBase: new URL("https://leesferryonthefly.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leesferryonthefly.com",
    siteName: "Lees Ferry On The Fly",
    title: "Lees Ferry On The Fly | Guided Fishing & Kayak Shuttle",
    description:
      "Guided fly fishing & spin fishing trips on the Colorado River. Jet boat kayak & paddleboard shuttle through Horseshoe Bend.",
    images: [
      {
        url: "/images/original/drone-aerial-river.jpg",
        width: 1200,
        height: 630,
        alt: "Colorado River at Lees Ferry - Aerial View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lees Ferry On The Fly | Guided Fishing & Kayak Shuttle",
    description:
      "Guided fly fishing & spin fishing trips on the Colorado River. Jet boat kayak & paddleboard shuttle through Horseshoe Bend.",
    images: ["/images/original/drone-aerial-river.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
  authors: [{ name: "Advanced Marketing", url: "https://advancedmarketing.co" }],
  category: "Travel & Tourism",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lees Ferry On The Fly",
  image: "https://leesferryonthefly.com/images/logo.png",
  url: "https://leesferryonthefly.com",
  telephone: "+1-928-380-4504",
  email: "leesferryonthefly@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lees Ferry Boat Launch",
    addressLocality: "Marble Canyon",
    addressRegion: "AZ",
    postalCode: "86036",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.8679,
    longitude: -111.5833,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card",
  currenciesAccepted: "USD",
  areaServed: {
    "@type": "Place",
    name: "Lees Ferry, Arizona",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fishing & Shuttle Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fly Fishing Guide Trip",
          description: "8-hour guided fly fishing trip on the Colorado River",
        },
        price: "650",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Spin Fishing Guide Trip",
          description: "8-hour guided spin fishing trip on the Colorado River",
        },
        price: "700",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backhaul Water Taxi Shuttle",
          description: "Jet boat shuttle upstream for kayaks and paddleboards",
        },
        price: "80",
        priceCurrency: "USD",
      },
    ],
  },
  founder: {
    "@type": "Person",
    name: "Dave Trimble",
    jobTitle: "Owner / USCG Licensed Captain",
  },
  foundingDate: "1999",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9C9PNSK5R9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9C9PNSK5R9');
          `}
        </Script>
        <div className="grain" />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
