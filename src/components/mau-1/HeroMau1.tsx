"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ArrowRight, CheckCircle2, PhoneCall, Award, Users } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export function HeroMau1() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-12 pb-20 md:py-24 overflow-hidden border-b border-slate-200">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0A2540] text-xs font-semibold tracking-wide">
              <Shield className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>HÃNG LUẬT DOANH NGHIỆP & TRANH TỤNG UY TÍN TẠI VIỆT NAM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.18]">
              Giải pháp pháp lý <span className="text-[#C5A880]">đáng tin cậy</span> cho cá nhân và doanh nghiệp
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Đồng hành cùng doanh nghiệp từ thành lập, đàm phán hợp đồng thương mại đến xử lý các tranh chấp phức tạp. Chúng tôi cung cấp giải pháp pháp lý sắc bén, bảo vệ an toàn tối đa cho tài sản và thương hiệu của bạn.
            </p>

            {/* Key trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Bảo mật thông tin tuyệt đối (NDA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Phản hồi sơ bộ trong vòng 24 giờ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Chi phí minh bạch – Không phát sinh</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Luật sư chuyên môn theo từng vụ việc</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/mau-1/lien-he"
                className="bg-[#0A2540] hover:bg-[#0f3d68] text-white text-base font-semibold px-7 py-3.5 rounded shadow-lg hover:shadow-xl transition flex items-center gap-2 group"
              >
                <span>Yêu cầu tư vấn ngay</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.hotline.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-slate-300 text-slate-800 font-semibold hover:bg-slate-100 transition"
              >
                <PhoneCall className="w-4 h-4 text-[#0A2540]" />
                <span>Hotline: {SITE_CONFIG.hotline}</span>
              </a>
            </div>

            {/* Trust Metrics (Clearly marked DEMO) */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-2xl font-bold text-[#0A2540]">15+ <span className="text-[11px] text-amber-600 font-semibold">[DEMO]</span></div>
                <div className="text-xs text-slate-500 font-medium">Năm chuyên sâu</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0A2540]">850+ <span className="text-[11px] text-amber-600 font-semibold">[DEMO]</span></div>
                <div className="text-xs text-slate-500 font-medium">Vụ việc doanh nghiệp</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0A2540]">98% <span className="text-[11px] text-amber-600 font-semibold">[DEMO]</span></div>
                <div className="text-xs text-slate-500 font-medium">Khách hàng hài lòng</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Hero Visual) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Image Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/hero-corporate.png"
                alt="Đội ngũ luật sư SAIGONLEX thảo luận hồ sơ trong phòng họp hiện đại tại TP. Hồ Chí Minh"
                fill
                priority
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge in Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-lg text-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A2540] text-[#C5A880] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-[#0A2540]">
                      Cam kết Thượng tôn Pháp luật & Đạo đức
                    </h2>
                    <p className="text-[11px] text-slate-600">
                      Mọi tư vấn đều được bảo đảm bằng Hợp đồng dịch vụ pháp lý minh bạch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative subtle backdrop elements */}
            <div className="absolute -top-4 -right-4 w-40 h-40 bg-[#C5A880]/15 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
