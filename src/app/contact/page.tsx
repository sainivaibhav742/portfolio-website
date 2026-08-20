import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"

export const metadata = {
  title: "Contact | Vaibhav Saini",
  description: "Contact Vaibhav Saini for consulting, partnerships, speaking, and AI product systems.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="section-shell py-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink md:text-7xl">
            Consulting, partnerships, speaking, or building something serious.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Keep the first message short: what you are building, what is stuck, and what a good outcome looks like.
          </p>
        </section>

        <section className="section-shell pb-24">
          <div className="grid gap-4 lg:grid-cols-3">
            {portfolioData.contactPaths.map((path) => (
              <Link key={path.title} href={path.href} className="premium-card group min-h-64 p-5 transition hover:-translate-y-1 hover:border-accent/35">
                <Mail className="h-5 w-5 text-accent" />
                <h2 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-ink">{path.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{path.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Write email
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 premium-card p-6">
            <form className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
              <input placeholder="Email" className="h-12 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm outline-none placeholder:text-dim focus:border-accent/50" />
              <input placeholder="What are you building?" className="h-12 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm outline-none placeholder:text-dim focus:border-accent/50" />
              <Button type="submit">Send signal</Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
