import { portfolioData } from "@/data/portfolio"

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export function GET() {
  const siteUrl = portfolioData.personal.domain
  const items = [
    ...portfolioData.articles.map((article) => ({
      title: article.title,
      description: `${article.readingTime} read about ${article.tags.join(", ")}.`,
      href: article.href,
      date: article.date,
    })),
    ...portfolioData.buildLogs.map((log) => ({
      title: log.title,
      description: log.body,
      href: "/build-logs",
      date: `${log.date}, 2026`,
    })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(portfolioData.seo.title)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(portfolioData.seo.description)}</description>
    <language>en</language>
    ${items
      .map(
        (item) => `<item>
      <title>${escapeXml(item.title)}</title>
      <link>${siteUrl}${item.href}</link>
      <guid>${siteUrl}${item.href}#${escapeXml(item.title.toLowerCase().replace(/\s+/g, "-"))}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${escapeXml(item.date)}</pubDate>
    </item>`
      )
      .join("\n    ")}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
