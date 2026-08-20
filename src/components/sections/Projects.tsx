"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { portfolioData } from "@/data/portfolio"

export function Projects() {
  return (
    <section id="companies" className="py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-12">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="flex flex-col gap-4">
              <span className="eyebrow">Companies</span>
              <h2 className="font-display text-3xl font-black text-textPrimary text-balance md:text-5xl">
                Current companies, plus the next ventures in motion.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-textSecondary lg:justify-self-end">
              SocialMoon and BPOlytix are active parts of the broader founder journey: building, operating, and partnering where software and AI can create real business leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {portfolioData.companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="group h-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-soft">
                  <CardContent className="surface-core flex h-full flex-col overflow-hidden p-0">
                    <div className="border-b border-textPrimary/10 bg-ink p-6 text-white">
                      <div className="mb-8 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-textPrimary transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
                          <company.icon size={24} />
                        </div>
                        <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white/70">
                          {company.role}
                        </span>
                      </div>
                      <h3 className="font-display text-3xl font-black">{company.name}</h3>
                    </div>

                    <div className="flex flex-1 flex-col gap-6 p-6">
                      <p className="text-sm leading-6 text-textSecondary">{company.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {company.focus.map((focus) => (
                          <span key={focus} className="rounded-full border border-textPrimary/10 bg-cream px-2.5 py-1 text-xs font-bold text-textPrimary">
                            {focus}
                          </span>
                        ))}
                      </div>

                      {company.url ? (
                        <Button variant="outline" className="mt-auto justify-between" asChild>
                          <Link href={company.url} target="_blank">
                            Visit {company.name}
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <div className="mt-auto rounded-xl border border-dashed border-textPrimary/15 bg-cream p-4 text-sm font-semibold text-textSecondary">
                          Open to serious founder, partner, and investor conversations.
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
