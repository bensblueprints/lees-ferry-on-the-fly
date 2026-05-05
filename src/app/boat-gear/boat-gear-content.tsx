"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Ship, Wrench, Fish, Feather } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const gearItems = [
  {
    icon: Ship,
    title: "Custom Koffler Jet Boat",
    description:
      "Our purpose-built Koffler jet boat is designed for the shallow, rocky waters of the Colorado River. Powered by a reliable jet drive that can run in just inches of water, it gets you to the best fishing holes and drop-off points safely and efficiently.",
    image: "/images/original/koffler-jet-boat.jpg",
    details: [
      "Shallow-water jet drive",
      "USCG inspected & licensed",
      "Custom rigged for Lees Ferry",
      "Stable casting platform",
    ],
  },
  {
    icon: Wrench,
    title: "Sage & Echo Fly Rods",
    description:
      "We outfit our guests with premium Sage and Echo fly rods — industry-leading brands known for their sensitivity, accuracy, and durability. Whether you're drifting nymphs or casting dry flies, you'll have the right tool for the job.",
    image: "/images/original/fly-rod-setup.jpg",
    details: [
      "Sage Foundation & Echo Carbon series",
      "Matched to Lees Ferry conditions",
      "9-foot 5-6 weight setups",
      "Backup rods always on board",
    ],
  },
  {
    icon: Fish,
    title: "Galvan Fly Reels",
    description:
      "Galvan reels are machined in the USA and built to handle the blistering runs of Lees Ferry rainbow trout. Their sealed drag systems perform flawlessly in the desert heat and cold tailwater.",
    image: "/images/original/fishing-gear.jpg",
    details: [
      "Galvan Torque & Rush series",
      "Sealed drag for all conditions",
      "Lightweight aluminum construction",
      "Spare spools with different lines",
    ],
  },
  {
    icon: Feather,
    title: "Custom Hand-Tied Flies",
    description:
      "Dave ties his own patterns specifically for Lees Ferry trout. These aren't generic store-bought flies — they're proven patterns refined over decades of guiding on this stretch of river.",
    image: "/images/original/custom-flies.jpg",
    details: [
      "Proven Lees Ferry patterns",
      "Tied to match local hatches",
      "Midges, scuds, san juan worms",
      "Always fresh and sharp hooks",
    ],
  },
];

export default function BoatGearContent() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gear-heading",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gear-heading", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".gear-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gear-grid", start: "top 82%" },
        }
      );
    },
    { scope: ref }
  );

  return (
    <main ref={ref} className="relative pt-[76px]">
      {/* Page Header */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/original/koffler-jet-boat.jpg"
            alt="Custom Koffler jet boat on the Colorado River"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-canyon-deep/90" />
        </div>
        <div className="absolute inset-0 canyon-texture opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <span className="gear-heading block text-xs tracking-[0.25em] uppercase text-sandstone mb-6">
            Equipment
          </span>
          <h1 className="gear-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-6">
            Our Boat & <span className="italic text-sandstone">Gear</span>
          </h1>
          <p className="gear-heading text-warm-cream text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Professional-grade equipment, meticulously maintained. From our
            custom Koffler jet boat to hand-tied flies, every piece of gear is
            chosen to give you the best day on the water.
          </p>
        </div>
      </section>

      <div className="cinema-bar" />

      {/* Gear Grid */}
      <section className="relative py-32 md:py-44 warm-section overflow-hidden">
        <div className="absolute inset-0 canyon-texture opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="gear-grid grid grid-cols-1 lg:grid-cols-2 gap-2">
            {gearItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="gear-card group bg-cool-white/[0.015] border border-cool-white/[0.04] hover:border-sandstone/20 transition-all duration-600 overflow-hidden"
                >
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-canyon-deep via-canyon-deep/40 to-transparent" />
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-5">
                      <Icon
                        className="text-water-light"
                        size={22}
                        strokeWidth={1.3}
                      />
                      <h2 className="font-serif text-xl md:text-2xl text-cool-white">
                        {item.title}
                      </h2>
                    </div>

                    <p className="text-warm-cream font-normal text-lg leading-relaxed mb-8">
                      {item.description}
                    </p>

                    <ul className="space-y-3">
                      {item.details.map((d) => (
                        <li
                          key={d}
                          className="text-base text-cool-white/80 font-light flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sandstone/60 mt-1.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
