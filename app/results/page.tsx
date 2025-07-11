"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ArrowRight, Users, TrendingUp, Award, Brain, AlertTriangle, Target, Lightbulb } from "lucide-react"
import Link from "next/link"

// Comprehensive data for charts
const skillGapData = [
  { skill: "Tư duy Phản biện", students: 6.2, employers: 8.5, gap: 2.3 },
  { skill: "Giải quyết Vấn đề", students: 5.8, employers: 8.8, gap: 3.0 },
  { skill: "Học hỏi Thích ứng", students: 7.1, employers: 8.2, gap: 1.1 },
  { skill: "Giao tiếp Hiệu quả", students: 6.5, employers: 8.3, gap: 1.8 },
  { skill: "Làm việc Nhóm", students: 7.3, employers: 8.0, gap: 0.7 },
  { skill: "Kỹ năng Kỹ thuật", students: 7.8, employers: 6.5, gap: -1.3 },
  { skill: "Kiến thức Chuyên môn", students: 8.2, employers: 6.8, gap: -1.4 },
]

const experienceLevelData = [
  { level: "Fresher (0-1 năm)", systemThinking: 4.2, communication: 5.1, learning: 6.8, count: 847 },
  { level: "Junior (1-3 năm)", systemThinking: 5.8, communication: 6.4, learning: 7.2, count: 1203 },
  { level: "Mid (3-5 năm)", systemThinking: 7.1, communication: 7.6, learning: 7.8, count: 623 },
  { level: "Senior (5+ năm)", systemThinking: 8.5, communication: 8.2, learning: 8.1, count: 174 },
]

const industryComparisonData = [
  { industry: "Fintech", systemThinking: 7.8, communication: 7.2, learning: 8.1 },
  { industry: "E-commerce", systemThinking: 6.9, communication: 8.0, learning: 7.5 },
  { industry: "Healthcare Tech", systemThinking: 8.2, communication: 7.8, learning: 7.9 },
  { industry: "EdTech", systemThinking: 7.5, communication: 8.3, learning: 8.4 },
  { industry: "Gaming", systemThinking: 7.1, communication: 6.8, learning: 8.0 },
  { industry: "Enterprise Software", systemThinking: 8.0, communication: 7.5, learning: 7.6 },
]

const roleDistributionData = [
  { role: "Frontend Developer", value: 32, color: "#3b82f6" },
  { role: "Backend Developer", value: 28, color: "#10b981" },
  { role: "Full-stack Developer", value: 25, color: "#8b5cf6" },
  { role: "DevOps Engineer", value: 8, color: "#f59e0b" },
  { role: "Mobile Developer", value: 7, color: "#ef4444" },
]

const trendData = [
  { month: "T1/2024", systemThinking: 6.2, communication: 6.8, learning: 7.1 },
  { month: "T2/2024", systemThinking: 6.4, communication: 6.9, learning: 7.2 },
  { month: "T3/2024", systemThinking: 6.6, communication: 7.1, learning: 7.4 },
  { month: "T4/2024", systemThinking: 6.8, communication: 7.3, learning: 7.6 },
  { month: "T5/2024", systemThinking: 7.0, communication: 7.5, learning: 7.8 },
  { month: "T6/2024", systemThinking: 7.2, communication: 7.7, learning: 8.0 },
]

const statisticsData = [
  { title: "Người tham gia", value: "2,847", icon: Users, change: "+23%", description: "Tăng trưởng trong tháng qua" },
  { title: "Điểm trung bình", value: "6.8/10", icon: Award, change: "+0.3", description: "Cải thiện so với quý trước" },
  {
    title: "Tỷ lệ hoàn thành",
    value: "89%",
    icon: TrendingUp,
    change: "+5%",
    description: "Người dùng hoàn thành bài test",
  },
]

export default function ResultsPage() {
  const [roleFilter, setRoleFilter] = useState("all")
  const [experienceFilter, setExperienceFilter] = useState("all")
  const [fieldFilter, setFieldFilter] = useState("all")

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
          <h1 className="font-bold tracking-tighter text-4xl md:text-5xl mb-6">
            Bức tranh Toàn cảnh
            <br />
            <span className="text-primary">Năng lực Nhân sự Công nghệ Việt Nam</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dựa trên dữ liệu từ 2,847 chuyên gia công nghệ, đây là những thống kê quan trọng về khoảng cách kỹ năng và
            xu hướng phát triển trong ngành.
          </p>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {statisticsData.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <Badge variant="secondary" className="text-primary bg-primary/10">
                        {stat.change}
                      </Badge>
                      <span className="text-xs text-muted-foreground ml-2">{stat.description}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Interactive Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Bộ lọc Dữ liệu Tương tác
              </CardTitle>
              <p className="text-muted-foreground">Tùy chỉnh dữ liệu theo nhu cầu phân tích của bạn</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn vai trò" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả vai trò</SelectItem>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="backend">Backend Developer</SelectItem>
                    <SelectItem value="fullstack">Full-stack Developer</SelectItem>
                    <SelectItem value="mobile">Mobile Developer</SelectItem>
                    <SelectItem value="devops">DevOps Engineer</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Kinh nghiệm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả cấp độ</SelectItem>
                    <SelectItem value="fresher">Fresher (0-1 năm)</SelectItem>
                    <SelectItem value="junior">Junior (1-3 năm)</SelectItem>
                    <SelectItem value="mid">Mid (3-5 năm)</SelectItem>
                    <SelectItem value="senior">Senior (5+ năm)</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={fieldFilter} onValueChange={setFieldFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Lĩnh vực" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả lĩnh vực</SelectItem>
                    <SelectItem value="fintech">Fintech</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="healthtech">Healthcare Tech</SelectItem>
                    <SelectItem value="edtech">EdTech</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Skill Gap Analysis */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Khoảng cách Kỹ năng: Kỳ vọng vs Thực tế
                </CardTitle>
                <p className="text-muted-foreground">
                  So sánh điểm trung bình giữa tự đánh giá của ứng viên và yêu cầu của nhà tuyển dụng
                </p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={skillGapData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="skill" angle={-45} textAnchor="end" height={80} fontSize={11} interval={0} />
                    <YAxis domain={[0, 10]} />
                    <Tooltip
                      formatter={(value, name) => [`${value}/10`, name === "students" ? "Ứng viên" : "Nhà tuyển dụng"]}
                    />
                    <Bar dataKey="students" fill="#3b82f6" name="students" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="employers" fill="#10b981" name="employers" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Level Radar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-500" />
                  Hồ sơ Năng lực theo Kinh nghiệm
                </CardTitle>
                <p className="text-muted-foreground">
                  Biểu đồ radar thể hiện sự phát triển năng lực qua các cấp độ kinh nghiệm
                </p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <RadarChart
                    data={[
                      { skill: "Tư duy Hệ thống", fresher: 4.2, junior: 5.8, mid: 7.1, senior: 8.5 },
                      { skill: "Giao tiếp", fresher: 5.1, junior: 6.4, mid: 7.6, senior: 8.2 },
                      { skill: "Tự học", fresher: 6.8, junior: 7.2, mid: 7.8, senior: 8.1 },
                      { skill: "Giải quyết VĐ", fresher: 4.5, junior: 6.1, mid: 7.4, senior: 8.3 },
                      { skill: "Làm việc Nhóm", fresher: 5.8, junior: 6.9, mid: 7.7, senior: 8.4 },
                    ]}
                  >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" fontSize={12} />
                    <PolarRadiusAxis domain={[0, 10]} fontSize={10} />
                    <Radar name="Fresher" dataKey="fresher" stroke="#ef4444" fill="#ef4444" fillOpacity={0.1} />
                    <Radar name="Junior" dataKey="junior" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.1} />
                    <Radar name="Mid" dataKey="mid" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                    <Radar name="Senior" dataKey="senior" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Secondary Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Industry Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>So sánh theo Lĩnh vực</CardTitle>
                <p className="text-muted-foreground">Điểm trung bình 3 chân kiềng theo từng ngành</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={industryComparisonData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 10]} />
                    <YAxis dataKey="industry" type="category" width={100} fontSize={11} />
                    <Tooltip />
                    <Bar dataKey="systemThinking" fill="#3b82f6" name="Tư duy Hệ thống" />
                    <Bar dataKey="communication" fill="#10b981" name="Giao tiếp" />
                    <Bar dataKey="learning" fill="#8b5cf6" name="Tự học" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Role Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Phân bố Vai trò</CardTitle>
                <p className="text-muted-foreground">Tỷ lệ người tham gia theo vị trí công việc</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={roleDistributionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ role, value }) => `${role}: ${value}%`}
                      fontSize={11}
                    >
                      {roleDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Tỷ lệ"]} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Trend Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Xu hướng Phát triển 6 tháng qua
              </CardTitle>
              <p className="text-muted-foreground">Sự cải thiện điểm số trung bình theo thời gian</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[6, 8.5]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="systemThinking"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    name="Tư duy Hệ thống"
                  />
                  <Line type="monotone" dataKey="communication" stroke="#10b981" strokeWidth={3} name="Giao tiếp" />
                  <Line type="monotone" dataKey="learning" stroke="#8b5cf6" strokeWidth={3} name="Tự học" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Những Phát hiện Quan trọng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold">🎯 Khoảng cách Lớn nhất</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Giải quyết Vấn đề</strong> có khoảng cách 3.0 điểm giữa kỳ vọng NTD và thực tế ứng viên.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold">📚 Nghịch lý Kiến thức</h4>
                  <p className="text-sm text-muted-foreground">
                    Ứng viên tự tin về <strong>Kỹ năng Kỹ thuật</strong> nhưng NTD lại ưu tiên{" "}
                    <strong>Soft Skills</strong> hơn.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold">🚀 Xu hướng Tích cực</h4>
                  <p className="text-sm text-muted-foreground">
                    Điểm số trung bình <strong>tăng 12%</strong> trong 6 tháng qua, cho thấy sự cải thiện rõ rệt.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold">💡 Cơ hội Vàng</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Fintech</strong> và <strong>Healthcare Tech</strong> có điểm số cao nhất về Tư duy Hệ thống.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-12">
              <h3 className="font-semibold text-2xl mb-4">
                Đây là bức tranh chung. Còn câu chuyện của riêng bạn thì sao?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Những con số này chỉ là khởi đầu. Để hiểu rõ vị trí của bản thân trong bức tranh lớn và nhận được lộ
                trình phát triển cá nhân, hãy tham gia bài đánh giá năng lực của ThinkShift Vietnam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/assessment">
                    Làm bài đánh giá của tôi
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                  <Link href="/blog">Khám phá Blog</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
