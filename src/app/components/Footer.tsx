"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const links = {
  Services: [
    { label: "Fly Fishing Trips", href: "#services" },
    { label: "Spin Fishing Trips", href: "#services" },
    { label: "Backhaul Shuttle", href: "#backhaul" },
    { label: "Kayak & SUP Rentals", href: "#backhaul" },
  ],
  Info: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "What to Bring", href: "#faq" },
    { label: "FAQ", href: "#faq" },
    { label: "Cancellation Policy", href: "#booking" },
  ],
  Area: [
    { label: "Marble Canyon Lodge", href: "#lodging" },
    { label: "Lodging & Dining", href: "#lodging" },
    { label: "Meet Your Guide", href: "#guide" },
    { label: "Gallery", href: "#gallery" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-cool-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Lees Ferry On The Fly"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
              />
              <div>
                <span className="font-serif text-lg text-cool-white block leading-none">
                  Lees Ferry
                </span>
                <span className="text-xs tracking-[0.18em] uppercase text-sandstone font-light">
                  On The Fly
                </span>
              </div>
            </div>
            <p className="text-cool-white/75 text-base font-light leading-relaxed max-w-sm mb-8">
              Guided fly fishing &amp; spin fishing trips, jet boat kayak &amp;
              paddleboard shuttle service on the Colorado River at Lees Ferry,
              Arizona.
            </p>
            <div className="space-y-3">
              <a href="tel:+19283804504" className="flex items-center gap-3 text-sandstone text-base font-light hover:text-canyon-orange transition-colors">
                <Phone size={14} strokeWidth={1.5} /> (928) 380-4504
              </a>
              <a href="mailto:info@leesferryonthefly.com" className="flex items-center gap-3 text-warm-cream text-lg font-normal hover:text-sandstone transition-colors">
                <Mail size={14} strokeWidth={1.5} /> info@leesferryonthefly.com
              </a>
              <span className="flex items-center gap-3 text-warm-cream text-lg font-normal">
                <MapPin size={14} strokeWidth={1.5} /> Marble Canyon, AZ 86036
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-sandstone mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-warm-cream text-lg font-normal hover:text-sandstone transition-colors duration-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="cinema-bar mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-cool-white/90 text-sm font-light">
            &copy; {new Date().getFullYear()} Lees Ferry On The Fly. All rights reserved.
          </span>
          <span className="text-cool-white/90 text-sm font-light">
            Dave Trimble &middot; Owner / USCG Licensed Captain &middot; Marble Canyon, Arizona
          </span>
        </div>
      </div>
    </footer>
  );
}
