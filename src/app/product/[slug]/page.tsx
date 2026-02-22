import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import ProductDetail from "./ProductDetail";

// Generate static params for all products
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for each product
export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} | Abhaysophy`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
