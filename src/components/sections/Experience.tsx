"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Calendar } from "lucide-react"
import Link from "next/link"
import { portfolioData } from "@/data/portfolio"

export function Experience() {
  return (
    <section id="roles" className="py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <span className="eyebrow">Roles</span>
            <h2 className="mt-4 font-display text-3xl font-black text-textPrimary text-balance md:text-5xl">
              Operator roles that compound into the next company.
            </h2>
            <p className="mt-5 text-lg leading-8 text-textSecondary">
              This is not a job-history wall. It is the active operating context behind the founder platform: building, leading, advising, and turning technical ideas into real systems.
            </p>
          </div>

          <div className="relative ml-4 space-y-6 border-l border-textPrimary/15 md:ml-6">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-[7px] top-6 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-accentSoft" />

                <div className="surface-shell">
                  <div className="surface-core p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-black text-textPrimary">{exp.role}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-lg font-semibold text-textPrimary/80">
                        <span>{exp.company}</span>
                        {exp.url && (
                          <Link href={exp.url} target="_blank" className="inline-flex items-center gap-1 text-sm text-accent hover:text-textPrimary">
                            Visit
                            <ArrowUpRight size={14} />
                          </Link>
                        )}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-textPrimary/10 bg-cream px-3 py-1 text-sm font-semibold text-textSecondary">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-textSecondary leading-relaxed">
                    {exp.description}
                  </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
