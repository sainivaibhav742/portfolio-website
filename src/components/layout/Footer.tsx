import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function Footer() {
  return (
    <footer className="bg-white border-t border-textPrimary/5 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold font-display text-textPrimary">Vaibhav.</span>
          <p className="text-sm text-textSecondary">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href={portfolioData.personal.social.github} target="_blank" className="text-textSecondary hover:text-textPrimary transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href={portfolioData.personal.social.linkedin} target="_blank" className="text-textSecondary hover:text-textPrimary transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href={portfolioData.personal.social.twitter} target="_blank" className="text-textSecondary hover:text-textPrimary transition-colors">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href={`mailto:${portfolioData.personal.email}`} className="text-textSecondary hover:text-textPrimary transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        <div className="text-sm text-textSecondary text-center md:text-right">
          Crafted with <span className="text-red-400">❤️</span> using Next.js + React
        </div>
      </div>
    </footer>
  )
}
