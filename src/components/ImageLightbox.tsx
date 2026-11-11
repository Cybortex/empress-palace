"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, ArrowRight, Tag } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface ImageLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export default function ImageLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}: ImageLightboxProps) {
  const [isZoomed, setIsZoomed] = React.useState(false);

  const currentItem = items[currentIndex];

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    onSelectIndex((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onSelectIndex]);

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-[#241C20]/95 backdrop-blur-md animate-fade-in p-4 sm:p-8">
      {/* Top action bar */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-[#FFF8F0] z-20">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B]">
          <span>
            {currentIndex + 1} / {items.length} — {currentItem.category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Toggle zoom"
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-[#A83263] text-white transition-colors"
            aria-label="Close image modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-[#A83263] text-white transition-colors z-20 hidden sm:flex items-center justify-center border border-[#C6A15B]/30"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-[#A83263] text-white transition-colors z-20 hidden sm:flex items-center justify-center border border-[#C6A15B]/30"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image View */}
      <div className="relative w-full max-w-5xl h-[70vh] sm:h-[75vh] flex items-center justify-center">
        <div
          className={`relative w-full h-full transition-transform duration-300 ${
            isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Caption & Editorial Footer */}
      <div className="absolute bottom-4 inset-x-4 sm:inset-x-8 text-center bg-[#241C20]/80 backdrop-blur-md border border-[#C6A15B]/30 rounded-[12px] p-4 max-w-2xl mx-auto text-[#FFF8F0] z-20">
        <h4 className="font-serif text-lg sm:text-xl font-bold text-[#FFF8F0]">
          {currentItem.title}
        </h4>
        <p className="text-xs text-[#E8A9BD] tracking-wider mt-0.5 font-light">
          {currentItem.subtitle}
        </p>
        <p className="text-xs text-[#FFF8F0]/75 mt-2 font-light leading-relaxed">
          {currentItem.caption}
        </p>

        {/* Action Link for Purchasable Matching Mock Product vs Editorial */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-3 pt-2.5 border-t border-white/10">
          <span className="text-[10px] text-[#C6A15B] uppercase tracking-widest">
            {currentItem.credits}
          </span>
          {currentItem.productSlug && (
            <Link
              href={`/shop/${currentItem.productSlug}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 bg-[#A83263] hover:bg-[#8C2450] text-white text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full font-semibold transition-colors shadow-sm ml-2"
            >
              <Tag className="w-3 h-3 text-[#E8A9BD]" />
              <span>Shop Matching Style</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
          {!currentItem.productSlug && (
            <span className="text-[10px] uppercase tracking-widest bg-white/10 text-[#E8A9BD] px-3 py-1 rounded-full border border-white/15">
              Editorial Visual Reference • Non-Purchasable
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
