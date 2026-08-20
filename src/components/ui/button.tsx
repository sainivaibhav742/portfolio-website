import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "border border-accent/70 bg-accent text-white shadow-[0_18px_50px_-28px_rgba(99,102,241,0.9)] hover:-translate-y-0.5 hover:bg-accent/90",
                destructive:
                    "bg-red-500 text-slate-50 hover:bg-red-500/90",
                outline:
                    "border border-white/10 bg-white/[0.035] text-ink hover:-translate-y-0.5 hover:bg-white/[0.07]",
                secondary:
                    "border border-accent/20 bg-accentSoft text-accent hover:bg-accentSoft/75",
                ghost: "text-muted hover:bg-white/[0.06] hover:text-ink",
                link: "text-ink underline-offset-4 hover:underline",
                cream: "border border-white/10 bg-panelElevated text-ink hover:bg-white/[0.08]",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 px-3.5",
                lg: "h-12 px-7",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
