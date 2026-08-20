"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react"
import Link from "next/link"
import { portfolioData } from "@/data/portfolio"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-textPrimary/10 bg-ink shadow-soft"
        >
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <span className="eyebrow text-accentSoft">Connect</span>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-black text-white text-balance md:text-6xl">
                Are you building something?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                If you are a founder, client, partner, or investor thinking through a serious product, I am open to focused conversations about what should be built and how to move it into the world.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="border-accent bg-accent text-textPrimary hover:bg-accent/90" asChild>
                  <Link href={`mailto:${portfolioData.personal.email}?subject=Building something with Vaibhav`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email Vaibhav
                  </Link>
                </Button>
                <Button size="lg" variant="cream" asChild>
                  <Link href={portfolioData.personal.social.linkedin} target="_blank">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Investor / Partner Conversation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/[0.04] p-8 md:p-12 lg:border-l lg:border-t-0">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-accentSoft">Good reasons to reach out</p>
                  <div className="mt-4 flex flex-col gap-3">
                    {portfolioData.contactIntents.map((intent) => (
                      <div key={intent} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/80">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-accent" />
                        <span>{intent}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Card className="border-white/10 bg-white/8 text-white">
                  <CardContent className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-sm text-white/60">Primary identity</p>
                    <p className="mt-2 font-display text-2xl font-black">{portfolioData.personal.name}</p>
                    <p className="mt-1 text-accentSoft">@{portfolioData.personal.handle}</p>
                    <Link href={`mailto:${portfolioData.personal.email}`} className="mt-4 block break-all text-sm text-white/75 hover:text-accent">
                      {portfolioData.personal.email}
                    </Link>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-3 gap-3">
                  <Button variant="cream" size="icon" asChild>
                    <Link href={portfolioData.personal.social.github} target="_blank" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="cream" size="icon" asChild>
                    <Link href={portfolioData.personal.social.linkedin} target="_blank" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="cream" size="icon" asChild>
                    <Link href={portfolioData.personal.social.twitter} target="_blank" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
