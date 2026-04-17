"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What are the 2025 guide rates?",
    a: "Fly fishing is $650 for 1 angler or $700 for 2 anglers. Spin fishing is $700 for 1-3 anglers or $800 for 4 anglers. There's a $25 charge for any non-fishing passenger. Maximum 4 people per boat. We do NOT fly fish 3 or 4 anglers.",
  },
  {
    q: "What's included in a guided fishing charter?",
    a: "Every guided charter includes a USCG licensed captain, our custom Koffler jet boat, fuel, fly rods (Sage & Echo), Galvan fly reels, hand-tied flies and lures, and 8 hours on the water — typically starting around 7:00 AM.",
  },
  {
    q: "What should I bring on a fishing trip?",
    a: "Bring snacks, drinks, and lunch. You'll also want a valid Arizona fishing license (purchasable online), polarized sunglasses, sunscreen, and 9-foot 5x leaders with 4x-5x fluorocarbon tippet. Waders and boots are available for rental locally at Marble Canyon Lodge.",
  },
  {
    q: "What is a backhaul / water taxi shuttle?",
    a: "A backhaul is a jet boat ride that transports you and your kayak or paddleboard upstream from Lees Ferry to a destination of your choice. Most folks ride 10 miles up to Petroglyph Beach day-use area, just below Glen Canyon Dam (15 miles upstream is the max). You pick how long you want to paddle and we drop you off accordingly — two hours or all day, your call.",
  },
  {
    q: "How much does the backhaul shuttle cost?",
    a: "The shuttle is $80 per person, which includes upstream transport for one person plus one watercraft under 50 lbs. Kayak rentals start at $40 plus tax and booking fee. There's an additional $80 charge for gear and watercraft exceeding 50 lbs total.",
  },
  {
    q: "Do I need my own kayak or paddleboard?",
    a: "No! We offer kayak and stand-up paddleboard rentals starting at $40. You're also welcome to bring your own gear — just no canoes or watercraft exceeding 15 feet, and no watercraft with frames.",
  },
  {
    q: "What's the booking and cancellation policy?",
    a: "We require a $100 non-refundable deposit to reserve a day. The balance is due at the end of your trip. If you wish to reschedule, you have 6 months from cancellation to rebook (one reschedule only). Cancellations within 15 days of the trip receive NO refund or credit. All cancellations must be submitted in writing.",
  },
  {
    q: "Where should I stay while visiting?",
    a: "Our top pick is our friends at Vermilion Cliffs Lodge (vermilioncliffs.com). The Marble Canyon Lodge is another solid option just minutes from the Lees Ferry boat launch — comfortable rooms, on-site restaurant, and a shop that carries local fly patterns and lures. Call them at 1-800-726-1789. More options in Page, AZ coming soon.",
  },
  {
    q: "How far is Lees Ferry from major cities?",
    a: "Page, AZ: 45 mi via US-89 & US-89A N. Grand Canyon North Rim: 85 mi via Hwy 67 to Hwy 89A. Flagstaff: 124 mi via N 89 to US-89 N. Grand Canyon Village: 134 mi via Hwy 64 to 89 to 89A. Williams: 136 mi via I-40 to Hwy 89 to 89A. Sedona: 153 mi via Hwy 89A N to 89 N to 89A. Phoenix: 273 mi via I-17 to I-40 to Hwy 89 to 89A.",
  },
  {
    q: "What kind of fish will I catch?",
    a: "Lees Ferry is one of the top trout fisheries in the Southwest. You'll be targeting trophy rainbow and brown trout in the gin-clear tailwaters below Glen Canyon Dam. The water temperature stays between 46-62°F year-round, making it a year-round fishery.",
  },
  {
    q: "How do I book a trip?",
    a: "Call Dave Trimble directly at (928) 380-4504 or email info@leesferryonthefly.com. We recommend booking at least a few days in advance, especially during peak season (March-October).",
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
    <section id="faq" ref={ref} className="relative py-32 md:py-44 warm-section overflow-hidden">
      <div className="absolute inset-0 canyon-texture opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="faq-heading block text-[10px] tracking-[0.5em] uppercase text-sandstone mb-6">
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
                  className="w-full flex items-center justify-between py-7 text-left group"
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
                    <p className="text-cool-white/45 font-light text-[14px] leading-relaxed pb-7 pr-12">
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
