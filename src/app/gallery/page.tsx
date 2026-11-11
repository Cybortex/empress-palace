"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import ImageLightbox from "@/components/ImageLightbox";
import { Sparkles, Eye, Filter } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = ["All", "Fashion", "Beauty", "Spa"];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#FFF8F0] min-h-screen pb-28">
      {/* 1. Large Introductory Hero */}
      <section className="relative py-20 lg:py-28 bg-[#FFF8F0] border-b border-[#C6A15B]/25 text-center overflow-hidden">
        {/* Ambient luxury backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E8A9BD]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8A9BD]/20 border border-[#C6A15B]/40 text-[#A83263] text-xs uppercase tracking-[0.3em] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>The Empress Palace Lookbook</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#241C20] font-normal tracking-tight leading-[1.08]">
            Fashion. Beauty. <span className="font-editorial italic font-semibold text-[#A83263]">Inspiration</span>.
          </h1>

          <div className="w-20 h-[1.5px] bg-[#C6A15B] mx-auto my-4" />

          <p className="text-base sm:text-lg text-[#241C20]/75 font-light leading-relaxed max-w-2xl mx-auto font-sans">
            An editorial curation of sculptural couture silhouettes, glowing melanin skin,
            and tranquil sensory spa sanctuaries. Welcome to visual sovereignty.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap pt-6">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#C6A15B] uppercase tracking-widest font-semibold mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs uppercase tracking-[0.2em] px-6 py-2.5 rounded-full transition-all duration-300 font-medium ${
                    isActive
                      ? "bg-[#A83263] text-white shadow-md scale-105"
                      : "bg-[#FFF8F0] border border-[#C6A15B]/40 text-[#241C20] hover:bg-[#E8A9BD]/25 hover:text-[#A83263]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Asymmetrical Masonry Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="text-xs uppercase tracking-widest text-[#241C20]/60 mb-6 flex items-center justify-between">
          <span>Displaying {filteredItems.length} curated exhibits</span>
          <span className="text-[#C6A15B] font-semibold">✦ High Resolution Editorial</span>
        </div>

        {/* Varied dimensional grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            // Editorial rhythm: vary aspect ratios by item index to avoid repetitive uniform grids
            const aspectStyle =
              index % 5 === 0
                ? "aspect-[3/4]"
                : index % 5 === 1
                ? "aspect-[4/5]"
                : index % 5 === 2
                ? "aspect-[1/1]"
                : index % 5 === 3
                ? "aspect-[4/5]"
                : "aspect-[3/4]";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItemIndex(index)}
                className={`group relative rounded-[18px] overflow-hidden border border-[#C6A15B]/30 bg-[#E8A9BD]/15 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${aspectStyle}`}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241C20]/85 via-[#241C20]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#FFF8F0]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C6A15B]/40 text-[9px] uppercase tracking-[0.25em] font-semibold text-[#A83263] z-10">
                  {item.category}
                </div>

                {/* Lightbox Trigger Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFF8F0]/85 backdrop-blur-sm text-[#241C20] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 group-hover:bg-[#A83263] group-hover:text-white">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Hover Caption Details */}
                <div className="absolute inset-x-5 bottom-5 text-[#FFF8F0] transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-1">
                    {item.credits}
                  </span>
                  <h3 className="font-serif text-xl font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E8A9BD] font-light mt-1 line-clamp-1">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#FFF8F0]/80 font-light mt-2 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-white/20">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] bg-white/10 px-2 py-0.5 rounded-full text-white/90"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItemIndex !== null && (
        <ImageLightbox
          items={filteredItems}
          currentIndex={selectedItemIndex}
          isOpen={selectedItemIndex !== null}
          onClose={() => setSelectedItemIndex(null)}
          onSelectIndex={(index) => setSelectedItemIndex(index)}
        />
      )}
    </div>
  );
}
