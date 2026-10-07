"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  Award,
  CheckCircle2,
  Scale
} from "lucide-react";

export function HeroMau3() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F1E9]/60 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E5E7EB]">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#17365D 1px, transparent 1px), radial-gradient(#17365D 1px, #F5F1E9 1px)`,
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Value Proposition (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17365D]/5 border border-[#17365D]/15 text-[#17365D] text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#AD8B55] animate-pulse" />
              <span>HÃNG LUẬT SAIGONLEX • ĐOÀN LUẬT SƯ TP. HỒ CHÍ MINH</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold text-[#17365D] leading-[1.25] tracking-tight mb-5">
              Đồng Hành Pháp Lý Bằng Sự Tận Tâm,{" "}
              <span className="text-[#AD8B55] relative inline-block">
                Bảo Vệ Quyền Lợi
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#AD8B55]/30 rounded" />
              </span>{" "}
              Toàn Diện Cho Doanh Nghiệp & Cá Nhân
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-8 max-w-2xl font-body">
              Hãng luật uy tín tại TP. Hồ Chí Minh với triết lý hành nghề{" "}
              <strong className="text-[#17365D] font-semibold">Tận Tâm – Linh Hoạt – Đúng Pháp Luật</strong>.
              Chúng tôi cung cấp giải pháp pháp lý thực tiễn, an toàn và tối ưu cho khách hàng
              trong nước và quốc tế.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#dat-lich-tu-van"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md bg-[#17365D] text-white font-medium hover:bg-[#0E2945] transition-all duration-200 shadow-md hover:shadow-lg group text-sm sm:text-base"
              >
                <span>Đặt Lịch Tư Vấn Ngay</span>
                <ArrowRight className="w-4 h-4 text-[#AD8B55] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <Link
                href="/mau-3/dich-vu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-[#17365D]/25 bg-white text-[#17365D] font-medium hover:bg-[#F5F1E9]/60 hover:border-[#17365D] transition-colors duration-200 text-sm sm:text-base"
              >
                <span>Khám Phá Dịch Vụ</span>
              </Link>

              <a
                href="tel:0908033115"
                className="inline-flex items-center gap-2.5 px-4 py-3 text-sm font-semibold text-[#17365D] hover:text-[#AD8B55] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#AD8B55]/15 flex items-center justify-center text-[#AD8B55]">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#6B7280] font-normal uppercase tracking-wider">Hotline khẩn cấp</div>
                  <div className="text-sm font-bold text-[#17365D]">0908 033 115</div>
                </div>
              </a>
            </div>

            {/* Quick Authority Highlights */}
            <div className="w-full pt-6 border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#AD8B55] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#6B7280]">Trụ sở chính</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#17365D]">Quận 1, TP. Hồ Chí Minh</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#AD8B55] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#6B7280]">Giờ làm việc</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#17365D]">T2 – T6: 08:00 – 17:30</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#AD8B55] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-[#6B7280]">Bảo mật thông tin</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#17365D]">Tuyệt đối & Đúng luật</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Presentation (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Frame with border accent */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Backing decorative frame */}
              <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-[#17365D]/10 via-[#AD8B55]/15 to-transparent blur-sm" />
              
              <div className="relative rounded-xl overflow-hidden border-2 border-[#17365D]/10 shadow-2xl bg-white">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                  <Image
                    src="/images/hero-corporate.png"
                    alt="Luật sư SaigonLex tư vấn pháp lý chuyên nghiệp cho khách hàng doanh nghiệp"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17365D]/75 via-transparent to-transparent" />
                </div>

                {/* Overlaid Banner inside Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Scale className="w-4 h-4 text-[#AD8B55]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#F5F1E9]">Tư vấn chuẩn mực</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-white/90">
                    Bảo vệ quyền lợi hợp pháp của thân chủ trên nền tảng pháp luật nghiêm ngặt.
                  </p>
                </div>
              </div>

              {/* Floating Badge Card 1 */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white rounded-lg p-3 sm:p-4 shadow-xl border border-[#E5E7EB] flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-full bg-[#17365D] text-white flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#AD8B55]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17365D] leading-tight">Đoàn Luật Sư TP.HCM</div>
                  <div className="text-[11px] text-[#6B7280]">Hành nghề hợp pháp</div>
                </div>
              </div>

              {/* Floating Badge Card 2 */}
              <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-5 bg-white rounded-lg p-3 sm:p-4 shadow-xl border border-[#E5E7EB] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17365D]">Tận Tâm & Minh Bạch</div>
                  <div className="text-[11px] text-[#6B7280]">Cam kết đồng hành trọn gói</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
