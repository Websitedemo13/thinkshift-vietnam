"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Brain, 
  Target, 
  TrendingUp, 
  BarChart3, 
  PieChart,
  Download,
  Share2,
  BookOpen,
  Users,
  Lightbulb,
  Award,
  AlertTriangle,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Minus,
  Star,
  MapPin,
  Calendar,
  DollarSign,
  Briefcase
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, PieChart as RechartsPieChart, Cell } from "recharts"

// Mock AI Analysis Results
const analysisResults = {
  user: {
    name: "Nguyễn Văn An",
    completedAt: "2024-01-15T10:30:00Z",
    assessmentId: "ASS-2024-001",
    totalScore: 85
  },
  careerRecommendations: [
    {
      title: "Full-stack Developer",
      matchPercentage: 92,
      description: "Khả năng lập trình và tư duy logic xuất sắc, phù hợp với phát triển ứng dụng web toàn diện",
      pros: ["Tư duy logic tốt", "Khả năng học nhanh", "Thích thử nghiệm công nghệ mới"],
      cons: ["Cần cải thiện kỹ năng giao tiếp", "Thiếu kinh nghiệm làm việc nhóm"],
      averageSalary: "15-30 triệu VNĐ",
      jobDemand: "Rất cao",
      growth: "22%",
      icon: "💻",
      color: "#1B9CFC"
    },
    {
      title: "Data Scientist",
      matchPercentage: 78,
      description: "Khả năng phân tích và xử lý dữ liệu, phù hợp với xu hướng AI",
      pros: ["Tư duy phân tích", "Yêu thích toán học", "Quan tâm đến AI"],
      cons: ["Cần học thêm thống kê", "Thiếu kinh nghiệm với big data"],
      averageSalary: "18-35 triệu VNĐ",
      jobDemand: "Cao",
      growth: "35%",
      icon: "📊",
      color: "#0A3D62"
    },
    {
      title: "UI/UX Designer",
      matchPercentage: 65,
      description: "Có khiếu thẩm mỹ và quan tâm đến trải nghiệm người dùng",
      pros: ["Có khiếu nghệ thuật", "Tư duy người dùng", "Chú ý đến chi tiết"],
      cons: ["Cần học thêm design tools", "Thiếu portfolio"],
      averageSalary: "12-25 triệu VNĐ",
      jobDemand: "Trung bình",
      growth: "18%",
      icon: "🎨",
      color: "#8e44ad"
    }
  ],
  skillAnalysis: {
    technical: [
      { skill: "Programming Logic", score: 85, benchmark: 70, trend: "up" },
      { skill: "Problem Solving", score: 90, benchmark: 75, trend: "up" },
      { skill: "System Thinking", score: 75, benchmark: 65, trend: "stable" },
      { skill: "Database Concepts", score: 60, benchmark: 70, trend: "down" },
      { skill: "Web Technologies", score: 80, benchmark: 75, trend: "up" }
    ],
    soft: [
      { skill: "Communication", score: 70, benchmark: 80, trend: "stable" },
      { skill: "Teamwork", score: 65, benchmark: 75, trend: "down" },
      { skill: "Leadership", score: 55, benchmark: 60, trend: "stable" },
      { skill: "Time Management", score: 85, benchmark: 70, trend: "up" },
      { skill: "Learning Agility", score: 95, benchmark: 80, trend: "up" }
    ]
  },
  personalityInsights: {
    traits: [
      { trait: "Analytical Thinking", score: 90, description: "Xuất sắc trong việc phân tích và giải quyết vấn đề phức tạp" },
      { trait: "Creativity", score: 75, description: "Có khả năng tư duy sáng tạo và đưa ra giải pháp mới" },
      { trait: "Persistence", score: 85, description: "Kiên trì và không bỏ cuộc khi gặp khó khăn" },
      { trait: "Collaboration", score: 60, description: "Cần cải thiện kỹ năng làm việc nhóm" },
      { trait: "Adaptability", score: 80, description: "Thích ứng tốt với thay đổi và môi trường mới" }
    ]
  },
  learningPath: {
    immediate: [
      "Hoàn thiện JavaScript ES6+ và React.js",
      "Học Node.js và Express framework",
      "Thực hành với Git và GitHub",
      "Xây dựng portfolio với 3-5 dự án"
    ],
    shortTerm: [
      "Học thiết kế database và SQL",
      "Tìm hiểu về RESTful API",
      "Tham gia các dự án mã nguồn mở",
      "Cải thiện kỹ năng giao tiếp"
    ],
    longTerm: [
      "Học System Design",
      "Tìm hiểu về Cloud Computing",
      "Phát triển kỹ năng leadership",
      "Xây dựng personal brand"
    ]
  },
  marketInsights: {
    demandTrend: [
      { month: "Jan", demand: 85 },
      { month: "Feb", demand: 88 },
      { month: "Mar", demand: 92 },
      { month: "Apr", demand: 89 },
      { month: "May", demand: 95 },
      { month: "Jun", demand: 98 }
    ],
    salaryComparison: [
      { position: "Junior", salary: 15 },
      { position: "Mid", salary: 25 },
      { position: "Senior", salary: 40 },
      { position: "Lead", salary: 60 }
    ]
  }
}

const pieChartData = [
  { name: "Technical Skills", value: 78, color: "#1B9CFC" },
  { name: "Soft Skills", value: 74, color: "#0A3D62" },
  { name: "Domain Knowledge", value: 65, color: "#8e44ad" },
  { name: "Experience", value: 45, color: "#e74c3c" }
]

const radarData = analysisResults.personalityInsights.traits.map(trait => ({
  trait: trait.trait,
  score: trait.score,
  fullMark: 100
}))

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <ArrowUp className="h-4 w-4 text-green-500" />
      case "down":
        return <ArrowDown className="h-4 w-4 text-red-500" />
      default:
        return <Minus className="h-4 w-4 text-gray-500" />
    }
  }

  const getScoreColor = (score: number, benchmark: number) => {
    if (score >= benchmark + 10) return "text-green-600"
    if (score <= benchmark - 10) return "text-red-600"
    return "text-yellow-600"
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Kết quả Đánh giá AI 🎯
              </h1>
              <p className="text-muted-foreground text-lg">
                Phân tích chi tiết về năng lực và định hướng nghề nghiệp của bạn
              </p>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <span>Hoàn thành: {new Date(analysisResults.user.completedAt).toLocaleString('vi-VN')}</span>
                <Badge variant="outline">ID: {analysisResults.user.assessmentId}</Badge>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="lg">
                <Share2 className="mr-2 h-5 w-5" />
                Chia sẻ
              </Button>
              <Button size="lg">
                <Download className="mr-2 h-5 w-5" />
                Xuất PDF
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-br from-blue-accent/10 to-blue-accent/5 border-blue-accent/20">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Điểm tổng thể</h2>
                  <p className="text-muted-foreground">
                    Dựa trên phân tích toàn diện các kỹ năng và đặc điểm cá nhân
                  </p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-blue-accent mb-2">
                      {analysisResults.user.totalScore}
                    </div>
                    <div className="text-sm text-muted-foreground">/ 100 điểm</div>
                  </div>
                  <div className="text-center">
                    <Badge variant="default" className="text-lg px-4 py-2 mb-2">
                      Xuất sắc
                    </Badge>
                    <p className="text-sm text-muted-foreground">Xếp hạng</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Tổng quan</TabsTrigger>
            <TabsTrigger value="career">Nghề nghiệp</TabsTrigger>
            <TabsTrigger value="skills">Kỹ năng</TabsTrigger>
            <TabsTrigger value="personality">Tính cách</TabsTrigger>
            <TabsTrigger value="roadmap">Lộ trình</TabsTrigger>
          </Tabs>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Skill Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-blue-accent" />
                    Phân bố Kỹ năng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, "Điểm"]} />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {pieChartData.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Market Demand Trend */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-accent" />
                    Xu hướng Thị trường
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={analysisResults.marketInsights.demandTrend}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="demand" 
                          stroke="#1B9CFC" 
                          strokeWidth={3}
                          dot={{ fill: "#1B9CFC", strokeWidth: 2, r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Nhu cầu tuyển dụng cho vị trí phù hợp với bạn đang tăng mạnh
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Career Recommendations Tab */}
          <TabsContent value="career" className="space-y-6">
            <div className="space-y-6">
              {analysisResults.careerRecommendations.map((career, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-gray-light to-transparent dark:from-navy/10 dark:to-transparent">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{career.icon}</div>
                          <div>
                            <CardTitle className="text-2xl">{career.title}</CardTitle>
                            <CardDescription className="text-base mt-1">
                              {career.description}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge 
                          variant={career.matchPercentage >= 80 ? "default" : "secondary"}
                          className="text-xl px-4 py-2"
                        >
                          {career.matchPercentage}%
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      {/* Market Info */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
                          <DollarSign className="h-8 w-8 text-green-600" />
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Mức lương</p>
                            <p className="font-semibold text-green-600">{career.averageSalary}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
                          <Briefcase className="h-8 w-8 text-blue-600" />
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Nhu cầu</p>
                            <p className="font-semibold text-blue-600">{career.jobDemand}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
                          <TrendingUp className="h-8 w-8 text-purple-600" />
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Tăng trưởng</p>
                            <p className="font-semibold text-purple-600">+{career.growth}</p>
                          </div>
                        </div>
                      </div>

                      {/* Pros and Cons */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" />
                            Điểm mạnh phù hợp
                          </h4>
                          <ul className="space-y-2">
                            {career.pros.map((pro, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-600 mb-3 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5" />
                            Cần cải thiện
                          </h4>
                          <ul className="space-y-2">
                            {career.cons.map((con, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <div className="w-2 h-2 rounded-full bg-orange-500" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Xem lộ trình học
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Users className="mr-2 h-4 w-4" />
                          Tìm mentor
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Skills Analysis Tab */}
          <TabsContent value="skills" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Technical Skills */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-accent" />
                    Kỹ năng Kỹ thuật
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {analysisResults.skillAnalysis.technical.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.skill}</span>
                          {getTrendIcon(skill.trend)}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold ${getScoreColor(skill.score, skill.benchmark)}`}>
                            {skill.score}%
                          </span>
                          <span className="text-sm text-muted-foreground">
                            (TB: {skill.benchmark}%)
                          </span>
                        </div>
                      </div>
                      <Progress value={skill.score} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Soft Skills */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-accent" />
                    Kỹ năng Mềm
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {analysisResults.skillAnalysis.soft.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.skill}</span>
                          {getTrendIcon(skill.trend)}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold ${getScoreColor(skill.score, skill.benchmark)}`}>
                            {skill.score}%
                          </span>
                          <span className="text-sm text-muted-foreground">
                            (TB: {skill.benchmark}%)
                          </span>
                        </div>
                      </div>
                      <Progress value={skill.score} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Personality Tab */}
          <TabsContent value="personality" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Radar Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-accent" />
                    Biểu đồ Tính cách
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="trait" tick={{ fontSize: 12 }} />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
                        <Radar
                          name="Điểm"
                          dataKey="score"
                          stroke="#1B9CFC"
                          fill="#1B9CFC"
                          fillOpacity={0.3}
                          strokeWidth={2}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Personality Insights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-blue-accent" />
                    Phân tích Tính cách
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {analysisResults.personalityInsights.traits.map((trait, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{trait.trait}</h4>
                        <Badge variant={trait.score >= 80 ? "default" : trait.score >= 60 ? "secondary" : "outline"}>
                          {trait.score}%
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{trait.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Learning Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Immediate Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-red-500" />
                    Ngay lập tức (0-3 tháng)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {analysisResults.learningPath.immediate.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Short Term */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    Ngắn hạn (3-12 tháng)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {analysisResults.learningPath.shortTerm.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Long Term */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-500" />
                    Dài hạn (1-2 năm)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {analysisResults.learningPath.longTerm.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Salary Progression */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-accent" />
                  Dự báo Phát triển Lương
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={analysisResults.marketInsights.salaryComparison}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="position" />
                      <YAxis label={{ value: 'Triệu VNĐ', angle: -90, position: 'insideLeft' }} />
                      <Tooltip formatter={(value) => [`${value} triệu VNĐ`, "Lương"]} />
                      <Bar dataKey="salary" fill="#1B9CFC" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="flex-1" asChild>
            <Link href="/dashboard">
              <Target className="mr-2 h-5 w-5" />
              Về Dashboard
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="flex-1" asChild>
            <Link href="/assessment">
              <Brain className="mr-2 h-5 w-5" />
              Làm lại đánh giá
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="flex-1" asChild>
            <Link href="/mentoring">
              <Users className="mr-2 h-5 w-5" />
              Tìm mentor
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}