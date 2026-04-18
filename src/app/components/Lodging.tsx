"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Utensils, Bed, ExternalLink, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Lodging() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".lodge-heading",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".lodge-heading", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".lodge-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".lodge-cards", start: "top 82%" },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section id="lodging" ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 canyon-texture opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="lodge-heading block text-xs tracking-[0.25em] uppercase text-sandstone mb-6">
            Where to Stay
          </span>
          <h2 className="lodge-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-6">
            Lodging &amp;{" "}
            <span className="italic text-sandstone">Dining</span>
          </h2>
          <p className="lodge-heading text-warm-cream text-lg font-normal max-w-xl mx-auto leading-relaxed">
            Our top pick is our friends at Vermilion Cliffs Lodge. Marble Canyon
            Lodge is another solid option just minutes from the boat launch.
          </p>
        </div>

        {/* Lodge info */}
        <div className="lodge-cards grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-5xl mx-auto">
          {/* TOP PICK: Vermilion Cliffs */}
          <div className="lodge-card group relative p-10 md:p-12 bg-cool-white/[0.02] border border-sandstone/30 hover:border-sandstone/60 transition-all duration-500">
            <div className="absolute top-4 right-4 px-3 py-1 bg-sandstone text-canyon-deep text-xs tracking-[0.15em] uppercase font-bold">
              Top Pick
            </div>
            <Star className="text-sandstone mb-6" size={28} strokeWidth={1.2} />
            <h3 className="font-serif text-xl md:text-2xl text-cool-white mb-4">
              Vermilion Cliffs Lodge
            </h3>
            <p className="text-warm-cream font-normal text-lg leading-relaxed mb-6">
              Our friends at Vermilion Cliffs offer the best stay in the area
              &mdash; right under the towering red cliffs. This is where we send
              our clients first.
            </p>
            <a
              href="https://www.vermilioncliffs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sandstone text-base font-light hover:text-canyon-orange transition-colors"
            >
              <ExternalLink size={14} strokeWidth={1.5} />
              vermilioncliffs.com
            </a>
          </div>

          {/* Marble Canyon Lodge */}
          <div className="lodge-card group p-10 md:p-12 bg-cool-white/[0.02] border border-cool-white/[0.04] hover:border-sandstone/20 transition-all duration-500">
            <Bed className="text-sandstone mb-6" size={28} strokeWidth={1.2} />
            <h3 className="font-serif text-xl md:text-2xl text-cool-white mb-4">
              Historic Marble Canyon Lodge
            </h3>
            <p className="text-warm-cream font-normal text-lg leading-relaxed mb-6">
              A historic lodge with comfortable rooms right at the gateway to
              Lees Ferry. Whether you&apos;re here to fish, whitewater raft, or kayak
              the scenic Horseshoe Bend &mdash; this is a great place to stay.
            </p>
            <a
              href="tel:+18007261789"
              className="inline-flex items-center gap-2 text-sandstone text-base font-light hover:text-canyon-orange transition-colors"
            >
              <Phone size={14} strokeWidth={1.5} />
              1-800-726-1789
            </a>
          </div>

          {/* Marble Canyon Restaurant */}
          <div className="lodge-card group p-10 md:p-12 bg-cool-white/[0.02] border border-cool-white/[0.04] hover:border-sandstone/20 transition-all duration-500">
            <Utensils className="text-sandstone mb-6" size={28} strokeWidth={1.2} />
            <h3 className="font-serif text-xl md:text-2xl text-cool-white mb-4">
              Marble Canyon Restaurant
            </h3>
            <p className="text-warm-cream font-normal text-lg leading-relaxed mb-6">
              Great dining right on-site at Marble Canyon Lodge. Fuel up before
              your trip or enjoy a meal after a long day on the water. They
              also carry local fly patterns and lures in their shop.
            </p>
            <span className="text-cool-white/90 text-sm tracking-[0.2em] uppercase font-light">
              On-site at Marble Canyon Lodge
            </span>
          </div>
        </div>

        {/* Note about more lodging coming */}
        <p className="text-center text-cool-white/90 text-sm tracking-[0.15em] uppercase font-light mt-12">
          More lodging options in Page, AZ coming soon
        </p>
      </div>
    </section>
  );
}
