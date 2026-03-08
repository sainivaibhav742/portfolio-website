"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { portfolioData } from "@/data/portfolio"

export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-beige rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
                <div className="absolute top-20 right-10 w-72 h-72 bg-skin rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-offwhite rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
                    >
                        <div className="inline-flex items-center rounded-full border border-textPrimary/5 bg-white/50 px-3 py-1 text-sm text-textSecondary backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                            {portfolioData.hero.badge}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-textPrimary text-balance">
                            Hi, I'm {portfolioData.personal.name.split(' ')[0]}
                        </h1>

                        <p className="text-lg md:text-xl text-textSecondary max-w-xl text-balance leading-relaxed">
                            {portfolioData.personal.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                            <Button size="lg" className="group min-w-[160px]" asChild>
                                <Link href="#projects">
                                    View My Work
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                            <div className="absolute inset-0 bg-beige rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <Image
                                    src={portfolioData.personal.profileImage}
                                    alt={portfolioData.personal.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Badge 1 - GitHub */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -right-4 top-10 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20"
                            >
                                <Github size={24} className="text-textPrimary" />
                            </motion.div>

                            {/* Floating Badge 2 - LeetCode */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="absolute -left-4 bottom-10 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20"
                            >
                                <Code size={24} className="text-orange-600" />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

