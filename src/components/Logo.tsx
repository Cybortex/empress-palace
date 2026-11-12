import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export default function Logo({
  variant = "dark",
  size = "md",
  showTagline = true,
  className = "",
}: LogoProps) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: {
      emblem: "w-8 h-8",
      title: "text-base sm:text-lg tracking-[0.14em]",
      tagline: "text-[8px] tracking-[0.24em]",
    },
    md: {
      emblem: "w-9 h-9 sm:w-11 sm:h-11",
      title: "text-lg sm:text-2xl tracking-[0.16em]",
      tagline: "text-[9px] sm:text-[10px] tracking-[0.28em]",
    },
    lg: {
      emblem: "w-12 h-12 sm:w-16 sm:h-16",
      title: "text-2xl sm:text-3xl lg:text-4xl tracking-[0.18em]",
      tagline: "text-[10px] sm:text-xs tracking-[0.3em]",
    },
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 sm:gap-3.5 group select-none ${className}`}
      aria-label="Empress Palace Home"
    >
      {/* Imperial EP Emblem */}
      <div className={`relative ${sizeClasses.emblem} shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm rounded-[10px] overflow-hidden`}>
        <Image
          src="/logo-icon.svg"
          alt="Empress Palace Royal Emblem"
          fill
          priority
          sizes="64px"
          className="object-contain"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif uppercase font-bold leading-none transition-colors duration-200 ${
            sizeClasses.title
          } ${
            isLight
              ? "text-[#FFF8F0] group-hover:text-[#E8A9BD]"
              : "text-[#241C20] group-hover:text-[#A83263]"
          }`}
        >
          <span>Empress</span>{" "}
          <span className={isLight ? "text-[#E8A9BD]" : "text-[#A83263]"}>Palace</span>
        </span>

        {showTagline && (
          <span
            className={`font-sans uppercase font-semibold text-[#C6A15B] mt-1 leading-none ${sizeClasses.tagline}`}
          >
            Haute Couture • Abuja
          </span>
        )}
      </div>
    </Link>
  );
}
