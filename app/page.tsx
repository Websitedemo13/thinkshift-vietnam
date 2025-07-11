"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Target, Lightbulb } from "lucide-react"
import Link from "next/link"
import { motion, type Variants } from "framer-motion" // Import Variants type for better typing
// import { easeOut, easeInOut } from "framer-motion" // If you prefer importing explicit easing functions

export default function HomePage() {
  const problemCards = [
    {
      title: "Thế hệ 'Thất nghiệp có bằng'",
      description: "Hàng triệu cử nhân Trung Quốc không tìm được việc làm phù hợp, dù có tấm bằng danh giá.",
      image: "/page/post1.png",
    },
    {
      title: "Kỹ năng lỗi thời nhanh chóng",
      description: "Những gì học hôm nay có thể không còn phù hợp sau 2-3 năm trong thời đại AI.",
      image: "/page/post2.png",
    },
    {
      title: "Cuộc đua không có điểm dừng",
      description: "Càng học nhiều kỹ năng, càng cảm thấy bị tụt lại phía sau so với công nghệ.",
      image: "/page/post3.png",
    },
  ]

  const solutionPillars = [
    {
      icon: Brain,
      title: "Tư duy Phản biện",
      description:
        "Khả năng phân tích, đánh giá và đưa ra quyết định logic trong môi trường phức tạp và không chắc chắn.",
    },
    {
      icon: Target,
      title: "Giải quyết Vấn đề",
      description: "Năng lực xác định, phân tích và tìm ra giải pháp sáng tạo cho những thách thức chưa từng có.",
    },
    {
      icon: Lightbulb,
      title: "Học hỏi Thích ứng",
      description: "Khả năng học nhanh, thích ứng linh hoạt và tự định hướng trong thế giới thay đổi không ngừng.",
    },
  ]

  // Animation variants for staggered effects
  const containerVariants: Variants = { // Explicitly type as Variants
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay for each child animation
      },
    },
  }

  const itemVariants: Variants = { // Explicitly type as Variants
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // "easeOut" is a valid string literal
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        {/* Background gradient for a premium feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 opacity-80 z-0"></div>
        {/* Add a subtle texture if you have one, e.g., using a background image */}
        {/* <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('/images/abstract-bg.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div> */}

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-extrabold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight md:leading-snug">
              Tấm bằng Đại học của bạn
              <br />
              <span className="text-purple-400">có thể sắp 'hết hạn'</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10 px-4"> {/* Added px-4 for smaller screen padding */}
              Trong một thế giới mà AI có thể viết code, năng lực thực sự của bạn nằm ở đâu? Khám phá giá trị không thể
              thay thế của chính mình.
            </p>
            <Button
              size="lg"
              asChild
              // Adjusted button padding for better mobile fit
              className="text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link href="/assessment">
                Bắt đầu Khám phá Năng lực (Miễn phí)
                <ArrowRight className="ml-2 h-5 w-5 sm:ml-3 sm:h-6 sm:w-6" /> {/* Icon size adjustment */}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-bold tracking-tight text-white text-2xl sm:text-3xl md:text-4xl mb-4">Nghịch lý của một thế hệ</h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4"> {/* Added px-4 */}
              Chúng ta đang sống trong thời đại mà kiến thức dễ dàng tiếp cận nhất lịch sử, nhưng lại khó tìm được việc
              làm nhất.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {problemCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Card className="h-full bg-gray-800 border border-gray-700 text-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-0">
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      className="w-full h-56 md:h-64 object-cover object-center rounded-t-xl mb-4"
                    />
                    <div className="p-6">
                      <h3 className="font-semibold text-xl sm:text-2xl mb-3 leading-snug">{card.title}</h3> {/* Adjusted font size */}
                      <p className="text-base text-gray-400 leading-relaxed">{card.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 px-4 bg-gray-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-bold tracking-tight text-white text-2xl sm:text-3xl md:text-4xl mb-4">
              Giá trị của bạn không nằm ở những gì bạn biết,
              <br />
              <span className="text-purple-400">mà ở cách bạn tư duy</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4"> {/* Added px-4 */}
              Mô hình 3 Chân kiềng - Những năng lực cốt lõi không thể bị AI thay thế
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutionPillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }} // Enhanced hover effect
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="h-full bg-gray-800 border border-gray-700 text-gray-100 rounded-xl shadow-lg hover:border-purple-600 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600/20 transition-colors duration-300 transform group-hover:scale-105"> {/* Adjusted size for smaller screens */}
                      <pillar.icon className="h-8 w-8 sm:h-10 sm:w-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" /> {/* Adjusted icon size */}
                    </div>
                    <h3 className="font-semibold text-xl sm:text-2xl mb-4 leading-snug">{pillar.title}</h3> {/* Adjusted font size */}
                    <p className="text-base text-gray-400 leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof & Final CTA */}
      <section className="py-20 md:py-28 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <blockquote className="text-lg sm:text-xl md:text-3xl font-medium mb-8 max-w-5xl mx-auto leading-relaxed text-gray-200 px-4"> {/* Adjusted font size and added px-4 */}
              "Theo Diễn đàn Kinh tế Thế giới,{" "}
              <span className="text-purple-400 font-bold">Tư duy Phản biện</span> và
              <span className="text-purple-400 font-bold"> Giải quyết Vấn đề Phức tạp</span> là hai kỹ năng hàng đầu cho tương lai."
            </blockquote>
            <cite className="text-gray-500 text-sm md:text-base">— World Economic Forum, Future of Jobs Report 2023</cite>

            <div className="mt-16">
              <Button
                size="lg"
                asChild
                // Adjusted button padding for better mobile fit
                className="text-base sm:text-lg px-6 py-4 sm:px-10 sm:py-7 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link href="/assessment">
                  Khám phá Năng lực của Bạn Ngay
                  <ArrowRight className="ml-2 h-5 w-5 sm:ml-3 sm:h-6 sm:w-6" /> {/* Icon size adjustment */}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
