export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* drifting orbs */}
      <div
        className="animate-drift-a absolute -top-32 -left-24 size-[36rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
        }}
      />
      <div
        className="animate-drift-b absolute -right-32 top-1/3 size-[32rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--accent) 40%, transparent), transparent 70%)",
        }}
      />
      <div
        className="animate-drift-c absolute bottom-0 left-1/3 size-[28rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%)",
        }}
      />

      {/* perspective grid floor */}
      <div className="scene absolute inset-x-0 bottom-0 h-1/2">
        <div className="grid-floor animate-grid-scroll h-full w-full" />
      </div>

      {/* rotating wire shapes */}
      <div className="scene absolute top-24 right-[12%] hidden md:block">
        <div className="animate-tumble size-28 border border-primary/25" />
      </div>
      <div className="scene absolute bottom-40 left-[8%] hidden md:block">
        <div className="animate-tumble-slow size-20 rounded-full border border-accent/30" />
      </div>

      {/* twinkling particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-primary/70"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            animationDelay: `${p.d}s`,
          }}
        />
      ))}
    </div>
  );
}

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  x: (i * 37) % 100,
  y: (i * 61) % 100,
  s: 2 + (i % 3),
  d: (i % 7) * 0.6,
}));
