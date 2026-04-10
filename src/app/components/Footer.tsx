"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const links = {
  Services: [
    "Kayak Shuttle",
    "Paddleboard Shuttle",
    "Gear Rentals",
    "Guided Fishing",
  ],
  Info: ["How It Works", "What to Bring", "FAQ", "Cancellation Policy"],
  Connect: ["Instagram", "Facebook", "Google Reviews", "TripAdvisor"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-cool-white/[0.04]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
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
                <span className="text-[9px] tracking-[0.35em] uppercase text-sandstone font-light">
                  On The Fly
                </span>
              </div>
            </div>
            <p className="text-cool-white/35 text-[13px] font-light leading-relaxed max-w-sm mb-6">
              The premier jet boat kayak &amp; paddleboard shuttle service on the
              Colorado River at Lees Ferry, Arizona. Your gateway to Horseshoe
              Bend from the water.
            </p>
            <div className="space-y-2">
              <a href="tel:+19283804504" className="flex items-center gap-2 text-sandstone text-[13px] font-light hover:text-canyon-orange transition-colors">
                <Phone size={13} strokeWidth={1.5} /> (928) 380-4504
              </a>
              <a href="mailto:dave@leesferryonthefly.com" className="flex items-center gap-2 text-cool-white/40 text-[13px] font-light hover:text-sandstone transition-colors">
                <Mail size={13} strokeWidth={1.5} /> dave@leesferryonthefly.com
              </a>
              <span className="flex items-center gap-2 text-cool-white/40 text-[13px] font-light">
                <MapPin size={13} strokeWidth={1.5} /> Marble Canyon, AZ 86036
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[9px] tracking-[0.4em] uppercase text-sandstone mb-5">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-cool-white/30 text-[13px] font-light hover:text-sandstone transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="cinema-bar mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-cool-white/20 text-[11px] font-light">
            &copy; {new Date().getFullYear()} Lees Ferry On The Fly. All rights reserved.
          </span>
          <span className="text-cool-white/20 text-[11px] font-light">
            Dave Trimble &middot; Owner / Captain &middot; Marble Canyon, Arizona
          </span>
        </div>
      </div>
    </footer>
  );
}
