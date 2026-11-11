import React from "react";
import Link from "next/link";
import { Sparkles, Scissors, Flower2, Crown, ArrowRight } from "lucide-react";

export default function BrandIntro() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Headline */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Empress Palace Manifesto</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C20] leading-tight font-normal">
            A Realm Where <span className="font-editorial italic font-semibold text-[#A83263]">Sovereignty</span> Meets Contemporary Grace.
          </h2>

          <div className="w-16 h-[1.5px] bg-[#C6A15B] mx-auto my-4" />

          <p className="text-sm sm:text-base text-[#241C20]/75 font-light leading-relaxed font-sans max-w-2xl mx-auto">
            Founded on the belief that fashion, beauty, and skincare are sacred rituals of self-expression,
            Empress Palace harmonizes the architectural precision of bespoke tailoring
            with the deep, restorative tranquility of luxury skincare.
            Every stitch honors heritage; every ritual illuminates your natural luminescence.
          </p>
        </div>

        {/* 3 Luxury Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 lg:mt-16">
          {/* Pillar 1: Fashion */}
          <div className="bg-[#FFF8F0] p-6 sm:p-8 rounded-[16px] border border-[#C6A15B]/30 hover:border-[#A83263]/60 transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#E8A9BD]/25 border border-[#C6A15B]/40 flex items-center justify-center text-[#A83263] mb-5 group-hover:bg-[#A83263] group-hover:text-white transition-colors duration-300">
                <Scissors className="w-5 h-5 stroke-[1.5]" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-1.5">
                Pillar I • Fashion
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#241C20] font-bold mb-2.5">
                Bespoke Couture
              </h3>
              <p className="text-xs sm:text-sm text-[#241C20]/70 font-light leading-relaxed">
                Impeccably draped mulberry silks, sculptural corsetry, and heirloom hand-loomed Aso-Oke crafted to fit each silhouette with regal majesty.
              </p>
            </div>

            <Link
              href="/fashion"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#A83263] group-hover:text-[#8C2450] mt-5 pt-3.5 border-t border-[#C6A15B]/20"
            >
              <span>Explore Fashion</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pillar 2: Beauty */}
          <div className="bg-[#FFF8F0] p-6 sm:p-8 rounded-[16px] border border-[#C6A15B]/30 hover:border-[#A83263]/60 transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#E8A9BD]/25 border border-[#C6A15B]/40 flex items-center justify-center text-[#A83263] mb-5 group-hover:bg-[#A83263] group-hover:text-white transition-colors duration-300">
                <Crown className="w-5 h-5 stroke-[1.5]" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-1.5">
                Pillar II • Beauty
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#241C20] font-bold mb-2.5">
                Crown & Melanin Artistry
              </h3>
              <p className="text-xs sm:text-sm text-[#241C20]/70 font-light leading-relaxed">
                Sculptural braiding, bespoke hair crowns, and melanin-perfected bridal and red carpet artistry that exalts textured hair and glowing skin.
              </p>
            </div>

            <Link
              href="/beauty-spa"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#A83263] group-hover:text-[#8C2450] mt-5 pt-3.5 border-t border-[#C6A15B]/20"
            >
              <span>Explore Beauty</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pillar 3: Skincare */}
          <div className="bg-[#FFF8F0] p-6 sm:p-8 rounded-[16px] border border-[#C6A15B]/30 hover:border-[#A83263]/60 transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#E8A9BD]/25 border border-[#C6A15B]/40 flex items-center justify-center text-[#A83263] mb-5 group-hover:bg-[#A83263] group-hover:text-white transition-colors duration-300">
                <Flower2 className="w-5 h-5 stroke-[1.5]" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-1.5">
                Pillar III • Skincare
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#241C20] font-bold mb-2.5">
                Botanical Skincare Rituals
              </h3>
              <p className="text-xs sm:text-sm text-[#241C20]/70 font-light leading-relaxed">
                24K gold facial infusions, volcanic basalt stone treatments, and Moroccan rosewater hydrotherapy in private VIP marble chambers.
              </p>
            </div>

            <Link
              href="/beauty-spa"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#A83263] group-hover:text-[#8C2450] mt-5 pt-3.5 border-t border-[#C6A15B]/20"
            >
              <span>Explore Skincare</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
