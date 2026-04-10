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
    src: "/images/colorado-river-vista.jpg",
    alt: "Colorado River canyon vista with mirror reflections",
    title: "Marble Canyon",
    subtitle: "Mirror-still waters at dawn",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/paddleboard-canyon.jpg",
    alt: "Paddleboarder exploring narrow red rock canyon",
    title: "Hidden Grottoes",
    subtitle: "Explore secret canyon passages",
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
    src: "/images/boat-canyon-passage.jpg",
    alt: "Navigating narrow canyon passage by boat",
    title: "Canyon Passage",
    subtitle: "Navigating the narrows",
    span: "",
  },
  {
    src: "/images/crystal-waters.jpg",
    alt: "Crystal clear emerald waters with red rock reflections",
    title: "Crystal Waters",
    subtitle: "Emerald clarity below the dam",
    span: "md:col-span-2",
  },
  {
    src: "/images/paddleboard-cliffs.jpg",
    alt: "Paddleboarder against massive red canyon cliffs",
    title: "Towering Walls",
    subtitle: "1,000 feet of sandstone above",
    span: "",
  },
  {
    src: "/images/paddleboard-group.jpg",
    alt: "Group of paddleboarders on the Colorado River",
    title: "Group Adventures",
    subtitle: "Bring the whole crew",
    span: "",
  },
  {
    src: "/images/petroglyphs.jpg",
    alt: "Ancient petroglyphs on canyon rock walls",
    title: "Ancient History",
    subtitle: "Petroglyphs along the route",
    span: "md:col-span-2",
  },
  {
    src: "/images/canyon-ferns.jpg",
    alt: "Green ferns growing from red canyon walls above water",
    title: "Hanging Gardens",
    subtitle: "Desert oasis hidden in stone",
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
    <section id="gallery" ref={ref} className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 canyon-texture opacity-30" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="gal-heading block text-[10px] tracking-[0.5em] uppercase text-sandstone mb-5">
            Gallery
          </span>
          <h2 className="gal-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-4">
            Life on the{" "}
            <span className="italic text-sandstone">Colorado</span>
          </h2>
          <p className="gal-heading text-cool-white/40 text-[15px] font-light max-w-lg mx-auto leading-relaxed">
            Real photos from real trips. This is what&apos;s waiting for you
            downriver.
          </p>
        </div>

        {/* Photo grid */}
        <div className="gal-grid grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[200px] md:auto-rows-[240px]">
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
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-canyon-deep/0 group-hover:bg-canyon-deep/40 transition-all duration-500" />

              {/* Content on hover */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
                <span className="text-[9px] tracking-[0.4em] uppercase text-sandstone/0 group-hover:text-sandstone/90 translate-y-3 group-hover:translate-y-0 transition-all duration-500 mb-1">
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
