import { createFileRoute } from "@tanstack/react-router";
import { Download, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import avatar from "@/assets/avatar.png";
import { TiltCard } from "@/components/TiltCard";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayaan Khan — Web, React & Flutter Developer" },
      {
        name: "description",
        content:
          "3D portfolio of Ayaan Khan, a web, React and Flutter developer with 3 years of experience building fast apps. View projects and download the resume.",
      },
      { property: "og:title", content: "Ayaan Khan — Web, React & Flutter Developer" },
      {
        property: "og:description",
        content:
          "3 years of experience shipping React web apps and Flutter mobile products. Explore the portfolio and resume.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { name: "React / TypeScript", level: 95, tag: "Web" },
  { name: "Flutter / Dart", level: 90, tag: "Mobile" },
  { name: "Node & APIs", level: 85, tag: "Backend" },
  { name: "Tailwind / UI Systems", level: 92, tag: "Design" },
];

const projects = [
  {
    title: "Nova Commerce",
    kind: "React + Node",
    blurb: "Headless storefront with instant search, Stripe checkout and 98 Lighthouse score.",
  },
  {
    title: "PulseFit",
    kind: "Flutter",
    blurb: "Cross-platform fitness tracker with offline sync, charts and health-kit integration.",
  },
  {
    title: "Orbit Dashboard",
    kind: "React + Realtime",
    blurb: "Realtime analytics console handling 2M events/day with websocket streaming.",
  },
  {
    title: "Kite Wallet",
    kind: "Flutter + Firebase",
    blurb: "Fintech wallet with biometric auth, KYC flow and instant P2P transfers.",
  },
];

const stats = [
  { k: "3+", v: "Years experience" },
  { k: "30+", v: "Projects shipped" },
  { k: "12", v: "Apps on stores" },
  { k: "100%", v: "Client retention" },
];

function Index() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-lg font-bold tracking-tight">
          ayaan<span className="text-brand">.dev</span>
        </span>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#skills" className="transition-colors hover:text-foreground">
            Skills
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        <Button asChild size="sm">
          <a href="/resume.pdf" download>
            <Download /> Resume
          </a>
        </Button>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-10 pb-24 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" /> Available for freelance work
          </p>
          <h1 className="text-5xl leading-[1.05] font-bold md:text-6xl">
            Web, React &<br />
            <span className="text-brand">Flutter Developer</span>
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            I design and build fast, tactile products — 3 years turning ideas into production web
            apps and cross-platform mobile experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#work">
                View portfolio <ArrowUpRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/resume.pdf" download>
                <Download /> Download resume
              </a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-primary">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="scene relative flex justify-center">
          <div className="animate-spin-slow absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 md:size-96" />
          <div
            className="absolute top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:size-80"
            style={{ background: "var(--gradient-brand)", opacity: 0.25 }}
          />
          <TiltCard className="animate-float relative w-full max-w-sm p-4" intensity={14}>
            <img
              src={avatar}
              alt="3D avatar of Ayaan Khan, web and Flutter developer"
              width={1024}
              height={1024}
              className="w-full drop-shadow-2xl"
              style={{ transform: "translateZ(60px)" }}
            />
            <div
              className="mt-2 flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3"
              style={{ transform: "translateZ(35px)" }}
            >
              <span className="text-sm font-semibold">Ayaan Khan</span>
              <span className="text-xs text-muted-foreground">Karachi, PK</span>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">Stack I ship with</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skills.map((s) => (
            <TiltCard key={s.name} intensity={6}>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{s.name}</span>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                  {s.tag}
                </span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${s.level}%`, background: "var(--gradient-brand)" }}
                />
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">Selected work</h2>
        <p className="mt-3 text-muted-foreground">A few products from the last three years.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <TiltCard key={p.title} className="group p-7" intensity={9}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs tracking-widest text-accent uppercase">{p.kind}</span>
                  <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.blurb}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <TiltCard className="p-10 text-center" intensity={5}>
          <h2 className="text-3xl font-bold md:text-4xl">Let's build something</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Open to freelance and full-time roles in web and Flutter development.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href="mailto:hello@ayaan.dev">
                <Mail /> Email me
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github /> GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin /> LinkedIn
              </a>
            </Button>
          </div>
        </TiltCard>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ayaan Khan — Web, React & Flutter Developer
        </p>
      </section>
    </main>
  );
}
