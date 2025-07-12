"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github, Mail, ArrowRight, Users, BrainCog, DatabaseZap, Blocks, SearchX, BrainCircuit } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

// Component cho hiệu ứng chữ chạy lên mượt mà
const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  const words = text.split(" ")
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  }

  // 👇 SỬA LỖI TẠI ĐÂY 👇
  // Thêm "as const" vào cuối đối tượng "child"
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  } as const; // <--- THÊM VÀO ĐÂY

  return (
    <motion.h1
      className={`font-bold tracking-tighter text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="mr-3 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export default function AboutPage() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div className="bg-neutral-950 text-neutral-50 antialiased">
      {/* Section 1: The Spark - Giao diện mới với Parallax Effect */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Lớp ảnh nền với hiệu ứng Parallax */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            // THAY ẢNH CỦA BẠN VÀO ĐÂY!
            src="/about/image.png"
            alt="Một nhóm người đang thảo luận sôi nổi trong một không gian làm việc hiện đại, tượng trưng cho sự hợp tác và đổi mới"
            className="w-full h-full object-cover"
          />
          {/* Lớp phủ gradient tinh tế hơn */}
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>

        {/* Nội dung nổi bên trên */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <AnimatedText text="Chúng tôi không bắt đầu từ một kế hoạch." />
          <AnimatedText text="Chúng tôi bắt đầu từ một nghịch lý." className="text-cyan-400" />
        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.6, duration: 1 }}
  className="mt-6 text-lg md:text-xl lg:text-2xl font-medium text-neutral-300 max-w-3xl mx-auto"
>
  <span className="italic text-white">ThinkShift</span> là sự chuyển hóa từ <span className="text-cyan-400 font-semibold">tư duy</span> đến <span className="text-cyan-400 font-semibold">hành động</span>.  
  Không bắt đầu từ công cụ – mà từ cách ta <span className="underline underline-offset-4 decoration-cyan-400">nhìn nhận thế giới</span>.
</motion.p>

        </div>

        {/* Chỉ báo cuộn xuống */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-light">Khám phá câu chuyện</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop" }}
                className="w-1 h-2 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Opening Story - Bố cục được làm mới */}
      <section className="py-24 sm:py-32 px-4 bg-neutral-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-bold text-3xl md:text-5xl mb-4 leading-tight">
                Hành trình bắt đầu từ một <span className="text-cyan-400">nghịch lý</span>
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                ThinkShift Vietnam ra đời từ trăn trở của chính những người trong cuộc.
              </p>
            </div>

            <div className="bg-neutral-950/50 border border-neutral-800 p-8 md:p-12 rounded-2xl shadow-lg">
              <p className="text-xl leading-relaxed text-neutral-300 mb-8 text-center">
                Chúng tôi, những sinh viên đang đứng giữa giao lộ của Công nghệ và Kinh doanh, đã chứng kiến một sự thật
                đau lòng:
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                {/* Card 1 - Dùng icon thay emoji */}
                <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700/80 flex items-start gap-4 transition-all duration-300 hover:border-cyan-400/50 hover:bg-neutral-800">
                  <div className="w-12 h-12 bg-red-900/50 text-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-neutral-100">Sinh viên hoang mang</h4>
                    <p className="text-neutral-400">
                      Cầm trên tay tấm bằng ưu tú nhưng không biết mình thực sự giỏi gì, đâu là năng lực lõi.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700/80 flex items-start gap-4 transition-all duration-300 hover:border-orange-400/50 hover:bg-neutral-800">
                  <div className="w-12 h-12 bg-orange-900/50 text-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <SearchX className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-neutral-100">Nhà tuyển dụng thất vọng</h4>
                    <p className="text-neutral-400">
                      Mệt mỏi vì không tìm được nhân sự có "năng lực thực chiến", dù CV trông rất đẹp.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xl leading-relaxed text-neutral-300 text-center mt-8">
                Vấn đề không nằm ở sự lười biếng, mà ở một <strong className="text-cyan-400 font-medium">"lỗi hệ thống"</strong>.
                Dự án này là nỗ lực của chúng tôi để tìm ra lời giải.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Founders - Bố cục độc đáo hơn */}
      <section className="py-24 sm:py-32 px-4 bg-neutral-950 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-bold tracking-tight text-3xl md:text-5xl mb-4">
              Những người đi tìm <span className="text-cyan-400">lời giải</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Sự kết hợp giữa tư duy hệ thống, kỹ thuật và sự nhạy bén trong kinh doanh.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder 1 Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl shadow-cyan-900/10"
            >
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-8">
                  <div className="w-32 h-32 rounded-full mb-4 sm:mb-0 flex-shrink-0 overflow-hidden ring-2 ring-neutral-700">
                    <img src="/long.png" alt="Quách Thành Long" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-neutral-100">Quách Thành Long</h3>
                    <Badge variant="secondary" className="mb-3 mt-1 bg-cyan-900/50 text-cyan-300 border-none">
                      Co-founder | Tech & System Architect
                    </Badge>
                    <p className="text-neutral-400 leading-relaxed">
                      Kiến trúc sư hệ thống, người biến những ý tưởng phức tạp thành sản phẩm công nghệ tinh gọn và hiệu quả.
                    </p>
                    <div className="flex space-x-3 mt-4 justify-center sm:justify-start">
                      <Button size="sm" variant="outline" className="border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:text-white">
                        <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                      </Button>
                      <Button size="sm" variant="outline" className="border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:text-white">
                        <Github className="h-4 w-4 mr-2" /> GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </motion.div>

            {/* Founder 2 Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl shadow-cyan-900/10"
            >
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-8">
                  <div className="w-32 h-32 rounded-full mb-4 sm:mb-0 flex-shrink-0 overflow-hidden ring-2 ring-neutral-700">
                    <img src="/Thuan.png" alt="Trịnh Nam Thuận" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-neutral-100">Trịnh Nam Thuận</h3>
                    <Badge variant="secondary" className="mb-3 mt-1 bg-cyan-900/50 text-cyan-300 border-none">
                      Co-founder | Data & Research Lead
                    </Badge>
                    <p className="text-neutral-400 leading-relaxed">
                      Nhà phân tích kinh doanh, người "kể chuyện" bằng dữ liệu và tìm ra sự thật đằng sau những con số.
                    </p>
                    <div className="flex space-x-3 mt-4 justify-center sm:justify-start">
                      <Button size="sm" variant="outline" className="border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:text-white">
                        <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                      </Button>
                      <Button size="sm" variant="outline" className="border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:text-white">
                        <Mail className="h-4 w-4 mr-2" /> Email
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Mission - Bố cục so le và dùng icon */}
      <section className="py-24 sm:py-32 px-4 bg-neutral-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-bold tracking-tight text-3xl md:text-5xl mb-4">
              Hệ giá trị cốt lõi
            </h2>
            <p className="text-lg text-neutral-400">Những niềm tin định hình nên ThinkShift.</p>
          </motion.div>

          <div className="space-y-20">
            {[
              {
                icon: BrainCog,
                title: "Tư duy > Công cụ",
                content: "Công nghệ thay đổi mỗi ngày, nhưng tư duy hệ thống, tư duy phản biện và sáng tạo là bất biến. Chúng tôi tập trung vào việc rèn luyện tư duy.",
                color: "text-cyan-400",
                bg: "bg-cyan-900/50",
              },
              {
                icon: DatabaseZap,
                title: "Dữ liệu > Giả định",
                content: "Thay vì những lời khuyên sáo rỗng, chúng tôi tin rằng việc đối mặt với dữ liệu thực tế là bước đầu tiên để tạo ra sự thay đổi có ý nghĩa.",
                color: "text-green-400",
                bg: "bg-green-900/50",
              },
              {
                icon: Blocks,
                title: "Hành động > Lý thuyết",
                content: "Kiến thức chỉ là tiềm năng. Năng lực thực sự được hình thành khi bạn áp dụng nó để giải quyết vấn đề. ThinkShift thôi thúc bạn hành động.",
                color: "text-purple-400",
                bg: "bg-purple-900/50",
              },
            ].map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`w-28 h-28 rounded-2xl flex items-center justify-center flex-shrink-0 ${belief.bg}`}>
                  <belief.icon className={`h-14 w-14 ${belief.color}`} />
                </div>
                <div className={`flex-1 text-center md:text-left ${index % 2 !== 0 ? "md:text-right" : ""}`}>
                  <h3 className="font-bold text-3xl mb-3 text-neutral-100">{belief.title}</h3>
                  <p className="text-lg text-neutral-400 leading-relaxed">{belief.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: The Invitation - CTA nổi bật với hiệu ứng Glassmorphism */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,255,255,0.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,255,255,0.1),rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Glassmorphism Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
              <div className="p-8 sm:p-12 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                    <Users className="h-8 w-8 text-neutral-900" />
                  </div>
                </div>

                <h2 className="font-bold text-3xl md:text-4xl mb-4 text-white">
                  Đây là một cuộc đối thoại.
                </h2>
                <h2 className="font-bold text-3xl md:text-4xl mb-6 text-cyan-400">
                  Và chúng tôi cần bạn.
                </h2>

                <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Dự án này sẽ chỉ thực sự có giá trị khi có sự chung tay của cộng đồng. Hãy tham gia bài đánh giá để
                  đóng góp câu chuyện của bạn, hoặc liên hệ nếu bạn có ý tưởng hợp tác.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-base font-semibold px-8 py-6 bg-cyan-400 text-neutral-900 hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105">
                    <Link href="/assessment">
                      Tham gia Đánh giá
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-base font-semibold px-8 py-6 bg-transparent border-neutral-600 text-neutral-200 hover:bg-neutral-800 hover:text-white transition-all duration-300">
                    <Link href="/contact">Liên hệ Hợp tác</Link>
                  </Button>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="font-bold text-lg text-white">
                    Think<span className="text-cyan-400">Shift</span> Vietnam
                  </p>
                  <p className="text-sm text-neutral-400 mt-1">Nơi Tư Duy Gặp Gỡ Hành Động</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}