import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ClientWrapper from "@/components/ClientWrapper" // ✅ thêm dòng này

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ThinkShift Vietnam - Định vị lại năng lực trong thời đại AI",
  description:
    "Nền tảng nghiên cứu và phát triển sự nghiệp, giúp người trẻ Việt Nam khám phá giá trị không thể thay thế trong thời đại AI.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ClientWrapper /> {/* ✅ render FloatingAI đúng cách */}
        </ThemeProvider>
      </body>
    </html>
  )
}
