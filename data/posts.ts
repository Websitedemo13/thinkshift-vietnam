// data/posts.ts

// Định nghĩa một kiểu dữ liệu cho mỗi bài viết để code sạch sẽ hơn
export type Post = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  content: string; // Nội dung đầy đủ dưới dạng HTML
};

// 'export' để các file khác có thể sử dụng mảng này
export const blogPosts: Post[] = [
  {
    id: 1,
    title: "AI có thể thay thế Developer? Góc nhìn từ thực tế",
    excerpt: "Phân tích sâu về tác động của AI đến ngành phát triển phần mềm và những kỹ năng cần thiết để tồn tại trong kỷ nguyên mới.",
    author: "Quách Thành Long",
    date: "2024-01-15",
    category: "AI & Technology",
    image: "/post/post_1.png",
    slug: "ai-co-the-thay-the-developer-khong",
    content: `
      <p class="mb-4">Câu hỏi này đang nóng hơn bao giờ hết trong cộng đồng công nghệ. Với sự phát triển vũ bão của các mô hình ngôn ngữ lớn (LLMs) như GPT-4, Copilot, nhiều người lo sợ rằng công việc lập trình sẽ sớm bị tự động hóa hoàn toàn.</p>
      <p class="mb-4">Tuy nhiên, sự thật phức tạp hơn nhiều. AI hiện tại là một công cụ cực kỳ mạnh mẽ, một <strong>người cộng sự đắc lực</strong>, chứ không phải là một kẻ thay thế.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">AI làm tốt những gì?</h2>
      <ul class="list-disc list-inside space-y-2 my-4 pl-4">
          <li>Viết các đoạn code lặp đi lặp lại (boilerplate).</li>
          <li>Tìm và gợi ý sửa các lỗi cú pháp đơn giản.</li>
          <li>Chuyển đổi code từ ngôn ngữ này sang ngôn ngữ khác.</li>
          <li>Giải thích một đoạn code phức tạp.</li>
      </ul>
      <h2 class="text-2xl font-bold mt-8 mb-4">Developer vẫn là người không thể thiếu</h2>
      <p class="mb-4">Vai trò của developer sẽ dịch chuyển từ "người thợ code" sang <strong>"kiến trúc sư giải pháp"</strong>. Những kỹ năng sau đây sẽ trở nên vô giá:</p>
      <ul class="list-disc list-inside space-y-2 my-4 pl-4">
          <li><strong>Tư duy hệ thống:</strong> Hiểu cách các thành phần tương tác với nhau trong một hệ thống lớn.</li>
          <li><strong>Giải quyết vấn đề sáng tạo:</strong> AI có thể viết code, nhưng nó không thể hiểu được bối cảnh kinh doanh hay nỗi đau thực sự của người dùng.</li>
          <li><strong>Kiến trúc phần mềm:</strong> Quyết định cấu trúc, công nghệ, và hướng đi cho cả một dự án.</li>
      </ul>
      <p>Kết luận: Đừng sợ AI, hãy học cách làm chủ nó. Developer không biến mất, họ chỉ tiến hóa.</p>
    `
  },
  {
    id: 2,
    title: "Tư duy Phản biện: Kỹ năng sinh tồn trong thế kỷ 21",
    excerpt: "Tại sao tư duy phản biện lại trở thành năng lực cốt lõi trong thời đại thông tin quá tải và AI đang phát triển mạnh mẽ?",
    author: "Trịnh Nam Thuận",
    date: "2024-01-10",
    category: "Soft Skills",
    image: "/post/post_2.png",
    slug: "tu-duy-phan-bien-ky-nang-quan-trong-nhat",
    content: `
      <p class="mb-4">Trong một thế giới ngập tràn thông tin, fake news, và các thuật toán định hướng, khả năng dừng lại, phân tích, và đánh giá một cách độc lập không còn là một kỹ năng "có thì tốt". Nó đã trở thành một <strong>kỹ năng sinh tồn</strong>.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">Tư duy phản biện là gì?</h2>
      <p class="mb-4">Đó không phải là việc chỉ trích hay phản đối mọi thứ. Tư duy phản biện là quá trình tư duy có kỷ luật, chủ động phân tích, tổng hợp và đánh giá thông tin thu thập được từ quan sát, kinh nghiệm, hoặc giao tiếp, để làm kim chỉ nam cho niềm tin và hành động.</p>
    `
  },
  {
    id: 3,
    title: "Nghịch lý của thế hệ 'Thất nghiệp có bằng'",
    excerpt: "Tại sao có tấm bằng đại học nhưng vẫn khó tìm việc? Phân tích từ góc độ thị trường lao động.",
    author: "Quách Thành Long",
    date: "2024-01-05",
    category: "Career Development",
    image: "/post/post_3.png",
    slug: "nghich-ly-the-he-that-nghiep-co-bang",
    content: `<p>Nội dung chi tiết về nghịch lý thất nghiệp có bằng. Vấn đề không chỉ nằm ở tấm bằng mà còn ở kỹ năng thực tế, khả năng thích ứng và định vị bản thân trên thị trường lao động đang thay đổi chóng mặt.</p>`
  },
  {
    id: 4,
    title: "Học một kỹ năng mới hiệu quả trong 30 ngày",
    excerpt: "Phương pháp khoa học để tiếp thu kiến thức mới nhanh chóng và bền vững.",
    author: "Trịnh Nam Thuận",
    date: "2023-12-28",
    category: "Learning",
    image: "/post/post_4.png",
    slug: "hoc-ky-nang-moi-hieu-qua-trong-30-ngay",
    content: `<p>Nội dung chi tiết về phương pháp học kỹ năng mới. Chúng ta sẽ đi qua các bước như: Phân rã kỹ năng, tập trung vào 20% cốt lõi, luyện tập có chủ đích và tạo vòng lặp phản hồi nhanh chóng.</p>`
  },
  {
    id: 5,
    title: "Tương lai của Remote Work tại Việt Nam",
    excerpt: "Xu hướng làm việc từ xa và những thay đổi cần thiết trong tư duy quản lý.",
    author: "Quách Thành Long",
    date: "2023-12-20",
    category: "Future of Work",
    image: "/post/post_5.png",
    slug: "tuong-lai-remote-work-tai-viet-nam",
    content: `<p>Nội dung chi tiết về tương lai của Remote Work. Đây không còn là một lựa chọn tạm thời mà đã trở thành một phần của văn hóa làm việc hiện đại, đòi hỏi cả công ty và nhân viên phải có những kỹ năng và công cụ mới.</p>`
  },
  {
    id: 6,
    title: "Xây dựng Personal Brand trong thời đại số",
    excerpt: "Chiến lược xây dựng thương hiệu cá nhân để nổi bật trong thị trường lao động cạnh tranh.",
    author: "Trịnh Nam Thuận",
    date: "2023-12-15",
    category: "Personal Branding",
    image: "/post/post_6.png",
    slug: "xay-dung-personal-brand-thoi-dai-so",
    content: `<p>Nội dung chi tiết về xây dựng thương hiệu cá nhân. Thương hiệu cá nhân không phải là 'làm màu', đó là cách bạn truyền tải giá trị, chuyên môn và cá tính của mình một cách nhất quán ra thế giới bên ngoài.</p>`
  },
];