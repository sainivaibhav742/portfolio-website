import { MetadataRoute } from "next"
import { portfolioData } from "@/data/portfolio"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vaibhavsaini.in"
  const pages = ["", "/projects", "/articles", "/build-logs", "/resources", "/about", "/contact"]
  const projectPages = portfolioData.projects.map((project) => project.caseStudy)
  const articlePages = portfolioData.articles.map((article) => article.href)

  return [
    ...[...pages, ...projectPages, ...articlePages].map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
    })),
  ]
}
