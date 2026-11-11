"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import ProductCard from "./ProductCard";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FeaturedCollections() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const tabs = ["All", "Gowns", "Dresses", "Traditional Wear", "Accessories"];

  const filteredProducts =
    activeTab === "All"
      ? PRODUCTS.slice(0, 6)
      : PRODUCTS.filter((p) => p.category === activeTab).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#FFF8F0] border-t border-[#C6A15B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Autumn / Winter Atelier</span>
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C20] font-normal leading-tight">
            Featured <span className="font-editorial italic font-semibold text-[#A83263]">Couture</span> Collections
          </h2>
          <p className="text-sm text-[#241C20]/75 font-light max-w-lg mx-auto leading-relaxed">
            Sculpted in pure mulberry silks, hand-knotted pearls, and bespoke loom Aso-Oke. Each garment is engineered for regal presence and lasting elegance.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full transition-all duration-300 font-medium ${
                  isActive
                    ? "bg-[#A83263] text-white shadow-md"
                    : "bg-[#E8A9BD]/20 text-[#241C20] hover:bg-[#E8A9BD]/40 hover:text-[#A83263]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 3} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14">
          <Link
            href="/fashion"
            className="inline-flex items-center gap-2.5 border border-[#C6A15B] text-[#241C20] hover:bg-[#A83263] hover:text-white hover:border-[#A83263] text-xs uppercase tracking-[0.22em] px-8 py-4 rounded-[6px] font-medium transition-all duration-300 shadow-sm hover:shadow"
          >
            <span>View Full Collection ({PRODUCTS.length} Designs)</span>
            <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
