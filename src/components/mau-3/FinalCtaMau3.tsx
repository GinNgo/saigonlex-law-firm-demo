"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Calendar, ShieldCheck, ArrowRight } from "lucide-react";

export function FinalCtaMau3() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#17365D] via-[#0E2945] to-[#17365D] text-white relative overflow-hidden">
      {/* Background architectural geometric watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(#AD8B55 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#AD8B55] text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>ĐỒNG HÀNH PHÁP LÝ UY TÍN TẠI TP. HỒ CHÍ MINH</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-5 leading-tight text-white">
            Giải Pháp Pháp Lý Vững Vàng Cho Mọi Bước Tiến Doanh Nghiệp
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base lg:text-lg text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed font-body mb-10">
            Hãy để đội ngũ Luật sư giàu kinh nghiệm của SaigonLex đồng hành cùng quý vị: nhận diện rủi
            ro, xây dựng hàng rào pháp lý an toàn và giải quyết triệt để mọi vướng mắc phát sinh.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="#dat-lich-tu-van"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-[#AD8B55] hover:bg-[#92723E] text-white font-bold text-sm sm:text-base transition-colors shadow-lg hover:shadow-xl group"
            >
              <span>Đặt Lịch Tư Vấn Trực Tiếp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="tel:0908033115"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#AD8B55]" />
              <span>Hotline 24/7: 0908 033 115</span>
            </a>
          </div>

          {/* Footer note */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9CA3AF]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Tiếp nhận hồ sơ bảo mật
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AD8B55]" />
              Phản hồi trong 24 giờ
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              Đoàn Luật sư TP.HCM
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
