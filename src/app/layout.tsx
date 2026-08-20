import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.personal.domain),
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "icon", url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    url: portfolioData.personal.domain,
    siteName: "Vaibhav Saini",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: `${portfolioData.personal.name} avatar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    creator: `@${portfolioData.personal.handle}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioData.personal.name,
  alternateName: portfolioData.personal.handle,
  url: portfolioData.personal.domain,
  jobTitle: portfolioData.personal.title,
  email: `mailto:${portfolioData.personal.email}`,
  sameAs: [
    portfolioData.personal.social.github,
    portfolioData.personal.social.linkedin,
    portfolioData.personal.social.twitter,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          "min-h-[100dvh] bg-background font-sans antialiased text-ink"
        )}
      >
        <div className="fixed left-0 right-0 top-0 z-[60] h-0.5 bg-accent reading-progress" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
