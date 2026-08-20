import Image from "next/image"
import { portfolioData } from "@/data/portfolio"
import { cn } from "@/lib/utils"

type BrandMarkProps = {
  showTitle?: boolean
  subtitle?: string
  compact?: boolean
  className?: string
}

export function BrandMark({
  showTitle = true,
  subtitle = portfolioData.personal.title,
  compact = false,
  className,
}: BrandMarkProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-xl border border-accent/35 bg-accent/10 shadow-[0_0_28px_rgba(99,102,241,0.18)]",
          compact ? "h-8 w-8" : "h-10 w-10"
        )}
      >
        <Image
          src={portfolioData.personal.avatarImage}
          alt={`${portfolioData.personal.name} avatar`}
          fill
          className="object-cover"
          sizes={compact ? "32px" : "40px"}
          priority={compact}
        />
      </span>
      {showTitle && (
        <span className="min-w-0 leading-tight">
          <span className="block truncate font-semibold tracking-tight text-ink">
            {portfolioData.personal.name}
          </span>
          <span className="block truncate text-[11px] font-medium text-muted">
            {subtitle}
          </span>
        </span>
      )}
    </span>
  )
}
