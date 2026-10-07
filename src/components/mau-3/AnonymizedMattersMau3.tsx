"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, AlertCircle, CheckCircle, ShieldCheck } from "lucide-react";
import { ANONYMIZED_CASES_MAU3 } from "@/data/mau3Data";

export function AnonymizedMattersMau3() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#AD8B55]/10 text-[#AD8B55] text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>KINH NGHIỆM THỰC CHIẾN</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight mb-4">
            Vụ Việc Tiêu Biểu & Giải Pháp Pháp Lý
          </h2>
          <p className="text-[#5F6368] text-sm sm:text-base font-body leading-relaxed">
            Các trường hợp điển hình đã được SaigonLex tư vấn và giải quyết thành công. Nhằm bảo đảm
            quy tắc bảo mật thông tin thân chủ, tên các bên và dữ liệu định danh đã được ẩn danh.
          </p>
        </div>

        {/* 6 Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ANONYMIZED_CASES_MAU3.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="bg-white rounded-xl p-6 border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Sector Badge & ID */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#AD8B55] uppercase tracking-wider">
                    {item.sector}
                  </span>
                  <span className="text-xs font-mono text-[#9CA3AF] bg-[#F3F4F6] px-2 py-0.5 rounded">
                    {item.id}
                  </span>
                </div>

                {/* Matter (Title) */}
                <h3 className="font-heading text-base font-bold text-[#17365D] mb-4 leading-snug">
                  {item.matter}
                </h3>

                {/* Issue (Challenge) */}
                <div className="mb-3 text-xs leading-relaxed text-[#4B5563] bg-[#FEF2F2]/60 p-3 rounded-lg border border-[#FEE2E2]">
                  <div className="flex items-center gap-1.5 font-bold text-[#B91C1C] mb-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Thách thức pháp lý:</span>
                  </div>
                  <p>{item.issue}</p>
                </div>

                {/* Approach (Solution) */}
                <div className="mb-4 text-xs leading-relaxed text-[#4B5563]">
                  <div className="font-bold text-[#17365D] mb-1">Phương án SaigonLex:</div>
                  <p>{item.approach}</p>
                </div>
              </div>

              {/* ResultSummary (Outcome) */}
              <div className="pt-3 border-t border-[#F3F4F6] text-xs text-[#065F46] bg-[#ECFDF5] p-3 rounded-lg border border-[#D1FAE5]">
                <div className="flex items-center gap-1.5 font-bold text-[#047857] mb-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Kết quả thực tế:</span>
                </div>
                <p>{item.resultSummary}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Confidentiality Disclaimer */}
        <div className="mt-10 p-4 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center gap-3 text-xs text-[#6B7280] text-center">
          <ShieldCheck className="w-4 h-4 text-[#AD8B55] shrink-0" />
          <span>
            Thông tin trên mang tính chất minh họa phương pháp xử lý vụ việc. Mọi vụ việc pháp lý có
            tình tiết riêng biệt và được nghiên cứu độc lập.
          </span>
        </div>
      </div>
    </section>
  );
}
