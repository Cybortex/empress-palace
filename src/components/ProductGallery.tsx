"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn, Sparkles } from "lucide-react";

interface ProductGalleryProps {
  productName: string;
  images: {
    primary: string;
    front?: string;
    back?: string;
    side?: string;
    detail?: string;
  };
}

export default function ProductGallery({ productName, images }: ProductGalleryProps) {
  // Extract all available valid images
  const imageList = [
    { label: "Front View", src: images.front || images.primary },
    ...(images.back ? [{ label: "Back View", src: images.back }] : []),
    ...(images.side ? [{ label: "Side View", src: images.side }] : []),
    ...(images.detail ? [{ label: "Detail View", src: images.detail }] : []),
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeImage = imageList[activeIndex]?.src || images.primary;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 sticky top-24">
      {/* Thumbnail Carousel / Vertical Strip */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto pb-2 lg:pb-0 scrollbar-none shrink-0">
        {imageList.map((img, idx) => {
          const isSelected = activeIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-[8px] overflow-hidden border transition-all duration-300 shrink-0 ${
                isSelected
                  ? "border-[#A83263] ring-2 ring-[#A83263]/30 scale-102"
                  : "border-[#C6A15B]/30 opacity-75 hover:opacity-100"
              }`}
              aria-label={`View ${img.label}`}
            >
              <Image
                src={img.src}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover object-top"
              />
              <span className="absolute bottom-0 inset-x-0 bg-[#241C20]/75 text-[8px] text-[#FFF8F0] tracking-tighter text-center py-0.5 truncate px-1">
                {img.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Large Image Container */}
      <div className="flex-1">
        <div
          className="relative aspect-[3/4] w-full rounded-[16px] overflow-hidden bg-[#E8A9BD]/20 border border-[#C6A15B]/40 group shadow-md"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          {/* Main Image */}
          <Image
            src={activeImage}
            alt={productName}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover object-top transition-transform duration-200 ${
              isZoomed ? "scale-150 cursor-crosshair" : "scale-100"
            }`}
            style={
              isZoomed
                ? { transformOrigin: `${mousePos.x}% ${mousePos.y}%` }
                : undefined
            }
          />

          {/* Zoom Indicator badge */}
          <div className="absolute top-4 right-4 bg-[#FFF8F0]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C6A15B]/40 text-[10px] text-[#241C20] flex items-center gap-1.5 pointer-events-none group-hover:opacity-0 transition-opacity">
            <ZoomIn className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Hover to Zoom</span>
          </div>

          {/* Current Angle Label */}
          <div className="absolute top-4 left-4 bg-[#241C20]/80 backdrop-blur-md text-[#FFF8F0] px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-medium border border-[#C6A15B]/30">
            {imageList[activeIndex]?.label}
          </div>

          {/* Previous / Next buttons */}
          {imageList.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FFF8F0]/80 hover:bg-[#A83263] text-[#241C20] hover:text-white flex items-center justify-center transition-colors shadow-md border border-[#C6A15B]/30 z-10"
                aria-label="Previous view"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FFF8F0]/80 hover:bg-[#A83263] text-[#241C20] hover:text-white flex items-center justify-center transition-colors shadow-md border border-[#C6A15B]/30 z-10"
                aria-label="Next view"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Caption */}
        <div className="flex items-center justify-between text-[11px] text-[#241C20]/60 mt-3 px-1">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#C6A15B]" />
            <span>Authentic Atelier Photography</span>
          </span>
          <span>
            {activeIndex + 1} of {imageList.length} views
          </span>
        </div>
      </div>
    </div>
  );
}
