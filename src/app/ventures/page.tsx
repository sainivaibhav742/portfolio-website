import Link from "next/link"
import { ArrowUpRight, CheckCircle2, Orbit } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"

export const metadata = {
  title: "Venture Lab | Vaibhav Saini",
  description: "Active companies, venture ideas, CTO ownership, and product systems being developed by Vaibhav Saini.",
}

export default function VenturesPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="py-20">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <span className="eyebrow">Venture lab</span>
                <h1 className="mt-4 max-w-4xl font-display text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.045em] text-textPrimary text-balance">
                  Companies, ideas, and technical ownership in motion.
                </h1>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-textSecondary lg:justify-self-end">
                This page is the company-building layer: what is active, what problem each venture is exploring, what I own technically, and how the work is being shaped.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="section-shell">
            <div className="grid gap-5">
              {portfolioData.ventures.map((venture, index) => (
                <article
                  key={venture.name}
                  className="surface-shell transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="surface-core overflow-hidden">
                    <div className="grid gap-0 lg:grid-cols-[0.7fr_1.3fr]">
                      <div className="flex min-h-[22rem] flex-col justify-between bg-ink p-6 text-white md:p-8">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{venture.type}</p>
                            <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
                              {venture.name}
                            </h2>
                            <p className="mt-3 text-white/65">{venture.role}</p>
                          </div>
                          <span className="font-mono text-sm font-bold text-white/35">0{index + 1}</span>
                        </div>

                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/45">Stage</p>
                          <p className="mt-2 text-xl font-black text-accent">{venture.stage}</p>
                        </div>
                      </div>

                      <div className="grid gap-8 p-6 md:p-8">
                        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Idea</p>
                            <p className="mt-3 text-xl font-semibold leading-8 text-textPrimary">{venture.idea}</p>
                            <p className="mt-5 text-sm leading-6 text-textSecondary">{venture.proof}</p>
                          </div>

                          <div className="rounded-2xl border border-textPrimary/10 bg-cream p-5">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-textSecondary">Designed at</p>
                            <p className="mt-3 font-display text-2xl font-black text-textPrimary">{venture.designedAt}</p>
                          </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <p className="text-sm font-black text-textPrimary">Ownership</p>
                            <div className="mt-3 grid gap-2">
                              {venture.ownership.map((item) => (
                                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-textSecondary">
                                  <CheckCircle2 className="h-4 w-4 text-accent" />
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-black text-textPrimary">Technical stack</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {venture.stack.map((tech) => (
                                <span key={tech} className="rounded-full border border-textPrimary/10 bg-white px-3 py-1 text-xs font-black text-textSecondary">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {venture.url ? (
                            <Button variant="outline" asChild>
                              <Link href={venture.url} target="_blank">
                                Visit {venture.name}
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          ) : null}
                          <Button asChild>
                            <Link href="/contact">Discuss this kind of build</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="section-shell">
            <div className="rounded-3xl border border-textPrimary/10 bg-white/78 p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accentSoft text-accent">
                  <Orbit size={28} />
                </div>
                <div>
                  <h2 className="font-display text-3xl font-black tracking-[-0.02em] text-textPrimary md:text-5xl">
                    The lab is open to serious founder and partner conversations.
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-textSecondary">
                    If you are exploring a company, product, or technical partnership, the next step is a focused conversation.
                  </p>
                </div>
                <Button size="lg" asChild>
                  <Link href="/contact">Start conversation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
