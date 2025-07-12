// Thay thế nội dung file Header của bạn bằng code này

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image" // Import Image từ next/image
import { usePathname } from "next/navigation" // Import hook để lấy path hiện tại
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils" // Import `cn` để nối class tiện lợi (có sẵn trong shadcn)

// Import component ThemeToggle vừa tạo
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname() // Lấy pathname hiện tại của trang

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20) // Thay đổi giá trị để hiệu ứng xuất hiện sớm hơn
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
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* 1. Logo và Tên Trang Web */}
        <Link href="/" className="flex items-center gap-3">
          {/* Thay src bằng đường dẫn đến logo của bạn */}
          <Image
            src="/logo/image.png" // Đặt logo của bạn trong thư mục /public/logo.svg
            alt="ThinkShift Vietnam Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-bold text-xl hidden sm:inline-block">
            ThinkShift
          </span>
        </Link>

        {/* 2. Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Menu chính */}
          <div className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => {
              // Kiểm tra xem link có đang active không
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    isActive ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Các nút chức năng */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Đăng nhập</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/assessment">
                Làm bài đánh giá
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
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <div className="mt-8 flex flex-col gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-lg font-medium transition-colors hover:text-primary",
                                    pathname === item.href && "text-primary"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t flex flex-col gap-4">
                        <Button variant="outline" asChild>
                            <Link href="/login">Đăng Ký / Đăng Nhập</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/assessment">
                                Làm bài đánh giá
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