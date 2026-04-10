"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Utensils, Bed, MapPin } from "lucide-react";

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
          <span className="lodge-heading block text-[10px] tracking-[0.5em] uppercase text-sandstone mb-6">
            Where to Stay
          </span>
          <h2 className="lodge-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-6">
            Lodging &amp;{" "}
            <span className="italic text-sandstone">Dining</span>
          </h2>
          <p className="lodge-heading text-cool-white/40 text-base font-light max-w-xl mx-auto leading-relaxed">
            We highly recommend the Marble Canyon Lodge for lodging and dining
            while you&apos;re here. Located just minutes from the boat launch.
          </p>
        </div>

        {/* Lodge info */}
        <div className="lodge-cards grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-5xl mx-auto">
          <div className="lodge-card group p-10 md:p-12 bg-cool-white/[0.02] border border-cool-white/[0.04] hover:border-sandstone/20 transition-all duration-500">
            <Bed className="text-sandstone mb-6" size={28} strokeWidth={1.2} />
            <h3 className="font-serif text-xl md:text-2xl text-cool-white mb-4">
              Historic Marble Canyon Lodge
            </h3>
            <p className="text-cool-white/45 font-light text-[14px] leading-relaxed mb-6">
              A historic lodge with comfortable rooms right at the gateway to
              Lees Ferry. Whether you&apos;re here to fish, whitewater raft, or kayak
              the scenic Horseshoe Bend — this is the place to stay.
            </p>
            <a
              href="tel:+18007261789"
              className="inline-flex items-center gap-2 text-sandstone text-[13px] font-light hover:text-canyon-orange transition-colors"
            >
              <Phone size={14} strokeWidth={1.5} />
              1-800-726-1789
            </a>
          </div>

          <div className="lodge-card group p-10 md:p-12 bg-cool-white/[0.02] border border-cool-white/[0.04] hover:border-sandstone/20 transition-all duration-500">
            <Utensils className="text-sandstone mb-6" size={28} strokeWidth={1.2} />
            <h3 className="font-serif text-xl md:text-2xl text-cool-white mb-4">
              Marble Canyon Restaurant
            </h3>
            <p className="text-cool-white/45 font-light text-[14px] leading-relaxed mb-6">
              Great dining right on-site at the lodge. Fuel up before your trip
              or enjoy a meal after a long day on the water. The lodge also
              carries local fly patterns and lures in their shop.
            </p>
            <span className="text-cool-white/30 text-[12px] tracking-[0.2em] uppercase font-light">
              On-site at the lodge
            </span>
          </div>

          <div className="lodge-card group p-10 md:p-12 bg-cool-white/[0.02] border border-cool-white/[0.04] hover:border-sandstone/20 transition-all duration-500">
            <MapPin className="text-sandstone mb-6" size={28} strokeWidth={1.2} />
            <h3 className="font-serif text-xl md:text-2xl text-cool-white mb-4">
              Getting Here
            </h3>
            <p className="text-cool-white/45 font-light text-[14px] leading-relaxed mb-6">
              Marble Canyon Lodge and the Lees Ferry boat launch are located on
              US 89A in Marble Canyon, Arizona — about 2.5 hours north of
              Flagstaff and 5 hours from Phoenix.
            </p>
            <span className="text-cool-white/30 text-[12px] tracking-[0.2em] uppercase font-light">
              Marble Canyon, AZ 86036
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
