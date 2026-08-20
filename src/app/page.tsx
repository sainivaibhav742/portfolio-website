import Link from "next/link"
import { ArrowRight, Check, GitCommitHorizontal, Github, Mail, Radio, Rss, Users } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.04em] text-ink md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p>}
    </div>
  )
}

function StatusDot({ status }: { status: string }) {
  const active = status === "Active" || status === "Building" || status === "Ongoing"
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs font-medium text-muted">
      <span className={active ? "h-2 w-2 rounded-full bg-accent status-pulse" : "h-2 w-2 rounded-full bg-dim"} />
      {status}
    </span>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative overflow-hidden pt-32 md:pt-40">
          <div className="absolute inset-0 grid-field" />
          <div className="section-shell relative">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-muted">
                <Radio className="h-3.5 w-3.5 text-accent" />
                Building in public / shipping systems weekly
              </div>
              <h1 className="mt-8 text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-ink md:text-7xl lg:text-8xl">
                {portfolioData.hero.headline}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-muted md:text-xl">
                {portfolioData.hero.subheadline}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/projects">
                    {portfolioData.hero.primaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/build-logs">
                    {portfolioData.hero.secondaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
              <div className="premium-card p-5 md:col-span-1">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-dim">Currently Building</p>
                <div className="mt-4 flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent status-pulse" />
                  <p className="text-xl font-semibold tracking-[-0.02em] text-ink">{portfolioData.status.current}</p>
                </div>
              </div>
              <div className="premium-card p-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-dim">Upcoming</p>
                <div className="mt-4 space-y-2">
                  {portfolioData.status.upcoming.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted">
                      <Check className="h-4 w-4 text-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="premium-card p-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-dim">Available for</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {portfolioData.status.availableFor.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Build in public"
              title="A commit-style timeline for every meaningful product move."
              description="Each update is structured so it can become a markdown build log, article, or future case study."
            />
            <div className="mt-10 overflow-hidden rounded-2xl border border-borderSubtle bg-panel">
              {portfolioData.buildLogs.map((log) => (
                <article key={log.title} className="grid gap-4 border-b border-borderSubtle p-5 last:border-b-0 md:grid-cols-[120px_1fr_auto] md:items-start">
                  <p className="font-mono text-sm text-dim">{log.date}</p>
                  <div>
                    <div className="flex items-center gap-2">
                      <GitCommitHorizontal className="h-4 w-4 text-accent" />
                      <h3 className="font-semibold text-ink">{log.title}</h3>
                    </div>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{log.body}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {log.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-accentSoft px-2.5 py-1 text-xs font-medium text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" id="projects">
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Featured projects"
                title="Verified public work and the real build queue."
                description="Shipped or public projects are marked with sources. Early ideas stay clearly labeled as building, research, or queued."
              />
              <Button variant="outline" asChild>
                <Link href="/projects">All projects</Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {portfolioData.projects.map((project) => (
                <article key={project.title} className="premium-card group flex min-h-[22rem] flex-col p-5 transition hover:-translate-y-1 hover:border-accent/35">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent">
                      <project.icon className="h-5 w-5" />
                    </div>
                    <StatusDot status={project.status} />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-ink">{project.title}</h3>
                  <p className="mt-3 flex-grow text-sm leading-6 text-muted">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                    <Link href={project.github} target="_blank" className="text-muted transition hover:text-ink">GitHub</Link>
                    {project.demo ? (
                      <Link href={project.demo} target={project.demo.startsWith("http") ? "_blank" : undefined} className="text-muted transition hover:text-ink">Public source</Link>
                    ) : (
                      <span className="text-dim">No public demo yet</span>
                    )}
                    <Link href={project.caseStudy} className="text-accent transition hover:text-ink">Case Study</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <SectionHeading eyebrow="Articles" title="Notes from the product lab." />
              <div className="mt-8 grid gap-3">
                {portfolioData.articles.map((article) => (
                  <Link key={article.title} href={article.href} className="glass-line rounded-2xl p-5 transition hover:bg-white/[0.06]">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">{article.title}</h3>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs text-dim">
                          <span>{article.date}</span>
                          <span>/</span>
                          <span>{article.readingTime}</span>
                          <span>/</span>
                          <span>{article.status}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {article.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-white/[0.05] px-2 py-1 text-xs text-muted">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Resources" title="Free systems for builders." />
              <div className="mt-8 grid gap-3">
                {portfolioData.resources.map((resource) => (
                  <div key={resource.title} className="premium-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{resource.type}</p>
                    <h3 className="mt-3 text-lg font-semibold text-ink">{resource.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{resource.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24" id="github">
          <div className="section-shell">
            <SectionHeading
              eyebrow="GitHub activity"
              title="Public GitHub, without fake contribution charts."
              description="Only visible profile information and pinned repositories are shown here. Live contribution history can be wired later through GitHub GraphQL."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="premium-card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-ink">Profile snapshot</h3>
                  <Github className="h-5 w-5 text-muted" />
                </div>
                <div className="mt-6 grid gap-3">
                  {[portfolioData.github.reposCount, portfolioData.github.followers, portfolioData.github.following].map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-medium text-muted">
                      {item}
                    </div>
                  ))}
                  <Link href={portfolioData.github.profile} target="_blank" className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Open GitHub profile
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="premium-card p-5">
                  <h3 className="font-semibold text-ink">Pinned repositories</h3>
                  <div className="mt-4 space-y-3">
                    {portfolioData.github.repos.map((repo) => (
                      <div key={repo} className="rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 font-mono text-sm text-muted">{repo}</div>
                    ))}
                  </div>
                </div>
                <div className="premium-card p-5">
                  <h3 className="font-semibold text-ink">Verification rule</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    I removed generated commits and synthetic contribution cells. This section now uses public GitHub profile facts only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24" id="stack">
          <div className="section-shell">
            <SectionHeading eyebrow="Tech stack" title="Tools for shipping fast without making the system fragile." />
            <div className="mt-8 flex flex-wrap gap-3">
              {portfolioData.stack.map((item) => (
                <span key={item} className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" id="community">
          <div className="section-shell">
            <div className="premium-card grid gap-8 overflow-hidden p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-accent">
                  <Users className="h-6 w-6" />
                </div>
                <p className="eyebrow mt-8">Community</p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.04em] text-ink md:text-5xl">
                  A personal space for people who keep improving.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
                  {portfolioData.community.description}
                </p>
              </div>
              <div className="grid content-start gap-3">
                {portfolioData.community.values.map((value) => (
                  <div key={value} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-sm font-medium text-muted">
                    {value}
                  </div>
                ))}
                <div className="mt-3 flex flex-wrap gap-3">
                  {portfolioData.community.links.map((link) => (
                    <Link key={link.label} href={link.href} target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-ink transition hover:border-accent/40">
                      {link.label}
                      <ArrowRight className="h-4 w-4 text-accent" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24" id="about">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading eyebrow="About" title="A short bio, because the work should do most of the talking." />
            <div className="premium-card p-6">
              <p className="text-balance text-2xl font-semibold leading-10 tracking-[-0.03em] text-ink">
                {portfolioData.about}
              </p>
              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {portfolioData.capabilities.map((capability) => (
                  <div key={capability.title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                    <capability.icon className="h-5 w-5 text-accent" />
                    <h3 className="mt-4 font-semibold text-ink">{capability.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{capability.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24" id="terminal">
          <div className="section-shell">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <p className="font-mono text-xs text-dim">terminal mode</p>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-muted">
{`> vaibhav.status
currently_building: "${portfolioData.status.current}"
shipping_style: "public logs + open source experiments"
newsletter: "coming soon"
rss: "/rss.xml"
visitor_counter: "structured for Supabase"
now_playing: "Spotify optional"`}
              </pre>
            </div>
          </div>
        </section>

        <section className="py-24" id="contact">
          <div className="section-shell">
            <div className="premium-card grid gap-8 p-6 md:grid-cols-[1fr_0.8fr] md:p-8">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.04em] text-ink md:text-5xl">
                  Consulting, partnerships, speaking, or building something serious.
                </h2>
                <form className="mt-8 grid gap-3">
                  <input aria-label="Email" placeholder="Email" className="h-12 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-ink outline-none placeholder:text-dim focus:border-accent/50" />
                  <textarea aria-label="Message" placeholder="What are you building?" rows={5} className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-ink outline-none placeholder:text-dim focus:border-accent/50" />
                  <Button type="submit" className="justify-self-start">
                    Send signal
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
              <div className="grid content-start gap-3">
                {portfolioData.contact.map((item) => (
                  <Link key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-medium text-muted transition hover:bg-white/[0.06] hover:text-ink">
                    {item.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
                <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm text-muted">
                  <div className="flex items-center gap-2 text-ink">
                    <Users className="h-4 w-4 text-accent" />
                    Community
                  </div>
                  <p className="mt-2">Founder notes, Discord conversations, and Patreon updates live under The Adviser.</p>
                </div>
                <Link href="/rss.xml" className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                  <Rss className="h-4 w-4" />
                  RSS Feed
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
