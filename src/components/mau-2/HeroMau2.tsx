"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Scale, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export function HeroMau2() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#090E17] text-[#FAF8F5] overflow-hidden">
      {/* Background Image with dark luxury gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-premium.png"
          alt="Không gian phòng làm việc đỉnh cao và thư viện luật sư tại SAIGONLEX"
          fill
          priority
          className="object-cover object-center scale-105 animate-in fade-in duration-1000"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090E17] via-[#090E17]/80 to-[#090E17]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090E17]/90 via-transparent to-[#090E17]/90" />
      </div>

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center space-y-8">
        {/* Subtle Crest Emblem */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md text-[#D4AF37] text-xs font-serif tracking-[0.25em] uppercase"
        >
          <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>SAIGONLEX PREMIUM ADVOCATES & COUNSELORS</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF8F5] leading-[1.15] max-w-4xl mx-auto">
            Bảo toàn Di sản <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#D4AF37]">&</span> Kiến tạo Vị thế Pháp lý
          </h1>
          <p className="text-slate-300 font-sans text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Cố vấn pháp lý cấp cao cho ban lãnh đạo tập đoàn, các thương vụ M&A quy mô lớn và đại diện tranh tụng trọng tài thương mại quốc tế.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/mau-2/lien-he"
            className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA820A] text-slate-950 font-serif font-bold text-xs uppercase tracking-[0.15em] px-8 py-4 rounded-sm shadow-xl hover:shadow-amber-500/20 transition flex items-center gap-2"
          >
            <span>Đặt lịch Thỉnh ý Kín</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950" />
          </Link>
          <Link
            href="#triet-ly"
            className="border border-[#D4AF37]/40 hover:border-[#D4AF37] bg-white/5 hover:bg-white/10 backdrop-blur-md text-[#FAF8F5] font-serif text-xs uppercase tracking-[0.15em] px-7 py-4 rounded-sm transition"
          >
            Khám phá Triết lý Hành nghề
          </Link>
        </motion.div>

        {/* Floating Verified Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left"
        >
          <div className="p-4 rounded border border-white/10 bg-black/40 backdrop-blur-md">
            <div className="text-[#D4AF37] font-serif text-sm font-semibold mb-1">
              Bảo mật Cơ mật 100%
            </div>
            <div className="text-[11px] text-slate-400">
              Quy ước giữ bí mật tuyệt đối theo đặc quyền luật sư - thân chủ (Attorney-Client Privilege).
            </div>
          </div>

          <div className="p-4 rounded border border-white/10 bg-black/40 backdrop-blur-md">
            <div className="text-[#D4AF37] font-serif text-sm font-semibold mb-1">
              Hồ sơ Vụ việc Chọn lọc
            </div>
            <div className="text-[11px] text-slate-400">
              Giới hạn số lượng vụ việc nhận thụ lý mỗi năm để tối ưu hóa nguồn lực trí tuệ.
            </div>
          </div>

          <div className="p-4 rounded border border-white/10 bg-black/40 backdrop-blur-md">
            <div className="text-[#D4AF37] font-serif text-sm font-semibold mb-1">
              Tư vấn Cấp Điều hành
            </div>
            <div className="text-[11px] text-slate-400">
              Luật sư thành viên (Partner) trực tiếp chủ trì đàm phán và xây dựng phương án.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-500 hover:text-[#D4AF37] transition text-[10px] tracking-widest uppercase">
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#D4AF37]" />
      </div>
    </section>
  );
}
