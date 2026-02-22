"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import Button from "@/components/Button";

export default function CartPage() {
  const { cart, removeItem, updateQuantity, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <main className="min-h-screen pt-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6 lg:px-8">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-surface">
            <svg className="h-10 w-10 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2.25 3H3.75L5.25 16.5H18.75L20.25 6H6" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="17" cy="20" r="1" />
            </svg>
          </div>
          <h1 className="font-display text-3xl font-black tracking-tight text-text sm:text-4xl">
            Cart is Empty
          </h1>
          <p className="mt-4 max-w-md text-base text-muted">
            Nothing here but existential emptiness. Fill the void with some philosophical
            streetwear, maybe.
          </p>
          <div className="mt-8">
            <Button href="/shop" variant="primary" size="lg">
              Shop the Maybe
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="mb-2 text-xs font-bold tracking-[0.3em] text-accent uppercase">
            YOUR SELECTIONS
          </p>
          <div className="flex items-end justify-between">
            <h1 className="font-display text-4xl font-black tracking-tight text-text sm:text-5xl">
              Cart
            </h1>
            <button
              onClick={clearCart}
              className="cursor-pointer text-xs font-bold tracking-wider text-muted transition-colors hover:text-red-400 uppercase"
            >
              Clear All
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="divide-y divide-border">
              {cart.items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="flex gap-4 py-6 sm:gap-6"
                >
                  {/* Product Image */}
                  <Link
                    href={`/product/${item.product.slug}`}
                    className="h-28 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-surface transition-opacity hover:opacity-80 sm:h-36 sm:w-28"
                  >
                    <div className="flex h-full items-center justify-center">
                      <span className="text-[8px] font-bold tracking-wider text-muted/30">
                        {item.product.name.toUpperCase()}
                      </span>
                    </div>
                  </Link>

                  {/* Item Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="font-display text-sm font-bold tracking-wide text-text transition-colors hover:text-accent"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.product.id, item.size, item.color)}
                          className="cursor-pointer flex-shrink-0 text-muted transition-colors hover:text-red-400"
                          aria-label="Remove item"
                        >
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6 18L18 6M6 6L18 18" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-1 flex gap-3 text-xs text-muted">
                        <span>Size: {item.size}</span>
                        <span>Color: {item.color}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center rounded-full border border-border">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)
                          }
                          className="cursor-pointer flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-text"
                        >
                          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 6H10" />
                          </svg>
                        </button>
                        <span className="flex h-8 w-8 items-center justify-center text-xs font-bold text-text">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                          }
                          className="cursor-pointer flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-text"
                        >
                          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6 2V10M2 6H10" />
                          </svg>
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-sm font-bold text-text">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/shop"
                className="text-xs font-bold tracking-wider text-muted transition-colors hover:text-accent uppercase"
              >
                &larr; Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-surface p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold tracking-tight text-text">
                Order Summary
              </h2>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-muted">
                  <span>Subtotal ({cart.totalItems} item{cart.totalItems !== 1 ? "s" : ""})</span>
                  <span className="text-text">{formatPrice(cart.totalPrice)}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Shipping</span>
                  <span className="text-text">
                    {cart.totalPrice >= 1500 ? "Free" : formatPrice(99)}
                  </span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Taxes</span>
                  <span className="text-muted/50">Calculated at checkout</span>
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <div className="flex justify-between">
                  <span className="font-display text-base font-bold text-text">Total</span>
                  <span className="font-display text-xl font-bold text-text">
                    {formatPrice(cart.totalPrice + (cart.totalPrice >= 1500 ? 0 : 99))}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="primary" size="lg" fullWidth disabled>
                  Checkout (Coming Soon)
                </Button>
              </div>

              <p className="mt-4 text-center text-[10px] text-muted/50">
                This is a demo store. No actual transactions will be processed.
                <br />
                Your existential crisis, however, is very real.
              </p>

              {cart.totalPrice < 1500 && (
                <div className="mt-4 rounded-lg bg-accent/5 p-3 text-center">
                  <p className="text-xs text-accent">
                    Spend {formatPrice(1500 - cart.totalPrice)} more for free shipping.
                    <br />
                    <span className="text-muted">Your wallet may doubt you, but we believe.</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
