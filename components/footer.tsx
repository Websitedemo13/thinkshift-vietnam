import Link from "next/link"

export function Footer() {
  // Hardcoding 2025 as requested
  const currentYear = 2025 

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex-grow text-center"> {/* Use flex-grow and text-center for centering */}
            <p className="text-gray-400 text-sm">
              © {currentYear} ThinkShift Vietnam | Được phát triển bởi {" "}
              <a 
                href="https://longq.me" // Cập nhật với liên kết portfolio thực tế của bạn
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
              >
                Quách Thành Long
              </a>
            </p>
          </div>
          <nav className="flex space-x-6">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
              Giới thiệu
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
              Liên hệ
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}