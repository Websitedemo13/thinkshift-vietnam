"use client"

import { useState, useEffect, MouseEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const pathname = usePathname()

  useEffect(() => {
    const checkScroll = () => setIsScrolled(window.scrollY > 10)
    checkScroll()
    window.addEventListener("scroll", checkScroll, { passive: true })
    return () => window.removeEventListener("scroll", checkScroll)
  }, [])

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const navItems = [
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/blog", label: "Blog" },
    { href: "/results", label: "Báo cáo" },
    { href: "/contact", label: "Liên Hệ" },
  ]

  const textColorClass = isScrolled ? "text-foreground" : "text-white"
  const textMutedColorClass = isScrolled ? "text-foreground/70" : "text-white/80"

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out group/header",
        isScrolled
          ? "shadow-lg bg-[#f6f5f1]/90 dark:bg-gradient-to-br dark:from-[#0f172a]/90 dark:via-[#0c1a2b]/90 dark:to-[#071422]/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover/header:opacity-100"
        style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* THAY ĐỔI: Tăng chiều cao header để cân đối với logo mới */}
      <div className="container mx-auto px-4 h-24 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-4 z-10 group"> {/* Tăng gap */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Image
              src="/logo/image.png"
              alt="ThinkShift Vietnam Logo"
              // THAY ĐỔI 1: Tăng kích thước logo
              width={56}
              height={56}
              className={cn(
                "rounded-lg transition-all duration-300",
                "drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              )}
            />
          </motion.div>
          {/* THAY ĐỔI 2: Tách màu cho chữ "ThinkShift" */}
          <span className="font-bold text-2xl hidden sm:inline-block"> {/* Tăng cỡ chữ */}
            <span className={cn("transition-colors duration-300", textColorClass)}>
              Think
            </span>
            <span className="text-cyan-400">Shift</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 z-10">
          <div
            className="relative flex items-center gap-2 text-sm font-medium"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-1.5 transition-colors duration-300 z-10",
                    isActive ? (isScrolled ? "text-foreground" : "text-white") : textMutedColorClass,
                    !isActive && hoveredItem === item.href ? (isScrolled ? "text-foreground" : "text-white") : ""
                  )}
                  onMouseEnter={() => setHoveredItem(item.href)}
                >
                  {item.label}
                  {(isActive || hoveredItem === item.href) && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-neutral-500/10"
                      layoutId="hover-capsule"
                      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild className={cn(
              !isScrolled && "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
            )}>
              <Link href="/login">Đăng nhập</Link>
            </Button>
            <Button size="sm" asChild className="group/cta">
              <Link href="/assessment">
                Bắt đầu Đánh giá
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2 z-10">
            {/* ... code mobile nav không đổi ... */}
        </div>
        
        <div
          className={cn(
            "absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400",
            "transition-opacity duration-500",
            isScrolled ? "opacity-50 dark:opacity-70" : "opacity-0"
          )}
          aria-hidden="true"
        />
      </div>
    </motion.header>
  )
}