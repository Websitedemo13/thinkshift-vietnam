export type QuestionOption = {
  id: string
  text: string
  // Điểm cho từng chân kiềng
  scores: {
    systemThinking: number // Điểm Tư duy Hệ thống
    communication: number // Điểm Giao tiếp
    learning: number // Điểm Tự học
  }
}

export type AssessmentQuestion = {
  id: string
  type: "single-choice-image" | "prioritization-drag-drop"
  imageSrc: string // Đường dẫn ảnh tình huống
  scenarioText: string // Mô tả tình huống
  timeOfDay: string // Thời gian trong ngày
  options: QuestionOption[]
}

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "q1",
    type: "single-choice-image",
    imageSrc: "/assessment/test_1.png",
    timeOfDay: "8:00 Sáng",
    scenarioText: "Bạn nhận được email 'KHẨN' từ sếp, yêu cầu thêm một tính năng thanh toán mới. Bạn làm gì đầu tiên?",
    options: [
      {
        id: "q1a",
        text: "Mở ngay trình code, tìm kiếm tài liệu về API thanh toán.",
        scores: { systemThinking: 0, communication: 0, learning: 2 },
      },
      {
        id: "q1b",
        text: "Viết ra các bước cần làm và phân chia task nhỏ.",
        scores: { systemThinking: 1, communication: 1, learning: 1 },
      },
      {
        id: "q1c",
        text: "Tìm gặp sếp để hỏi rõ: 'Tại sao lại cần gấp? Mục tiêu kinh doanh của việc này là gì?'",
        scores: { systemThinking: 3, communication: 3, learning: 0 },
      },
    ],
  },
  {
    id: "q2",
    type: "single-choice-image",
    imageSrc: "/assessment/test_2.png",
    timeOfDay: "10:30 Sáng",
    scenarioText: "Trong cuộc họp team, có một bug nghiêm trọng cần fix ngay. Ai cũng đang bận, bạn sẽ...",
    options: [
      {
        id: "q2a",
        text: "Tự mình debug và fix luôn, không cần báo ai.",
        scores: { systemThinking: 1, communication: 0, learning: 2 },
      },
      {
        id: "q2b",
        text: "Phân tích impact của bug, ưu tiên hóa và assign cho người phù hợp nhất.",
        scores: { systemThinking: 3, communication: 2, learning: 1 },
      },
      {
        id: "q2c",
        text: "Tạo một channel Slack riêng để cả team cùng brainstorm giải pháp.",
        scores: { systemThinking: 2, communication: 3, learning: 1 },
      },
    ],
  },
  {
    id: "q3",
    type: "single-choice-image",
    imageSrc: "/assessment/test_3.png",
    timeOfDay: "2:00 Chiều",
    scenarioText:
      "Một bạn Intern hỏi bạn cách giải thích khái niệm 'Technical Debt' cho người không biết code. Bạn chọn cách nào?",
    options: [
      {
        id: "q3a",
        text: "Nói rằng đó là code viết ẩu, sau này phải sửa lại.",
        scores: { systemThinking: 0, communication: 1, learning: 0 },
      },
      {
        id: "q3b",
        text: "Vẽ một sơ đồ kỹ thuật phức tạp để giải thích luồng hoạt động.",
        scores: { systemThinking: 2, communication: 0, learning: 1 },
      },
      {
        id: "q3c",
        text: "Ví von nó như 'vay nợ': được lợi trước mắt về thời gian, nhưng sau này phải 'trả lãi' bằng việc bảo trì vất vả hơn.",
        scores: { systemThinking: 1, communication: 3, learning: 1 },
      },
    ],
  },
  {
    id: "q4",
    type: "single-choice-image",
    imageSrc: "/assessment/test_4.png",
    timeOfDay: "4:30 Chiều",
    scenarioText: "Client yêu cầu thay đổi một tính năng đã hoàn thành 80%. Deadline chỉ còn 2 ngày. Bạn sẽ...",
    options: [
      {
        id: "q4a",
        text: "Làm theo yêu cầu ngay lập tức, thức đêm nếu cần.",
        scores: { systemThinking: 0, communication: 1, learning: 1 },
      },
      {
        id: "q4b",
        text: "Đánh giá impact, đưa ra 2-3 phương án thay thế với timeline rõ ràng.",
        scores: { systemThinking: 3, communication: 2, learning: 1 },
      },
      {
        id: "q4c",
        text: "Hỏi client lý do thay đổi và thương lượng về scope hoặc timeline.",
        scores: { systemThinking: 2, communication: 3, learning: 0 },
      },
    ],
  },
  {
    id: "q5",
    type: "single-choice-image",
    imageSrc: "/assessment/test_5.png",
    timeOfDay: "6:00 Tối",
    scenarioText: "Về nhà, bạn thấy một framework JavaScript mới đang rất hot trên Twitter. Bạn sẽ...",
    options: [
      {
        id: "q5a",
        text: "Bỏ qua, vì công việc hiện tại không dùng đến nó.",
        scores: { systemThinking: 0, communication: 0, learning: 0 },
      },
      {
        id: "q5b",
        text: "Đọc qua documentation và vài bài blog để hiểu concept cơ bản.",
        scores: { systemThinking: 1, communication: 0, learning: 2 },
      },
      {
        id: "q5c",
        text: "Dành 2 tiếng cuối tuần làm một project nhỏ để trải nghiệm thực tế.",
        scores: { systemThinking: 2, communication: 1, learning: 3 },
      },
    ],
  },
  {
    id: "q6",
    type: "single-choice-image",
    imageSrc: "/assessment/test_6.png",
    timeOfDay: "8:30 Tối",
    scenarioText: "Trong group chat team, có người share một bài viết về xu hướng AI mới. Bạn sẽ...",
    options: [
      {
        id: "q6a",
        text: "Like và save để đọc sau khi rảnh.",
        scores: { systemThinking: 0, communication: 1, learning: 1 },
      },
      {
        id: "q6b",
        text: "Đọc ngay và comment chia sẻ quan điểm của mình.",
        scores: { systemThinking: 1, communication: 2, learning: 2 },
      },
      {
        id: "q6c",
        text: "Phân tích tác động của xu hướng này đến dự án hiện tại và chia sẻ với team.",
        scores: { systemThinking: 3, communication: 3, learning: 2 },
      },
    ],
  },
]

export const getMaxScores = () => {
  const maxScores = {
    systemThinking: 0,
    communication: 0,
    learning: 0,
  }

  assessmentQuestions.forEach((question) => {
    question.options.forEach((option) => {
      maxScores.systemThinking = Math.max(maxScores.systemThinking, option.scores.systemThinking)
      maxScores.communication = Math.max(maxScores.communication, option.scores.communication)
      maxScores.learning = Math.max(maxScores.learning, option.scores.learning)
    })
  })

  return maxScores
}
