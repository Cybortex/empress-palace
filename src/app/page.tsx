import React from "react";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedCollections from "@/components/FeaturedCollections";
import ServicesSection from "@/components/ServicesSection";
import EditorialGalleryPreview from "@/components/EditorialGalleryPreview";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";

export default function HomePage() {
  return (
    <div className="bg-[#FFF8F0]">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Brand Introduction */}
      <BrandIntro />

      {/* 3. Fashion, Beauty & Spa Categories */}
      <CategoriesSection />

      {/* 4. Featured Collections (Couture Fashion Wardrobe) */}
      <FeaturedCollections />

      {/* 5. Featured Services (Beauty & Spa Rituals) */}
      <ServicesSection />

      {/* 6. Editorial Gallery Preview */}
      <EditorialGalleryPreview />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Contact & Booking CTA */}
      <BookingCTA />
    </div>
  );
}
