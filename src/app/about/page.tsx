import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { portfolioData } from "@/data/portfolio"

export const metadata = {
  title: "About | Vaibhav Saini",
  description: "About Vaibhav Saini, founder, developer, and AI engineer building products in public.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="section-shell py-20">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink md:text-7xl">
            Products, automation, writing, and public learning loops.
          </h1>
          <p className="mt-8 max-w-3xl text-2xl leading-10 tracking-[-0.03em] text-muted">
            {portfolioData.about}
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {portfolioData.capabilities.map((capability) => (
              <article key={capability.title} className="premium-card p-5">
                <capability.icon className="h-5 w-5 text-accent" />
                <h2 className="mt-5 text-2xl font-semibold text-ink">{capability.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{capability.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
