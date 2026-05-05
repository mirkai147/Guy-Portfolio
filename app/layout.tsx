import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김가이 | 포트폴리오",
  description: "게임 QA 엔지니어 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        
        {/* 헤더 */}
        <Header />

        {/* 메인 */}
        <main className="pt-[72px] max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>

      </body>
    </html>
  );
}