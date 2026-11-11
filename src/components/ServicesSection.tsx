"use client";

import React from "react";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import { useCart } from "@/context/CartContext";
import { Clock, Check, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const { openBooking } = useCart();

  return (
    <section className="py-20 lg:py-28 bg-[#FFF8F0] border-t border-[#C6A15B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold flex items-center justify-center gap-2">
            <span>Rituals of Radiance</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C20] font-normal leading-tight">
            Featured <span className="font-editorial italic font-semibold text-[#A83263]">Sanctuary</span> Services
          </h2>
          <p className="text-sm text-[#241C20]/75 font-light max-w-lg mx-auto leading-relaxed">
            Private suites, organic African botanical elixirs, and bespoke fitting salons crafted to elevate your spirit and body.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#FFF8F0] border border-[#C6A15B]/30 rounded-[16px] overflow-hidden group hover:border-[#A83263]/60 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8A9BD]/20">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFF8F0]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C6A15B]/40 text-[9px] uppercase tracking-[0.2em] font-semibold text-[#A83263]">
                    {service.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#241C20]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C6A15B]/40 text-[10px] font-mono text-[#FFF8F0] flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#C6A15B]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#241C20] group-hover:text-[#A83263] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <span className="font-serif text-lg font-bold text-[#A83263] block mb-3">
                    ₦{service.price.toLocaleString()}
                  </span>

                  <p className="text-xs text-[#241C20]/75 font-light leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-1.5 pt-3 border-t border-[#C6A15B]/20">
                    {service.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] text-[#241C20]/75 font-light">
                        <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Reserve CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => openBooking(service.title)}
                  className="w-full bg-[#A83263] hover:bg-[#8C2450] text-white py-3 rounded-[6px] text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Reserve Experience</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#FFF8F0] border border-[#C6A15B]/40 rounded-[16px] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-[#241C20]">
              Custom Bridal & VIP Private Salon Hire
            </h3>
            <p className="text-xs sm:text-sm text-[#241C20]/75 font-light max-w-xl">
              Reserve our entire VIP wing for weddings, private champagne galas, and milestone celebrations with bespoke tailoring and beauty teams.
            </p>
          </div>
          <button
            onClick={() => openBooking("Private VIP Salon & Bridal Wing")}
            className="border border-[#C6A15B] text-[#241C20] hover:bg-[#C6A15B] hover:text-white px-7 py-3.5 rounded-[6px] text-xs uppercase tracking-[0.2em] font-medium transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Inquire for VIP Wing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
