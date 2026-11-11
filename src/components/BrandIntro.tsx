import React from "react";
import Link from "next/link";
import { Sparkles, Scissors, Flower2, Crown, ArrowRight } from "lucide-react";

export default function BrandIntro() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFF8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Empress Palace Manifesto</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C20] leading-tight font-normal">
            A Sanctuary Where <span className="font-editorial italic font-semibold text-[#A83263]">Sovereignty</span> Meets Contemporary Grace.
          </h2>

          <div className="w-16 h-[1.5px] bg-[#C6A15B] mx-auto my-6" />

          <p className="text-base sm:text-lg text-[#241C20]/75 font-light leading-relaxed font-sans">
            Founded on the belief that beauty and fashion are sacred rituals of self-expression,
            Empress Palace harmonizes the architectural precision of high-fashion tailoring
            with the deep, regenerative tranquility of a private beauty spa.
            Every stitch honors heritage; every treatment illuminates your natural luminescence.
          </p>
        </div>

        {/* 3 Luxury Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 lg:mt-20">
          {/* Pillar 1: Haute Couture */}
          <div className="bg-[#FFF8F0] p-8 sm:p-10 rounded-[16px] border border-[#C6A15B]/30 hover:border-[#A83263]/60 transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#E8A9BD]/25 border border-[#C6A15B]/40 flex items-center justify-center text-[#A83263] mb-6 group-hover:bg-[#A83263] group-hover:text-white transition-colors duration-300">
                <Scissors className="w-6 h-6 stroke-[1.5]" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
                Pillar I • The Atelier
              </span>
              <h3 className="font-serif text-2xl text-[#241C20] font-bold mb-3">
                Bespoke Couture
              </h3>
              <p className="text-sm text-[#241C20]/70 font-light leading-relaxed">
                Impeccably draped mulberry silks, sculptural corsetry, and heirloom hand-loomed Aso-Oke crafted to fit each curve with royal precision.
              </p>
            </div>

            <Link
              href="/fashion"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#A83263] group-hover:text-[#8C2450] mt-6 pt-4 border-t border-[#C6A15B]/20"
            >
              <span>Explore Atelier</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pillar 2: Beauty Studio */}
          <div className="bg-[#FFF8F0] p-8 sm:p-10 rounded-[16px] border border-[#C6A15B]/30 hover:border-[#A83263]/60 transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#E8A9BD]/25 border border-[#C6A15B]/40 flex items-center justify-center text-[#A83263] mb-6 group-hover:bg-[#A83263] group-hover:text-white transition-colors duration-300">
                <Crown className="w-6 h-6 stroke-[1.5]" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
                Pillar II • The Crown Bar
              </span>
              <h3 className="font-serif text-2xl text-[#241C20] font-bold mb-3">
                Artisanal Styling
              </h3>
              <p className="text-sm text-[#241C20]/70 font-light leading-relaxed">
                Sculptural braiding, bespoke crowns, and melanin-perfected bridal artistry that exalts textured hair and deep glowing complexions.
              </p>
            </div>

            <Link
              href="/beauty-spa"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#A83263] group-hover:text-[#8C2450] mt-6 pt-4 border-t border-[#C6A15B]/20"
            >
              <span>Explore Hair & Beauty</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pillar 3: Spa Sanctuary */}
          <div className="bg-[#FFF8F0] p-8 sm:p-10 rounded-[16px] border border-[#C6A15B]/30 hover:border-[#A83263]/60 transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#E8A9BD]/25 border border-[#C6A15B]/40 flex items-center justify-center text-[#A83263] mb-6 group-hover:bg-[#A83263] group-hover:text-white transition-colors duration-300">
                <Flower2 className="w-6 h-6 stroke-[1.5]" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
                Pillar III • The Sanctuary
              </span>
              <h3 className="font-serif text-2xl text-[#241C20] font-bold mb-3">
                Holistic Spa Care
              </h3>
              <p className="text-sm text-[#241C20]/70 font-light leading-relaxed">
                24K gold facial infusions, volcanic basalt stone therapy, and organic rosewater hydrotherapy soaking basins in private VIP marble chambers.
              </p>
            </div>

            <Link
              href="/beauty-spa"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#A83263] group-hover:text-[#8C2450] mt-6 pt-4 border-t border-[#C6A15B]/20"
            >
              <span>Explore Spa Rituals</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
