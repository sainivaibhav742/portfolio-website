import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Vaibhav Saini - Full-Stack Developer & AI Specialist | Transforming Ideas Into Digital Excellence",
  description: "Expert full-stack developer specializing in React, Next.js, and AI integration. Building scalable, high-performance web applications that drive business growth. 5+ years experience delivering exceptional digital solutions.",
  keywords: "Vaibhav Saini, full-stack developer, AI specialist, React developer, Next.js expert, web development, AI integration, TypeScript, Node.js, enterprise solutions, SaaS development",
  authors: [{ name: "Vaibhav Saini" }],
  openGraph: {
    title: "Vaibhav Saini - Full-Stack Developer & AI Specialist",
    description: "Transforming ideas into digital excellence. Expert in React, Next.js, and AI integration with 5+ years of experience building scalable solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
