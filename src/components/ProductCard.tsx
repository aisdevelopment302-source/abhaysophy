"use client";

import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-surface">
        {/* Placeholder gradient for product image */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-hover transition-all duration-500 group-hover:scale-105">
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-lg font-bold tracking-wider text-muted/30 transition-colors duration-300 group-hover:text-muted/50">
              {product.name.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">
              NEW
            </span>
          )}
          {product.originalPrice && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
              SALE
            </span>
          )}
        </div>

        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-primary/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="mb-6 rounded-full border border-text/20 bg-primary/80 px-6 py-2.5 text-xs font-bold tracking-wider text-text backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
            VIEW PRODUCT
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="font-display text-sm font-bold tracking-wide text-text transition-colors group-hover:text-accent">
          {product.name}
        </h3>
        <p className="text-xs text-muted line-clamp-1">{product.shortDescription}</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-bold text-text">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
