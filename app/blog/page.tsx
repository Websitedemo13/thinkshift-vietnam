"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, PenTool, Calendar, User } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "AI có thể thay thế Developer không? Góc nhìn từ thực tế",
    excerpt: "Phân tích sâu về tác động của AI đến ngành phát triển phần mềm và những kỹ năng cần thiết để tồn tại.",
    author: "Quách Thành Long",
    date: "2024-01-15",
    category: "AI & Technology",
    image: "/placeholder.svg?height=200&width=400",
    slug: "ai-co-the-thay-the-developer-khong",
  },
  {
    id: 2,
    title: "Tư duy Phản biện: Kỹ năng quan trọng nhất thế kỷ 21",
    excerpt: "Tại sao tư duy phản biện lại trở thành năng lực cốt lõi trong thời đại thông tin quá tải?",
    author: "Trịnh Nam Thuận",
    date: "2024-01-10",
    category: "Soft Skills",
    image: "/placeholder.svg?height=200&width=400",
    slug: "tu-duy-phan-bien-ky-nang-quan-trong-nhat",
  },
  {
    id: 3,
    title: "Nghịch lý của thế hệ 'Thất nghiệp có bằng'",
    excerpt: "Tại sao có tấm bằng đại học nhưng vẫn khó tìm việc? Phân tích từ góc độ thị trường lao động.",
    author: "Quách Thành Long",
    date: "2024-01-05",
    category: "Career Development",
    image: "/placeholder.svg?height=200&width=400",
    slug: "nghich-ly-the-he-that-nghiep-co-bang",
  },
  {
    id: 4,
    title: "Làm thế nào để học một kỹ năng mới hiệu quả trong 30 ngày?",
    excerpt: "Phương pháp khoa học để tiếp thu kiến thức mới nhanh chóng và bền vững.",
    author: "Trịnh Nam Thuận",
    date: "2023-12-28",
    category: "Learning",
    image: "/placeholder.svg?height=200&width=400",
    slug: "hoc-ky-nang-moi-hieu-qua-trong-30-ngay",
  },
  {
    id: 5,
    title: "Tương lai của Remote Work tại Việt Nam",
    excerpt: "Xu hướng làm việc từ xa và những thay đổi cần thiết trong tư duy quản lý.",
    author: "Quách Thành Long",
    date: "2023-12-20",
    category: "Future of Work",
    image: "/placeholder.svg?height=200&width=400",
    slug: "tuong-lai-remote-work-tai-viet-nam",
  },
  {
    id: 6,
    title: "Xây dựng Personal Brand trong thời đại số",
    excerpt: "Chiến lược xây dựng thương hiệu cá nhân để nổi bật trong thị trường lao động cạnh tranh.",
    author: "Trịnh Nam Thuận",
    date: "2023-12-15",
    category: "Personal Branding",
    image: "/placeholder.svg?height=200&width=400",
    slug: "xay-dung-personal-brand-thoi-dai-so",
  },
]

const categories = [
  "Tất cả",
  "AI & Technology",
  "Soft Skills",
  "Career Development",
  "Learning",
  "Future of Work",
  "Personal Branding",
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Tất cả" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-bold tracking-tighter text-4xl md:text-5xl mb-6">Blog ThinkShift Vietnam</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Khám phá những góc nhìn sâu sắc về tương lai nghề nghiệp, kỹ năng cần thiết và xu hướng công nghệ.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Tìm kiếm bài viết..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Community Contribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <PenTool className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-4">Dành cho Cộng đồng</h3>
              <p className="text-muted-foreground mb-6">
                Bạn có kinh nghiệm, góc nhìn độc đáo về sự nghiệp và công nghệ? Hãy chia sẻ với cộng đồng ThinkShift
                Vietnam!
              </p>
              <Button variant="outline">
                Gửi bài viết
                <PenTool className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4">{post.category}</Badge>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString("vi-VN")}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Không tìm thấy bài viết nào phù hợp với từ khóa "{searchTerm}"
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
