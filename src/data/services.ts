export interface Service {
  id: string;
  title: string;
  category: "Spa" | "Beauty" | "Atelier";
  duration: string;
  price: number;
  description: string;
  highlights: string[];
  image: string;
  recommendedFor: string;
}

export const SERVICES: Service[] = [
  {
    id: "srv-01",
    title: "24K Imperial Gold Facial",
    category: "Spa",
    duration: "90 mins",
    price: 180000,
    description:
      "Our premier anti-aging ritual. Pure 24-karat gold leaf flakes infused into antioxidant botanical serums to stimulate cellular turnover, boost collagen, and leave deep-toned skin radiant with an otherworldly glow.",
    highlights: [
      "24K Gold Micro-Infusion Mask",
      "Lymphatic drainage sculpting massage",
      "Cryo-cooling rose quartz roller finishing",
      "Custom botanical hydration serum",
    ],
    image: "/hero-image.png",
    recommendedFor: "Pre-event radiance, dullness, deep hydration",
  },
  {
    id: "srv-02",
    title: "The Sovereign Crown Hair Styling",
    category: "Beauty",
    duration: "120–180 mins",
    price: 95000,
    description:
      "Honoring textured hair with regal artistry. From sculptural Fulani braids to elegant avant-garde updos, our master braiders nourish your scalp with cold-pressed botanical oils while crafting runway-ready silhouettes.",
    highlights: [
      "Steam hydration treatment with raw shea & rosemary",
      "Precision parted protective styles & up-dos",
      "Champagne gold filament and cowrie adornments",
      "Scalp tension-relief acupressure massage",
    ],
    image: "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121507.523-840x1024.jpg",
    recommendedFor: "Red carpet occasions, protective elegance, weddings",
  },
  {
    id: "srv-03",
    title: "Rose Quartz Botanical Hydrotherapy Soak",
    category: "Spa",
    duration: "75 mins",
    price: 150000,
    description:
      "Immerse in a heated handcrafted marble soaking basin infused with Moroccan Damask rose petals, Dead Sea minerals, and sweet almond oil. Followed by a full-body warm shea butter wrap.",
    highlights: [
      "Custom botanical hydro-bath with fresh organic petals",
      "Exfoliating brown sugar and hibiscus body scrub",
      "Warm whipped nilotica shea butter cocoon wrap",
      "Chilled champagne and organic fruit pairing",
    ],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_african_nature.jpg",
    recommendedFor: "Total relaxation, muscle release, skin softening",
  },
  {
    id: "srv-04",
    title: "Couture Bespoke Atelier Fitting",
    category: "Atelier",
    duration: "60 mins",
    price: 120000,
    description:
      "A private one-on-one session with our Creative Director and master tailors. Experience tactile fabric consultations with imported French silks, authentic hand-woven Nigerian Aso-Oke, and custom contour draping.",
    highlights: [
      "Private VIP suite with complimentary champagne",
      "32-point custom anatomical body measurements",
      "Exclusive preview of private fabric archives",
      "Bespoke sketch rendering & muslin mock-up",
    ],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Finished_work.jpg",
    recommendedFor: "Gala gowns, custom bridal couture, bridal party styling",
  },
  {
    id: "srv-05",
    title: "Red Carpet Velvet Melanin Makeup",
    category: "Beauty",
    duration: "75 mins",
    price: 110000,
    description:
      "Celebrity-grade editorial makeup tailored specifically to warm, neutral, and cool melanin undertones. Waterproof, camera-ready finish with glass-skin highlighter and velvet sculpted ombré lips.",
    highlights: [
      "Skin prep with hyaluronic acid & illuminating primer",
      "Custom-blended foundation for flawless skin tone match",
      "Feathered brow lamination and bespoke mink lashes",
      "18-hour transfer-resistant setting veil",
    ],
    image: "/hero-image.png",
    recommendedFor: "Editorial photo shoots, galas, milestone celebrations",
  },
  {
    id: "srv-06",
    title: "Deep Tension Basalt Stone Massage",
    category: "Spa",
    duration: "90 mins",
    price: 165000,
    description:
      "Volcanic basalt stones heated to the ideal thermodynamic equilibrium, combined with cold-pressed baobab oil to melt away deep spinal muscle tension and restore full nervous system balance.",
    highlights: [
      "Hand-polished volcanic basalt stone application",
      "Baobab & frankincense warm aromatherapy oils",
      "Acupressure foot reflexology and scalp massage",
      "Herbal tea ceremony in our relaxation garden",
    ],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Ankara.jpg",
    recommendedFor: "Chronic tension, jet-lag recovery, deep tranquility",
  },
];
