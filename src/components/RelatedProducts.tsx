import React from "react";
import { Product, PRODUCTS } from "@/data/products";
import ProductCard from "./ProductCard";
import { Sparkles } from "lucide-react";

interface RelatedProductsProps {
  currentProduct: Product;
}

export default function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  // Find products specified in relatedSlugs, fallback to same category
  const related = PRODUCTS.filter(
    (p) =>
      p.id !== currentProduct.id &&
      (currentProduct.relatedSlugs?.includes(p.slug) || p.category === currentProduct.category)
  ).slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-20 pt-16 border-t border-[#C6A15B]/25">
      <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-semibold flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Harmony</span>
          <Sparkles className="w-3.5 h-3.5" />
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-[#241C20] font-normal">
          You May Also <span className="font-editorial italic font-semibold text-[#A83263]">Admire</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#241C20]/70 font-light">
          Complementary Nigerian fashion creations styled by our private atelier director.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {related.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </section>
  );
}
