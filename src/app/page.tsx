import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import { getFeaturedProducts, getNewProducts } from "@/data/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(184, 255, 0, 0.1) 100px, rgba(184, 255, 0, 0.1) 101px)`,
          }} />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="animate-fade-in mb-6 text-xs font-bold tracking-[0.3em] text-accent uppercase">
            ABHAYSOPHY &mdash; EST. WHENEVER
          </p>

          <h1 className="animate-slide-up font-display text-5xl font-black leading-[0.9] tracking-tight text-text sm:text-7xl md:text-8xl lg:text-9xl">
            WEAR YOUR
            <br />
            <span className="text-accent">DOUBTS.</span>
          </h1>

          <p className="animate-fade-in mx-auto mt-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg" style={{ animationDelay: "0.3s" }}>
            Streetwear for the philosophically inclined.
            <br className="hidden sm:block" />
            Abhay bhai is always right, sometimes.
          </p>

          <div className="animate-fade-in mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: "0.5s" }}>
            <Button href="/shop" size="lg" variant="primary">
              Shop the Maybe
            </Button>
            <Button href="/about" size="lg" variant="outline">
              The Philosophy
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-8 w-5 rounded-full border-2 border-muted/30 p-1">
            <div className="h-2 w-1.5 mx-auto rounded-full bg-muted/50" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-bold tracking-[0.3em] text-accent uppercase">
              LATEST DROPS
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Fresh Uncertainty
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden text-sm font-medium tracking-wider text-muted transition-colors hover:text-accent sm:block"
          >
            VIEW ALL &rarr;
          </Link>
        </div>

        <div className="stagger-children grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button href="/shop" variant="outline" size="sm">
            View All Products
          </Button>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="border-y border-border bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.3em] text-accent uppercase">
                THE PHILOSOPHY
              </p>
              <h2 className="font-display text-4xl font-black leading-tight tracking-tight text-text sm:text-5xl">
                Nothing is certain.
                <br />
                <span className="text-muted">Except maybe this hoodie looks good on you.</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                We don&apos;t pretend to have all the answers. We just make clothes that look good while you
                figure out yours. Born from late-night overthinking and a refusal to take fashion (or
                ourselves) too seriously.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="outline" size="md">
                  Read the Full Story
                </Button>
              </div>
            </div>

            {/* Quote card */}
            <div className="relative rounded-2xl border border-border bg-surface p-8 sm:p-12">
              <span className="absolute -top-4 left-8 font-serif text-6xl text-accent">&ldquo;</span>
              <blockquote className="font-serif text-xl leading-relaxed text-text italic sm:text-2xl">
                I think, therefore I am... probably wrong about most things. But at least I look good
                being wrong.
              </blockquote>
              <p className="mt-6 text-sm font-bold tracking-wider text-muted">
                &mdash; ABHAY BHAI, PROBABLY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold tracking-[0.3em] text-accent uppercase">
            JUST DROPPED
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            New Arrivals
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Fresh off the existential assembly line. Guaranteed to make you question things.
          </p>
        </div>

        <div className="stagger-children grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {newProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-border bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-xs font-bold tracking-[0.3em] text-accent uppercase">
              STAY UNCERTAIN
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Join the Maybe
            </h2>
            <p className="mt-4 text-base text-muted">
              Get early access to drops, philosophical musings, and the occasional existential
              crisis. We promise not to spam. Probably.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="your@email.maybe"
                className="rounded-full border border-border bg-surface px-6 py-3 text-sm text-text placeholder-muted/50 outline-none transition-colors focus:border-accent sm:min-w-[300px]"
              />
              <Button variant="primary" size="md">
                Subscribe
              </Button>
            </div>

            <p className="mt-4 text-xs text-muted/50">
              No spam. Unsubscribe anytime. We&apos;re not that attached either.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
