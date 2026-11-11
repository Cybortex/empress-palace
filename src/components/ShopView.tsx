"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, FASHION_CATEGORIES, FashionCategory, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import {
  Search,
  SlidersHorizontal,
  X,
  ArrowUpDown,
  Filter,
  Check,
  Info,
} from "lucide-react";

export default function ShopView() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || searchParams.get("filter") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(
    FASHION_CATEGORIES.includes(initialCategory as any) ? initialCategory : "All"
  );
  const [collectionTab, setCollectionTab] = useState<"all" | "featured" | "new" | "bestsellers">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"featured" | "newest" | "price-asc" | "price-desc">("featured");
  const [selectedSize, setSelectedSize] = useState<string>("All");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const allSizes = ["All", "XS", "S", "M", "L", "XL", "Custom"];

  const categoriesWithAll = ["All", ...FASHION_CATEGORIES];

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Collection quick tabs
      if (collectionTab === "featured" && !p.is_featured) return false;
      if (collectionTab === "new" && !p.is_new_arrival) return false;
      if (collectionTab === "bestsellers" && !p.is_best_seller) return false;

      // Category filter
      if (selectedCategory !== "All" && p.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = (p.product_name || p.name).toLowerCase().includes(query);
        const matchesDesc = (p.product_description || p.description).toLowerCase().includes(query);
        const matchesTag = p.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesTag) return false;
      }

      // Price filter
      const pPrice = p.price || p.regularPrice;
      if (priceRange === "under-45k" && pPrice >= 45000) return false;
      if (priceRange === "45k-75k" && (pPrice < 45000 || pPrice > 75000)) return false;
      if (priceRange === "75k-100k" && (pPrice < 75000 || pPrice > 100000)) return false;
      if (priceRange === "above-100k" && pPrice <= 100000) return false;

      // Size filter
      if (selectedSize !== "All") {
        if (!p.sizes.includes(selectedSize) && !p.sizes.includes("One Size") && !p.sizes.includes("S/M")) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "newest") {
        return (b.is_new_arrival ? 1 : 0) - (a.is_new_arrival ? 1 : 0);
      }
      if (sortBy === "price-asc") {
        const priceA = a.price || a.regularPrice;
        const priceB = b.price || b.regularPrice;
        return priceA - priceB;
      }
      if (sortBy === "price-desc") {
        const priceA = a.price || a.regularPrice;
        const priceB = b.price || b.regularPrice;
        return priceB - priceA;
      }
      // default: featured
      return (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0);
    });
  }, [collectionTab, selectedCategory, searchQuery, priceRange, sortBy, selectedSize]);

  const activeFiltersCount =
    (selectedCategory !== "All" ? 1 : 0) +
    (collectionTab !== "all" ? 1 : 0) +
    (priceRange !== "all" ? 1 : 0) +
    (selectedSize !== "All" ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const resetAllFilters = () => {
    setSelectedCategory("All");
    setCollectionTab("all");
    setPriceRange("all");
    setSelectedSize("All");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <div className="bg-[#FFF8F0] min-h-screen pb-28">
      {/* 1. Elegant Introductory Banner */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-[#FFF8F0] border-b border-[#C6A15B]/25 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E8A9BD]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8A9BD]/20 border border-[#C6A15B]/40 text-[#A83263] text-xs uppercase tracking-[0.3em] font-semibold">
            <span>Contemporary Nigerian Boutique</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#241C20] font-normal leading-[1.1]">
            The <span className="font-editorial italic font-semibold text-[#A83263]">Fashion</span> Catalogue
          </h1>

          <div className="w-20 h-[1.5px] bg-[#C6A15B] mx-auto my-3" />

          <p className="text-sm sm:text-base text-[#241C20]/75 font-light max-w-xl mx-auto leading-relaxed">
            Ankara gowns, sculpted two-piece sets, luxury dresses, and cultural fashion editorials.
            Curated visual reference catalogue celebrating contemporary Nigerian sartorial poise.
          </p>

          {/* Quick Collection Segment Buttons (Featured, New, Best Sellers) */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap pt-4">
            <button
              onClick={() => setCollectionTab("all")}
              className={`text-[11px] sm:text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-full transition-all font-medium ${
                collectionTab === "all"
                  ? "bg-[#241C20] text-white shadow-sm"
                  : "bg-white/80 border border-[#C6A15B]/40 text-[#241C20] hover:border-[#A83263]"
              }`}
            >
              All Designs ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setCollectionTab("featured")}
              className={`text-[11px] sm:text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-full transition-all font-medium ${
                collectionTab === "featured"
                  ? "bg-[#A83263] text-white shadow-sm"
                  : "bg-white/80 border border-[#C6A15B]/40 text-[#241C20] hover:border-[#A83263]"
              }`}
            >
              Featured Collection
            </button>
            <button
              onClick={() => setCollectionTab("new")}
              className={`text-[11px] sm:text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-full transition-all font-medium ${
                collectionTab === "new"
                  ? "bg-[#A83263] text-white shadow-sm"
                  : "bg-white/80 border border-[#C6A15B]/40 text-[#241C20] hover:border-[#A83263]"
              }`}
            >
              New Arrivals
            </button>
            <button
              onClick={() => setCollectionTab("bestsellers")}
              className={`text-[11px] sm:text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-full transition-all font-medium ${
                collectionTab === "bestsellers"
                  ? "bg-[#A83263] text-white shadow-sm"
                  : "bg-white/80 border border-[#C6A15B]/40 text-[#241C20] hover:border-[#A83263]"
              }`}
            >
              Best Sellers
            </button>
          </div>
        </div>
      </section>

      {/* 2. Demonstration Disclaimer Notice Banner */}
      <section className="bg-[#FFF8F0] border-b border-[#C6A15B]/20 py-2.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-[11px] text-[#241C20]/75">
          <Info className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
          <span>
            <strong>Visual Reference Catalogue:</strong> All catalogue items represent demonstration mockups inspired by verified Nigerian fashion sources.
          </span>
        </div>
      </section>

      {/* 3. Category Navigation Pills */}
      <section className="border-b border-[#C6A15B]/20 bg-[#FFF8F0]/95 backdrop-blur-md sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3.5 scrollbar-none">
            {categoriesWithAll.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] sm:text-xs uppercase tracking-[0.18em] whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300 font-medium ${
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

      {/* 4. Filter, Search & Sorting Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="bg-white border border-[#C6A15B]/30 rounded-[14px] p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6A15B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by silhouette, style, or motif..."
              className="w-full bg-[#FFF8F0]/50 border border-[#C6A15B]/40 rounded-[8px] pl-10 pr-9 py-2 text-xs text-[#241C20] placeholder-[#241C20]/50 outline-none focus:border-[#A83263] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#241C20]/40 hover:text-[#A83263]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Controls: Price Filter, Sorting & Clear */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Price Filter Selector */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="bg-[#FFF8F0]/60 border border-[#C6A15B]/40 rounded-[8px] px-3 py-2 text-xs text-[#241C20] outline-none focus:border-[#A83263] transition-colors"
            >
              <option value="all">All Price Ranges</option>
              <option value="under-45k">Under ₦45,000</option>
              <option value="45k-75k">₦45,000 – ₦75,000</option>
              <option value="75k-100k">₦75,000 – ₦100,000</option>
              <option value="above-100k">Above ₦100,000</option>
            </select>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-1.5 border border-[#C6A15B]/40 rounded-[8px] px-3 py-2 bg-[#FFF8F0]/60 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#C6A15B]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-[#241C20] outline-none text-xs font-medium cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="newest">Sort: Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            {/* Reset Filters CTA */}
            {activeFiltersCount > 0 && (
              <button
                onClick={resetAllFilters}
                className="text-xs uppercase tracking-wider text-[#A83263] hover:underline font-semibold flex items-center gap-1 px-2 py-1"
              >
                <X className="w-3 h-3" />
                <span>Reset ({activeFiltersCount})</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Count & Active Category Indicator */}
        <div className="flex items-center justify-between text-xs text-[#241C20]/75 pt-5 pb-2">
          <span>
            Showing <strong className="text-[#A83263] font-semibold">{filteredProducts.length}</strong> of{" "}
            {PRODUCTS.length} curated creations
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </span>
          <span className="hidden sm:inline text-[11px] text-[#C6A15B] uppercase tracking-wider font-semibold">
            All Prices in Nigerian Naira (₦)
          </span>
        </div>
      </section>

      {/* 5. Responsive Product Grid: 4-col desktop, 3-col tablet, 2-col mobile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[16px] border border-[#C6A15B]/30 mt-4 space-y-4">
            <h3 className="font-serif text-2xl text-[#241C20] font-bold">No creations match your filter</h3>
            <p className="text-xs text-[#241C20]/70 max-w-sm mx-auto leading-relaxed">
              Try adjusting your search criteria, widening the price tier, or exploring all Nigerian fashion creations.
            </p>
            <button
              onClick={resetAllFilters}
              className="bg-[#A83263] text-white text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-[6px] font-medium hover:bg-[#8C2450] transition-colors shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 4} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
