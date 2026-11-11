"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS, FASHION_CATEGORIES } from "@/data/products";
import ProductCard from "./ProductCard";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FeaturedCollections() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const tabs = ["All", ...FASHION_CATEGORIES];

  const filteredProducts =
    activeTab === "All"
      ? PRODUCTS.filter((p) => p.is_featured).slice(0, 8)
      : PRODUCTS.filter((p) => p.category === activeTab).slice(0, 8);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F0] border-t border-[#C6A15B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contemporary African Atelier</span>
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C20] font-normal leading-tight">
            Featured <span className="font-editorial italic font-semibold text-[#A83263]">Nigerian</span> Catalogue
          </h2>
          <p className="text-xs sm:text-sm text-[#241C20]/75 font-light max-w-lg mx-auto leading-relaxed">
            Curated from our 40-piece visual reference archive: Ankara gowns, two-piece sets, and luxury occasion dresses.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[11px] sm:text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                  isActive
                    ? "bg-[#A83263] text-white shadow-md scale-102"
                    : "bg-[#E8A9BD]/20 text-[#241C20] hover:bg-[#E8A9BD]/40 hover:text-[#A83263]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid: 4-col desktop, 3-col tablet, 2-col mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 4} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 sm:mt-14">
          <Link
            href="/fashion"
            className="inline-flex items-center gap-2.5 border border-[#C6A15B] text-[#241C20] hover:bg-[#A83263] hover:text-white hover:border-[#A83263] text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-[6px] font-medium transition-all duration-300 shadow-sm hover:shadow"
          >
            <span>Explore All 40 Designs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
