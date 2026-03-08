"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Download, ExternalLink } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-cream/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-textPrimary">
              Let's Connect
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              Always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-textPrimary/10 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-beige to-cream flex items-center justify-center text-textPrimary group-hover:scale-110 transition-transform">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-textPrimary mb-1 text-sm uppercase tracking-wide">Email</h3>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-textSecondary hover:text-textPrimary transition-colors text-sm break-all"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="mt-auto text-sm text-textSecondary hover:text-textPrimary flex items-center gap-1 transition-colors"
                  >
                    Send Email
                    <ExternalLink size={14} />
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-textPrimary/10 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-beige to-cream flex items-center justify-center text-textPrimary group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-textPrimary mb-1 text-sm uppercase tracking-wide">Phone</h3>
                    <a
                      href={`tel:${portfolioData.personal.phone}`}
                      className="text-textSecondary hover:text-textPrimary transition-colors"
                    >
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="mt-auto text-sm text-textSecondary hover:text-textPrimary flex items-center gap-1 transition-colors"
                  >
                    Call Now
                    <ExternalLink size={14} />
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-textPrimary/10 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-beige to-cream flex items-center justify-center text-textPrimary group-hover:scale-110 transition-transform">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-textPrimary mb-1 text-sm uppercase tracking-wide">Location</h3>
                    <p className="text-textSecondary">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-sm">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-green-600 font-medium">Available</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Social Links & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto w-full"
          >
            <Card className="border-textPrimary/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-textPrimary mb-6 text-center">Connect on Social Media</h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <Link
                    href={portfolioData.personal.social.github}
                    target="_blank"
                    className="group flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-lg transition-all duration-300"
                  >
                    <Github size={22} />
                    <span className="font-semibold">GitHub</span>
                  </Link>

                  <Link
                    href={portfolioData.personal.social.linkedin}
                    target="_blank"
                    className="group flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg transition-all duration-300"
                  >
                    <Linkedin size={22} />
                    <span className="font-semibold">LinkedIn</span>
                  </Link>

                  <Link
                    href={portfolioData.personal.social.twitter}
                    target="_blank"
                    className="group flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:shadow-lg transition-all duration-300"
                  >
                    <Twitter size={22} />
                    <span className="font-semibold">Twitter</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Testimonial */}
          {portfolioData.testimonials.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="bg-gradient-to-br from-cream to-beige/50 border-none shadow-md">
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="text-4xl text-textPrimary/20">"</div>
                    <p className="text-lg text-textPrimary italic leading-relaxed">
                      {portfolioData.testimonials[0].quote}
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="h-12 w-12 rounded-full bg-textPrimary/10 flex items-center justify-center text-textPrimary font-bold text-lg">
                        {portfolioData.testimonials[0].author.charAt(0)}
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-textPrimary">{portfolioData.testimonials[0].author}</p>
                        <p className="text-sm text-textSecondary">{portfolioData.testimonials[0].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
