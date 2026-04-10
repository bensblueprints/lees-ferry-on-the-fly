"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BookingCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    trip: "",
    date: "",
    guests: "",
    message: "",
  });

  useGSAP(
    () => {
      gsap.fromTo(
        ".booking-heading",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".booking-heading", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".booking-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".booking-content", start: "top 85%" },
        }
      );
    },
    { scope: sectionRef }
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-river-dark/30 to-midnight" />
        <div className="absolute inset-0 topo-lines opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-copper/[0.03] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="booking-heading block text-[11px] tracking-[0.5em] uppercase text-copper mb-6">
            Book Your Trip
          </span>
          <h2 className="booking-heading font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05] mb-6">
            Start Your
            <br />
            <span className="italic text-copper">River Story</span>
          </h2>
          <p className="booking-heading text-mist/60 text-lg font-light max-w-xl mx-auto">
            Ready to experience Lees Ferry? Fill out the form below and
            we&apos;ll get you on the water.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-1">
          {/* Contact info */}
          <div className="booking-content lg:col-span-2 bg-cream/[0.02] border border-cream/[0.05] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-cream mb-8">
                Get in Touch
              </h3>
              <div className="space-y-8">
                <a
                  href="tel:+19285551234"
                  className="flex items-start gap-4 group"
                >
                  <Phone
                    className="text-copper mt-1 group-hover:scale-110 transition-transform"
                    size={18}
                    strokeWidth={1.5}
                  />
                  <div>
                    <span className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-1">
                      Phone
                    </span>
                    <span className="text-cream/80 font-light group-hover:text-copper transition-colors">
                      (928) 555-1234
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:fish@leesferryonthefly.com"
                  className="flex items-start gap-4 group"
                >
                  <Mail
                    className="text-copper mt-1 group-hover:scale-110 transition-transform"
                    size={18}
                    strokeWidth={1.5}
                  />
                  <div>
                    <span className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-1">
                      Email
                    </span>
                    <span className="text-cream/80 font-light group-hover:text-copper transition-colors">
                      fish@leesferryonthefly.com
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <MapPin
                    className="text-copper mt-1"
                    size={18}
                    strokeWidth={1.5}
                  />
                  <div>
                    <span className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-1">
                      Location
                    </span>
                    <span className="text-cream/80 font-light">
                      Lees Ferry, Marble Canyon
                      <br />
                      Arizona 86036
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-cream/[0.06]">
              <span className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-3">
                Season
              </span>
              <p className="text-cream/60 text-[14px] font-light leading-relaxed">
                We fish year-round at Lees Ferry. Peak seasons are spring
                (March-May) and fall (October-November), but every month offers
                exceptional fishing.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="booking-content lg:col-span-3 bg-cream/[0.02] border border-cream/[0.05] p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-cream/10 focus:border-copper/60 text-cream text-[15px] font-light pb-3 outline-none transition-colors duration-300 placeholder:text-cream/15"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-cream/10 focus:border-copper/60 text-cream text-[15px] font-light pb-3 outline-none transition-colors duration-300 placeholder:text-cream/15"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-cream/10 focus:border-copper/60 text-cream text-[15px] font-light pb-3 outline-none transition-colors duration-300 placeholder:text-cream/15"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-3">
                  Trip Type
                </label>
                <select
                  name="trip"
                  value={formState.trip}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-cream/10 focus:border-copper/60 text-cream text-[15px] font-light pb-3 outline-none transition-colors duration-300 [&>option]:bg-midnight [&>option]:text-cream"
                >
                  <option value="">Select a trip</option>
                  <option value="half-day">Half Day Wade Trip — $425</option>
                  <option value="full-day">Full Day Float Trip — $575</option>
                  <option value="multi-day">
                    Multi-Day Expedition — From $1,100
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-3">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formState.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-cream/10 focus:border-copper/60 text-cream text-[15px] font-light pb-3 outline-none transition-colors duration-300 [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-3">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formState.guests}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-cream/10 focus:border-copper/60 text-cream text-[15px] font-light pb-3 outline-none transition-colors duration-300 [&>option]:bg-midnight [&>option]:text-cream"
                >
                  <option value="">Select</option>
                  <option value="1">1 Angler</option>
                  <option value="2">2 Anglers</option>
                  <option value="3">3 Anglers</option>
                  <option value="4">4 Anglers</option>
                </select>
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-[10px] tracking-[0.4em] uppercase text-stone mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-cream/10 focus:border-copper/60 text-cream text-[15px] font-light pb-3 outline-none transition-colors duration-300 resize-none placeholder:text-cream/15"
                placeholder="Tell us about your experience level, any special requests..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-3 px-12 py-4 bg-copper text-midnight text-[12px] tracking-[0.25em] uppercase font-medium hover:bg-warm-gold transition-all duration-500 hover:tracking-[0.35em] group"
            >
              Send Inquiry
              <Send
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
