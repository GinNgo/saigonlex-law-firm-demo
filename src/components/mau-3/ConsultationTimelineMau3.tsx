"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitCommit, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { CONSULTATION_PROCESS_MAU3 } from "@/data/mau3Data";

export function ConsultationTimelineMau3() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17365D]/5 text-[#17365D] text-xs font-bold uppercase tracking-wider mb-3">
            <GitCommit className="w-3.5 h-3.5 text-[#AD8B55]" />
            <span>QUY TRÌNH LÀM VIỆC CHUẨN MỰC</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight mb-4">
            6 Bước Đồng Hành Pháp Lý Cùng Khách Hàng
          </h2>
          <p className="text-[#5F6368] text-sm sm:text-base font-body leading-relaxed">
            Quy trình làm việc rõ ràng, bảo đảm mọi giai đoạn đều được kiểm soát chặt chẽ, bảo mật
            thông tin và có văn bản xác nhận cụ thể.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {CONSULTATION_PROCESS_MAU3.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              className="relative bg-[#F8F9FA] rounded-xl p-6 sm:p-7 border border-[#E5E7EB] hover:border-[#AD8B55] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Number Badge & Step Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#17365D] text-[#AD8B55] font-mono font-bold text-sm flex items-center justify-center shadow-sm">
                    {step.step}
                  </div>
                  <span className="text-xs text-[#AD8B55] font-bold uppercase tracking-wider bg-white px-2.5 py-1 rounded border border-[#E5E7EB]">
                    Giai đoạn {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#17365D] mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed font-body">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex items-center gap-1.5 text-xs text-[#10B981] font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Tiến trình kiểm soát chất lượng</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <a
            href="#dat-lich-tu-van"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#17365D] hover:text-[#AD8B55] transition-colors"
          >
            <span>Bắt đầu từ Bước 1: Gửi thông tin yêu cầu tư vấn ngay hôm nay</span>
            <ArrowRight className="w-4 h-4 text-[#AD8B55]" />
          </a>
        </div>
      </div>
    </section>
  );
}
