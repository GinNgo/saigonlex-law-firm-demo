"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Scale, Shield, ArrowDown } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export function HeroMau2() {
  return (
    <section className="relative bg-[#FDFBF7] text-[#111827] pt-14 pb-24 md:py-28 overflow-hidden border-b border-[#EFE9D9]">
      {/* Subtle fine editorial background line grid */}
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#0C1829_1px,transparent_1px),linear-gradient(to_bottom,#0C1829_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Index Header */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-[#E8E1CE] text-xs text-[#8C7A58]">
          <span className="uppercase tracking-wider font-semibold">SAIGONLEX / EDITORIAL EDITION</span>
          <span className="font-mono text-[11px] hidden sm:inline text-[#4B5563] font-medium">PRIVATE ADVISORY & LITIGATION COUNSEL</span>
          <span className="uppercase tracking-wider font-mono text-[11px] text-[#111827] font-semibold">TP. HỒ CHÍ MINH</span>
        </div>

        {/* Main Grid: Headline + Photographic Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#FAF7F0] border border-[#E0D7BE] text-[#997836] text-xs tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span>BOUTIQUE LEGAL ADVISORY FOR LEADERS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              Kiến tạo <span className="italic font-semibold text-[#997836]">Lợi thế Pháp lý</span> & Bảo toàn Di sản Thân chủ
            </h1>

            <p className="text-[#202124] text-base sm:text-[17px] font-normal leading-[1.72] max-w-2xl">
              Cố vấn pháp lý chiến lược cấp cao cho các thương vụ M&A quy mô lớn, tái cấu trúc tập đoàn và đại diện tranh tụng trọng tài thương mại quốc tế với cam kết bảo mật tuyệt đối.
            </p>

            {/* Editorial Feature List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#202124] font-medium">
              <div className="flex items-center gap-2.5 p-3 rounded-sm bg-[#FAF7F0] border border-[#EFE9D9]">
                <span className="w-2 h-2 rotate-45 bg-[#C5A059] shrink-0" />
                <span>Đặc quyền Thân chủ – Bảo mật vô thời hạn</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-sm bg-[#FAF7F0] border border-[#EFE9D9]">
                <span className="w-2 h-2 rotate-45 bg-[#C5A059] shrink-0" />
                <span>Luật sư Thành viên (Partner) trực tiếp chủ trì</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/mau-2/lien-he"
                className="bg-[#17365D] hover:bg-[#0f2746] text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-sm shadow-md hover:shadow-lg transition flex items-center gap-2 group"
              >
                <span>Yêu cầu Hội đàm Cơ mật</span>
                <ArrowUpRight className="w-4 h-4 text-[#EBD59B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="#triet-ly"
                className="border border-[#D1C7B2] hover:border-[#17365D] text-[#17365D] font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded-sm transition hover:bg-[#FAF7F0]"
              >
                Khám phá Triết lý Hành nghề
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Editorial Photographic Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Picture Frame */}
            <div className="relative rounded-sm overflow-hidden aspect-[4/5] shadow-2xl border-2 border-[#EFE9D9] bg-[#0C1829]">
              <Image
                src="/images/hero-premium.png"
                alt="Không gian thư viện pháp luật danh tiếng và phòng hội nghị kín SAIGONLEX"
                fill
                priority
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1829]/70 via-transparent to-transparent pointer-events-none" />

              {/* Inset Editorial Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FDFBF7]/95 backdrop-blur-md p-4 rounded-sm border border-[#E5DEC9] text-[#0C1829] shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-[#0F172A]">
                      Quy chuẩn Lập luận Tinh hoa
                    </div>
                    <div className="text-xs text-[#4B5563] mt-0.5 font-normal">
                      Nghệ thuật pháp lý phục vụ các quyết định trọng yếu
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#997836] bg-[#C5A059]/15 px-2.5 py-1 rounded-sm border border-[#C5A059]/30">
                    SL-2026
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle decorative fine frame */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-full h-full border border-[#C5A059]/30 -z-10 rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
