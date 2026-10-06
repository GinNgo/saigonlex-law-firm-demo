export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Doanh nghiệp" | "Hợp đồng" | "Bất động sản" | "Lao động" | "Đầu tư FDI" | "Tranh tụng";
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  image: string;
  tags: string[];
  tableOfContents: { id: string; title: string }[];
  contentHtml: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "quy-dinh-moi-ve-von-dieu-le-va-nghia-vu-gop-von",
    title: "Nghĩa vụ góp vốn điều lệ và chế tài xử lý khi thành viên không góp đủ vốn theo Luật Doanh nghiệp",
    excerpt:
      "Phân tích thời hạn góp vốn 90 ngày, hậu quả pháp lý khi thành viên cố tình trì hoãn và các biện pháp điều chỉnh vốn an toàn cho công ty TNHH và Cổ phần.",
    category: "Doanh nghiệp",
    author: "Luật sư Nguyễn Văn Thành",
    authorRole: "Luật sư Điều hành [DEMO]",
    publishDate: "28/09/2026",
    readTime: "7 phút đọc",
    image: "/images/blog-1.png",
    tags: ["Luật Doanh nghiệp", "Vốn điều lệ", "Góp vốn", "Quản trị nội bộ"],
    tableOfContents: [
      { id: "thoi-han-gop-von", title: "1. Thời hạn góp vốn 90 ngày theo luật định" },
      { id: "hau-qua-phap-ly", title: "2. Hậu quả pháp lý khi không góp đủ vốn" },
      { id: "phuong-an-xu-ly", title: "3. Phương án xử lý và đăng ký thay đổi vốn điều lệ" },
      { id: "khuyen-nghi-luat-su", title: "4. Khuyến nghị thực tiễn từ luật sư SAIGONLEX" }
    ],
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-700 mb-6">Vốn điều lệ là cam kết tài chính cốt lõi giữa các thành viên sáng lập và là thước đo năng lực ban đầu trước đối tác. Tuy nhiên, tình trạng "đăng ký vốn khống" hoặc chậm trễ góp vốn vẫn diễn ra phổ biến, tiềm ẩn rủi ro chịu trách nhiệm tài sản vô hạn cho chủ doanh nghiệp.</p>
      
      <h3 id="thoi-han-gop-von" class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Thời hạn góp vốn 90 ngày theo luật định</h3>
      <p class="mb-4">Theo quy định tại khoản 2 Điều 47 (đối với Công ty TNHH 2 thành viên trở lên) và khoản 1 Điều 113 (đối với Công ty Cổ phần) của Luật Doanh nghiệp hiện hành, các thành viên/cổ đông phải thanh toán đủ và đúng loại tài sản đã cam kết trong thời hạn <strong>90 ngày</strong> kể từ ngày được cấp Giấy chứng nhận đăng ký doanh nghiệp (không tính thời gian vận chuyển hoặc nhập khẩu tài sản góp vốn).</p>
      <p class="mb-4">Trong thời hạn này, thành viên có các quyền và nghĩa vụ tương ứng với tỷ lệ phần vốn góp đã cam kết, bất kể đã hoàn thành việc nộp tiền thực tế hay chưa.</p>

      <h3 id="hau-qua-phap-ly" class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Hậu quả pháp lý khi không góp đủ vốn</h3>
      <p class="mb-4">Nếu hết thời hạn 90 ngày mà thành viên chưa góp hoặc chưa góp đủ số vốn đã cam kết:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Thành viên chưa góp vốn theo cam kết đương nhiên không còn là thành viên của công ty.</li>
        <li>Thành viên chưa góp đủ phần vốn đã cam kết có các quyền tương ứng với phần vốn góp đã góp.</li>
        <li><strong>Trách nhiệm liên đới:</strong> Thành viên chưa góp hoặc chưa góp đủ vốn phải chịu trách nhiệm tương ứng với tỷ lệ phần vốn góp đã cam kết đối với các nghĩa vụ tài chính của công ty phát sinh trong thời gian trước ngày công ty đăng ký thay đổi vốn.</li>
      </ul>

      <h3 id="phuong-an-xu-ly" class="text-xl font-bold text-slate-900 mt-8 mb-4">3. Phương án xử lý và đăng ký thay đổi vốn điều lệ</h3>
      <p class="mb-4">Trong thời hạn 30 ngày kể từ ngày cuối cùng phải góp đủ vốn, công ty bắt buộc phải thực hiện thủ tục đăng ký giảm vốn điều lệ tương ứng với số vốn thực tế đã góp, trừ trường hợp các thành viên còn lại đồng ý mua lại phần vốn chưa góp theo tỷ lệ.</p>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
        <h4 id="khuyen-nghi-luat-su" class="font-bold text-amber-900 mb-2">4. Khuyến nghị thực tiễn từ luật sư SAIGONLEX</h4>
        <p class="text-amber-800 text-sm">Các doanh nghiệp không nên đăng ký mức vốn điều lệ quá xa rời khả năng tài chính thực tế nhằm mục đích "làm đẹp hồ sơ năng lực". Việc đăng ký vốn ảo không chỉ đối mặt với mức phạt hành chính từ 30 – 50 triệu đồng mà còn khiến thành viên phải chịu trách nhiệm bằng toàn bộ tài sản cá nhân cho các khoản nợ của công ty.</p>
      </div>
    `
  },
  {
    id: "blog-2",
    slug: "rui-ro-phap-ly-trong-hop-dong-mua-ban-sap-nhap-ma",
    title: "Rà soát thẩm định pháp lý (Due Diligence) trong giao dịch M&A: Những 'hố đen' cần tránh",
    excerpt:
      "Các kinh nghiệm thực chiến giúp bên mua phát hiện các nghĩa vụ nợ tiềm ẩn, rủi ro thuế và tranh chấp lao động chưa bộc lộ trước khi ký kết hợp đồng mua bán cổ phần.",
    category: "Hợp đồng",
    author: "Luật sư Trần Thị Thu Trang",
    authorRole: "Luật sư Thành viên [DEMO]",
    publishDate: "20/09/2026",
    readTime: "9 phút đọc",
    image: "/images/blog-2.png",
    tags: ["M&A", "Due Diligence", "Hợp đồng", "Đầu tư"],
    tableOfContents: [
      { id: "vai-tro-ldd", title: "1. Tầm quan trọng của Báo cáo Legal Due Diligence (LDD)" },
      { id: "cac-diem-nghen", title: "2. Ba rủi ro tiềm ẩn thường gặp trong doanh nghiệp mục tiêu" },
      { id: "dieu-khoan-bao-ve", title: "3. Thiết kế điều khoản cam kết và bảo đảm (Reps & Warranties)" },
      { id: "khuyen-nghi-ma", title: "4. Cơ chế giữ lại tiền thanh toán (Escrow / Holdback)" }
    ],
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-700 mb-6">Một thương vụ M&A thành công không chỉ dừng lại ở mức định giá hấp dẫn mà phụ thuộc sống còn vào khả năng làm sạch các rủi ro pháp lý tiềm tàng bên trong doanh nghiệp mục tiêu.</p>
      
      <h3 id="vai-tro-ldd" class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Tầm quan trọng của Báo cáo Legal Due Diligence (LDD)</h3>
      <p class="mb-4">Báo cáo thẩm định pháp lý là công cụ giúp bên mua nhìn thấy bức tranh chân thực nhất về tư cách pháp nhân, quyền sở hữu tài sản, tuân thủ cấp phép và các khoản nợ tiềm ẩn không hiển thị trên sổ sách kế toán thông thường.</p>

      <h3 id="cac-diem-nghen" class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Ba rủi ro tiềm ẩn thường gặp trong doanh nghiệp mục tiêu</h3>
      <p class="mb-4">Qua thực tiễn tư vấn hàng chục thương vụ M&A tại Việt Nam, SAIGONLEX thường ghi nhận 3 nhóm rủi ro lớn:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Rủi ro đất đai & tài sản gắn liền:</strong> Đất thuê trả tiền hàng năm không có quyền thế chấp hoặc bán; nhà xưởng xây dựng chưa hoàn công hoặc sai phép.</li>
        <li><strong>Nghĩa vụ thuế và bảo hiểm xã hội:</strong> Tồn tại chênh lệch chuyển giá, hóa đơn không hợp lệ hoặc nợ đọng quỹ BHXH cho người lao động kéo dài.</li>
        <li><strong>Hợp đồng có điều khoản thay đổi quyền kiểm soát (Change of Control):</strong> Việc chuyển nhượng cổ phần làm kích hoạt quyền chấm dứt hợp đồng đơn phương của đối tác quan trọng.</li>
      </ul>

      <h3 id="dieu-khoan-bao-ve" class="text-xl font-bold text-slate-900 mt-8 mb-4">3. Thiết kế điều khoản cam kết và bảo đảm (Reps & Warranties)</h3>
      <p class="mb-4">Bên mua cần yêu cầu bên bán đưa ra các tuyên bố cam đoan chi tiết, gắn kèm nghĩa vụ bồi hoàn vô điều kiện (Indemnity) nếu phát hiện bất kỳ sai lệch nào sau khi hoàn tất giao dịch.</p>

      <h3 id="khuyen-nghi-ma" class="text-xl font-bold text-slate-900 mt-8 mb-4">4. Cơ chế giữ lại tiền thanh toán (Escrow / Holdback)</h3>
      <p class="mb-4">Giữ lại từ 10% đến 20% giá trị giao dịch trong tài khoản phong tỏa mở tại ngân hàng thương mại uy tín trong thời hạn từ 6 đến 12 tháng là giải pháp bảo đảm tốt nhất cho bên mua trước các nghĩa vụ thuế hồi tố.</p>
    `
  },
  {
    id: "blog-3",
    slug: "diem-moi-luat-dat-dai-2024-va-tac-dong-thi-truong",
    title: "Điểm mới Luật Đất đai 2024: Thay đổi bảng giá đất và tác động trực tiếp tới giao dịch bất động sản",
    excerpt:
      "Bỏ khung giá đất, định giá theo nguyên tắc thị trường và các lưu ý pháp lý sống còn khi tiến hành giao dịch mua bán nhà đất từ năm 2026.",
    category: "Bất động sản",
    author: "Luật sư Đặng Minh Khôi",
    authorRole: "Luật sư Cố vấn [DEMO]",
    publishDate: "15/09/2026",
    readTime: "8 phút đọc",
    image: "/images/blog-3.png",
    tags: ["Luật Đất đai 2024", "Bảng giá đất", "Bất động sản", "Thuế nhà đất"],
    tableOfContents: [
      { id: "bo-khung-gia-dat", title: "1. Bãi bỏ khung giá đất – Bước ngoặt lịch sử" },
      { id: "chi-phi-chuyen-muc-dich", title: "2. Chi phí chuyển mục đích sử dụng đất và tiền thuê đất" },
      { id: "cap-so-do-lan-dau", title: "3. Cơ chế cấp Giấy chứng nhận quyền sử dụng đất" },
      { id: "luu-y-cho-nha-dau-tu", title: "4. Lời khuyên pháp lý cho nhà đầu tư cá nhân và tổ chức" }
    ],
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-700 mb-6">Luật Đất đai 2024 mang tính cách mạng với nhiều đột phá pháp lý, trực tiếp định hình lại chi phí đầu tư và phương thức vận hành của toàn bộ thị trường bất động sản Việt Nam.</p>

      <h3 id="bo-khung-gia-dat" class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Bãi bỏ khung giá đất – Bước ngoặt lịch sử</h3>
      <p class="mb-4">Trước đây, khung giá đất do Chính phủ ban hành định kỳ 5 năm một lần thường thấp hơn rất nhiều so với giá thị trường thực tế. Luật mới đã chính thức bãi bỏ khung giá đất và trao quyền cho UBND cấp tỉnh ban hành Bảng giá đất hàng năm sát với giá chuyển nhượng thực tế trên thị trường.</p>

      <h3 id="chi-phi-chuyen-muc-dich" class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Chi phí chuyển mục đích sử dụng đất và tiền thuê đất</h3>
      <p class="mb-4">Khi bảng giá đất tiệm cận giá thị trường, nghĩa vụ tài chính liên quan đến tiền sử dụng đất, tiền thuê đất và thuế thu nhập cá nhân chuyển nhượng bất động sản sẽ có xu hướng tăng lên. Doanh nghiệp dự án cần tính toán lại bài toán dòng tiền và chi phí đền bù giải phóng mặt bằng.</p>

      <h3 id="cap-so-do-lan-dau" class="text-xl font-bold text-slate-900 mt-8 mb-4">3. Cơ chế cấp Giấy chứng nhận quyền sử dụng đất</h3>
      <p class="mb-4">Luật Đất đai 2024 đã nới rộng điều kiện cấp Giấy chứng nhận cho hộ gia đình, cá nhân đang sử dụng đất không có giấy tờ nhưng không vi phạm pháp luật đất đai và không thuộc diện giao đất trái thẩm quyền trước ngày 01/7/2014.</p>

      <h3 id="luu-y-cho-nha-dau-tu" class="text-xl font-bold text-slate-900 mt-8 mb-4">4. Lời khuyên pháp lý cho nhà đầu tư cá nhân và tổ chức</h3>
      <p class="mb-4">Cần kiểm tra kỹ quy hoạch sử dụng đất cấp huyện đã được phê duyệt công khai và tuyệt đối không thực hiện giao dịch thông qua các hợp đồng ủy quyền định đoạt nhằm trốn thuế hoặc né tránh quy hoạch.</p>
    `
  },
  {
    id: "blog-4",
    slug: "quan-tri-rui-ro-sa-thai-ky-luat-lao-dong",
    title: "Xử lý kỷ luật sa thải: 5 lỗi sơ đẳng khiến doanh nghiệp thua kiện tại Tòa án",
    excerpt:
      "Hướng dẫn chuẩn hóa quy trình lập biên bản vi phạm, tổ chức phiên họp kỷ luật lao động và giải pháp thỏa thuận thôi việc tự nguyện an toàn.",
    category: "Lao động",
    author: "Luật sư Trần Thị Thu Trang",
    authorRole: "Luật sư Thành viên [DEMO]",
    publishDate: "05/09/2026",
    readTime: "6 phút đọc",
    image: "/images/blog-4.png",
    tags: ["Luật Lao động", "Sa thải", "Kỷ luật nhân sự", "Tranh chấp lao động"],
    tableOfContents: [
      { id: "5-sai-pham-pho-bien", title: "1. Top 5 sai lầm phổ biến của bộ phận nhân sự (HR)" },
      { id: "quy-trinh-chuan-phap-ly", title: "2. Trình tự 4 bước kỷ luật sa thải chuẩn mực" },
      { id: "hau-qua-sa-thai-sai-luat", title: "3. Nghĩa vụ bồi thường khi sa thải trái pháp luật" },
      { id: "giai-phap-thoa-thuan-thoi-viec", title: "4. Ưu tiên thỏa thuận chấm dứt hợp đồng tự nguyện" }
    ],
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-700 mb-6">Tranh chấp lao động về đơn phương chấm dứt hợp đồng hoặc sa thải là một trong những loại vụ án có tỷ lệ doanh nghiệp bị xử thua kiện cao nhất, nguyên nhân chủ yếu đến từ vi phạm thủ tục tố tụng nội bộ.</p>

      <h3 id="5-sai-pham-pho-bien" class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Top 5 sai lầm phổ biến của bộ phận nhân sự (HR)</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Không quy định hành vi vi phạm cụ thể trong Nội quy lao động đã đăng ký hợp lệ.</li>
        <li>Không thông báo trước cho tổ chức đại diện người lao động tại cơ sở ít nhất 05 ngày làm việc.</li>
        <li>Phiên họp xử lý kỷ luật diễn ra vắng mặt người lao động mà không chứng minh được đã tống đạt thư mời hợp lệ.</li>
        <li>Áp dụng hình thức sa thải khi đã hết thời hiệu xử lý kỷ luật lao động (quá 06 tháng).</li>
        <li>Kỷ luật sa thải đối với lao động nữ đang mang thai hoặc nuôi con nhỏ dưới 12 tháng tuổi.</li>
      </ul>

      <h3 id="quy-trinh-chuan-phap-ly" class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Trình tự 4 bước kỷ luật sa thải chuẩn mực</h3>
      <p class="mb-4">Doanh nghiệp cần tuân thủ nghiêm ngặt theo Nghị định 145/2020/NĐ-CP: Lập biên bản vi phạm -> Gửi thông báo mời họp -> Tiến hành phiên họp có thành phần đầy đủ -> Ban hành Quyết định kỷ luật có chữ ký người có thẩm quyền.</p>

      <h3 id="hau-qua-sa-thai-sai-luat" class="text-xl font-bold text-slate-900 mt-8 mb-4">3. Nghĩa vụ bồi thường khi sa thải trái pháp luật</h3>
      <p class="mb-4">Nếu bị tuyên sa thải trái luật, doanh nghiệp phải nhận người lao động trở lại làm việc, bồi thường toàn bộ tiền lương, bảo hiểm trong những ngày không được làm việc cộng thêm ít nhất 02 tháng tiền lương theo hợp đồng.</p>
    `
  },
  {
    id: "blog-5",
    slug: "bao-ve-bi-mat-kinh-doanh-va-so-huu-tri-tue",
    title: "Thỏa thuận không cạnh tranh (NCA) và bảo vệ bí mật kinh doanh: Hiệu lực thi hành tại Việt Nam",
    excerpt:
      "Phân tích xu hướng phán quyết của Tòa án và Hội đồng trọng tài VIAC về tính pháp lý của điều khoản cấm nhân viên làm việc cho đối thủ.",
    category: "Hợp đồng",
    author: "Luật sư Nguyễn Văn Thành",
    authorRole: "Luật sư Điều hành [DEMO]",
    publishDate: "25/08/2026",
    readTime: "8 phút đọc",
    image: "/images/blog-5.png",
    tags: ["Bí mật kinh doanh", "NCA", "NDA", "Sở hữu trí tuệ"],
    tableOfContents: [
      { id: "xung-dot-phap-ly", title: "1. Xung đột giữa quyền tự do làm việc và quyền bảo vệ tài sản trí tuệ" },
      { id: "quan-diem-viac", title: "2. Quan điểm công nhận hiệu lực của Trung tâm Trọng tài VIAC" },
      { id: "tieu-chi-hop-le", title: "3. Ba tiêu chí then chốt để thỏa thuận NCA có hiệu lực" },
      { id: "soan-thao-mau-nca", title: "4. Kỹ thuật soạn thảo điều khoản bồi thường vi phạm hợp lý" }
    ],
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-700 mb-6">Bảo vệ tài sản trí tuệ và bí mật thương mại là vấn đề sống còn đối với các doanh nghiệp công nghệ, bán lẻ và sản xuất khi nhân sự chủ chốt rời đi mang theo công thức kinh doanh.</p>

      <h3 id="xung-dot-phap-ly" class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Xung đột giữa quyền tự do làm việc và quyền bảo vệ tài sản trí tuệ</h3>
      <p class="mb-4">Hiến pháp và Bộ luật Lao động bảo vệ quyền tự do lựa chọn việc làm của công dân. Tuy nhiên, Luật Sở hữu trí tuệ và Luật Thương mại cũng bảo vệ quyền tài sản hợp pháp đối với bí mật kinh doanh mà chủ sở hữu đã bỏ chi phí đầu tư.</p>

      <h3 id="quan-diem-viac" class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Quan điểm công nhận hiệu lực của Trung tâm Trọng tài VIAC</h3>
      <p class="mb-4">Trong nhiều phán quyết trọng tài gần đây, Hội đồng trọng tài đã công nhận NCA là thỏa thuận dân sự độc lập ngoài hợp đồng lao động, có giá trị ràng buộc nếu người lao động đã nhận một khoản bù đắp tài chính tương xứng.</p>

      <h3 id="tieu-chi-hop-le" class="text-xl font-bold text-slate-900 mt-8 mb-4">3. Ba tiêu chí then chốt để thỏa thuận NCA có hiệu lực</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Thời hạn hợp lý:</strong> Thường từ 06 đến 12 tháng, tối đa không quá 24 tháng sau khi chấm dứt làm việc.</li>
        <li><strong>Phạm vi địa lý rõ ràng:</strong> Giới hạn trong vùng thị trường cạnh tranh trực tiếp, không nên cấm đoán vô căn cứ trên toàn cầu.</li>
        <li><strong>Khoản trợ cấp bù đắp:</strong> Doanh nghiệp chi trả khoản tiền bù đắp cho việc người lao động hạn chế hành nghề trong giai đoạn cam kết.</li>
      </ul>
    `
  },
  {
    id: "blog-6",
    slug: "chinh-sach-dau-tu-fdi-va-uu-dai-thue-2026",
    title: "Thu hút vốn FDI thế hệ mới vào Việt Nam: Ưu đãi thuế công nghệ cao và thuế tối thiểu toàn cầu",
    excerpt:
      "Cập nhật tác động của cơ chế Thuế tối thiểu toàn cầu (Pillar 2) và chiến lược tái cấu trúc chính sách ưu đãi đầu tư hỗ trợ doanh nghiệp FDI.",
    category: "Đầu tư FDI",
    author: "Luật sư Đặng Minh Khôi",
    authorRole: "Luật sư Cố vấn [DEMO]",
    publishDate: "10/08/2026",
    readTime: "10 phút đọc",
    image: "/images/blog-6.png",
    tags: ["FDI", "Thuế tối thiểu toàn cầu", "Công nghệ cao", "Đầu tư nước ngoài"],
    tableOfContents: [
      { id: "thue-toi-thieu-toan-cau", title: "1. Tác động của Thuế tối thiểu toàn cầu (Pillar 2)" },
      { id: "quy-ho-tro-dau-tu", title: "2. Quỹ hỗ trợ đầu tư của Việt Nam cho doanh nghiệp công nghệ cao" },
      { id: "thu-tuc-cap-phep-irc", title: "3. Tối ưu hóa quy trình cấp IRC và ERC" },
      { id: "loi-khuyen-fdi", title: "4. Lộ trình pháp lý cho tập đoàn đa quốc gia khi vào Việt Nam" }
    ],
    contentHtml: `
      <p class="lead font-medium text-lg text-slate-700 mb-6">Việc áp dụng mức thuế tối thiểu toàn cầu 15% đặt dấu chấm hết cho giai đoạn cạnh tranh bằng miễn giảm thuế đơn thuần, buộc Việt Nam và các nhà đầu tư quốc tế chuyển hướng sang các cơ chế hỗ trợ chi phí trực tiếp.</p>

      <h3 id="thue-toi-thieu-toan-cau" class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Tác động của Thuế tối thiểu toàn cầu (Pillar 2)</h3>
      <p class="mb-4">Các tập đoàn đa quốc gia có doanh thu hợp nhất từ 750 triệu EUR trở lên sẽ không còn được hưởng trọn vẹn ưu đãi thuế TNDN 5% hoặc 10% như trước, bởi phần chênh lệch sẽ bị nộp bổ sung tại quốc gia đặt trụ sở công ty mẹ.</p>

      <h3 id="quy-ho-tro-dau-tu" class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Quỹ hỗ trợ đầu tư của Việt Nam cho doanh nghiệp công nghệ cao</h3>
      <p class="mb-4">Chính phủ Việt Nam đã ban hành các cơ chế hỗ trợ tài chính trực tiếp thay thế cho ưu đãi thuế, bao gồm hỗ trợ chi phí đào tạo nhân lực bán dẫn, đầu tư cơ sở hạ tầng R&D và chuyển giao công nghệ xanh.</p>

      <h3 id="thu-tuc-cap-phep-irc" class="text-xl font-bold text-slate-900 mt-8 mb-4">3. Tối ưu hóa quy trình cấp IRC và ERC</h3>
      <p class="mb-4">Nhà đầu tư FDI cần chú trọng thẩm định năng lực bảo vệ môi trường (ĐTM) và thẩm duyệt thiết kế PCCC ngay từ giai đoạn đăng ký địa điểm thực hiện dự án đầu tư để tránh kéo dài thời gian thi công.</p>
    `
  }
];
