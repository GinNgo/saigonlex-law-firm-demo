export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: "Doanh nghiệp" | "Đầu tư & Hợp đồng" | "Bất động sản & Dân sự" | "Tranh tụng";
  iconName: string;
  image: string;
  shortDesc: string;
  overview: string;
  commonIssues: { title: string; desc: string }[];
  serviceScope: string[];
  processSteps: { step: number; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  highlights: string[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "corp",
    slug: "tu-van-doanh-nghiep",
    title: "Tư vấn Pháp luật Doanh nghiệp Thường xuyên & Chuyên sâu",
    shortTitle: "Pháp luật Doanh nghiệp",
    category: "Doanh nghiệp",
    iconName: "Briefcase",
    image: "/images/practice-corporate.png",
    shortDesc: "Đồng hành pháp lý toàn diện, quản trị rủi ro tuân thủ nội bộ và hỗ trợ tái cấu trúc doanh nghiệp.",
    overview:
      "Trong bối cảnh thị trường cạnh tranh khốc liệt và môi trường pháp lý liên tục cập nhật, dịch vụ tư vấn pháp luật doanh nghiệp tại SAIGONLEX đóng vai trò như một phòng pháp chế thuê ngoài cao cấp. Chúng tôi bảo vệ tối đa lợi ích của cổ đông, hội đồng quản trị và ban điều hành trước mọi rủi ro pháp lý phát sinh trong quá trình vận hành.",
    commonIssues: [
      {
        title: "Xung đột lợi ích giữa các nhóm cổ đông / thành viên góp vốn",
        desc: "Thiếu thỏa thuận cổ đông rõ ràng dẫn đến tranh chấp quyền phủ quyết, tỷ lệ biểu quyết và phân chia cổ tức."
      },
      {
        title: "Vi phạm nghĩa vụ tuân thủ và công bố thông tin",
        desc: "Rủi ro bị xử phạt hành chính hoặc đình chỉ giấy phép do không đáp ứng đúng thời hạn pháp định của Luật Doanh nghiệp."
      },
      {
        title: "Rủi ro pháp lý trong tái cấu trúc nội bộ",
        desc: "Sáp nhập, chia tách hoặc thay đổi mô hình quản trị mà không đánh giá kỹ quyền lợi chủ nợ và nghĩa vụ thuế."
      }
    ],
    serviceScope: [
      "Soát xét và xây dựng Điều lệ công ty, Quy chế quản trị nội bộ, Thỏa thuận cổ đông (SHA).",
      "Tư vấn pháp lý thường xuyên (Retainer Counsel) giải đáp văn bản, rà soát quyết định của HĐQT/Ban Giám đốc.",
      "Tư vấn giải pháp giải quyết xung đột nội bộ doanh nghiệp và bảo vệ cổ đông thiểu số.",
      "Đánh giá rủi ro pháp lý (Legal Health Check) toàn diện trước các đợt phát hành cổ phần hoặc gọi vốn đầu tư.",
      "Hỗ trợ tổ chức Đại hội đồng cổ đông / Họp Hội đồng thành viên đúng trình tự luật định."
    ],
    processSteps: [
      { step: 1, title: "Tiếp nhận & Khảo sát hiện trạng", desc: "Luật sư thu thập hồ sơ pháp lý hiện hữu, phỏng vấn nhu cầu và xác định mục tiêu của ban lãnh đạo doanh nghiệp." },
      { step: 2, title: "Đánh giá rủi ro & Báo cáo pháp lý", desc: "Soát xét văn bản pháp quy, phát hiện các điểm nghẽn tuân thủ và lập báo cáo khuyến nghị chi tiết." },
      { step: 3, title: "Soạn thảo & Triển khai giải pháp", desc: "Xây dựng dự thảo điều lệ, thỏa thuận, quy chế nội bộ và đồng hành hướng dẫn ban hành thực tế." },
      { step: 4, title: "Hỗ trợ thường xuyên & Giám sát tuân thủ", desc: "Phản hồi các phát sinh hàng ngày trong vòng 24h làm việc và cập nhật định kỳ văn bản quy phạm mới." }
    ],
    faqs: [
      {
        question: "Gói luật sư nội bộ thuê ngoài (Retainer) hoạt động như thế nào?",
        answer: "SAIGONLEX phân công một luật sư chủ trì và nhóm trợ lý chuyên trách tiếp nhận mọi yêu cầu soát xét hợp đồng, soạn văn bản và tư vấn nghiệp vụ hàng tháng theo hạn mức giờ linh hoạt."
      },
      {
        question: "Làm thế nào để bảo vệ quyền lợi cổ đông thiểu số khi nắm dưới 35% vốn?",
        answer: "Thông qua việc bổ sung các điều khoản phủ quyết đặc biệt trong Thỏa thuận cổ đông (SHA) và Điều lệ công ty đối với các quyết định trọng yếu như tăng vốn, vay nợ lớn hoặc chuyển nhượng tài sản cốt lõi."
      }
    ],
    highlights: ["Bảo mật thông tin tuyệt đối", "Phản hồi trong 24 giờ", "Đội ngũ chuyên trách M&A"]
  },
  {
    id: "reg",
    slug: "thanh-lap-thay-doi-doanh-nghiep",
    title: "Thành lập & Thay đổi Đăng ký Doanh nghiệp Trọn gói",
    shortTitle: "Đăng ký & Cấp phép DN",
    category: "Doanh nghiệp",
    iconName: "FileCheck",
    image: "/images/practice-registration.png",
    shortDesc: "Thủ tục thành lập công ty, chi nhánh, văn phòng đại diện và điều chỉnh giấy phép kinh doanh chính xác, nhanh chóng.",
    overview:
      "Khởi tạo doanh nghiệp đúng ngay từ bước đầu tiên giúp nhà đầu tư tiết kiệm hàng trăm giờ làm việc và tránh các bẫy pháp lý về ngành nghề kinh doanh có điều kiện, nghĩa vụ vốn điều lệ hay nghĩa vụ thuế ban đầu. SAIGONLEX cung cấp giải pháp trọn gói từ tư vấn loại hình doanh nghiệp tối ưu đến khi doanh nghiệp sẵn sàng vận hành.",
    commonIssues: [
      {
        title: "Đăng ký vốn điều lệ không phù hợp năng lực tài chính",
        desc: "Rủi ro chịu phạt do không góp đủ vốn trong thời hạn 90 ngày hoặc chịu trách nhiệm tài sản vô hạn."
      },
      {
        title: "Lựa chọn sai mã ngành nghề kinh doanh có điều kiện",
        desc: "Không đủ điều kiện cấp phép con dẫn đến đình trệ hoạt động kinh doanh thực tế sau khi thành lập."
      },
      {
        title: "Chậm trễ thông báo thay đổi thông tin đăng ký doanh nghiệp",
        desc: "Bị xử phạt vi phạm hành chính khi thay đổi người đại diện theo pháp luật hoặc cơ cấu thành viên mà không nộp hồ sơ đúng hạn."
      }
    ],
    serviceScope: [
      "Tư vấn lựa chọn mô hình: Công ty TNHH 1 TV, TNHH 2 TV trở lên, Công ty Cổ phần, Công ty Hợp danh.",
      "Soạn thảo hồ sơ thành lập doanh nghiệp, xin cấp Giấy chứng nhận đăng ký doanh nghiệp (ERC).",
      "Thủ tục khắc dấu, đăng ký tài khoản ngân hàng, thông báo phát hành hóa đơn điện tử.",
      "Thay đổi nội dung đăng ký kinh doanh: Tăng/giảm vốn điều lệ, thay đổi người đại diện, chuyển nhượng phần vốn góp.",
      "Thành lập chi nhánh, văn phòng đại diện, địa điểm kinh doanh tại 63 tỉnh thành trên toàn quốc."
    ],
    processSteps: [
      { step: 1, title: "Tư vấn định hướng", desc: "Xác định cơ cấu vốn, ngành nghề kinh doanh, người đại diện và địa chỉ trụ sở phù hợp quy hoạch." },
      { step: 2, title: "Chuẩn bị hồ sơ pháp lý", desc: "Soạn thảo bộ hồ sơ theo chuẩn Thông tư và biểu mẫu của Sở Kế hoạch & Đầu tư." },
      { step: 3, title: "Nộp hồ sơ & Đại diện làm việc", desc: "Đại diện theo ủy quyền làm việc với cơ quan đăng ký kinh doanh và xử lý giải trình nếu có." },
      { step: 4, title: "Bàn giao kết quả & Hướng dẫn sau thành lập", desc: "Trao tận tay Giấy chứng nhận, con dấu pháp nhân và hướng dẫn kê khai thuế ban đầu." }
    ],
    faqs: [
      {
        question: "Thời gian thành lập công ty mất bao lâu?",
        answer: "Thông thường từ 03 - 05 ngày làm việc kể từ thời điểm nộp hồ sơ hợp lệ tại Sở Kế hoạch và Đầu tư."
      },
      {
        question: "Người nước ngoài có được đứng tên thành lập công ty tại Việt Nam không?",
        answer: "Được phép theo Luật Đầu tư và cam kết WTO của Việt Nam, tuy nhiên cần thực hiện thêm thủ tục xin Giấy chứng nhận đăng ký đầu tư (IRC) đối với ngành nghề mở cửa thị trường."
      }
    ],
    highlights: ["Không phát sinh chi phí", "Tối ưu mô hình thuế ban đầu", "Hỗ trợ mở tài khoản ngân hàng"]
  },
  {
    id: "contract",
    slug: "hop-dong-thuong-mai",
    title: "Tư vấn, Soạn thảo & Rà soát Hợp đồng Thương mại",
    shortTitle: "Hợp đồng & Giao dịch",
    category: "Đầu tư & Hợp đồng",
    iconName: "FileSignature",
    image: "/images/practice-contracts.png",
    shortDesc: "Bảo đảm tính chặt chẽ, dự liệu rủi ro vi phạm và bảo vệ tối đa quyền lợi tài chính của khách hàng.",
    overview:
      "Hợp đồng là xương sống của mọi quan hệ giao thương. Một điều khoản mập mờ hoặc bất lợi có thể dẫn đến thiệt hại hàng triệu đô la khi xảy ra biến động thị trường. Đội ngũ luật sư hợp đồng tại SAIGONLEX không chỉ đảm bảo sự tuân thủ pháp luật Việt Nam mà còn am hiểu sâu sắc tập quán thương mại quốc tế (Incoterms, UCP 600, FIDIC).",
    commonIssues: [
      {
        title: "Điều khoản bồi thường thiệt hại và phạt vi phạm không chuẩn xác",
        desc: "Quy định mức phạt vượt trần 8% theo Luật Thương mại hoặc không dự liệu được thiệt hại gián tiếp dẫn đến việc tòa bác yêu cầu bồi thường."
      },
      {
        title: "Cơ chế thanh toán và nghiệm thu bất lợi",
        desc: "Bị đối tác chây ì thanh toán do tiêu chí nghiệm thu định tính, không có bảo lãnh ngân hàng hoặc thiếu điều kiện đình chỉ thực hiện."
      },
      {
        title: "Điều khoản bất khả kháng và chọn luật giải quyết tranh chấp",
        desc: "Sử dụng mẫu hợp đồng dịch từ nước ngoài áp dụng luật ngoại không khả thi thi hành tại lãnh thổ Việt Nam."
      }
    ],
    serviceScope: [
      "Soạn thảo hợp đồng mua bán hàng hóa quốc tế và nội địa, hợp đồng cung ứng dịch vụ cao cấp.",
      "Soát xét (Contract Review) và đánh giá ma trận rủi ro pháp lý kèm phương án đàm phán thay thế.",
      "Đại diện thân chủ tham gia đàm phán trực tiếp các điều khoản hợp đồng trọng yếu với đối tác.",
      "Soạn thảo hợp đồng nhượng quyền thương mại (Franchise), phân phối độc quyền, hợp đồng hợp tác kinh doanh (BCC).",
      "Tư vấn giải quyết bế tắc và xử lý hành vi vi phạm nghĩa vụ hợp đồng trước khi khởi kiện."
    ],
    processSteps: [
      { step: 1, title: "Phân tích mục tiêu thương mại", desc: "Lắng nghe kỳ vọng kinh doanh của khách hàng và lập bảng rủi ro trọng yếu của giao dịch." },
      { step: 2, title: "Soát xét chuyên sâu (Redline)", desc: "Ghi chú điều chỉnh từng điều khoản, giải thích lý do pháp lý và đưa ra văn phong đàm phán cân bằng." },
      { step: 3, title: "Đồng hành đàm phán", desc: "Cùng thân chủ dự các buổi thương lượng song phương để bảo vệ từng câu chữ cốt lõi." },
      { step: 4, title: "Hoàn thiện bản ký kết & Lưu trữ", desc: "Kiểm tra thẩm quyền ký kết, điều kiện có hiệu lực và hướng dẫn lưu trữ chứng từ thực thi." }
    ],
    faqs: [
      {
        question: "Phạt vi phạm và bồi thường thiệt hại khác nhau như thế nào trong hợp đồng thương mại?",
        answer: "Phạt vi phạm là khoản thỏa thuận trước khi một bên có lỗi vi phạm (tối đa 8% giá trị phần nghĩa vụ vi phạm theo Luật Thương mại), trong khi bồi thường thiệt hại đòi hỏi chứng minh tổn thất thực tế trực tiếp phát sinh."
      },
      {
        question: "Nên chọn Tòa án hay Trọng tài thương mại để giải quyết tranh chấp hợp đồng?",
        answer: "Trọng tài bảo đảm tính bảo mật, linh hoạt về ngôn ngữ/địa điểm và phán quyết có hiệu lực chung thẩm, rất thích hợp cho hợp đồng giá trị lớn và giao dịch quốc tế."
      }
    ],
    highlights: ["Chuẩn mực Incoterms & FIDIC", "Đàm phán song phương thực chiến", "Rà soát đa ngôn ngữ Việt - Anh"]
  },
  {
    id: "fdi",
    slug: "tu-van-dau-tu",
    title: "Tư vấn Đầu tư Nước ngoài (FDI) & Dự án Trọng điểm",
    shortTitle: "Tư vấn Đầu tư & FDI",
    category: "Đầu tư & Hợp đồng",
    iconName: "Globe2",
    image: "/images/practice-investment.png",
    shortDesc: "Đồng hành cùng nhà đầu tư quốc tế và quỹ đầu tư từ khâu khảo sát thị trường đến cấp phép dự án.",
    overview:
      "Việt Nam là điểm đến hấp dẫn của dòng vốn FDI toàn cầu nhưng cũng đòi hỏi sự am hiểu thấu đáo về thủ tục cấp phép đầu tư, điều kiện tiếp cận thị trường và chính sách ưu đãi theo từng địa bàn. SAIGONLEX cung cấp dịch vụ tư vấn pháp lý đầu tư toàn diện, giúp nhà đầu tư thiết lập hiện diện thương mại hợp pháp và an toàn.",
    commonIssues: [
      {
        title: "Vướng mắc rào cản tỷ lệ sở hữu nước ngoài (Foreign Ownership Limit)",
        desc: "Một số ngành dịch vụ đặc thù yêu cầu liên doanh với đối tác trong nước hoặc chưa cam kết mở cửa trong biểu WTO."
      },
      {
        title: "Thủ tục thẩm định năng lực tài chính và công nghệ dự án",
        desc: "Kéo dài thời gian cấp IRC do hồ sơ chứng minh vốn hoặc tài liệu xuất xứ công nghệ không hợp pháp hóa lãnh sự đúng cách."
      },
      {
        title: "Tuân thủ nghĩa vụ báo cáo giám sát đầu tư định kỳ",
        desc: "Nhà đầu tư nước ngoài quên nộp báo cáo trên Hệ thống thông tin quốc gia về đầu tư dẫn đến bị phạt và khó xin gia hạn dự án."
      }
    ],
    serviceScope: [
      "Tư vấn lựa chọn hình thức đầu tư: Dự án mới 100% vốn nước ngoài, Mua cổ phần/phần vốn góp (M&A), Hợp đồng BCC.",
      "Thực hiện thủ tục xin cấp Giấy chứng nhận đăng ký đầu tư (IRC) và Quyết định chấp thuận chủ trương đầu tư.",
      "Thẩm định pháp lý (Legal Due Diligence - LDD) đối tác liên doanh, quỹ đất hoặc doanh nghiệp mục tiêu.",
      "Tư vấn chính sách ưu đãi thuế thu nhập doanh nghiệp, miễn giảm tiền thuê đất và quy định ngoại hối chuyển lợi nhuận ra nước ngoài.",
      "Hỗ trợ xin giấy phép lao động (Work Permit) và thẻ tạm trú (TRC) cho chuyên gia, nhà đầu tư nước ngoài."
    ],
    processSteps: [
      { step: 1, title: "Nghiên cứu tính khả thi pháp lý", desc: "Đối chiếu mã ngành nghề dự kiến với Biểu cam kết WTO, EVFTA, CPTPP và Luật Đầu tư hiện hành." },
      { step: 2, title: "Lập hồ sơ đăng ký dự án đầu tư", desc: "Xây dựng đề xuất dự án, phương án giải trình công nghệ, nhu cầu sử dụng lao động và đánh giá tác động." },
      { step: 3, title: "Làm việc với Ban quản lý KCN / Sở KH&ĐT", desc: "Theo dõi tiến độ xử lý hồ sơ, giải trình các yêu cầu bổ sung từ các bộ ngành liên quan." },
      { step: 4, title: "Khai thông vận hành & Hỗ trợ sau cấp phép", desc: "Mở tài khoản vốn đầu tư trực tiếp (DICA), chuyển vốn hợp pháp và hoàn thiện các giấy phép con." }
    ],
    faqs: [
      {
        question: "Nhà đầu tư nước ngoài có thể đầu tư vào ngành bán lẻ tại Việt Nam không?",
        answer: "Có, nhưng ngoài IRC và ERC, doanh nghiệp cần xin thêm Giấy phép kinh doanh bán lẻ từ Sở Công Thương và đáp ứng bài kiểm tra nhu cầu kinh tế (ENT) nếu mở cơ sở bán lẻ thứ hai."
      },
      {
        question: "Quy trình chuyển tiền vốn đầu tư vào Việt Nam yêu cầu những gì?",
        answer: "Bắt buộc phải chuyển từ tài khoản của nhà đầu tư ở nước ngoài vào Tài khoản vốn đầu tư trực tiếp (DICA) bằng ngoại tệ hoặc VND mở tại ngân hàng được phép tại Việt Nam."
      }
    ],
    highlights: ["Kinh nghiệm làm việc với đối tác Nhật Bản, Hàn Quốc, Singapore, EU", "Legal Due Diligence độc lập", "Tối ưu hóa thuế hợp pháp"]
  },
  {
    id: "realestate",
    slug: "dat-dai-bat-dong-san",
    title: "Pháp luật Đất đai, Dự án & Giao dịch Bất động sản",
    shortTitle: "Đất đai & Bất động sản",
    category: "Bất động sản & Dân sự",
    iconName: "Building2",
    image: "/images/practice-realestate.png",
    shortDesc: "Thẩm định pháp lý tài sản, rà soát hợp đồng chuyển nhượng và giải quyết tranh chấp ranh giới, quyền sử dụng đất.",
    overview:
      "Bất động sản là nhóm tài sản có giá trị lớn nhất của tổ chức và cá nhân, đồng thời cũng là lĩnh vực chịu sự điều chỉnh phức tạp của Luật Đất đai 2024, Luật Nhà ở và Luật Kinh doanh Bất động sản. SAIGONLEX cung cấp lá chắn pháp lý vững chắc cho mọi giao dịch mua bán, phát triển dự án và giải quyết tranh chấp quyền sử dụng đất.",
    commonIssues: [
      {
        title: "Mua bán nhà đất bằng giấy tay hoặc qua hợp đồng ủy quyền định đoạt",
        desc: "Rủi ro bị vô hiệu khi có tranh chấp thừa kế hoặc bên bán bị phong tỏa tài sản bởi cơ quan thi hành án."
      },
      {
        title: "Tài sản nằm trong quy hoạch treo hoặc đang thế chấp ngân hàng",
        desc: "Bên mua thanh toán phần lớn tiền nhưng không thể sang tên sổ đỏ do tài sản bị hạn chế quyền giao dịch."
      },
      {
        title: "Tranh chấp tiền đặt cọc dự án bất động sản hình thành trong tương lai",
        desc: "Chủ đầu tư chưa đủ điều kiện mở bán, chậm bàn giao nhà hoặc tự ý thay đổi thiết kế công năng."
      }
    ],
    serviceScope: [
      "Thẩm định pháp lý chuyên sâu (Title Search) trước giao dịch: Kiểm tra quy hoạch, lịch sử thế chấp, tranh chấp tiềm ẩn.",
      "Soạn thảo và công chứng hợp đồng đặt cọc, hợp đồng chuyển nhượng quyền sử dụng đất và tài sản gắn liền với đất.",
      "Tư vấn pháp lý cho dự án khu đô thị, dự án du lịch nghỉ dưỡng và nhà xưởng công nghiệp.",
      "Đại diện giải quyết khiếu nại, bồi thường giải phóng mặt bằng, thu hồi đất và hỗ trợ tái định cư.",
      "Tham gia tố tụng bảo vệ quyền sử dụng đất hợp pháp tại Tòa án các cấp."
    ],
    processSteps: [
      { step: 1, title: "Tra cứu hiện trạng pháp lý", desc: "Xác minh tình trạng quy hoạch sử dụng đất tại Văn phòng Đăng ký Đất đai và chính quyền địa phương." },
      { step: 2, title: "Thiết lập cấu trúc giao dịch an toàn", desc: "Thiết kế lộ trình thanh toán gắn liền với từng mốc hoàn tất thủ tục sang tên để kiểm soát rủi ro." },
      { step: 3, title: "Đồng hành ký kết & Công chứng", desc: "Giám sát trực tiếp tại tổ chức hành nghề công chứng, bảo đảm các bên đủ năng lực hành vi và giấy tờ bản chính." },
      { step: 4, title: "Hoàn tất thủ tục trước bạ & Sang tên", desc: "Đại diện thực hiện nghĩa vụ thuế thu nhập cá nhân, lệ phí trước bạ và nhận Giấy chứng nhận mới." }
    ],
    faqs: [
      {
        question: "Luật Đất đai 2024 có hiệu lực tác động thế nào đến việc cấp sổ đỏ cho đất không giấy tờ?",
        answer: "Luật mở rộng cơ chế công nhận quyền sử dụng đất cho các trường hợp sử dụng ổn định trước ngày 01/07/2014 không vi phạm pháp luật đất đai và phù hợp quy hoạch cấp huyện."
      },
      {
        question: "Làm thế nào để bảo vệ tiền đặt cọc khi mua bất động sản hình thành trong tương lai?",
        answer: "Cần yêu cầu chủ đầu tư cung cấp văn bản của Sở Xây dựng về việc nhà ở đủ điều kiện được bán và chứng thư bảo lãnh nghĩa vụ tài chính của ngân hàng thương mại."
      }
    ],
    highlights: ["Cập nhật theo Luật Đất đai 2024", "Thẩm định Title Search độc lập", "Bảo vệ tiền cọc tuyệt đối"]
  },
  {
    id: "family",
    slug: "hon-nhan-gia-dinh",
    title: "Tư vấn Pháp luật Hôn nhân, Gia đình & Thừa kế Di sản",
    shortTitle: "Hôn nhân & Gia đình",
    category: "Bất động sản & Dân sự",
    iconName: "HeartHandshake",
    image: "/images/practice-family.png",
    shortDesc: "Tư vấn phân chia tài sản chung, thỏa thuận tài sản tiền hôn nhân, quyền nuôi con và lập di chúc hợp pháp.",
    overview:
      "Các vấn đề hôn nhân và gia đình đòi hỏi sự kết hợp giữa kiến thức pháp luật chuẩn xác và tinh thần thấu cảm, văn minh. SAIGONLEX cam kết bảo vệ tối đa quyền lợi chính đáng của thân chủ, ưu tiên hòa giải nhân văn và bảo đảm quyền lợi tốt nhất cho con chưa thành niên.",
    commonIssues: [
      {
        title: "Nhập nhằng giữa tài sản chung của vợ chồng và tài sản riêng trước thời kỳ hôn nhân",
        desc: "Thiếu chứng cứ chứng minh nguồn tiền tạo lập dẫn đến nguy cơ bị chia đôi tài sản gia tộc hoặc tài sản do cha mẹ tặng cho."
      },
      {
        title: "Tranh chấp quyền trực tiếp nuôi con và mức cấp dưỡng",
        desc: "Các bên không thống nhất điều kiện ăn ở, học tập và thời gian thăm nom, ảnh hưởng tâm lý của trẻ em."
      },
      {
        title: "Di chúc bị vô hiệu do vi phạm hình thức hoặc tranh chấp suất thừa kế bắt buộc",
        desc: "Bố mẹ để lại di chúc không qua công chứng hoặc bỏ sót đối tượng được hưởng thừa kế không phụ thuộc nội dung di chúc."
      }
    ],
    serviceScope: [
      "Soạn thảo thỏa thuận chế độ tài sản của vợ chồng trước khi kết hôn (Prenuptial Agreement).",
      "Tư vấn ly hôn thuận tình nhanh chóng và đại diện bảo vệ quyền lợi trong các vụ án ly hôn đơn phương phức tạp.",
      "Xác định và phân chia tài sản chung là cổ phần công ty, bất động sản, dự án đầu tư và các khoản nợ chung.",
      "Tư vấn quyền nuôi con, xác định mức cấp dưỡng hợp lý và quyền thay đổi người trực tiếp nuôi con sau ly hôn.",
      "Soạn thảo di chúc hợp pháp, lập kế hoạch kế vị gia tộc (Family Succession Planning) và khai nhận di sản thừa kế."
    ],
    processSteps: [
      { step: 1, title: "Lắng nghe & Bảo mật tuyệt đối", desc: "Tiếp nhận tâm tư của thân chủ trong phòng tư vấn kín, ký cam kết bảo mật thông tin gia đình." },
      { step: 2, title: "Thu thập chứng cứ tài sản", desc: "Xác minh nguồn gốc dòng tiền, lịch sử đứng tên tài sản và tình trạng công nợ hợp pháp." },
      { step: 3, title: "Hòa giải nhân văn", desc: "Ưu tiên phương án thương lượng để đạt được thỏa thuận tài sản và nuôi con êm đẹp, hạn chế đối đầu tại tòa." },
      { step: 4, title: "Đại diện tố tụng nếu cần thiết", desc: "Bảo vệ quyết liệt quyền lợi hợp pháp của thân chủ và quyền lợi của trẻ em trước Tòa án nhân dân có thẩm quyền." }
    ],
    faqs: [
      {
        question: "Cổ phần trong công ty thành lập trong thời kỳ hôn nhân có bị chia khi ly hôn?",
        answer: "Cổ phần tạo lập bằng thu nhập trong thời kỳ hôn nhân là tài sản chung. Tòa án thường phân chia giá trị cổ phần hoặc chia cổ phần cho bên trực tiếp quản lý doanh nghiệp và bên kia nhận lại giá trị tiền tương đương."
      },
      {
        question: "Ai có quyền hưởng thừa kế không phụ thuộc vào nội dung di chúc?",
        answer: "Theo Bộ luật Dân sự, con chưa thành niên, cha, mẹ, vợ, chồng và con thành niên nhưng mất khả năng lao động được hưởng ít nhất 2/3 một suất thừa kế theo pháp luật dù di chúc không chia cho họ."
      }
    ],
    highlights: ["Bảo mật danh tính 100%", "Bảo vệ quyền lợi tối đa của trẻ nhỏ", "Tư vấn hoạch định tài sản gia tộc"]
  },
  {
    id: "labor",
    slug: "lao-dong-bao-hiem",
    title: "Pháp luật Lao động, Nhân sự & Bảo hiểm Xã hội",
    shortTitle: "Lao động & Bảo hiểm",
    category: "Doanh nghiệp",
    iconName: "ShieldAlert",
    image: "/images/practice-labor.png",
    shortDesc: "Xây dựng nội quy lao động, giải quyết tranh chấp sa thải và bảo đảm tuân thủ luật lao động cho doanh nghiệp FDI.",
    overview:
      "Quan hệ lao động lành mạnh là nền tảng cho sự phát triển bền vững của doanh nghiệp. Tuy nhiên, các tranh chấp về chấm dứt hợp đồng lao động trái luật hay bảo mật thông tin nhân sự cấp cao có thể khiến doanh nghiệp đối mặt với các khoản bồi thường khổng lồ và tổn hại uy tín thương hiệu.",
    commonIssues: [
      {
        title: "Sa thải nhân sự sai trình tự luật định",
        desc: "Doanh nghiệp không tổ chức phiên họp xử lý kỷ luật đúng thủ tục dẫn đến bị tòa tuyên hủy quyết định và bồi thường lương nhiều tháng."
      },
      {
        title: "Vi phạm thỏa thuận không cạnh tranh (Non-Compete Agreement - NCA)",
        desc: "Nhân sự cấp cao chuyển sang đối thủ cạnh tranh mang theo tệp khách hàng và bí quyết công nghệ mà không có chế tài hữu hiệu."
      },
      {
        title: "Nợ đọng hoặc đóng sai mức bảo hiểm xã hội, bảo hiểm y tế",
        desc: "Rủi ro bị truy thu, xử phạt tiền chậm đóng hoặc ảnh hưởng đến chế độ thai sản, hưu trí của người lao động."
      }
    ],
    serviceScope: [
      "Soạn thảo Hợp đồng lao động, Thỏa thuận bảo mật thông tin (NDA) và Thỏa thuận không cạnh tranh (NCA).",
      "Xây dựng và đăng ký Nội quy lao động, Thỏa ước lao động tập thể với cơ quan quản lý nhà nước về lao động.",
      "Tư vấn phương án tái cơ cấu nhân sự, xây dựng Phương án sử dụng lao động khi sáp nhập hoặc thu hẹp sản xuất.",
      "Đại diện doanh nghiệp hoặc người lao động thương lượng giải quyết bồi thường khi chấm dứt hợp đồng lao động.",
      "Tham gia tố tụng giải quyết tranh chấp lao động cá nhân và tranh chấp lao động tập thể tại Tòa án."
    ],
    processSteps: [
      { step: 1, title: "Đánh giá quy chế lao động hiện hành", desc: "Soát xét hợp đồng mẫu, thang bảng lương, nội quy để chỉ ra các rủi ro vi phạm Bộ luật Lao động." },
      { step: 2, title: "Chuẩn hóa hồ sơ nhân sự", desc: "Xây dựng bộ biểu mẫu mẫu: Biên bản vi phạm, Thông báo mời họp kỷ luật, Quyết định xử lý kỷ luật." },
      { step: 3, title: "Tham vấn giải pháp chấm dứt êm đẹp", desc: "Thiết kế gói trợ cấp thôi việc tự nguyện (Mutual Separation) giúp hai bên chia tay trong hòa bình." },
      { step: 4, title: "Bảo vệ pháp lý tại trọng tài/Tòa án", desc: "Nếu tranh chấp phát sinh, luật sư chuẩn bị chứng cứ vững chắc bảo vệ quyền lợi thân chủ." }
    ],
    faqs: [
      {
        question: "Thỏa thuận không cạnh tranh (NCA) có được pháp luật Việt Nam công nhận hiệu lực?",
        answer: "Các phán quyết trọng tài gần đây (như tại VIAC) đã công nhận hiệu lực của NCA nếu được ký kết tự nguyện, có khoản đền bù tài chính hợp lý và giới hạn về thời gian cũng như phạm vi địa lý rõ ràng."
      },
      {
        question: "Doanh nghiệp có được đơn phương chấm dứt hợp đồng vì nhân viên không hoàn thành công việc?",
        answer: "Được, nhưng điều kiện bắt buộc là tiêu chí đánh giá mức độ hoàn thành công việc phải được quy định rõ trong Quy chế nội bộ do doanh nghiệp ban hành sau khi tham khảo ý kiến tổ chức đại diện người lao động."
      }
    ],
    highlights: ["Tối ưu thỏa thuận NDA/NCA", "Ngăn ngừa rủi ro bồi thường lương", "Kinh nghiệm tư vấn tập đoàn đa quốc gia"]
  },
  {
    id: "dispute",
    slug: "tranh-chap-dan-su-thuong-mai",
    title: "Tranh chấp Dân sự, Thương mại & Tranh tụng Tòa án",
    shortTitle: "Tranh chấp & Tố tụng",
    category: "Tranh tụng",
    iconName: "Scale",
    image: "/images/practice-dispute.png",
    shortDesc: "Đại diện bảo vệ quyền và lợi ích hợp pháp tại Tòa án các cấp và Trung tâm Trọng tài Quốc tế (VIAC, SIAC).",
    overview:
      "Khi mọi nỗ lực thương lượng bất thành, tố tụng là biện pháp sau cùng và quyết định để bảo vệ quyền lợi hợp pháp của thân chủ. Với tư duy chiến lược sắc bén và bề dày kinh nghiệm thực chiến trước bục xét xử, các luật sư tranh tụng của SAIGONLEX luôn kiên định đồng hành cùng khách hàng từ sơ thẩm, phúc thẩm đến giai đoạn thi hành án.",
    commonIssues: [
      {
        title: "Bỏ lỡ thời hiệu khởi kiện",
        desc: "Không nắm rõ quy định về thời hiệu (như thời hiệu khởi kiện tranh chấp thương mại là 02 năm) dẫn đến việc Tòa đình chỉ giải quyết vụ án."
      },
      {
        title: "Thiếu chứng cứ và tài liệu hợp pháp theo chuẩn tố tụng",
        desc: "Tin nhắn, email hoặc tài liệu nước ngoài không được thừa phát lại lập vi bằng hoặc không được hợp pháp hóa lãnh sự kịp thời."
      },
      {
        title: "Đối phương tẩu tán tài sản trước khi bản án có hiệu lực",
        desc: "Không kịp thời yêu cầu Tòa án áp dụng biện pháp khẩn cấp tạm thời như phong tỏa tài khoản ngân hàng hoặc kê biên tài sản."
      }
    ],
    serviceScope: [
      "Đánh giá điểm mạnh - điểm yếu của vụ án, xác định khả năng thắng kiện và tỷ lệ thu hồi nợ thực tế.",
      "Soạn thảo Đơn khởi kiện, Bản tự khai, Đơn yêu cầu áp dụng biện pháp khẩn cấp tạm thời.",
      "Thu thập, hợp pháp hóa và củng cố hệ thống chứng cứ vững chắc trước khi mở phiên tòa.",
      "Tham gia phiên tòa với tư cách Luật sư bảo vệ quyền và lợi ích hợp pháp hoặc Người đại diện theo ủy quyền.",
      "Đồng hành trong giai đoạn thi hành án dân sự: Kê biên, định giá và phát mại tài sản thi hành án."
    ],
    processSteps: [
      { step: 1, title: "Nghiên cứu hồ sơ & Chiến lược tố tụng", desc: "Rà soát toàn bộ tài liệu, văn bản, chứng cứ để vạch ra chiến lược tấn công và phòng thủ pháp lý." },
      { step: 2, title: "Tiền tố tụng & Phong tỏa tài sản", desc: "Gửi thư khuyến cáo pháp lý (Legal Notice), đồng thời chuẩn bị hồ sơ yêu cầu áp dụng biện pháp khẩn cấp tạm thời." },
      { step: 3, title: "Tranh tụng tại phiên tòa", desc: "Luật sư đối đáp trực tiếp, phản bác lập luận của đối phương và thuyết phục Hội đồng xét xử dựa trên pháp luật thực định." },
      { step: 4, title: "Đôn đốc thi hành án thực tế", desc: "Làm việc với Cơ quan Thi hành án dân sự để tiền và tài sản thực sự được thu hồi về cho thân chủ." }
    ],
    faqs: [
      {
        question: "Biện pháp khẩn cấp tạm thời có vai trò quan trọng như thế nào?",
        answer: "Rất quan trọng. Đây là công cụ hữu hiệu nhất để ngăn chặn bên có nghĩa vụ chuyển nhượng bất động sản, rút tiền ngân hàng hoặc tẩu tán tài sản trước khi có phán quyết cuối cùng của Tòa án."
      },
      {
        question: "Chi phí thuê luật sư tranh tụng được tính như thế nào?",
        answer: "SAIGONLEX áp dụng linh hoạt giữa phí cố định theo giai đoạn tố tụng và phí thù lao theo kết quả giải quyết vụ việc (Success Fee) trên cơ sở hợp đồng dịch vụ pháp lý minh bạch."
      }
    ],
    highlights: ["Tỷ lệ bảo toàn tài sản cao", "Tranh tụng sắc bén tại Tòa & VIAC", "Minh bạch chi phí tố tụng"]
  }
];
