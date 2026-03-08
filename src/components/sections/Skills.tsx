"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-textPrimary">
              Skills & Technologies
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              A curated list of technologies I use to build amazing digital products.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioData.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:border-textPrimary/20 transition-colors cursor-default">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-medium text-textPrimary">{skill.name}</span>
                    <span className="text-xs text-textSecondary bg-beige px-2 py-1 rounded-full">
                      {skill.category}
                    </span>
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
