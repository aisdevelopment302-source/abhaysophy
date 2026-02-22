import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Sometimes Tee",
    slug: "sometimes-tee",
    price: 999,
    description:
      "A black tee that says 'sometimes' in minimal text. Because absolute certainty is overrated, and you know it. Made from 100% premium cotton that's softer than your opinions. The kind of tee that makes people lean in and squint, then nod slowly like they just understood something profound. They didn't. But that's the point.",
    shortDescription: "Black tee with 'sometimes' in minimal text. Certainty is overrated.",
    category: "tees",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#0D0D0D" },
      { name: "Charcoal", hex: "#333333" },
    ],
    images: [
      "/products/sometimes-tee-1.jpg",
      "/products/sometimes-tee-2.jpg",
      "/products/sometimes-tee-3.jpg",
    ],
    tags: ["minimal", "text", "philosophy"],
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Philosophy Hoodie",
    slug: "philosophy-hoodie",
    price: 1999,
    description:
      "Oversized black hoodie with abstract graphic that makes you look like you've read at least three Wikipedia articles on existentialism. Premium heavyweight fleece that wraps you in warmth and pseudo-intellectual comfort. The abstract graphic was designed to mean nothing and everything simultaneously -- much like your last relationship.",
    shortDescription: "Oversized black hoodie with abstract graphic. Warmth meets existentialism.",
    category: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#0D0D0D" },
      { name: "Dark Gray", hex: "#1A1A1A" },
    ],
    images: [
      "/products/philosophy-hoodie-1.jpg",
      "/products/philosophy-hoodie-2.jpg",
      "/products/philosophy-hoodie-3.jpg",
    ],
    tags: ["oversized", "graphic", "philosophy", "hoodie"],
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: "3",
    name: "Right Crop",
    slug: "right-crop",
    price: 899,
    description:
      "Cropped tee with 'Always Right*' printed bold across the chest. The asterisk leads to '* sometimes' in tiny text at the hem. A masterclass in managing expectations. Cut to hit just right at the waist -- because commitment to a full-length tee felt too certain. Made for people who are right about everything, approximately half the time.",
    shortDescription: "Cropped tee with 'Always Right*' (* sometimes). Expectations managed.",
    category: "crops",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#0D0D0D" },
      { name: "White", hex: "#F5F5F5" },
    ],
    images: [
      "/products/right-crop-1.jpg",
      "/products/right-crop-2.jpg",
      "/products/right-crop-3.jpg",
    ],
    tags: ["crop", "text", "ironic"],
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: "4",
    name: "Think Later Tee",
    slug: "think-later-tee",
    price: 999,
    description:
      "White tee with 'Think Later' in bold, unapologetic text. For the moments when overthinking needs to take a break. Premium cotton jersey that's pre-shrunk because at least something in your life should be predictable. The bold typography hits harder than your morning coffee and your 3 AM existential thoughts combined.",
    shortDescription: "White tee with 'Think Later' bold text. Overthinking can wait.",
    category: "tees",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#F5F5F5" },
      { name: "Off-White", hex: "#E8E8E8" },
    ],
    images: [
      "/products/think-later-1.jpg",
      "/products/think-later-2.jpg",
      "/products/think-later-3.jpg",
    ],
    tags: ["bold", "text", "white", "statement"],
    isNew: true,
    isFeatured: false,
    inStock: true,
  },
  {
    id: "5",
    name: "Abhaysophy Classic",
    slug: "abhaysophy-classic",
    price: 1299,
    description:
      "The OG. Logo tee in black-on-black embossed print. You'll have to get close to read it, and honestly, that's a power move. Premium 220 GSM cotton with tone-on-tone embossed branding that says 'I have taste' without actually saying anything at all. This is the tee that started it all -- or at least, that's what we tell people.",
    shortDescription: "Logo tee, black on black embossed. Subtle is the new loud.",
    category: "tees",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#0D0D0D" },
    ],
    images: [
      "/products/classic-1.jpg",
      "/products/classic-2.jpg",
      "/products/classic-3.jpg",
    ],
    tags: ["logo", "classic", "embossed", "premium"],
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: "6",
    name: "Doubt Hoodie",
    slug: "doubt-hoodie",
    price: 2199,
    description:
      "Heavyweight hoodie with 'Doubt Everything' screenprinted on the back. Including this purchase. Oversized fit with dropped shoulders, ribbed cuffs, and a kangaroo pocket deep enough to hide your insecurities. The back print is large enough to be read across a room, sparking conversations you may or may not be prepared for.",
    shortDescription: "Heavyweight hoodie, 'Doubt Everything' back print. Including this purchase.",
    category: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Washed Black", hex: "#1A1A1A" },
      { name: "Slate", hex: "#444444" },
    ],
    images: [
      "/products/doubt-hoodie-1.jpg",
      "/products/doubt-hoodie-2.jpg",
      "/products/doubt-hoodie-3.jpg",
    ],
    tags: ["hoodie", "statement", "oversized"],
    isNew: true,
    isFeatured: false,
    inStock: true,
  },
  {
    id: "7",
    name: "Maybe Tee",
    slug: "maybe-tee",
    price: 899,
    originalPrice: 1099,
    description:
      "A minimal tee with just the word 'Maybe' -- because that's the most honest answer to any question. Relaxed fit in premium combed cotton. The font is deliberately understated, much like your ability to commit to plans. Pairs well with indecision and a general air of cool detachment.",
    shortDescription: "Minimal tee with just 'Maybe'. The most honest answer.",
    category: "tees",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Faded Black", hex: "#2A2A2A" },
      { name: "Cement", hex: "#888888" },
    ],
    images: [
      "/products/maybe-tee-1.jpg",
      "/products/maybe-tee-2.jpg",
      "/products/maybe-tee-3.jpg",
    ],
    tags: ["minimal", "text", "sale"],
    isNew: false,
    isFeatured: false,
    inStock: true,
  },
  {
    id: "8",
    name: "Footnote Crop",
    slug: "footnote-crop",
    price: 949,
    description:
      "Cropped tee covered in tiny philosophical footnotes that nobody will ever fully read. Which is kind of the point. Premium cotton with a slightly boxy silhouette. The footnotes reference everything from Camus to your last unread message. Designed for people who like the idea of philosophy more than actual philosophy.",
    shortDescription: "Crop tee with tiny philosophical footnotes. Nobody reads footnotes anyway.",
    category: "crops",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#0D0D0D" },
      { name: "Ivory", hex: "#FFFFF0" },
    ],
    images: [
      "/products/footnote-crop-1.jpg",
      "/products/footnote-crop-2.jpg",
      "/products/footnote-crop-3.jpg",
    ],
    tags: ["crop", "typography", "detail"],
    isNew: true,
    isFeatured: false,
    inStock: true,
  },
];

export const categories = [
  { slug: "all", name: "All", count: products.length },
  { slug: "tees", name: "Tees", count: products.filter((p) => p.category === "tees").length },
  { slug: "hoodies", name: "Hoodies", count: products.filter((p) => p.category === "hoodies").length },
  { slug: "crops", name: "Crops", count: products.filter((p) => p.category === "crops").length },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
