import { GitCommitHorizontal } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { portfolioData } from "@/data/portfolio"

export const metadata = {
  title: "Build Logs | Vaibhav Saini",
  description: "Chronological build-in-public updates from Vaibhav Saini.",
}

export default function BuildLogsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="section-shell py-20">
          <p className="eyebrow">Build logs</p>
          <h1 className="mt-4 max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-ink md:text-7xl">
            A GitHub-commit style feed for startup experiments.
          </h1>
          <div className="mt-10 overflow-hidden rounded-2xl border border-borderSubtle bg-panel">
            {portfolioData.buildLogs.map((log) => (
              <article key={log.title} className="grid gap-4 border-b border-borderSubtle p-5 last:border-b-0 md:grid-cols-[120px_1fr]">
                <p className="font-mono text-sm text-dim">{log.date}</p>
                <div>
                  <div className="flex items-center gap-2">
                    <GitCommitHorizontal className="h-4 w-4 text-accent" />
                    <h2 className="font-semibold text-ink">{log.title}</h2>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{log.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
