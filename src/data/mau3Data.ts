export interface PracticeAreaMau3 {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  iconName: string;
  image: string;
  shortDesc: string;
  overview: string;
  commonIssues: { title: string; desc: string }[];
  serviceScope: string[];
  processSteps: { step: number; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export interface FeaturedServiceMau3 {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
  href: string;
}

export interface CaseStudyMau3 {
  id: string;
  sector: string;
  matter: string;
  issue: string;
  approach: string;
  resultSummary: string;
}

export interface LegalFormResourceMau3 {
  id: string;
  slug: string;
  title: string;
  category: "Doanh nghiệp" | "Đất đai" | "Dân sự" | "Lao động" | "Tố tụng";
  description: string;
  updatedDate: string;
  status: "Đang áp dụng (Luật mới)" | "Mẫu chuẩn tham khảo";
  fileType: "DOCX" | "PDF";
  fileSize: string;
  relatedService: string;
}

export interface NewsArticleMau3 {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Hoạt động SaigonLex" | "Phổ biến pháp luật" | "Sự kiện & Hội thảo";
  publishDate: string;
  readTime: string;
  image: string;
  author: string;
  contentHtml: string;
}

export interface JobOpeningMau3 {
  id: string;
  slug: string;
  position: string;
  department: string;
  location: string;
  employmentType: "Toàn thời gian" | "Thực tập / Bán thời gian";
  deadline: string;
  description: string[];
  requirements: string[];
  benefits: string[];
}

/* ======================================================== */
/* 1. PRACTICE AREAS (8 Lĩnh vực hoạt động chính - Section 7) */
/* ======================================================== */
export const PRACTICE_AREAS_MAU3: PracticeAreaMau3[] = [
  {
    id: "pa-corp",
    slug: "doanh-nghiep-thuong-mai",
    number: "01",
    title: "Doanh nghiệp & Thương mại",
    category: "Doanh nghiệp",
    iconName: "Building2",
    image: "/images/practice-corporate.png",
    shortDesc: "Tư vấn quản trị điều hành, soạn thảo hợp đồng thương mại, thẩm định pháp lý và xử lý tái cấu trúc công ty.",
    overview:
      "SaigonLex hỗ trợ toàn diện các vấn đề pháp lý phát sinh trong vòng đời doanh nghiệp: từ khởi sự kinh doanh, quản trị tuân thủ nội bộ, đàm phán hợp đồng thương mại phức tạp đến tái cấu trúc, mua bán sáp nhập và bảo vệ quyền lợi cổ đông.",
    commonIssues: [
      { title: "Bất đồng ý chí giữa các cổ đông sáng lập", desc: "Thiếu điều lệ chi tiết và thỏa thuận cổ đông dẫn đến bế tắc biểu quyết và tranh chấp quyền kiểm soát công ty." },
      { title: "Rủi ro điều khoản phạt vi phạm và bồi thường hợp đồng", desc: "Soạn thảo hợp đồng lỏng lẻo dẫn đến khó thu hồi công nợ hoặc bị phạt vi phạm vượt quá hạn mức luật định." },
      { title: "Vi phạm nghĩa vụ công bố và thay đổi nội dung ĐKKD", desc: "Không kịp thời cập nhật tỷ lệ sở hữu, người đại diện theo pháp luật hoặc ngành nghề có điều kiện." }
    ],
    serviceScope: [
      "Tư vấn pháp luật doanh nghiệp thường xuyên (Retainer Counsel) theo tháng.",
      "Soạn thảo, rà soát và tham gia đàm phán hợp đồng kinh tế trong nước và quốc tế.",
      "Tư vấn giải pháp pháp lý quản trị rủi ro cho Hội đồng quản trị và Ban Giám đốc.",
      "Thẩm định pháp lý (Legal Due Diligence) trong các giao dịch đầu tư và chuyển nhượng vốn.",
      "Đại diện giải quyết các tranh chấp nội bộ công ty tại Tòa án và Trọng tài thương mại."
    ],
    processSteps: [
      { step: 1, title: "Khảo sát hồ sơ doanh nghiệp", desc: "Luật sư thu thập điều lệ, biên bản họp và hợp đồng hiện hành để nhận diện điểm nghẽn pháp lý." },
      { step: 2, title: "Lập ý kiến tư vấn pháp lý", desc: "Phân tích quy định hiện hành, đề xuất kịch bản xử lý rủi ro và dự toán chi phí tuân thủ." },
      { step: 3, title: "Hoàn thiện văn kiện & Thống nhất", desc: "Soạn thảo biểu mẫu, thỏa thuận cổ đông hoặc hợp đồng kinh tế theo chuẩn pháp lý cao nhất." },
      { step: 4, title: "Giám sát thực thi & Hỗ trợ phát sinh", desc: "Đồng hành cùng ban điều hành trong quá trình ký kết và giải quyết các vướng mắc thực tiễn." }
    ],
    faqs: [
      { question: "Gói tư vấn thường xuyên cho doanh nghiệp bao gồm những quyền lợi gì?", answer: "Doanh nghiệp được ưu tiên phân công Luật sư phụ trách chính, hỗ trợ rà soát không giới hạn hợp đồng mẫu, trả lời văn bản trong vòng 24 giờ và đại diện làm việc với đối tác khi có phát sinh." }
    ]
  },
  {
    id: "pa-land",
    slug: "dan-su-dat-dai",
    number: "02",
    title: "Dân sự & Đất đai",
    category: "Bất động sản & Dân sự",
    iconName: "Home",
    image: "/images/practice-realestate.png",
    shortDesc: "Tư vấn giao dịch nhà đất, hợp thức hóa quyền sử dụng đất, bồi thường giải phóng mặt bằng và giải quyết tranh chấp ranh giới.",
    overview:
      "Pháp luật đất đai tại Việt Nam có tính đặc thù cao và vừa có nhiều điểm sửa đổi mang tính bước ngoặt. Đội ngũ luật sư SaigonLex am hiểu sâu sắc quy hoạch, trình tự cấp giấy chứng nhận và kỹ năng bảo vệ quyền sử dụng đất hợp pháp của người dân cũng như doanh nghiệp.",
    commonIssues: [
      { title: "Đất không có giấy tờ hoặc mua bán bằng giấy tay", desc: "Rủi ro không đủ điều kiện cấp Sổ đỏ theo quy định mới nếu không chứng minh được nguồn gốc sử dụng ổn định." },
      { title: "Tranh chấp ranh giới, lối đi chung và quyền tài sản liền kề", desc: "Các bên không đạt được thỏa thuận dẫn đến hòa giải cơ sở bất thành và cần khởi kiện ra Tòa án." },
      { title: "Đơn giá bồi thường khi nhà nước thu hồi đất chưa thỏa đáng", desc: "Cần khiếu nại quyết định bồi thường, hỗ trợ tái định cư dựa trên bảng giá đất sát thị trường." }
    ],
    serviceScope: [
      "Tư vấn điều kiện cấp Giấy chứng nhận quyền sử dụng đất (Sổ đỏ) lần đầu cho đất không giấy tờ.",
      "Đại diện tham gia hòa giải tranh chấp đất đai tại UBND cấp xã/phường.",
      "Soạn đơn khởi kiện và bảo vệ quyền lợi tại Tòa án nhân dân có thẩm quyền.",
      "Tư vấn pháp lý cho giao dịch chuyển nhượng, tặng cho, thế chấp dự án bất động sản.",
      "Khiếu nại các quyết định hành chính về thu hồi đất, cưỡng chế và phương án bồi thường."
    ],
    processSteps: [
      { step: 1, title: "Thẩm định nguồn gốc đất", desc: "Nghiên cứu bản đồ địa chính, trích lục hồ sơ địa chính và lịch sử đóng thuế sử dụng đất." },
      { step: 2, title: "Xây dựng phương án bảo vệ", desc: "Đối chiếu quy hoạch sử dụng đất cấp huyện và các điều khoản Luật Đất đai mới nhất." },
      { step: 3, title: "Thu thập chứng cứ & Lập hồ sơ", desc: "Xác minh mốc giới hiện trạng, lấy lời khai nhân chứng lân cận và lập chứng thư pháp lý." },
      { step: 4, title: "Tham gia tố tụng / Hòa giải", desc: "Luật sư đại diện tranh biện tại Tòa án hoặc bảo vệ quyền lợi tại các buổi đối thoại hành chính." }
    ],
    faqs: [
      { question: "Đất sử dụng trước 01/07/2014 không có giấy tờ có được cấp Sổ đỏ không?", answer: "Theo quy định tại Điều 138 Luật Đất đai 2024, nếu được UBND cấp xã xác nhận không có tranh chấp và phù hợp quy hoạch, người sử dụng đất có thể được xem xét cấp sổ theo các hạn mức luật định." }
    ]
  },
  {
    id: "pa-criminal",
    slug: "hinh-su-to-tung",
    number: "03",
    title: "Hình sự & Tố tụng",
    category: "Tố tụng & Tranh tụng",
    iconName: "ShieldAlert",
    image: "/images/practice-dispute.png",
    shortDesc: "Bào chữa cho bị can, bị cáo và bảo vệ quyền lợi hợp pháp cho bị hại ngay từ giai đoạn tạm giữ, điều tra đến xét xử sơ thẩm, phúc thẩm.",
    overview:
      "Sự tham gia sớm của luật sư là bảo chứng quan trọng nhất ngăn ngừa oan sai, bức cung, đồng thời bảo đảm nguyên tắc suy đoán vô tội được tôn trọng tuyệt đối. SaigonLex tham gia bào chữa các vụ án kinh tế, chức vụ, trật tự trị an với sự cẩn trọng và trách nhiệm tối đa.",
    commonIssues: [
      { title: "Bị triệu tập làm việc nhưng không rõ tư cách tham gia tố tụng", desc: "Người dân hoang mang, khai báo không chuẩn xác làm xấu đi tình trạng pháp lý của bản thân." },
      { title: "Bị can bị tạm giam cách ly, gia đình không nắm được tình trạng", desc: "Cần luật sư đăng ký bào chữa để trực tiếp tham gia hỏi cung và bảo đảm các quyền tố tụng." },
      { title: "Tội danh kinh tế, kế toán, thuế bị hình sự hóa quan hệ dân sự", desc: "Cần phân tích rõ dấu hiệu cấu thành tội phạm và tách bạch nghĩa vụ hoàn trả dân sự thuần túy." }
    ],
    serviceScope: [
      "Tham gia cùng thân chủ ngay từ giai đoạn tiếp nhận tố giác, tin báo tội phạm và kiến nghị khởi tố.",
      "Trực tiếp có mặt trong các buổi hỏi cung bị can, lấy lời khai của cơ quan điều tra.",
      "Thu thập chứng cứ gỡ tội, tài liệu giảm nhẹ trách nhiệm hình sự và bảo lãnh tại ngoại.",
      "Bào chữa độc lập tại các phiên tòa sơ thẩm, phúc thẩm và kiến nghị giám đốc thẩm/tái thẩm.",
      "Bảo vệ quyền và lợi ích hợp pháp của người bị hại, đương sự trong phần bồi thường thiệt hại."
    ],
    processSteps: [
      { step: 1, title: "Tiếp nhận & Đăng ký bào chữa", desc: "Nhanh chóng hoàn tất thủ tục đăng ký người bào chữa tại Cơ quan CSĐT / Viện kiểm sát." },
      { step: 2, title: "Làm việc với bị can trong trại giam", desc: "Tiếp xúc, động viên tinh thần, lắng nghe sự thật khách quan và tư vấn quyền im lặng hợp pháp." },
      { step: 3, title: "Sao chụp hồ sơ & Đánh giá chứng cứ", desc: "Nghiên cứu từng biên bản khám nghiệm, kết luận giám định và đối chiếu lời khai chéo." },
      { step: 4, title: "Tranh biện công khai tại Tòa", desc: "Trình bày bản luận cứ bào chữa sắc bén, phản biện viện kiểm sát dựa trên nguyên tắc tranh tụng." }
    ],
    faqs: [
      { question: "Khi nào gia đình có quyền mời luật sư cho người bị bắt giữ?", answer: "Gia đình có quyền mời luật sư ngay từ khi người thân bị bắt giữ khẩn cấp, tạm giữ hoặc có quyết định khởi tố bị can mà không cần chờ đến khi có kết luận điều tra." }
    ]
  },
  {
    id: "pa-family",
    slug: "hon-nhan-gia-dinh",
    number: "04",
    title: "Hôn nhân & Gia đình",
    category: "Bất động sản & Dân sự",
    iconName: "HeartHandshake",
    image: "/images/practice-family.png",
    shortDesc: "Tư vấn ly hôn thuận tình và đơn phương, phân chia tài sản chung trong hôn nhân và bảo vệ quyền trực tiếp nuôi con.",
    overview:
      "Tranh chấp hôn nhân không chỉ là vấn đề pháp lý mà còn gắn liền với tâm lý và quyền lợi trẻ vị thành niên. SaigonLex đề cao sự tế nhị, hỗ trợ hòa giải thiện chí nhưng kiên quyết bảo vệ công bằng tài sản và môi trường phát triển tốt nhất cho con cái.",
    commonIssues: [
      { title: "Tranh chấp quyền nuôi con dưới 36 tháng tuổi và con từ đủ 7 tuổi", desc: "Cần chứng minh điều kiện kinh tế, thời gian chăm sóc và tôn trọng nguyện vọng chính đáng của trẻ." },
      { title: "Tài sản chung đứng tên một người hoặc tài sản hình thành trước hôn nhân", desc: "Phức tạp trong việc chứng minh công sức đóng góp, dòng tiền tạo lập và phân tách nợ chung." },
      { title: "Ly hôn có yếu tố nước ngoài (đương sự ở nước ngoài hoặc tài sản ngoài nước)", desc: "Trình tự ủy thác tư pháp kéo dài nếu hồ sơ giấy tờ không được hợp pháp hóa lãnh sự chuẩn xác." }
    ],
    serviceScope: [
      "Tư vấn và thực hiện thủ tục ly hôn thuận tình nhanh chóng, hạn chế tối đa thời gian có mặt tại Tòa.",
      "Đại diện giải quyết các vụ án ly hôn đơn phương có tranh chấp gay gắt về con chung và tài sản.",
      "Xác minh tài sản chung bị che giấu: Bất động sản, cổ phần doanh nghiệp, tài khoản ngân hàng.",
      "Soạn thảo văn bản thỏa thuận chế độ tài sản của vợ chồng trước và trong thời kỳ hôn nhân.",
      "Thực hiện thủ tục công nhận bản án ly hôn của Tòa án nước ngoài tại Việt Nam."
    ],
    processSteps: [
      { step: 1, title: "Lắng nghe & Định hướng hòa giải", desc: "Tôn trọng đời tư, đánh giá mâu thuẫn thực tế và ưu tiên các giải pháp thỏa thuận êm đẹp." },
      { step: 2, title: "Hoạch định phương án tài sản & con chung", desc: "Lập danh mục tài sản chi tiết, thu thập tài liệu chứng minh nguồn gốc hình thành." },
      { step: 3, title: "Nộp đơn & Làm việc tại Tòa", desc: "Chuẩn bị đơn khởi kiện chuẩn luật, nộp tiền tạm ứng án phí và tham gia phiên hòa giải." },
      { step: 4, title: "Bảo vệ quyền lợi tại phiên tòa", desc: "Tranh luận bảo vệ tỷ lệ chia tài sản hợp lý và phương án nuôi dạy con bền vững." }
    ],
    faqs: [
      { question: "Nếu một bên không chịu ký đơn ly hôn thì bên kia có ly hôn được không?", answer: "Được. Bạn hoàn toàn có quyền nộp đơn xin ly hôn đơn phương khi có căn cứ về việc bạo lực gia đình, vi phạm nghiêm trọng nghĩa vụ vợ chồng khiến hôn nhân lâm vào tình trạng trầm trọng." }
    ]
  },
  {
    id: "pa-inheritance",
    slug: "thua-ke-di-chuc",
    number: "05",
    title: "Thừa kế & Di chúc",
    category: "Bất động sản & Dân sự",
    iconName: "FileSignature",
    image: "/images/desk-contract-1.png",
    shortDesc: "Tư vấn lập di chúc hợp pháp, khai nhận và phân chia di sản thừa kế, giải quyết tranh chấp chia thừa kế nhà đất phức tạp.",
    overview:
      "Di sản thừa kế thường phát sinh mâu thuẫn âm ỉ giữa các đồng thừa kế nếu không có bản di chúc chuẩn chỉ hoặc văn bản phân chia rõ ràng. SaigonLex giúp gia đình gìn giữ hòa khí bằng các thủ tục pháp lý minh bạch, đúng luật và thấu tình đạt lý.",
    commonIssues: [
      { title: "Di chúc lập tay không có người làm chứng hoặc bị tranh cãi về năng lực hành vi", desc: "Dễ bị khởi kiện yêu cầu Tòa tuyên di chúc vô hiệu do vi phạm hình thức hoặc nội dung." },
      { title: "Đồng thừa kế ở nước ngoài không thể về Việt Nam ký văn bản phân chia", desc: "Cần ủy quyền định đoạt hợp pháp thông qua Đại sứ quán / Lãnh sự quán Việt Nam tại nước sở tại." },
      { title: "Tài sản thừa kế qua nhiều thế hệ chưa hoàn tất thủ tục sang tên", desc: "Hồ sơ khai nhận di sản trải qua nhiều hàng thừa kế, thất lạc giấy khai sinh, trích lục khai tử." }
    ],
    serviceScope: [
      "Tư vấn, soạn thảo và làm chứng di chúc hợp pháp tại nhà hoặc tại bệnh viện.",
      "Thực hiện trọn gói thủ tục Khai nhận di sản thừa kế / Thỏa thuận phân chia di sản tại tổ chức hành nghề công chứng.",
      "Hỗ trợ giải quyết thủ tục thừa kế có yếu tố nước ngoài (người định cư hoặc tài sản nước ngoài).",
      "Đại diện thương lượng phân chia di sản giữa các hàng thừa kế.",
      "Khởi kiện phân chia di sản thừa kế theo pháp luật tại Tòa án khi hết thời hiệu thỏa thuận."
    ],
    processSteps: [
      { step: 1, title: "Kiểm tra hàng thừa kế & di sản", desc: "Xác định rõ người thừa kế theo di chúc hoặc theo pháp luật; kiểm tra tình trạng pháp lý tài sản." },
      { step: 2, title: "Thu thập hồ sơ hộ tịch liên quan", desc: "Hỗ trợ trích lục giấy khai sinh, giấy chứng tử, giấy đăng ký kết hôn tại cơ quan tư pháp." },
      { step: 3, title: "Lập văn bản công chứng / Niêm yết", desc: "Thực hiện thủ tục niêm yết công khai 15 ngày tại UBND xã/phường nơi có di sản theo quy định." },
      { step: 4, title: "Đăng ký biến động sang tên tài sản", desc: "Nộp hồ sơ trước bạ sang tên Giấy chứng nhận quyền sở hữu cho người được hưởng thừa kế." }
    ],
    faqs: [
      { question: "Thời hiệu khởi kiện yêu cầu chia di sản thừa kế là bao lâu?", answer: "Theo Bộ luật Dân sự 2015, thời hiệu để người thừa kế yêu cầu chia di sản là 30 năm đối với bất động sản và 10 năm đối với động sản kể từ thời điểm mở thừa kế." }
    ]
  },
  {
    id: "pa-labor",
    slug: "lao-dong-viec-lam",
    number: "06",
    title: "Lao động & Việc làm",
    category: "Doanh nghiệp",
    iconName: "Users",
    image: "/images/practice-labor.png",
    shortDesc: "Xây dựng nội quy lao động, quy chế thưởng, xử lý kỷ luật sa thải đúng luật và giải quyết tranh chấp sa thải trái pháp luật.",
    overview:
      "Mối quan hệ lao động tiềm ẩn rủi ro tranh chấp rất lớn nếu doanh nghiệp áp dụng sai trình tự sa thải hoặc người lao động bị chấm dứt hợp đồng vô cớ. SaigonLex giúp doanh nghiệp chuẩn hóa hồ sơ nhân sự và đồng hành cùng người lao động bảo vệ công lý quyền lợi.",
    commonIssues: [
      { title: "Sa thải nhân sự không tổ chức họp xử lý kỷ luật đúng thành phần", desc: "Doanh nghiệp bị Tòa án tuyên chấm dứt hợp đồng trái luật, buộc phải bồi thường tiền lương lớn." },
      { title: "Tranh chấp điều khoản bảo mật (NDA) và hạn chế cạnh tranh (NCA)", desc: "Nhân sự chủ chốt nghỉ việc mang theo danh sách khách hàng và bí mật kinh doanh sang đối thủ." },
      { title: "Cắt giảm lao động tập thể do thay đổi cơ cấu công nghệ hoặc kinh tế", desc: "Doanh nghiệp thiếu phương án sử dụng lao động và thông báo trước 30 ngày cho cơ quan quản lý." }
    ],
    serviceScope: [
      "Soạn thảo Hợp đồng lao động, Thỏa thuận bảo mật thông tin (NDA), Thỏa thuận không cạnh tranh (NCA).",
      "Xây dựng và đăng ký Nội quy lao động, Thỏa ước lao động tập thể tại Sở LĐ-TB&XH.",
      "Tư vấn quy trình xử lý kỷ luật lao động khiển trách, kéo dài thời hạn nâng lương, sa thải chuẩn luật.",
      "Đại diện người lao động đòi quyền lợi tiền lương, trợ cấp thôi việc và bồi thường sa thải trái luật.",
      "Tham gia hòa giải tranh chấp lao động cá nhân và tập thể tại Hội đồng trọng tài lao động / Tòa án."
    ],
    processSteps: [
      { step: 1, title: "Rà soát hồ sơ lao động", desc: "Kiểm tra hợp đồng lao động, thông báo tuyển dụng và các biên bản ghi nhận hành vi vi phạm." },
      { step: 2, title: "Đánh giá căn cứ pháp lý & Rủi ro", desc: "Đối chiếu Bộ luật Lao động hiện hành và án lệ về sa thải trái pháp luật." },
      { step: 3, title: "Thực hiện quy trình hòa giải", desc: "Đại diện thương lượng gói bồi thường thỏa đáng cho cả doanh nghiệp và người lao động." },
      { step: 4, title: "Khởi kiện & Bảo vệ tại Tòa", desc: "Tham gia các giai đoạn tố tụng giải quyết tranh chấp lao động tại Tòa án nhân dân." }
    ],
    faqs: [
      { question: "Người sử dụng lao động có quyền sa thải nhân viên ngay lập tức không?", answer: "Không. Trừ trường hợp nhân viên tự ý bỏ việc 05 ngày liên tục không có lý do chính đáng, mọi hình thức sa thải khác đều phải qua phiên họp kỷ luật lao động có sự tham gia của tổ chức đại diện người lao động cơ sở." }
    ]
  },
  {
    id: "pa-admin",
    slug: "hanh-chinh",
    number: "07",
    title: "Hành chính & Khiếu nại",
    category: "Tố tụng & Tranh tụng",
    iconName: "FileCheck2",
    image: "/images/desk-contract-2.png",
    shortDesc: "Tư vấn và đại diện thực hiện khiếu nại, khởi kiện các quyết định hành chính, hành vi hành chính trái pháp luật của cơ quan nhà nước.",
    overview:
      "Quan hệ giữa người dân, doanh nghiệp với cơ quan công quyền đòi hỏi sự chuẩn mực tuyệt đối về căn cứ luật định và thời hiệu. SaigonLex đồng hành cùng quý khách hàng soạn thảo đơn khiếu nại sắc bén và đại diện tranh tụng tại Tòa án hành chính.",
    commonIssues: [
      { title: "Bị xử phạt vi phạm hành chính với mức phạt quá nặng hoặc sai thẩm quyền", desc: "Cần khiếu nại hoặc khởi kiện yêu cầu hủy bỏ quyết định xử phạt trái luật." },
      { title: "Bị từ chối cấp Giấy chứng nhận đầu tư hoặc Giấy phép con không có lý do chính đáng", desc: "Cần khiếu nại hành vi hành chính không thực hiện nhiệm vụ, công vụ theo quy định." },
      { title: "Quyết định cưỡng chế thu hồi đất vi phạm trình tự niêm yết và thời hạn thông báo", desc: "Cần yêu cầu Tòa án áp dụng biện pháp khẩn cấp tạm thời để tạm đình chỉ việc cưỡng chế." }
    ],
    serviceScope: [
      "Soạn thảo Đơn khiếu nại lần đầu và Đơn khiếu nại lần hai gửi người đứng đầu cơ quan ban hành quyết định.",
      "Tham gia các phiên đối thoại trực tiếp với người có thẩm quyền giải quyết khiếu nại.",
      "Khởi kiện vụ án hành chính tại Tòa án nhân dân cấp tỉnh/thành phố.",
      "Bảo vệ quyền lợi tại phiên tòa sơ thẩm và phúc thẩm tố tụng hành chính.",
      "Yêu cầu Tòa án áp dụng biện pháp khẩn cấp tạm thời đình chỉ thi hành quyết định hành chính."
    ],
    processSteps: [
      { step: 1, title: "Kiểm tra thẩm quyền & Căn cứ ban hành", desc: "Nghiên cứu văn bản quy phạm pháp luật làm căn cứ và thẩm quyền của người ký quyết định." },
      { step: 2, title: "Lập đơn khiếu nại sắc bén", desc: "Chỉ rõ các sai sót về nội dung, hình thức và trình tự tố tụng hành chính." },
      { step: 3, title: "Tham gia đối thoại công khai", desc: "Luật sư cùng người khiếu nại trình bày quan điểm pháp lý và yêu cầu khắc phục hậu quả." },
      { step: 4, title: "Khởi kiện hành chính tại Tòa", desc: "Tranh luận tại phiên tòa yêu cầu hủy một phần hoặc toàn bộ quyết định hành chính trái luật." }
    ],
    faqs: [
      { question: "Thời hiệu khởi kiện vụ án hành chính là bao lâu?", answer: "Thời hiệu khởi kiện là 01 năm kể từ ngày nhận được hoặc biết được quyết định hành chính, hành vi hành chính, hoặc quyết định giải quyết khiếu nại lần đầu/lần hai." }
    ]
  },
  {
    id: "pa-ip",
    slug: "so-huu-tri-tue",
    number: "08",
    title: "Sở hữu trí tuệ",
    category: "Doanh nghiệp",
    iconName: "Award",
    image: "/images/practice-registration.png",
    shortDesc: "Đăng ký bảo hộ nhãn hiệu, bản quyền tác giả, sáng chế và đại diện xử lý các hành vi cạnh tranh không lành mạnh, xâm phạm bản quyền.",
    overview:
      "Tài sản trí tuệ là cốt lõi giá trị thương hiệu trong nền kinh tế số. SaigonLex hỗ trợ doanh nghiệp xác lập quyền sở hữu trí tuệ tại Cục Sở hữu trí tuệ, đồng thời chủ động ngăn chặn các hành vi sao chép, làm giả và cạnh tranh không lành mạnh trên thị trường.",
    commonIssues: [
      { title: "Nhãn hiệu bị đối thủ nộp đơn đăng ký trước theo nguyên tắc First-to-file", desc: "Cần nộp đơn phản đối cấp văn bằng hoặc đàm phán mua lại quyền ưu tiên hợp pháp." },
      { title: "Hàng giả, hàng nhái tràn lan trên các sàn thương mại điện tử", desc: "Cần giám định sở hữu trí tuệ và gửi thư cảnh cáo (Cease and Desist Letter) buộc gỡ bỏ." },
      { title: "Bị xâm phạm bản quyền phần mềm, hình ảnh nhận diện thương hiệu", desc: "Cần lập vi bằng ghi nhận hành vi vi phạm và yêu cầu Quản lý thị trường xử lý hành chính." }
    ],
    serviceScope: [
      "Tra cứu khả năng đăng ký bảo hộ nhãn hiệu, kiểu dáng công nghiệp, sáng chế tại Việt Nam.",
      "Nộp đơn và theo dõi tiến trình thẩm định tại Cục Sở hữu trí tuệ Việt Nam.",
      "Đăng ký bảo hộ quyền tác giả đối với tác phẩm mỹ thuật ứng dụng, phần mềm máy tính, giáo trình.",
      "Giám định hành vi xâm phạm quyền tại Viện Khoa học Sở hữu trí tuệ (VIPRI).",
      "Đại diện khởi kiện đòi bồi thường thiệt hại do hành vi xâm phạm quyền SHTT gây ra."
    ],
    processSteps: [
      { step: 1, title: "Tra cứu sơ bộ & Chuyên sâu", desc: "Đánh giá xác suất được cấp văn bằng và tư vấn phương án chỉnh sửa để tránh trùng lặp." },
      { step: 2, title: "Nộp đơn lấy ngày ưu tiên", desc: "Hoàn thiện tờ khai, mẫu nhãn hiệu và danh mục sản phẩm/dịch vụ theo bảng phân loại Nice." },
      { step: 3, title: "Theo dõi thẩm định hình thức & Nội dung", desc: "Giải trình kịp thời các thông báo dự định từ chối hoặc phản đối đơn của bên thứ ba." },
      { step: 4, title: "Nhận văn bằng & Quản trị danh mục", desc: "Bàn giao Giấy chứng nhận đăng ký nhãn hiệu và theo dõi gia hạn định kỳ 10 năm/lần." }
    ],
    faqs: [
      { question: "Mất bao lâu để được cấp Giấy chứng nhận đăng ký nhãn hiệu?", answer: "Thời gian luật định là 12–18 tháng kể từ ngày nộp đơn hợp lệ, trải qua các giai đoạn thẩm định hình thức, công bố đơn trên công báo và thẩm định nội dung chuyên sâu." }
    ]
  }
];

/* ======================================================== */
/* 2. FEATURED LEGAL SERVICES (6 Dịch vụ nổi bật - Section 8) */
/* ======================================================== */
export const FEATURED_SERVICES_MAU3: FeaturedServiceMau3[] = [
  {
    id: "fs-1",
    title: "Tư vấn Pháp lý Doanh nghiệp Thường xuyên",
    subtitle: "Retainer Legal Counsel",
    description: "Giải pháp như một phòng pháp chế chuyên nghiệp thuê ngoài cho doanh nghiệp vừa và nhỏ, kiểm soát 100% rủi ro vận hành hàng ngày.",
    iconName: "Briefcase",
    deliverables: ["Rà soát hợp đồng không giới hạn", "Tư vấn lao động & tuân thủ", "Cập nhật văn bản luật định kỳ", "Phản hồi trong vòng 24 giờ"],
    href: "/mau-3/dich-vu#tu-van-thuong-xuyen"
  },
  {
    id: "fs-2",
    title: "Soạn thảo & Rà soát Hợp đồng Kinh tế",
    subtitle: "Contract Drafting & Review",
    description: "Soạn thảo chặt chẽ các hợp đồng mua bán, hợp tác kinh doanh (BCC), nhượng quyền và thỏa thuận cổ đông, bảo vệ tối đa dòng tiền.",
    iconName: "FileText",
    deliverables: ["Đảm bảo hiệu lực pháp lý cao nhất", "Dự liệu kịch bản vi phạm", "Tối ưu hóa điều khoản bồi thường", "Hỗ trợ đàm phán song phương"],
    href: "/mau-3/dich-vu#soan-thao-hop-dong"
  },
  {
    id: "fs-3",
    title: "Thành lập Doanh nghiệp & Đầu tư FDI",
    subtitle: "Corporate Setup & FDI Licensing",
    description: "Hỗ trợ trọn gói xin cấp Giấy chứng nhận đăng ký đầu tư (IRC), Giấy chứng nhận đăng ký doanh nghiệp (ERC) cho nhà đầu tư trong và ngoài nước.",
    iconName: "Globe2",
    deliverables: ["Tư vấn cơ cấu vốn và tỷ lệ sở hữu", "Thẩm định ngành nghề tiếp cận thị trường", "Mở tài khoản vốn DICA", "Khắc dấu và hóa đơn điện tử"],
    href: "/mau-3/dich-vu#thanh-lap-doanh-nghiep"
  },
  {
    id: "fs-4",
    title: "Thay đổi Đăng ký Kinh doanh & Giấy phép con",
    subtitle: "Corporate Amendments & Sub-licenses",
    description: "Xử lý nhanh chóng các thủ tục tăng giảm vốn điều lệ, thay đổi người đại diện pháp luật, bổ sung ngành nghề kinh doanh có điều kiện.",
    iconName: "FileCheck",
    deliverables: ["Hồ sơ chuẩn hóa ngay từ đầu", "Không phát sinh chi phí ẩn", "Thời gian xử lý chuẩn cam kết", "Bàn giao kết quả tận nơi"],
    href: "/mau-3/dich-vu#thay-doi-dang-ky-kd"
  },
  {
    id: "fs-5",
    title: "Đại diện Giải quyết Tranh chấp & Thu hồi Nợ",
    subtitle: "Litigation & Commercial Debt Recovery",
    description: "Tham gia bảo vệ quyền lợi hợp pháp tại Tòa án các cấp và Trung tâm Trọng tài Quốc tế (VIAC), xử lý nợ quá hạn đúng quy định pháp luật.",
    iconName: "Gavel",
    deliverables: ["Đánh giá khả năng thi hành án thực tế", "Gửi thư cảnh báo pháp lý chính thức", "Đại diện tranh tụng tại Tòa", "Theo dõi thi hành án dân sự"],
    href: "/mau-3/dich-vu#tranh-chap-thu-hoi-no"
  },
  {
    id: "fs-6",
    title: "Tư vấn Thủ tục Đất đai & Cấp đổi Sổ đỏ",
    subtitle: "Land Law & Property Title Services",
    description: "Tư vấn thủ tục cấp mới, cấp đổi Giấy chứng nhận quyền sử dụng đất, giải quyết vướng mắc sang tên thừa kế và chuyển mục đích sử dụng đất.",
    iconName: "Home",
    deliverables: ["Thẩm định quy hoạch và hiện trạng", "Tư vấn hạn mức nộp tiền sử dụng đất", "Xử lý hồ sơ giấy tờ tồn đọng", "Đúng thẩm quyền cơ quan nhà nước"],
    href: "/mau-3/dich-vu#thu-tuc-dat-dai"
  }
];

/* ======================================================== */
/* 3. CORE VALUES (Section 6)                               */
/* ======================================================== */
export const CORE_VALUES_MAU3 = [
  {
    number: "01",
    title: "TẬN TÂM",
    enTitle: "DEDICATION",
    subtitle: "Phụng sự bằng trách nhiệm cao nhất",
    description:
      "Mỗi vụ việc của khách hàng đều được xem như việc của chính mình. Luật sư SaigonLex đào sâu từng chi tiết, lắng nghe thấu đáo và theo sát tiến độ đến kết quả cuối cùng.",
    iconName: "Heart"
  },
  {
    number: "02",
    title: "LINH HOẠT",
    enTitle: "FLEXIBILITY",
    subtitle: "Giải pháp thích ứng bối cảnh thực tế",
    description:
      "Không áp dụng rập khuôn lý thuyết pháp luật. Chúng tôi kết hợp tư duy pháp lý sắc bén với sự am hiểu thực tiễn kinh doanh để đưa ra phương án khả thi và tối ưu chi phí.",
    iconName: "Zap"
  },
  {
    number: "03",
    title: "ĐÚNG PHÁP LUẬT",
    enTitle: "INTEGRITY",
    subtitle: "An toàn pháp lý bền vững trọn đời",
    description:
      "Tuyệt đối tuân thủ đạo đức nghề nghiệp và chuẩn mực tố tụng. SaigonLex kiên quyết từ chối các giải pháp rủi ro ngắn hạn, bảo đảm kết quả pháp lý vững chắc trước mọi cơ quan công quyền.",
    iconName: "ShieldCheck"
  }
];

/* ======================================================== */
/* 4. WHY CLIENTS CHOOSE SAIGONLEX (Section 9)             */
/* ======================================================== */
export const WHY_CHOOSE_US_MAU3 = [
  {
    title: "Nghiên cứu hồ sơ cẩn trọng",
    desc: "Đọc kỹ từng văn bản, đối chiếu lịch sử giao dịch và án lệ liên quan trước khi đưa ra nhận định ban đầu.",
    iconName: "SearchCheck"
  },
  {
    title: "Phương án pháp lý rõ ràng",
    desc: "Trình bày giải pháp bằng văn bản súc tích, phân tích rõ điểm mạnh, điểm yếu và xác suất thành công thực tế.",
    iconName: "Target"
  },
  {
    title: "Bảo mật thông tin khách hàng",
    desc: "Ký cam kết bảo mật (NDA) ngay từ buổi làm việc đầu tiên; hệ thống hồ sơ được lưu trữ an toàn, phân quyền nghiêm ngặt.",
    iconName: "Lock"
  },
  {
    title: "Trao đổi minh bạch về chi phí",
    desc: "Hợp đồng dịch vụ pháp lý rõ ràng từng khoản thù lao, không có chi phí ẩn hay chi phí phát sinh vô căn cứ.",
    iconName: "Coins"
  },
  {
    title: "Hỗ trợ xuyên suốt & Phản hồi nhanh",
    desc: "Luật sư chính thức phụ trách vụ việc luôn sẵn sàng kết nối qua điện thoại, email và tiếp đón trực tiếp tại văn phòng.",
    iconName: "Clock"
  },
  {
    title: "Giải pháp phù hợp thực tế kinh doanh",
    desc: "Không chỉ tìm điều luật cấm mà tìm con đường hợp pháp để khách hàng đạt được mục tiêu kinh tế an toàn nhất.",
    iconName: "Lightbulb"
  }
];

/* ======================================================== */
/* 5. CONSULTATION PROCESS (Section 10)                     */
/* ======================================================== */
export const CONSULTATION_PROCESS_MAU3 = [
  {
    step: "01",
    title: "Tiếp nhận yêu cầu",
    desc: "Lắng nghe vấn đề qua Hotline 0908 033 115, đặt lịch hẹn trực tiếp hoặc trao đổi sơ bộ trực tuyến."
  },
  {
    step: "02",
    title: "Đánh giá hồ sơ",
    desc: "Nghiên cứu tài liệu do khách hàng cung cấp, tra cứu quy định pháp luật và tiền lệ xét xử liên quan."
  },
  {
    step: "03",
    title: "Đề xuất phương án",
    desc: "Gửi Thư tư vấn nêu rõ lộ trình xử lý, các rủi ro dự kiến và các kịch bản hành động khả thi."
  },
  {
    step: "04",
    title: "Thống nhất dịch vụ",
    desc: "Ký kết Hợp đồng dịch vụ pháp lý chính thức, xác định rõ trách nhiệm, tiến độ và thù lao luật sư."
  },
  {
    step: "05",
    title: "Triển khai thực hiện",
    desc: "Luật sư trực tiếp soạn thảo văn bản, làm việc với đối tác hoặc tham gia tranh tụng bảo vệ thân chủ."
  },
  {
    step: "06",
    title: "Theo dõi & Hỗ trợ",
    desc: "Bàn giao kết quả chính thức, hỗ trợ các thủ tục hậu kiểm và tư vấn phòng ngừa rủi ro lâu dài."
  }
];

/* ======================================================== */
/* 6. ANONYMIZED REPRESENTATIVE CASES (Section 11)          */
/* ======================================================== */
export const ANONYMIZED_CASES_MAU3: CaseStudyMau3[] = [
  {
    id: "case-1",
    sector: "Hợp đồng thương mại",
    matter: "Tranh chấp thanh toán máy móc thiết bị trị giá 18 tỷ VNĐ",
    issue: "Bên mua chậm thanh toán viện lý do thiết bị chuyển giao không đáp ứng tiêu chuẩn kỹ thuật không nêu trong hợp đồng gốc.",
    approach: "Chứng minh biên bản nghiệm thu từng phần có hiệu lực độc lập, thu thập chứng thư giám định nhà sản xuất và khởi kiện ra Trung tâm Trọng tài VIAC.",
    resultSummary: "Hòa giải thành tại phiên họp trọng tài đầu tiên; bên mua thanh toán 100% nợ gốc và 70% lãi suất chậm trả."
  },
  {
    id: "case-2",
    sector: "Bất động sản & Đất đai",
    matter: "Tranh chấp ranh giới và cấp Giấy chứng nhận quyền sử dụng đất 420m²",
    issue: "Hộ gia đình giáp ranh cản trở ký giáp ranh mốc giới để hoàn tất hồ sơ cấp đổi Sổ đỏ lần đầu.",
    approach: "Trích lục bản đồ địa chính từ năm 1993, xác minh lời khai cán bộ địa chính hưu trí và yêu cầu UBND quận thẩm tra hiện trạng.",
    resultSummary: "UBND quận ban hành quyết định cấp Sổ đỏ theo đúng diện tích thực tế sử dụng ổn định, bảo toàn trọn vẹn tài sản."
  },
  {
    id: "case-3",
    sector: "Quản trị doanh nghiệp",
    matter: "Xử lý xung đột cổ đông và tái cấu trúc công ty xuất nhập khẩu",
    issue: "Nhóm cổ đông nắm 45% cố tình không tham gia ĐHĐCĐ làm tê liệt hoạt động ký kết kinh doanh của công ty.",
    approach: "Áp dụng trình tự triệu tập ĐHĐCĐ lần 2 và lần 3 theo Điều 145 Luật Doanh nghiệp, bảo đảm 100% quy trình pháp lý không thể bị hủy.",
    resultSummary: "Thông qua thành công nghị quyết bầu lại HĐQT, giải cứu doanh nghiệp khỏi nguy cơ đình trệ và kiện tụng bế tắc."
  },
  {
    id: "case-4",
    sector: "Lao động & Nhân sự",
    matter: "Tranh chấp thỏa thuận bảo mật và hạn chế cạnh tranh (NCA)",
    issue: "Giám đốc kỹ thuật chuyển việc sang đối thủ cùng ngành và mang theo mã nguồn sản phẩm đang phát triển.",
    approach: "Lập vi bằng chứng minh hành vi sử dụng tài sản trí tuệ và gửi thông báo cảnh báo pháp lý chính thức (C&D) tới ban giám đốc công ty đối thủ.",
    resultSummary: "Các bên đạt được thỏa thuận chấm dứt sử dụng dữ liệu, thu hồi toàn bộ tài liệu mật mà không cần ra Tòa công khai."
  },
  {
    id: "case-5",
    sector: "Hôn nhân & Tài sản",
    matter: "Phân chia tài sản chung vợ chồng bao gồm cổ phần và bất động sản",
    issue: "Tranh chấp xác định công sức đóng góp đối với khối tài sản tạo lập trong thời kỳ hôn nhân nhưng đứng tên cha mẹ một bên.",
    approach: "Thu thập sao kê dòng tiền kinh doanh gia đình chuyển vào tài khoản xây dựng nhà đất, kiên trì đàm phán phương án chia bằng tiền thỏa đáng.",
    resultSummary: "Tòa án công nhận sự thỏa thuận của các đương sự; bảo đảm quyền trực tiếp nuôi 2 con nhỏ và nhận đủ giá trị tài sản."
  },
  {
    id: "case-6",
    sector: "Sở hữu trí tuệ",
    matter: "Xử lý hành vi sao chép nhãn hiệu chuỗi F&B tại TP.HCM",
    issue: "Cơ sở kinh doanh khác sử dụng tên gọi, bảng hiệu và phong cách nhận diện gây nhầm lẫn nghiêm trọng cho người tiêu dùng.",
    approach: "Thực hiện giám định tại Viện Khoa học SHTT (VIPRI) có kết luận xâm phạm quyền; phối hợp Quản lý thị trường kiểm tra đột xuất.",
    resultSummary: "Cơ sở vi phạm tự nguyện tháo dỡ biển hiệu, cam kết đổi tên và bồi hoàn chi phí xử lý vi phạm cho chủ sở hữu."
  }
];

/* ======================================================== */
/* 7. LEGAL FORMS & RESOURCES (Section 17)                  */
/* ======================================================== */
export const LEGAL_FORMS_MAU3: LegalFormResourceMau3[] = [
  {
    id: "form-1",
    slug: "don-khoi-kien-tranh-chap-hop-dong-thuong-mai",
    title: "Đơn Khởi Kiện Tranh Chấp Hợp Đồng Thương Mại Chuẩn Tòa Án",
    category: "Tố tụng",
    description: "Mẫu đơn khởi kiện theo Nghị quyết 01/2017/NQ-HĐTP, bao gồm phần hướng dẫn xác định tư cách đương sự và yêu cầu bồi thường.",
    updatedDate: "Tháng 09/2026",
    status: "Đang áp dụng (Luật mới)",
    fileType: "DOCX",
    fileSize: "48 KB",
    relatedService: "Đại diện giải quyết tranh chấp & Thu hồi nợ"
  },
  {
    id: "form-2",
    slug: "don-khieu-nai-quyet-dinh-hanh-chinh-dat-dai",
    title: "Đơn Khiếu Nại Quyết Định Thu Hồi Đất & Phương Án Bồi Thường",
    category: "Đất đai",
    description: "Mẫu đơn khiếu nại gửi Chủ tịch UBND cấp huyện/tỉnh, chuẩn hóa căn cứ đối chiếu bảng giá đất sát thị trường theo Luật Đất đai 2024.",
    updatedDate: "Tháng 09/2026",
    status: "Đang áp dụng (Luật mới)",
    fileType: "DOCX",
    fileSize: "52 KB",
    relatedService: "Tư vấn thủ tục đất đai & Cấp đổi sổ đỏ"
  },
  {
    id: "form-3",
    slug: "hop-dong-lao-dong-khong-xac-dinh-thoi-han-chuan",
    title: "Mẫu Hợp Đồng Lao Động Chuẩn Bộ Luật Lao Động Hiện Hành",
    category: "Lao động",
    description: "Điều khoản chặt chẽ về quyền lợi, nghĩa vụ, thời gian làm việc, bảo mật thông tin nội bộ (NDA) và xử lý kỷ luật lao động.",
    updatedDate: "Tháng 08/2026",
    status: "Mẫu chuẩn tham khảo",
    fileType: "DOCX",
    fileSize: "64 KB",
    relatedService: "Tư vấn pháp lý doanh nghiệp thường xuyên"
  },
  {
    id: "form-4",
    slug: "van-ban-thoa-thuan-phan-chia-di-san-thua-ke",
    title: "Văn Bản Thỏa Thuận Phân Chia Di Sản Thừa Kế Tại Văn Phòng Công Chứng",
    category: "Dân sự",
    description: "Mẫu biên bản phân chia nhà đất giữa các đồng thừa kế, có điều khoản từ chối nhận di sản và bảo lưu nghĩa vụ trả nợ của người để lại di sản.",
    updatedDate: "Tháng 09/2026",
    status: "Đang áp dụng (Luật mới)",
    fileType: "DOCX",
    fileSize: "45 KB",
    relatedService: "Thừa kế & Di chúc"
  },
  {
    id: "form-5",
    slug: "giay-uy-quyen-tham-gia-to-tung-dan-su",
    title: "Giấy Ủy Quyền Tham Gia Tố Tụng Dân Sự Cho Luật Sư",
    category: "Tố tụng",
    description: "Xác định rõ phạm vi ủy quyền: Nộp đơn, tham gia hòa giải, cung cấp chứng cứ và quyền kháng cáo bản án sơ thẩm.",
    updatedDate: "Tháng 09/2026",
    status: "Mẫu chuẩn tham khảo",
    fileType: "DOCX",
    fileSize: "36 KB",
    relatedService: "Đại diện tố tụng & Tranh tụng"
  },
  {
    id: "form-6",
    slug: "checklist-ho-so-thanh-lap-doanh-nghiep-fdi",
    title: "Checklist Hồ Sơ Đăng Ký Đầu Tư & Thành Lập Công Ty FDI Tại TP.HCM",
    category: "Doanh nghiệp",
    description: "Bảng kiểm danh mục tài liệu cần hợp pháp hóa lãnh sự, giải trình năng lực tài chính và mẫu biểu IRC/ERC mới nhất.",
    updatedDate: "Tháng 09/2026",
    status: "Đang áp dụng (Luật mới)",
    fileType: "PDF",
    fileSize: "1.2 MB",
    relatedService: "Thành lập doanh nghiệp & Đầu tư FDI"
  }
];

/* ======================================================== */
/* 8. NEWS & EVENTS (Section 15)                            */
/* ======================================================== */
export const NEWS_ARTICLES_MAU3: NewsArticleMau3[] = [
  {
    id: "news-1",
    slug: "saigonlex-to-chuc-toa-dam-nhung-diem-moi-luat-dat-dai",
    title: "SaigonLex Tổ Chức Tọa Đàm Chuyên Đề: Những Điểm Mới Trong Luật Đất Đai Cho Doanh Nghiệp Bất Động Sản",
    excerpt: "Hơn 50 lãnh đạo doanh nghiệp và nhà đầu tư đã tham dự buổi thảo luận chuyên sâu về bảng giá đất sát thị trường và quy trình giao đất đấu thầu mới.",
    category: "Sự kiện & Hội thảo",
    publishDate: "02/10/2026",
    readTime: "4 phút đọc",
    image: "/images/consultation-meeting.png",
    author: "Ban Biên Tập SaigonLex",
    contentHtml: `<p>Nhằm hỗ trợ cộng đồng doanh nghiệp nắm bắt kịp thời các quy định quan trọng của Luật Đất đai mới, Công ty Luật SaigonLex đã tổ chức buổi tọa đàm chuyên đề vào ngày 01/10/2026 tại TP. Hồ Chí Minh với sự chủ trì của Luật sư Trần Thị Sương.</p><p>Tại buổi tọa đàm, các luật sư đã phân tích tác động trực tiếp của việc bỏ khung giá đất, cơ chế thỏa thuận nhận quyền sử dụng đất để thực hiện dự án nhà ở thương mại và giải pháp rà soát pháp lý toàn diện cho quỹ đất hiện hữu.</p>`
  },
  {
    id: "news-2",
    slug: "ky-ket-hop-dong-tu-van-phap-ly-thuong-xuyen-tap-doan-fmcg",
    title: "SaigonLex Ký Kết Hợp Đồng Tư Vấn Pháp Lý Thường Xuyên Với Tập Đoàn Phân Phối FMCG Hàng Đầu",
    excerpt: "SaigonLex chính thức trở thành đơn vị tư vấn pháp luật độc quyền, chịu trách nhiệm rà soát hợp đồng đại lý và quản trị tuân thủ chuỗi cung ứng.",
    category: "Hoạt động SaigonLex",
    publishDate: "25/09/2026",
    readTime: "3 phút đọc",
    image: "/images/desk-contract-1.png",
    author: "Ban Truyền Thông SaigonLex",
    contentHtml: `<p>Ngày 25/09/2026, Công ty Luật SaigonLex và đối tác đã hoàn tất lễ ký kết hợp đồng dịch vụ tư vấn pháp luật thường xuyên. Theo thỏa thuận, nhóm luật sư chuyên trách về Thương mại & Hợp đồng của SaigonLex sẽ đồng hành hỗ trợ phòng pháp chế nội bộ của đối tác trong toàn bộ hoạt động đàm phán hợp đồng cung ứng và phòng ngừa tranh chấp thương mại.</p>`
  },
  {
    id: "news-3",
    slug: "hoat-dong-tu-van-phap-luat-mien-phi-cho-nguoi-lao-dong",
    title: "Chương Trình Tư Vấn Pháp Luật Cộng Đồng & Trợ Giúp Người Lao Động Quý 3/2026",
    excerpt: "Đội ngũ luật sư trẻ SaigonLex tham gia tư vấn trực tiếp về hợp đồng lao động, bảo hiểm xã hội và thủ tục hành chính cho hơn 120 người dân tại TP. Thủ Đức.",
    category: "Phổ biến pháp luật",
    publishDate: "18/09/2026",
    readTime: "3 phút đọc",
    image: "/images/consultation-meeting-2.png",
    author: "Ban Công Tác Xã Hội",
    contentHtml: `<p>Phát huy tinh thần trách nhiệm xã hội của người luật sư, ngày 18/09/2026, Công ty Luật SaigonLex đã phối hợp tổ chức buổi tư vấn pháp luật miễn phí cho công nhân và người lao động trên địa bàn. Chương trình tập trung giải đáp các vướng mắc về bảo hiểm xã hội một lần, trợ cấp thất nghiệp và thủ tục đăng ký tạm trú, tạm vắng.</p>`
  },
  {
    id: "news-4",
    slug: "saigonlex-nang-cap-ha-tang-so-bao-mat-ho-so-khach-hang",
    title: "SaigonLex Nâng Cấp Hệ Thống Bảo Mật Dữ Liệu Hồ Sơ Khách Hàng Chuẩn ISO/IEC 27001",
    excerpt: "Áp dụng công nghệ mã hóa đầu cuối và quy trình lưu trữ hồ sơ vụ việc chuyên biệt nhằm bảo đảm an toàn thông tin tuyệt đối cho khách hàng doanh nghiệp.",
    category: "Hoạt động SaigonLex",
    publishDate: "10/09/2026",
    readTime: "4 phút đọc",
    image: "/images/architecture-interior.png",
    author: "Bộ Phận Công Nghệ & Tuân Thủ",
    contentHtml: `<p>Để đáp ứng yêu cầu ngày càng khắt khe về bảo vệ dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP, SaigonLex đã hoàn tất đợt nâng cấp toàn diện hạ tầng lưu trữ số. Mọi tài liệu vụ việc và thông tin trao đổi với thân chủ đều được mã hóa và phân quyền truy cập nghiêm ngặt theo chức danh luật sư phụ trách.</p>`
  }
];

/* ======================================================== */
/* 9. RECRUITMENT OPENINGS (Section 16)                     */
/* ======================================================== */
export const JOB_OPENINGS_MAU3: JobOpeningMau3[] = [
  {
    id: "job-1",
    slug: "chuyen-vien-phap-ly",
    position: "Chuyên Viên Pháp Lý (Legal Executive)",
    department: "Bộ phận Doanh nghiệp & Thương mại",
    location: "TP. Hồ Chí Minh",
    employmentType: "Toàn thời gian",
    deadline: "31/10/2026",
    description: [
      "Nghiên cứu hồ sơ vụ việc, tra cứu quy định pháp luật và hệ thống án lệ liên quan.",
      "Soạn thảo văn bản pháp lý: Đơn khởi kiện, hợp đồng kinh tế, biên bản làm việc và hồ sơ doanh nghiệp.",
      "Hỗ trợ Luật sư tham gia tố tụng tại Tòa án các cấp và làm việc với các cơ quan hành chính nhà nước.",
      "Thực hiện thủ tục đăng ký kinh doanh, điều chỉnh dự án đầu tư và xin cấp giấy phép con."
    ],
    requirements: [
      "Tốt nghiệp Cử nhân Luật hệ chính quy (ĐH Luật Hà Nội, ĐH Luật TP.HCM, ĐH Kinh tế – Luật).",
      "Kinh nghiệm từ 01 năm trở lên tại tổ chức hành nghề luật sư hoặc pháp chế doanh nghiệp.",
      "Cẩn trọng, tư duy logic tốt, tinh thần trách nhiệm cao và khả năng chịu áp lực tiến độ."
    ],
    benefits: [
      "Mức lương thỏa thuận cạnh tranh tương xứng năng lực + Thưởng vụ việc và quý.",
      "Được trực tiếp hướng dẫn và kèm cặp bởi các Luật sư thành viên giàu kinh nghiệm thực chiến.",
      "Môi trường làm việc văn minh, hỗ trợ tối đa quá trình tập sự hành nghề luật sư để lấy thẻ."
    ]
  },
  {
    id: "job-2",
    slug: "thuc-tap-sinh-phap-ly",
    position: "Thực Tập Sinh Pháp Lý (Legal Intern)",
    department: "Phòng Tranh tụng & Dân sự",
    location: "TP. Hồ Chí Minh",
    employmentType: "Thực tập / Bán thời gian",
    deadline: "15/11/2026",
    description: [
      "Hỗ trợ tra cứu tài liệu pháp lý, chuẩn bị hồ sơ chứng cứ phục vụ các phiên tòa dân sự, kinh tế.",
      "Tham gia cùng luật sư tiếp nhận thông tin khách hàng và ghi chép biên bản làm việc.",
      "Thực hiện các công việc hành chính tư pháp: Nộp đơn, liên hệ tòa án, cơ quan thi hành án."
    ],
    requirements: [
      "Sinh viên năm 3, năm 4 hoặc vừa tốt nghiệp Cử nhân Luật các trường đại học chuyên ngành.",
      "Chăm chỉ, trung thực, có kỹ năng tin học văn phòng tốt và tinh thần ham học hỏi.",
      "Thời gian thực tập tối thiểu 3 – 4 ngày/tuần."
    ],
    benefits: [
      "Hỗ trợ phụ cấp thực tập hàng tháng và chi phí công tác.",
      "Được đóng dấu xác nhận thực tập tốt nghiệp và báo cáo thực tập chuẩn mực.",
      "Cơ hội được giữ lại làm Chuyên viên pháp lý chính thức sau kỳ thực tập xuất sắc."
    ]
  },
  {
    id: "job-3",
    slug: "luat-su-tranh-tung-va-tu-van-doanh-nghiep",
    position: "Luật Sư Tranh Tụng & Tư Vấn Doanh Nghiệp",
    department: "Ban Tranh tụng & Tư vấn Cao cấp",
    location: "TP. Hồ Chí Minh",
    employmentType: "Toàn thời gian",
    deadline: "30/11/2026",
    description: [
      "Trực tiếp đại diện thân chủ tham gia tố tụng tại Tòa án và Trọng tài thương mại.",
      "Chủ trì đàm phán hợp đồng thương mại lớn và giải quyết các xung đột nội bộ công ty.",
      "Quản lý và hướng dẫn chuyên môn cho nhóm chuyên viên pháp lý cấp dưới."
    ],
    requirements: [
      "Đã có Thẻ Luật sư do Liên đoàn Luật sư Việt Nam cấp (tối thiểu 03 năm hành nghề thực tế).",
      "Kinh nghiệm độc lập tham gia tranh tụng tối thiểu 15 vụ án dân sự, thương mại hoặc hình sự.",
      "Tiếng Anh pháp lý lưu loát là một lợi thế lớn."
    ],
    benefits: [
      "Thu nhập hấp dẫn: Lương cứng cao + Tỷ lệ % thưởng doanh thu vụ việc cạnh tranh bậc nhất.",
      "Lộ trình phát triển rõ ràng lên Luật sư thành viên (Partner) của hãng luật.",
      "Tham gia các khóa đào tạo nâng cao kỹ năng tranh tụng quốc tế do hãng tài trợ."
    ]
  }
];

/* ======================================================== */
/* 10. FAQ (Section 18)                                     */
/* ======================================================== */
export const FAQ_MAU3 = [
  {
    question: "Khi nào tôi nên đặt lịch tư vấn trực tiếp với Luật sư?",
    answer:
      "Quý khách nên liên hệ luật sư ngay khi phát sinh các sự kiện pháp lý quan trọng như: chuẩn bị ký hợp đồng giá trị lớn, nhận được thông báo vi phạm hoặc giấy triệu tập của cơ quan nhà nước, phát sinh mâu thuẫn tranh chấp đất đai hoặc khi có ý định ly hôn/phân chia tài sản. Việc có luật sư đồng hành từ đầu giúp bảo toàn quyền lợi và tiết kiệm tối đa chi phí khắc phục rủi ro về sau."
  },
  {
    question: "Tôi cần chuẩn bị những tài liệu gì trước buổi làm việc với Luật sư?",
    answer:
      "Để buổi tư vấn đạt hiệu quả cao nhất, quý khách nên chuẩn bị trước: (1) Toàn bộ hợp đồng, phụ lục, biên bản bàn giao liên quan; (2) Giấy tờ nhân thân hoặc hồ sơ pháp lý doanh nghiệp; (3) Giấy tờ chứng minh quyền sở hữu tài sản (Sổ đỏ, đăng ký xe...); (4) Bản tóm tắt dòng thời gian diễn biến vụ việc. Luật sư sẽ hỗ trợ phân loại và hướng dẫn thu thập thêm nếu còn thiếu."
  },
  {
    question: "SaigonLex có hỗ trợ tư vấn trực tuyến (Online) cho khách hàng ở xa không?",
    answer:
      "Có. SaigonLex cung cấp dịch vụ tư vấn pháp lý trực tuyến qua Google Meet, Zoom, Zalo hoặc điện thoại cho các khách hàng tại các tỉnh thành khác hoặc đang ở nước ngoài. Sau buổi tư vấn, chúng tôi sẽ phát hành Thư tư vấn pháp lý chính thức có chữ ký số của luật sư gửi qua email."
  },
  {
    question: "Thời gian xử lý một vụ việc pháp lý phụ thuộc vào những yếu tố nào?",
    answer:
      "Thời gian giải quyết phụ thuộc vào 3 yếu tố cốt lõi: (1) Tính chất phức tạp và số lượng tài liệu chứng cứ cần xác minh; (2) Thiện chí hòa giải, thương lượng của các bên liên quan; (3) Trình tự thời hạn tố tụng luật định của Tòa án hoặc cơ quan hành chính giải quyết vụ việc. SaigonLex luôn cam kết minh bạch tiến độ và tối ưu hóa thời gian cho thân chủ."
  },
  {
    question: "Thông tin và hồ sơ tôi cung cấp có được bảo mật tuyệt đối không?",
    answer:
      "Hoàn toàn bảo mật tuyệt đối. Theo Luật Luật sư và Quy tắc đạo đức ứng xử nghề nghiệp luật sư Việt Nam, luật sư có nghĩa vụ giữ bí mật thông tin của khách hàng. SaigonLex ký Thỏa thuận bảo mật thông tin (NDA) và áp dụng hệ thống bảo mật số, cam kết không tiết lộ cho bất kỳ bên thứ ba nào nếu không có sự đồng ý bằng văn bản của quý khách."
  }
];
