"use client";

import React, { useState } from "react";
import { Sparkles, Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Haute Couture Fitting Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <div className="bg-[#FFF8F0] min-h-screen pb-28">
      {/* 1. Hero */}
      <section className="relative py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#C6A15B]/25 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E8A9BD]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8A9BD]/20 border border-[#C6A15B]/40 text-[#A83263] text-xs uppercase tracking-[0.3em] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Private Concierge</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#241C20] font-normal leading-[1.08]">
            Connect with the <span className="font-editorial italic font-semibold text-[#A83263]">Palace</span>
          </h1>

          <div className="w-20 h-[1.5px] bg-[#C6A15B] mx-auto my-3" />

          <p className="text-base sm:text-lg text-[#241C20]/75 font-light max-w-xl mx-auto leading-relaxed">
            Our private client relations team is at your sovereign service for atelier consultations, bespoke bridal commissions, and VIP sanctuary bookings.
          </p>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
                Sanctuary Locations
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#241C20] mt-1 mb-4">
                Our Flagship Salons
              </h2>
              <p className="text-xs sm:text-sm text-[#241C20]/75 font-light leading-relaxed">
                Step into an oasis of calm. Our private suites feature rainfall showers, champagne bar, and direct consultation with master artisans.
              </p>
            </div>

            <div className="space-y-6">
              {/* Location 1 */}
              <div className="p-6 rounded-[14px] bg-white border border-[#C6A15B]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A83263] font-bold">
                  <MapPin className="w-4 h-4 text-[#C6A15B]" />
                  <span>Empress Flagship Atelier & Spa</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#241C20]">
                  Plot 14, Gana Street, Maitama
                </h4>
                <p className="text-xs text-[#241C20]/70 font-light">
                  Abuja, FCT, Nigeria • Valet Parking & Private VIP Suite
                </p>
              </div>

              {/* Location 2 */}
              <div className="p-6 rounded-[14px] bg-white border border-[#C6A15B]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A83263] font-bold">
                  <MapPin className="w-4 h-4 text-[#C6A15B]" />
                  <span>Asokoro Private Sanctuary</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#241C20]">
                  Yakubu Gowon Crescent, Asokoro
                </h4>
                <p className="text-xs text-[#241C20]/70 font-light">
                  Abuja, Nigeria • Private Salon & Fitting Appointments
                </p>
              </div>

              {/* Phone & Email */}
              <div className="p-6 rounded-[14px] bg-white border border-[#C6A15B]/30 space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <a href="tel:09071649725" className="text-[#241C20] hover:text-[#A83263] font-medium">
                    09071649725 (VIP Concierge Desk)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <a href="mailto:concierge@empresspalace.com" className="text-[#241C20] hover:text-[#A83263] font-medium">
                    concierge@empresspalace.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span className="text-[#241C20]/75">
                    Monday – Saturday: 9:00 AM – 8:00 PM<br />
                    Sunday: Private VIP Sanctuary By Appointment
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[18px] border border-[#C6A15B]/40 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#A83263] text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#241C20]">
                  Your Message Is Received
                </h3>
                <p className="text-sm text-[#241C20]/75 max-w-md mx-auto leading-relaxed">
                  Our private client concierge will respond to your VIP inquiry within two business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#A83263] text-white text-xs uppercase tracking-widest px-6 py-2.5 rounded-[6px] font-medium hover:bg-[#8C2450] transition-colors mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
                    Direct Inquiry
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#241C20] mt-1">
                    Send a Message to the Atelier
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#241C20] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Folasade"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#FFF8F0]/40 border border-[#C6A15B]/40 rounded-[6px] px-3.5 py-2.5 text-xs text-[#241C20] outline-none focus:border-[#A83263]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#241C20] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@luxury.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FFF8F0]/40 border border-[#C6A15B]/40 rounded-[6px] px-3.5 py-2.5 text-xs text-[#241C20] outline-none focus:border-[#A83263]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#241C20] mb-2">
                    Subject of Inquiry
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#FFF8F0]/40 border border-[#C6A15B]/40 rounded-[6px] px-3.5 py-2.5 text-xs text-[#241C20] outline-none focus:border-[#A83263]"
                  >
                    <option value="Haute Couture Fitting Inquiry">Haute Couture Fitting Inquiry</option>
                    <option value="Bridal Bespoke Wardrobe Commission">Bridal Bespoke Wardrobe Commission</option>
                    <option value="VIP Spa Sanctuary Suite Reservation">VIP Spa Sanctuary Suite Reservation</option>
                    <option value="Private Trunk Show Invitation">Private Trunk Show Invitation</option>
                    <option value="General Concierge Assistance">General Concierge Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#241C20] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your event, preferred fabrics, or dates..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#FFF8F0]/40 border border-[#C6A15B]/40 rounded-[6px] px-3.5 py-2.5 text-xs text-[#241C20] outline-none focus:border-[#A83263] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A83263] hover:bg-[#8C2450] text-white py-3.5 rounded-[6px] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#E8A9BD]" />
                  <span>Dispatch Message to Concierge</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
