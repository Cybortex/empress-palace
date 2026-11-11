"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  Heart,
  Phone,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  Clock,
  MapPin,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount, openCart, wishlist, openBooking } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Fashion", href: "/fashion" },
    { label: "Beauty & Spa", href: "/beauty-spa" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFF8F0]/95 backdrop-blur-md shadow-sm border-b border-[#C6A15B]/30 py-3"
          : "bg-[#FFF8F0] border-b border-[#C6A15B]/25 py-4 lg:py-5"
      }`}
    >
      {/* Top micro bar for luxury announcement */}
      <div className="bg-[#241C20] text-[#FFF8F0] text-[11px] uppercase tracking-[0.25em] py-1.5 px-4 text-center hidden md:flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto">
          <Sparkles className="w-3 h-3 text-[#C6A15B]" />
          <span>Haute Couture Atelier & Luxury Beauty Sanctuary</span>
          <span className="text-[#C6A15B]">✦</span>
          <span>Complimentary White-Glove Courier On Orders Over $250</span>
        </div>
        <div className="text-[10px] text-[#E8A9BD] tracking-wider hidden lg:block">
          VIP Concierge: +1 (800) 843-3677
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 text-[#241C20] hover:text-[#A83263] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#A83263]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Brand Logo */}
          <Link
            href="/"
            className="flex flex-col items-center group text-center"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] text-[#241C20] uppercase font-bold group-hover:text-[#A83263] transition-colors">
              Empress Palace
            </span>
            <span className="text-[9px] uppercase tracking-[0.38em] text-[#C6A15B] font-medium -mt-0.5">
              Haute Couture & Spa
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs uppercase tracking-[0.22em] font-medium py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-[#A83263] font-semibold"
                      : "text-[#241C20]/85 hover:text-[#A83263]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#A83263] rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & CTAs */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Wishlist Link */}
            <Link
              href="/fashion?filter=wishlist"
              className="relative p-2 text-[#241C20] hover:text-[#A83263] transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.75]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#E8A9BD] text-[#241C20] text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart Drawer Trigger */}
            <button
              onClick={openCart}
              className="relative p-2 text-[#241C20] hover:text-[#A83263] transition-colors"
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#A83263] text-white text-[10px] font-bold flex items-center justify-center animate-fade-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Desktop "Call Us" CTA Button */}
            <a
              href="tel:+18008433677"
              className="hidden sm:inline-flex items-center gap-2 border border-[#C6A15B] text-[#241C20] hover:bg-[#C6A15B] hover:text-white px-4 py-2 text-xs uppercase tracking-[0.18em] rounded-[6px] font-medium transition-all duration-300 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A15B] group-hover:text-white" />
              <span>Call Us</span>
            </a>

            {/* Book Experience Button */}
            <button
              onClick={() => openBooking()}
              className="hidden md:inline-flex items-center gap-1.5 bg-[#A83263] hover:bg-[#8C2450] text-white px-4 py-2 text-xs uppercase tracking-[0.18em] rounded-[6px] font-medium transition-all duration-300 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E8A9BD]" />
              <span>Reserve</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-50 bg-[#241C20]/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FFF8F0] border-b border-[#C6A15B] max-h-[85vh] overflow-y-auto px-6 py-6 shadow-xl">
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold border-b border-[#C6A15B]/20 pb-2">
                Empress Navigation
              </span>
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-base font-serif tracking-wider py-2 border-b border-[#C6A15B]/10 transition-colors ${
                      isActive
                        ? "text-[#A83263] font-bold"
                        : "text-[#241C20] hover:text-[#A83263]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#C6A15B]" />
                  </Link>
                );
              })}

              {/* Mobile Quick Action Buttons */}
              <div className="pt-4 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openBooking();
                  }}
                  className="w-full bg-[#A83263] text-white py-3 text-xs uppercase tracking-[0.2em] rounded-[6px] font-medium flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#E8A9BD]" />
                  <span>Reserve Spa & Fitting</span>
                </button>

                <a
                  href="tel:+18008433677"
                  className="w-full border border-[#C6A15B] text-[#241C20] py-3 text-xs uppercase tracking-[0.2em] rounded-[6px] font-medium flex items-center justify-center gap-2 hover:bg-[#C6A15B] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C6A15B]" />
                  <span>Call Us Now: (800) 843-3677</span>
                </a>
              </div>

              {/* Boutique Hours & Location Info */}
              <div className="pt-4 mt-2 border-t border-[#C6A15B]/20 text-xs text-[#241C20]/75 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Mon – Sat: 9:00 AM – 8:00 PM | Sun: VIP By Appointment</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>45 Victoria Island Blvd, Lagos & Mayfair, London</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
