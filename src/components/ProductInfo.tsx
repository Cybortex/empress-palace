"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import {
  Heart,
  ShoppingBag,
  Sparkles,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  Star,
} from "lucide-react";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const { addToCart, isInWishlist, toggleWishlist, openBooking } = useCart();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "Standard");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "One Size");
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const inWishlist = isInWishlist(product.slug);

  // Variant inventory lookup
  const variantStock =
    product.variantInventory?.[selectedColor]?.[selectedSize] ??
    Math.floor(product.totalStock / (product.colors.length * product.sizes.length || 1));

  const isLowStock = variantStock > 0 && variantStock <= 3;
  const isOutOfStock = variantStock === 0;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addToCart(product, selectedColor, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2500);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Category & SKU & Reviews */}
      <div>
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold mb-2">
          <span>{product.category}</span>
          <span className="font-mono text-[#241C20]/50">SKU: {product.sku}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241C20] leading-tight">
          {product.name}
        </h1>

        <p className="text-sm sm:text-base text-[#A83263] font-editorial italic mt-2 font-medium">
          {product.subtitle}
        </p>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-3 mt-3 pt-2">
          <div className="flex items-center gap-1 text-[#C6A15B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C6A15B]" />
            ))}
          </div>
          <span className="text-xs text-[#241C20]/80 font-medium">
            {product.rating} ({product.reviewCount} verified client reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3 py-3 border-y border-[#C6A15B]/20">
        {product.salePrice ? (
          <>
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#A83263]">
              ₦{product.salePrice.toLocaleString()}
            </span>
            <span className="text-base text-[#241C20]/45 line-through">
              ₦{product.regularPrice.toLocaleString()}
            </span>
            <span className="bg-[#C6A15B] text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold ml-2">
              Save ₦{(product.regularPrice - product.salePrice).toLocaleString()}
            </span>
          </>
        ) : (
          <span className="font-serif text-3xl sm:text-4xl font-bold text-[#241C20]">
            ₦{product.regularPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-[#241C20]/80 font-light leading-relaxed font-sans">
        {product.description}
      </p>

      {/* Color Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="uppercase tracking-[0.2em] font-semibold text-[#241C20]">
            Colour: <strong className="text-[#A83263]">{selectedColor}</strong>
          </span>
          <span className="text-[11px] text-[#241C20]/60">
            {product.colors.length} {product.colors.length === 1 ? "Option" : "Options"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {product.colors.map((color) => {
            const isSelected = selectedColor === color.name;
            return (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`relative group flex items-center justify-center p-1 rounded-full transition-all ${
                  isSelected
                    ? "ring-2 ring-[#A83263] ring-offset-2 scale-110"
                    : "opacity-80 hover:opacity-100 hover:scale-105"
                }`}
                title={color.name}
                aria-label={`Choose ${color.name}`}
              >
                <span
                  className="w-7 h-7 rounded-full border border-black/15 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Size Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="uppercase tracking-[0.2em] font-semibold text-[#241C20]">
            Select Size: <strong className="text-[#A83263]">{selectedSize}</strong>
          </span>
          <button
            onClick={() => openBooking("Custom Size Fitting & Atelier Alteration")}
            className="text-[11px] text-[#C6A15B] hover:text-[#A83263] underline underline-offset-2 transition-colors font-medium"
          >
            Custom Size Guide & Fitting →
          </button>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {product.sizes.map((size) => {
            const isSelected = selectedSize === size;
            const stock = product.variantInventory?.[selectedColor]?.[size] ?? 5;
            const isSizeOut = stock === 0;

            return (
              <button
                key={size}
                disabled={isSizeOut}
                onClick={() => setSelectedSize(size)}
                className={`px-5 py-2.5 rounded-[6px] text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 border ${
                  isSelected
                    ? "bg-[#A83263] text-white border-[#A83263] shadow-sm"
                    : isSizeOut
                    ? "bg-gray-100 text-gray-400 border-gray-200 line-through cursor-not-allowed"
                    : "bg-white text-[#241C20] border-[#C6A15B]/40 hover:border-[#A83263] hover:text-[#A83263]"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>

        {/* Variant Stock Status Indicator */}
        <div className="text-xs pt-1">
          {isOutOfStock ? (
            <span className="text-rose-700 font-medium">
              Sold out in {selectedColor} / {selectedSize}. Please contact concierge for bespoke recreation.
            </span>
          ) : isLowStock ? (
            <span className="text-[#A83263] font-semibold flex items-center gap-1.5 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              Only {variantStock} pieces remaining in {selectedColor} ({selectedSize})
            </span>
          ) : (
            <span className="text-emerald-700 font-medium flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" />
              In Stock & Ready for Immediate White-Glove Dispatch
            </span>
          )}
        </div>
      </div>

      {/* Quantity & Add to Cart & Wishlist */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center border border-[#C6A15B]/50 rounded-[6px] bg-white text-xs">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1 || isOutOfStock}
              className="p-3 text-[#241C20] hover:text-[#A83263] disabled:opacity-40"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="px-4 font-semibold text-sm min-w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              disabled={isOutOfStock || quantity >= variantStock}
              className="p-3 text-[#241C20] hover:text-[#A83263] disabled:opacity-40"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className="flex-1 bg-[#A83263] hover:bg-[#8C2450] text-white py-4 px-6 rounded-[6px] text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 text-emerald-300 stroke-[3]" />
                <span>Added to Bag</span>
              </>
            ) : isOutOfStock ? (
              <span>Sold Out</span>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-[#E8A9BD]" />
                <span>Add to Shopping Bag</span>
              </>
            )}
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => toggleWishlist(product.slug)}
            className={`p-4 rounded-[6px] border transition-all duration-300 ${
              inWishlist
                ? "bg-[#A83263] text-white border-[#A83263]"
                : "border-[#C6A15B]/50 bg-white text-[#241C20] hover:border-[#A83263] hover:text-[#A83263]"
            }`}
            aria-label={inWishlist ? "In wishlist" : "Add to wishlist"}
          >
            <Heart className={`w-5 h-5 ${inWishlist ? "fill-white" : ""}`} />
          </button>
        </div>

        {/* Private Atelier Fitting Option */}
        <button
          onClick={() => openBooking(`Private Fitting: ${product.name}`)}
          className="w-full border border-[#C6A15B] text-[#241C20] hover:bg-[#C6A15B] hover:text-white py-3 rounded-[6px] text-xs uppercase tracking-[0.18em] font-medium transition-colors flex items-center justify-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C6A15B] group-hover:text-white" />
          <span>Book Private Atelier Fitting For This Piece</span>
        </button>
      </div>

      {/* Luxury Assurances */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#C6A15B]/20 text-xs text-[#241C20]/75">
        <div className="flex items-center gap-2.5">
          <Truck className="w-4 h-4 text-[#C6A15B] shrink-0" />
          <span>Complimentary White-Glove Courier</span>
        </div>
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#C6A15B] shrink-0" />
          <span>Authentic Certificate Included</span>
        </div>
        <div className="flex items-center gap-2.5">
          <RotateCcw className="w-4 h-4 text-[#C6A15B] shrink-0" />
          <span>14-Day Boutique Returns</span>
        </div>
      </div>
    </div>
  );
}
