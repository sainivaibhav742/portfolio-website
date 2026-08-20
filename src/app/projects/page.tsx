import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { portfolioData } from "@/data/portfolio"

export const metadata = {
  title: "Projects | Vaibhav Saini",
  description: "AI products, open source tools, automation systems, and startup systems built in public.",
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="section-shell py-20">
          <p className="eyebrow">Projects</p>
          <h1 className="mt-4 max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink md:text-7xl">
            Products at different stages of the shipping journey.
          </h1>
        </section>
        <section className="section-shell grid gap-4 pb-24 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.projects.map((project) => (
            <article key={project.title} className="premium-card flex min-h-[22rem] flex-col p-5">
              <div className="flex items-start justify-between">
                <project.icon className="h-5 w-5 text-accent" />
                <span className="rounded-full bg-accentSoft px-2.5 py-1 text-xs font-medium text-accent">{project.status}</span>
              </div>
              <h2 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-ink">{project.title}</h2>
              <p className="mt-3 flex-grow text-sm leading-6 text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted">{item}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-4 text-sm font-medium">
                <Link href={project.github} target="_blank" className="text-muted hover:text-ink">GitHub</Link>
                {project.demo ? (
                  <Link href={project.demo} target={project.demo.startsWith("http") ? "_blank" : undefined} className="text-muted hover:text-ink">Public source</Link>
                ) : (
                  <span className="text-dim">No public demo yet</span>
                )}
                <Link href={project.caseStudy} className="inline-flex items-center gap-1 text-accent">
                  Case Study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
