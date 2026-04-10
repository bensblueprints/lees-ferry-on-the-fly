"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Phone, Compass, Shield, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Captain() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cap-content",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".cap-content", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".cap-image",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".cap-image", start: "top 80%" },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section id="guide" ref={ref} className="relative py-32 md:py-44 warm-section overflow-hidden">
      <div className="absolute inset-0 canyon-texture opacity-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-sandstone/[0.03] blur-[180px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <span className="cap-content block text-[10px] tracking-[0.5em] uppercase text-sandstone mb-6">
              Meet Your Guide
            </span>
            <h2 className="cap-content font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-6">
              Dave{" "}
              <span className="italic text-sandstone">Trimble</span>
            </h2>
            <div className="cap-content text-[10px] tracking-[0.3em] uppercase text-cool-white/30 mb-10">
              Owner &middot; USCG Licensed Captain &middot; Fishing Guide
            </div>

            <p className="cap-content text-cool-white/55 text-base font-light leading-relaxed mb-5">
              Dave Trimble has been guiding anglers at Lees Ferry since the 1990s,
              logging hundreds of guide days on this legendary stretch of the
              Colorado River. He knows every bend, eddy, and hidden grotto along
              the corridor.
            </p>
            <p className="cap-content text-cool-white/45 text-[15px] font-light leading-relaxed mb-6">
              As sole owner and operator, Dave personally captains every trip —
              whether it&apos;s a guided fly fishing charter targeting trophy rainbow
              and brown trout in the gin-clear tailwaters, or a jet boat shuttle
              through the stunning Horseshoe Bend corridor.
            </p>
            <p className="cap-content text-cool-white/40 text-[14px] font-light leading-relaxed mb-12">
              He carries a well-stocked guide box featuring Sage and Echo fly rods,
              Galvan fly reels, and custom hand-tied flies — many of which are
              available for purchase at the nearby Marble Canyon Lodge.
            </p>

            {/* Traits */}
            <div className="cap-content grid grid-cols-3 gap-6 mb-12">
              {[
                { icon: Compass, label: "Local Expert", sublabel: "Since the 1990s" },
                { icon: Shield, label: "Safety First", sublabel: "USCG Licensed" },
                { icon: Heart, label: "Passionate", sublabel: "Lives for the river" },
              ].map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.label} className="text-center">
                    <Icon
                      className="text-sandstone mx-auto mb-3"
                      size={24}
                      strokeWidth={1.3}
                    />
                    <span className="block text-cool-white text-[14px] mb-1">
                      {t.label}
                    </span>
                    <span className="block text-cool-white/30 text-[12px] font-light">
                      {t.sublabel}
                    </span>
                  </div>
                );
              })}
            </div>

            <a
              href="tel:+19283804504"
              className="cap-content inline-flex items-center gap-3 px-10 py-4 border border-sandstone/30 text-sandstone text-[12px] tracking-[0.2em] uppercase font-light hover:bg-sandstone/10 hover:border-sandstone/60 transition-all duration-400"
            >
              <Phone size={15} strokeWidth={1.5} />
              Call Dave: (928) 380-4504
            </a>
          </div>

          {/* Image */}
          <div className="cap-image relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/original/dave-trimble-guide.jpg"
                alt="Dave Trimble - Owner and fishing guide at Lees Ferry On The Fly"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canyon-deep/50 via-transparent to-canyon-deep/20" />
            </div>
            <div className="absolute -top-3 -right-3 w-full h-full border border-sandstone/15 pointer-events-none hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
