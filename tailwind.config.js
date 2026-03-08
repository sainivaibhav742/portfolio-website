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
        cream: "#FFF7EE",
        beige: "#F8EFE6",
        offwhite: "#F4EDE3",
        skin: "#EDE4DA",
        textPrimary: "#1A1A1A",
        textSecondary: "#545454",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Geist", "Inter", "sans-serif"],
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