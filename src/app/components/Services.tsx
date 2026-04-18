"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Ship, Fish, Anchor, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Ship,
    title: "Water Taxi / Backhaul Shuttle",
    description:
      "Our custom jet boat takes you and your kayak or paddleboard upstream to a destination of your choice — typically 10 miles up at Petroglyph Beach day-use area, just below Glen Canyon Dam. You decide how far you want to paddle and we drop you off accordingly.",
    image: "/images/original/kayak-horseshoe.jpg",
    price: "$80",
    priceNote: "Per person",
    tag: "Most Popular",
    features: [
      "Choose 2 hours or all day on the river",
      "Drop-off up to 15 miles upstream",
      "Kayak & SUP rentals from $40",
      "Meet at Lees Ferry boat launch ramp",
    ],
  },
  {
    icon: Fish,
    title: "Fly Fishing Guide Trip",
    description:
      "Experience world-class trout fishing in the gin-clear tailwaters below Glen Canyon Dam. Your guide Dave Trimble has logged hundreds of guide days since the 1990s on this legendary stretch of the Colorado River.",
    image: "/images/original/stephs-brown-trout.jpg",
    price: "$650",
    priceNote: "1 angler · $700 for 2",
    tag: "Guided Fishing",
    features: [
      "8 hours on the water",
      "Sage & Echo fly rods provided",
      "Custom hand-tied flies & lures",
      "USCG Licensed Captain",
    ],
  },
  {
    icon: Anchor,
    title: "Spin Fishing Guide Trip",
    description:
      "Perfect for groups up to 4 anglers. Target trophy rainbow and brown trout with expert guidance. All tackle, fuel, and custom Koffler jet boat included. We do NOT fly fish 3 or 4 anglers.",
    image: "/images/original/spring-fishing.jpg",
    price: "$700",
    priceNote: "1-3 anglers · $800 for 4",
    tag: null,
    features: [
      "4 anglers available at $800",
      "All tackle & lures included",
      "Custom Koffler jet boat",
      "$25 per non-fishing passenger",
    ],
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".svc-heading",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".svc-heading", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".svc-card",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".svc-grid", start: "top 82%" },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section id="services" ref={ref} className="relative py-32 md:py-44 warm-section overflow-hidden">
      <div className="absolute inset-0 canyon-texture opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="svc-heading block text-xs tracking-[0.25em] uppercase text-sandstone mb-6">
            Our Services
          </span>
          <h2 className="svc-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-6">
            2025 Guide{" "}
            <span className="italic text-sandstone">Rates</span>
          </h2>
          <p className="svc-heading text-warm-cream text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Water taxi &amp; kayak rentals, plus guided fishing trips on the
            Colorado River at Lees Ferry. Family owned and operated &mdash;
            guiding Lees Ferry since 1999. Maximum 4 people per boat.
          </p>
        </div>

        {/* Services grid */}
        <div className="svc-grid grid grid-cols-1 lg:grid-cols-3 gap-2">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="svc-card group relative bg-cool-white/[0.015] border border-cool-white/[0.04] hover:border-sandstone/20 transition-all duration-600 overflow-hidden"
              >
                {/* Image strip */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canyon-deep via-canyon-deep/40 to-transparent" />

                  {/* Tag */}
                  {svc.tag && (
                    <div className="absolute top-4 right-4 px-4 py-1.5 bg-sandstone text-canyon-deep text-xs tracking-[0.15em] uppercase font-bold">
                      {svc.tag}
                    </div>
                  )}

                  {/* Price */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <span className="block font-serif text-3xl text-sandstone">
                      {svc.price}
                    </span>
                    <span className="block text-xs tracking-[0.2em] uppercase text-cool-white/50 mt-0.5">
                      {svc.priceNote}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <Icon
                      className="text-water-light"
                      size={22}
                      strokeWidth={1.3}
                    />
                    <h3 className="font-serif text-xl md:text-2xl text-cool-white">
                      {svc.title}
                    </h3>
                  </div>

                  <p className="text-warm-cream font-normal text-lg leading-relaxed mb-8">
                    {svc.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {svc.features.map((f) => (
                      <li
                        key={f}
                        className="text-base text-cool-white/80 font-light flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sandstone/60 mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 text-sandstone text-sm tracking-[0.2em] uppercase font-light hover:text-canyon-orange group/link transition-colors"
                  >
                    Book This Trip
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* What's included callout */}
        <div className="mt-16 p-8 md:p-12 bg-cool-white/[0.02] border border-cool-white/[0.04]">
          <h3 className="font-serif text-2xl text-cool-white mb-6 text-center">
            What&apos;s Included in Every Guided Charter
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              "USCG Licensed Captain",
              "Custom Koffler Jet Boat",
              "Fuel",
              "Fly Rods & Tackle",
              "8 Hours on the Water",
              "Flies & Lures",
            ].map((item) => (
              <div key={item} className="text-warm-cream text-lg font-normal">
                <span className="block w-2 h-2 rounded-full bg-sandstone/50 mx-auto mb-3" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
