const eventLinks = [
  {
    title: "Fun Activity (Ground)",
    description: "Team challenge registration",
    href: "https://forms.gle/BwmPjgRQzwjGRDcg6",
  },
  {
    title: "The Brain Game - Quiz",
    description: "Quiz round participation",
    href: "https://forms.gle/W2yiCWx8ws9myY4g6",
  },
  {
    title: "E-Sports (Collab)",
    description: "Gaming tournament sign-up",
    href: "https://forms.gle/a1Q4yvF5L3eXN3pQA",
  },
  {
    title: "Code War Participation",
    description: "Competitive coding entry",
    href: "https://forms.gle/U6JhUWckcXZNnUGu9",
  },
  {
    title: "Mr. and Ms. Interface Participation",
    description: "Stage event registration",
    href: "https://forms.gle/qX8Kc5LJZZUguN8R6",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full items-start justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="party-beam party-beam-a" />
      <div className="party-beam party-beam-b" />
      <div className="spark spark-a" />
      <div className="spark spark-b" />
      <div className="spark spark-c" />
      <div className="hero-orb hero-orb-a" />
      <div className="hero-orb hero-orb-b" />

      <main className="relative z-10 w-full max-w-xl animate-fade-up">
        <section className="panel-party rounded-4xl p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <p className="inline-block rounded-full border border-white/30 bg-black/25 px-3 py-1 text-xs tracking-[0.16em] text-white/90 uppercase">
              College Fest 2026
            </p>
            <p className="inline-block rounded-full border border-fuchsia-300/35 bg-fuchsia-500/20 px-3 py-1 text-xs tracking-[0.14em] text-fuchsia-100 uppercase">
              Registrations Open
            </p>
          </div>

          <h1 className="font-display neon-title text-5xl leading-none sm:text-6xl">
            INTERFACE 2026
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            Party vibes, sharp competitions, and unforgettable moments. Pick
            your event and claim your spot.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs text-cyan-100/90 sm:text-sm">
            <span className="pulse-ring" />
            <span>Live updates all day on Instagram</span>
          </div>

          <div className="mt-8 grid gap-3">
            {eventLinks.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group link-card"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="event-dot" aria-hidden="true" />
                  <p className="text-base font-semibold tracking-tight text-white sm:text-lg">
                    {item.title}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="hidden text-xs text-white/70 sm:block">
                    {item.description}
                  </p>
                  <span className="text-xl text-white/85 transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>

          <footer className="mt-8 flex items-center justify-between border-t border-white/15 pt-5 text-xs text-white/60 sm:text-sm">
            <span>Follow updates on Instagram</span>
            <a
              href="https://www.instagram.com/cs.net.bcas?utm_source=qr&igsh=MW1xbmF2NzgxZ3VtbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-4 transition hover:text-white"
            >
              @cs.net.bcas
            </a>
          </footer>
        </section>
      </main>
    </div>
  );
}
