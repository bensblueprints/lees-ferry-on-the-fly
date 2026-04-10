"use client";

import { Fish } from "lucide-react";

const footerLinks = {
  Trips: ["Half Day Wade", "Full Day Float", "Multi-Day Expedition", "Gift Certificates"],
  Information: ["Fishing Report", "What to Bring", "Licensing", "FAQ"],
  Connect: ["Instagram", "Facebook", "YouTube", "Contact Us"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-cream/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-serif text-2xl tracking-wide text-cream">
                Lees Ferry
              </span>
              <span className="block text-[10px] tracking-[0.35em] uppercase text-copper font-light">
                On The Fly
              </span>
            </div>
            <p className="text-mist/50 text-[14px] font-light leading-relaxed max-w-sm mb-8">
              World-class fly fishing guides on the legendary Colorado River at
              Lees Ferry, Arizona. Where trophy trout meet towering canyon walls.
            </p>
            <Fish className="text-copper/30" size={32} strokeWidth={1} />
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] tracking-[0.4em] uppercase text-copper mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-mist/40 text-[14px] font-light hover:text-copper transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="copper-divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-stone text-[12px] font-light">
            &copy; {new Date().getFullYear()} Lees Ferry On The Fly. All rights
            reserved.
          </span>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-stone text-[12px] font-light hover:text-copper transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-stone text-[12px] font-light hover:text-copper transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
