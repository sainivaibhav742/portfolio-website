"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"

export function Skills() {
  return (
    <section id="build" className="py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-12">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="flex flex-col gap-4">
              <span className="eyebrow">Build with me</span>
              <h2 className="font-display text-3xl font-black text-textPrimary text-balance md:text-5xl">
                Technical leverage for founders moving from idea to execution.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-textSecondary lg:justify-self-end">
              I help shape the product, choose the technical path, and build the systems that let a serious idea become a working company.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.founderFocus.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Card className="group h-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-soft">
                  <CardContent className="surface-core flex h-full flex-col gap-5 p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-accent transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-accent group-hover:text-ink">
                      <item.icon size={21} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-black text-textPrimary">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-textSecondary">{item.description}</p>
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
