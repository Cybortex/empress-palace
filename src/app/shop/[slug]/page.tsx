import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductDetailsAccordion from "@/components/ProductDetailsAccordion";
import RelatedProducts from "@/components/RelatedProducts";
import { ChevronRight, Home } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Empress Palace",
    };
  }

  return {
    title: `${product.name} | Empress Palace Luxury Atelier`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Empress Palace`,
      description: product.subtitle,
      images: [
        {
          url: product.images.primary,
          width: 1200,
          height: 1600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#FFF8F0] min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          className="flex items-center gap-2 text-xs text-[#241C20]/60 mb-8 overflow-x-auto pb-1 scrollbar-none"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#A83263] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]" />
          <Link href="/fashion" className="hover:text-[#A83263]">
            Fashion
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]" />
          <Link
            href={`/fashion?category=${encodeURIComponent(product.category)}`}
            className="hover:text-[#A83263]"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span className="text-[#A83263] font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* Two-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Product Image Gallery (approx 55% / 7 cols) */}
          <div className="lg:col-span-7">
            <ProductGallery productName={product.name} images={product.images} />
          </div>

          {/* Right Column: Product Information & Purchase (approx 45% / 5 cols) */}
          <div className="lg:col-span-5">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Detailed Information Accordion */}
        <ProductDetailsAccordion product={product} />

        {/* Related Products Carousel */}
        <RelatedProducts currentProduct={product} />
      </div>
    </div>
  );
}
