import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#FFF8F0] overflow-hidden border-b border-[#C6A15B]/30">
      {/* Subtle ambient luxury backdrop glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8A9BD]/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center min-h-[calc(100vh-110px)] py-12 lg:py-0 gap-10 lg:gap-8">
          {/* Left Column: Editorial Headline & CTAs (approx 40-45%) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-6 lg:space-y-8 z-10 text-left lg:pr-6">
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8A9BD]/25 border border-[#C6A15B]/40 text-[#A83263] text-xs uppercase tracking-[0.25em] font-medium w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Haute Couture & Beauty Sanctuary</span>
            </div>

            {/* Headline with selective deep pink italic emphasis */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.08] text-[#241C20] tracking-tight">
              Where <span className="font-editorial italic font-semibold text-[#A83263] pr-1">Fashion</span> Meets{" "}
              <span className="font-editorial italic font-semibold text-[#A83263]">Beauty</span>.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#241C20]/80 font-light leading-relaxed max-w-xl font-sans">
              Elegance, confidence and beauty come together in an experience designed around you.
              Immerse in bespoke haute couture, heritage African textiles, and sensory wellness rituals crafted for modern royalty.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 sm:pt-4">
              {/* Primary Button: Explore Our Gallery */}
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2.5 bg-[#A83263] hover:bg-[#8C2450] text-[#FFFFFF] text-xs sm:text-sm uppercase tracking-[0.2em] px-7 py-4 rounded-[6px] font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Explore Our Gallery</span>
                <ArrowRight className="w-4 h-4 text-[#E8A9BD] group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Button: Call Us */}
              <a
                href="tel:+18008433677"
                className="inline-flex items-center justify-center gap-2.5 border border-[#C6A15B] text-[#241C20] hover:bg-[#C6A15B] hover:text-[#FFFFFF] text-xs sm:text-sm uppercase tracking-[0.2em] px-7 py-4 rounded-[6px] font-medium transition-all duration-300 shadow-sm hover:shadow"
              >
                <Phone className="w-4 h-4 text-[#C6A15B] group-hover:text-white" />
                <span>Call Us</span>
              </a>
            </div>

            {/* Editorial Accents / Stats */}
            <div className="pt-6 lg:pt-8 border-t border-[#C6A15B]/25 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl text-[#A83263] font-bold">100%</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#241C20]/65 font-medium">Bespoke Mulberry Silk</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl text-[#C6A15B] font-bold">24K</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#241C20]/65 font-medium">Gold Facial Infusion</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl text-[#241C20] font-bold">VIP</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#241C20]/65 font-medium">Private Atelier Suite</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Photograph (approx 55-60% on desktop) */}
          <div className="w-full lg:w-[55%] flex items-center justify-center relative">
            <div className="relative w-full max-w-[580px] lg:max-w-none aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-[16px] overflow-hidden shadow-2xl border border-[#C6A15B]/40 group">
              {/* Supplied Hero Portrait */}
              <Image
                src="/hero-image.png"
                alt="Empress Palace Hero: Portrait of a dark-skinned Black woman with braided updo, glowing skin, gold earrings and magenta luxury garments"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 680px"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Refined gradient overlay for subtle luxury contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#241C20]/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Editorial Pill */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-[#FFF8F0]/90 backdrop-blur-md border border-[#C6A15B]/50 rounded-[12px] p-4 sm:p-5 shadow-lg max-w-sm">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-bold block mb-1">
                  Atelier Showcase No. 01
                </span>
                <h3 className="font-serif text-base sm:text-lg text-[#241C20] font-bold leading-tight">
                  The Imperial Magenta & Gold Aura
                </h3>
                <p className="text-xs text-[#241C20]/75 mt-1 font-light">
                  Braided crown artistry paired with 24k gold filigree drops and hand-draped silk.
                </p>
              </div>

              {/* Corner Gold Frame Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#C6A15B]/70 pointer-events-none" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C6A15B]/70 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#C6A15B]/70 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#C6A15B]/70 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
