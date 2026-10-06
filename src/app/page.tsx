import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Palette,
  Eye,
  ShieldCheck,
  Briefcase,
  Crown
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function GatewayPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-amber-950 py-2.5 px-4 text-center text-xs text-amber-200 border-b border-white/10 font-medium">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>SAIGONLEX – BỘ ĐÔI GIAO DIỆN WEBSITE CÔNG TY LUẬT CAO CẤP DÀNH CHO KHÁCH HÀNG LỰA CHỌN</span>
        </span>
      </div>

      {/* Main Gateway Hero */}
      <header className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-950 to-slate-950">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>THƯƠNG HIỆU DEMO: {SITE_CONFIG.brandName}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Lựa chọn Phong cách Thiết kế <br />
            <span className="bg-gradient-to-r from-blue-400 via-amber-200 to-amber-400 bg-clip-text text-transparent">
              Website Công ty Luật Chuyên nghiệp
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Dự án bao gồm 2 phiên bản hoàn chỉnh với đầy đủ 8 lĩnh vực pháp luật, đội ngũ luật sư, ấn phẩm pháp lý, quy trình tư vấn và biểu mẫu đặt lịch tương tác thực tế.
          </p>
        </div>
      </header>

      {/* Two Models Showcase Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* MẪU 1: CORPORATE LEGAL */}
          <div className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-b from-slate-900 to-[#0A192F] overflow-hidden flex flex-col justify-between shadow-2xl hover:border-blue-400 transition-all duration-300 group">
            <div>
              {/* Preview Header */}
              <div className="p-6 sm:p-8 border-b border-blue-900/40 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-blue-400 tracking-wider uppercase bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/30">
                    PHIÊN BẢN 01
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-2 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                    <span>Mẫu 1 – Corporate Legal</span>
                  </h2>
                </div>
                <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
              </div>

              {/* Preview Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <Image
                  src="/images/hero-corporate.png"
                  alt="Xem trước giao diện Mẫu 1 – Corporate Legal SAIGONLEX"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-slate-900/90 backdrop-blur-sm text-xs font-medium text-slate-200 px-3 py-1.5 rounded border border-white/10">
                    Cảm hứng cấu trúc: Garage.vn
                  </span>
                  <span className="bg-blue-600/90 text-white text-xs font-bold px-3 py-1.5 rounded shadow">
                    12 Section Hoàn chỉnh
                  </span>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-6 sm:p-8 space-y-5">
                <p className="text-sm text-slate-300 leading-relaxed">
                  Thiết kế theo chuẩn mực hãng luật doanh nghiệp hiện đại. Bố cục sáng sủa, thanh lịch, cấu trúc thông tin rành mạch, tốc độ tải trang tối ưu và chú trọng khả năng chuyển đổi khách hàng tiềm năng.
                </p>

                {/* Characteristic Bullets */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Tông màu:</strong> Deep Navy Blue, Trắng tinh khôi, Điểm nhấn Vàng đồng.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Phong cách:</strong> Corporate vững chãi, rõ ràng, dễ tiếp cận, độ tin cậy cao.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Phù hợp:</strong> Công ty luật chuyên Doanh nghiệp, Đầu tư, Thuế và Hợp đồng thương mại.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Trang con:</strong> Đầy đủ Giới thiệu, 8 Lĩnh vực, Đội ngũ, 6 Bài blog, Liên hệ, Bảo mật.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 sm:p-8 pt-0 border-t border-white/5 mt-4">
              <Link
                href="/mau-1"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25 transition group/btn"
              >
                <span>Trải nghiệm Demo Mẫu 1 (Corporate Legal)</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* MẪU 2: PREMIUM LAW FIRM */}
          <div className="rounded-2xl border-2 border-amber-500/30 bg-gradient-to-b from-[#0F1726] to-[#080D16] overflow-hidden flex flex-col justify-between shadow-2xl hover:border-amber-400 transition-all duration-300 group">
            <div>
              {/* Preview Header */}
              <div className="p-6 sm:p-8 border-b border-amber-900/40 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-400 tracking-wider uppercase bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30">
                    PHIÊN BẢN 02
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-2 flex items-center gap-2 font-serif">
                    <Crown className="w-6 h-6 text-amber-400" />
                    <span>Mẫu 2 – Premium Law Firm</span>
                  </h2>
                </div>
                <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
              </div>

              {/* Preview Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <Image
                  src="/images/hero-premium.png"
                  alt="Xem trước giao diện Mẫu 2 – Premium Law Firm SAIGONLEX"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-slate-900/90 backdrop-blur-sm text-xs font-medium text-slate-200 px-3 py-1.5 rounded border border-white/10 font-serif">
                    Cảm hứng nghệ thuật: Movic.vn
                  </span>
                  <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-bold px-3 py-1.5 rounded shadow">
                    12 Section Sang trọng
                  </span>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-6 sm:p-8 space-y-5">
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Thiết kế theo phong cách Private Client & Prestige Law Firm đỉnh cao. Sử dụng nghệ thuật typography serif, hero toàn màn hình, thẻ dịch vụ bất đối xứng, tab chuyên môn và timeline lộ trình cao cấp.
                </p>

                {/* Characteristic Bullets */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Tông màu:</strong> Obsidian Dark Navy, Ivory Cream, Vàng Champagne hoàng gia.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Phong cách:</strong> Luxury, giàu tính biểu tượng, tranh ảnh nghệ thuật, bí mật cơ mật.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Phù hợp:</strong> Hãng luật Tranh tụng trọng tài, M&A triệu đô, Khách hàng tư nhân VIP (Private Wealth).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Trang con:</strong> Đầy đủ Triết lý, 8 Lĩnh vực, Luật sư trưởng, 6 Ấn phẩm, Đặt hẹn kín.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 sm:p-8 pt-0 border-t border-white/5 mt-4">
              <Link
                href="/mau-2"
                className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-serif font-bold py-4 rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25 transition group/btn"
              >
                <span>Trải nghiệm Demo Mẫu 2 (Premium Law Firm)</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Comparison Matrix Table */}
        <section className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Bảng So Sánh Chi Tiết Giữa 2 Giao Diện
            </h3>
            <p className="text-sm text-slate-400">
              Cả hai phiên bản đều sở hữu đầy đủ tính năng kỹ thuật, khác biệt chủ đạo nằm ở ngôn ngữ thị giác và đối tượng thân chủ mục tiêu.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-300 border border-white/10 rounded-xl overflow-hidden">
              <thead className="bg-slate-900 text-slate-200 uppercase font-mono text-[11px] border-b border-white/10">
                <tr>
                  <th className="p-4">Tiêu chí so sánh</th>
                  <th className="p-4 text-blue-400">Mẫu 1 – Corporate Legal</th>
                  <th className="p-4 text-amber-400">Mẫu 2 – Premium Law Firm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4 font-bold text-white">Cảm hứng cấu trúc</td>
                  <td className="p-4">Garage.vn (Hiện đại, lưới dịch vụ, tin cậy cao)</td>
                  <td className="p-4">Movic.vn (Nghệ thuật, giàu hình ảnh, timeline, case study)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Màu sắc chủ đạo</td>
                  <td className="p-4">Navy Blue (#0A2540), Trắng, Xám Slate sáng</td>
                  <td className="p-4">Obsidian Navy (#090E17), Vàng Champagne, Ivory Cream</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Kiểu chữ (Typography)</td>
                  <td className="p-4">Plus Jakarta Sans (Hiện đại, dễ đọc, dứt khoát)</td>
                  <td className="p-4">Playfair Display Serif (Sang trọng, quyền lực, hàn lâm)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Cách trình bày Lĩnh vực</td>
                  <td className="p-4">Lưới 8 thẻ dịch vụ hiện đại có icon & tóm tắt</td>
                  <td className="p-4">Thẻ lớn bất đối xứng + Bộ tab chuyển đổi tương tác</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Hồ sơ Vụ việc</td>
                  <td className="p-4">Gói giải pháp doanh nghiệp thường xuyên nổi bật</td>
                  <td className="p-4">Tình huống thực tế minh họa đã ẩn danh (Case studies)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Form Đặt lịch</td>
                  <td className="p-4">Form tiếp nhận trực tiếp với kiểm tra lỗi & chống spam</td>
                  <td className="p-4">Concierge thỉnh ý cơ mật với bảo đảm đặc quyền luật sư</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Tối ưu SEO & Sẵn sàng Deploy</td>
                  <td className="p-4 text-emerald-400">✓ Đầy đủ Metadata, Sitemap, Schema JSON-LD</td>
                  <td className="p-4 text-emerald-400">✓ Đầy đủ Metadata, Sitemap, Schema JSON-LD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 text-center text-xs text-slate-500">
        <p>© 2026 SAIGONLEX Law Firm – Bộ đôi giao diện website mẫu phục vụ duyệt thiết kế. All rights reserved.</p>
      </footer>
    </div>
  );
}
