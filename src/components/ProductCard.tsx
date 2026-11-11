"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingBag, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addToCart, isInWishlist, toggleWishlist } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "Default");
  const [isAdded, setIsAdded] = useState(false);

  const inWishlist = isInWishlist(product.slug);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes[0] || "Standard";
    addToCart(product, selectedColor, defaultSize, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.slug);
  };

  const currentImage =
    isHovered && product.images.back
      ? product.images.back
      : product.images.primary;

  return (
    <div
      className="group flex flex-col bg-[#FFF8F0] rounded-[16px] border border-[#C6A15B]/30 overflow-hidden hover:border-[#A83263]/60 transition-all duration-500 hover:shadow-lg relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link
        href={`/shop/${product.slug}`}
        className="relative aspect-[3/4] w-full overflow-hidden bg-[#E8A9BD]/20 block"
      >
        <Image
          src={currentImage}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-all duration-700 ease-out group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNewArrival && (
            <span className="bg-[#A83263] text-white text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full font-semibold shadow-sm">
              New Season
            </span>
          )}
          {product.salePrice && (
            <span className="bg-[#C6A15B] text-white text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full font-semibold shadow-sm">
              Private Offer
            </span>
          )}
          {product.category === "Traditional Wear" && (
            <span className="bg-[#241C20] text-[#FFF8F0] text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full font-semibold shadow-sm">
              Artisan Loom
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
            inWishlist
              ? "bg-[#A83263] text-white shadow-md"
              : "bg-[#FFF8F0]/85 backdrop-blur-sm text-[#241C20] hover:bg-[#A83263] hover:text-white"
          }`}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${inWishlist ? "fill-white" : ""}`} />
        </button>

        {/* Hover Quick Add Overlay */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={handleQuickAdd}
            disabled={!product.inStock}
            className="w-full bg-[#FFF8F0]/95 backdrop-blur-md hover:bg-[#A83263] text-[#241C20] hover:text-white border border-[#C6A15B]/50 py-2.5 px-4 rounded-[6px] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#C6A15B] group-hover:text-white" />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </Link>

      {/* Details */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold mb-1">
            <span>{product.category}</span>
            <span className="text-[#241C20]/50 font-mono">SKU: {product.sku}</span>
          </div>

          <Link href={`/shop/${product.slug}`} className="block">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241C20] group-hover:text-[#A83263] transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-[#241C20]/70 font-light mt-1 line-clamp-1">
            {product.subtitle}
          </p>

          {/* Color swatches preview */}
          <div className="flex items-center gap-1.5 mt-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedColor(color.name);
                }}
                className={`w-4 h-4 rounded-full border transition-all ${
                  selectedColor === color.name
                    ? "ring-2 ring-[#A83263] scale-110"
                    : "border-black/20"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                aria-label={`Select ${color.name}`}
              />
            ))}
            <span className="text-[10px] text-[#241C20]/50 ml-1.5 font-light">
              {product.colors.length} {product.colors.length === 1 ? "shade" : "shades"}
            </span>
          </div>
        </div>

        {/* Price & View */}
        <div className="mt-4 pt-3 border-t border-[#C6A15B]/20 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            {product.salePrice ? (
              <>
                <span className="font-serif text-lg font-bold text-[#A83263]">
                  ${product.salePrice.toLocaleString()}
                </span>
                <span className="text-xs text-[#241C20]/45 line-through">
                  ${product.regularPrice.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="font-serif text-lg font-bold text-[#241C20]">
                ${product.regularPrice.toLocaleString()}
              </span>
            )}
          </div>

          <Link
            href={`/shop/${product.slug}`}
            className="text-[11px] uppercase tracking-[0.18em] text-[#C6A15B] group-hover:text-[#A83263] font-semibold transition-colors"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
