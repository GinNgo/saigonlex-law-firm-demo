# SAIGONLEX – BỘ ĐÔI GIAO DIỆN WEBSITE CÔNG TY LUẬT CAO CẤP

> **Phiên bản Demo chuyên nghiệp dành cho chủ công ty luật lựa chọn giao diện trước khi triển khai chính thức.**

Dự án được xây dựng hoàn chỉnh bằng **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Motion + Lucide React**, bao gồm đầy đủ **bộ đôi giao diện thực tế**, 8 chuyên trang lĩnh vực pháp lý, 6 bài viết phân tích chuyên sâu, hồ sơ đội ngũ luật sư và hệ thống biểu mẫu tư vấn hoạt động thực tế.

---

## 🌟 1. Cấu Trúc Hai Bản Demo

### 🏛️ Mẫu 1 – Corporate Legal (`/mau-1`)
- **Cảm hứng bố cục:** Cấu trúc dịch vụ và trình bày doanh nghiệp chuẩn mực của [Garage.vn](https://garage.vn/).
- **Phong cách:** Deep Navy Blue, Trắng tinh khôi, Xám Slate và điểm nhấn Vàng đồng.
- **Đặc trưng:**
  - Header cố định kèm Hotline và thông tin hỗ trợ 24/7.
  - Hero lớn chụp không gian văn phòng luật hiện đại và bàn làm việc.
  - Lưới 8 lĩnh vực hành nghề với hiệu ứng hover và icon trực quan.
  - Trình bày 4 bước quy trình tư vấn chuẩn hóa.
  - Gói dịch vụ Luật sư Nội bộ Thuê ngoài (Retainer Counsel) nổi bật.
  - Form tiếp nhận đặt lịch tư vấn có kiểm tra hợp lệ, chống spam honeypot và tích hợp bản đồ Google Maps.

### 👑 Mẫu 2 – Premium Law Firm (`/mau-2`)
- **Cảm hứng bố cục:** Trình bày hình ảnh, timeline, đội ngũ và dự án của [Movic.vn](https://movic.vn/).
- **Phong cách:** Obsidian Navy, Ivory Cream, Vàng Champagne hoàng gia.
- **Đặc trưng:**
  - Full-width Photographic Hero với typography Playfair Display sang trọng.
  - Tuyên ngôn triết lý hành nghề & trích dẫn của Luật sư Điều hành.
  - Dịch vụ trọng điểm dạng Large Cards bất đối xứng và ảnh chụp chuyên sâu.
  - Bộ tab chuyển đổi tương tác giữa các lĩnh vực chuyên môn.
  - Chân dung đội ngũ luật sư phong cách ảnh chụp tạp chí nghệ thuật.
  - Lộ trình tư vấn dạng Timeline 4 giai đoạn chuẩn hóa.
  - Tình huống pháp lý minh họa đã được ẩn danh (Anonymized Case Studies).
  - Cam kết đặc quyền giữ kín bí mật thân chủ (Attorney-Client Privilege).

---

## 🧭 2. Sơ Đồ Điều Hướng Tuyến Đường (Routes)

| Đường dẫn | Mô tả chức năng |
| :--- | :--- |
| `/` | **Trang Gateway**: Giới thiệu so sánh trực quan giữa Mẫu 1 và Mẫu 2 |
| `/mau-1` | Trang chủ Mẫu 1 (Corporate Legal - 12 sections) |
| `/mau-1/gioi-thieu` | Trang giới thiệu về hãng luật SAIGONLEX |
| `/mau-1/linh-vuc` | Danh mục 8 lĩnh vực hành nghề |
| `/mau-1/linh-vuc/[slug]` | 8 trang chi tiết từng dịch vụ (H1, tổng quan, rủi ro, quy trình, FAQ) |
| `/mau-1/doi-ngu` | Danh sách hồ sơ luật sư thành viên & cố vấn [DEMO] |
| `/mau-1/tin-tuc` | Danh mục bài viết kiến thức & phân tích án lệ |
| `/mau-1/tin-tuc/[slug]` | 6 bài viết chuyên sâu (Mục lục TOC, trích dẫn điều luật, tác giả) |
| `/mau-1/lien-he` | Trang liên hệ, hotline, Google Maps và form đặt lịch tư vấn |
| `/mau-1/chinh-sach-bao-mat` | Quy ước bảo mật theo NĐ 13/2023/NĐ-CP & bí mật thân chủ |
| `/mau-2` | Trang chủ Mẫu 2 (Premium Law Firm - 12 sections) |
| `/mau-2/gioi-thieu` | Trang triết lý hành nghề & tuyên ngôn tư pháp |
| `/mau-2/linh-vuc` | Danh mục lĩnh vực cố vấn chiến lược |
| `/mau-2/linh-vuc/[slug]` | 8 trang chi tiết dịch vụ phong cách Private Client |
| `/mau-2/doi-ngu` | Đội ngũ luật sư trưởng phong cách editorial portraits |
| `/mau-2/tin-tuc` | Diễn đàn chuyên khảo & ấn phẩm pháp lý độc quyền |
| `/mau-2/tin-tuc/[slug]` | 6 bài phân tích chuyên sâu định dạng ấn phẩm cao cấp |
| `/mau-2/lien-he` | Trang xác lập lịch hội đàm cơ mật và bản đồ vị trí |
| `/mau-2/chinh-sach-bao-mat` | Quy ước cơ mật & đặc quyền luật sư - thân chủ |
| `/api/contact` | API Route xử lý nhận form, kiểm tra lỗi, chống bot spam, sinh mã hồ sơ |
| `/sitemap.xml` | Bản đồ website cho toàn bộ 49 tuyến đường |
| `/robots.txt` | Cấu hình bảo vệ `Disallow: /` tránh Google phạt trùng lặp bản demo |

---

## 🚀 3. Hướng Dẫn Cài Đặt & Chạy Thử Nghiệm

### Yêu cầu hệ thống:
- Node.js version 18 trở lên (khuyến nghị v20+)
- npm hoặc pnpm / yarn

### Chạy Local:
```bash
# Clone kho chứa
git clone https://github.com/GinNgo/saigonlex-law-firm-demo.git
cd saigonlex-law-firm-demo

# Cài đặt thư viện
npm install

# Chạy máy chủ phát triển
npm run dev
```

Mở trình duyệt truy cập:
- `http://localhost:3000` (Trang Gateway chọn mẫu)
- `http://localhost:3000/mau-1` (Mẫu 1)
- `http://localhost:3000/mau-2` (Mẫu 2)

### Kiểm tra Production Build:
```bash
npm run build
npm run start
```

---

## 🌐 4. Triển Khai Lên Vercel (1-Click Deployment)

Dự án đã được cấu hình tối ưu sẵn sàng deploy trên Vercel:
1. Đăng nhập vào [vercel.com](https://vercel.com).
2. Chọn **Add New...** -> **Project**.
3. Chọn kho chứa GitHub: `GinNgo/saigonlex-law-firm-demo`.
4. Nhấn **Deploy** (không cần thêm cấu hình biến môi trường đặc biệt).
5. Vercel sẽ tự động build và cung cấp link demo trực tuyến để gửi khách hàng.

---

## ⚖️ 5. Ghi Chú Bản Quyền & Tính Minh Bạch (Disclaimer)

- Đây là phiên bản **DEMO** được xây dựng nhằm mục đích trình diễn giao diện, trải nghiệm người dùng (UX/UI) và cấu trúc thông tin cho khách hàng là chủ hãng luật lựa chọn trước khi triển khai chính thức.
- Toàn bộ 30 hình ảnh photorealistic trong dự án được tạo bằng AI chuyên dụng theo prompt pháp lý chân thực, không sử dụng ảnh chụp người thật trái phép hay sao chép từ các website tham khảo.
- Thông tin giấy phép, danh hiệu và số năm kinh nghiệm nhân sự trên bản demo được gắn nhãn **DEMO** minh bạch và sẽ được cập nhật chính thức khi bàn giao cho khách hàng.
