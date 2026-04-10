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
    <section id="backhaul" ref={ref} className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 canyon-texture opacity-50" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-river-teal/[0.04] blur-[150px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
          <div>
            <span className="bh-heading block text-[10px] tracking-[0.5em] uppercase text-sandstone mb-5">
              The Experience
            </span>
            <h2 className="bh-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-6">
              What&apos;s a{" "}
              <span className="italic text-sandstone">Backhaul?</span>
            </h2>
            <p className="bh-heading text-cool-white/50 text-[15px] md:text-base font-light leading-relaxed mb-8 max-w-lg">
              A backhaul is your ticket to the ultimate Colorado River adventure.
              Our jet boat takes you and your kayak or paddleboard{" "}
              <strong className="text-water-light font-normal">upriver</strong>{" "}
              from Lees Ferry through the stunning Horseshoe Bend corridor — then you
              paddle back{" "}
              <strong className="text-sandstone font-normal">downstream</strong>{" "}
              through towering red rock canyon walls at your own pace.
            </p>
            <p className="bh-heading text-cool-white/40 text-[14px] font-light leading-relaxed max-w-lg">
              No fighting the current. No exhausting upstream battle. Just pure
              downstream bliss through one of the most photographed landscapes
              on Earth.
            </p>
          </div>

          {/* Image */}
          <div className="bh-image relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/jetboat-backhaul.jpg"
              alt="Jet boat backhaul shuttle with kayaks and paddleboards"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canyon-deep/60 via-transparent to-canyon-deep/20" />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-sandstone/80">
                Captain Dave&apos;s jet boat loaded up and ready
              </span>
            </div>
          </div>
        </div>

        {/* How the backhaul works - 3 step visual */}
        <div className="bh-cards grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            {
              icon: Anchor,
              step: "01",
              title: "Meet at Lees Ferry",
              text: "Arrive at the Lees Ferry launch ramp. We load your kayak or paddleboard (or use our rentals) onto the jet boat.",
              accent: "border-river-teal/30 hover:border-river-teal/60",
              iconColor: "text-water-light",
            },
            {
              icon: ArrowUp,
              step: "02",
              title: "Jet Boat Ride Upriver",
              text: "Hold on tight! We blast upriver through the Horseshoe Bend corridor at full speed. Feel the canyon walls tower above you as we go.",
              accent: "border-sandstone/20 hover:border-sandstone/50",
              iconColor: "text-sandstone",
            },
            {
              icon: ArrowDown,
              step: "03",
              title: "Paddle Back in Paradise",
              text: "We drop you off upstream and you float back down through crystal-clear waters, hidden fern grottoes, and ancient petroglyph walls.",
              accent: "border-sunset-gold/20 hover:border-sunset-gold/50",
              iconColor: "text-sunset-gold",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`bh-card group relative p-8 md:p-10 bg-cool-white/[0.02] border ${item.accent} transition-all duration-600`}
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon
                    className={`${item.iconColor} group-hover:scale-110 transition-transform duration-500`}
                    size={28}
                    strokeWidth={1.2}
                  />
                  <span className="text-[11px] tracking-[0.3em] text-cool-white/15 font-light">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-cool-white mb-3">
                  {item.title}
                </h3>
                <p className="text-cool-white/45 font-light text-[14px] leading-relaxed">
                  {item.text}
                </p>
                {/* Bottom bar on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sandstone/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            );
          })}
        </div>

        {/* Differentiator callout */}
        <div className="mt-12 flex items-center justify-center gap-3 text-center">
          <Zap className="text-canyon-orange" size={16} strokeWidth={1.5} />
          <span className="text-[12px] tracking-[0.3em] uppercase text-canyon-orange/80 font-light">
            The only jet boat backhaul service at Lees Ferry
          </span>
          <Zap className="text-canyon-orange" size={16} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
