import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 pt-16">
      <div className="text-center">
        <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase">
          404 &mdash; NOT FOUND
        </p>
        <h1 className="mt-4 font-display text-6xl font-black tracking-tight text-text sm:text-8xl">
          Lost?
        </h1>
        <p className="mt-4 max-w-md text-base text-muted">
          This page doesn&apos;t exist. Much like certainty. But the shop definitely does.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/" variant="primary" size="md">
            Go Home
          </Button>
          <Button href="/shop" variant="outline" size="md">
            Shop Instead
          </Button>
        </div>
      </div>
    </main>
  );
}
