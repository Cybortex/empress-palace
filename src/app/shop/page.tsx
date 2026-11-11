import React, { Suspense } from "react";
import ShopView from "@/components/ShopView";

export const metadata = {
  title: "Shop Luxury Fashion | Empress Palace",
  description:
    "Curated collection of luxury gowns, ready-to-wear dresses, traditional African couture, and statement accessories.",
};

export default function ShopPage() {
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
