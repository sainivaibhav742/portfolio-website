"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Code2, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"

const proofMarks = [
  {
    label: "Active company",
    value: "SocialMoon",
    detail: "CTO & Co-founder",
  },
  {
    label: "Operating role",
    value: "BPOlytix",
    detail: "CTO",
  },
  {
    label: "Technical archive",
    value: `${portfolioData.technicalProjects.length} builds`,
    detail: "AI, platforms, automation",
  },
]

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] overflow-hidden pb-20 pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="animated-field absolute inset-0 opacity-70" />
        <div className="scanline absolute left-0 top-[22%] h-px w-full" />
        <div className="absolute left-[-18%] top-[-26%] h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-[-18%] top-[10%] h-[34rem] w-[34rem] rounded-full bg-ink/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-cream via-cream/70 to-transparent" />
      </div>

      <div className="section-shell">
        <div className="grid min-h-[calc(100dvh-8rem)] items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-5">
              <p className="w-fit border-b border-accent/40 pb-2 text-sm font-black uppercase tracking-[0.18em] text-accent">
                {portfolioData.personal.name} / Technical founder
              </p>
              <h1 className="max-w-5xl font-display text-[clamp(4.25rem,9vw,8.25rem)] font-black leading-[0.82] tracking-[-0.06em] text-textPrimary text-balance">
                I build companies through software.
              </h1>
              <p className="max-w-2xl text-xl font-medium leading-8 text-textSecondary md:text-2xl md:leading-9">
                CTO and founder building AI-first products, operating systems, and technical foundations for serious ventures.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="group min-w-[210px]" asChild>
                <Link href="/ventures">
                  Venture lab
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[210px]" asChild>
                <Link href="/work">Technical work</Link>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {proofMarks.map((item) => (
                <div key={item.label} className="border-t border-textPrimary/12 pt-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-textSecondary">{item.label}</p>
                  <p className="mt-3 font-display text-2xl font-black tracking-[-0.02em] text-textPrimary">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-textSecondary">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
            className="relative"
          >
            <div className="slow-float absolute -left-5 top-8 z-10 hidden rounded-2xl border border-white/80 bg-white/80 p-4 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.65)] backdrop-blur-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-accent">
                  <Compass size={19} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-textSecondary">Current map</p>
                  <p className="font-display text-xl font-black text-textPrimary">3 venture lanes</p>
                </div>
              </div>
            </div>

            <div className="surface-shell ambient-shadow">
              <div className="surface-core overflow-hidden bg-ink">
                <div className="relative min-h-[38rem] overflow-hidden bg-ink">
                  <Image
                    src={portfolioData.personal.profileImage}
                    alt={portfolioData.personal.name}
                    fill
                    className="object-cover object-center grayscale contrast-110"
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/42 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,transparent,rgba(11,17,32,0.28)_48%,rgba(11,17,32,0.82)_100%)]" />

                  <div className="absolute left-0 right-0 top-0 flex items-center justify-between border-b border-white/10 p-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-xs font-black uppercase tracking-[0.18em] text-white/55">Founder profile</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-white/35">@{portfolioData.personal.handle}</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                    <div className="grid gap-3 md:grid-cols-2">
                      {portfolioData.ventures.slice(0, 2).map((venture) => (
                        <Link
                          key={venture.name}
                          href="/ventures"
                          className="group rounded-2xl border border-white/12 bg-white/[0.08] p-4 backdrop-blur-md transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:bg-white/[0.13]"
                        >
                          <div className="mb-8 flex items-center justify-between">
                            <Building2 className="h-5 w-5 text-accent" />
                            <ArrowRight className="h-4 w-4 text-white/40 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-accent" />
                          </div>
                          <p className="font-display text-2xl font-black text-white">{venture.name}</p>
                          <p className="mt-1 text-sm font-semibold text-white/55">{venture.role}</p>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href="/work"
                      className="mt-3 flex items-center justify-between rounded-2xl border border-white/12 bg-accent p-4 text-ink transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:bg-accent/90"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-accent">
                          <Code2 size={19} />
                        </div>
                        <div>
                          <p className="font-display text-xl font-black">Technical work index</p>
                          <p className="text-sm font-semibold text-ink/65">Projects grouped by stack and proof</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
