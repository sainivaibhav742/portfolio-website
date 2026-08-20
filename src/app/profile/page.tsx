import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"

export const metadata = {
  title: "Operating Profile | Vaibhav Saini",
  description: "The operating profile, principles, and CTO approach of Vaibhav Saini.",
}

export default function ProfilePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="py-20">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <span className="eyebrow">Operating profile</span>
                <h1 className="mt-4 max-w-5xl font-display text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.045em] text-textPrimary text-balance">
                  CTO brain, founder instincts, product taste.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-textSecondary">
                  I work best where product clarity, technical strategy, and business usefulness need to meet quickly.
                </p>
              </div>

              <div className="surface-shell ambient-shadow">
                <div className="surface-core overflow-hidden">
                  <div className="relative aspect-[5/4] bg-ink">
                    <Image
                      src={portfolioData.personal.profileImage}
                      alt={portfolioData.personal.name}
                      fill
                      className="object-cover"
                      sizes="640px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="font-display text-3xl font-black text-white">{portfolioData.personal.name}</p>
                      <p className="mt-2 text-accent">{portfolioData.personal.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="section-shell">
            <div className="grid gap-5 md:grid-cols-2">
              {portfolioData.operatingProfile.map((item) => (
                <article key={item.title} className="surface-shell">
                  <div className="surface-core h-full p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-accent">
                      <item.icon size={22} />
                    </div>
                    <h2 className="mt-8 font-display text-3xl font-black tracking-[-0.02em] text-textPrimary">{item.title}</h2>
                    <p className="mt-4 text-sm leading-6 text-textSecondary">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <span className="eyebrow">Principles</span>
                <h2 className="mt-4 font-display text-4xl font-black leading-[1] tracking-[-0.03em] text-textPrimary md:text-6xl">
                  How I decide what to build.
                </h2>
              </div>
              <div className="grid gap-3">
                {portfolioData.principles.map((principle) => (
                  <div key={principle.title} className="rounded-2xl border border-textPrimary/10 bg-white/78 p-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accentSoft text-accent">
                        <principle.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-black text-textPrimary">{principle.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-textSecondary">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="section-shell">
            <div className="rounded-3xl border border-textPrimary/10 bg-ink p-8 text-white md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="font-display text-3xl font-black tracking-[-0.02em] md:text-5xl">
                    If your idea needs technical judgment, not just implementation, we should talk.
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-white/68">
                    I am open to founder, partner, client, and investor conversations where the product and technical path matter.
                  </p>
                </div>
                <Button size="lg" variant="cream" className="group" asChild>
                  <Link href="/contact">
                    Open contact paths
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
