import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { portfolioData } from "@/data/portfolio"

export const metadata = {
  title: "Resources | Vaibhav Saini",
  description: "Free templates, prompts, boilerplates, automation workflows, and developer tools.",
}

export default function ResourcesPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="section-shell py-20">
          <p className="eyebrow">Resources</p>
          <h1 className="mt-4 max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink md:text-7xl">
            Free systems for builders.
          </h1>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {portfolioData.resources.map((resource) => (
              <article key={resource.title} className="premium-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{resource.type}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink">{resource.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{resource.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
