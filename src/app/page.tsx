"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  Crown,
  Building2
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Motion";

export default function GatewayPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-950 via-slate-900 to-amber-950 py-2.5 px-4 text-center text-xs text-amber-200 border-b border-white/10 font-medium"
      >
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: "3s" }} />
          <span>SAIGONLEX – HỆ THỐNG 3 GIAO DIỆN WEBSITE CÔNG TY LUẬT CAO CẤP DÀNH CHO KHÁCH HÀNG LỰA CHỌN</span>
        </span>
      </motion.div>

      {/* Main Gateway Hero */}
      <header className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-950 to-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 shadow-inner"
          >
            <Scale className="w-4 h-4 text-amber-400" />
            <span>HÃNG LUẬT: {SITE_CONFIG.brandName} • ĐOÀN LUẬT SƯ TP. HỒ CHÍ MINH</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Lựa Chọn Phong Cách Thiết Kế <br />
            <span className="bg-gradient-to-r from-blue-400 via-amber-200 to-amber-400 bg-clip-text text-transparent">
              Website Công Ty Luật Chuẩn Mực
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Dự án xây dựng 3 phương án thiết kế độc lập, hoàn chỉnh cả trang chủ và hệ thống trang con:
            Corporate Premium, Signature Premium và Classic Modern Premium.
          </motion.p>
        </motion.div>
      </header>

      {/* Three Models Showcase Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MẪU 1: CORPORATE LEGAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-b from-slate-900 to-[#0A192F] overflow-hidden flex flex-col justify-between shadow-2xl hover:border-blue-400 transition-all duration-300 group"
          >
            <div>
              {/* Preview Header */}
              <div className="p-6 border-b border-blue-900/40 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-blue-400 tracking-wider uppercase bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/30">
                    MẪU A
                  </span>
                  <h2 className="text-xl font-bold text-white mt-2 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    <span>Corporate Premium</span>
                  </h2>
                </div>
                <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
              </div>

              {/* Preview Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <Image
                  src="/images/hero-corporate.png"
                  alt="Xem trước giao diện MẪU A – Corporate Premium SAIGONLEX"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-slate-900/90 backdrop-blur-sm text-[11px] font-medium text-slate-200 px-2.5 py-1 rounded border border-white/10">
                    Corporate Law Firm
                  </span>
                  <span className="bg-blue-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow">
                    12 Section Chuẩn
                  </span>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Thiết kế theo chuẩn mực hãng luật doanh nghiệp định chế bề thế. Bố cục sáng sủa, thanh lịch, cấu trúc thông tin rành mạch, tốc độ tối ưu.
                </p>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Định vị:</strong> Established institutional corporate firm.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Màu sắc:</strong> White, Slate, Deep Navy Blue, Muted Gold.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Phong thái:</strong> Dứt khoát, chuẩn mực công sở, cards cân đối.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 border-t border-white/5 mt-4">
              <Link
                href="/mau-1"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl text-center text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25 transition group/btn"
              >
                <span>Xem Demo MẪU A (Corporate)</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* MẪU 2: PREMIUM LAW FIRM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border-2 border-amber-500/30 bg-gradient-to-b from-[#162238] to-[#0D1828] overflow-hidden flex flex-col justify-between shadow-2xl hover:border-amber-400 transition-all duration-300 group"
          >
            <div>
              {/* Preview Header */}
              <div className="p-6 border-b border-amber-900/40 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-400 tracking-wider uppercase bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30">
                    MẪU B
                  </span>
                  <h2 className="text-xl font-bold text-white mt-2 flex items-center gap-2">
                    <Crown className="w-5 h-5 text-amber-400" />
                    <span>Signature Premium</span>
                  </h2>
                </div>
                <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
              </div>

              {/* Preview Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <Image
                  src="/images/hero-premium.png"
                  alt="Xem trước giao diện MẪU B – Signature Premium Law Firm SAIGONLEX"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-slate-900/90 backdrop-blur-sm text-[11px] font-medium text-slate-200 px-2.5 py-1 rounded border border-white/10">
                    Signature Boutique Firm
                  </span>
                  <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow">
                    12 Section Sang Trọng
                  </span>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Phong cách Modern Boutique Advisory Firm. Bề mặt sáng ấm (Ivory & Alabaster), điểm xuyết Midnight Navy và Champagne Gold cao cấp.
                </p>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Định vị:</strong> Modern boutique, premium legal advisory firm.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Màu sắc:</strong> Warm Ivory, Alabaster, Champagne Gold, Navy.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Phong thái:</strong> Nghệ thuật, bất đối xứng, tabbed practice areas.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 border-t border-white/5 mt-4">
              <Link
                href="/mau-2"
                className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold py-3.5 rounded-xl text-center text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25 transition group/btn"
              >
                <span>Xem Demo MẪU B (Signature)</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* MẪU 3: CLASSIC MODERN PREMIUM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-b from-[#132238] to-[#0A1726] overflow-hidden flex flex-col justify-between shadow-2xl hover:border-emerald-400 transition-all duration-300 group ring-1 ring-emerald-500/20"
          >
            <div>
              {/* Preview Header */}
              <div className="p-6 border-b border-emerald-900/40 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-emerald-300 tracking-wider uppercase bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30">
                    MẪU C • MỚI NHẤT
                  </span>
                  <h2 className="text-xl font-bold text-white mt-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                    <span>Classic Modern Premium</span>
                  </h2>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Preview Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <Image
                  src="/images/about-firm.png"
                  alt="Xem trước giao diện MẪU C – Classic Modern Premium Law Firm SAIGONLEX"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-slate-900/90 backdrop-blur-sm text-[11px] font-medium text-slate-200 px-2.5 py-1 rounded border border-white/10">
                    Classic Modern Law Firm
                  </span>
                  <span className="bg-emerald-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow">
                    21 Section Toàn Diện
                  </span>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Kế thừa cấu trúc doanh nghiệp truyền thống quen thuộc của SaigonLex, nâng cấp lên chuẩn mực hiện đại, giàu thông tin thực tiễn và tối ưu chuyển đổi cao nhất.
                </p>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Định vị:</strong> Hãng luật Việt Nam uy tín nâng cấp chuẩn mực cao cấp.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Màu sắc:</strong> White (75%), Primary Navy (#17365D, 18%), Warm Gold (7%).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Nội dung:</strong> 21 Section (8 lĩnh vực, 6 dịch vụ, 6 ca thực tế, 6 biểu mẫu tải về).</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 border-t border-white/5 mt-4">
              <Link
                href="/mau-3"
                className="w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-bold py-3.5 rounded-xl text-center text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25 transition group/btn"
              >
                <span>Xem Demo MẪU C (Classic Modern)</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Feature Comparison Matrix Table */}
        <FadeIn delay={0.2} className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Bảng So Sánh Chi Tiết Giữa 3 Phong Cách Thiết Kế
            </h3>
            <p className="text-sm text-slate-400">
              Cả ba phương án đều đạt đẳng cấp cao cấp đồng đều, khác biệt về PHONG CÁCH và MỨC ĐỘ DÀY DẶN CỦA NỘI DUNG.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-300 border border-white/10 rounded-xl overflow-hidden">
              <thead className="bg-slate-900 text-slate-200 uppercase font-mono text-[11px] border-b border-white/10">
                <tr>
                  <th className="p-4">Tiêu chí so sánh</th>
                  <th className="p-4 text-blue-400">MẪU A – Corporate</th>
                  <th className="p-4 text-amber-400">MẪU B – Signature</th>
                  <th className="p-4 text-emerald-400">MẪU C – Classic Modern</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4 font-bold text-white">Cảm nhận thương hiệu</td>
                  <td className="p-4">Established, institutional, trusted, structured corporate law firm</td>
                  <td className="p-4">Modern boutique, high-end private advisory, bespoke luxury law firm</td>
                  <td className="p-4 text-emerald-300">Familiar corporate structure, bright & trustworthy, traditional yet modern</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Bảng màu chủ đạo</td>
                  <td className="p-4">White, Light Gray, Deep Navy Blue (#0A2540), Muted Gold</td>
                  <td className="p-4">Warm Ivory (#FDFBF7), Alabaster (#FAF7F0), Champagne Gold</td>
                  <td className="p-4 text-emerald-300">Bright White (#FFFFFF), Warm Light (#F5F1E9), Primary Navy (#17365D), Accent Gold (#AD8B55)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Quy mô Section trang chủ</td>
                  <td className="p-4">12 Section</td>
                  <td className="p-4">12 Section</td>
                  <td className="p-4 font-bold text-emerald-300">21 Section (đầy đủ & phong phú nhất)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Lĩnh vực & Dịch vụ</td>
                  <td className="p-4">8 Lĩnh vực dạng lưới</td>
                  <td className="p-4">4 Thẻ lớn + Tab chuyển đổi</td>
                  <td className="p-4 text-emerald-300">8 Lĩnh vực chi tiết + 6 Dịch vụ đóng gói độc lập</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Kinh nghiệm thực tiễn</td>
                  <td className="p-4">Giới thiệu kinh nghiệm tổng quan</td>
                  <td className="p-4">Case studies thẻ sang trọng</td>
                  <td className="p-4 text-emerald-300">6 Vụ việc ẩn danh cụ thể (thách thức, giải pháp, kết quả)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Tài nguyên & Biểu mẫu</td>
                  <td className="p-4">Blog kiến thức</td>
                  <td className="p-4">Ấn phẩm pháp lý</td>
                  <td className="p-4 text-emerald-300">Kho 6 biểu mẫu DOCX/PDF tải về miễn phí + Bản tin + Tuyển dụng</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Quy trình làm việc</td>
                  <td className="p-4">4 Bước tuần tự</td>
                  <td className="p-4">Timeline La Mã I-IV</td>
                  <td className="p-4 text-emerald-300">6 Bước chuẩn mực kèm thời gian & sản phẩm bàn giao</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Hiệu năng & SEO</td>
                  <td className="p-4 text-emerald-400">✓ 100% Next.js App Router, SSR/SSG</td>
                  <td className="p-4 text-emerald-400">✓ 100% Next.js App Router, SSR/SSG</td>
                  <td className="p-4 text-emerald-400">✓ 100% Next.js App Router, SSR/SSG</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} CÔNG TY LUẬT SAIGONLEX – Bộ ba giao diện website mẫu phục vụ duyệt thiết kế. All rights reserved.</p>
      </footer>
    </div>
  );
}
