"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories, getProductsByCategory, formatPrice } from "@/data/products";
import type { SortOption } from "@/types";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [showSort, setShowSort] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = getProductsByCategory(activeCategory);

    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "name":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
      default:
        result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  const sortLabels: Record<SortOption, string> = {
    newest: "Newest",
    "price-low": "Price: Low to High",
    "price-high": "Price: High to Low",
    name: "Name A-Z",
  };

  const priceRange = useMemo(() => {
    if (filteredProducts.length === 0) return null;
    const prices = filteredProducts.map((p) => p.price);
    return {
      min: formatPrice(Math.min(...prices)),
      max: formatPrice(Math.max(...prices)),
    };
  }, [filteredProducts]);

  return (
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="mb-2 text-xs font-bold tracking-[0.3em] text-accent uppercase">
            THE COLLECTION
          </p>
          <h1 className="font-display text-4xl font-black tracking-tight text-text sm:text-6xl">
            Shop
          </h1>
          <p className="mt-4 max-w-lg text-base text-muted">
            Browse the full range of philosophical garments. Each piece comes with built-in
            existential flair and zero answers.
          </p>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold tracking-wider transition-all duration-300 uppercase ${
                    activeCategory === cat.slug
                      ? "bg-accent text-primary"
                      : "bg-surface text-muted hover:bg-surface-hover hover:text-text"
                  }`}
                >
                  {cat.name}
                  <span className="ml-1.5 opacity-50">({cat.count})</span>
                </button>
              ))}
            </div>

            {/* Sort + Info */}
            <div className="flex items-center gap-4">
              {priceRange && (
                <span className="hidden text-xs text-muted lg:block">
                  {priceRange.min} &mdash; {priceRange.max}
                </span>
              )}
              <span className="text-xs text-muted">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </span>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowSort(!showSort)}
                  className="flex cursor-pointer items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-bold tracking-wider text-muted transition-colors hover:border-accent hover:text-text uppercase"
                >
                  {sortLabels[sortBy]}
                  <svg className={`h-3 w-3 transition-transform ${showSort ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>

                {showSort && (
                  <div className="absolute right-0 top-full z-20 mt-2 w-48 rounded-lg border border-border bg-surface py-1 shadow-xl">
                    {(Object.entries(sortLabels) as [SortOption, string][]).map(([key, label]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setSortBy(key);
                          setShowSort(false);
                        }}
                        className={`w-full cursor-pointer px-4 py-2.5 text-left text-xs font-medium tracking-wider transition-colors ${
                          sortBy === key
                            ? "bg-accent/10 text-accent"
                            : "text-muted hover:bg-surface-hover hover:text-text"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {filteredProducts.length > 0 ? (
          <div className="stagger-children grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="font-display text-2xl font-bold text-muted">Nothing here. Yet.</p>
            <p className="mt-2 text-sm text-muted/70">
              Like the meaning of life, some categories are still being figured out.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen pt-16">
        <div className="flex items-center justify-center py-48">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-accent" />
        </div>
      </main>
    }>
      <ShopContent />
    </Suspense>
  );
}
