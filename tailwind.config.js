/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#050507",
        panel: "#0A0A0F",
        panelElevated: "#101018",
        borderSubtle: "#242433",
        ink: "#F8FAFC",
        muted: "#A1A1AA",
        dim: "#71717A",
        accent: "#6366F1",
        accentSoft: "rgba(99, 102, 241, 0.14)",
        cream: "#0A0A0F",
        beige: "#101018",
        offwhite: "#F8FAFC",
        skin: "#6366F1",
        textPrimary: "#F8FAFC",
        textSecondary: "#A1A1AA",
      },
      fontFamily: {
        sans: ["Geist", "Satoshi", "Aptos", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Geist", "Satoshi", "Aptos Display", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}
