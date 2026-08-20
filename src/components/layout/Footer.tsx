import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { BrandMark } from "@/components/layout/BrandMark"

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-10">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4">
          <BrandMark subtitle="Building in public" />
          <p className="text-sm font-semibold text-ink">Building in public since 2026.</p>
          <p className="mt-2 text-sm text-muted">Made with curiosity and lots of coffee.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href={portfolioData.personal.social.github} target="_blank" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-muted transition hover:border-accent/40 hover:text-ink">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href={portfolioData.personal.social.linkedin} target="_blank" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-muted transition hover:border-accent/40 hover:text-ink">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href={portfolioData.personal.social.twitter} target="_blank" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-muted transition hover:border-accent/40 hover:text-ink">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">X</span>
          </Link>
          <Link href={`mailto:${portfolioData.personal.email}`} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-muted transition hover:border-accent/40 hover:text-ink">
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
