"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarCheck, MapPin, Zap, Sunset } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Book Online or Call",
    text: "Reserve your trip by calling Dave directly at (928) 380-4504 or email info@leesferryonthefly.com. A $100 deposit is required to secure your date.",
    color: "text-water-light",
    border: "border-water-light/20",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Meet at Lees Ferry",
    text: "Arrive at the Lees Ferry boat launch in Marble Canyon, AZ. Trips typically start at 7:00 AM. We recommend staying at the nearby Marble Canyon Lodge.",
    color: "text-river-teal",
    border: "border-river-teal/20",
  },
  {
    icon: Zap,
    number: "03",
    title: "Hit the Water",
    text: "Whether it's a guided fishing charter or a backhaul shuttle, you'll travel in our custom Koffler jet boat with USCG Licensed Captain Dave at the helm.",
    color: "text-sandstone",
    border: "border-sandstone/20",
  },
  {
    icon: Sunset,
    number: "04",
    title: "An Unforgettable Day",
    text: "8 hours on the water fishing for trophy trout in gin-clear tailwaters, or a scenic paddle back through Horseshoe Bend. Balance due at the end of your trip.",
    color: "text-sunset-gold",
    border: "border-sunset-gold/20",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hiw-heading",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".hiw-heading", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".hiw-step",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".hiw-steps", start: "top 82%" },
        }
      );

      gsap.fromTo(
        ".hiw-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".hiw-steps",
            start: "top 70%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section id="how-it-works" ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 canyon-texture opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="hiw-heading block text-[10px] tracking-[0.5em] uppercase text-sandstone mb-6">
            How It Works
          </span>
          <h2 className="hiw-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05]">
            Four Simple{" "}
            <span className="italic text-sandstone">Steps</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="hiw-steps relative max-w-3xl mx-auto">
          {/* Connecting vertical line */}
          <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-px">
            <div className="hiw-line origin-top w-full h-full bg-gradient-to-b from-water-light/40 via-sandstone/30 to-sunset-gold/40" />
          </div>

          <div className="space-y-2 md:space-y-0">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`hiw-step group relative flex gap-8 md:gap-12 p-8 md:p-10 bg-cool-white/[0.01] border ${step.border} hover:bg-cool-white/[0.03] transition-all duration-500`}
                >
                  {/* Step indicator */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-[56px] h-[56px] flex items-center justify-center border border-cool-white/10 bg-canyon-deep group-hover:border-sandstone/30 transition-colors duration-500">
                      <Icon
                        className={`${step.color} group-hover:scale-110 transition-transform duration-500`}
                        size={24}
                        strokeWidth={1.3}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[10px] tracking-[0.4em] text-cool-white/15">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-cool-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-cool-white/45 font-light text-[14px] leading-relaxed max-w-lg">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
