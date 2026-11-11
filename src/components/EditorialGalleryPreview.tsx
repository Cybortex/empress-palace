"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS } from "@/data/gallery";
import ImageLightbox from "./ImageLightbox";
import { Sparkles, ArrowRight, Eye } from "lucide-react";

export default function EditorialGalleryPreview() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Take top 6 editorial items with varied aspect ratios
  const previewItems = GALLERY_ITEMS.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#FFF8F0] border-t border-[#C6A15B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Editorial Lookbook</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C20] font-normal leading-tight">
              Moments of <span className="font-editorial italic font-semibold text-[#A83263]">Sovereignty</span>
            </h2>
          </div>
          <p className="text-sm text-[#241C20]/70 max-w-md font-light leading-relaxed">
            A visual documentation of high-fashion drape, deep-skin luminescence, and serene botanical luxury.
          </p>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {previewItems.map((item, idx) => {
            // Apply varied editorial aspect ratios
            const isTall = idx === 0 || idx === 3;
            const aspectClass = isTall
              ? "aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]"
              : "aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4]";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className={`group relative rounded-[16px] overflow-hidden border border-[#C6A15B]/30 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-[#E8A9BD]/20 ${aspectClass}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241C20]/80 via-[#241C20]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 bg-[#FFF8F0]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C6A15B]/40 text-[9px] uppercase tracking-[0.25em] font-semibold text-[#A83263] z-10">
                  {item.category}
                </div>

                {/* Hover Caption Details */}
                <div className="absolute inset-x-4 bottom-4 text-[#FFF8F0] transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                  <p className="text-xs text-[#E8A9BD] font-light tracking-wide line-clamp-1">
                    {item.subtitle}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-[10px] text-[#C6A15B] uppercase tracking-widest font-medium">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Editorial</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Gallery CTA */}
        <div className="text-center mt-14">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2.5 bg-[#A83263] hover:bg-[#8C2450] text-white text-xs uppercase tracking-[0.22em] px-8 py-4 rounded-[6px] font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Explore Full Editorial Gallery ({GALLERY_ITEMS.length} Exhibits)</span>
            <ArrowRight className="w-4 h-4 text-[#E8A9BD]" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <ImageLightbox
          items={previewItems}
          currentIndex={selectedIdx}
          isOpen={selectedIdx !== null}
          onClose={() => setSelectedIdx(null)}
          onSelectIndex={(index) => setSelectedIdx(index)}
        />
      )}
    </section>
  );
}
