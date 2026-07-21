import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devansh Singh Bhadauria | Backend Engineer & AI Systems Builder",
  description: "Personal portfolio and technical showcase of Devansh Singh Bhadauria. Architecting high-scale distributed backend microservices, autonomous multi-agent AI frameworks, and vector RAG systems.",
  keywords: [
    "Devansh Singh Bhadauria",
    "Backend Engineer",
    "AI Engineer",
    "Java",
    "Spring Boot",
    "Elasticsearch",
    "MongoDB Vector Search",
    "RAG",
    "Multi-Agent AI",
    "Nexizo.ai",
  ],
  authors: [{ name: "Devansh Singh Bhadauria" }],
  openGraph: {
    title: "Devansh Singh Bhadauria | Backend Engineer & AI Builder",
    description: "Architecting High-Scale Backend Systems & Autonomous AI Infrastructure",
    url: "https://devansh-bhadauria.vercel.app",
    siteName: "Devansh Singh Bhadauria Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0f17] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
