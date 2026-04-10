"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, Clock, AlertTriangle } from "lucide-react";

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
    <section id="booking" ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      {/* Background image accent */}
      <div className="absolute inset-0">
        <Image
          src="/images/original/booking-hero.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-canyon-deep/95" />
      </div>
      <div className="absolute inset-0 canyon-texture opacity-40" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-20">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="book-heading block text-[10px] tracking-[0.5em] uppercase text-sandstone mb-6">
            Book Your Trip
          </span>
          <h2 className="book-heading font-serif text-4xl md:text-5xl lg:text-6xl text-cool-white leading-[1.05] mb-6">
            Ready to Hit the{" "}
            <span className="italic text-sandstone">Water?</span>
          </h2>
          <p className="book-heading text-cool-white/45 text-base font-light max-w-xl mx-auto">
            To book a fishing trip, give us a call or send an email.
          </p>
        </div>

        {/* Big phone CTA */}
        <div className="book-content text-center mb-20">
          <a
            href="tel:+19283804504"
            className="inline-flex items-center gap-5 group"
          >
            <div className="w-18 h-18 rounded-full border-2 border-sandstone/40 flex items-center justify-center group-hover:border-sandstone group-hover:bg-sandstone/10 transition-all duration-400 p-4">
              <Phone className="text-sandstone" size={28} strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <span className="block text-[10px] tracking-[0.3em] uppercase text-cool-white/30 mb-1">
                Call Dave Trimble directly
              </span>
              <span className="font-serif text-3xl md:text-4xl text-sandstone phone-glow group-hover:text-canyon-orange transition-colors">
                (928) 380-4504
              </span>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
          {/* Contact info sidebar */}
          <div className="book-content lg:col-span-2 bg-cool-white/[0.02] border border-cool-white/[0.04] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-cool-white mb-10">
                Contact Info
              </h3>
              <div className="space-y-8">
                <a href="tel:+19283804504" className="flex items-start gap-4 group">
                  <Phone className="text-sandstone mt-0.5 group-hover:scale-110 transition-transform" size={17} strokeWidth={1.5} />
                  <div>
                    <span className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-1.5">Phone</span>
                    <span className="text-cool-white/70 font-light group-hover:text-sandstone transition-colors">(928) 380-4504</span>
                  </div>
                </a>
                <a href="mailto:info@leesferryonthefly.com" className="flex items-start gap-4 group">
                  <Mail className="text-sandstone mt-0.5 group-hover:scale-110 transition-transform" size={17} strokeWidth={1.5} />
                  <div>
                    <span className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-1.5">Email</span>
                    <span className="text-cool-white/70 font-light group-hover:text-sandstone transition-colors">info@leesferryonthefly.com</span>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="text-sandstone mt-0.5" size={17} strokeWidth={1.5} />
                  <div>
                    <span className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-1.5">Location</span>
                    <span className="text-cool-white/70 font-light">Lees Ferry Boat Launch<br />Marble Canyon, AZ 86036</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-sandstone mt-0.5" size={17} strokeWidth={1.5} />
                  <div>
                    <span className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-1.5">Hours</span>
                    <span className="text-cool-white/70 font-light">Year-round operation<br />Trips typically start at 7:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="book-content lg:col-span-3 bg-cool-white/[0.02] border border-cool-white/[0.04] p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
                  <option value="fly-fishing">Fly Fishing (1-2 anglers) — $600</option>
                  <option value="spin-fishing-3">Spin Fishing (up to 3) — $700</option>
                  <option value="spin-fishing-4">Spin Fishing (4 anglers) — $800</option>
                  <option value="backhaul">Backhaul Shuttle — $80/person</option>
                  <option value="kayak-rental">Kayak Rental — From $40</option>
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
                  <option value="3">3 People</option>
                  <option value="4">4 People (max per boat)</option>
                </select>
              </div>
            </div>
            <div className="mb-10">
              <label className="block text-[9px] tracking-[0.4em] uppercase text-cool-white/25 mb-3">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={3}
                placeholder="Tell us about your trip — experience level, gear needs, questions..."
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-3 px-14 py-4.5 bg-sandstone text-canyon-deep text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-canyon-orange transition-all duration-400 hover:tracking-[0.3em] group"
            >
              Send Inquiry
              <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </form>
        </div>

        {/* Booking & Cancellation Policy */}
        <div className="book-content mt-16 p-8 md:p-12 bg-cool-white/[0.02] border border-cool-white/[0.04]">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-canyon-orange" size={20} strokeWidth={1.5} />
            <h3 className="font-serif text-xl text-cool-white">
              Booking &amp; Cancellation Policy
            </h3>
          </div>
          <div className="space-y-4 text-cool-white/40 text-[13px] font-light leading-relaxed max-w-3xl">
            <p>
              We require a <strong className="text-cool-white/60 font-normal">$100 non-refundable deposit</strong> to
              reserve a day. This can be done over the phone by calling Dave Trimble at (928) 380-4504.
              The balance is due at the end of your trip.
            </p>
            <p className="text-canyon-orange/70 font-normal">
              ALL DEPOSITS ARE NONREFUNDABLE (with the exception of cancellations due to unsafe weather).
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-sandstone/50 mt-2 flex-shrink-0" />
                If you wish to re-schedule, you have 6 months from the date of cancellation to reserve another trip.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-sandstone/50 mt-2 flex-shrink-0" />
                Cancellations made within 15 days of the trip will receive NO refund or credit.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-sandstone/50 mt-2 flex-shrink-0" />
                No refunds for guests who arrive late or depart early from the trip.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-sandstone/50 mt-2 flex-shrink-0" />
                You may not re-schedule more than once. All cancellations must be submitted in writing.
              </li>
            </ul>
            <p className="text-cool-white/30 text-[12px] mt-4">
              For backhaul shuttle: 50% service fee for cancellations with more than 72 hours notice.
              Cancellations within 72 hours or arrivals 10+ minutes late forfeit all refunds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
