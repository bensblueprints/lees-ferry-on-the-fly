"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.3,
      });

      tl.fromTo(
        ".hero-logo",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 }
      )
        .fromTo(
          ".hero-line",
          { y: 100, opacity: 0, skewY: 3 },
          { y: 0, opacity: 1, skewY: 0, duration: 1.1, stagger: 0.12 },
          "-=0.5"
        )
        .fromTo(
          ".hero-sub",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          ".hero-stat",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden">
      {/* Video / Image Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/colorado-river-vista.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/river-adventure.mp4" type="video/mp4" />
        </video>
        {/* Fallback image for when video doesn't load */}
        <Image
          src="/images/colorado-river-vista.jpg"
          alt="Colorado River at Lees Ferry"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Vignette edges */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_60px_rgba(11,22,34,0.4)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-10 pb-16 md:pb-20 w-full">
        {/* Logo mark */}
        <div className="hero-logo mb-6">
          <Image
            src="/images/logo.png"
            alt="Lees Ferry On The Fly"
            width={120}
            height={120}
            className="w-20 h-20 md:w-[100px] md:h-[100px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="font-serif leading-[0.92] mb-5">
          <span className="hero-line block text-[clamp(2.5rem,8vw,7rem)] text-cool-white text-glow-blue">
            Horseshoe Bend
          </span>
          <span className="hero-line block text-[clamp(1.5rem,4.5vw,3.8rem)] text-sandstone italic font-light mt-1">
            By Jet Boat
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub text-cool-white/70 text-base md:text-lg font-light max-w-lg leading-relaxed mb-8">
          The only jet boat shuttle on the Colorado River. We take you upriver
          through towering canyon walls — you paddle back through paradise.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-14">
          <a
            href="#booking"
            className="hero-cta inline-flex items-center justify-center px-9 py-4 bg-sandstone text-canyon-deep text-[12px] tracking-[0.25em] uppercase font-semibold hover:bg-canyon-orange transition-all duration-400 hover:tracking-[0.3em]"
          >
            Book Your Shuttle
          </a>
          <a
            href="tel:+19283804504"
            className="hero-cta inline-flex items-center justify-center gap-2 px-9 py-4 border border-cool-white/20 text-cool-white text-[12px] tracking-[0.2em] uppercase font-light hover:border-sandstone/50 hover:text-sandstone transition-all duration-400"
          >
            <Phone size={14} />
            (928) 380-4504
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-x-12 gap-y-4">
          {[
            { label: "Service", value: "Kayak & SUP Shuttles" },
            { label: "Location", value: "Lees Ferry, AZ" },
            { label: "Highlight", value: "Horseshoe Bend" },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="block text-[9px] tracking-[0.4em] uppercase text-sandstone/70 mb-0.5">
                {s.label}
              </span>
              <span className="text-cool-white/60 text-[13px] font-light">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-sandstone/40" size={26} />
      </motion.div>
    </section>
  );
}
