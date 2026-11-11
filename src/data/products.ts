// Centralized Fashion Catalogue Dataset
// Generated with exactly 40 verified Nigerian fashion reference entries.
// All entries are demonstration visual references (reference_only = true).

export interface ProductColor {
  name: string;
  hex: string;
  previewImage?: string;
}

export type FashionCategory =
  | "Ankara Dresses"
  | "Ankara Gowns"
  | "Two-Piece Sets"
  | "Luxury Dresses"
  | "Casual Dresses"
  | "African Heritage & Editorial";

export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: string;
  product_name: string;
  subtitle: string;
  description: string;
  product_description: string;
  category: FashionCategory;
  price: number;
  compare_at_price: number | null;
  regularPrice: number;
  salePrice?: number;
  product_image_link: string;
  source: string;
  reference_only: boolean;
  is_featured: boolean;
  is_new_arrival: boolean;
  is_best_seller: boolean;
  images: {
    primary: string;
    front?: string;
    back?: string;
    side?: string;
    detail?: string;
  };
  sizes: string[];
  colors: ProductColor[];
  inStock: boolean;
  totalStock: number;
  rating: number;
  reviewCount: number;
  tags: string[];
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

export const FASHION_CATEGORIES: FashionCategory[] = [
  "Ankara Dresses",
  "Ankara Gowns",
  "Two-Piece Sets",
  "Luxury Dresses",
  "Casual Dresses",
  "African Heritage & Editorial"
];

export const PRODUCTS: Product[] = [
  {
    "id": "REF-001",
    "slug": "the-amara-corset-silhouette",
    "sku": "EP-NG-001",
    "name": "The Amara Corset Silhouette",
    "product_name": "The Amara Corset Silhouette",
    "subtitle": "Ankara corset top",
    "description": "An off-shoulder Ankara-inspired corset silhouette with structured tailoring and vivid geometric patterning. Designed to accentuate natural poise when paired with high-waisted trousers or fluid occasion skirts, this striking separate moves effortlessly from chic daytime art exhibitions to lively evening gatherings across the city.",
    "product_description": "An off-shoulder Ankara-inspired corset silhouette with structured tailoring and vivid geometric patterning. Designed to accentuate natural poise when paired with high-waisted trousers or fluid occasion skirts, this striking separate moves effortlessly from chic daytime art exhibitions to lively evening gatherings across the city.",
    "category": "Two-Piece Sets",
    "price": 48000,
    "compare_at_price": 58000,
    "regularPrice": 58000,
    "salePrice": 48000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121507.523-840x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": true,
    "is_best_seller": true,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121507.523-840x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121507.523-840x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121507.523-840x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121507.523-840x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121507.523-840x1024.jpg"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Imperial Gold & Ochre",
        "hex": "#C6A15B"
      },
      {
        "name": "Midnight Charcoal",
        "hex": "#241C20"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Two-Piece Sets",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-turquoise-belle-peplum-set",
      "the-kemi-high-waist-ensemble",
      "the-eko-blue-co-ord-set"
    ]
  },
  {
    "id": "REF-002",
    "slug": "the-monochrome-muse-jumpsuit",
    "sku": "EP-NG-002",
    "name": "The Monochrome Muse Jumpsuit",
    "product_name": "The Monochrome Muse Jumpsuit",
    "subtitle": "Ankara jumpsuit",
    "description": "A contemporary black-and-white patterned jumpsuit with an elongated, clean profile and tailored proportions. Celebrating modern graphic contrast, this versatile design offers effortless sophistication for gallery openings, upscale networking receptions, and creative cocktail evenings where timeless monochrome makes a quiet yet unforgettable statement.",
    "product_description": "A contemporary black-and-white patterned jumpsuit with an elongated, clean profile and tailored proportions. Celebrating modern graphic contrast, this versatile design offers effortless sophistication for gallery openings, upscale networking receptions, and creative cocktail evenings where timeless monochrome makes a quiet yet unforgettable statement.",
    "category": "Luxury Dresses",
    "price": 88000,
    "compare_at_price": 110000,
    "regularPrice": 110000,
    "salePrice": 88000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121513.626-748x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121513.626-748x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121513.626-748x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121513.626-748x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121513.626-748x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121513.626-748x1024.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Monochrome Onyx",
        "hex": "#241C20"
      },
      {
        "name": "Ivory White",
        "hex": "#FFFFFF"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Luxury Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-kemi-patchwork-trench-coat",
      "the-imani-blue-lace-trim-gown",
      "the-sunday-grace-occasion-dress"
    ]
  },
  {
    "id": "REF-003",
    "slug": "the-zuri-royale-gown",
    "sku": "EP-NG-003",
    "name": "The Zuri Royale Gown",
    "product_name": "The Zuri Royale Gown",
    "subtitle": "Ankara corset gown",
    "description": "A regal occasion gown featuring a contrasting structured bodice gracefully paired with a bold African-print mermaid skirt. Expressing sculptural drama and feminine poise, this sweeping piece is an exquisite choice for luxury weddings, formal galas, and milestone ceremonies that call for unforgettable regal grandeur.",
    "product_description": "A regal occasion gown featuring a contrasting structured bodice gracefully paired with a bold African-print mermaid skirt. Expressing sculptural drama and feminine poise, this sweeping piece is an exquisite choice for luxury weddings, formal galas, and milestone ceremonies that call for unforgettable regal grandeur.",
    "category": "Ankara Gowns",
    "price": 78000,
    "compare_at_price": 92000,
    "regularPrice": 92000,
    "salePrice": 78000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121519.596-1024x1018.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": true,
    "is_best_seller": true,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121519.596-1024x1018.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121519.596-1024x1018.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121519.596-1024x1018.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121519.596-1024x1018.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121519.596-1024x1018.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Custom"
    ],
    "colors": [
      {
        "name": "Amber Sunburst",
        "hex": "#C6A15B"
      },
      {
        "name": "Rose Crimson",
        "hex": "#A83263"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Ankara Gowns",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-ruffle-empress-gown",
      "the-off-shoulder-occasion-gown",
      "the-cowrie-print-sovereign-gown"
    ]
  },
  {
    "id": "REF-004",
    "slug": "the-noir-bloom-playsuit",
    "sku": "EP-NG-004",
    "name": "The Noir Bloom Playsuit",
    "product_name": "The Noir Bloom Playsuit",
    "subtitle": "Ankara babydoll / playsuit",
    "description": "A breezy monochrome printed playsuit highlighted by an off-shoulder neckline and soft statement sleeves. Capturing playful sophistication with relaxed charm, this easy-wearing piece is tailored for sunny garden brunches, weekend resort stays, and casual rooftop celebrations under golden hour skies.",
    "product_description": "A breezy monochrome printed playsuit highlighted by an off-shoulder neckline and soft statement sleeves. Capturing playful sophistication with relaxed charm, this easy-wearing piece is tailored for sunny garden brunches, weekend resort stays, and casual rooftop celebrations under golden hour skies.",
    "category": "Casual Dresses",
    "price": 34000,
    "compare_at_price": 42000,
    "regularPrice": 42000,
    "salePrice": 34000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121524.751-857x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": true,
    "is_best_seller": false,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121524.751-857x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121524.751-857x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121524.751-857x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121524.751-857x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121524.751-857x1024.jpg"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Black & Cream Bloom",
        "hex": "#241C20"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Casual Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-golden-hour-mini-dress",
      "the-lagos-kimono-wrap",
      "the-eko-statement-tunic"
    ]
  },
  {
    "id": "REF-005",
    "slug": "the-ruffle-empress-gown",
    "sku": "EP-NG-005",
    "name": "The Ruffle Empress Gown",
    "product_name": "The Ruffle Empress Gown",
    "subtitle": "Ankara gown with ruffles and high slit",
    "description": "A form-fitting African-print evening gown rendered with cascading ruffle accents and an alluring high slit. Balancing stately elegance with contemporary flair, it commands the room at black-tie receptions, cultural balls, and celebratory banquets where expressive silhouettes take center stage.",
    "product_description": "A form-fitting African-print evening gown rendered with cascading ruffle accents and an alluring high slit. Balancing stately elegance with contemporary flair, it commands the room at black-tie receptions, cultural balls, and celebratory banquets where expressive silhouettes take center stage.",
    "category": "Ankara Gowns",
    "price": 85000,
    "compare_at_price": 95000,
    "regularPrice": 95000,
    "salePrice": 85000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121529.761-826x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121529.761-826x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121529.761-826x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121529.761-826x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121529.761-826x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121529.761-826x1024.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Magenta Royal",
        "hex": "#A83263"
      },
      {
        "name": "Gold Filigree",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Ankara Gowns",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-zuri-royale-gown",
      "the-off-shoulder-occasion-gown",
      "the-cowrie-print-sovereign-gown"
    ]
  },
  {
    "id": "REF-006",
    "slug": "the-adesewa-statement-dress",
    "sku": "EP-NG-006",
    "name": "The Adesewa Statement Dress",
    "product_name": "The Adesewa Statement Dress",
    "subtitle": "Ankara dress",
    "description": "A vibrant patterned Ankara midi dress finished with an expansive A-line skirt and sculpted puff sleeves. Exuding youthful confidence and cultural grace, this signature garment shines at family celebrations, traditional engagement festivities, and upscale afternoon garden parties.",
    "product_description": "A vibrant patterned Ankara midi dress finished with an expansive A-line skirt and sculpted puff sleeves. Exuding youthful confidence and cultural grace, this signature garment shines at family celebrations, traditional engagement festivities, and upscale afternoon garden parties.",
    "category": "Ankara Dresses",
    "price": 52000,
    "compare_at_price": 64000,
    "regularPrice": 64000,
    "salePrice": 52000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121535.320-838x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": true,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121535.320-838x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121535.320-838x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121535.320-838x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121535.320-838x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121535.320-838x1024.jpg"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Cobalt Azure",
        "hex": "#2B4C7E"
      },
      {
        "name": "Warm Gold",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Ankara Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-abeni-wrap-silhouette",
      "the-ankara-shift-dress",
      "the-mix-and-match-pencil-dress"
    ]
  },
  {
    "id": "REF-007",
    "slug": "the-abeni-wrap-silhouette",
    "sku": "EP-NG-007",
    "name": "The Abeni Wrap Silhouette",
    "product_name": "The Abeni Wrap Silhouette",
    "subtitle": "Ankara wrap gown",
    "description": "A timeless wrap dress cut from expressive Ankara print that contours the waist and drapes fluidly along the hemline. An essential staple of versatile luxury, it transitions flawlessly from high-stakes corporate lunches to intimate twilight dinners with friends.",
    "product_description": "A timeless wrap dress cut from expressive Ankara print that contours the waist and drapes fluidly along the hemline. An essential staple of versatile luxury, it transitions flawlessly from high-stakes corporate lunches to intimate twilight dinners with friends.",
    "category": "Ankara Dresses",
    "price": 46000,
    "compare_at_price": null,
    "regularPrice": 46000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121541.231-698x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": true,
    "is_best_seller": false,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121541.231-698x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121541.231-698x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121541.231-698x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121541.231-698x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121541.231-698x1024.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Sunset Orange & Navy",
        "hex": "#A83263"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Ankara Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-adesewa-statement-dress",
      "the-ankara-shift-dress",
      "the-mix-and-match-pencil-dress"
    ]
  },
  {
    "id": "REF-008",
    "slug": "the-turquoise-belle-peplum-set",
    "sku": "EP-NG-008",
    "name": "The Turquoise Belle Peplum Set",
    "product_name": "The Turquoise Belle Peplum Set",
    "subtitle": "Ankara fitted set",
    "description": "A jewel-toned two-piece set combining a flared peplum bodice with a sharp pencil skirt in intricate African motifs. Flattering and deeply dignified, this tailored co-ord is ideal for executive conferences, church services, and high-society celebratory luncheons.",
    "product_description": "A jewel-toned two-piece set combining a flared peplum bodice with a sharp pencil skirt in intricate African motifs. Flattering and deeply dignified, this tailored co-ord is ideal for executive conferences, church services, and high-society celebratory luncheons.",
    "category": "Two-Piece Sets",
    "price": 62000,
    "compare_at_price": 74000,
    "regularPrice": 74000,
    "salePrice": 62000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121546.834-838x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": true,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121546.834-838x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121546.834-838x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121546.834-838x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121546.834-838x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121546.834-838x1024.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Turquoise Jewel",
        "hex": "#2E8B9A"
      },
      {
        "name": "Champagne Gold",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Two-Piece Sets",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-amara-corset-silhouette",
      "the-kemi-high-waist-ensemble",
      "the-eko-blue-co-ord-set"
    ]
  },
  {
    "id": "REF-009",
    "slug": "the-golden-hour-mini-dress",
    "sku": "EP-NG-009",
    "name": "The Golden Hour Mini Dress",
    "product_name": "The Golden Hour Mini Dress",
    "subtitle": "Puff-sleeve off-shoulder mini dress",
    "description": "A sun-drenched Ankara mini dress showcasing clean geometric lines and vibrant warm tones. Designed for joyful effortless styling, it pairs naturally with strappy sandals or sculptural heels for afternoon festivals, poolside birthdays, and tropical vacations.",
    "product_description": "A sun-drenched Ankara mini dress showcasing clean geometric lines and vibrant warm tones. Designed for joyful effortless styling, it pairs naturally with strappy sandals or sculptural heels for afternoon festivals, poolside birthdays, and tropical vacations.",
    "category": "Casual Dresses",
    "price": 36000,
    "compare_at_price": 44000,
    "regularPrice": 44000,
    "salePrice": 36000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121551.798-941x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": true,
    "is_best_seller": false,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121551.798-941x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121551.798-941x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121551.798-941x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121551.798-941x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121551.798-941x1024.jpg"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Sunburst Ochre",
        "hex": "#C6A15B"
      },
      {
        "name": "Blush Pink",
        "hex": "#E8A9BD"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Casual Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-noir-bloom-playsuit",
      "the-lagos-kimono-wrap",
      "the-eko-statement-tunic"
    ]
  },
  {
    "id": "REF-010",
    "slug": "the-lagos-kimono-wrap",
    "sku": "EP-NG-010",
    "name": "The Lagos Kimono Wrap",
    "product_name": "The Lagos Kimono Wrap",
    "subtitle": "Ankara kimono set",
    "description": "A fluid kimono-inspired dress celebrating voluminous sleeves and an adjustable fabric sash. Infusing relaxed resort glamour into contemporary African styling, this versatile silhouette is well suited for breezy weekend retreats, intimate salon visits, and cosmopolitan café dates.",
    "product_description": "A fluid kimono-inspired dress celebrating voluminous sleeves and an adjustable fabric sash. Infusing relaxed resort glamour into contemporary African styling, this versatile silhouette is well suited for breezy weekend retreats, intimate salon visits, and cosmopolitan café dates.",
    "category": "Casual Dresses",
    "price": 42000,
    "compare_at_price": null,
    "regularPrice": 42000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121556.794-1024x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121556.794-1024x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121556.794-1024x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121556.794-1024x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121556.794-1024x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121556.794-1024x1024.jpg"
    },
    "sizes": [
      "S/M",
      "L/XL"
    ],
    "colors": [
      {
        "name": "Indigo Mosaic",
        "hex": "#241C20"
      },
      {
        "name": "Rose Silk",
        "hex": "#A83263"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Casual Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-noir-bloom-playsuit",
      "the-golden-hour-mini-dress",
      "the-eko-statement-tunic"
    ]
  },
  {
    "id": "REF-011",
    "slug": "the-kemi-high-waist-ensemble",
    "sku": "EP-NG-011",
    "name": "The Kemi High-Waist Ensemble",
    "product_name": "The Kemi High-Waist Ensemble",
    "subtitle": "Ankara skirt",
    "description": "A dynamic separates combination centering a high-waisted flared Ankara skirt with coordinating structured top detailing. Perfect for women who appreciate playful mix-and-match versatility, this look brings radiant poise to cultural showcases, gallery exhibitions, and summer celebrations.",
    "product_description": "A dynamic separates combination centering a high-waisted flared Ankara skirt with coordinating structured top detailing. Perfect for women who appreciate playful mix-and-match versatility, this look brings radiant poise to cultural showcases, gallery exhibitions, and summer celebrations.",
    "category": "Two-Piece Sets",
    "price": 49000,
    "compare_at_price": 58000,
    "regularPrice": 58000,
    "salePrice": 49000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121601.655-932x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121601.655-932x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121601.655-932x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121601.655-932x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121601.655-932x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121601.655-932x1024.jpg"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "African Earth & Clay",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Two-Piece Sets",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-amara-corset-silhouette",
      "the-turquoise-belle-peplum-set",
      "the-eko-blue-co-ord-set"
    ]
  },
  {
    "id": "REF-012",
    "slug": "the-kemi-patchwork-trench-coat",
    "sku": "EP-NG-012",
    "name": "The Kemi Patchwork Trench Coat",
    "product_name": "The Kemi Patchwork Trench Coat",
    "subtitle": "Mixed-pattern coat dress",
    "description": "An avant-garde outerwear statement combining tonal Ankara patchwork blocks into a striking tailored coat silhouette. A wearable art piece that commands attention, it layers effortlessly over monochrome slips for high-fashion runway shows, red-carpet events, and premier international fashion gatherings.",
    "product_description": "An avant-garde outerwear statement combining tonal Ankara patchwork blocks into a striking tailored coat silhouette. A wearable art piece that commands attention, it layers effortlessly over monochrome slips for high-fashion runway shows, red-carpet events, and premier international fashion gatherings.",
    "category": "Luxury Dresses",
    "price": 98000,
    "compare_at_price": 125000,
    "regularPrice": 125000,
    "salePrice": 98000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121606.803-853x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": true,
    "is_best_seller": false,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121606.803-853x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121606.803-853x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121606.803-853x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121606.803-853x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121606.803-853x1024.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Heritage Patchwork",
        "hex": "#A83263"
      },
      {
        "name": "Gilded Obsidian",
        "hex": "#241C20"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Luxury Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-monochrome-muse-jumpsuit",
      "the-imani-blue-lace-trim-gown",
      "the-sunday-grace-occasion-dress"
    ]
  },
  {
    "id": "REF-013",
    "slug": "the-imani-blue-lace-trim-gown",
    "sku": "EP-NG-013",
    "name": "The Imani Blue Lace-Trim Gown",
    "product_name": "The Imani Blue Lace-Trim Gown",
    "subtitle": "Ankara dress",
    "description": "A sumptuous sapphire Ankara creation adorned with delicate French lace inserts along the neckline and hem. Radiating regal nobility and refined texture, this luxury dress is tailored specifically for high-profile banquet evenings, wedding guest opulence, and dignitary receptions.",
    "product_description": "A sumptuous sapphire Ankara creation adorned with delicate French lace inserts along the neckline and hem. Radiating regal nobility and refined texture, this luxury dress is tailored specifically for high-profile banquet evenings, wedding guest opulence, and dignitary receptions.",
    "category": "Luxury Dresses",
    "price": 115000,
    "compare_at_price": 140000,
    "regularPrice": 140000,
    "salePrice": 115000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121612.013-840x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121612.013-840x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121612.013-840x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121612.013-840x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121612.013-840x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121612.013-840x1024.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Royal Sapphire",
        "hex": "#1D3557"
      },
      {
        "name": "Champagne Trim",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Luxury Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-monochrome-muse-jumpsuit",
      "the-kemi-patchwork-trench-coat",
      "the-sunday-grace-occasion-dress"
    ]
  },
  {
    "id": "REF-014",
    "slug": "the-eko-blue-co-ord-set",
    "sku": "EP-NG-014",
    "name": "The Eko Blue Co-ord Set",
    "product_name": "The Eko Blue Co-ord Set",
    "subtitle": "Ankara kimono / trouser set",
    "description": "A tailored two-piece set featuring a crisp cropped jacket and matching high-waisted shorts in rich indigo Ankara wax prints. Designed for bold modern tastemakers, this co-ord delivers polished panache at fashion week lounges, curated pop-ups, and rooftop soirées.",
    "product_description": "A tailored two-piece set featuring a crisp cropped jacket and matching high-waisted shorts in rich indigo Ankara wax prints. Designed for bold modern tastemakers, this co-ord delivers polished panache at fashion week lounges, curated pop-ups, and rooftop soirées.",
    "category": "Two-Piece Sets",
    "price": 58000,
    "compare_at_price": 68000,
    "regularPrice": 68000,
    "salePrice": 58000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121617.021-1012x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": true,
    "is_best_seller": false,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121617.021-1012x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121617.021-1012x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121617.021-1012x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121617.021-1012x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121617.021-1012x1024.jpg"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Deep Eko Azure",
        "hex": "#241C20"
      },
      {
        "name": "Sky Gold",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Two-Piece Sets",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-amara-corset-silhouette",
      "the-turquoise-belle-peplum-set",
      "the-kemi-high-waist-ensemble"
    ]
  },
  {
    "id": "REF-015",
    "slug": "the-eko-statement-tunic",
    "sku": "EP-NG-015",
    "name": "The Eko Statement Tunic",
    "product_name": "The Eko Statement Tunic",
    "subtitle": "Mixed-pattern shirt",
    "description": "An easy-fitting oversized tunic shirt boasting graphic African prints with a crisp collar and elongated cuffs. Balancing street-smart modernity with artisanal pride, it works effortlessly worn as a mini dress or styled over trousers for creative workdays and weekend escapes.",
    "product_description": "An easy-fitting oversized tunic shirt boasting graphic African prints with a crisp collar and elongated cuffs. Balancing street-smart modernity with artisanal pride, it works effortlessly worn as a mini dress or styled over trousers for creative workdays and weekend escapes.",
    "category": "Casual Dresses",
    "price": 38000,
    "compare_at_price": null,
    "regularPrice": 38000,
    "product_image_link": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121622.162-960x1024.jpg",
    "source": "Zikoko, “15 Ankara Styles For Nigerian Ladies” (image reference; original photo credits are identified in the article where provided). https://www.zikoko.com/her/ankara-styles-for-nigerian-ladies-in-2025/",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121622.162-960x1024.jpg",
      "front": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121622.162-960x1024.jpg",
      "back": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121622.162-960x1024.jpg",
      "side": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121622.162-960x1024.jpg",
      "detail": "https://c7684bdb45.mjedge.net/wp-content/uploads/zikoko/2024/09/unnamed-2024-09-02T121622.162-960x1024.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Geometric Sun",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Casual Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-noir-bloom-playsuit",
      "the-golden-hour-mini-dress",
      "the-lagos-kimono-wrap"
    ]
  },
  {
    "id": "REF-016",
    "slug": "the-chiffon-blossom-trio",
    "sku": "EP-NG-016",
    "name": "The Chiffon Blossom Trio",
    "product_name": "The Chiffon Blossom Trio",
    "subtitle": "Ankara and chiffon combination styles",
    "description": "A collaborative bridal party study featuring airy chiffon sleeves fused with ornate Ankara prints. Documented as an editorial reference for synchronized bridesmaid couture, this design provides timeless inspiration for traditional wedding festivities and royal family bridal courts.",
    "product_description": "A collaborative bridal party study featuring airy chiffon sleeves fused with ornate Ankara prints. Documented as an editorial reference for synchronized bridesmaid couture, this design provides timeless inspiration for traditional wedding festivities and royal family bridal courts.",
    "category": "African Heritage & Editorial",
    "price": 72000,
    "compare_at_price": null,
    "regularPrice": 72000,
    "product_image_link": "https://naijaglamwedding.com/wp-content/uploads/2014/10/chiffon-n-ankara-mix-dresses-statement-sleeves.jpg",
    "source": "NaijaGlamWedding, “100 Latest Ankara Styles for Women”. https://naijaglamwedding.com/latest-ankara-styles-designs/",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://naijaglamwedding.com/wp-content/uploads/2014/10/chiffon-n-ankara-mix-dresses-statement-sleeves.jpg",
      "front": "https://naijaglamwedding.com/wp-content/uploads/2014/10/chiffon-n-ankara-mix-dresses-statement-sleeves.jpg",
      "back": "https://naijaglamwedding.com/wp-content/uploads/2014/10/chiffon-n-ankara-mix-dresses-statement-sleeves.jpg",
      "side": "https://naijaglamwedding.com/wp-content/uploads/2014/10/chiffon-n-ankara-mix-dresses-statement-sleeves.jpg",
      "detail": "https://naijaglamwedding.com/wp-content/uploads/2014/10/chiffon-n-ankara-mix-dresses-statement-sleeves.jpg"
    },
    "sizes": [
      "Made-to-Order Reference"
    ],
    "colors": [
      {
        "name": "Blush Garden",
        "hex": "#E8A9BD"
      },
      {
        "name": "Imperial Magenta",
        "hex": "#A83263"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-ankara-maxi-movement",
      "the-heritage-family-collection",
      "the-ankara-fabric-archive"
    ]
  },
  {
    "id": "REF-017",
    "slug": "the-ankara-shift-dress",
    "sku": "EP-NG-017",
    "name": "The Ankara Shift Dress",
    "product_name": "The Ankara Shift Dress",
    "subtitle": "Ankara shift dress styles",
    "description": "A clean-lined shift dress displaying kaleidoscopic wax patterns that drape straight from the shoulder to just above the knee. A flattering and unfussy design that pairs seamlessly with minimalist jewelry for church services, business luncheons, and celebratory weekend gatherings.",
    "product_description": "A clean-lined shift dress displaying kaleidoscopic wax patterns that drape straight from the shoulder to just above the knee. A flattering and unfussy design that pairs seamlessly with minimalist jewelry for church services, business luncheons, and celebratory weekend gatherings.",
    "category": "Ankara Dresses",
    "price": 44000,
    "compare_at_price": 52000,
    "regularPrice": 52000,
    "salePrice": 44000,
    "product_image_link": "https://naijaglamwedding.com/wp-content/uploads/2014/10/ankara-shift-dress-gowns-styles.jpg",
    "source": "NaijaGlamWedding, “100 Latest Ankara Styles for Women”. https://naijaglamwedding.com/latest-ankara-styles-designs/",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": true,
    "is_best_seller": false,
    "images": {
      "primary": "https://naijaglamwedding.com/wp-content/uploads/2014/10/ankara-shift-dress-gowns-styles.jpg",
      "front": "https://naijaglamwedding.com/wp-content/uploads/2014/10/ankara-shift-dress-gowns-styles.jpg",
      "back": "https://naijaglamwedding.com/wp-content/uploads/2014/10/ankara-shift-dress-gowns-styles.jpg",
      "side": "https://naijaglamwedding.com/wp-content/uploads/2014/10/ankara-shift-dress-gowns-styles.jpg",
      "detail": "https://naijaglamwedding.com/wp-content/uploads/2014/10/ankara-shift-dress-gowns-styles.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Jewel Kaleidoscope",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Ankara Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-adesewa-statement-dress",
      "the-abeni-wrap-silhouette",
      "the-mix-and-match-pencil-dress"
    ]
  },
  {
    "id": "REF-018",
    "slug": "the-off-shoulder-occasion-gown",
    "sku": "EP-NG-018",
    "name": "The Off-Shoulder Occasion Gown",
    "product_name": "The Off-Shoulder Occasion Gown",
    "subtitle": "Off-shoulder Ankara gown styles",
    "description": "A sweeping off-shoulder evening gown highlighted by a sculpted sweetheart décolletage and an architectural trumpet hem. Tailored to turn heads with stately charisma, this piece is an extraordinary companion for state dinners, premiere awards nights, and grand anniversary galas.",
    "product_description": "A sweeping off-shoulder evening gown highlighted by a sculpted sweetheart décolletage and an architectural trumpet hem. Tailored to turn heads with stately charisma, this piece is an extraordinary companion for state dinners, premiere awards nights, and grand anniversary galas.",
    "category": "Ankara Gowns",
    "price": 89000,
    "compare_at_price": 105000,
    "regularPrice": 105000,
    "salePrice": 89000,
    "product_image_link": "https://naijaglamwedding.com/wp-content/uploads/2014/10/ankara-off-shoulder-gown-styles-1.jpg",
    "source": "NaijaGlamWedding, “100 Latest Ankara Styles for Women”. https://naijaglamwedding.com/latest-ankara-styles-designs/",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://naijaglamwedding.com/wp-content/uploads/2014/10/ankara-off-shoulder-gown-styles-1.jpg",
      "front": "https://naijaglamwedding.com/wp-content/uploads/2014/10/ankara-off-shoulder-gown-styles-1.jpg",
      "back": "https://naijaglamwedding.com/wp-content/uploads/2014/10/ankara-off-shoulder-gown-styles-1.jpg",
      "side": "https://naijaglamwedding.com/wp-content/uploads/2014/10/ankara-off-shoulder-gown-styles-1.jpg",
      "detail": "https://naijaglamwedding.com/wp-content/uploads/2014/10/ankara-off-shoulder-gown-styles-1.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Burgundy Gold",
        "hex": "#A83263"
      },
      {
        "name": "Onyx Black",
        "hex": "#241C20"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Ankara Gowns",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-zuri-royale-gown",
      "the-ruffle-empress-gown",
      "the-cowrie-print-sovereign-gown"
    ]
  },
  {
    "id": "REF-019",
    "slug": "the-mix-and-match-pencil-dress",
    "sku": "EP-NG-019",
    "name": "The Mix & Match Pencil Dress",
    "product_name": "The Mix & Match Pencil Dress",
    "subtitle": "Mix-and-match fitted Ankara dresses",
    "description": "A tailored pencil dress featuring contrasting side panels that sculpt the waist and lengthen the frame. Merging corporate polish with rich African textile dynamism, it is an empowering ensemble for executive boardrooms, corporate presentations, and after-work cocktail receptions.",
    "product_description": "A tailored pencil dress featuring contrasting side panels that sculpt the waist and lengthen the frame. Merging corporate polish with rich African textile dynamism, it is an empowering ensemble for executive boardrooms, corporate presentations, and after-work cocktail receptions.",
    "category": "Ankara Dresses",
    "price": 54000,
    "compare_at_price": 65000,
    "regularPrice": 65000,
    "salePrice": 54000,
    "product_image_link": "https://naijaglamwedding.com/wp-content/uploads/2014/10/mix-and-match-ankara-fitted-dresses-1.jpg",
    "source": "NaijaGlamWedding, “100 Latest Ankara Styles for Women”. https://naijaglamwedding.com/latest-ankara-styles-designs/",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://naijaglamwedding.com/wp-content/uploads/2014/10/mix-and-match-ankara-fitted-dresses-1.jpg",
      "front": "https://naijaglamwedding.com/wp-content/uploads/2014/10/mix-and-match-ankara-fitted-dresses-1.jpg",
      "back": "https://naijaglamwedding.com/wp-content/uploads/2014/10/mix-and-match-ankara-fitted-dresses-1.jpg",
      "side": "https://naijaglamwedding.com/wp-content/uploads/2014/10/mix-and-match-ankara-fitted-dresses-1.jpg",
      "detail": "https://naijaglamwedding.com/wp-content/uploads/2014/10/mix-and-match-ankara-fitted-dresses-1.jpg"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Indigo & Amber",
        "hex": "#1D3557"
      },
      {
        "name": "Champagne",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Ankara Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-adesewa-statement-dress",
      "the-abeni-wrap-silhouette",
      "the-ankara-shift-dress"
    ]
  },
  {
    "id": "REF-020",
    "slug": "the-ankara-maxi-movement",
    "sku": "EP-NG-020",
    "name": "The Ankara Maxi Movement",
    "product_name": "The Ankara Maxi Movement",
    "subtitle": "Ankara maxi skirts and dress styles",
    "description": "A sweeping tiered maxi skirt study documented for its kinetic volume and expressive swirl of African motifs. Celebrated in fashion editorial spreads for dramatic movement, it serves as rich inspiration for destination resort wear and stately outdoor cultural festivals.",
    "product_description": "A sweeping tiered maxi skirt study documented for its kinetic volume and expressive swirl of African motifs. Celebrated in fashion editorial spreads for dramatic movement, it serves as rich inspiration for destination resort wear and stately outdoor cultural festivals.",
    "category": "African Heritage & Editorial",
    "price": 68000,
    "compare_at_price": null,
    "regularPrice": 68000,
    "product_image_link": "https://naijaglamwedding.com/wp-content/uploads/2014/10/maxi-skirt-ankara-styles.jpg",
    "source": "NaijaGlamWedding, “100 Latest Ankara Styles for Women”. https://naijaglamwedding.com/latest-ankara-styles-designs/",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://naijaglamwedding.com/wp-content/uploads/2014/10/maxi-skirt-ankara-styles.jpg",
      "front": "https://naijaglamwedding.com/wp-content/uploads/2014/10/maxi-skirt-ankara-styles.jpg",
      "back": "https://naijaglamwedding.com/wp-content/uploads/2014/10/maxi-skirt-ankara-styles.jpg",
      "side": "https://naijaglamwedding.com/wp-content/uploads/2014/10/maxi-skirt-ankara-styles.jpg",
      "detail": "https://naijaglamwedding.com/wp-content/uploads/2014/10/maxi-skirt-ankara-styles.jpg"
    },
    "sizes": [
      "One Size Reference"
    ],
    "colors": [
      {
        "name": "Sunset Gold",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-heritage-family-collection",
      "the-ankara-fabric-archive"
    ]
  },
  {
    "id": "REF-022",
    "slug": "the-heritage-family-collection",
    "sku": "EP-NG-022",
    "name": "The Heritage Family Collection",
    "product_name": "The Heritage Family Collection",
    "subtitle": "Family & Heritage",
    "description": "An authentic multigenerational family portrait showcasing cohesive Nigerian Ankara styling across varying ages. This visual reference illustrates the deeply communal beauty of African occasion dressing, perfect for celebratory naming ceremonies, milestone jubilees, and sacred holiday gatherings.",
    "product_description": "An authentic multigenerational family portrait showcasing cohesive Nigerian Ankara styling across varying ages. This visual reference illustrates the deeply communal beauty of African occasion dressing, perfect for celebratory naming ceremonies, milestone jubilees, and sacred holiday gatherings.",
    "category": "African Heritage & Editorial",
    "price": 95000,
    "compare_at_price": null,
    "regularPrice": 95000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_family_in_Ankara_clothing.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_family_in_Ankara_clothing.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_family_in_Ankara_clothing.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_family_in_Ankara_clothing.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_family_in_Ankara_clothing.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_family_in_Ankara_clothing.jpg"
    },
    "sizes": [
      "Curated Family Archive"
    ],
    "colors": [
      {
        "name": "Family Loom Coral",
        "hex": "#A83263"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-ankara-maxi-movement",
      "the-ankara-fabric-archive"
    ]
  },
  {
    "id": "REF-023",
    "slug": "the-heritage-print-midi",
    "sku": "EP-NG-023",
    "name": "The Heritage Print Midi",
    "product_name": "The Heritage Print Midi",
    "subtitle": "Ankara Dresses",
    "description": "A tailored midi dress showcasing traditional wax motifs with fitted waist darts and elegant three-quarter sleeves. Uniting everyday comfort with timeless cultural refinement, it is well suited for Sunday family gatherings, christenings, and festive afternoon engagements.",
    "product_description": "A tailored midi dress showcasing traditional wax motifs with fitted waist darts and elegant three-quarter sleeves. Uniting everyday comfort with timeless cultural refinement, it is well suited for Sunday family gatherings, christenings, and festive afternoon engagements.",
    "category": "Ankara Dresses",
    "price": 49000,
    "compare_at_price": 59000,
    "regularPrice": 59000,
    "salePrice": 49000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_lady_in_Ankara_clothing.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": true,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_lady_in_Ankara_clothing.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_lady_in_Ankara_clothing.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_lady_in_Ankara_clothing.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_lady_in_Ankara_clothing.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_lady_in_Ankara_clothing.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Forest Emerald & Gold",
        "hex": "#2A6F4E"
      },
      {
        "name": "Warm Ochre",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Ankara Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-adesewa-statement-dress",
      "the-abeni-wrap-silhouette",
      "the-ankara-shift-dress"
    ]
  },
  {
    "id": "REF-024",
    "slug": "the-heritage-print-flounce-dress",
    "sku": "EP-NG-024",
    "name": "The Heritage Print Flounce Dress",
    "product_name": "The Heritage Print Flounce Dress",
    "subtitle": "Ankara Dresses",
    "description": "An asymmetrical flounce hem dress designed in heritage Ankara tones that celebrate natural feminine movement. A radiant and welcoming look, this creation effortlessly brightens cultural symposiums, upscale brunch celebrations, traditional naming festivities, and celebratory family reunions throughout the sunny weekend.",
    "product_description": "An asymmetrical flounce hem dress designed in heritage Ankara tones that celebrate natural feminine movement. A radiant and welcoming look, this creation effortlessly brightens cultural symposiums, upscale brunch celebrations, traditional naming festivities, and celebratory family reunions throughout the sunny weekend.",
    "category": "Ankara Dresses",
    "price": 51000,
    "compare_at_price": 62000,
    "regularPrice": 62000,
    "salePrice": 51000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_lady_in_Ankara_clothing2.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_lady_in_Ankara_clothing2.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_lady_in_Ankara_clothing2.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_lady_in_Ankara_clothing2.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_lady_in_Ankara_clothing2.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/A_Nigerian_lady_in_Ankara_clothing2.jpg"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Terra Cotta & Blue",
        "hex": "#A83263"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Ankara Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-adesewa-statement-dress",
      "the-abeni-wrap-silhouette",
      "the-ankara-shift-dress"
    ]
  },
  {
    "id": "REF-025",
    "slug": "the-ankara-fabric-archive",
    "sku": "EP-NG-025",
    "name": "The Ankara Fabric Archive",
    "product_name": "The Ankara Fabric Archive",
    "subtitle": "Fabric & Editorial",
    "description": "A close-up documentary study of raw unsewn African wax cotton, honoring the density of weave and brilliant saturation of wax printing. A vital reference for bespoke atelier clients exploring customized patterns for private couture commissions and ceremonial bridal attire.",
    "product_description": "A close-up documentary study of raw unsewn African wax cotton, honoring the density of weave and brilliant saturation of wax printing. A vital reference for bespoke atelier clients exploring customized patterns for private couture commissions and ceremonial bridal attire.",
    "category": "African Heritage & Editorial",
    "price": 65000,
    "compare_at_price": null,
    "regularPrice": 65000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Ankara.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Ankara.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Ankara.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Ankara.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Ankara.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Ankara.jpg"
    },
    "sizes": [
      "Bespoke Yardage Reference"
    ],
    "colors": [
      {
        "name": "Raw Loom Ochre",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-ankara-maxi-movement",
      "the-heritage-family-collection"
    ]
  },
  {
    "id": "REF-026",
    "slug": "the-ankara-signature-silhouette",
    "sku": "EP-NG-026",
    "name": "The Ankara Signature Silhouette",
    "product_name": "The Ankara Signature Silhouette",
    "subtitle": "Ankara Dresses",
    "description": "A sculpted fit-and-flare dress displaying high-contrast geometric African wax print with neat boat-neckline tailoring and a defined waist. Designed to exude self-assured grace, it offers an impeccable statement for graduation celebrations, literary book launches, corporate anniversary banquets, and elegant afternoon tea gatherings.",
    "product_description": "A sculpted fit-and-flare dress displaying high-contrast geometric African wax print with neat boat-neckline tailoring and a defined waist. Designed to exude self-assured grace, it offers an impeccable statement for graduation celebrations, literary book launches, corporate anniversary banquets, and elegant afternoon tea gatherings.",
    "category": "Ankara Dresses",
    "price": 56000,
    "compare_at_price": 68000,
    "regularPrice": 68000,
    "salePrice": 56000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_dress.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": true,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_dress.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_dress.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_dress.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_dress.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_dress.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Imperial Rose & Black",
        "hex": "#A83263"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Ankara Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-adesewa-statement-dress",
      "the-abeni-wrap-silhouette",
      "the-ankara-shift-dress"
    ]
  },
  {
    "id": "REF-027",
    "slug": "the-monostrap-ankara-dress",
    "sku": "EP-NG-027",
    "name": "The Monostrap Ankara Dress",
    "product_name": "The Monostrap Ankara Dress",
    "subtitle": "Ankara Dresses",
    "description": "An architectural one-shoulder Ankara dress crafted with a cascading shoulder drape, striking geometric motifs, and a tailored contour skirt. Daring yet completely tasteful, this asymmetric piece sparkles at cocktail fundraisers, film premieres, celebratory awards evenings, and high-style open-air garden galas.",
    "product_description": "An architectural one-shoulder Ankara dress crafted with a cascading shoulder drape, striking geometric motifs, and a tailored contour skirt. Daring yet completely tasteful, this asymmetric piece sparkles at cocktail fundraisers, film premieres, celebratory awards evenings, and high-style open-air garden galas.",
    "category": "Ankara Dresses",
    "price": 59000,
    "compare_at_price": 72000,
    "regularPrice": 72000,
    "salePrice": 59000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_monostrap_dress.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_monostrap_dress.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_monostrap_dress.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_monostrap_dress.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_monostrap_dress.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_monostrap_dress.jpg"
    },
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      {
        "name": "Sunlit Gold & Bronze",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Ankara Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-adesewa-statement-dress",
      "the-abeni-wrap-silhouette",
      "the-ankara-shift-dress"
    ]
  },
  {
    "id": "REF-028",
    "slug": "the-cowrie-print-sovereign-gown",
    "sku": "EP-NG-028",
    "name": "The Cowrie Print Sovereign Gown",
    "product_name": "The Cowrie Print Sovereign Gown",
    "subtitle": "Maxi Dresses",
    "description": "A breathtaking full-length gown centered on sacred cowrie shell iconography woven into regal African print. Symbolizing abundance and ancient African royalty, this monumental gown creates an indelible impression at royal coronations, luxury weddings, and historic commemorative galas.",
    "product_description": "A breathtaking full-length gown centered on sacred cowrie shell iconography woven into regal African print. Symbolizing abundance and ancient African royalty, this monumental gown creates an indelible impression at royal coronations, luxury weddings, and historic commemorative galas.",
    "category": "Ankara Gowns",
    "price": 92000,
    "compare_at_price": 115000,
    "regularPrice": 115000,
    "salePrice": 92000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Cowries_Print_Maxi_Dress.JPG",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": true,
    "is_best_seller": true,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Cowries_Print_Maxi_Dress.JPG",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Cowries_Print_Maxi_Dress.JPG",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Cowries_Print_Maxi_Dress.JPG",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Cowries_Print_Maxi_Dress.JPG",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Cowries_Print_Maxi_Dress.JPG"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Custom"
    ],
    "colors": [
      {
        "name": "Sacred Cowrie Gold",
        "hex": "#C6A15B"
      },
      {
        "name": "Deep Charcoal",
        "hex": "#241C20"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Ankara Gowns",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-zuri-royale-gown",
      "the-ruffle-empress-gown",
      "the-off-shoulder-occasion-gown"
    ]
  },
  {
    "id": "REF-029",
    "slug": "the-sunday-grace-occasion-dress",
    "sku": "EP-NG-029",
    "name": "The Sunday Grace Occasion Dress",
    "product_name": "The Sunday Grace Occasion Dress",
    "subtitle": "Occasion Dresses",
    "description": "A refined celebration dress featuring structured shoulders, delicate lace neck trim, and radiant African print detailing. Embodying understated majesty and impeccable decorum, it is a quintessential attire for christenings, milestone wedding anniversaries, and high-table receptions.",
    "product_description": "A refined celebration dress featuring structured shoulders, delicate lace neck trim, and radiant African print detailing. Embodying understated majesty and impeccable decorum, it is a quintessential attire for christenings, milestone wedding anniversaries, and high-table receptions.",
    "category": "Luxury Dresses",
    "price": 82000,
    "compare_at_price": 98000,
    "regularPrice": 98000,
    "salePrice": 82000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Easter_Sunday_dress.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Easter_Sunday_dress.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Easter_Sunday_dress.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Easter_Sunday_dress.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Easter_Sunday_dress.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Easter_Sunday_dress.jpg"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Royal Purple & Gold",
        "hex": "#A83263"
      },
      {
        "name": "Champagne",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Luxury Dresses",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-monochrome-muse-jumpsuit",
      "the-kemi-patchwork-trench-coat",
      "the-imani-blue-lace-trim-gown"
    ]
  },
  {
    "id": "REF-030",
    "slug": "the-artisan-tailoring-benchmark",
    "sku": "EP-NG-030",
    "name": "The Artisan Tailoring Benchmark",
    "product_name": "The Artisan Tailoring Benchmark",
    "subtitle": "Craft & Editorial",
    "description": "A studio reference capturing the painstaking finishing stages of an bespoke African dress on a dressmaker mannequin. Exemplifying the dedication of Nigerian couture houses, it stands as an editorial tribute to hand-cut pattern alignment and artisanal craftsmanship.",
    "product_description": "A studio reference capturing the painstaking finishing stages of an bespoke African dress on a dressmaker mannequin. Exemplifying the dedication of Nigerian couture houses, it stands as an editorial tribute to hand-cut pattern alignment and artisanal craftsmanship.",
    "category": "African Heritage & Editorial",
    "price": 75000,
    "compare_at_price": null,
    "regularPrice": 75000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Finished_work.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Finished_work.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Finished_work.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Finished_work.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Finished_work.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Finished_work.jpg"
    },
    "sizes": [
      "Editorial Archive"
    ],
    "colors": [
      {
        "name": "Studio Beige & Ochre",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-ankara-maxi-movement",
      "the-heritage-family-collection"
    ]
  },
  {
    "id": "REF-031",
    "slug": "the-noir-net-fusion-study",
    "sku": "EP-NG-031",
    "name": "The Noir Net Fusion Study",
    "product_name": "The Noir Net Fusion Study",
    "subtitle": "Fabric & Editorial",
    "description": "An innovative textile concept overlaying sheer black fishnet over saturated African wax prints for a seductive optical depth. Documented as a runway and atelier concept study, this reference inspires boundary-pushing couture eveningwear and editorial photo shoots.",
    "product_description": "An innovative textile concept overlaying sheer black fishnet over saturated African wax prints for a seductive optical depth. Documented as a runway and atelier concept study, this reference inspires boundary-pushing couture eveningwear and editorial photo shoots.",
    "category": "African Heritage & Editorial",
    "price": 78000,
    "compare_at_price": null,
    "regularPrice": 78000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Black_net_on_ankara.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": true,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Black_net_on_ankara.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Black_net_on_ankara.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Black_net_on_ankara.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Black_net_on_ankara.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Black_net_on_ankara.jpg"
    },
    "sizes": [
      "Concept Reference"
    ],
    "colors": [
      {
        "name": "Noir Veil",
        "hex": "#241C20"
      },
      {
        "name": "Rose Gold",
        "hex": "#A83263"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-ankara-maxi-movement",
      "the-heritage-family-collection"
    ]
  },
  {
    "id": "REF-032",
    "slug": "the-lagos-fashion-week-runway-look",
    "sku": "EP-NG-032",
    "name": "The Lagos Fashion Week Runway Look",
    "product_name": "The Lagos Fashion Week Runway Look",
    "subtitle": "Runway & Editorial",
    "description": "A runway photograph captured live during Lagos Fashion and Design Week, celebrating avant-garde African tailoring on the global stage. Capturing dynamic editorial movement, this reference showcases high-fashion experimentation for red carpets and museum retrospective collections.",
    "product_description": "A runway photograph captured live during Lagos Fashion and Design Week, celebrating avant-garde African tailoring on the global stage. Capturing dynamic editorial movement, this reference showcases high-fashion experimentation for red carpets and museum retrospective collections.",
    "category": "African Heritage & Editorial",
    "price": 110000,
    "compare_at_price": 135000,
    "regularPrice": 135000,
    "salePrice": 110000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/LFDW3_-56.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/LFDW3_-56.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/LFDW3_-56.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/LFDW3_-56.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/LFDW3_-56.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/LFDW3_-56.jpg"
    },
    "sizes": [
      "Runway Sample Reference"
    ],
    "colors": [
      {
        "name": "Runway Crimson",
        "hex": "#A83263"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-ankara-maxi-movement",
      "the-heritage-family-collection"
    ]
  },
  {
    "id": "REF-033",
    "slug": "the-sovereign-circle-portrait",
    "sku": "EP-NG-033",
    "name": "The Sovereign Circle Portrait",
    "product_name": "The Sovereign Circle Portrait",
    "subtitle": "Group & Heritage",
    "description": "A distinguished group portrait of modern Nigerian women styled in coordinated Ankara eveningwear with matching gele crowns. An inspiring visual reference celebrating sisterhood, communal celebration, and the rich cultural pageantry of African wedding guest style.",
    "product_description": "A distinguished group portrait of modern Nigerian women styled in coordinated Ankara eveningwear with matching gele crowns. An inspiring visual reference celebrating sisterhood, communal celebration, and the rich cultural pageantry of African wedding guest style.",
    "category": "African Heritage & Editorial",
    "price": 88000,
    "compare_at_price": null,
    "regularPrice": 88000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Nigerian_ladies_in_Ankara_clothings.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Nigerian_ladies_in_Ankara_clothings.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Nigerian_ladies_in_Ankara_clothings.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Nigerian_ladies_in_Ankara_clothings.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Nigerian_ladies_in_Ankara_clothings.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Nigerian_ladies_in_Ankara_clothings.jpg"
    },
    "sizes": [
      "Heritage Portrait Reference"
    ],
    "colors": [
      {
        "name": "Celebration Gold & Plum",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-ankara-maxi-movement",
      "the-heritage-family-collection"
    ]
  },
  {
    "id": "REF-034",
    "slug": "the-states-and-capital-peplum-blouse",
    "sku": "EP-NG-034",
    "name": "The States & Capital Peplum Blouse",
    "product_name": "The States & Capital Peplum Blouse",
    "subtitle": "Ankara Tops",
    "description": "A tailored peplum blouse named in honor of Nigerian geography, patterned in striking heritage motifs with a sculpted waistline. Designed to style effortlessly with fitted trousers or flowing wraps, it brings dignified African pride to diplomatic and cultural events.",
    "product_description": "A tailored peplum blouse named in honor of Nigerian geography, patterned in striking heritage motifs with a sculpted waistline. Designed to style effortlessly with fitted trousers or flowing wraps, it brings dignified African pride to diplomatic and cultural events.",
    "category": "Two-Piece Sets",
    "price": 45000,
    "compare_at_price": 55000,
    "regularPrice": 55000,
    "salePrice": 45000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/States_%26_Capital_Blouse.JPG",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/States_%26_Capital_Blouse.JPG",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/States_%26_Capital_Blouse.JPG",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/States_%26_Capital_Blouse.JPG",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/States_%26_Capital_Blouse.JPG",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/States_%26_Capital_Blouse.JPG"
    },
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Federal Emerald",
        "hex": "#2A6F4E"
      },
      {
        "name": "Gold Dust",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Two-Piece Sets",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-amara-corset-silhouette",
      "the-turquoise-belle-peplum-set",
      "the-kemi-high-waist-ensemble"
    ]
  },
  {
    "id": "REF-035",
    "slug": "the-african-nature-editorial-look",
    "sku": "EP-NG-035",
    "name": "The African Nature Editorial Look",
    "product_name": "The African Nature Editorial Look",
    "subtitle": "African Fashion Editorial",
    "description": "A fine-art editorial image framing authentic Ankara styling within the lush botanical landscapes of West Africa. Honoring the organic inspiration behind traditional textile dyes and hand-drawn cultural motifs, this editorial reference inspires sustainable eco-conscious luxury collections and resort runway presentations.",
    "product_description": "A fine-art editorial image framing authentic Ankara styling within the lush botanical landscapes of West Africa. Honoring the organic inspiration behind traditional textile dyes and hand-drawn cultural motifs, this editorial reference inspires sustainable eco-conscious luxury collections and resort runway presentations.",
    "category": "African Heritage & Editorial",
    "price": 85000,
    "compare_at_price": null,
    "regularPrice": 85000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/The_african_nature.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": true,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/The_african_nature.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/The_african_nature.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/The_african_nature.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/The_african_nature.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/The_african_nature.jpg"
    },
    "sizes": [
      "Editorial Archive"
    ],
    "colors": [
      {
        "name": "Botanical Flora",
        "hex": "#2A6F4E"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-ankara-maxi-movement",
      "the-heritage-family-collection"
    ]
  },
  {
    "id": "REF-036",
    "slug": "the-harmony-trio-reference",
    "sku": "EP-NG-036",
    "name": "The Harmony Trio Reference",
    "product_name": "The Harmony Trio Reference",
    "subtitle": "Group & Heritage",
    "description": "A stylized trio reference documenting the interplay of complementary African prints worn across varied silhouettes. Providing visual guidance for coordinated bridal entourages and family portraits, it captures the warmth and collaborative joy of African ceremonial dressing.",
    "product_description": "A stylized trio reference documenting the interplay of complementary African prints worn across varied silhouettes. Providing visual guidance for coordinated bridal entourages and family portraits, it captures the warmth and collaborative joy of African ceremonial dressing.",
    "category": "African Heritage & Editorial",
    "price": 82000,
    "compare_at_price": null,
    "regularPrice": 82000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/The_African_trio.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/The_African_trio.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/The_African_trio.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/The_African_trio.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/The_African_trio.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/The_African_trio.jpg"
    },
    "sizes": [
      "Ensemble Reference"
    ],
    "colors": [
      {
        "name": "Trio Multi-Tone",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-ankara-maxi-movement",
      "the-heritage-family-collection"
    ]
  },
  {
    "id": "REF-037",
    "slug": "the-ankara-radiance-texture-study",
    "sku": "EP-NG-037",
    "name": "The Ankara Radiance Texture Study",
    "product_name": "The Ankara Radiance Texture Study",
    "subtitle": "Fabric & Editorial",
    "description": "A vibrant close-up photograph capturing the tactile richness of authentic wax-print cotton. Used in our visual catalog to highlight the saturated pigments and symbolic linework that make African heritage textiles world-renowned for emotional resonance and timeless prestige.",
    "product_description": "A vibrant close-up photograph capturing the tactile richness of authentic wax-print cotton. Used in our visual catalog to highlight the saturated pigments and symbolic linework that make African heritage textiles world-renowned for emotional resonance and timeless prestige.",
    "category": "African Heritage & Editorial",
    "price": 62000,
    "compare_at_price": null,
    "regularPrice": 62000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Fabric_With_A_Touch_Of_Smile.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Fabric_With_A_Touch_Of_Smile.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Fabric_With_A_Touch_Of_Smile.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Fabric_With_A_Touch_Of_Smile.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Fabric_With_A_Touch_Of_Smile.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_Fabric_With_A_Touch_Of_Smile.jpg"
    },
    "sizes": [
      "Fabric Reference"
    ],
    "colors": [
      {
        "name": "Radiant Sunlight",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-ankara-maxi-movement",
      "the-heritage-family-collection"
    ]
  },
  {
    "id": "REF-038",
    "slug": "the-portrait-of-grace-study",
    "sku": "EP-NG-038",
    "name": "The Portrait of Grace Study",
    "product_name": "The Portrait of Grace Study",
    "subtitle": "Lifestyle Editorial",
    "description": "An intimate portrait of a Black woman radiating natural confidence and dignity in bespoke African occasion wear. Documenting radiant skin luminescence, sculptural headwear, and graceful posture, this lifestyle reference is an ode to effortless personal beauty and serene self-expression across celebratory gatherings.",
    "product_description": "An intimate portrait of a Black woman radiating natural confidence and dignity in bespoke African occasion wear. Documenting radiant skin luminescence, sculptural headwear, and graceful posture, this lifestyle reference is an ode to effortless personal beauty and serene self-expression across celebratory gatherings.",
    "category": "African Heritage & Editorial",
    "price": 76000,
    "compare_at_price": null,
    "regularPrice": 76000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Picture_time.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Picture_time.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Picture_time.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Picture_time.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Picture_time.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Picture_time.jpg"
    },
    "sizes": [
      "Portrait Reference"
    ],
    "colors": [
      {
        "name": "Warm Cocoa & Gold",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-ankara-maxi-movement",
      "the-heritage-family-collection"
    ]
  },
  {
    "id": "REF-039",
    "slug": "the-community-walkathon-lifestyle-story",
    "sku": "EP-NG-039",
    "name": "The Community Walkathon Lifestyle Story",
    "product_name": "The Community Walkathon Lifestyle Story",
    "subtitle": "Lifestyle Editorial",
    "description": "A spontaneous lifestyle documentary image capturing everyday Ankara wear in an energetic civic setting. Demonstrating the durable breathability and everyday elegance of African cotton wax, it celebrates the living culture of contemporary Nigerian street style.",
    "product_description": "A spontaneous lifestyle documentary image capturing everyday Ankara wear in an energetic civic setting. Demonstrating the durable breathability and everyday elegance of African cotton wax, it celebrates the living culture of contemporary Nigerian street style.",
    "category": "African Heritage & Editorial",
    "price": 60000,
    "compare_at_price": null,
    "regularPrice": 60000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Her_Community_Walkathon_Training_22.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Her_Community_Walkathon_Training_22.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Her_Community_Walkathon_Training_22.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Her_Community_Walkathon_Training_22.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Her_Community_Walkathon_Training_22.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Her_Community_Walkathon_Training_22.jpg"
    },
    "sizes": [
      "Lifestyle Archive"
    ],
    "colors": [
      {
        "name": "Civic Coral",
        "hex": "#A83263"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-ankara-maxi-movement",
      "the-heritage-family-collection"
    ]
  },
  {
    "id": "REF-040",
    "slug": "the-everyday-heritage-streetscape",
    "sku": "EP-NG-040",
    "name": "The Everyday Heritage Streetscape",
    "product_name": "The Everyday Heritage Streetscape",
    "subtitle": "Lifestyle Editorial",
    "description": "A vibrant candid street scene reflecting the effortless integration of African prints into modern metropolitan living. An evocative visual reference for our casual resort collections, it celebrates the vibrant pulse of everyday Nigerian sartorial brilliance.",
    "product_description": "A vibrant candid street scene reflecting the effortless integration of African prints into modern metropolitan living. An evocative visual reference for our casual resort collections, it celebrates the vibrant pulse of everyday Nigerian sartorial brilliance.",
    "category": "African Heritage & Editorial",
    "price": 64000,
    "compare_at_price": null,
    "regularPrice": 64000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Her_Community_Walkathon_Training_5.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": false,
    "is_new_arrival": false,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Her_Community_Walkathon_Training_5.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Her_Community_Walkathon_Training_5.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Her_Community_Walkathon_Training_5.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Her_Community_Walkathon_Training_5.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Her_Community_Walkathon_Training_5.jpg"
    },
    "sizes": [
      "Documentary Archive"
    ],
    "colors": [
      {
        "name": "Urban Terra Cotta",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "African Heritage & Editorial",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-chiffon-blossom-trio",
      "the-ankara-maxi-movement",
      "the-heritage-family-collection"
    ]
  },
  {
    "id": "REF-041",
    "slug": "the-ankara-heritage-handbag",
    "sku": "EP-NG-041",
    "name": "The Ankara Heritage Handbag",
    "product_name": "The Ankara Heritage Handbag",
    "subtitle": "Accessories",
    "description": "A structured artisan handbag enveloped in vivid African wax prints with polished metallic hardware fittings. An exquisite finishing touch to elevate any monochromatic look or complement patterned separates, this statement accessory brings cultural pride to both daywear and evening soirées.",
    "product_description": "A structured artisan handbag enveloped in vivid African wax prints with polished metallic hardware fittings. An exquisite finishing touch to elevate any monochromatic look or complement patterned separates, this statement accessory brings cultural pride to both daywear and evening soirées.",
    "category": "Two-Piece Sets",
    "price": 42000,
    "compare_at_price": 52000,
    "regularPrice": 52000,
    "salePrice": 42000,
    "product_image_link": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_bag.jpg",
    "source": "Wikimedia Commons, Category: Ankara style clothes in Nigeria. File page: https://commons.wikimedia.org/wiki/Category:Ankara_style_clothes_in_Nigeria",
    "reference_only": true,
    "is_featured": true,
    "is_new_arrival": true,
    "is_best_seller": false,
    "images": {
      "primary": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_bag.jpg",
      "front": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_bag.jpg",
      "back": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_bag.jpg",
      "side": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_bag.jpg",
      "detail": "https://commons.wikimedia.org/wiki/Special:FilePath/Ankara_bag.jpg"
    },
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "name": "Imperial Print",
        "hex": "#A83263"
      },
      {
        "name": "Polished Gold",
        "hex": "#C6A15B"
      }
    ],
    "inStock": true,
    "totalStock": 25,
    "rating": 4.9,
    "reviewCount": 18,
    "tags": [
      "Two-Piece Sets",
      "Nigerian Fashion",
      "African Heritage",
      "Boutique Reference"
    ],
    "fabricAndMaterials": [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    "sizeAndFit": {
      "modelStats": "Demonstration catalog reference model",
      "fitType": "Structured & flowing contemporary silhouette",
      "length": "Standard length relative to style category",
      "recommendation": "Refer to Empress Palace boutique sizing chart"
    },
    "careInstructions": [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    "deliveryAndReturns": {
      "delivery": "Complimentary white-glove express courier across Abuja on qualifying orders.",
      "returns": "14-day boutique return or size exchange for pristine, unworn pieces.",
      "packaging": "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    "relatedSlugs": [
      "the-amara-corset-silhouette",
      "the-turquoise-belle-peplum-set",
      "the-kemi-high-waist-ensemble"
    ]
  }
];
