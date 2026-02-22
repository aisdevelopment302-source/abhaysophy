import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-accent uppercase">
            THE STORY BEHIND THE DOUBT
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-black leading-tight tracking-tight text-text sm:text-6xl lg:text-7xl">
            We started with one truth:
            <br />
            <span className="text-muted">nothing is certain.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Except maybe this hoodie looks good on you. And that Abhay bhai is always right.
            Sometimes.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              The Origin Story
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">
              <p>
                Abhaysophy was born at 2 AM on a Tuesday -- the universally accepted time for
                questionable life decisions and groundbreaking ideas. Somewhere between scrolling
                through philosophy memes and arguing about whether a hot dog is a sandwich, we had
                a thought:
              </p>
              <p className="font-display text-xl font-bold text-text">
                &quot;What if clothes could be as uncertain as we are?&quot;
              </p>
              <p>
                Most brands tell you to be confident, be bold, be certain. We thought that was
                exhausting. So we made clothes for the rest of us -- the overthinkers, the
                second-guessers, the people who reply &quot;maybe&quot; to every RSVP.
              </p>
              <p>
                Every piece in our collection is designed with one principle: look good while
                questioning everything. Including why you&apos;re reading this far into an About page.
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface lg:aspect-auto">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <span className="font-display text-4xl font-black tracking-wider text-muted/10">
                  ABHAY
                  <br />
                  SOPHY
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="border-y border-border bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-accent uppercase">
              THE ABHAY BHAI PHILOSOPHY
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Always Right, Sometimes
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              The asterisk isn&apos;t just a design choice -- it&apos;s a worldview. In a world of hot takes
              and absolute certainties, we chose to embrace the &quot;maybe.&quot; Every opinion is a draft.
              Every belief comes with a footnote. And that&apos;s not weakness -- that&apos;s the most honest
              flex there is.
            </p>
          </div>

          {/* Values Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Question Everything",
                description:
                  "Including why you need another black tee. (You do. Trust us. Or don't.)",
                icon: "?",
              },
              {
                title: "Look Good Doing It",
                description:
                  "Existential crises hit different when you're wearing premium cotton.",
                icon: "*",
              },
              {
                title: "Embrace the Maybe",
                description:
                  "Certainty is boring. We make clothes for people brave enough to say 'I don't know.'",
                icon: "~",
              },
              {
                title: "No Cringe Allowed",
                description:
                  "We're ironic, not cringey. There's a thin line, and we know exactly where it is. Probably.",
                icon: "!",
              },
              {
                title: "Quality Over Everything",
                description:
                  "We can't guarantee life answers, but we can guarantee these fabrics are premium.",
                icon: "+",
              },
              {
                title: "For the Overthinkers",
                description:
                  "If you've read all six of these values, you're definitely our target audience.",
                icon: "&",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="group rounded-xl border border-border bg-surface p-8 transition-all duration-300 hover:border-accent/30 hover:bg-surface-hover"
              >
                <span className="font-display text-3xl font-black text-accent">{value.icon}</span>
                <h3 className="mt-4 font-display text-base font-bold tracking-wide text-text">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Photo placeholder */}
          <div className="relative aspect-square overflow-hidden rounded-xl bg-surface">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <span className="font-display text-6xl font-black text-muted/10">AB</span>
                <p className="mt-2 text-xs text-muted/30">Founder Photo</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-bold tracking-[0.3em] text-accent uppercase">
              THE PERSON BEHIND THE DOUBT
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Meet Abhay Bhai
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Part philosopher, part streetwear enthusiast, full-time overthinker. Abhay started
                this brand because he couldn&apos;t find clothes that matched his level of existential
                ambiguity.
              </p>
              <p>
                &quot;I wanted to create something for people like me -- people who read the entire
                Terms & Conditions, then click &apos;Decline&apos; just to see what happens. People
                who can hold two contradictory opinions at the same time and feel fine about it.&quot;
              </p>
              <p>
                When he&apos;s not designing the next drop, you can find him debating whether cereal
                is a soup, reading philosophy quotes on Instagram, or adding items to his cart
                without checking out. Relatable king.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-surface p-6">
              <p className="font-serif text-lg italic leading-relaxed text-text">
                &quot;The only thing I&apos;m 100% sure about is that I&apos;m not 100% sure about
                anything. And even that&apos;s debatable.&quot;
              </p>
              <p className="mt-3 text-xs font-bold tracking-wider text-muted">
                &mdash; ABHAY BHAI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-black tracking-tight text-text sm:text-5xl">
            Ready to wear your doubts?
          </h2>
          <p className="mt-4 text-base text-muted">
            Join the movement of well-dressed uncertainty.
          </p>
          <div className="mt-8">
            <Button href="/shop" variant="primary" size="lg">
              Shop the Collection
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
