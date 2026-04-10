"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BookingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    guests: "",
    message: "",
  });

  useGSAP(
    () => {
      gsap.fromTo(
        ".book-heading",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".book-heading", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".book-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".book-content", start: "top 85%" },
        }
      );
    },
    { scope: ref }
  );

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const inputClass =
    "w-full bg-transparent border-b border-cool-white/10 focus:border-sandstone/60 text-cool-white text-[14px] font-light pb-3 outline-none transition-colors duration-300 placeholder:text-cool-white/15";

  return (
    <section id="booking" ref={ref} className="relative py-28 md:py-40 overflow-hidden">
      {/* Background image accent */}
      <div className="absolute inset-0">
        <Image
          src="/images/horseshoe-bend.webp"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-canyon-deep/95" />
      </div>
      <div className="absolute inset-0 canyon-texture opacity-40" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="book-heading block text-[10px] tracking-[0.5em] uppercase text-sandstone mb-5">
            Book Your Adventure
          </span>
          <h2 className="book-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-5">
            Ready to Hit the{" "}
            <span className="italic text-sandstone">Water?</span>
          </h2>
          <p className="book-heading text-cool-white/45 text-base font-light max-w-xl mx-auto">
            Fill out the form or give Dave a call — he&apos;ll get you on the
            river.
          </p>
        </div>

        {/* Big phone CTA */}
        <div className="book-content text-center mb-16">
          <a
            href="tel:+19283804504"
            className="inline-flex items-center gap-4 group"
          >
            <div className="w-16 h-16 rounded-full border-2 border-sandstone/40 flex items-center justify-center group-hover:border-sandstone group-hover:bg-sandstone/10 transition-all duration-400">
              <Phone className="text-sandstone" size={24} strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <span className="block text-[10px] tracking-[0.3em] uppercase text-cool-white/30">
                Call or text Dave directly
              </span>
              <span className="font-serif text-3xl md:text-4xl text-sandstone phone-glow group-hover:text-canyon-orange transition-colors">
                (928) 380-4504
              </span>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-1">
          {/* Contact info sidebar */}
          <div className="book-content lg:col-span-2 bg-cool-white/[0.02] border border-cool-white/[0.04] p-7 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-cool-white mb-8">
                Contact Info
              </h3>
              <div className="space-y-7">
                <a href="tel:+19283804504" className="flex items-start gap-4 group">
                  <Phone className="text-sandstone mt-0.5 group-hover:scale-110 transition-transform" size={17} strokeWidth={1.5} />
                  <div>
                    <span className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-1">Phone</span>
                    <span className="text-cool-white/70 font-light group-hover:text-sandstone transition-colors">(928) 380-4504</span>
                  </div>
                </a>
                <a href="mailto:dave@leesferryonthefly.com" className="flex items-start gap-4 group">
                  <Mail className="text-sandstone mt-0.5 group-hover:scale-110 transition-transform" size={17} strokeWidth={1.5} />
                  <div>
                    <span className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-1">Email</span>
                    <span className="text-cool-white/70 font-light group-hover:text-sandstone transition-colors">dave@leesferryonthefly.com</span>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="text-sandstone mt-0.5" size={17} strokeWidth={1.5} />
                  <div>
                    <span className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-1">Location</span>
                    <span className="text-cool-white/70 font-light">Lees Ferry Boat Launch<br />Marble Canyon, AZ 86036</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-sandstone mt-0.5" size={17} strokeWidth={1.5} />
                  <div>
                    <span className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-1">Season</span>
                    <span className="text-cool-white/70 font-light">Year-round operation<br />Peak: March — October</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="book-content lg:col-span-3 bg-cool-white/[0.02] border border-cool-white/[0.04] p-7 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-3">Full Name</label>
                <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-3">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@email.com" className={inputClass} />
              </div>
              <div>
                <label className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-3">Phone</label>
                <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="(555) 000-0000" className={inputClass} />
              </div>
              <div>
                <label className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-3">Service</label>
                <select name="service" value={form.service} onChange={onChange} className={`${inputClass} [&>option]:bg-canyon-deep [&>option]:text-cool-white`}>
                  <option value="">Select a service</option>
                  <option value="kayak-shuttle">Kayak Backhaul Shuttle</option>
                  <option value="sup-shuttle">Paddleboard Shuttle</option>
                  <option value="rental-kayak">Kayak Rental + Shuttle</option>
                  <option value="rental-sup">SUP Rental + Shuttle</option>
                  <option value="fishing">Guided Fishing Trip</option>
                </select>
              </div>
              <div>
                <label className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-3">Preferred Date</label>
                <input type="date" name="date" value={form.date} onChange={onChange} className={`${inputClass} [color-scheme:dark]`} />
              </div>
              <div>
                <label className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-3">Group Size</label>
                <select name="guests" value={form.guests} onChange={onChange} className={`${inputClass} [&>option]:bg-canyon-deep [&>option]:text-cool-white`}>
                  <option value="">Select</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3-4">3-4 People</option>
                  <option value="5+">5+ People</option>
                </select>
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-3">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={3}
                placeholder="Tell us about your group, experience level, any questions..."
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-3 px-12 py-4 bg-sandstone text-canyon-deep text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-canyon-orange transition-all duration-400 hover:tracking-[0.3em] group"
            >
              Send Inquiry
              <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
