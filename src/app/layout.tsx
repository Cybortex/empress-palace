import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import BookingModal from "@/components/BookingModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Empress Palace | Hybrid Luxury Fashion, Beauty & Spa",
  description:
    "Where Fashion Meets Beauty. Discover bespoke haute couture, luxury ready-to-wear, and transcendent beauty & spa treatments designed around elegance and confidence.",
  keywords: [
    "Empress Palace",
    "Luxury Fashion",
    "Haute Couture",
    "African Luxury",
    "Beauty and Spa",
    "Editorial Fashion",
    "Bespoke Atelier",
  ],
  authors: [{ name: "Empress Palace" }],
  openGraph: {
    title: "Empress Palace | Hybrid Luxury Fashion, Beauty & Spa",
    description:
      "Where Fashion Meets Beauty. Discover bespoke haute couture, luxury ready-to-wear, and transcendent beauty & spa treatments.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FFF8F0] text-[#241C20] font-sans antialiased selection:bg-[#E8A9BD] selection:text-[#241C20]">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CartDrawer />
          <BookingModal />
        </CartProvider>
      </body>
    </html>
  );
}
