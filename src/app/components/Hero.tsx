"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-line",
        { y: 120, opacity: 0, skewY: 4 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.15 }
      )
        .fromTo(
          ".hero-subtitle",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.5, ease: "power2.inOut" },
          "-=0.8"
        )
        .fromTo(
          ".hero-detail",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.6"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-pattern"
    >
      {/* Ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-copper/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-sage/[0.05] blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 bottom-0 topo-lines opacity-60" />
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-copper/20 to-transparent hidden xl:block" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-24 w-full">
        {/* Eyebrow */}
        <div className="hero-line overflow-hidden mb-8">
          <span className="inline-block text-[11px] md:text-[13px] tracking-[0.5em] uppercase text-copper font-light">
            Colorado River &nbsp;·&nbsp; Glen Canyon Dam &nbsp;·&nbsp; Arizona
          </span>
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-serif leading-[0.9] mb-8"
        >
          <span className="hero-line block text-[clamp(3rem,10vw,9rem)] text-cream text-glow">
            Lees Ferry
          </span>
          <span className="hero-line block text-[clamp(2rem,6vw,5.5rem)] text-copper italic font-light mt-2">
            On The Fly
          </span>
        </h1>

        {/* Copper line */}
        <div
          ref={lineRef}
          className="origin-left w-full max-w-[400px] h-px bg-gradient-to-r from-copper via-warm-gold to-transparent mb-10"
        />

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-xl text-mist/80 max-w-xl font-light leading-relaxed mb-10">
          World-class fly fishing on the legendary Colorado River.
          <br className="hidden md:block" />
          Trophy rainbow trout. Expert guides. Unforgettable water.
        </p>

        {/* CTAs */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4">
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-10 py-4 bg-copper text-midnight text-[13px] tracking-[0.25em] uppercase font-medium hover:bg-warm-gold transition-all duration-500 hover:tracking-[0.35em]"
          >
            Book Your Trip
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-10 py-4 border border-cream/20 text-cream text-[13px] tracking-[0.25em] uppercase font-light hover:border-copper/50 hover:text-copper transition-all duration-500"
          >
            The Experience
          </a>
        </div>

        {/* Bottom details */}
        <div className="mt-20 flex flex-wrap gap-12 md:gap-20">
          {[
            { label: "Est.", value: "Lees Ferry, AZ" },
            { label: "Species", value: "Rainbow Trout" },
            { label: "River", value: "Colorado" },
          ].map((item) => (
            <div key={item.label} className="hero-detail">
              <span className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-1">
                {item.label}
              </span>
              <span className="block text-sm text-cream/70 font-light">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-copper/50" size={28} />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
    </section>
  );
}
