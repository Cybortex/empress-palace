import React from "react";
import Hero from "@/components/Hero";
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

      {/* 2. Fashion, Beauty & Spa Categories */}
      <CategoriesSection />

      {/* 3. Featured Collections (Couture Fashion Wardrobe) */}
      <FeaturedCollections />

      {/* 4. Featured Services (Beauty & Spa Rituals) */}
      <ServicesSection />

      {/* 5. Editorial Gallery Preview */}
      <EditorialGalleryPreview />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Contact & Booking CTA */}
      <BookingCTA />
    </div>
  );
}
