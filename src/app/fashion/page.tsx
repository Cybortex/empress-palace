import React, { Suspense } from "react";
import ShopView from "@/components/ShopView";

export const metadata = {
  title: "Fashion & Haute Couture | Empress Palace",
  description:
    "Explore bespoke silk gowns, velvet midi dresses, artisanal Nigerian Aso-Oke, and 24k gold jewelry at Empress Palace.",
};

export default function FashionPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#A83263] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ShopView />
    </Suspense>
  );
}
