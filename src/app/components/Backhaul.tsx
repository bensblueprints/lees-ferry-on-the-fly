"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Zap, ArrowUp, ArrowDown, Anchor } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Backhaul() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".bh-heading",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".bh-heading", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".bh-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".bh-cards", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".bh-image",
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".bh-image", start: "top 80%" },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section id="backhaul" ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 canyon-texture opacity-50" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-river-teal/[0.04] blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Section label centered */}
        <div className="text-center mb-20 md:mb-24">
          <span className="bh-heading block text-[10px] tracking-[0.5em] uppercase text-sandstone mb-6">
            The Experience
          </span>
          <h2 className="bh-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05]">
            Kayak &amp; SUP{" "}
            <span className="italic text-sandstone">Backhaul</span>
          </h2>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 md:mb-32">
          <div>
            <p className="bh-heading text-cool-white/55 text-base md:text-lg font-light leading-relaxed mb-8 max-w-lg">
              We transport you and your kayak or paddleboard{" "}
              <strong className="text-water-light font-normal">upstream</strong>{" "}
              to a destination of your choice &mdash; typically{" "}
              <strong className="text-sandstone font-normal">10 miles up at Petroglyph Beach</strong>{" "}
              day-use area, just below Glen Canyon Dam (15 miles upstream max).
              You decide how long you want to paddle and we&apos;ll drop you off
              accordingly. Two hours or all day &mdash; it&apos;s up to you.
            </p>

            {/* What to expect */}
            <ul className="bh-heading mb-8 space-y-2.5 max-w-lg">
              {[
                "Kayak rentals do not include water taxi or backhaul shuttle",
                "Choose how long you want to be on the river — 2 hours or all day",
                "Meet us at the Lees Ferry boat launch ramp on the Colorado River",
                "No need to transport any boats — we provide everything",
                "Safe and pleasant trip down the river, all skill levels welcome",
              ].map((point) => (
                <li
                  key={point}
                  className="text-cool-white/50 text-[14px] font-light flex items-start gap-3 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sandstone/60 mt-2 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="p-6 bg-cool-white/[0.03] border border-cool-white/[0.06]">
                <span className="block font-serif text-3xl text-sandstone mb-1">$80</span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-cool-white/40">Per Person</span>
                <p className="text-cool-white/35 text-[12px] mt-2 font-light">
                  Includes upstream transport for you + one watercraft under 50 lbs
                </p>
              </div>
              <div className="p-6 bg-cool-white/[0.03] border border-cool-white/[0.06]">
                <span className="block font-serif text-3xl text-sandstone mb-1">From $40</span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-cool-white/40">Kayak Rentals</span>
                <p className="text-cool-white/35 text-[12px] mt-2 font-light">
                  Plus tax and booking fee. SUP rentals also available.
                </p>
              </div>
            </div>
            <p className="bh-heading text-cool-white/35 text-[13px] font-light leading-relaxed max-w-lg">
              No canoes or watercraft exceeding 15 feet. No watercraft with frames.
              Additional $80 charge for gear and watercraft exceeding 50 lbs total.
            </p>
          </div>

          {/* Image */}
          <div className="bh-image relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/original/backhaul-shuttle.jpeg"
              alt="Jet boat backhaul shuttle with kayaks on the Colorado River"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canyon-deep/60 via-transparent to-canyon-deep/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-sandstone/80">
                Shuttle departures from Lees Ferry launch ramp
              </span>
            </div>
          </div>
        </div>

        {/* How the backhaul works - 3 step visual */}
        <div className="bh-cards grid grid-cols-1 md:grid-cols-3 gap-2">
          {[
            {
              icon: Anchor,
              step: "01",
              title: "Meet at Lees Ferry",
              text: "Arrive at the Lees Ferry launch ramp. We load your kayak or paddleboard (or use our rentals) onto the custom Koffler jet boat.",
              accent: "border-river-teal/30 hover:border-river-teal/60",
              iconColor: "text-water-light",
            },
            {
              icon: ArrowUp,
              step: "02",
              title: "You Pick the Drop-Off",
              text: "Tell us how long you want to paddle. Most folks ride 10 miles up to Petroglyph Beach, but we'll drop you anywhere up to 15 miles below the dam.",
              accent: "border-sandstone/20 hover:border-sandstone/50",
              iconColor: "text-sandstone",
            },
            {
              icon: ArrowDown,
              step: "03",
              title: "Paddle Back in Paradise",
              text: "Float back downstream through crystal-clear waters, hidden fern grottoes, ancient petroglyphs, and towering canyon walls — at your own pace.",
              accent: "border-sunset-gold/20 hover:border-sunset-gold/50",
              iconColor: "text-sunset-gold",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`bh-card group relative p-10 md:p-12 bg-cool-white/[0.02] border ${item.accent} transition-all duration-600`}
              >
                <div className="flex items-start justify-between mb-8">
                  <Icon
                    className={`${item.iconColor} group-hover:scale-110 transition-transform duration-500`}
                    size={28}
                    strokeWidth={1.2}
                  />
                  <span className="text-[11px] tracking-[0.3em] text-cool-white/15 font-light">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-cool-white mb-4">
                  {item.title}
                </h3>
                <p className="text-cool-white/45 font-light text-[14px] leading-relaxed">
                  {item.text}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sandstone/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            );
          })}
        </div>

        {/* Differentiator callout */}
        <div className="mt-14 flex items-center justify-center gap-3 text-center">
          <Zap className="text-canyon-orange" size={16} strokeWidth={1.5} />
          <span className="text-[12px] tracking-[0.3em] uppercase text-canyon-orange/80 font-light">
            Family owned and operated &middot; Guiding Lees Ferry since 1999
          </span>
          <Zap className="text-canyon-orange" size={16} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
