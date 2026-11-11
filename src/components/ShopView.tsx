"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, CATEGORIES, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import { Search, SlidersHorizontal, Sparkles, X, ArrowUpDown } from "lucide-react";

export default function ShopView() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || searchParams.get("filter") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(
    CATEGORIES.includes(initialCategory as any) ? initialCategory : "All"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "newest" | "price-asc" | "price-desc" | "rating">("featured");
  const [selectedSize, setSelectedSize] = useState<string>("All");
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const allSizes = ["All", "XS", "S", "M", "L", "XL", "One Size"];

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory === "New Arrivals" && !p.isNewArrival) return false;
      if (selectedCategory !== "All" && selectedCategory !== "New Arrivals" && p.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesTag = p.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesTag) return false;
      }

      // Size filter
      if (selectedSize !== "All") {
        if (!p.sizes.includes(selectedSize)) return false;
      }

      // In stock
      if (showOnlyInStock && !p.inStock) return false;

      return p.isPublished;
    }).sort((a, b) => {
      if (sortBy === "newest") {
        return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      }
      if (sortBy === "price-asc") {
        const priceA = a.salePrice ?? a.regularPrice;
        const priceB = b.salePrice ?? b.regularPrice;
        return priceA - priceB;
      }
      if (sortBy === "price-desc") {
        const priceA = a.salePrice ?? a.regularPrice;
        const priceB = b.salePrice ?? b.regularPrice;
        return priceB - priceA;
      }
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      // default: featured
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy, selectedSize, showOnlyInStock]);

  return (
    <div className="bg-[#FFF8F0] min-h-screen pb-28">
      {/* 1. Shop Hero Banner */}
      <section className="relative py-16 lg:py-24 bg-[#FFF8F0] border-b border-[#C6A15B]/25 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E8A9BD]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8A9BD]/20 border border-[#C6A15B]/40 text-[#A83263] text-xs uppercase tracking-[0.3em] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Haute Couture Wardrobe</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#241C20] font-normal leading-[1.08]">
            The <span className="font-editorial italic font-semibold text-[#A83263]">Fashion</span> Salon
          </h1>

          <div className="w-20 h-[1.5px] bg-[#C6A15B] mx-auto my-3" />

          <p className="text-base sm:text-lg text-[#241C20]/75 font-light max-w-xl mx-auto leading-relaxed">
            Mulberry silks, hand-knotted pearls, and bespoke Nigerian Aso-Oke tailoring.
            Discover pieces designed to bestow unforgettable royal presence.
          </p>
        </div>
      </section>

      {/* 2. Category Nav Pills */}
      <section className="border-b border-[#C6A15B]/20 bg-[#FFF8F0] sticky top-[65px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs uppercase tracking-[0.2em] whitespace-nowrap px-5 py-2.5 rounded-full transition-all duration-300 font-medium ${
                    isActive
                      ? "bg-[#A83263] text-white shadow-sm"
                      : "bg-[#FFF8F0] border border-[#C6A15B]/40 text-[#241C20] hover:bg-[#E8A9BD]/20 hover:text-[#A83263]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-[12px] bg-white border border-[#C6A15B]/30 shadow-sm">
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#C6A15B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by gown, silk, velvet, Aso-Oke, pearl..."
              className="w-full pl-10 pr-10 py-2 text-xs bg-[#FFF8F0]/50 rounded-[6px] border border-[#C6A15B]/30 focus:border-[#A83263] outline-none text-[#241C20]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Desktop Filter Controls */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Size Selector */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[#241C20]/60 uppercase tracking-wider text-[11px]">Size:</span>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="bg-[#FFF8F0]/50 border border-[#C6A15B]/40 rounded-[6px] px-2.5 py-1.5 text-xs text-[#241C20] outline-none focus:border-[#A83263]"
              >
                {allSizes.map((sz) => (
                  <option key={sz} value={sz}>
                    {sz}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1.5 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#C6A15B]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FFF8F0]/50 border border-[#C6A15B]/40 rounded-[6px] px-2.5 py-1.5 text-xs text-[#241C20] outline-none focus:border-[#A83263]"
              >
                <option value="featured">Featured Curations</option>
                <option value="newest">New Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count & Active Filters Indicator */}
        <div className="mt-6 flex items-center justify-between text-xs text-[#241C20]/60">
          <span>
            Showing <strong className="text-[#241C20]">{filteredProducts.length}</strong> of{" "}
            {PRODUCTS.length} luxury creations
          </span>
          {selectedCategory !== "All" && (
            <button
              onClick={() => setSelectedCategory("All")}
              className="text-[#A83263] hover:underline flex items-center gap-1 text-[11px] font-medium"
            >
              <span>Clear category filter ({selectedCategory})</span>
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-[16px] border border-[#C6A15B]/30 mt-8 space-y-4">
            <h3 className="font-serif text-2xl text-[#241C20]">No creations match your selection</h3>
            <p className="text-xs text-[#241C20]/70 max-w-sm mx-auto">
              Try adjusting your search terms, changing the size criteria, or browsing all categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setSelectedSize("All");
              }}
              className="bg-[#A83263] text-white text-xs uppercase tracking-widest px-6 py-2.5 rounded-[6px] font-medium hover:bg-[#8C2450] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 3} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
