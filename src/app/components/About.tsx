"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mountain, Waves, Fish, Sun } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Waves,
    title: "The Colorado River",
    text: "Crystal-clear tailwaters flowing from Glen Canyon Dam create a year-round cold-water paradise — 15 miles of pristine, wadeable river through one of the most breathtaking canyons on Earth.",
  },
  {
    icon: Fish,
    title: "Trophy Rainbow Trout",
    text: "Lees Ferry is home to some of the largest rainbow trout in the Southwest. Fish averaging 16-20 inches feed aggressively on midges, scuds, and seasonal hatches.",
  },
  {
    icon: Mountain,
    title: "Glen Canyon Dam",
    text: "The dam creates consistent water temperatures and nutrient-rich flows that sustain an incredible trout fishery — one that rivals any tailwater in the country.",
  },
  {
    icon: Sun,
    title: "Year-Round Fishing",
    text: "With over 300 days of sunshine and water temperatures between 46-62°F year round, Lees Ferry delivers world-class fly fishing every single day.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-heading",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-heading",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".about-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".feature-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".feature-grid",
            start: "top 80%",
          },
        }
      );

      // Parallax on the decorative element
      gsap.to(".about-deco-line", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 topo-lines opacity-40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sage/[0.04] blur-[150px]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="about-heading block text-[11px] tracking-[0.5em] uppercase text-copper mb-6">
            The Experience
          </span>
          <h2 className="about-heading font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05] mb-8">
            Where the River
            <br />
            <span className="italic text-copper">Meets Legend</span>
          </h2>
          <p className="about-text text-mist/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Nestled in the dramatic Marble Canyon corridor, Lees Ferry offers a
            fly fishing experience unlike any other. The cold, clear tailwaters
            of the Colorado River create a world-class trout fishery framed by
            towering red rock walls and endless Arizona sky.
          </p>
        </div>

        {/* Decorative expanding line */}
        <div className="about-deco-line origin-left scale-x-0 h-px bg-gradient-to-r from-copper/60 via-copper/20 to-transparent mb-20" />

        {/* Features grid */}
        <div className="feature-grid grid grid-cols-1 md:grid-cols-2 gap-1">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="feature-card group relative p-8 md:p-12 border border-cream/[0.04] hover:border-copper/20 bg-cream/[0.01] hover:bg-cream/[0.03] transition-all duration-700"
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-copper/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-copper/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Icon
                  className="text-copper mb-6 group-hover:scale-110 transition-transform duration-500"
                  size={28}
                  strokeWidth={1.2}
                />
                <h3 className="font-serif text-xl md:text-2xl text-cream mb-4">
                  {feat.title}
                </h3>
                <p className="text-mist/60 font-light leading-relaxed text-[15px]">
                  {feat.text}
                </p>

                {/* Card number */}
                <span className="absolute top-8 right-8 text-[11px] tracking-[0.3em] text-copper/30 font-light">
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
