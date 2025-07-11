import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} ThinkShift Vietnam | Được phát triển bởi Quách Thành Long
            </p>
          </div>
          <nav className="flex space-x-6">
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              Giới thiệu
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Liên hệ
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
