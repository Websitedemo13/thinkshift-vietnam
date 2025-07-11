"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  MessageCircle,
  BookOpen,
  TrendingUp,
  Target,
  Lightbulb,
  Download,
  Share2,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Mock data - trong thực tế sẽ lấy từ localStorage hoặc API
  const userScores = {
    systemThinking: 12,
    communication: 15,
    learning: 9,
  }

  const maxScore = 18 // 6 câu hỏi x 3 điểm tối đa

  const getScorePercentage = (score: number) => (score / maxScore) * 100
  const getScoreLevel = (score: number) => {
    const percentage = getScorePercentage(score)
    if (percentage >= 80) return { level: "Xuất sắc", color: "text-green-600", bg: "bg-green-100" }
    if (percentage >= 60) return { level: "Tốt", color: "text-blue-600", bg: "bg-blue-100" }
    if (percentage >= 40) return { level: "Trung bình", color: "text-yellow-600", bg: "bg-yellow-100" }
    return { level: "Cần cải thiện", color: "text-red-600", bg: "bg-red-100" }
  }

  const recommendations = [
    {
      skill: "Tư duy Hệ thống",
      score: userScores.systemThinking,
      icon: Brain,
      color: "blue",
      recommendations: [
        "Thực hành phân tích root cause khi gặp vấn đề",
        "Học về System Design và Architecture patterns",
        "Đọc sách 'Thinking in Systems' của Donella Meadows",
      ],
    },
    {
      skill: "Giao tiếp",
      score: userScores.communication,
      icon: MessageCircle,
      color: "green",
      recommendations: [
        "Tham gia các buổi thuyết trình kỹ thuật",
        "Luyện tập giải thích concept phức tạp bằng ngôn ngữ đơn giản",
        "Tham gia mentoring junior developers",
      ],
    },
    {
      skill: "Tự học",
      score: userScores.learning,
      icon: BookOpen,
      color: "purple",
      recommendations: [
        "Xây dựng thói quen học 30 phút mỗi ngày",
        "Tham gia các online course về công nghệ mới",
        "Thực hành learning by teaching - chia sẻ kiến thức",
      ],
    },
  ]

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-bold tracking-tighter text-4xl md:text-5xl mb-6">
            Báo cáo Năng lực
            <br />
            <span className="text-primary">Cá nhân của Bạn</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dựa trên các lựa chọn trong tình huống thực tế, đây là phân tích chi tiết về 3 chân kiềng năng lực của bạn.
          </p>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-1 text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">Tổng điểm</h3>
                  <p className="text-3xl font-bold text-primary">
                    {userScores.systemThinking + userScores.communication + userScores.learning}/{maxScore * 3}
                  </p>
                </div>
                <div className="md:col-span-3 space-y-4">
                  {recommendations.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-10 h-10 bg-${item.color}-100 rounded-full flex items-center justify-center`}>
                        <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{item.skill}</span>
                          <span className="text-sm text-muted-foreground">
                            {item.score}/{maxScore}
                          </span>
                        </div>
                        <Progress value={getScorePercentage(item.score)} className="h-2" />
                      </div>
                      <Badge className={getScoreLevel(item.score).bg + " " + getScoreLevel(item.score).color}>
                        {getScoreLevel(item.score).level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Detailed Analysis */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {recommendations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center`}>
                      <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{item.skill}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {item.score}/{maxScore} điểm • {getScoreLevel(item.score).level}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Progress value={getScorePercentage(item.score)} className="h-3" />
                  </div>

                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    Gợi ý cải thiện
                  </h4>
                  <ul className="space-y-2">
                    {item.recommendations.map((rec, recIndex) => (
                      <li key={recIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Target className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Tải báo cáo PDF
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              Chia sẻ kết quả
            </Button>
          </div>

          <div className="pt-8">
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-8 text-center">
                <h3 className="font-semibold text-xl mb-4">Muốn phát triển thêm?</h3>
                <p className="text-muted-foreground mb-6">
                  Khám phá các bài viết chuyên sâu và lộ trình phát triển cá nhân được thiết kế riêng cho profile năng
                  lực của bạn.
                </p>
                <Button asChild size="lg">
                  <Link href="/blog">
                    Khám phá Blog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
