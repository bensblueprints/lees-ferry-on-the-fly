"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    title: "Morning on the Colorado",
    subtitle: "Golden light hits the canyon walls",
    gradient: "from-amber-900/80 via-orange-800/40 to-transparent",
    accent: "bg-amber-700/30",
    span: "md:col-span-2 md:row-span-2",
    height: "h-[350px] md:h-full",
  },
  {
    title: "Trophy Catch",
    subtitle: "20\" rainbow on a size 18 midge",
    gradient: "from-emerald-900/80 via-teal-900/40 to-transparent",
    accent: "bg-emerald-800/30",
    span: "",
    height: "h-[280px]",
  },
  {
    title: "Marble Canyon",
    subtitle: "Towering Navajo sandstone walls",
    gradient: "from-red-900/80 via-rose-900/40 to-transparent",
    accent: "bg-red-900/30",
    span: "",
    height: "h-[280px]",
  },
  {
    title: "The Perfect Cast",
    subtitle: "Sight fishing the crystal flats",
    gradient: "from-cyan-900/80 via-blue-900/40 to-transparent",
    accent: "bg-cyan-900/30",
    span: "",
    height: "h-[280px]",
  },
  {
    title: "Drift Boat Session",
    subtitle: "Floating through paradise",
    gradient: "from-slate-800/80 via-stone-800/40 to-transparent",
    accent: "bg-stone-700/30",
    span: "md:col-span-2",
    height: "h-[280px]",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gallery-heading",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gallery-heading", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".gallery-item",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gallery-grid", start: "top 80%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden"
    >
      <div className="absolute inset-0 topo-lines opacity-30" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6">
          <div>
            <span className="gallery-heading block text-[11px] tracking-[0.5em] uppercase text-copper mb-6">
              Gallery
            </span>
            <h2 className="gallery-heading font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05]">
              Life on
              <br />
              <span className="italic text-copper">the Water</span>
            </h2>
          </div>
          <p className="gallery-heading text-mist/50 text-[15px] font-light max-w-sm leading-relaxed">
            Every day on the river writes a new story. Here are some of our
            favorites.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="gallery-grid grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-[280px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`gallery-item group relative overflow-hidden cursor-pointer ${item.span} ${item.height}`}
            >
              {/* Abstract background representing the photo */}
              <div className={`absolute inset-0 ${item.accent}`}>
                {/* Texture layers */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.gradient}`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-midnight/40 to-transparent" />

                {/* Abstract shapes suggesting landscape */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight/80 to-transparent" />

                {/* Noise texture */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.8%22%20numOctaves%3D%224%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22%2F%3E%3C%2Fsvg%3E')]" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/10 transition-colors duration-700" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <span className="text-[10px] tracking-[0.4em] uppercase text-copper/70 mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-cream group-hover:text-pale-gold transition-colors duration-500">
                  {item.title}
                </h3>

                {/* Hover line */}
                <div className="mt-4 h-px bg-copper/40 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 max-w-[200px]" />
              </div>

              {/* Corner frame on hover */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-copper/0 group-hover:border-copper/40 transition-all duration-500" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-copper/0 group-hover:border-copper/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
