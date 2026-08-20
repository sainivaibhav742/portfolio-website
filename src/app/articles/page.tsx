import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { portfolioData } from "@/data/portfolio"

export const metadata = {
  title: "Articles | Vaibhav Saini",
  description: "Articles about AI products, building in public, founder systems, and developer workflows.",
}

export default function ArticlesPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="section-shell py-20">
          <p className="eyebrow">Articles</p>
          <h1 className="mt-4 max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink md:text-7xl">
            Notes from the product lab.
          </h1>
          <div className="mt-10 divide-y divide-borderSubtle rounded-2xl border border-borderSubtle bg-panel">
            {portfolioData.articles.map((article) => (
              <Link key={article.title} href={article.href} className="block p-5 transition hover:bg-white/[0.035]">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{article.title}</h2>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-dim">
                  <span>{article.date}</span><span>/</span><span>{article.readingTime}</span><span>/</span><span>{article.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
