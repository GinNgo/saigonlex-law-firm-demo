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
  Crown
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
          <span>SAIGONLEX – BỘ ĐÔI GIAO DIỆN WEBSITE CÔNG TY LUẬT CAO CẤP DÀNH CHO KHÁCH HÀNG LỰA CHỌN</span>
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
            <span>THƯƠNG HIỆU DEMO: {SITE_CONFIG.brandName}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Lựa chọn Phong cách Thiết kế <br />
            <span className="bg-gradient-to-r from-blue-400 via-amber-200 to-amber-400 bg-clip-text text-transparent">
              Website Công ty Luật Chuyên nghiệp
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Dự án bao gồm 2 phiên bản hoàn chỉnh với đầy đủ 8 lĩnh vực pháp luật, đội ngũ luật sư, ấn phẩm pháp lý, quy trình tư vấn và biểu mẫu đặt lịch tương tác thực tế.
          </motion.p>
        </motion.div>
      </header>

      {/* Two Models Showcase Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
                    <span><strong>Định vị:</strong> Large, established, trusted corporate law firm (Hãng luật doanh nghiệp định chế bề thế).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Tông màu:</strong> Trắng, Xám sáng, Deep Navy Blue và Muted Gold hoàng gia.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Ngôn ngữ thị giác:</strong> Sáng sủa, chuẩn mực, cards có cấu trúc vững vàng, fade-up & stagger animation.</span>
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
                <span>Trải nghiệm Demo Mẫu 1 (Corporate Premium)</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* MẪU 2: PREMIUM LAW FIRM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border-2 border-amber-500/30 bg-gradient-to-b from-[#162238] to-[#0D1828] overflow-hidden flex flex-col justify-between shadow-2xl hover:border-amber-400 transition-all duration-300 group"
          >
            <div>
              {/* Preview Header */}
              <div className="p-6 sm:p-8 border-b border-amber-900/40 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-400 tracking-wider uppercase bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30">
                    PHIÊN BẢN 02
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-2 flex items-center gap-2 font-serif">
                    <Crown className="w-6 h-6 text-amber-400" />
                    <span>Mẫu 2 – Editorial Premium</span>
                  </h2>
                </div>
                <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
              </div>

              {/* Preview Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <Image
                  src="/images/hero-premium.png"
                  alt="Xem trước giao diện Mẫu 2 – Editorial Premium Law Firm SAIGONLEX"
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
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Thiết kế theo phong cách Modern Boutique Advisory Firm. Bề mặt sáng ấm (75% Ivory & Alabaster), điểm xuyết 15-20% Midnight Navy và 5-10% Champagne Gold. Typography Be Vietnam Pro chuẩn mực, cinematic reveal và bố cục bất đối xứng.
                </p>

                {/* Characteristic Bullets */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Định vị:</strong> Modern, boutique, premium legal advisory firm (Hãng cố vấn tinh hoa boutique).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Tông màu:</strong> Warm Ivory (#FDFBF7), Alabaster (#FAF7F0), Champagne Gold, Navy Accent.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Ngôn ngữ thị giác:</strong> Bright Luxury, editorial portraits, tabbed practice, timeline quy trình, case studies ẩn danh.</span>
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
                className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold py-4 rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25 transition group/btn"
              >
                <span>Trải nghiệm Demo Mẫu 2 (Editorial Premium)</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Feature Comparison Matrix Table */}
        <FadeIn delay={0.2} className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Bảng So Sánh Chi Tiết Giữa 2 Phong Cách Thiết Kế
            </h3>
            <p className="text-sm text-slate-400">
              Cả hai phiên bản đều đạt đẳng cấp Premium đồng đều, khác biệt về PHONG CÁCH và HÌNH THÁI chứ không phải cấp độ chất lượng.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-300 border border-white/10 rounded-xl overflow-hidden">
              <thead className="bg-slate-900 text-slate-200 uppercase font-mono text-[11px] border-b border-white/10">
                <tr>
                  <th className="p-4">Tiêu chí so sánh</th>
                  <th className="p-4 text-blue-400">Mẫu 1 – Corporate Premium</th>
                  <th className="p-4 text-amber-400">Mẫu 2 – Editorial Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4 font-bold text-white">Cảm nhận thương hiệu</td>
                  <td className="p-4">Established, institutional, trusted, structured corporate law firm</td>
                  <td className="p-4">Modern, boutique, high-end private advisory, bespoke luxury law firm</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Bảng màu chủ đạo</td>
                  <td className="p-4">White, Light Gray, Deep Navy Blue (#0A2540), Muted Gold</td>
                  <td className="p-4">Warm Ivory (#FDFBF7), Alabaster (#FAF7F0), Champagne Gold, Navy Accent</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Tỷ lệ diện tích màu</td>
                  <td className="p-4">75% Light surfaces, 20% Deep Navy, 5% Gold</td>
                  <td className="p-4">70-75% Ivory/Alabaster, 15-20% Midnight Navy, 5-10% Champagne</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Typography & Tiêu đề</td>
                  <td className="p-4">Be Vietnam Pro (700) & Roboto – Chuẩn mực công sở, dứt khoát, dễ đọc</td>
                  <td className="p-4">Be Vietnam Pro (700) & Roboto – Đậm nét, trang trọng, tối ưu dấu tiếng Việt</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Ngôn ngữ chuyển động</td>
                  <td className="p-4">Fade-up, stagger cards, subtle underline, counters</td>
                  <td className="p-4">Text reveal, image mask reveal, subtle parallax, editorial transitions</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Bố cục Lĩnh vực & Dịch vụ</td>
                  <td className="p-4">Lưới 8 thẻ dịch vụ đồng nhất có icon, số liệu và hover nâng cao</td>
                  <td className="p-4">4 Thẻ lớn bất đối xứng + Bộ tab chuyển đổi tương tác + Case studies</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Quy trình & Đội ngũ</td>
                  <td className="p-4">Quy trình 4 bước tuần tự, thẻ đội ngũ executive corporate</td>
                  <td className="p-4">Timeline La Mã I-IV, chân dung editorial nghệ thuật đen trắng đổi màu</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Hiệu năng & SEO</td>
                  <td className="p-4 text-emerald-400">✓ 100% Next.js App Router, SSR/SSG, JSON-LD Schema</td>
                  <td className="p-4 text-emerald-400">✓ 100% Next.js App Router, SSR/SSG, JSON-LD Schema</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 text-center text-xs text-slate-500">
        <p>© 2026 SAIGONLEX Law Firm – Bộ đôi giao diện website mẫu phục vụ duyệt thiết kế. All rights reserved.</p>
      </footer>
    </div>
  );
}
