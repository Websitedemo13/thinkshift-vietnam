"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader, // Thêm để đảm bảo accessibility
  SheetTitle,  // Thêm để đảm bảo accessibility
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // SỬA ĐỔI: Kiểm tra ngay từ đầu khi component mount
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    checkScroll(); // Gọi ngay một lần

    window.addEventListener("scroll", checkScroll)
    return () => window.removeEventListener("scroll", checkScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/blog", label: "Blog" },
    { href: "/results", label: "Báo cáo" },
    { href: "/faq", label: "FAQ" },
  ]

  // SỬA ĐỔI: Dùng isScrolled để quyết định màu chữ
  const textColorClass = isScrolled ? "text-foreground" : "text-white"
  const textMutedColorClass = isScrolled ? "text-foreground/60" : "text-white/70"
  const hoverTextColorClass = isScrolled ? "hover:text-foreground/80" : "hover:text-white"

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* 1. Logo và Tên Trang Web */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/image.png"
            alt="ThinkShift Vietnam Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className={cn(
            "font-bold text-xl hidden sm:inline-block transition-colors",
            // SỬA ĐỔI: Áp dụng màu chữ động
            textColorClass
          )}>
            ThinkShift
          </span>
        </Link>

        {/* 2. Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Menu chính */}
          <div className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    // SỬA ĐỔI: Áp dụng màu chữ động cho các trạng thái
                    hoverTextColorClass,
                    isActive ? textColorClass : textMutedColorClass
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Các nút chức năng */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild className={cn(
              // SỬA ĐỔI: Thay đổi style của nút outline khi chưa cuộn
              !isScrolled && "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
            )}>
              <Link href="/login">Đăng nhập</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/assessment">
                Bắt đầu Đánh giá
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>

        {/* 3. Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
                <SheetTrigger asChild>
                    {/* SỬA ĐỔI: Icon Menu cũng cần đổi màu */}
                    <Button variant="ghost" size="icon" className={cn(textColorClass, "hover:bg-white/10")}>
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    {/* SỬA ĐỔI: Thêm Header và Title cho Sheet để đảm bảo accessibility */}
                    <SheetHeader className="text-left">
                        <SheetTitle>Điều hướng</SheetTitle>
                    </SheetHeader>
                    <div className="mt-8 flex flex-col gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-lg font-medium transition-colors hover:text-primary",
                                    pathname === item.href ? "text-primary" : "text-foreground"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t flex flex-col gap-4">
                        <Button variant="outline" asChild>
                            <Link href="/login">Đăng nhập</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/assessment">
                                Bắt đầu Đánh giá
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </motion.header>
  )
}