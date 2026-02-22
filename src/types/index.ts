export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  category: Category;
  sizes: Size[];
  colors: ProductColor[];
  images: string[];
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  inStock: boolean;
}

export type Category = "tees" | "hoodies" | "crops" | "accessories";

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: Size;
  color: string;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export type SortOption = "newest" | "price-low" | "price-high" | "name";
