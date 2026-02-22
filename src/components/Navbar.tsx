"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-bold tracking-tight text-text transition-colors hover:text-accent"
          >
            ABHAYSOPHY
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/shop"
              className="text-sm font-medium tracking-wide text-muted transition-colors hover:text-text"
            >
              SHOP
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium tracking-wide text-muted transition-colors hover:text-text"
            >
              ABOUT
            </Link>
            <Link
              href="/cart"
              className="group relative flex items-center gap-2 text-sm font-medium tracking-wide text-muted transition-colors hover:text-text"
            >
              CART
              {cart.totalItems > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-bold text-primary">
                  {cart.totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-text transition-all duration-300 ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-text transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-text transition-all duration-300 ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-border transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "max-h-64" : "max-h-0 border-t-0"
        }`}
      >
        <div className="flex flex-col gap-4 bg-bg px-4 py-6">
          <Link
            href="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium tracking-wide text-muted transition-colors hover:text-text"
          >
            SHOP
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium tracking-wide text-muted transition-colors hover:text-text"
          >
            ABOUT
          </Link>
          <Link
            href="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-lg font-medium tracking-wide text-muted transition-colors hover:text-text"
          >
            CART
            {cart.totalItems > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-bold text-primary">
                {cart.totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
