"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/blog", label: "Blog" },
    { href: "/results", label: "Kết quả" },
  ]

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TS</span>
          </div>
          <span className="font-bold text-xl">ThinkShift Vietnam</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="outline" asChild>
            <Link href="/assessment">
              Làm bài đánh giá
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-4" asChild>
                <Link href="/assessment">
                  Làm bài đánh giá
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
