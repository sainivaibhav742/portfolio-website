import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Github } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { BrandMark } from "@/components/layout/BrandMark"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

function projectSlug(project: (typeof portfolioData.projects)[number]) {
  return project.caseStudy.split("/").filter(Boolean).pop()
}

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: projectSlug(project),
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = portfolioData.projects.find((item) => projectSlug(item) === slug)

  if (!project) {
    return {
      title: "Project | Vaibhav Saini",
    }
  }

  return {
    title: `${project.title} | Vaibhav Saini`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Vaibhav Saini`,
      description: project.description,
      images: ["/icon-512x512.png"],
    },
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = portfolioData.projects.find((item) => projectSlug(item) === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="section-shell py-20">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-ink">
            <ArrowLeft className="h-4 w-4" />
            Projects
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <BrandMark subtitle="Project case study" />
              <div className="mt-8 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.035] text-accent">
                <project.icon className="h-7 w-7" />
              </div>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{project.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={project.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                {project.demo && (
                  <Button variant="outline" asChild>
                    <Link href={project.demo} target={project.demo.startsWith("http") ? "_blank" : undefined}>
                      Public source
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="premium-card p-6">
              <p className="eyebrow">Case study</p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dim">Status</p>
                  <p className="mt-2 text-xl font-semibold text-ink">{project.status}</p>
                  <p className="mt-2 text-sm text-muted">{project.phase} / {project.period}</p>
                  <p className="mt-1 text-sm text-muted">{project.role}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dim">Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dim">Verification</p>
                  <Link href={project.sourceUrl} target={project.sourceUrl.startsWith("http") ? "_blank" : undefined} className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    {project.sourceLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <ul className="mt-4 space-y-3">
                    {project.evidence.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
