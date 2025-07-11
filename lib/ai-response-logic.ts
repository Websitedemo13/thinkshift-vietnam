// /lib/ai-response-logic.ts

// Định nghĩa các loại ý định của người dùng
type Intent =
  | 'GREETING'
  | 'ABOUT_PROJECT'
  | 'ASK_ADVICE'
  | 'WHAT_IS_SYSTEM_THINKING'
  | 'AI_CONCERN'
  | 'CAREER_PATH'
  | 'LEARNING_METHOD'
  | 'THANKS'
  | 'UNKNOWN'

// Mẫu câu trả lời có sẵn
const responses: Record<Intent, string[]> = {
  GREETING: [
    "Xin chào! 👋 Bạn đang quan tâm điều gì về sự nghiệp hoặc công nghệ?",
    "Hello! Rất vui được gặp bạn. Bạn có muốn khám phá điều gì mới hôm nay? 🤖",
    "Chào bạn! Hãy hỏi bất kỳ điều gì về AI, tư duy, hay định hướng nghề nghiệp nhé!",
  ],

  ABOUT_PROJECT: [
    "ThinkShift là một dự án nghiên cứu phi lợi nhuận tại Việt Nam, nhằm giúp bạn hiểu rõ hơn về năng lực cốt lõi trong thời đại AI. 🎯",
    "Mục tiêu của ThinkShift là mang đến một 'la bàn tư duy' giúp bạn định vị bản thân trong thế giới đang thay đổi. 🌍",
  ],

  ASK_ADVICE: [
    "Lời khuyên của mình: Hãy tập trung xây dựng tư duy nền tảng thay vì chạy theo công nghệ hot. 🧠",
    "Đầu tư vào 3 năng lực: Tư duy hệ thống, giao tiếp chuyển đổi, và khả năng tự học sẽ giúp bạn vượt trội dài hạn. 📈",
  ],

  WHAT_IS_SYSTEM_THINKING: [
    "Tư duy hệ thống là khả năng nhìn sự vật trong mối quan hệ tổng thể, không chỉ riêng lẻ. 💡 Nó giúp bạn hiểu 'tại sao' thay vì chỉ 'cái gì'.",
    "Giống như khi sửa một chiếc xe: không chỉ thay lốp mà còn kiểm tra cả hệ thống phanh, động cơ... đó chính là tư duy hệ thống. 🔧",
  ],

  AI_CONCERN: [
    "Lo lắng về AI là điều dễ hiểu. Nhưng thay vì sợ bị thay thế, hãy học cách hợp tác với AI để nâng cao năng suất của bạn. 🤝",
    "AI không thể thay thế tư duy sâu sắc, sự đồng cảm và khả năng kết nối con người. Đó là lợi thế của bạn. 🌱",
  ],

  CAREER_PATH: [
    "Chưa biết mình nên theo ngành gì? Hãy bắt đầu từ việc hiểu rõ bản thân và điều bạn quan tâm nhất. Tư duy đúng dẫn lối đi đúng. 🔍",
    "Bạn có thể thử khám phá năng lực qua các bài test tư duy của chúng tôi. Tư duy là nền tảng của mọi kỹ năng. 🧭",
  ],

  LEARNING_METHOD: [
    "Học sao cho hiệu quả? Học qua hành động, phản hồi và liên kết với kiến thức cũ. Đừng học vẹt! 📚",
    "Hãy thử kỹ thuật Pomodoro, học cách đặt câu hỏi, và luôn kết nối kiến thức mới với vấn đề thực tế. 🧠",
  ],

  THANKS: [
    "Không có chi! 😊 Nếu bạn có câu hỏi nào khác, đừng ngần ngại nhé.",
    "Rất vui được giúp bạn! 🚀 Bạn muốn tìm hiểu thêm điều gì nữa không?",
  ],

  UNKNOWN: [
    "Câu hỏi thú vị đó! 🧐 Mình chưa chắc đã hiểu hết ý bạn, bạn có thể nói rõ hơn không?",
    "Hmm, để mình suy nghĩ đã... bạn có thể diễn đạt lại một chút không? 🤔",
  ],
}

// Gợi ý tiếp theo để người dùng hỏi
const followUpSuggestions: Partial<Record<Intent, string[]>> = {
  GREETING: [
    "Bạn muốn biết về dự án ThinkShift?",
    "Hay bạn đang phân vân ngành nghề nào phù hợp?",
  ],
  ABOUT_PROJECT: ["Bạn muốn biết cách dự án hoạt động không?", "Bạn muốn tham gia thử nghiệm không?"],
  ASK_ADVICE: ["Bạn đang lo lắng về AI hay sự nghiệp của mình?", "Bạn muốn thử đánh giá năng lực bản thân?"],
  WHAT_IS_SYSTEM_THINKING: ["Bạn có muốn áp dụng tư duy hệ thống vào công việc thực tế?"],
  CAREER_PATH: ["Bạn có từng làm bài trắc nghiệm năng lực chưa?", "Bạn có muốn tư vấn định hướng ngành học không?"],
  AI_CONCERN: ["Bạn có sợ AI sẽ thay thế công việc của mình không?"],
}

// Keywords phân loại ý định
const intentKeywords: Record<Intent, string[]> = {
  GREETING: ['chào', 'hello', 'hi', 'xin chào', 'halo'],
  ABOUT_PROJECT: ['thinkshift', 'dự án', 'sứ mệnh', 'mục tiêu', 'giới thiệu'],
  ASK_ADVICE: ['lời khuyên', 'định hướng', 'bắt đầu', 'nên học gì', 'nên làm gì'],
  WHAT_IS_SYSTEM_THINKING: ['tư duy hệ thống', 'system thinking'],
  AI_CONCERN: ['ai có thay thế', 'lo lắng về ai', 'ai sẽ thay thế', 'ai nguy hiểm'],
  CAREER_PATH: ['ngành gì', 'nghề gì', 'định hướng nghề', 'tương lai', 'sự nghiệp'],
  LEARNING_METHOD: ['học sao', 'cách học', 'học hiệu quả', 'tự học', 'học như thế nào'],
  THANKS: ['cảm ơn', 'thanks', 'thank you'],
  UNKNOWN: [],
}

// Hàm xác định ý định người dùng
function getIntent(message: string): Intent {
  const lowerMessage = message.toLowerCase()

  for (const [intent, keywords] of Object.entries(intentKeywords)) {
    if (keywords.some((keyword) => lowerMessage.includes(keyword))) {
      return intent as Intent
    }
  }

  return 'UNKNOWN'
}

// Hàm trả về phản hồi
export function getAIResponse(userMessage: string): string {
  const intent = getIntent(userMessage)
  const possibleResponses = responses[intent]
  const reply = possibleResponses[Math.floor(Math.random() * possibleResponses.length)]

  // Gợi ý thêm nếu có
  const suggestions = followUpSuggestions[intent]
  const extra =
    suggestions && suggestions.length > 0
      ? `\n👉 Bạn có thể hỏi tiếp: "${suggestions[Math.floor(Math.random() * suggestions.length)]}"`
      : ''

  return reply + extra
}
