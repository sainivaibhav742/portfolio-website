"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-textPrimary">
                            Work Experience
                        </h2>
                        <p className="text-lg text-textSecondary leading-relaxed">
                            My professional journey and the companies I've had the privilege to work with.
                        </p>
                    </div>

                    <div className="relative border-l border-textPrimary/10 ml-4 md:ml-6 space-y-12">
                        {portfolioData.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-textPrimary ring-4 ring-beige" />

                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                                        <h3 className="text-xl font-bold text-textPrimary">{exp.role}</h3>
                                        <span className="hidden sm:block text-textSecondary">•</span>
                                        <span className="text-lg font-medium text-textPrimary/80">{exp.company}</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-textSecondary">
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>

                                    <p className="mt-2 text-textSecondary leading-relaxed max-w-2xl">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
