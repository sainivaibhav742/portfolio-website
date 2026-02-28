"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Coding", href: "#coding-profiles" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [activeSection, setActiveSection] = React.useState("#hero")

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    React.useEffect(() => {
        const sections = navItems
            .map((item) => document.querySelector(item.href))
            .filter((section): section is Element => section !== null)

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

                if (visibleSection?.target?.id) {
                    setActiveSection(`#${visibleSection.target.id}`)
                }
            },
            {
                threshold: [0.3, 0.5, 0.7],
                rootMargin: "-80px 0px -35% 0px",
            }
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            const offset = 80 // Height of navbar + padding
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link
                    href="#"
                    onClick={(e) => scrollToSection(e, "#hero")}
                    className="text-xl font-bold tracking-tight text-textPrimary font-display"
                >
                    Vaibhav.
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            aria-current={activeSection === item.href ? "page" : undefined}
                            className={cn(
                                "text-sm font-medium transition-colors relative group",
                                activeSection === item.href ? "text-textPrimary" : "text-textSecondary hover:text-textPrimary"
                            )}
                        >
                            {item.name}
                            <span
                                className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-textPrimary transition-all",
                                    activeSection === item.href ? "w-full" : "w-0 group-hover:w-full"
                                )}
                            />
                        </Link>
                    ))}
                    <Button variant="default" size="sm" asChild>
                        <Link href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                            Let&apos;s Talk
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-textPrimary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-textPrimary/5 p-4 shadow-lg animate-in slide-in-from-top-5">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={cn(
                                    "text-base font-medium py-2 border-b border-dashed border-textPrimary/10 last:border-0",
                                    activeSection === item.href ? "text-textPrimary" : "text-textSecondary hover:text-textPrimary"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)} asChild>
                            <Link href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                                Let&apos;s Talk
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
