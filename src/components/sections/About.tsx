"use client"

import { portfolioData } from "@/data/portfolio"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-16">

          {/* Header & Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-textPrimary">
                {portfolioData.about.title}
              </h2>
              <p className="text-lg text-textSecondary leading-relaxed">
                {portfolioData.about.bio}
              </p>

              <div className="grid grid-cols-3 gap-4 mt-4">
                {portfolioData.about.stats.map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold text-textPrimary font-display">
                      {stat.value}
                    </span>
                    <span className="text-sm text-textSecondary mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features / Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {portfolioData.about.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white border border-textPrimary/5 shadow-soft hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-10 w-10 rounded-lg bg-beige flex items-center justify-center text-textPrimary mb-4">
                    <feature.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-textPrimary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-textSecondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Additional "My Approach" Section for Depth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-3xl bg-gradient-to-br from-skin to-beige p-8 md:p-12 overflow-hidden relative border border-textPrimary/5"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-offwhite/30 rounded-full -mr-16 -mt-16 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream/30 rounded-full -ml-16 -mb-16 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 text-textPrimary">
                  My Development Philosophy
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  I believe that great software is born at the intersection of clean code, user-centric design, and performance optimization. Every line of code I write is aimed at creating a seamless experience for the end user.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "User-First Approach",
                  "Pixel-Perfect Implementation",
                  "Accessible by Default",
                  "Performance Obsessed"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-textPrimary shrink-0" size={20} />
                    <span className="font-medium text-textPrimary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
