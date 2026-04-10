"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "David Mitchell",
    location: "Denver, CO",
    text: "I've fished all over the world — New Zealand, Patagonia, Montana — and Lees Ferry still takes my breath away. The guides here read the water like nobody else. Landed my personal best rainbow on a size 20 midge. Absolutely world-class.",
    trip: "Full Day Float Trip",
  },
  {
    name: "Sarah Chen",
    location: "Scottsdale, AZ",
    text: "First time fly fishing and I couldn't have asked for a better experience. My guide was patient, knowledgeable, and made the whole day feel effortless. I caught over a dozen fish! The canyon scenery alone is worth the drive.",
    trip: "Half Day Wade Trip",
  },
  {
    name: "James & Karen Wright",
    location: "Austin, TX",
    text: "We've done the multi-day expedition three years running now — it's become our anniversary tradition. The lodge is comfortable, the food is incredible, and every day on the river feels like a gift. These guides are the real deal.",
    trip: "Multi-Day Expedition",
  },
  {
    name: "Michael Torres",
    location: "San Diego, CA",
    text: "The technical sight fishing here is addictive. Crystal clear water, big educated trout, and guides who know exactly where to put you. This is as good as tailwater fishing gets in North America. Period.",
    trip: "Full Day Float Trip",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(next, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 7000);
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".test-heading",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".test-heading", start: "top 85%" },
        }
      );
    },
    { scope: sectionRef }
  );

  const t = testimonials[current];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-deep-forest/30 to-midnight" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-copper/[0.02] blur-[180px]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="test-heading block text-[11px] tracking-[0.5em] uppercase text-copper mb-6">
            Testimonials
          </span>
          <h2 className="test-heading font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05]">
            From the
            <br />
            <span className="italic text-copper">River Bank</span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[350px] md:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div className="text-center">
                  <Quote
                    className="mx-auto text-copper/30 mb-8"
                    size={36}
                    strokeWidth={1}
                  />
                  <p className="font-serif text-xl md:text-2xl lg:text-3xl text-cream/90 leading-relaxed mb-10 italic font-light">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <span className="block text-copper text-[15px] tracking-wide">
                      {t.name}
                    </span>
                    <span className="block text-stone text-[13px] font-light mt-1">
                      {t.location} &nbsp;·&nbsp; {t.trip}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={() => {
                prev();
                resetTimer();
              }}
              className="w-12 h-12 flex items-center justify-center border border-cream/10 hover:border-copper/40 text-mist/50 hover:text-copper transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                    resetTimer();
                  }}
                  className={`transition-all duration-500 ${
                    i === current
                      ? "w-8 h-0.5 bg-copper"
                      : "w-2 h-0.5 bg-cream/20 hover:bg-cream/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                next();
                resetTimer();
              }}
              className="w-12 h-12 flex items-center justify-center border border-cream/10 hover:border-copper/40 text-mist/50 hover:text-copper transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
