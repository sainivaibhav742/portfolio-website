"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
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
                            className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-textPrimary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <Button variant="default" size="sm" asChild>
                        <Link href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                            Let's Talk
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-textPrimary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                                className="text-base font-medium text-textSecondary hover:text-textPrimary py-2 border-b border-dashed border-textPrimary/10 last:border-0"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)} asChild>
                            <Link href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                                Let's Talk
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
