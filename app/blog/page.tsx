// app/blog/page.tsx

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, ArrowRight, Frown, Sparkles } from "lucide-react"
import Link from "next/link"

// SỬA LỖI 1: Dùng đường dẫn tương đối để đảm bảo TypeScript tìm thấy module.
// SỬA LỖI 2: Import kiểu 'Post' để sử dụng trong code, tránh lỗi 'any'.
import { blogPosts, type Post } from "@/data/posts";

// Dữ liệu các danh mục, có thể giữ nguyên ở đây
const categories = [ "Tất cả", "AI & Technology", "Soft Skills", "Career Development", "Learning", "Future of Work", "Personal Branding" ];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  // Logic lọc bài viết
  const filteredPosts = blogPosts.filter((post: Post) => { // SỬA LỖI 2: Thêm kiểu dữ liệu 'Post' cho tham số 'post'
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tất cả" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Tách bài viết nổi bật và các bài viết khác
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const otherPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

  return (
    <div className="bg-neutral-950 text-neutral-50 min-h-screen antialiased">
      <div className="container mx-auto px-4 pt-24 pb-20 sm:pt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="font-bold tracking-tighter text-4xl md:text-6xl mb-4">
            Think<span className="text-cyan-400">Shift</span> Insights
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Hành trình tri thức của bạn bắt đầu tại đây. Khám phá những phân tích sâu sắc định hình tương lai.
          </p>
        </motion.div>
        
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-16 max-w-3xl mx-auto"
        >
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
            <Input
              placeholder="Tìm kiếm ý tưởng, chủ đề bạn quan tâm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-6 bg-neutral-900 border-neutral-700 text-base text-neutral-200 focus:ring-cyan-500 focus:border-cyan-500 rounded-lg"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-200 rounded-full
                  ${selectedCategory === category
                    ? 'bg-cyan-400 text-neutral-900 font-semibold hover:bg-cyan-300'
                    : 'bg-neutral-800/50 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Bố cục chính cho các bài viết */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredPosts.length > 0 ? (
              <motion.div key={selectedCategory + searchTerm}>
                {/* Featured Post */}
                {featuredPost && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="mb-12 group"
                  >
                    <Link href={`/blog/${featuredPost.slug}`} passHref>
                      <Card className="grid md:grid-cols-2 overflow-hidden bg-neutral-900 border-neutral-800 hover:border-cyan-400/50 transition-colors duration-300 shadow-lg">
                        <div className="relative min-h-[250px] md:h-auto overflow-hidden">
                          <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                          <Badge variant="secondary" className="mb-4 bg-cyan-900/50 text-cyan-300 border-none w-fit">Bài viết nổi bật</Badge>
                          <h2 className="font-bold text-2xl md:text-3xl mb-4 text-neutral-100 group-hover:text-cyan-400 transition-colors">{featuredPost.title}</h2>
                          <p className="text-neutral-400 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-neutral-500 mt-auto">
                            <div className="flex items-center gap-2"><User className="h-4 w-4" />{featuredPost.author}</div>
                            <div className="flex items-center gap-2"><Calendar className="h-4 w-4" />{new Date(featuredPost.date).toLocaleDateString("vi-VN")}</div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                )}
                
                {/* Other Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherPosts.map((post, index) => (
                    <motion.div key={post.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }} className="group">
                      <Card className="h-full flex flex-col bg-neutral-900 border border-neutral-800 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden shadow-md hover:shadow-cyan-900/20">
                        <div className="relative overflow-hidden">
                          <Link href={`/blog/${post.slug}`} className="block">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                          </Link>
                          <Badge className="absolute top-4 left-4 bg-neutral-950/70 backdrop-blur-sm text-cyan-300 border border-cyan-400/20">{post.category}</Badge>
                        </div>
                        <CardContent className="p-6 flex flex-col flex-grow">
                          <h3 className="font-semibold text-xl mb-3 text-neutral-100">
                            <Link href={`/blog/${post.slug}`} className="hover:text-cyan-400 transition-colors line-clamp-2">{post.title}</Link>
                          </h3>
                          <p className="text-neutral-400 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-neutral-500 mt-auto pt-4 border-t border-neutral-800">
                            <div className="flex items-center gap-2"><User className="h-4 w-4" />{post.author}</div>
                            <Link href={`/blog/${post.slug}`} className="text-cyan-400 flex items-center gap-1 hover:underline">
                              Đọc thêm <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              // Màn hình khi không tìm thấy kết quả
              <motion.div key="no-results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center py-20 flex flex-col items-center">
                <Frown className="h-16 w-16 text-neutral-600 mb-4" />
                <p className="text-neutral-400 text-xl font-semibold">Rất tiếc, không tìm thấy bài viết nào.</p>
                <p className="text-neutral-500">Hãy thử tìm kiếm với từ khóa hoặc danh mục khác nhé.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Community Contribution Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="relative mt-24 py-20 text-center overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,255,255,0.3),rgba(255,255,255,0))]"></div>
                <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,255,255,0.2),rgba(255,255,255,0))]"></div>
            </div>
            <div className="relative z-10 max-w-2xl mx-auto px-4">
                <Sparkles className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-bold text-3xl mb-4 text-white">Trở thành một phần của câu chuyện</h3>
                <p className="text-neutral-300 mb-8 leading-relaxed">
                    Bạn có một góc nhìn, một kinh nghiệm độc đáo muốn lan tỏa? ThinkShift là không gian để câu chuyện của bạn được lắng nghe và trân trọng.
                </p>
                <Button size="lg" className="text-base font-semibold px-8 py-6 bg-cyan-400 text-neutral-900 hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105">
                    Gửi bài viết của bạn
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </motion.div>
      </div>
    </div>
  )
}