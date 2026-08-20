"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github, Menu, Moon, Search, Sun, X } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BrandMark } from "@/components/layout/BrandMark"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Articles", href: "/articles" },
  { name: "Build Logs", href: "/build-logs" },
  { name: "Resources", href: "/resources" },
  { name: "Community", href: "/#community" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [commandOpen, setCommandOpen] = React.useState(false)
  const [lightMode, setLightMode] = React.useState(false)
  const [query, setQuery] = React.useState("")

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setCommandOpen((open) => !open)
      }
      if (event.key === "Escape") {
        setCommandOpen(false)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  React.useEffect(() => {
    document.documentElement.classList.toggle("light", lightMode)
  }, [lightMode])

  const commandItems = portfolioData.commandItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-background/75 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <BrandMark compact subtitle="Founder OS" className="[&>span:last-child]:hidden sm:[&>span:last-child]:block" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-white/[0.05] hover:text-ink",
                  pathname === item.href && "bg-white/[0.07] text-ink"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => setCommandOpen(true)}
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-3 text-sm text-muted transition hover:bg-white/[0.07] hover:text-ink"
            >
              <Search className="h-4 w-4" />
              Search
              <kbd className="ml-2 rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-dim">Ctrl K</kbd>
            </button>
            <button
              aria-label="Toggle light mode"
              onClick={() => setLightMode((value) => !value)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.035] text-muted transition hover:text-ink"
            >
              {lightMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <Button variant="outline" size="sm" asChild>
              <Link href={portfolioData.personal.social.github} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>

          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.035] text-ink lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="section-shell pb-4 lg:hidden">
            <nav className="grid gap-1 rounded-2xl border border-white/10 bg-panelElevated p-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-muted hover:bg-white/[0.06] hover:text-ink"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={portfolioData.personal.social.github}
                target="_blank"
                className="rounded-xl px-3 py-3 text-sm font-medium text-muted hover:bg-white/[0.06] hover:text-ink"
              >
                GitHub
              </Link>
            </nav>
          </div>
        )}
      </header>

      {commandOpen && (
        <div className="fixed inset-0 z-[80] bg-black/70 p-4 backdrop-blur-sm" onClick={() => setCommandOpen(false)}>
          <div
            className="mx-auto mt-20 max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-panelElevated shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <BrandMark compact subtitle="Command center" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects, logs, resources..."
                className="h-10 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-dim"
              />
            </div>
            <div className="max-h-[22rem] overflow-y-auto p-2">
              {commandItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  onClick={() => setCommandOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-muted transition hover:bg-white/[0.06] hover:text-ink"
                >
                  <item.icon className="h-4 w-4 text-accent" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
