import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Heart, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About The Brand | Empress Palace Hybrid Luxury",
  description:
    "Learn the heritage, artisanal craftsmanship, and sovereign vision behind Empress Palace Haute Couture and Wellness Sanctuary.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FFF8F0] min-h-screen pb-28">
      {/* 1. Hero */}
      <section className="relative py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#C6A15B]/25 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E8A9BD]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8A9BD]/20 border border-[#C6A15B]/40 text-[#A83263] text-xs uppercase tracking-[0.3em] font-semibold">
            <span>The Heritage Chronicle</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#241C20] font-normal leading-[1.08]">
            Sovereign Craft. <span className="font-editorial italic font-semibold text-[#A83263]">Untamed</span> Elegance.
          </h1>

          <div className="w-20 h-[1.5px] bg-[#C6A15B] mx-auto my-3" />

          <p className="text-base sm:text-lg text-[#241C20]/75 font-light max-w-2xl mx-auto leading-relaxed">
            Empress Palace was conceived as an homage to the timeless majesty of African royalty,
            intertwining the discipline of bespoke European atelier drape with the restorative rituals of botanical skincare.
          </p>
        </div>
      </section>

      {/* 2. Split Editorial Story with Supplied Hero Portrait */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[18px] overflow-hidden border border-[#C6A15B]/40 shadow-xl group">
              <Image
                src="/hero-image.png"
                alt="Empress Palace Muse & Atelier Masterpiece"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241C20]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 inset-x-5 text-center bg-[#FFF8F0]/90 backdrop-blur-md p-3.5 rounded-[10px] border border-[#C6A15B]/40">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-bold block">
                  The Empress Muse
                </span>
                <span className="font-serif text-sm font-bold text-[#241C20]">
                  Gilded Braids & Imperial Silk
                </span>
              </div>
            </div>
          </div>

          {/* Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              The Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241C20] font-normal leading-tight">
              Honoring African Royalty Across the <span className="font-editorial italic font-semibold text-[#A83263]">Global Stage</span>
            </h2>

            <p className="text-sm sm:text-base text-[#241C20]/80 font-light leading-relaxed">
              For generations, the regal women of Africa have adorned themselves in hand-woven Aso-Oke,
              intricate coral beads, and fragrant botanical shea butters. We founded Empress Palace to elevate
              this sacred heritage into a worldwide luxury house rooted in Abuja and commanding reverence across the globe.
            </p>

            <p className="text-sm sm:text-base text-[#241C20]/80 font-light leading-relaxed">
              Every mulberry silk gown is cut by hand in our private atelier; every drop of facial elixir is
              infused with organic cold-pressed botanicals from women-owned cooperatives in Southwestern Nigeria
              and the foothills of the Atlas Mountains.
            </p>

            {/* 3 Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#C6A15B]/20">
              <div className="flex items-start gap-3">
                <Scissors className="w-5 h-5 text-[#A83263] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#241C20]">Zero Fast Fashion</h4>
                  <p className="text-xs text-[#241C20]/70 font-light mt-0.5">
                    Limited edition runs and made-to-order bespoke tailoring that honors human craft.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#A83263] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#241C20]">Melanin Luminescence</h4>
                  <p className="text-xs text-[#241C20]/70 font-light mt-0.5">
                    Spa and cosmetic formulas custom-calibrated for deep, richly pigmented skin tones.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/fashion"
                className="inline-flex items-center gap-2 bg-[#A83263] hover:bg-[#8C2450] text-white text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-[6px] font-semibold transition-all shadow-md"
              >
                <span>Explore The Collections</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
