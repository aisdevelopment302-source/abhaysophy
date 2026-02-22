import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary">
      {/* Marquee */}
      <div className="overflow-hidden border-b border-border py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 font-display text-sm font-bold tracking-widest text-muted"
            >
              ABHAY BHAI IS ALWAYS RIGHT, SOMETIMES.
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight text-text">
              ABHAYSOPHY
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              We started with one truth: nothing is certain. Except maybe this hoodie looks good on
              you. Streetwear for the philosophically inclined and aesthetically aware.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-muted uppercase">SHOP</h3>
            <div className="flex flex-col gap-3">
              <Link href="/shop?category=tees" className="text-sm text-text/70 transition-colors hover:text-accent">
                Tees
              </Link>
              <Link href="/shop?category=hoodies" className="text-sm text-text/70 transition-colors hover:text-accent">
                Hoodies
              </Link>
              <Link href="/shop?category=crops" className="text-sm text-text/70 transition-colors hover:text-accent">
                Crops
              </Link>
              <Link href="/shop" className="text-sm text-text/70 transition-colors hover:text-accent">
                All Products
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-muted uppercase">INFO</h3>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-text/70 transition-colors hover:text-accent">
                About Us
              </Link>
              <span className="text-sm text-text/70 cursor-not-allowed">
                Shipping & Returns
              </span>
              <span className="text-sm text-text/70 cursor-not-allowed">
                Size Guide
              </span>
              <span className="text-sm text-text/70 cursor-not-allowed">
                Contact
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Abhaysophy. All rights reserved, probably.
          </p>
          <p className="text-xs text-muted italic">
            &quot;Certainty is the enemy of style.&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
