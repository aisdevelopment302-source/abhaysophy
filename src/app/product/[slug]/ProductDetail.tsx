"use client";

import { useState } from "react";
import Link from "next/link";
import { formatPrice, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import type { Product, Size } from "@/types";

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [activeImage, setActiveImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addItem(product, selectedSize, selectedColor);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  // Related products (same category, different product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen pt-16">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-muted">
          <Link href="/" className="transition-colors hover:text-text">Home</Link>
          <span>/</span>
          <Link href="/shop" className="transition-colors hover:text-text">Shop</Link>
          <span>/</span>
          <span className="text-text">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface">
              <div className="flex h-full items-center justify-center">
                <span className="font-display text-2xl font-bold tracking-wider text-muted/20">
                  {product.name.toUpperCase()}
                </span>
              </div>

              {product.isNew && (
                <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">
                  NEW
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`cursor-pointer aspect-square overflow-hidden rounded-lg bg-surface transition-all duration-300 ${
                    activeImage === i
                      ? "ring-2 ring-accent ring-offset-2 ring-offset-bg"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex h-full items-center justify-center">
                    <span className="text-[10px] font-bold tracking-wider text-muted/30">
                      {i + 1}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col lg:sticky lg:top-24 lg:self-start">
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface px-3 py-1 text-[10px] font-bold tracking-wider text-muted uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-3xl font-black tracking-tight text-text sm:text-4xl">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-3 flex items-center gap-3">
              <span className="text-2xl font-bold text-text">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.originalPrice && (
                <span className="rounded-full bg-red-500/20 px-2.5 py-0.5 text-xs font-bold text-red-400">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {product.description}
            </p>

            {/* Divider */}
            <div className="my-6 border-t border-border" />

            {/* Color Selector */}
            <div className="mb-6">
              <p className="mb-3 text-xs font-bold tracking-wider text-muted uppercase">
                Color: <span className="text-text">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`cursor-pointer h-10 w-10 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === color.name
                        ? "border-accent scale-110"
                        : "border-border hover:border-muted"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-bold tracking-wider text-muted uppercase">
                  Size {selectedSize && <span className="text-text">: {selectedSize}</span>}
                </p>
                <button className="cursor-pointer text-xs text-muted underline transition-colors hover:text-accent">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                    className={`cursor-pointer flex h-11 w-14 items-center justify-center rounded-lg border text-xs font-bold tracking-wider transition-all duration-300 ${
                      selectedSize === size
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border text-muted hover:border-text hover:text-text"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="mt-2 text-xs text-red-400 animate-fade-in">
                  Please select a size. We know commitment is hard.
                </p>
              )}
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              variant="primary"
              size="lg"
              fullWidth
              className={addedToCart ? "!bg-green-500 !text-white" : ""}
            >
              {addedToCart ? "Added to Cart ✓" : "Add to Cart"}
            </Button>

            {/* Extra info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-xs text-muted">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" />
                </svg>
                Free shipping on orders over ₹1,500
              </div>
              <div className="flex items-center gap-3 text-xs text-muted">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 14L4 9L9 4M15 20L20 15L15 10" />
                  <path d="M20 15H8M4 9H16" />
                </svg>
                7-day returns. No philosophical debates required.
              </div>
              <div className="flex items-center gap-3 text-xs text-muted">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path d="M9 12L11 14L15 10" />
                </svg>
                100% premium cotton. Probably organic.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="mb-2 text-xs font-bold tracking-[0.3em] text-accent uppercase">
                YOU MIGHT ALSO DOUBT
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
                Related Products
              </h2>
            </div>

            <div className="stagger-children grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
