"use client"

import { Mail, BookOpen, BrainCircuit, BarChart3, ChevronRight, GraduationCap } from "lucide-react"
import { motion, Variants, easeOut } from "framer-motion"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

// Dữ liệu cho các câu hỏi FAQ được làm mới
const faqData = [
  {
    category: "Nền tảng & Cơ sở lý thuyết",
    icon: GraduationCap,
    questions: [
      {
        q: "ThinkShift là gì và được xây dựng trên cơ sở học thuật nào?",
        a: "ThinkShift là một dự án nghiên cứu và ứng dụng, nhằm mục tiêu giải mã và phát triển các năng lực cốt lõi không thể thay thế trong kỷ nguyên AI. Nền tảng của chúng tôi được xây dựng dựa trên sự tổng hòa của các học thuyết hiện đại như Tư duy Phát triển (Growth Mindset - Carol Dweck), Mô hình nhân sự Π-Shaped, và Tư duy Hệ thống (Systems Thinking).",
      },
      {
        q: "Sứ mệnh của ThinkShift là gì?",
        a: "Sứ mệnh của chúng tôi là dịch chuyển hệ quy chiếu của nhân sự công nghệ từ việc chạy theo các 'kỹ năng cứng' đơn lẻ sang việc xây dựng một 'hệ điều hành tư duy' bền vững. Chúng tôi tin rằng đây là lối thoát duy nhất để tạo ra giá trị khác biệt và không thể bị thay thế bởi máy móc.",
      },
      {
        q: "Dữ liệu trên ThinkShift có đáng tin cậy cho mục đích nghiên cứu không?",
        a: "Hoàn toàn. Chúng tôi cam kết về tính toàn vẹn học thuật. Mọi dữ liệu thu thập đều được ẩn danh, chuẩn hóa và xử lý thống kê một cách nghiêm ngặt. Khung năng lực và các bài đánh giá được thiết kế và thẩm định bởi các nhà nghiên cứu và chuyên gia đầu ngành từ UEH và VTC Academy.",
      },
    ],
  },
  {
    category: "Về Bài Đánh Giá & Mô hình Năng lực",
    icon: BrainCircuit,
    questions: [
      {
        q: "Bài đánh giá của ThinkShift đo lường những gì?",
        a: "Khác với các bài kiểm tra code thông thường, chúng tôi không đo lường 'bạn biết gì', mà đo lường 'bạn tư duy như thế nào'. Bài đánh giá tập trung vào 3 Chân kiềng Năng lực: (1) Tư duy Hệ thống & Sản phẩm, (2) Giao tiếp & Dịch chuyển Ngữ cảnh, và (3) Siêu năng lực Tự học (Meta-Learning).",
      },
      {
        q: "Tại sao lại tập trung vào các kỹ năng này thay vì các framework cụ thể?",
        a: "Bởi vì framework và công nghệ là thứ AI có thể học và làm tốt hơn con người trong tương lai gần. Nhưng khả năng kết nối một yêu cầu kỹ thuật với mục tiêu kinh doanh, hay giải thích một vấn đề phức tạp cho người ngoài ngành hiểu, là những năng lực đòi hỏi sự thấu cảm và tư duy đa chiều mà AI chưa thể chạm tới. Đây chính là 'lõi' giá trị của bạn.",
      },
      {
        q: "Kết quả đánh giá sẽ giúp tôi như thế nào?",
        a: "Bạn sẽ nhận được một bản đồ chi tiết về cấu trúc tư duy của mình, so sánh với hàng ngàn người khác trong ngành. Quan trọng hơn, báo cáo sẽ chỉ ra các 'khoảng trống nhận thức' và cung cấp một lộ trình phát triển được cá nhân hóa, giúp bạn biết chính xác cần đầu tư thời gian vào đâu để tạo ra đòn bẩy sự nghiệp lớn nhất.",
      },
    ],
  },
  {
    category: "Về Báo cáo & Ứng dụng cho Doanh nghiệp",
    icon: BarChart3,
    questions: [
      {
        q: "Doanh nghiệp của tôi có thể hưởng lợi gì từ ThinkShift?",
        a: "Chúng tôi giúp doanh nghiệp trả lời câu hỏi: 'Đội ngũ của chúng ta đang thực sự mạnh và yếu ở đâu so với thị trường?'. Thông qua các bài đánh giá nội bộ, chúng tôi cung cấp một báo cáo tổng quan về 'sức khỏe năng lực' của đội ngũ, xác định các rủi ro tiềm ẩn và đề xuất các chương trình đào tạo chiến lược, có tác động cao.",
      },
      {
        q: "Dữ liệu báo cáo toàn cảnh ngành được cập nhật như thế nào?",
        a: "Dữ liệu được thu thập liên tục. Các báo cáo chuyên sâu và luận giải về xu hướng thị trường được chúng tôi công bố định kỳ theo từng quý. Điều này đảm bảo các quyết định về nhân sự và đào tạo của bạn luôn dựa trên những thông tin mới và xác thực nhất.",
      },
    ],
  },
]

// Variants cho animation
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut, staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
}

// Component chính
export default function FAQPage() {
  return (
    <div className="bg-gray-900 text-gray-300 antialiased selection:bg-amber-500/30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(127,_127,_213,_0.1),_rgba(127,_127,_213,_0))]"></div>
      <div className="container relative mx-auto max-w-4xl px-4 py-24 md:py-32">
        {/* Header */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="text-center mb-20"
        >
          <motion.h1 
            variants={itemVariants} 
            className="font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
          >
            Thư viện Tri thức
          </motion.h1>
          <motion.p 
            variants={itemVariants} 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Giải đáp các câu hỏi nền tảng về phương pháp luận, mô hình năng lực và ứng dụng của dự án ThinkShift.
          </motion.p>
        </motion.header>

        {/* FAQ Sections */}
        <div className="space-y-16">
          {faqData.map((section) => (
            <motion.div
              key={section.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={sectionVariants}
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-white mb-6 flex items-center gap-4 border-l-4 border-amber-400 pl-4">
                <section.icon className="h-7 w-7 text-amber-400" />
                {section.category}
              </motion.h2>
              <motion.div variants={itemVariants}>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {section.questions.map((item, qIndex) => (
                    <AccordionItem 
                      value={`item-${qIndex}`} 
                      key={qIndex} 
                      className="bg-gray-800/50 border border-gray-700/80 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-amber-400/50"
                    >
                      <AccordionTrigger className="text-left font-medium text-gray-100 hover:no-underline px-6 py-4 text-base">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5 pt-1 text-gray-400 text-base leading-relaxed border-t border-gray-700/60">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
          className="mt-28 text-center bg-gray-800/50 p-10 rounded-xl border border-gray-700/80 shadow-2xl backdrop-blur-sm"
        >
          <motion.div variants={itemVariants} className="w-16 h-16 mx-auto bg-amber-400/10 rounded-full flex items-center justify-center mb-5 ring-1 ring-amber-400/20">
            <BookOpen className="h-8 w-8 text-amber-400" />
          </motion.div>
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white">
            Sẵn sàng cho một cuộc "Tư duy Chuyển dịch"?
          </motion.h3>
          <motion.p variants={itemVariants} className="text-gray-400 mt-2 mb-6 max-w-xl mx-auto">
            Kiến thức chỉ là điểm khởi đầu. Hãy tham gia cùng chúng tôi để khám phá sâu hơn về các báo cáo và bắt đầu hành trình xây dựng năng lực không thể thay thế của riêng bạn.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="font-semibold bg-amber-500 text-gray-900 hover:bg-amber-400 shadow-lg shadow-amber-500/10 hover:shadow-amber-400/20 transition-all duration-300 transform hover:-translate-y-0.5">
              <Link href="/results">
                Xem Báo cáo Toàn cảnh Ngành
                <ChevronRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}