import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Smartphone,
  Globe,
  Layers,
  Rocket,
  Quote,
  MapPin,
  Phone,
} from "lucide-react";
import avatar from "@/assets/avatar.png";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sameer Ahmed — Web, React & Flutter Developer" },
      {
        name: "description",
        content:
          "3D portfolio of Sameer Ahmed, a web, React and Flutter developer with 3 years of experience building fast apps. See projects, services and download the resume.",
      },
      { property: "og:title", content: "Sameer Ahmed — Web, React & Flutter Developer" },
      {
        property: "og:description",
        content:
          "3 years shipping React web apps and Flutter mobile products. Explore the portfolio, services and resume.",
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
  { name: "Firebase / Supabase", level: 88, tag: "Cloud" },
  { name: "Next.js / SSR", level: 82, tag: "Web" },
];

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    body: "Marketing sites, dashboards and SaaS products built with React, TypeScript and modern tooling.",
  },
  {
    icon: Smartphone,
    title: "Flutter Apps",
    body: "One codebase, iOS + Android + web. Offline-first data, native integrations, store releases.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    body: "Reusable component libraries and tokens so your product stays consistent as it scales.",
  },
  {
    icon: Rocket,
    title: "Performance & SEO",
    body: "Audits, code-splitting and Core Web Vitals work that moves real ranking and conversion numbers.",
  },
];

const projects = [
  {
    title: "Nova Commerce",
    kind: "React + Node",
    blurb: "Headless storefront with instant search, Stripe checkout and 98 Lighthouse score.",
    stack: ["React", "Node", "Stripe"],
  },
  {
    title: "PulseFit",
    kind: "Flutter",
    blurb: "Cross-platform fitness tracker with offline sync, charts and health-kit integration.",
    stack: ["Flutter", "Riverpod", "SQLite"],
  },
  {
    title: "Orbit Dashboard",
    kind: "React + Realtime",
    blurb: "Realtime analytics console handling 2M events/day with websocket streaming.",
    stack: ["React", "WebSocket", "Postgres"],
  },
  {
    title: "Kite Wallet",
    kind: "Flutter + Firebase",
    blurb: "Fintech wallet with biometric auth, KYC flow and instant P2P transfers.",
    stack: ["Flutter", "Firebase", "KYC"],
  },
  {
    title: "Atlas CMS",
    kind: "Next.js",
    blurb: "Multi-tenant content platform with role-based access and live preview publishing.",
    stack: ["Next.js", "Prisma", "RBAC"],
  },
  {
    title: "Verse Chat",
    kind: "Flutter + Node",
    blurb: "Realtime messaging app with push notifications, media sharing and typing presence.",
    stack: ["Flutter", "Socket.io", "Redis"],
  },
];

const timeline = [
  {
    role: "Senior Frontend & Flutter Developer",
    org: "Freelance",
    period: "2024 — Present",
    body: "Delivered 15+ client apps across fintech, e-commerce and health. Cut average load time by 45%.",
  },
  {
    role: "React Developer",
    org: "Product Studio",
    period: "2023 — 2024",
    body: "Built a component library powering 6 production apps and shipped realtime dashboards.",
  },
  {
    role: "Junior Web Developer",
    org: "Digital Agency",
    period: "2022 — 2023",
    body: "Developed responsive marketing sites averaging 95+ Lighthouse scores.",
  },
];

const testimonials = [
  {
    quote:
      "Sameer rebuilt our storefront in six weeks and conversions jumped 32%. Communication was flawless.",
    name: "Hana Yusuf",
    role: "Founder, Nova",
  },
  {
    quote:
      "The Flutter app shipped to both stores on schedule and still has a 4.8 rating a year later.",
    name: "Daniel Reyes",
    role: "CTO, PulseFit",
  },
  {
    quote: "He thinks like a product owner, not just an engineer. Rare and very valuable.",
    name: "Mira Kapoor",
    role: "PM, Orbit",
  },
];

const stats = [
  { k: "3+", v: "Years experience" },
  { k: "30+", v: "Projects shipped" },
  { k: "12", v: "Apps on stores" },
  { k: "100%", v: "Client retention" },
];

const marquee = [
  "React",
  "TypeScript",
  "Flutter",
  "Dart",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Firebase",
  "Supabase",
  "PostgreSQL",
  "GraphQL",
  "Git",
];

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs tracking-[0.3em] text-accent uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-xl text-muted-foreground">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />

      <header className="sticky top-0 z-20 border-b border-border/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg font-bold tracking-tight">
            sameer<span className="text-brand">.dev</span>
          </span>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {["about", "services", "work", "experience", "contact"].map((l) => (
              <a key={l} href={`#${l}`} className="capitalize transition-colors hover:text-foreground">
                {l}
              </a>
            ))}
          </nav>
          <Button asChild size="sm">
            <a href="/resume.pdf" download>
              <Download /> Resume
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-2">
        <div className="animate-rise">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            <span className="pulse size-2 rounded-full bg-primary" /> Available for freelance work
          </p>
          <h1 className="text-5xl leading-[1.05] font-bold md:text-6xl">
            Hi, I'm Sameer —<br />
            <span className="text-brand">Web, React & Flutter Developer</span>
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
              alt="3D avatar of Sameer Ahmed, web and Flutter developer"
              width={1024}
              height={1024}
              className="w-full drop-shadow-2xl"
              style={{ transform: "translateZ(60px)" }}
            />
            <div
              className="mt-2 flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3"
              style={{ transform: "translateZ(35px)" }}
            >
              <span className="text-sm font-semibold">Sameer Ahmed</span>
              <span className="text-xs text-muted-foreground">Karachi, PK</span>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-border/50 py-4">
        <div className="flex gap-10 whitespace-nowrap [animation:marquee_28s_linear_infinite]">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-display text-sm tracking-widest text-muted-foreground uppercase">
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <Section id="about" eyebrow="About" title="Three years, one obsession: shipping.">
        <div className="grid gap-6 md:grid-cols-3">
          <TiltCard className="md:col-span-2" intensity={6}>
            <p className="text-muted-foreground">
              I started with WordPress tweaks and ended up architecting production React apps and
              Flutter products used by thousands of people. I care about the boring parts that
              users feel: load time, offline states, empty states, and animations that guide rather
              than distract.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today I work with founders and product teams as an end-to-end developer — from
              wireframe and design system through API, release and post-launch performance work.
            </p>
          </TiltCard>
          <TiltCard intensity={6}>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-primary" /> Karachi, Pakistan (remote worldwide)
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-primary" /> hello@sameer.dev
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-primary" /> Available Mon–Sat
              </li>
              <li className="flex items-center gap-3">
                <Rocket className="size-4 text-primary" /> Avg. project: 4–8 weeks
              </li>
            </ul>
          </TiltCard>
        </div>
      </Section>

      {/* Services */}
      <Section
        id="services"
        eyebrow="Services"
        title="What I can build for you"
        subtitle="Pick a lane or take the whole thing end to end."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <TiltCard key={s.title} intensity={10}>
              <s.icon className="size-6 text-accent" />
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section eyebrow="Stack" title="Tools I ship with">
        <div className="grid gap-5 md:grid-cols-2">
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
      </Section>

      {/* Work */}
      <Section
        id="work"
        eyebrow="Portfolio"
        title="Selected work"
        subtitle="A few products from the last three years."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="Experience" title="Where I've worked">
        <div className="relative border-l border-border pl-8">
          {timeline.map((t) => (
            <div key={t.role} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[41px] top-2 size-3 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold">
                  {t.role} <span className="text-muted-foreground">· {t.org}</span>
                </h3>
                <span className="text-xs text-accent">{t.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="Testimonials" title="What clients say">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TiltCard key={t.name} intensity={8}>
              <Quote className="size-6 text-accent" />
              <p className="mt-4 text-sm text-muted-foreground">{t.quote}</p>
              <div className="mt-6">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <TiltCard className="p-10 text-center" intensity={5}>
          <h2 className="text-3xl font-bold md:text-4xl">Let's build something</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Open to freelance and full-time roles in web and Flutter development.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href="mailto:hello@sameer.dev">
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
          © {new Date().getFullYear()} Sameer Ahmed — Web, React & Flutter Developer
        </p>
      </section>
    </main>
  );
}
