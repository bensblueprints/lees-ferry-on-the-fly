"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services & Rates", href: "#services" },
  { label: "Backhaul", href: "#backhaul" },
  { label: "Gallery", href: "#gallery" },
  { label: "Your Guide", href: "#guide" },
  { label: "Lodging", href: "#lodging" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const nav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-canyon-deep/95 backdrop-blur-xl border-b border-sandstone/10 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex items-center justify-between h-[76px]">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="relative z-10 flex items-center gap-3"
          >
            <Image
              src="/images/logo.png"
              alt="Lees Ferry On The Fly"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-serif text-lg text-cool-white leading-none block">
                Lees Ferry
              </span>
              <span className="text-[9px] tracking-[0.4em] uppercase text-sandstone font-light">
                On The Fly
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => nav(l.href)}
                className="text-[12px] tracking-[0.18em] uppercase text-cool-white/60 hover:text-sandstone transition-colors duration-300 font-light"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-5">
            <a
              href="tel:+19283804504"
              className="flex items-center gap-2 text-sandstone text-[13px] font-light hover:text-sunset-gold transition-colors"
            >
              <Phone size={14} strokeWidth={1.5} />
              (928) 380-4504
            </a>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                nav("#booking");
              }}
              className="px-7 py-2.5 bg-sandstone text-canyon-deep text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-canyon-orange transition-all duration-400"
            >
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden relative z-10 text-cool-white"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-canyon-deep/[0.98] backdrop-blur-2xl flex flex-col items-center justify-center gap-7"
          >
            {navLinks.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                onClick={() => nav(l.href)}
                className="text-xl tracking-[0.12em] uppercase text-cool-white/70 hover:text-sandstone font-light"
              >
                {l.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.35 }}
              className="mt-8 flex flex-col items-center gap-5"
            >
              <a
                href="tel:+19283804504"
                className="text-sandstone text-lg font-light flex items-center gap-2"
              >
                <Phone size={18} />
                (928) 380-4504
              </a>
              <button
                onClick={() => nav("#booking")}
                className="px-10 py-3.5 bg-sandstone text-canyon-deep text-[12px] tracking-[0.25em] uppercase font-semibold"
              >
                Book Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
