"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingBag, Check, Eye, X, Sparkles, ArrowRight, ShieldAlert } from "lucide-react";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addToCart, isInWishlist, toggleWishlist } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "Standard");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "One Size");
  const [isAdded, setIsAdded] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const inWishlist = isInWishlist(product.slug);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedColor, selectedSize, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.slug);
  };

  const openQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsQuickViewOpen(true);
  };

  const imageSrc = imgError
    ? "/hero-image.png"
    : product.product_image_link || product.images.primary;

  const currentPrice = product.price || product.salePrice || product.regularPrice;
  const comparePrice = product.compare_at_price || (product.salePrice ? product.regularPrice : null);
  const discountPercent = comparePrice && comparePrice > currentPrice
    ? Math.round(((comparePrice - currentPrice) / comparePrice) * 100)
    : null;

  return (
    <>
      <div
        className="group flex flex-col bg-[#FFF8F0] rounded-[16px] border border-[#C6A15B]/30 overflow-hidden hover:border-[#A83263]/60 transition-all duration-500 hover:shadow-lg relative h-full justify-between"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          {/* Image Container */}
          <Link
            href={`/shop/${product.slug}`}
            className="relative aspect-[4/4.2] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden bg-[#E8A9BD]/20 block"
          >
            <Image
              src={imageSrc}
              alt={product.product_name || product.name}
              fill
              priority={priority}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onError={() => setImgError(true)}
              className="object-cover object-top transition-all duration-700 ease-out group-hover:scale-105"
            />

            {/* Badges */}
            <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
              {discountPercent && (
                <span className="bg-[#A83263] text-white text-[9px] uppercase tracking-[0.16em] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-semibold shadow-sm">
                  -{discountPercent}% Offer
                </span>
              )}
              {product.is_new_arrival && (
                <span className="bg-[#C6A15B] text-white text-[9px] uppercase tracking-[0.16em] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-semibold shadow-sm">
                  New Arrival
                </span>
              )}
              {product.reference_only && (
                <span className="bg-[#241C20]/80 backdrop-blur-xs text-[#FFF8F0] text-[8px] sm:text-[9px] uppercase tracking-[0.14em] px-2 py-0.5 rounded-full font-medium shadow-xs">
                  Ref Model
                </span>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={handleWishlist}
              className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                inWishlist
                  ? "bg-[#A83263] text-white shadow-md"
                  : "bg-[#FFF8F0]/85 backdrop-blur-sm text-[#241C20] hover:bg-[#A83263] hover:text-white"
              }`}
              aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${inWishlist ? "fill-white" : ""}`} />
            </button>

            {/* Hover Action Strip (Quick View & Quick Add) */}
            <div className="absolute inset-x-2.5 bottom-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex gap-2">
              <button
                onClick={openQuickView}
                className="flex-1 bg-[#FFF8F0]/95 backdrop-blur-md hover:bg-[#241C20] text-[#241C20] hover:text-white border border-[#C6A15B]/50 py-2 px-2.5 rounded-[6px] text-[10px] sm:text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Quick View</span>
                <span className="sm:hidden">View</span>
              </button>

              <button
                onClick={handleQuickAdd}
                disabled={!product.inStock}
                className="flex-1 bg-[#A83263] hover:bg-[#8C2450] text-white py-2 px-2.5 rounded-[6px] text-[10px] sm:text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md"
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    <span className="hidden sm:inline">Added</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5 text-[#E8A9BD]" />
                    <span className="hidden sm:inline">Add</span>
                  </>
                )}
              </button>
            </div>
          </Link>

          {/* Details */}
          <div className="p-3 sm:p-4">
            <div className="flex items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#C6A15B] font-semibold mb-1">
              <span className="truncate">{product.category}</span>
              <span className="font-mono text-[#241C20]/40 shrink-0 ml-1">#{product.id}</span>
            </div>

            <Link href={`/shop/${product.slug}`} className="block">
              <h3 className="font-serif text-sm sm:text-base font-bold text-[#241C20] group-hover:text-[#A83263] transition-colors line-clamp-1">
                {product.product_name || product.name}
              </h3>
            </Link>

            <p className="text-[11px] text-[#241C20]/70 font-light mt-0.5 line-clamp-1">
              {product.product_description || product.description}
            </p>

            {/* Color swatches preview */}
            <div className="flex items-center gap-1.5 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedColor(color.name);
                  }}
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border transition-all ${
                    selectedColor === color.name
                      ? "ring-2 ring-[#A83263] scale-110"
                      : "border-black/20"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select ${color.name}`}
                />
              ))}
              <span className="text-[9px] text-[#241C20]/50 ml-1 font-light">
                {product.colors.length} {product.colors.length === 1 ? "shade" : "shades"}
              </span>
            </div>
          </div>
        </div>

        {/* Price & View CTA */}
        <div className="p-3 sm:p-4 pt-0">
          <div className="pt-2.5 border-t border-[#C6A15B]/20 flex items-center justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-base sm:text-lg font-bold text-[#A83263]">
                ₦{currentPrice.toLocaleString()}
              </span>
              {comparePrice && comparePrice > currentPrice && (
                <span className="text-[10px] sm:text-xs text-[#241C20]/45 line-through">
                  ₦{comparePrice.toLocaleString()}
                </span>
              )}
            </div>

            <Link
              href={`/shop/${product.slug}`}
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#C6A15B] group-hover:text-[#A83263] font-semibold transition-colors flex items-center gap-1"
            >
              <span>View</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#241C20]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="relative bg-[#FFF8F0] border border-[#C6A15B] rounded-[18px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setIsQuickViewOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#241C20] hover:text-[#A83263] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-[12px] overflow-hidden bg-[#E8A9BD]/20 border border-[#C6A15B]/30">
                <Image
                  src={imageSrc}
                  alt={product.product_name || product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover object-top"
                />
                <div className="absolute top-3 left-3 bg-[#241C20]/80 text-[#FFF8F0] text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Visual Reference Only
                </div>
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A15B] font-semibold">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#241C20] mt-1">
                    {product.product_name || product.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-serif text-2xl font-bold text-[#A83263]">
                      ₦{currentPrice.toLocaleString()}
                    </span>
                    {comparePrice && comparePrice > currentPrice && (
                      <span className="text-xs text-[#241C20]/45 line-through">
                        ₦{comparePrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-[#241C20]/75 font-light leading-relaxed">
                  {product.product_description || product.description}
                </p>

                {/* Sizes */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#241C20] font-semibold mb-1.5">
                    Select Size:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`text-xs px-3 py-1 rounded-[4px] border font-medium transition-colors ${
                          selectedSize === sz
                            ? "bg-[#A83263] text-white border-[#A83263]"
                            : "border-[#C6A15B]/40 text-[#241C20] hover:border-[#A83263]"
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-[#C6A15B]/20 flex flex-col gap-2.5">
                  <button
                    onClick={handleQuickAdd}
                    className="w-full bg-[#A83263] hover:bg-[#8C2450] text-white py-3 rounded-[6px] text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-[#E8A9BD]" />
                        <span>Add to Shopping Bag</span>
                      </>
                    )}
                  </button>

                  <Link
                    href={`/shop/${product.slug}`}
                    onClick={() => setIsQuickViewOpen(false)}
                    className="text-center text-xs uppercase tracking-[0.18em] text-[#C6A15B] hover:text-[#A83263] font-semibold py-1.5 transition-colors"
                  >
                    View Full Product Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
