"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const entries = [
  {
    title: "Spring Hatch is On at Lees Ferry",
    date: "March 15, 2025",
    excerpt:
      "The midges are thick on the water and the trout are looking up. We're seeing consistent dry fly action from 10 AM through 2 PM. Best patterns: Griffith's Gnat, Parachute Adams, and Dave's custom midge emerger.",
    image: "/images/original/spring-fishing.jpg",
    slug: "spring-hatch-2025",
  },
  {
    title: "New Kayak Fleet for 2025 Season",
    date: "February 28, 2025",
    excerpt:
      "We've expanded our kayak and paddleboard rental fleet for the upcoming season. New models include stable sit-on-top kayaks perfect for the calm waters above Horseshoe Bend. Book your backhaul early — weekends are filling up fast.",
    image: "/images/original/kayak-horseshoe.jpg",
    slug: "new-kayak-fleet-2025",
  },
  {
    title: "Winter Fishing: Why the Cold Months Deliver",
    date: "January 10, 2025",
    excerpt:
      "Don't let the cold scare you off. Winter fishing at Lees Ferry can be incredible. Fewer crowds, hungry trout, and the clarity of the water is at its peak. Bring layers and we'll put you on fish.",
    image: "/images/original/winter-fishing.jpg",
    slug: "winter-fishing-2025",
  },
  {
    title: "Trophy Brown Trout Season",
    date: "November 5, 2024",
    excerpt:
      "Fall is prime time for big browns on the Colorado. The pre-spawn aggression has trout moving into shallow water and hitting streamers hard. We've landed multiple fish over 20 inches this month.",
    image: "/images/original/stephs-brown-trout.jpg",
    slug: "trophy-brown-trout-fall",
  },
  {
    title: "Backhaul Shuttle: What to Expect",
    date: "October 12, 2024",
    excerpt:
      "First time doing a backhaul? Here's everything you need to know — from what to bring, where to meet, how long the paddle takes, and what you'll see along the way through Horseshoe Bend.",
    image: "/images/original/paddleboard-canyon.jpg",
    slug: "backhaul-shuttle-guide",
  },
];

export default function EntriesContent() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".entry-heading",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".entry-heading", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".entry-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".entry-list", start: "top 82%" },
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
            src="/images/original/fishing-action.jpg"
            alt="Fishing action on the Colorado River"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-canyon-deep/90" />
        </div>
        <div className="absolute inset-0 canyon-texture opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <span className="entry-heading block text-xs tracking-[0.25em] uppercase text-sandstone mb-6">
            Journal
          </span>
          <h1 className="entry-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-6">
            Entries & <span className="italic text-sandstone">Reports</span>
          </h1>
          <p className="entry-heading text-warm-cream text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Fishing reports, trip stories, and news from Lees Ferry On The Fly.
            Stay up to date with conditions, catches, and stories from the
            Colorado River.
          </p>
        </div>
      </section>

      <div className="cinema-bar" />

      {/* Entries List */}
      <section className="relative py-32 md:py-44 warm-section overflow-hidden">
        <div className="absolute inset-0 canyon-texture opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="entry-list space-y-2">
            {entries.map((entry) => (
              <div
                key={entry.slug}
                className="entry-card group grid grid-cols-1 md:grid-cols-5 bg-cool-white/[0.015] border border-cool-white/[0.04] hover:border-sandstone/20 transition-all duration-600 overflow-hidden"
              >
                <div className="relative h-48 md:h-auto md:col-span-2 overflow-hidden">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canyon-deep via-canyon-deep/20 to-transparent md:bg-gradient-to-r" />
                </div>

                <div className="p-8 md:p-10 md:col-span-3 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sandstone text-xs tracking-[0.15em] uppercase mb-4">
                    <Calendar size={13} strokeWidth={1.5} />
                    {entry.date}
                  </div>
                  <h2 className="font-serif text-xl md:text-2xl text-cool-white mb-4 group-hover:text-sandstone transition-colors">
                    {entry.title}
                  </h2>
                  <p className="text-warm-cream font-normal text-base leading-relaxed mb-6">
                    {entry.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sandstone text-sm tracking-[0.2em] uppercase font-light group-hover:text-canyon-orange transition-colors">
                    Read More
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
