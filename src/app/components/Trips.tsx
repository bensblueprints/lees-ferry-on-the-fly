"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Users, Star, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const trips = [
  {
    name: "Half Day Wade Trip",
    duration: "4-5 Hours",
    guests: "1-2 Anglers",
    price: "$425",
    featured: false,
    description:
      "Perfect introduction to Lees Ferry. Wade the crystal-clear flats targeting feeding trout with expert guidance on technique and fly selection.",
    includes: [
      "All flies & terminal tackle",
      "Wading gear available",
      "Cold drinks & snacks",
      "Casting instruction",
    ],
  },
  {
    name: "Full Day Float Trip",
    duration: "8-9 Hours",
    guests: "1-2 Anglers",
    price: "$575",
    featured: true,
    description:
      "Our signature experience. Drift the full stretch of Lees Ferry by boat, accessing the best runs and riffles. Includes a riverside lunch in the canyon.",
    includes: [
      "All flies & terminal tackle",
      "Drift boat & equipment",
      "Gourmet riverside lunch",
      "Professional photos",
    ],
  },
  {
    name: "Multi-Day Expedition",
    duration: "2-3 Days",
    guests: "1-4 Anglers",
    price: "From $1,100",
    featured: false,
    description:
      "The ultimate Lees Ferry immersion. Multiple days of fishing with premium lodge accommodations, exploring every corner of this legendary fishery.",
    includes: [
      "All flies & terminal tackle",
      "Lodge accommodations",
      "All meals included",
      "Airport transfers available",
    ],
  },
];

export default function Trips() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".trips-heading",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".trips-heading", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".trip-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".trips-grid", start: "top 80%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="trips"
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-deep-forest/50 to-midnight" />
        <div className="absolute top-1/3 left-0 w-[600px] h-[400px] rounded-full bg-copper/[0.03] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="trips-heading block text-[11px] tracking-[0.5em] uppercase text-copper mb-6">
            Guided Trips
          </span>
          <h2 className="trips-heading font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05]">
            Choose Your
            <br />
            <span className="italic text-copper">Adventure</span>
          </h2>
        </div>

        {/* Trips grid */}
        <div className="trips-grid grid grid-cols-1 lg:grid-cols-3 gap-1">
          {trips.map((trip) => (
            <div
              key={trip.name}
              className={`trip-card group relative flex flex-col p-8 md:p-10 transition-all duration-700 ${
                trip.featured
                  ? "bg-copper/[0.06] border border-copper/20 hover:border-copper/40"
                  : "bg-cream/[0.02] border border-cream/[0.05] hover:border-copper/20"
              }`}
            >
              {trip.featured && (
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper to-transparent" />
              )}

              {/* Featured badge */}
              {trip.featured && (
                <div className="flex items-center gap-2 mb-6">
                  <Star
                    className="text-copper"
                    size={14}
                    fill="currentColor"
                  />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-copper">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="font-serif text-2xl md:text-3xl text-cream mb-3">
                {trip.name}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-6 mb-6 text-mist/50 text-[13px]">
                <span className="flex items-center gap-2">
                  <Clock size={14} strokeWidth={1.5} />
                  {trip.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Users size={14} strokeWidth={1.5} />
                  {trip.guests}
                </span>
              </div>

              <p className="text-mist/60 font-light leading-relaxed text-[15px] mb-8 flex-grow">
                {trip.description}
              </p>

              {/* Includes */}
              <div className="mb-10">
                <span className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-4">
                  Includes
                </span>
                <ul className="space-y-2">
                  {trip.includes.map((item) => (
                    <li
                      key={item}
                      className="text-[13px] text-mist/50 font-light flex items-start gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-copper mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="mt-auto">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <span className="block text-[10px] tracking-[0.3em] uppercase text-stone mb-1">
                      Starting at
                    </span>
                    <span className="font-serif text-3xl text-copper">
                      {trip.price}
                    </span>
                    {!trip.price.includes("From") && (
                      <span className="text-stone text-sm ml-1">/ person</span>
                    )}
                  </div>
                </div>

                <a
                  href="#booking"
                  className={`flex items-center justify-center gap-3 py-4 text-[12px] tracking-[0.25em] uppercase transition-all duration-500 group/btn ${
                    trip.featured
                      ? "bg-copper text-midnight hover:bg-warm-gold hover:tracking-[0.35em]"
                      : "border border-cream/15 text-cream hover:border-copper/40 hover:text-copper hover:tracking-[0.35em]"
                  }`}
                >
                  Book This Trip
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-stone text-[13px] font-light mt-12">
          All trips include professional guide service, instruction for all
          skill levels, and Arizona fishing license assistance.
        </p>
      </div>
    </section>
  );
}
