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
    <section ref={ref} className="relative py-28 md:py-40 warm-section overflow-hidden">
      <div className="absolute inset-0 canyon-texture opacity-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-sandstone/[0.03] blur-[180px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="cap-content block text-[10px] tracking-[0.5em] uppercase text-sandstone mb-5">
              Meet Your Captain
            </span>
            <h2 className="cap-content font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-6">
              Dave{" "}
              <span className="italic text-sandstone">Trimble</span>
            </h2>
            <div className="cap-content text-[10px] tracking-[0.3em] uppercase text-cool-white/30 mb-8">
              Owner &middot; Captain &middot; Guide
            </div>

            <p className="cap-content text-cool-white/55 text-[15px] font-light leading-relaxed mb-4">
              Dave Trimble is the heart and soul of Lees Ferry On The Fly. As
              sole owner and operator, Dave personally captains every jet boat
              run and knows every bend, eddy, and hidden grotto along the
              Colorado River corridor.
            </p>
            <p className="cap-content text-cool-white/45 text-[14px] font-light leading-relaxed mb-10">
              What started as a fly fishing guide service has evolved into the
              premier kayak and paddleboard shuttle operation at Lees Ferry.
              Dave&apos;s passion for sharing this incredible stretch of river
              drives everything he does — from the moment you step on the boat to
              the last paddle stroke back to the launch.
            </p>

            {/* Traits */}
            <div className="cap-content grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: Compass, label: "Local Expert", sublabel: "Knows every mile" },
                { icon: Shield, label: "Safety First", sublabel: "USCG Licensed" },
                { icon: Heart, label: "Passionate", sublabel: "Lives for the river" },
              ].map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.label} className="text-center">
                    <Icon
                      className="text-sandstone mx-auto mb-2"
                      size={22}
                      strokeWidth={1.3}
                    />
                    <span className="block text-cool-white text-[13px] mb-0.5">
                      {t.label}
                    </span>
                    <span className="block text-cool-white/30 text-[11px] font-light">
                      {t.sublabel}
                    </span>
                  </div>
                );
              })}
            </div>

            <a
              href="tel:+19283804504"
              className="cap-content inline-flex items-center gap-3 px-8 py-3.5 border border-sandstone/30 text-sandstone text-[12px] tracking-[0.2em] uppercase font-light hover:bg-sandstone/10 hover:border-sandstone/60 transition-all duration-400"
            >
              <Phone size={15} strokeWidth={1.5} />
              Call Dave: (928) 380-4504
            </a>
          </div>

          {/* Image — using the boat canyon passage shot (Dave navigating) */}
          <div className="cap-image relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/boat-canyon-passage.jpg"
                alt="Captain Dave Trimble navigating the canyon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canyon-deep/50 via-transparent to-canyon-deep/20" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-3 -right-3 w-full h-full border border-sandstone/15 pointer-events-none hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
