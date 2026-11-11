import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CategoriesSection() {
  const pillars = [
    {
      title: "Fashion",
      subtitle: "Haute Couture & Heritage Silks",
      description:
        "Bespoke red-carpet evening gowns, sculpted velvet corsetry, and authentic hand-woven Nigerian Aso-Oke tailored with royal precision.",
      image: "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121519.596-1024x1018.jpg",
      badge: "Pillar I",
      link: "/fashion",
      cta: "Explore Fashion",
    },
    {
      title: "Beauty",
      subtitle: "Melanin Artistry & Crown Styling",
      description:
        "Architectural crown braiding, bespoke hair adornments, and celebrity-grade velvet makeup formulated specifically for melanin-rich skin.",
      image: "/hero-image.png",
      badge: "Pillar II",
      link: "/beauty-spa",
      cta: "Discover Beauty",
    },
    {
      title: "Skincare",
      subtitle: "24K Gold & Botanical Elixirs",
      description:
        "Pure 24-karat gold facial infusions, Moroccan rose hydrotherapy, and organic Nilotica shea butter wraps in private marble suites.",
      image: "/skincare-facial.jpg",
      badge: "Pillar III",
      link: "/beauty-spa",
      cta: "Experience Skincare",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#FFF8F0] border-t border-[#C6A15B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold flex items-center justify-center gap-2">
            <span>The Three Sovereign Pillars</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C20] font-normal leading-tight">
            Fashion, Beauty & <span className="font-editorial italic font-semibold text-[#A83263]">Skincare</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#241C20]/75 font-light max-w-xl mx-auto leading-relaxed">
            Every pillar reflects our devotion to artisanal mastery, organic botanical luxury, and timeless royal refinement.
          </p>
        </div>

        {/* 3 Pillars Grid - Balanced and perfectly framed on all screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#FFF8F0] border border-[#C6A15B]/30 rounded-[16px] overflow-hidden group hover:shadow-xl hover:border-[#A83263]/60 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E8A9BD]/20">
                  <Image
                    src={pillar.image}
                    alt={`Empress Palace ${pillar.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241C20]/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 bg-[#FFF8F0]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C6A15B]/40 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#A83263]">
                    {pillar.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#C6A15B] font-semibold block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#241C20] group-hover:text-[#A83263] transition-colors mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#241C20]/75 font-light leading-relaxed line-clamp-3">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                <Link
                  href={pillar.link}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#A83263] group-hover:text-[#8C2450] pt-3 border-t border-[#C6A15B]/20 w-full justify-between"
                >
                  <span>{pillar.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
