"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MapPin, Phone, Utensils, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const lodging = [
  {
    name: "Vermilion Cliffs Lodge",
    tag: "Top Pick",
    description:
      "Our top recommendation for visitors to Lees Ferry. Comfortable rooms, friendly staff, and a great location just minutes from the boat launch. Perfect for anglers and kayakers alike.",
    website: "https://vermilioncliffs.com",
    phone: "",
    address: "Marble Canyon, AZ",
    image: "/images/original/canyon-river-view.jpg",
    features: ["Near Lees Ferry boat launch", "Angler-friendly", "Clean & comfortable"],
  },
  {
    name: "Historic Marble Canyon Lodge",
    tag: "Classic",
    description:
      "A historic lodge just minutes from the Lees Ferry boat launch. Comfortable rooms, on-site restaurant, and a shop that carries local fly patterns and lures. A solid choice for your fishing trip.",
    website: "",
    phone: "1-800-726-1789",
    address: "Marble Canyon, AZ 86036",
    image: "/images/original/sunset-canyon.jpg",
    features: ["On-site restaurant", "Fly shop on premises", "Historic charm"],
  },
];

const dining = [
  {
    name: "Marble Canyon Restaurant",
    description:
      "Located inside the Marble Canyon Lodge, this restaurant serves hearty American fare perfect for fueling up before a day on the river. Breakfast, lunch, and dinner available.",
    phone: "1-800-726-1789",
  },
  {
    name: "Page, AZ Dining",
    description:
      "Just 45 minutes away, Page offers a wider variety of dining options from casual cafes to sit-down restaurants. Great for a post-trip dinner after your day at Lees Ferry.",
    phone: "",
  },
];

export default function LodgingContent() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".lodging-heading",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".lodging-heading", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".lodging-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".lodging-grid", start: "top 82%" },
        }
      );
    },
    { scope: ref }
  );

  return (
    <main ref={ref} className="relative pt-[76px]">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/original/sunset-canyon.jpg"
            alt="Sunset over Marble Canyon"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-canyon-deep/90" />
        </div>
        <div className="absolute inset-0 canyon-texture opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <span className="lodging-heading block text-xs tracking-[0.25em] uppercase text-sandstone mb-6">
            Plan Your Stay
          </span>
          <h1 className="lodging-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-6">
            Lodging & <span className="italic text-sandstone">Dining</span>
          </h1>
          <p className="lodging-heading text-warm-cream text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            The best places to stay and eat near Lees Ferry, Arizona. From
            historic lodges to local restaurants, everything you need for your
            trip.
          </p>
        </div>
      </section>

      <div className="cinema-bar" />

      {/* Lodging */}
      <section className="relative py-32 md:py-44 warm-section overflow-hidden">
        <div className="absolute inset-0 canyon-texture opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="lodging-heading font-serif text-3xl md:text-4xl text-cool-white mb-4">
              Where to <span className="italic text-sandstone">Stay</span>
            </h2>
            <p className="lodging-heading text-warm-cream text-lg font-normal max-w-lg mx-auto">
              Book early during peak season (March–October).
            </p>
          </div>

          <div className="lodging-grid space-y-2">
            {lodging.map((place) => (
              <div
                key={place.name}
                className="lodging-card group grid grid-cols-1 lg:grid-cols-2 bg-cool-white/[0.015] border border-cool-white/[0.04] hover:border-sandstone/20 transition-all duration-600 overflow-hidden"
              >
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canyon-deep via-canyon-deep/30 to-transparent lg:bg-gradient-to-r" />
                  {place.tag && (
                    <div className="absolute top-4 left-4 px-4 py-1.5 bg-sandstone text-canyon-deep text-xs tracking-[0.15em] uppercase font-bold">
                      {place.tag}
                    </div>
                  )}
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-cool-white mb-5">
                    {place.name}
                  </h3>
                  <p className="text-warm-cream font-normal text-lg leading-relaxed mb-8">
                    {place.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {place.address && (
                      <div className="flex items-center gap-3 text-cool-white/80">
                        <MapPin size={16} strokeWidth={1.5} className="text-sandstone" />
                        <span className="font-light">{place.address}</span>
                      </div>
                    )}
                    {place.phone && (
                      <a
                        href={`tel:${place.phone.replace(/-/g, "")}`}
                        className="flex items-center gap-3 text-cool-white/80 hover:text-sandstone transition-colors"
                      >
                        <Phone size={16} strokeWidth={1.5} className="text-sandstone" />
                        <span className="font-light">{place.phone}</span>
                      </a>
                    )}
                  </div>

                  <ul className="space-y-2 mb-8">
                    {place.features.map((f) => (
                      <li
                        key={f}
                        className="text-base text-cool-white/80 font-light flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sandstone/60 mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {place.website && (
                    <a
                      href={place.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sandstone text-sm tracking-[0.2em] uppercase font-light hover:text-canyon-orange transition-colors"
                    >
                      Visit Website
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cinema-bar" />

      {/* Dining */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 canyon-texture opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="lodging-heading font-serif text-3xl md:text-4xl text-cool-white mb-4">
              Where to <span className="italic text-sandstone">Eat</span>
            </h2>
            <p className="lodging-heading text-warm-cream text-lg font-normal max-w-lg mx-auto">
              Fuel up before your day on the river.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {dining.map((item) => (
              <div
                key={item.name}
                className="lodging-card p-8 md:p-12 bg-cool-white/[0.02] border border-cool-white/[0.04]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Utensils
                    className="text-sandstone"
                    size={22}
                    strokeWidth={1.3}
                  />
                  <h3 className="font-serif text-xl md:text-2xl text-cool-white">
                    {item.name}
                  </h3>
                </div>
                <p className="text-warm-cream font-normal text-lg leading-relaxed mb-6">
                  {item.description}
                </p>
                {item.phone && (
                  <a
                    href={`tel:${item.phone.replace(/-/g, "")}`}
                    className="inline-flex items-center gap-2 text-sandstone text-sm tracking-[0.2em] uppercase font-light hover:text-canyon-orange transition-colors"
                  >
                    <Phone size={14} strokeWidth={1.5} />
                    {item.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
