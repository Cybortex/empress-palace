import React from "react";
import { Star, Sparkles, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The Aurora Silk Gown felt like liquid art upon my skin. Walking into the Met Gala after party, I felt completely sovereign. Empress Palace understands how to celebrate our regal silhouette like no other house in the world.",
      author: "Adanna O. Thorne",
      title: "International Art Curator & Philanthropist",
      location: "Maitama, Abuja",
      service: "Haute Couture Atelier",
      rating: 5,
    },
    {
      quote:
        "Their 24K Imperial Gold Facial transformed my skin completely before my wedding. The private hydrotherapy suite is an ethereal sanctuary where every sense is pampered with rare Damask rose petals and ancient warmth.",
      author: "Zainab Al-Mansoor",
      title: "Vogue Arabia Contributor",
      location: "Dubai",
      service: "Holistic Spa Sanctuary",
      rating: 5,
    },
    {
      quote:
        "The Ile-Ife Aso-Oke ensemble combined the authentic weight of our ancestral Nigerian textiles with the cutting precision of a Savile Row master. Empress Palace is redefining modern global luxury.",
      author: "Dr. Chioma Nnamdi",
      title: "Global Health Director & VIP Patron",
      location: "Asokoro, Abuja",
      service: "Heritage Capsule Collection",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFF8F0] border-t border-[#C6A15B]/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Sovereign Circle</span>
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C20] font-normal leading-tight">
            Voices of <span className="font-editorial italic font-semibold text-[#A83263]">Admiration</span>
          </h2>
          <p className="text-sm text-[#241C20]/75 font-light max-w-lg mx-auto leading-relaxed">
            Reflections from the discerning women who entrust their most defining milestones to Empress Palace.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FFF8F0] border border-[#C6A15B]/30 rounded-[18px] p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-[#A83263]/50 relative group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#E8A9BD]/25 flex items-center justify-center text-[#A83263]">
                    <Quote className="w-5 h-5 fill-[#A83263]/20" />
                  </div>
                  <div className="flex items-center gap-1 text-[#C6A15B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C6A15B]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="font-editorial text-lg sm:text-xl text-[#241C20] italic font-normal leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-[#C6A15B]/20">
                <h4 className="font-serif text-base font-bold text-[#241C20]">
                  {t.author}
                </h4>
                <p className="text-xs text-[#A83263] font-medium tracking-wide mt-0.5">
                  {t.title}
                </p>
                <div className="flex items-center justify-between mt-2 text-[10px] text-[#241C20]/60 uppercase tracking-wider">
                  <span>{t.location}</span>
                  <span className="text-[#C6A15B] font-semibold">{t.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
