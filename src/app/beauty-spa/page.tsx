"use client";

import React from "react";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import { useCart } from "@/context/CartContext";
import { Sparkles, Clock, Check, Calendar, Phone, ArrowRight, Flower2, Droplet, Crown } from "lucide-react";

export default function BeautySpaPage() {
  const { openBooking } = useCart();

  return (
    <div className="bg-[#FFF8F0] min-h-screen pb-28">
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#C6A15B]/25 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E8A9BD]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8A9BD]/25 border border-[#C6A15B]/40 text-[#A83263] text-xs uppercase tracking-[0.3em] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Holistic Wellness & Crown Styling</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#241C20] font-normal leading-[1.08]">
            The <span className="font-editorial italic font-semibold text-[#A83263]">Sanctuary</span> of Sovereignty
          </h1>

          <div className="w-20 h-[1.5px] bg-[#C6A15B] mx-auto my-3" />

          <p className="text-base sm:text-lg text-[#241C20]/75 font-light max-w-2xl mx-auto leading-relaxed">
            Where ancestral botanical rituals converge with cutting-edge skincare science.
            Experience pure 24-karat gold facials, artisanal crown braiding, and private marble hydrotherapy soaking suites.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => openBooking("Private Spa Consultation")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#A83263] hover:bg-[#8C2450] text-white text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 rounded-[6px] font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <Calendar className="w-4 h-4 text-[#E8A9BD]" />
              <span>Reserve Sanctuary Ritual</span>
            </button>
            <a
              href="tel:09071649725"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-[#C6A15B] text-[#241C20] hover:bg-[#C6A15B] hover:text-white text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 rounded-[6px] font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C6A15B]" />
              <span>Call Spa Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Signature Highlights Trio */}
      <section className="py-16 bg-[#FFF8F0] border-b border-[#C6A15B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-[14px] bg-white border border-[#C6A15B]/30 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#E8A9BD]/20 flex items-center justify-center text-[#A83263] shrink-0">
                <Flower2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#241C20]">Organic African Flora</h3>
                <p className="text-xs text-[#241C20]/70 font-light mt-1">
                  Nilotica shea, Moroccan argan, and Nigerian hibiscus harvested from sustainable female-led cooperatives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-[14px] bg-white border border-[#C6A15B]/30 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#E8A9BD]/20 flex items-center justify-center text-[#A83263] shrink-0">
                <Droplet className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#241C20]">Private Marble Chambers</h3>
                <p className="text-xs text-[#241C20]/70 font-light mt-1">
                  Every treatment takes place in total seclusion with individual aromatherapy climate control and rainfall showers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-[14px] bg-white border border-[#C6A15B]/30 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#E8A9BD]/20 flex items-center justify-center text-[#A83263] shrink-0">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#241C20]">Master Crown Artistry</h3>
                <p className="text-xs text-[#241C20]/70 font-light mt-1">
                  Celebrity trichologists and braiders specializing in healthy textured hair preservation and gala styling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Menu of Treatments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
            The Treatment Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241C20] font-normal">
            Bespoke <span className="font-editorial italic font-semibold text-[#A83263]">Wellness</span> Curations
          </h2>
          <p className="text-xs sm:text-sm text-[#241C20]/70 font-light">
            Select an experience below to schedule your appointment with our VIP Concierge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#FFF8F0] rounded-[16px] border border-[#C6A15B]/30 overflow-hidden group hover:border-[#A83263]/60 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8A9BD]/20">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFF8F0]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C6A15B]/40 text-[9px] uppercase tracking-[0.2em] font-semibold text-[#A83263]">
                    {srv.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#241C20]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C6A15B]/40 text-[10px] font-mono text-[#FFF8F0] flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#C6A15B]" />
                    <span>{srv.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#241C20] group-hover:text-[#A83263] transition-colors">
                    {srv.title}
                  </h3>
                  <span className="font-serif text-lg font-bold text-[#A83263] block my-2">
                    ₦{srv.price.toLocaleString()}
                  </span>
                  <p className="text-xs text-[#241C20]/75 font-light leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#C6A15B]/20">
                    {srv.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#241C20]/75 font-light">
                        <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => openBooking(srv.title)}
                  className="w-full bg-[#A83263] hover:bg-[#8C2450] text-white py-3 rounded-[6px] text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#E8A9BD]" />
                  <span>Reserve This Ritual</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
