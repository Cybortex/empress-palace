"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { Sparkles, Phone, Calendar } from "lucide-react";

export default function BookingCTA() {
  const { openBooking } = useCart();

  return (
    <section className="py-20 lg:py-28 bg-[#241C20] text-[#FFF8F0] relative overflow-hidden border-t border-[#C6A15B]/30">
      {/* Decorative ambient gradients */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#A83263]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C6A15B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF8F0]/10 border border-[#C6A15B]/40 text-[#C6A15B] text-xs uppercase tracking-[0.28em] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Sovereign Invitation</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FFF8F0] leading-[1.15] font-normal max-w-3xl mx-auto">
          Begin Your <span className="font-editorial italic font-semibold text-[#E8A9BD]">Imperial</span> Journey with Empress Palace.
        </h2>

        <p className="text-sm sm:text-base text-[#FFF8F0]/80 font-light max-w-xl mx-auto leading-relaxed font-sans">
          Whether you desire a private atelier fitting for a bespoke gala gown or an afternoon of restorative botanical hydrotherapy, our VIP Concierge stands ready to curate your visit.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => openBooking()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#A83263] hover:bg-[#8C2450] text-white text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 rounded-[6px] font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-[#E8A9BD]" />
            <span>Reserve Experience Online</span>
          </button>

          <a
            href="tel:+18008433677"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-[#C6A15B] text-[#FFF8F0] hover:bg-[#C6A15B] hover:text-[#241C20] text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 rounded-[6px] font-medium transition-all duration-300 shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#C6A15B]" />
            <span>Call Concierge: (800) 843-3677</span>
          </a>
        </div>

        {/* Assurance details */}
        <div className="pt-8 border-t border-[#C6A15B]/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#FFF8F0]/65 uppercase tracking-widest">
          <span>✦ Private VIP Suites</span>
          <span>✦ Complimentary Champagne</span>
          <span>✦ Valet Parking Available</span>
        </div>
      </div>
    </section>
  );
}
