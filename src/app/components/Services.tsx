"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Ship, Waves, Package, Fish, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Ship,
    title: "Horseshoe Bend Kayak Shuttle",
    description:
      "Our flagship experience. Jet boat ride upriver through the Horseshoe Bend corridor, then paddle your kayak back downstream through one of the most dramatic canyon stretches in the American West.",
    image: "/images/paddleboard-canyon.jpg",
    price: "From $75",
    tag: "Most Popular",
    features: ["Round-trip jet boat shuttle", "Life jackets provided", "All skill levels welcome", "Flexible drop-off points"],
  },
  {
    icon: Waves,
    title: "Paddleboard Shuttle",
    description:
      "Same incredible jet boat ride, same jaw-dropping scenery — but on a stand-up paddleboard. Glide through crystal-clear waters with towering sandstone walls on either side.",
    image: "/images/paddleboard-cliffs.jpg",
    price: "From $75",
    tag: null,
    features: ["SUP-friendly jet boat loading", "Calm downstream waters", "Photo opportunities galore", "Beginners welcome"],
  },
  {
    icon: Package,
    title: "Kayak & SUP Rentals",
    description:
      "Don't have your own gear? No problem. We offer high-quality kayak and stand-up paddleboard rentals so you can experience the Colorado River without hauling your own equipment.",
    image: "/images/paddleboard-group.jpg",
    price: "From $45",
    tag: null,
    features: ["Premium inflatable SUPs", "Sit-on-top kayaks", "Paddles & PFDs included", "Dry bags available"],
  },
  {
    icon: Fish,
    title: "Guided Fishing Trips",
    description:
      "Lees Ferry is one of the top trout fisheries in the Southwest. Join Captain Dave for a guided fishing trip targeting trophy rainbow trout in the legendary tailwaters below Glen Canyon Dam.",
    image: "/images/colorado-river-vista.jpg",
    price: "Call for rates",
    tag: null,
    features: ["Trophy rainbow trout", "All tackle provided", "Expert instruction", "Half & full day options"],
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
    <section id="services" ref={ref} className="relative py-28 md:py-40 warm-section overflow-hidden">
      <div className="absolute inset-0 canyon-texture opacity-30" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="svc-heading block text-[10px] tracking-[0.5em] uppercase text-sandstone mb-5">
            Our Services
          </span>
          <h2 className="svc-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05]">
            Your Adventure,{" "}
            <span className="italic text-sandstone">Your Way</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="svc-grid grid grid-cols-1 lg:grid-cols-2 gap-1">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="svc-card group relative bg-cool-white/[0.015] border border-cool-white/[0.04] hover:border-sandstone/20 transition-all duration-600 overflow-hidden"
              >
                {/* Image strip */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canyon-deep via-canyon-deep/40 to-transparent" />

                  {/* Tag */}
                  {svc.tag && (
                    <div className="absolute top-4 right-4 px-4 py-1.5 bg-sandstone text-canyon-deep text-[9px] tracking-[0.3em] uppercase font-bold">
                      {svc.tag}
                    </div>
                  )}

                  {/* Price */}
                  <div className="absolute bottom-4 right-4">
                    <span className="font-serif text-2xl text-sandstone">
                      {svc.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon
                      className="text-water-light"
                      size={22}
                      strokeWidth={1.3}
                    />
                    <h3 className="font-serif text-xl md:text-2xl text-cool-white">
                      {svc.title}
                    </h3>
                  </div>

                  <p className="text-cool-white/45 font-light text-[14px] leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li
                        key={f}
                        className="text-[12px] text-cool-white/35 font-light flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-sandstone/60 mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 text-sandstone text-[12px] tracking-[0.2em] uppercase font-light hover:text-canyon-orange group/link transition-colors"
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
      </div>
    </section>
  );
}
