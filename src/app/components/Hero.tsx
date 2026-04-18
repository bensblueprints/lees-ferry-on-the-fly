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
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 },
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
    <section ref={containerRef} className="relative h-screen min-h-[700px] flex flex-col justify-center overflow-hidden">
      {/* Video Background with image fallback */}
      <div className="absolute inset-0">
        <Image
          src="/images/original/drone-aerial-river.jpg"
          alt="Colorado River at Lees Ferry"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/river-adventure.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Stronger overlay for readable text */}
      <div className="absolute inset-0 bg-canyon-deep/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-canyon-deep/40 via-canyon-deep/30 to-canyon-deep" />

      {/* Vignette edges */}
      <div className="absolute inset-0 shadow-[inset_0_0_220px_80px_rgba(11,22,34,0.65)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 w-full text-center">
        {/* Logo mark */}
        <div className="hero-logo mb-10 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Lees Ferry On The Fly"
            width={320}
            height={180}
            className="w-[220px] md:w-[300px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="font-serif leading-[0.92] mb-8">
          <span className="hero-line block text-[clamp(2.8rem,9vw,7.5rem)] text-cool-white">
            Lees Ferry
          </span>
          <span className="hero-line block text-[clamp(1.8rem,5vw,4rem)] text-canyon-orange italic font-light mt-2">
            On The Fly
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub text-warm-cream text-xl md:text-2xl font-normal max-w-3xl mx-auto leading-relaxed mb-14">
          Water taxi &amp; kayak rentals through Horseshoe Bend. Guided fly
          fishing &amp; spin fishing on the Colorado River. Family owned and
          operated &mdash; guiding Lees Ferry since 1999.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
          <a
            href="#booking"
            className="hero-cta inline-flex items-center justify-center px-12 py-4.5 bg-sandstone text-canyon-deep text-sm tracking-[0.25em] uppercase font-semibold hover:bg-canyon-orange transition-all duration-400 hover:tracking-[0.15em]"
          >
            Book Your Trip
          </a>
          <a
            href="tel:+19283804504"
            className="hero-cta inline-flex items-center justify-center gap-2 px-12 py-4.5 border border-cool-white/25 text-cool-white text-sm tracking-[0.2em] uppercase font-light hover:border-sandstone/50 hover:text-sandstone transition-all duration-400"
          >
            <Phone size={14} />
            (928) 380-4504
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-5">
          {[
            { label: "Water Taxi", value: "$80 / Person" },
            { label: "Kayak Rentals", value: "From $40" },
            { label: "Fly Fishing", value: "From $650" },
            { label: "Guiding Since", value: "1999" },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="block text-sm tracking-[0.18em] uppercase text-sandstone-light mb-1.5 font-medium">
                {s.label}
              </span>
              <span className="text-warm-cream text-lg font-normal">
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-sandstone/40" size={26} />
      </motion.div>
    </section>
  );
}
