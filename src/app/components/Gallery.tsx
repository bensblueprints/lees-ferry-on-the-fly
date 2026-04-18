"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  {
    src: "/images/original/drone-aerial-river.jpg",
    alt: "Aerial drone view of the Colorado River at Lees Ferry",
    title: "Lees Ferry",
    subtitle: "Aerial view of the Colorado",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/original/stephs-brown-trout.jpg",
    alt: "Brown trout caught fly fishing at Lees Ferry",
    title: "Trophy Trout",
    subtitle: "Brown trout on the fly",
    span: "",
  },
  {
    src: "/images/horseshoe-bend.webp",
    alt: "Aerial view of Horseshoe Bend on the Colorado River",
    title: "Horseshoe Bend",
    subtitle: "The iconic view from above",
    span: "",
  },
  {
    src: "/images/original/guide-on-river.jpg",
    alt: "Guide Dave on the Colorado River with clients",
    title: "On the Water",
    subtitle: "A day with Captain Dave",
    span: "",
  },
  {
    src: "/images/original/winter-fishing.jpg",
    alt: "Winter fly fishing on the Colorado River",
    title: "Year-Round Fishing",
    subtitle: "Fish in every season",
    span: "",
  },
  {
    src: "/images/original/kayak-horseshoe.jpg",
    alt: "Kayaking through Horseshoe Bend canyon",
    title: "Kayak the Canyon",
    subtitle: "Paddle through paradise",
    span: "",
  },
  {
    src: "/images/original/spring-fishing.jpg",
    alt: "Spring fishing on the Colorado River at Lees Ferry",
    title: "Spring Season",
    subtitle: "Peak trout fishing",
    span: "col-span-2",
  },
  {
    src: "/images/original/fishing-action.jpg",
    alt: "Angler fighting a fish on the Colorado River",
    title: "Tight Lines",
    subtitle: "The fight is on",
    span: "",
  },
  {
    src: "/images/original/colorado-river-scenic.jpg",
    alt: "Scenic Colorado River canyon landscape",
    title: "Canyon Views",
    subtitle: "Navajo sandstone cliffs",
    span: "",
  },
  {
    src: "/images/original/sunset-canyon.jpg",
    alt: "Sunset over the canyon at Lees Ferry",
    title: "Golden Hour",
    subtitle: "Sunset on the Colorado",
    span: "",
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gal-heading",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gal-heading", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".gal-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gal-grid", start: "top 82%" },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section id="gallery" ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 canyon-texture opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="gal-heading block text-xs tracking-[0.25em] uppercase text-sandstone mb-6">
            Gallery
          </span>
          <h2 className="gal-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-5">
            Life on the{" "}
            <span className="italic text-sandstone">Colorado</span>
          </h2>
          <p className="gal-heading text-warm-cream text-lg font-normal max-w-lg mx-auto leading-relaxed">
            Real photos from real trips. This is what&apos;s waiting for you
            at Lees Ferry.
          </p>
        </div>

        {/* Photo grid */}
        <div className="gal-grid grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[200px] md:auto-rows-[260px]">
          {photos.map((photo) => (
            <motion.div
              key={photo.src}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`gal-item group relative overflow-hidden cursor-pointer ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-canyon-deep/0 group-hover:bg-canyon-deep/40 transition-all duration-500" />

              {/* Content on hover */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
                <span className="text-xs tracking-[0.2em] uppercase text-sandstone/0 group-hover:text-sandstone/90 translate-y-3 group-hover:translate-y-0 transition-all duration-500 mb-1">
                  {photo.subtitle}
                </span>
                <h3 className="font-serif text-lg text-cool-white/0 group-hover:text-cool-white translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  {photo.title}
                </h3>
                <div className="mt-3 h-px bg-sandstone/0 group-hover:bg-sandstone/50 scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-700 delay-100 max-w-[120px]" />
              </div>

              {/* Corner frames */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-sandstone/0 group-hover:border-sandstone/40 transition-all duration-400" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-sandstone/0 group-hover:border-sandstone/40 transition-all duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
