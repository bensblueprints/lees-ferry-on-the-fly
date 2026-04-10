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
    a: "Fly fishing for 1-2 anglers is $600. Spin fishing for up to 3 anglers is $700. Four anglers (spin fishing only) is $800. There's a $25 charge for any non-fishing passenger. Maximum 4 people per boat. We do NOT fly fish 3 or 4 anglers.",
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
    q: "What is a backhaul shuttle?",
    a: "A backhaul is a jet boat ride upriver from Lees Ferry through the Horseshoe Bend corridor. We load your kayak, paddleboard, or rental gear on our boat, take you 10 miles upstream, and drop you off. Then you paddle 15 miles back downstream at your own pace — no fighting the current!",
  },
  {
    q: "How much does the backhaul shuttle cost?",
    a: "The shuttle is $80 per person for day trips, which includes upstream transport for one person plus one watercraft under 50 lbs. Kayak rentals start at $40 plus tax and booking fee. There's an additional $80 charge for gear exceeding 50 lbs total.",
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
    a: "We highly recommend the Marble Canyon Lodge — it's located just minutes from the Lees Ferry boat launch. They have comfortable rooms, an on-site restaurant, and carry local fly patterns and lures. Call them at 1-800-726-1789 to book your room.",
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
