"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { ChevronDown, Check, Scissors, Ruler, Shield, PackageCheck } from "lucide-react";

interface ProductDetailsAccordionProps {
  product: Product;
}

export default function ProductDetailsAccordion({ product }: ProductDetailsAccordionProps) {
  const [activeTab, setActiveTab] = useState<"fabric" | "fit" | "care" | "delivery">("fabric");

  const tabs = [
    { id: "fabric" as const, label: "Fabric & Materials", icon: Scissors },
    { id: "fit" as const, label: "Size Guide & Fit", icon: Ruler },
    { id: "care" as const, label: "Care Instructions", icon: Shield },
    { id: "delivery" as const, label: "Delivery & Returns", icon: PackageCheck },
  ];

  return (
    <div className="mt-16 sm:mt-24 pt-12 border-t border-[#C6A15B]/30">
      {/* Tab Headers */}
      <div className="flex items-center gap-2 sm:gap-6 border-b border-[#C6A15B]/20 overflow-x-auto pb-px scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-3 px-3 sm:px-4 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium transition-all duration-200 border-b-2 whitespace-nowrap ${
                isActive
                  ? "border-[#A83263] text-[#A83263] font-semibold"
                  : "border-transparent text-[#241C20]/70 hover:text-[#241C20]"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-[#A83263]" : "text-[#C6A15B]"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Body */}
      <div className="py-8 bg-[#FFF8F0]">
        {activeTab === "fabric" && (
          <div className="space-y-4 max-w-3xl">
            <h4 className="font-serif text-lg font-bold text-[#241C20]">
              Material Composition & Atelier Sourcing
            </h4>
            <p className="text-xs sm:text-sm text-[#241C20]/80 font-light leading-relaxed">
              Every Empress Palace piece undergoes strict material authentication. We prioritize ethically produced silks, organic botanical dyes, and generational artisan weavers.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {product.fabricAndMaterials.map((mat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#241C20]/80">
                  <Check className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "fit" && (
          <div className="space-y-4 max-w-3xl">
            <h4 className="font-serif text-lg font-bold text-[#241C20]">
              Fit Profile & Measurements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#241C20]/80 bg-white p-6 rounded-[12px] border border-[#C6A15B]/30">
              <div>
                <span className="block text-[#C6A15B] uppercase tracking-wider font-semibold mb-1">
                  Model Specifications
                </span>
                <p>{product.sizeAndFit.modelStats}</p>
              </div>
              <div>
                <span className="block text-[#C6A15B] uppercase tracking-wider font-semibold mb-1">
                  Silhouette Profile
                </span>
                <p>{product.sizeAndFit.fitType}</p>
              </div>
              <div>
                <span className="block text-[#C6A15B] uppercase tracking-wider font-semibold mb-1">
                  Garment Length
                </span>
                <p>{product.sizeAndFit.length}</p>
              </div>
              <div>
                <span className="block text-[#C6A15B] uppercase tracking-wider font-semibold mb-1">
                  Atelier Fitting Advice
                </span>
                <p>{product.sizeAndFit.recommendation}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "care" && (
          <div className="space-y-4 max-w-3xl">
            <h4 className="font-serif text-lg font-bold text-[#241C20]">
              Luxury Preservation & Longevity
            </h4>
            <p className="text-xs sm:text-sm text-[#241C20]/80 font-light leading-relaxed">
              Preserve the luster of precious fabrics and metallic embellishments with our dedicated care recommendations:
            </p>
            <ul className="space-y-2.5 pt-2">
              {product.careInstructions.map((inst, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#241C20]/80">
                  <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                  <span>{inst}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "delivery" && (
          <div className="space-y-4 max-w-3xl">
            <h4 className="font-serif text-lg font-bold text-[#241C20]">
              White-Glove Fulfillment & Return Protection
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-[#241C20]/80">
              <div className="p-4 bg-white rounded-[8px] border border-[#C6A15B]/30 space-y-1">
                <strong className="text-[#A83263] block uppercase tracking-wider text-xs">
                  White-Glove Delivery
                </strong>
                <p className="text-xs">{product.deliveryAndReturns.delivery}</p>
              </div>
              <div className="p-4 bg-white rounded-[8px] border border-[#C6A15B]/30 space-y-1">
                <strong className="text-[#A83263] block uppercase tracking-wider text-xs">
                  Complimentary Boutique Returns
                </strong>
                <p className="text-xs">{product.deliveryAndReturns.returns}</p>
              </div>
              <div className="p-4 bg-white rounded-[8px] border border-[#C6A15B]/30 space-y-1">
                <strong className="text-[#A83263] block uppercase tracking-wider text-xs">
                  Keepsake Presentation Packaging
                </strong>
                <p className="text-xs">{product.deliveryAndReturns.packaging}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
