import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CategoriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFF8F0] border-t border-[#C6A15B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Realms of Distinction</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C20] font-normal leading-tight">
              Explore Our <span className="font-editorial italic font-semibold text-[#A83263]">Signature</span> Realms
            </h2>
          </div>
          <p className="text-sm text-[#241C20]/70 max-w-md font-light leading-relaxed">
            Every department reflects our devotion to bespoke craft, transcendent tactile materials, and timeless royal aesthetics.
          </p>
        </div>

        {/* Asymmetrical 3-Card Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Fashion Atelier (Spans 7 columns on desktop) */}
          <div className="lg:col-span-7 bg-[#FFF8F0] border border-[#C6A15B]/30 rounded-[18px] overflow-hidden group hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85"
                alt="Empress Palace Haute Couture Fashion"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241C20]/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-[#FFF8F0]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C6A15B]/40 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A83263]">
                Haute Couture
              </div>
            </div>

            <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
                  Ready-to-Wear & Bespoke Salons
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#241C20] font-bold mb-3">
                  The Imperial Fashion Wardrobe
                </h3>
                <p className="text-sm text-[#241C20]/75 font-light leading-relaxed max-w-xl">
                  From floor-sweeping red-carpet silk gowns to heritage Nigerian Aso-Oke corset ensembles and tailored Normandy linen resort wear. Hand-crafted with obsessive attention to silhouette.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-[#C6A15B]/20">
                <Link
                  href="/fashion"
                  className="inline-flex items-center gap-2 bg-[#A83263] hover:bg-[#8C2450] text-white text-xs uppercase tracking-[0.18em] px-6 py-3 rounded-[6px] font-medium transition-colors shadow-sm"
                >
                  <span>Shop Fashion Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/fashion?category=Gowns"
                  className="text-xs uppercase tracking-[0.18em] text-[#241C20] hover:text-[#A83263] font-medium transition-colors underline underline-offset-4"
                >
                  Explore Gowns
                </Link>
              </div>
            </div>
          </div>

          {/* Cards 2 & 3: Beauty & Spa (Stack in remaining 5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Card 2: Beauty & Crown Styling */}
            <div className="bg-[#FFF8F0] border border-[#C6A15B]/30 rounded-[18px] overflow-hidden group hover:shadow-xl transition-all duration-500 flex flex-col justify-between flex-1">
              <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Empress Palace Beauty Artistry & Hair"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241C20]/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[#FFF8F0]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C6A15B]/40 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A83263]">
                  Beauty & Crown Bar
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#241C20] font-bold mb-2">
                    Luminous Beauty & Crown Artistry
                  </h3>
                  <p className="text-xs sm:text-sm text-[#241C20]/75 font-light leading-relaxed">
                    Sculptural braiding, protective hair rituals, and velvet melanin makeup engineered for editorial photography and bridal royalty.
                  </p>
                </div>

                <Link
                  href="/beauty-spa"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#A83263] hover:text-[#8C2450] mt-4 pt-3 border-t border-[#C6A15B]/20"
                >
                  <span>Discover Beauty Suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Luxury Wellness Spa */}
            <div className="bg-[#FFF8F0] border border-[#C6A15B]/30 rounded-[18px] overflow-hidden group hover:shadow-xl transition-all duration-500 flex flex-col justify-between flex-1">
              <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                  alt="Empress Palace Luxury Spa & Sanctuary"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241C20]/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[#FFF8F0]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C6A15B]/40 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#A83263]">
                  Wellness Sanctuary
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#241C20] font-bold mb-2">
                    The Holistic Spa Sanctuary
                  </h3>
                  <p className="text-xs sm:text-sm text-[#241C20]/75 font-light leading-relaxed">
                    24K gold facial infusions, volcanic basalt stone therapy, and rose quartz petal hydrotherapy soaking rituals.
                  </p>
                </div>

                <Link
                  href="/beauty-spa"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#A83263] hover:text-[#8C2450] mt-4 pt-3 border-t border-[#C6A15B]/20"
                >
                  <span>View Spa Rituals</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
