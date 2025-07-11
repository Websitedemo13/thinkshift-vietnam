"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github, Mail, ArrowRight, Sparkles, Users, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Section 1: The Spark */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=800&width=1200"
            alt="Sinh viên đứng ở ngã ba đường giữa giảng đường cổ kính và thành phố công nghệ hiện đại trong sương mù"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="font-bold tracking-tighter text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              Chúng tôi không bắt đầu từ một kế hoạch.
              <br />
              <span className="text-primary">Chúng tôi bắt đầu từ một nghịch lý.</span>
            </h1>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Cuộn xuống để khám phá</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Opening Story */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-center mb-16">
              <h2 className="font-bold text-3xl md:text-4xl mb-8 leading-tight">
                Câu chuyện bắt đầu từ một
                <span className="text-primary"> trăn trở sâu sắc</span>
              </h2>
            </div>

            <div className="bg-muted/30 p-8 md:p-12 rounded-2xl mb-12">
              <p className="text-xl leading-relaxed text-foreground mb-6">
                ThinkShift Vietnam ra đời từ trăn trở của chính những người trong cuộc. Chúng tôi, những sinh viên đang
                đứng giữa giao lộ của Công nghệ và Kinh doanh, đã chứng kiến một sự thật đau lòng:
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">😔</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Bạn bè xung quanh</h4>
                    <p className="text-muted-foreground">
                      Cầm trên tay tấm bằng ưu tú nhưng vẫn hoang mang, không biết mình thực sự giỏi gì.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-lg">😤</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Nhà tuyển dụng</h4>
                    <p className="text-muted-foreground">
                      Than phiền vì không tìm được nhân sự có "năng lực thực sự", dù CV rất đẹp.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xl leading-relaxed text-foreground">
                Chúng tôi nhận ra rằng, vấn đề không nằm ở sự lười biếng, mà ở một{" "}
                <strong className="text-primary">"lỗi hệ thống"</strong> sâu sắc. Dự án này chính là nỗ lực của chúng
                tôi để tìm ra lời giải.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Founders */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold tracking-tight text-3xl md:text-4xl mb-4">
              Những người đi tìm
              <span className="text-primary"> lời giải</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sự kết hợp độc đáo giữa chuyên môn kỹ thuật sâu và hiểu biết về kinh doanh thực tế
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 bg-muted rounded-full mb-6 overflow-hidden">
                      <img
                        src="/long.png"
                        alt="Quách Thành Long"
                        className="w-full h-full object-cover filter"
                      />
                    </div>

                    <h3 className="font-bold text-2xl mb-2">Quách Thành Long</h3>
                    <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                      Co-founder | Tech & System Architect
                    </Badge>
                    <p className="text-sm text-muted-foreground mb-4">UEH / VTC Academy</p>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Là người kết nối ý tưởng và sản phẩm, Long chịu trách nhiệm kiến tạo nền tảng công nghệ cho
                      ThinkShift. Với nền tảng kết hợp độc đáo giữa Khoa học Máy tính và Kinh doanh, Long có góc nhìn đa
                      chiều để xây dựng một hệ thống không chỉ mạnh về kỹ thuật mà còn giải quyết đúng vấn đề của người
                      dùng.
                    </p>

                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 bg-muted rounded-full mb-6 overflow-hidden">
                      <img
                        src="/Thuan.png"
                        alt="Trịnh Nam Thuận"
                        className="w-full h-full object-cover filter"
                      />
                    </div>

                    <h3 className="font-bold text-2xl mb-2">Trịnh Nam Thuận</h3>
                    <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                      Co-founder | Data & Research Lead
                    </Badge>
                    <p className="text-sm text-muted-foreground mb-4">UEH</p>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Là một nhà phân tích kinh doanh nhạy bén, Thuận có khả năng "kể chuyện" bằng những con số. Anh phụ
                      trách việc thiết kế hệ thống khảo sát, phân tích dữ liệu để tìm ra những insight đắt giá, và đúc
                      kết chúng thành các báo cáo có giá trị, soi rọi vào những khoảng tối của thị trường lao động.
                    </p>

                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                        <Mail className="h-4 w-4" />
                        Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Team Synergy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-xl mb-4">Sự kết hợp độc đáo</h4>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Sự kết hợp giữa chuyên môn kỹ thuật sâu và hiểu biết về kinh doanh thực tế giúp ThinkShift Vietnam
                  mang đến những giải pháp vừa khoa học vừa ứng dụng cao, phù hợp với bối cảnh thị trường lao động Việt
                  Nam.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Our Mission */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bold tracking-tight text-3xl md:text-4xl mb-4">
              Chúng tôi tin rằng
              <span className="text-primary">...</span>
            </h2>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                number: "01",
                title: "Tư duy quan trọng hơn Công cụ",
                content:
                  "AI và công nghệ sẽ liên tục thay đổi. Thứ không thể thay thế chính là khả năng tư duy hệ thống, tư duy phản biện và tư duy sáng tạo.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                number: "02",
                title: "Dữ liệu mang lại Sự thật",
                content:
                  "Thay vì những lời khuyên sáo rỗng, chúng tôi tin rằng việc đối mặt với dữ liệu thực tế là bước đầu tiên để tạo ra sự thay đổi có ý nghĩa.",
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                number: "03",
                title: "Hành động tạo ra Năng lực",
                content:
                  "Kiến thức chỉ là tiềm năng. Năng lực thực sự được hình thành khi bạn áp dụng kiến thức đó để giải quyết vấn đề. ThinkShift không chỉ cho bạn thấy vấn đề, mà còn thôi thúc bạn hành động.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
            ].map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-8"
              >
                <div className={`w-20 h-20 ${belief.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-2xl font-bold ${belief.color}`}>{belief.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-2xl mb-4">{belief.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{belief.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Invitation */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 shadow-xl">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h2 className="font-bold text-3xl md:text-4xl mb-6">
                  Đây là một cuộc đối thoại.
                  <br />
                  <span className="text-primary">Và chúng tôi cần bạn.</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Dự án này sẽ chỉ thực sự có giá trị khi có sự chung tay của cộng đồng. Hãy tham gia bài đánh giá để
                  đóng góp câu chuyện của bạn, hoặc liên hệ với chúng tôi nếu bạn có ý tưởng muốn hợp tác.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg px-8 py-6">
                    <Link href="/assessment">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Tham gia Đánh giá
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                    <Link href="/contact">Liên hệ Hợp tác</Link>
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>ThinkShift Vietnam</strong> - Nơi tư duy gặp gỡ hành động
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
