export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const GENERAL_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Quy trình & Chi phí",
    question: "Quy trình tiếp nhận và báo phí dịch vụ pháp lý tại SAIGONLEX diễn ra như thế nào?",
    answer:
      "Quy trình được chuẩn hóa qua 4 bước: (1) Tiếp nhận sơ bộ thông tin từ khách hàng; (2) Luật sư nghiên cứu hồ sơ và đánh giá sơ bộ trong vòng 24 giờ; (3) Gửi Thư đề xuất dịch vụ (Engagement Letter) nêu rõ phạm vi công việc, lộ trình và báo giá minh bạch trọn gói; (4) Ký kết hợp đồng dịch vụ pháp lý và tiến hành công việc."
  },
  {
    id: "faq-2",
    category: "Bảo mật thông tin",
    question: "SAIGONLEX cam kết bảo mật thông tin và tài liệu của thân chủ như thế nào?",
    answer:
      "Bảo mật là nguyên tắc sống còn và nghĩa vụ đạo đức nghề nghiệp luật sư. Trước khi tiếp nhận bất kỳ tài liệu nhạy cảm nào, chúng tôi luôn chủ động ký Thỏa thuận bảo mật thông tin (NDA). Mọi tài liệu số được lưu trữ mã hóa và chỉ luật sư trực tiếp xử lý vụ việc mới được phân quyền truy cập."
  },
  {
    id: "faq-3",
    category: "Phí dịch vụ",
    question: "Chi phí thuê luật sư được tính theo giờ hay theo trọn gói vụ việc?",
    answer:
      "Tùy tính chất vụ việc, chúng tôi cung cấp các phương thức tính phí linh hoạt: Phí cố định trọn gói (Lump-sum) cho các thủ tục đăng ký, xin giấy phép, soạn hợp đồng; Phí theo giờ (Hourly rate) cho hoạt động tư vấn đàm phán chuyên sâu; hoặc Phí thù lao kết quả (Success fee) cho các vụ việc tranh tụng phức tạp."
  },
  {
    id: "faq-4",
    category: "Dịch vụ Doanh nghiệp",
    question: "Doanh nghiệp vừa và nhỏ (SME) có nên thuê luật sư nội bộ thường xuyên (Retainer)?",
    answer:
      "Thuê dịch vụ luật sư thường xuyên giúp SME sở hữu một phòng pháp chế chuyên nghiệp với chi phí chỉ bằng 1/3 việc tuyển dụng nhân sự chuyên trách, đồng thời được hỗ trợ bởi toàn bộ đội ngũ luật sư đa lĩnh vực thay vì một cá nhân đơn lẻ."
  },
  {
    id: "faq-5",
    category: "Tranh tụng",
    question: "Trong trường hợp xảy ra tranh chấp, nên ưu tiên thương lượng hay khởi kiện ngay?",
    answer:
      "SAIGONLEX luôn khuyến nghị thân chủ ưu tiên thương lượng và hòa giải có luật sư đồng hành ở giai đoạn tiền tố tụng. Việc này giúp tiết kiệm tối đa thời gian, chi phí và bảo toàn mối quan hệ thương mại. Khởi kiện ra Tòa án hoặc Trọng tài chỉ là giải pháp sau cùng khi đối phương thiếu thiện chí."
  },
  {
    id: "faq-6",
    category: "Bản quyền & Demo",
    question: "Website này là phiên bản chính thức hay bản demo thử nghiệm?",
    answer:
      "Đây là website phiên bản DEMO phục vụ mục đích trình diễn giao diện, cấu trúc thông tin và trải nghiệm người dùng (UX/UI). Tất cả số liệu, danh hiệu và hồ sơ minh họa đều được gắn nhãn DEMO và sẽ được thay thế bằng thông tin pháp lý chính thức khi bàn giao triển khai thực tế."
  }
];
