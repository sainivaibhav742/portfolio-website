"use client"

import { portfolioData } from "@/data/portfolio"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <div className="surface-shell">
          <div className="surface-core grid gap-12 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <span className="eyebrow">About</span>
            <h2 className="font-display text-3xl font-black text-textPrimary text-balance md:text-5xl">
              Founder mindset, CTO execution, product-first engineering.
            </h2>
            <p className="text-lg leading-8 text-textSecondary">
              I build at the intersection of product clarity, technical systems, and practical AI. My work is not limited to one company: SocialMoon and BPOlytix are current proof points in a broader journey of founding, operating, and backing new ventures.
            </p>
            <p className="text-lg leading-8 text-textSecondary">
              The work I enjoy most starts with a serious question: what are you building, why should it exist, and what technical path gets it into the world without wasting momentum?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {portfolioData.snapshot.map((item) => (
              <div key={item.label} className="rounded-xl border border-textPrimary/10 bg-cream p-5 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:border-accent/35 hover:bg-white">
                <p className="text-xs font-bold uppercase tracking-wide text-textSecondary">{item.label}</p>
                <h3 className="mt-3 font-display text-2xl font-black text-textPrimary">{item.value}</h3>
                <p className="mt-2 text-sm leading-6 text-textSecondary">{item.detail}</p>
              </div>
            ))}
          </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 rounded-2xl border border-textPrimary/10 bg-ink p-6 shadow-soft md:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="eyebrow text-accentSoft">Operating principles</span>
              <h3 className="mt-3 font-display text-2xl font-black text-white md:text-3xl">
                How I think about building.
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {portfolioData.principles.map((principle) => (
                <div key={principle.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent text-textPrimary">
                    <principle.icon size={20} />
                  </div>
                  <h4 className="font-bold text-white">{principle.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/70">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
