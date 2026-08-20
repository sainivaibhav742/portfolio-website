import Link from "next/link"
import { ArrowRight, Filter } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"

export const metadata = {
  title: "Technical Work | Vaibhav Saini",
  description: "Categorized technical projects by Vaibhav Saini with stack, role, design context, and build notes.",
}

export default function WorkPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="py-20">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <span className="eyebrow">Technical work</span>
                <h1 className="mt-4 max-w-5xl font-display text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.045em] text-textPrimary text-balance">
                  Project archive organized by proof, not decoration.
                </h1>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-textSecondary lg:justify-self-end">
                Each build is categorized by where it was designed, what role I played, what stack it used, and what technical idea it demonstrates.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="section-shell">
            <div className="flex flex-wrap gap-2 rounded-2xl border border-textPrimary/10 bg-white/72 p-2">
              <div className="flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white">
                <Filter size={16} />
                Categories
              </div>
              {portfolioData.projectCategories.map((category) => (
                <span key={category} className="rounded-full border border-textPrimary/10 bg-white px-4 py-2 text-sm font-bold text-textSecondary">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="section-shell">
            <div className="grid gap-5 lg:grid-cols-2">
              {portfolioData.technicalProjects.map((project, index) => (
                <article
                  key={project.title}
                  className="group surface-shell min-h-[28rem] transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="surface-core flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-accent">
                        <project.icon size={22} />
                      </div>
                      <span className="font-mono text-sm font-bold text-textSecondary/60">0{index + 1}</span>
                    </div>

                    <div className="mt-8">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-accentSoft px-3 py-1 text-xs font-black text-accent">{project.category}</span>
                        <span className="rounded-full border border-textPrimary/10 bg-white px-3 py-1 text-xs font-black text-textSecondary">{project.status}</span>
                      </div>
                      <h2 className="mt-5 font-display text-3xl font-black leading-[1] tracking-[-0.025em] text-textPrimary md:text-4xl">
                        {project.title}
                      </h2>
                      <p className="mt-4 text-sm leading-6 text-textSecondary">{project.summary}</p>
                    </div>

                    <div className="mt-7 grid gap-4 rounded-2xl border border-textPrimary/10 bg-cream p-4 md:grid-cols-3">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-textSecondary">Designed at</p>
                        <p className="mt-2 text-sm font-black text-textPrimary">{project.designedAt}</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-textSecondary">Role</p>
                        <p className="mt-2 text-sm font-black text-textPrimary">{project.role}</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-textSecondary">Year</p>
                        <p className="mt-2 text-sm font-black text-textPrimary">{project.year}</p>
                      </div>
                    </div>

                    <div className="mt-7">
                      <p className="text-sm font-black text-textPrimary">Tech used</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="rounded-full border border-textPrimary/10 bg-white px-3 py-1 text-xs font-black text-textSecondary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7">
                      <p className="text-sm font-black text-textPrimary">What it proves</p>
                      <div className="mt-3 grid gap-2">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-sm font-semibold text-textSecondary">
                            <span className="h-2 w-2 rounded-full bg-accent" />
                            {highlight}
                          </div>
                        ))}
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
            <div className="rounded-3xl border border-textPrimary/10 bg-ink p-8 text-white md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="font-display text-3xl font-black tracking-[-0.02em] md:text-5xl">
                    Have a product that needs this kind of technical structure?
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-white/68">
                    I can help shape the product, architecture, workflow, and build sequence.
                  </p>
                </div>
                <Button size="lg" variant="cream" className="group" asChild>
                  <Link href="/contact">
                    Start a technical conversation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
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
