import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Supervisual",
  description: "Simple, powerful ideas visualized in black and white.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ScrollToTop />
          <Header />
          <main className="container mx-auto px-4 pt-16 md:pt-24 flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
