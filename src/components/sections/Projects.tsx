"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { portfolioData } from "@/data/portfolio"

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-textPrimary">
              Featured Projects
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              Here are some of the projects I've worked on. Each project is a unique challenge that I've solved with code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 border-textPrimary/5">
                  <div className="h-48 bg-beige w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-textPrimary/5 group-hover:bg-textPrimary/10 transition-colors" />
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-textSecondary/20 font-display text-4xl font-bold">
                      {project.title[0]}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-textSecondary text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium bg-cream text-textPrimary px-2 py-1 rounded-md border border-textPrimary/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2 pt-0">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={project.demoLink} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href={project.codeLink} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
