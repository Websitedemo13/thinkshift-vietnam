"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { assessmentQuestions, type QuestionOption } from "@/lib/assessment-questions"
import { Clock, Sparkles, Brain, MessageCircle, BookOpen, ArrowRight, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

type UserScores = {
  systemThinking: number
  communication: number
  learning: number
}

type AssessmentStep = "welcome" | "questions" | "completion"

export function AssessmentForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<AssessmentStep>("welcome")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userScores, setUserScores] = useState<UserScores>({
    systemThinking: 0,
    communication: 0,
    learning: 0,
  })
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentQuestion = assessmentQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / assessmentQuestions.length) * 100

  const handleStartAssessment = () => {
    setCurrentStep("questions")
  }

  const handleOptionSelect = (option: QuestionOption) => {
    if (isTransitioning) return

    setSelectedOption(option.id)
    setIsTransitioning(true)

    // Cập nhật điểm số
    setUserScores((prev) => ({
      systemThinking: prev.systemThinking + option.scores.systemThinking,
      communication: prev.communication + option.scores.communication,
      learning: prev.learning + option.scores.learning,
    }))

    // Chuyển sang câu hỏi tiếp theo sau 1.5 giây
    setTimeout(() => {
      if (currentQuestionIndex < assessmentQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
        setSelectedOption(null)
        setIsTransitioning(false)
      } else {
        setCurrentStep("completion")
        // Chuyển đến trang kết quả sau 4 giây
        setTimeout(() => {
          router.push("/dashboard")
        }, 4000)
      }
    }, 1500)
  }

  const WelcomeScreen = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10"
    >
      <div className="max-w-2xl mx-auto text-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="h-12 w-12 text-white" />
          </div>
          <h1 className="font-bold tracking-tighter text-4xl md:text-5xl mb-6">
            Sẵn sàng cho một ngày làm việc
            <br />
            <span className="text-primary">thử thách?</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6 mb-8"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trong <strong>5 phút</strong> tới, bạn sẽ đối mặt với các tình huống thực tế của một nhân sự công nghệ.
            Không có câu trả lời đúng hay sai, chỉ có <strong>lựa chọn của bạn</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
              <CardContent className="p-4 text-center">
                <Brain className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Tư duy Hệ thống</h3>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200">
              <CardContent className="p-4 text-center">
                <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Giao tiếp</h3>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200">
              <CardContent className="p-4 text-center">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Tự học</h3>
              </CardContent>
            </Card>
          </div>

          <p className="text-muted-foreground">
            Hãy hành động theo <strong>bản năng</strong> và trải nghiệm một ngày làm việc đầy thử thách!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Button
            size="lg"
            onClick={handleStartAssessment}
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Tôi đã sẵn sàng
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )

  const QuestionScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Câu hỏi {currentQuestionIndex + 1} / {assessmentQuestions.length}
            </span>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {currentQuestion.timeOfDay}
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            >
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={currentQuestion.imageSrc || "/assessment/test_1.png"}
                    alt="Scenario illustration"
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-white">{currentQuestion.timeOfDay}</Badge>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-bold text-2xl lg:text-3xl mb-4 leading-tight">{currentQuestion.scenarioText}</h2>
                  <p className="text-muted-foreground">Chọn phản ứng tự nhiên nhất của bạn trong tình huống này:</p>
                </div>

                <div className="space-y-4">
                  {currentQuestion.options.map((option, index) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    >
                      <Card
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                          selectedOption === option.id
                            ? "ring-2 ring-primary bg-primary/5 shadow-lg"
                            : "hover:border-primary/50"
                        }`}
                        onClick={() => handleOptionSelect(option)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                                selectedOption === option.id
                                  ? "bg-primary text-white"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {selectedOption === option.id ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                <span className="text-sm font-medium">{String.fromCharCode(65 + index)}</span>
                              )}
                            </div>
                            <p className="text-foreground leading-relaxed">{option.text}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )

  const CompletionScreen = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5"
    >
      <div className="max-w-2xl mx-auto text-center px-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <CheckCircle className="h-16 w-16 text-white" />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary/30"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
          <h1 className="font-bold tracking-tighter text-4xl md:text-5xl mb-6">
            Hành trình
            <br />
            <span className="text-primary">hoàn tất!</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chúng tôi đang phân tích các lựa chọn của bạn bằng <strong>AI</strong> để tạo ra báo cáo năng lực dành riêng
            cho bạn. Vui lòng chờ trong giây lát...
          </p>

          {/* Loading Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="relative w-64 h-64 mx-auto"
          >
            <svg className="w-full h-full" viewBox="0 0 200 200">
              {/* Background circles */}
              <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(var(--muted))" strokeWidth="2" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(var(--muted))" strokeWidth="2" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="2" />

              {/* Animated progress circles */}
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="hsl(217.2 91.2% 59.8%)"
                strokeWidth="3"
                strokeDasharray="502"
                strokeDashoffset="502"
                animate={{ strokeDashoffset: 502 - (userScores.systemThinking / 18) * 502 }}
                transition={{ duration: 2, delay: 1.5 }}
              />
              <motion.circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="hsl(142.1 76.2% 36.3%)"
                strokeWidth="3"
                strokeDasharray="377"
                strokeDashoffset="377"
                animate={{ strokeDashoffset: 377 - (userScores.communication / 18) * 377 }}
                transition={{ duration: 2, delay: 1.7 }}
              />
              <motion.circle
                cx="100"
                cy="100"
                r="40"
                fill="none"
                stroke="hsl(262.1 83.3% 57.8%)"
                strokeWidth="3"
                strokeDasharray="251"
                strokeDashoffset="251"
                animate={{ strokeDashoffset: 251 - (userScores.learning / 18) * 251 }}
                transition={{ duration: 2, delay: 1.9 }}
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="text-center"
              >
                <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Đang phân tích...</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-xs text-muted-foreground">Tư duy Hệ thống</p>
              <p className="font-bold text-lg">{userScores.systemThinking}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xs text-muted-foreground">Giao tiếp</p>
              <p className="font-bold text-lg">{userScores.communication}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-xs text-muted-foreground">Tự học</p>
              <p className="font-bold text-lg">{userScores.learning}</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="text-sm text-muted-foreground"
          >
            Đang chuyển hướng đến báo cáo chi tiết...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentStep === "welcome" && <WelcomeScreen />}
        {currentStep === "questions" && <QuestionScreen />}
        {currentStep === "completion" && <CompletionScreen />}
      </AnimatePresence>
    </div>
  )
}
