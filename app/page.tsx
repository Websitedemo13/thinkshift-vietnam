"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Target, Lightbulb } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  const problemCards = [
    {
      title: "Thế hệ 'Thất nghiệp có bằng'",
      description: "Hàng triệu cử nhân Trung Quốc không tìm được việc làm phù hợp, dù có tấm bằng danh giá.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Kỹ năng lỗi thời nhanh chóng",
      description: "Những gì học hôm nay có thể không còn phù hợp sau 2-3 năm trong thời đại AI.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Cuộc đua không có điểm dừng",
      description: "Càng học nhiều kỹ năng, càng cảm thấy bị tụt lại phía sau so với công nghệ.",
      image: "/placeholder.svg?height=200&width=300",
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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-bold tracking-tighter text-4xl md:text-5xl lg:text-6xl mb-6">
              Tấm bằng Đại học của bạn
              <br />
              <span className="text-primary">có thể sắp 'hết hạn'</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Trong một thế giới mà AI có thể viết code, năng lực thực sự của bạn nằm ở đâu? Khám phá giá trị không thể
              thay thế của chính mình.
            </p>
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/assessment">
                Bắt đầu Khám phá Năng lực (Miễn phí)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-semibold tracking-tight text-3xl mb-4">Nghịch lý của một thế hệ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chúng ta đang sống trong thời đại mà kiến thức dễ dàng tiếp cận nhất lịch sử, nhưng lại khó tìm được việc
              làm nhất.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {problemCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold text-xl mb-3">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-semibold tracking-tight text-3xl mb-4">
              Giá trị của bạn không nằm ở những gì bạn biết,
              <br />
              <span className="text-primary">mà ở cách bạn tư duy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mô hình 3 Chân kiềng - Những năng lực cốt lõi không thể bị AI thay thế
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutionPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <pillar.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-4">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & Final CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-xl md:text-2xl font-medium mb-8 max-w-4xl mx-auto">
              "Theo Diễn đàn Kinh tế Thế giới, <span className="text-primary">Tư duy Phản biện</span> và
              <span className="text-primary"> Giải quyết Vấn đề Phức tạp</span> là hai kỹ năng hàng đầu cho tương lai."
            </blockquote>
            <cite className="text-muted-foreground">— World Economic Forum, Future of Jobs Report 2023</cite>

            <div className="mt-12">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/assessment">
                  Khám phá Năng lực của Bạn Ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
