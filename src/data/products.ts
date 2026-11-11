export interface ProductColor {
  name: string;
  hex: string;
  previewImage?: string;
}

export interface ProductVariantInventory {
  [colorName: string]: {
    [size: string]: number;
  };
}

export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: string;
  subtitle: string;
  description: string;
  category: "Dresses" | "Gowns" | "Casual Wear" | "Traditional Wear" | "Accessories" | "New Arrivals";
  regularPrice: number;
  salePrice?: number;
  images: {
    primary: string;
    front?: string;
    back?: string;
    side?: string;
    detail?: string;
  };
  sizes: string[];
  colors: ProductColor[];
  variantInventory: ProductVariantInventory;
  inStock: boolean;
  totalStock: number;
  isFeatured: boolean;
  isNewArrival: boolean;
  isBestSeller: boolean;
  isPublished: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];

  // Editorial specifications
  fabricAndMaterials: string[];
  sizeAndFit: {
    modelStats: string;
    fitType: string;
    length: string;
    recommendation: string;
  };
  careInstructions: string[];
  deliveryAndReturns: {
    delivery: string;
    returns: string;
    packaging: string;
  };
  relatedSlugs: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "ep-001",
    slug: "aurora-silk-magenta-gown",
    sku: "EP-GWN-0101",
    name: "The Aurora Magenta Silk Gown",
    subtitle: "Hand-draped mulberry silk gown with structured bodice & architectural cape",
    description:
      "A transcendent celebration of luxury and femininity. The Aurora Gown is meticulously tailored from heavyweight 100% mulberry silk in our signature imperial magenta. Featuring an architectural cascading shoulder cape, a boned corset bodice that accentuates natural grace, and an asymmetrical flowing hemline that moves with breathtaking majesty.",
    category: "Gowns",
    regularPrice: 1250,
    salePrice: 1080,
    images: {
      primary: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85",
      front: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85",
      back: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
      side: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=85",
      detail: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Signature Magenta", hex: "#A83263" },
      { name: "Blush Champagne", hex: "#E8A9BD" },
      { name: "Imperial Onyx", hex: "#241C20" },
    ],
    variantInventory: {
      "Signature Magenta": { XS: 4, S: 8, M: 6, L: 5, XL: 2 },
      "Blush Champagne": { XS: 3, S: 5, M: 4, L: 2, XL: 1 },
      "Imperial Onyx": { XS: 2, S: 4, M: 5, L: 3, XL: 0 },
    },
    inStock: true,
    totalStock: 49,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    isPublished: true,
    rating: 4.95,
    reviewCount: 38,
    tags: ["Red Carpet", "Couture", "Silk", "Evening Gown", "Signature Piece"],
    fabricAndMaterials: [
      "100% Pure Mulberry Silk Charmeuse (30 momme)",
      "Silk Habotai interior lining for zero skin friction",
      "Hand-sewn internal boning with flex-comfort casing",
      "Concealed YKK gold-teeth invisible back zipper",
    ],
    sizeAndFit: {
      modelStats: "Model is 5'10\" / 178cm wearing size Small (Bust 33\", Waist 25\", Hips 36\")",
      fitType: "Structured through bust and waist; fluid cascading skirt",
      length: "Floor-length with 15cm train; customizable upon request",
      recommendation: "Fits true to luxury sizing. If between sizes, we recommend sizing up for couture alterations.",
    },
    careInstructions: [
      "Specialist dry clean only by luxury silk preservation specialists",
      "Do not steam directly on gold hardware or trim",
      "Store hanging in provided Empress Palace breathable garment bag",
      "Keep away from direct sunlight and moisture",
    ],
    deliveryAndReturns: {
      delivery: "Complimentary signature white-glove express courier worldwide within 2–4 business days.",
      returns: "Complimentary boutique return or size exchange within 14 days of delivery in pristine unworn condition.",
      packaging: "Delivered in our signature gold-embossed Empress Palace hardbound keepsake box with satin ribbon.",
    },
    relatedSlugs: ["zaria-velvet-corset-dress", "royal-adire-couture-cape", "gold-filigree-statement-earrings"],
  },
  {
    id: "ep-002",
    slug: "zaria-velvet-corset-dress",
    sku: "EP-DRS-0204",
    name: "The Zaria Velvet Midi Dress",
    subtitle: "Plush blush velvet midi dress with sculptural sweetheart neckline",
    description:
      "Crafted from luminous silk-blend velvet in soft blush pink, the Zaria Dress embodies regal understated opulence. The sculpted sweetheart neckline is framed by delicate hand-piped champagne satin trim, with a contouring silhouette that gracefully transitions from daytime high-tea to evening gallery openings.",
    category: "Dresses",
    regularPrice: 780,
    images: {
      primary: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85",
      front: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85",
      back: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
      side: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      detail: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&w=1200&q=85",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Blush Pink", hex: "#E8A9BD" },
      { name: "Midnight Charcoal", hex: "#241C20" },
      { name: "Champagne Cream", hex: "#FFF8F0" },
    ],
    variantInventory: {
      "Blush Pink": { XS: 5, S: 7, M: 8, L: 4, XL: 2 },
      "Midnight Charcoal": { XS: 3, S: 4, M: 6, L: 3, XL: 1 },
      "Champagne Cream": { XS: 2, S: 3, M: 3, L: 1, XL: 0 },
    },
    inStock: true,
    totalStock: 47,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    isPublished: true,
    rating: 4.88,
    reviewCount: 24,
    tags: ["Midi Dress", "Velvet", "Sweetheart", "Cocktail", "Feminine"],
    fabricAndMaterials: [
      "82% Rayon, 18% Silk Luminous Micro-Velvet",
      "Stretch silk lining for ease of movement",
      "Reinforced sweetheart wire neckline",
      "Subtle side slit with champagne edge stitching",
    ],
    sizeAndFit: {
      modelStats: "Model is 5'9\" / 175cm wearing size XS",
      fitType: "Form-fitting through the waist and hips",
      length: "Midi length; falls approximately 10cm below the knee",
      recommendation: "Fabric contains gentle natural stretch. Choose your usual tailored size.",
    },
    careInstructions: [
      "Dry clean only",
      "Steam on reverse side only; never iron velvet pile",
      "Store hanging with padded shoulder supports",
    ],
    deliveryAndReturns: {
      delivery: "Express delivery within 2–3 business days.",
      returns: "14-day hassle-free returns with prepaid return courier.",
      packaging: "Signature luxury packaging with fragrant rose sachet.",
    },
    relatedSlugs: ["aurora-silk-magenta-gown", "queen-amina-pleated-gown", "monarch-pearl-choker"],
  },
  {
    id: "ep-003",
    slug: "royal-adire-couture-cape",
    sku: "EP-TRD-0302",
    name: "The Royal Adire Silk Couture Robe",
    subtitle: "Heritage Nigerian artisan-dyed silk cape with metallic champagne embroidery",
    description:
      "A masterpiece that bridges generational African textile heritage with Parisian haute couture craftsmanship. Hand-dyed by master Yorùbá artisans in Abeokuta using organic indigo and deep rose pigments, finished with shimmering champagne gold thread embroidery along the lapels and dramatic floor-sweeping sleeves.",
    category: "Traditional Wear",
    regularPrice: 1450,
    salePrice: 1290,
    images: {
      primary: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1200&q=85",
      front: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1200&q=85",
      back: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
      side: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85",
      detail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
    },
    sizes: ["S/M", "L/XL", "Custom Bespoke"],
    colors: [
      { name: "Imperial Indigo & Rose", hex: "#A83263" },
      { name: "Champagne Terracotta", hex: "#C6A15B" },
    ],
    variantInventory: {
      "Imperial Indigo & Rose": { "S/M": 4, "L/XL": 3, "Custom Bespoke": 10 },
      "Champagne Terracotta": { "S/M": 2, "L/XL": 2, "Custom Bespoke": 10 },
    },
    inStock: true,
    totalStock: 31,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
    isPublished: true,
    rating: 5.0,
    reviewCount: 19,
    tags: ["Heritage", "Artisan", "Adire", "Bespoke", "Haute Couture"],
    fabricAndMaterials: [
      "100% Hand-woven Organza and Pure Raw Silk",
      "Genuine handcrafted Adire resist-dying process (each piece is unique)",
      "Metallic German champagne gold bullion embroidery",
      "Detachable self-fabric sash belt with tasselled ends",
    ],
    sizeAndFit: {
      modelStats: "Model is 5'11\" / 180cm wearing size S/M",
      fitType: "Generous flowing editorial drape",
      length: "Floor-grazing silhouette (155cm from shoulder)",
      recommendation: "One size fits most within the dual size bracket. Custom bespoke available.",
    },
    careInstructions: [
      "Eco-friendly specialist dry cleaning only",
      "Do not wring, soak or bleach",
      "Store flat in protective acid-free tissue paper",
    ],
    deliveryAndReturns: {
      delivery: "Handcrafted to order; dispatched within 5–7 business days.",
      returns: "Bespoke items eligible for tailored adjustments; standard sizes returnable in 14 days.",
      packaging: "Presented in hand-stamped linen presentation trunk.",
    },
    relatedSlugs: ["aurora-silk-magenta-gown", "asoke-corset-peplum-set", "gold-filigree-statement-earrings"],
  },
  {
    id: "ep-004",
    slug: "queen-amina-pleated-gown",
    sku: "EP-GWN-0105",
    name: "The Queen Amina Pleated Gown",
    subtitle: "Liquid satin micro-pleated column gown with high gilded neck",
    description:
      "A tribute to northern Nigerian warrior majesty. The Queen Amina Gown features sunburst accordion micro-pleating in warm cream liquid satin, anchored by a regal high collar embroidered with genuine metallic champagne filaments. Fluid yet commanding, it flows into a statuesque column that captivates every room.",
    category: "Gowns",
    regularPrice: 1120,
    images: {
      primary: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=85",
      front: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=85",
      back: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85",
      side: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
      detail: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&w=1200&q=85",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Warm Cream", hex: "#FFF8F0" },
      { name: "Imperial Magenta", hex: "#A83263" },
      { name: "Champagne Gold", hex: "#C6A15B" },
    ],
    variantInventory: {
      "Warm Cream": { XS: 3, S: 6, M: 5, L: 4, XL: 1 },
      "Imperial Magenta": { XS: 4, S: 4, M: 5, L: 2, XL: 1 },
      "Champagne Gold": { XS: 2, S: 3, M: 2, L: 1, XL: 0 },
    },
    inStock: true,
    totalStock: 38,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    isPublished: true,
    rating: 4.92,
    reviewCount: 31,
    tags: ["Pleated", "Liquid Satin", "Gown", "High Neck", "Regal"],
    fabricAndMaterials: [
      "100% Japanese High-Twist Liquid Satin",
      "Permanent sunburst plissé memory pleating",
      "Hand-gilded brass collar hooks",
    ],
    sizeAndFit: {
      modelStats: "Model is 5'10\" wearing size Small",
      fitType: "Relaxed column with sculpted high neck",
      length: "Floor-length (152cm)",
      recommendation: "True to size. Flowing silhouette accommodates diverse body contours.",
    },
    careInstructions: [
      "Professional dry clean only; specify plissé pleat preservation",
      "Do not iron or steam directly on pleats",
    ],
    deliveryAndReturns: {
      delivery: "Complimentary express delivery in 2–4 business days.",
      returns: "14-day luxury return service.",
      packaging: "Custom Empress Palace luxury storage cylinder to safeguard pleating.",
    },
    relatedSlugs: ["aurora-silk-magenta-gown", "monarch-pearl-choker", "empress-sculpted-mules"],
  },
  {
    id: "ep-005",
    slug: "asoke-corset-peplum-set",
    sku: "EP-TRD-0306",
    name: "The Ile-Ife Aso-Oke Peplum Set",
    subtitle: "Two-piece modern structured corset and sculpted mermaid skirt",
    description:
      "Modernizing royal celebratory wear with sharp architectural tailoring. Hand-woven metallic Aso-Oke woven by generational weavers in Southwestern Nigeria, paired with modern sculpting panels, a sweetheart corset with gold hardware, and an elongated fluted mermaid skirt.",
    category: "Traditional Wear",
    regularPrice: 960,
    salePrice: 850,
    images: {
      primary: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
      front: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
      back: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1200&q=85",
      side: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
      detail: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Rose & Champagne Gold", hex: "#A83263" },
      { name: "Cream & Bronze Gold", hex: "#C6A15B" },
    ],
    variantInventory: {
      "Rose & Champagne Gold": { XS: 3, S: 5, M: 4, L: 3, XL: 2 },
      "Cream & Bronze Gold": { XS: 2, S: 4, M: 3, L: 1, XL: 1 },
    },
    inStock: true,
    totalStock: 28,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
    isPublished: true,
    rating: 4.87,
    reviewCount: 15,
    tags: ["Aso-Oke", "Two-Piece", "Corset", "Peplum", "Traditional"],
    fabricAndMaterials: [
      "Hand-loomed Cotton & Lurex Metallic Aso-Oke",
      "Organic silk lining",
      "Stainless steel internal corset boning",
    ],
    sizeAndFit: {
      modelStats: "Model is 5'8\" wearing size Small",
      fitType: "Structured cinch waist corset; body-skimming skirt",
      length: "Floor-length mermaid skirt with subtle train",
      recommendation: "Corset features an adjustable lace-up back for custom fit tension.",
    },
    careInstructions: ["Specialist dry clean only", "Do not machine wash or tumble dry"],
    deliveryAndReturns: {
      delivery: "Hand-finished within 4–6 business days.",
      returns: "Exchange or boutique credit within 14 days.",
      packaging: "Bespoke Empress Palace keepsake box.",
    },
    relatedSlugs: ["royal-adire-couture-cape", "gold-filigree-statement-earrings", "zaria-velvet-corset-dress"],
  },
  {
    id: "ep-006",
    slug: "palace-linen-resort-blazer-set",
    sku: "EP-CSL-0401",
    name: "The Palace Riviera Linen Suit",
    subtitle: "Tailored relaxed double-breasted linen blazer with wide-leg trousers",
    description:
      "Effortless elegance designed for sunlit afternoons and yacht retreats. Woven from breathable Normandy flax linen in warm cream, this two-piece suit features sharp peak lapels, tonal horn buttons, and fluid pleated wide-leg trousers with an adjustable cinch waistband.",
    category: "Casual Wear",
    regularPrice: 650,
    images: {
      primary: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
      front: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
      back: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
      side: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85",
      detail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Warm Cream", hex: "#FFF8F0" },
      { name: "Soft Blush", hex: "#E8A9BD" },
      { name: "Rich Charcoal", hex: "#241C20" },
    ],
    variantInventory: {
      "Warm Cream": { XS: 6, S: 9, M: 8, L: 5, XL: 3 },
      "Soft Blush": { XS: 4, S: 6, M: 5, L: 3, XL: 2 },
      "Rich Charcoal": { XS: 3, S: 5, M: 4, L: 2, XL: 1 },
    },
    inStock: true,
    totalStock: 66,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    isPublished: true,
    rating: 4.91,
    reviewCount: 42,
    tags: ["Resort", "Linen", "Tailoring", "Two-Piece", "Casual Luxury"],
    fabricAndMaterials: [
      "100% Certified French Normandy Pure Flax Linen",
      "Semi-lined in 100% breathable organic cotton voile",
      "Custom engraved champagne rim buttons",
    ],
    sizeAndFit: {
      modelStats: "Model is 5'10\" wearing size Small",
      fitType: "Tailored yet relaxed silhouette",
      length: "Blazer length 74cm; Trousers inseam 84cm",
      recommendation: "Take your normal size for an editorial relaxed silhouette.",
    },
    careInstructions: ["Gentle hand wash cold or dry clean", "Warm iron while slightly damp for crisp finish"],
    deliveryAndReturns: {
      delivery: "Standard 2–3 business days with carbon-neutral transit.",
      returns: "Full refund or exchange within 14 days.",
      packaging: "Eco-luxury recycled cotton tote and garment carrier.",
    },
    relatedSlugs: ["monarch-silk-slip-dress", "empress-sculpted-mules", "gold-filigree-statement-earrings"],
  },
  {
    id: "ep-007",
    slug: "monarch-silk-slip-dress",
    sku: "EP-DRS-0208",
    name: "The Monarch Bias-Cut Silk Slip",
    subtitle: "Heavyweight silk charmeuse slip with criss-cross champagne strap detailing",
    description:
      "The quintessential foundation of hybrid luxury. Cut on the bias to drape sensually over natural curves, the Monarch Slip features our ultra-luxurious 25-momme silk in deep rose pink. Finished with delicate criss-cross champagne gold back cords and a subtle side slit.",
    category: "Dresses",
    regularPrice: 490,
    images: {
      primary: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85",
      front: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85",
      back: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85",
      side: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85",
      detail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Deep Rose Pink", hex: "#A83263" },
      { name: "Soft Blush", hex: "#E8A9BD" },
      { name: "Warm Cream", hex: "#FFF8F0" },
      { name: "Midnight Charcoal", hex: "#241C20" },
    ],
    variantInventory: {
      "Deep Rose Pink": { XS: 4, S: 6, M: 7, L: 4, XL: 2 },
      "Soft Blush": { XS: 5, S: 8, M: 6, L: 3, XL: 1 },
      "Warm Cream": { XS: 3, S: 5, M: 5, L: 2, XL: 1 },
      "Midnight Charcoal": { XS: 2, S: 4, M: 4, L: 2, XL: 0 },
    },
    inStock: true,
    totalStock: 62,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
    isPublished: true,
    rating: 4.96,
    reviewCount: 53,
    tags: ["Slip Dress", "Silk Charmeuse", "Bias-Cut", "Versatile", "Evening"],
    fabricAndMaterials: [
      "100% Grade 6A Mulberry Silk Charmeuse",
      "Hand-rolled hem finishes",
      "Adjustable custom gold sliders on straps",
    ],
    sizeAndFit: {
      modelStats: "Model is 5'9\" wearing size Small",
      fitType: "Bias-cut; skims the contours without cling",
      length: "Ankle-skimming midi length",
      recommendation: "Bias cut expands gracefully; choose standard size.",
    },
    careInstructions: ["Hand wash in cold water with silk detergent or dry clean", "Iron on cool reverse side"],
    deliveryAndReturns: {
      delivery: "Standard 2–3 business days.",
      returns: "14-day luxury return guarantee.",
      packaging: "Wrapped in protective tissue in custom box.",
    },
    relatedSlugs: ["zaria-velvet-corset-dress", "palace-linen-resort-blazer-set", "gold-filigree-statement-earrings"],
  },
  {
    id: "ep-008",
    slug: "gold-filigree-statement-earrings",
    sku: "EP-ACC-0501",
    name: "The Imperial Sunburst Filigree Earrings",
    subtitle: "24k gold-plated brass drop earrings with freshwater baroque pearls",
    description:
      "Hand-forged by our master metalsmiths, these architectural statement earrings draw inspiration from ancient Benin bronzes and royal sun motifs. Featuring intricate openwork filigree in warm champagne gold, anchored by glowing lustrous freshwater baroque pearls that illuminate your visage.",
    category: "Accessories",
    regularPrice: 320,
    salePrice: 280,
    images: {
      primary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85",
      front: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85",
      back: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
      side: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=85",
      detail: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85",
    },
    sizes: ["One Size"],
    colors: [
      { name: "Champagne Gold & Pearl", hex: "#C6A15B" },
      { name: "Rose Gold Accent", hex: "#E8A9BD" },
    ],
    variantInventory: {
      "Champagne Gold & Pearl": { "One Size": 24 },
      "Rose Gold Accent": { "One Size": 16 },
    },
    inStock: true,
    totalStock: 40,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    isPublished: true,
    rating: 4.98,
    reviewCount: 67,
    tags: ["Jewelry", "24k Gold Plate", "Baroque Pearl", "Handmade", "Editorial"],
    fabricAndMaterials: [
      "Heavy 24k Gold Electroplated Recycled Jewelers Brass (3 microns)",
      "Genuine AAA graded natural freshwater baroque pearls (each pair unique)",
      "Titanium hypo-allergenic earring posts with comfort clutch backs",
    ],
    sizeAndFit: {
      modelStats: "Drop length: 7.5cm (3 inches); Weight: 14g per earring (featherweight comfort)",
      fitType: "Pierced drop earring with comfort backings",
      length: "Shoulder-brushing length",
      recommendation: "Engineered with balanced weight distribution for all-day comfort.",
    },
    careInstructions: [
      "Avoid direct contact with perfumes, hairspray, and lotions",
      "Wipe clean with the included velvet microfibre polishing cloth",
      "Store in the provided anti-tarnish suede travel pouch",
    ],
    deliveryAndReturns: {
      delivery: "Complimentary priority shipping; arrives in 1–3 business days.",
      returns: "Due to hygiene regulations, jewelry is final sale unless defective.",
      packaging: "Velvet presentation jewel box with gold-foil emblem.",
    },
    relatedSlugs: ["monarch-pearl-choker", "aurora-silk-magenta-gown", "queen-amina-pleated-gown"],
  },
  {
    id: "ep-009",
    slug: "monarch-pearl-choker",
    sku: "EP-ACC-0504",
    name: "The Empress Multi-Strand Pearl Choker",
    subtitle: "Triple-strand baroque pearls with an ornate champagne gold and garnet clasp",
    description:
      "A defining emblem of sovereign grace. Three hand-knotted strands of luminous cultured pearls converge into an artisanal champagne gold box clasp set with a brilliant cabochon garnet in rose magenta. Designed to frame the collarbone with unapologetic luxury.",
    category: "Accessories",
    regularPrice: 460,
    images: {
      primary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
      front: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
      back: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85",
      side: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=85",
      detail: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
    },
    sizes: ["Standard 38cm", "Extended 42cm"],
    colors: [
      { name: "Lustrous Cream & Gold", hex: "#C6A15B" },
    ],
    variantInventory: {
      "Lustrous Cream & Gold": { "Standard 38cm": 12, "Extended 42cm": 8 },
    },
    inStock: true,
    totalStock: 20,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
    isPublished: true,
    rating: 4.94,
    reviewCount: 18,
    tags: ["Choker", "Pearls", "Garnet", "Fine Jewelry", "Statement"],
    fabricAndMaterials: [
      "Natural freshwater cultured pearls (7-8mm hand-selected)",
      "Silk cord hand-knotting between each pearl",
      "18k gold vermeil filigree box clasp with safety latch",
      "Natural ethically-sourced cabochon rose garnet center stone",
    ],
    sizeAndFit: {
      modelStats: "Length: Standard 38cm + 4cm extender chain",
      fitType: "Sits comfortably at base of the neck",
      length: "Choker fit",
      recommendation: "Measure neck circumference to choose between Standard and Extended.",
    },
    careInstructions: ["Put on after makeup and fragrances", "Store flat in velvet case"],
    deliveryAndReturns: {
      delivery: "Express delivery in 2–3 business days.",
      returns: "Eligible for exchange within 14 days.",
      packaging: "Hardbound jewel chest with gold foil seal.",
    },
    relatedSlugs: ["gold-filigree-statement-earrings", "queen-amina-pleated-gown", "zaria-velvet-corset-dress"],
  },
  {
    id: "ep-010",
    slug: "empress-sculpted-mules",
    sku: "EP-ACC-0508",
    name: "The Sculpted Empress Satin Mules",
    subtitle: "Pointed-toe lustrous magenta satin mules with architectural 85mm gold flute heel",
    description:
      "Sculptural art in motion. Crafted in Italy from high-density lustrous duchess satin in imperial magenta, featuring an elongated pointed vamp, a memory-foam padded kidskin insole, and our custom champagne gold fluted architectural stiletto heel.",
    category: "Accessories",
    regularPrice: 580,
    salePrice: 510,
    images: {
      primary: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85",
      front: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85",
      back: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85",
      side: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85",
      detail: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85",
    },
    sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41"],
    colors: [
      { name: "Imperial Magenta", hex: "#A83263" },
      { name: "Blush Champagne", hex: "#E8A9BD" },
      { name: "Onyx Black", hex: "#241C20" },
    ],
    variantInventory: {
      "Imperial Magenta": { "EU 36": 2, "EU 37": 4, "EU 38": 5, "EU 39": 3, "EU 40": 2, "EU 41": 1 },
      "Blush Champagne": { "EU 36": 2, "EU 37": 3, "EU 38": 4, "EU 39": 3, "EU 40": 1, "EU 41": 0 },
      "Onyx Black": { "EU 36": 3, "EU 37": 4, "EU 38": 4, "EU 39": 2, "EU 40": 2, "EU 41": 1 },
    },
    inStock: true,
    totalStock: 42,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
    isPublished: true,
    rating: 4.9,
    reviewCount: 29,
    tags: ["Footwear", "Mules", "Architectural Heel", "Satin", "Evening"],
    fabricAndMaterials: [
      "100% Italian Duchess Silk-Satin Vamp",
      "Supple Italian calfskin insole with arch-cushioning memory foam",
      "Solid cast zinc alloy heel in champagne electroplated satin finish",
      "Hand-finished natural leather outer sole",
    ],
    sizeAndFit: {
      modelStats: "Heel height: 85mm (3.3 inches)",
      fitType: "Italian sizing; sleek tapered toe box",
      length: "Standard length",
      recommendation: "For wider feet or between sizes, we advise ordering a half to full size up.",
    },
    careInstructions: ["Treated with protective water-repellent mist; store in dual satin dustbags"],
    deliveryAndReturns: {
      delivery: "2–3 days with signature delivery.",
      returns: "14-day unworn returns (soles must be pristine; try on soft carpets).",
      packaging: "Lacquered Empress Palace shoebox with extra heel tips.",
    },
    relatedSlugs: ["aurora-silk-magenta-gown", "zaria-velvet-corset-dress", "palace-linen-resort-blazer-set"],
  },
];

export const CATEGORIES = [
  "All",
  "Dresses",
  "Gowns",
  "Casual Wear",
  "Traditional Wear",
  "Accessories",
  "New Arrivals",
] as const;

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isFeatured && p.isPublished);
}

export function getNewArrivals(): Product[] {
  return PRODUCTS.filter((p) => p.isNewArrival && p.isPublished);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return PRODUCTS.filter((p) => p.isPublished);
  if (category === "New Arrivals") return PRODUCTS.filter((p) => p.isNewArrival && p.isPublished);
  return PRODUCTS.filter((p) => p.category === category && p.isPublished);
}
