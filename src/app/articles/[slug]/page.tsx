import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { BrandMark } from "@/components/layout/BrandMark"
import { portfolioData } from "@/data/portfolio"

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

function articleSlug(article: (typeof portfolioData.articles)[number]) {
  return article.href.split("/").filter(Boolean).pop()
}

export function generateStaticParams() {
  return portfolioData.articles.map((article) => ({
    slug: articleSlug(article),
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = portfolioData.articles.find((item) => articleSlug(item) === slug)

  if (!article) {
    return {
      title: "Article | Vaibhav Saini",
    }
  }

  return {
    title: `${article.title} | Vaibhav Saini`,
    description: `${article.readingTime} read about ${article.tags.join(", ")}.`,
    openGraph: {
      title: `${article.title} | Vaibhav Saini`,
      description: `${article.readingTime} read about ${article.tags.join(", ")}.`,
      images: ["/icon-512x512.png"],
    },
  }
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = portfolioData.articles.find((item) => articleSlug(item) === slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <article className="section-shell max-w-4xl py-20">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-ink">
            <ArrowLeft className="h-4 w-4" />
            Articles
          </Link>
          <div className="mt-10">
            <BrandMark subtitle="Article by Vaibhav" />
            <h1 className="mt-8 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink md:text-7xl">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-dim">
              <span>{article.date}</span>
              <span>/</span>
              <span>{article.readingTime}</span>
              <span>/</span>
              <span>{article.status}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-accentSoft px-3 py-1.5 text-sm font-medium text-accent">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-invert mt-12 max-w-none rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-muted">
            <p>
              This article page is ready for MDX content. It keeps the premium founder OS theme, author identity, reading metadata, and tag structure intact.
            </p>
            <p>
              The final article can include code blocks, Mermaid diagrams, notes from experiments, and public build updates without changing the page shell.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
