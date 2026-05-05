"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Award, Shield, Heart, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const traits = [
  {
    icon: Award,
    title: "Local Expert",
    text: "Dave has been guiding on the Colorado River at Lees Ferry since 1999. Nobody knows these waters better.",
  },
  {
    icon: Shield,
    title: "Safety First",
    text: "Fully licensed by the U.S. Coast Guard. Your safety on the water is always the top priority.",
  },
  {
    icon: Heart,
    title: "Passionate",
    text: "This isn't just a job — it's a lifelong passion for the river, the fish, and sharing it with others.",
  },
];

export default function GuidesContent() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".guide-heading",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".guide-heading", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".guide-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".guide-grid", start: "top 82%" },
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
            src="/images/original/guide-on-river.jpg"
            alt="Captain Dave Trimble on the Colorado River"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-canyon-deep/90" />
        </div>
        <div className="absolute inset-0 canyon-texture opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <span className="guide-heading block text-xs tracking-[0.25em] uppercase text-sandstone mb-6">
            Your Guide
          </span>
          <h1 className="guide-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-6">
            Captain <span className="italic text-sandstone">Dave Trimble</span>
          </h1>
          <p className="guide-heading text-warm-cream text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            USCG Licensed Captain &middot; Owner &middot; Guiding Lees Ferry
            since 1999
          </p>
        </div>
      </section>

      <div className="cinema-bar" />

      {/* Bio */}
      <section className="relative py-32 md:py-44 warm-section overflow-hidden">
        <div className="absolute inset-0 canyon-texture opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="guide-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="guide-content relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/original/dave-trimble-guide.jpg"
                alt="Captain Dave Trimble"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_40px_rgba(11,22,34,0.4)]" />
            </div>

            {/* Text */}
            <div className="guide-content">
              <h2 className="font-serif text-3xl md:text-4xl text-cool-white mb-8">
                A Lifetime on the{" "}
                <span className="italic text-sandstone">Colorado</span>
              </h2>
              <div className="space-y-5 text-warm-cream text-lg font-normal leading-relaxed mb-10">
                <p>
                  Dave Trimble has been guiding anglers on the Colorado River at
                  Lees Ferry since 1999. What started as a passion for fly
                  fishing turned into a career sharing one of the Southwest's
                  premier trout fisheries with visitors from around the world.
                </p>
                <p>
                  As a U.S. Coast Guard licensed captain, Dave combines decades
                  of local knowledge with a commitment to safety and
                  hospitality. Whether you're a seasoned angler chasing trophy
                  trout or a first-time kayaker exploring Horseshoe Bend, Dave
                  ensures every trip is memorable.
                </p>
                <p>
                  When he's not on the water, you'll find Dave tying custom
                  flies, maintaining his Koffler jet boat, or exploring new
                  stretches of river. The Colorado isn't just his office — it's
                  his home.
                </p>
              </div>

              <a
                href="tel:+19283804504"
                className="inline-flex items-center gap-3 px-10 py-4 bg-sandstone text-canyon-deep text-sm tracking-[0.25em] uppercase font-semibold hover:bg-canyon-orange transition-all duration-400"
              >
                <Phone size={16} strokeWidth={1.5} />
                Call Dave
              </a>
            </div>
          </div>

          {/* Traits */}
          <div className="guide-content mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-2">
            {traits.map((trait) => {
              const Icon = trait.icon;
              return (
                <div
                  key={trait.title}
                  className="p-8 md:p-10 bg-cool-white/[0.02] border border-cool-white/[0.04]"
                >
                  <Icon
                    className="text-sandstone mb-5"
                    size={28}
                    strokeWidth={1.3}
                  />
                  <h3 className="font-serif text-xl text-cool-white mb-3">
                    {trait.title}
                  </h3>
                  <p className="text-warm-cream font-normal text-base leading-relaxed">
                    {trait.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
