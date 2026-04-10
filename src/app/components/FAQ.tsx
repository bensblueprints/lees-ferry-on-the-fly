"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What exactly is a backhaul shuttle?",
    a: "A backhaul is a jet boat ride upriver from Lees Ferry through the Horseshoe Bend corridor. We load your kayak, paddleboard, or rental gear on our boat, take you upstream, and drop you off. Then you paddle back downstream at your own pace through the stunning canyon — no fighting the current!",
  },
  {
    q: "Do I need my own kayak or paddleboard?",
    a: "Nope! We offer high-quality kayak and stand-up paddleboard rentals. Of course, you're welcome to bring your own gear too. We can accommodate most standard-size kayaks and SUPs on the jet boat.",
  },
  {
    q: "How long does the paddle back take?",
    a: "Most paddlers take 3-5 hours to float back to Lees Ferry, depending on how many stops you make along the way. There's no rush — the current does most of the work. Many people spend time exploring hidden grottoes, photographing petroglyphs, and swimming in crystal-clear side channels.",
  },
  {
    q: "Do I need experience kayaking or paddleboarding?",
    a: "Not at all! The downstream float is gentle and beginner-friendly. The Colorado River below the dam flows at a manageable pace with no rapids in this stretch. We'll give you a safety briefing and basic instruction before you head out.",
  },
  {
    q: "What should I bring?",
    a: "Sunscreen, hat, sunglasses (with a strap!), water, snacks, a waterproof phone case, and a change of clothes. We provide life jackets. In summer, water shoes and quick-dry clothing are recommended. In cooler months, bring layers.",
  },
  {
    q: "Is this safe for kids?",
    a: "Yes! Families love this trip. Kids should be comfortable around water and able to sit in a kayak or on a paddleboard. We recommend ages 6+ for the full shuttle experience. Life jackets are required and provided for all ages.",
  },
  {
    q: "What's the water temperature?",
    a: "The Colorado River below Glen Canyon Dam stays between 46-62°F year-round because it comes from the bottom of Lake Powell. It's refreshing in summer! In cooler months, wetsuits or splash gear are recommended.",
  },
  {
    q: "How do I book?",
    a: "Call Dave directly at (928) 380-4504 or use the booking form on this page. We recommend booking at least a few days in advance, especially during peak season (March-October). Same-day availability is sometimes possible — just give us a call!",
  },
];

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".faq-heading",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".faq-heading", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".faq-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: ".faq-list", start: "top 82%" },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section id="faq" ref={ref} className="relative py-28 md:py-40 warm-section overflow-hidden">
      <div className="absolute inset-0 canyon-texture opacity-30" />

      <div className="relative z-10 max-w-[900px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="faq-heading block text-[10px] tracking-[0.5em] uppercase text-sandstone mb-5">
            FAQ
          </span>
          <h2 className="faq-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05]">
            Common{" "}
            <span className="italic text-sandstone">Questions</span>
          </h2>
        </div>

        {/* FAQ list */}
        <div className="faq-list space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="faq-item border-b border-cool-white/[0.06] last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span
                    className={`font-serif text-lg md:text-xl pr-8 transition-colors duration-300 ${
                      isOpen ? "text-sandstone" : "text-cool-white group-hover:text-sandstone/80"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0">
                    {isOpen ? (
                      <Minus className="text-sandstone" size={18} strokeWidth={1.5} />
                    ) : (
                      <Plus className="text-cool-white/30 group-hover:text-sandstone/60 transition-colors" size={18} strokeWidth={1.5} />
                    )}
                  </span>
                </button>
                <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                  <div>
                    <p className="text-cool-white/45 font-light text-[14px] leading-relaxed pb-6 pr-12">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
