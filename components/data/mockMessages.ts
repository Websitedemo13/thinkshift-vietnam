// components/data/mockMessages.ts

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const GREETING_KEYWORDS = [
  "hi", "hello", "xin chào", "chào", "yo", "hallo", "hey"
];

export const GREETING_RESPONSES = [
  "Chào bạn 👋! Tôi là ThinkBot – trợ lý ảo biết tuốt nhưng không biết buồn. Bạn cần tôi hỗ trợ gì hôm nay?",
  "Hey hey 🤖! ThinkShift sẵn sàng đồng hành cùng bạn khai phá năng lực thời đại số!",
  "Xin chào! Tôi không phát bằng cấp, nhưng có thể giúp bạn định nghĩa lại năng lực 💡.",
  "Rất vui được gặp bạn 👨‍🏫! Hỏi gì cũng đừng ngại, tôi không có cảm xúc nhưng có rất nhiều kiến thức!",
  "Hiện tại tôi chưa biết nấu ăn 🍜, nhưng tư vấn định hướng nghề nghiệp thì vô đối!"
];

let greetingCounter = 0;

export function getGreetingResponse(): string {
  const response = GREETING_RESPONSES[greetingCounter % GREETING_RESPONSES.length];
  greetingCounter++;
  return response;
}

export function isGreeting(message: string): boolean {
  const normalized = message.trim().toLowerCase();
  return GREETING_KEYWORDS.some(keyword => normalized.includes(keyword));
}

export function createMessage(content: string, isUser: boolean): Message {
  return {
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
    content,
    isUser,
    timestamp: new Date(),
  };
}
