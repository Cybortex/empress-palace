"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#241C20] text-[#FFF8F0] pt-16 lg:pt-20 pb-10 border-t border-[#C6A15B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column luxury layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[#C6A15B]/25">
          {/* Column 1: Brand Editorial Statement (2 cols on large) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] text-[#FFF8F0] uppercase font-bold group-hover:text-[#E8A9BD] transition-colors">
                Empress Palace
              </span>
              <span className="block text-[10px] uppercase tracking-[0.35em] text-[#C6A15B] font-medium mt-1">
                Hybrid Luxury • Haute Couture • Wellness Sanctuary
              </span>
            </Link>

            <p className="text-sm font-light text-[#FFF8F0]/75 leading-relaxed max-w-md font-sans">
              Where fashion meets beauty. We cultivate a sanctuary of sovereignty,
              elegance, and unyielding confidence. Handcrafted haute couture, bespoke
              African heirloom textiles, and transformative holistic spa rituals tailored
              to your highest essence.
            </p>

            {/* Newsletter input */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-semibold mb-2">
                Join The Palace Circle
              </span>
              <p className="text-xs text-[#FFF8F0]/60 mb-3">
                Receive private invitations to couture salon shows, private trunk sales, and wellness retreats.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing to The Palace Circle.");
                }}
                className="flex items-center max-w-md"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your VIP email address..."
                  className="bg-[#FFF8F0]/10 border border-[#C6A15B]/40 focus:border-[#E8A9BD] text-xs text-[#FFF8F0] px-3.5 py-2.5 rounded-l-[4px] outline-none flex-grow placeholder:text-[#FFF8F0]/40"
                />
                <button
                  type="submit"
                  className="bg-[#A83263] hover:bg-[#8C2450] text-[#FFF8F0] text-xs uppercase tracking-[0.16em] px-4 py-2.5 rounded-r-[4px] font-medium transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Fashion Collections */}
          <div className="space-y-4">
            <h4 className="font-serif text-base tracking-wider text-[#C6A15B] uppercase font-semibold">
              The Atelier
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#FFF8F0]/75">
              <li>
                <Link href="/fashion?category=Gowns" className="hover:text-[#E8A9BD] transition-colors flex items-center justify-between">
                  <span>Haute Gowns</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
              <li>
                <Link href="/fashion?category=Dresses" className="hover:text-[#E8A9BD] transition-colors flex items-center justify-between">
                  <span>Midi & Velvet Dresses</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
              <li>
                <Link href="/fashion?category=Traditional+Wear" className="hover:text-[#E8A9BD] transition-colors flex items-center justify-between">
                  <span>Artisanal Aso-Oke & Adire</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
              <li>
                <Link href="/fashion?category=Casual+Wear" className="hover:text-[#E8A9BD] transition-colors flex items-center justify-between">
                  <span>Normandy Linen Sets</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
              <li>
                <Link href="/fashion?category=Accessories" className="hover:text-[#E8A9BD] transition-colors flex items-center justify-between">
                  <span>Fine Jewelry & Pearls</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#E8A9BD] transition-colors flex items-center justify-between">
                  <span>Editorial Lookbook</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Beauty & Spa Sanctuary */}
          <div className="space-y-4">
            <h4 className="font-serif text-base tracking-wider text-[#C6A15B] uppercase font-semibold">
              Sanctuary
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#FFF8F0]/75">
              <li>
                <Link href="/beauty-spa" className="hover:text-[#E8A9BD] transition-colors">
                  24K Imperial Gold Facial
                </Link>
              </li>
              <li>
                <Link href="/beauty-spa" className="hover:text-[#E8A9BD] transition-colors">
                  Crown Bar & Protective Braids
                </Link>
              </li>
              <li>
                <Link href="/beauty-spa" className="hover:text-[#E8A9BD] transition-colors">
                  Rose Quartz Hydrotherapy
                </Link>
              </li>
              <li>
                <Link href="/beauty-spa" className="hover:text-[#E8A9BD] transition-colors">
                  Volcanic Stone Massage
                </Link>
              </li>
              <li>
                <Link href="/beauty-spa" className="hover:text-[#E8A9BD] transition-colors">
                  Bridal Suite Glamour
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E8A9BD] transition-colors">
                  Atelier Heritage Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Private Concierge */}
          <div className="space-y-4">
            <h4 className="font-serif text-base tracking-wider text-[#C6A15B] uppercase font-semibold">
              Concierge
            </h4>
            <div className="space-y-3 text-xs text-[#FFF8F0]/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>Plot 14, Gana Street, Maitama, Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href="tel:09071649725" className="hover:text-[#E8A9BD] transition-colors">
                  09071649725 / VIP Desk
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href="mailto:concierge@empresspalace.com" className="hover:text-[#E8A9BD] transition-colors">
                  concierge@empresspalace.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>Mon – Sat: 9am – 8pm<br />Sunday: Private Appointments Only</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] hover:bg-[#A83263] hover:text-white hover:border-[#A83263] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-[1.75]" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] hover:bg-[#A83263] hover:text-white hover:border-[#A83263] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-[1.75]" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Built By Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#FFF8F0]/50 space-y-4 md:space-y-0">
          <p>
            © {new Date().getFullYear()} Empress Palace Luxury Atelier & Spa. All rights reserved.
          </p>

          {/* Mandatory requirement: Built by Cybortex Technologies */}
          <div className="flex items-center gap-2 bg-[#FFF8F0]/5 border border-[#C6A15B]/30 px-3.5 py-1.5 rounded-full text-xs text-[#FFF8F0]/80">
            <span>Built by</span>
            <span className="font-semibold text-[#E8A9BD] tracking-wider uppercase">
              Cybortex Technologies
            </span>
          </div>

          <div className="flex items-center space-x-6 text-[11px] text-[#FFF8F0]/60">
            <Link href="/contact" className="hover:text-[#E8A9BD] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#E8A9BD] transition-colors">
              Terms of Elegance
            </Link>
            <Link href="/contact" className="hover:text-[#E8A9BD] transition-colors">
              Client Protection
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
