"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { LEGAL_FORMS_MAU3 } from "@/data/mau3Data";

export function LegalFormsSectionMau3() {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <section id="bieu-mau" className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#AD8B55]/10 text-[#AD8B55] text-xs font-bold uppercase tracking-wider mb-3">
              <Download className="w-3.5 h-3.5" />
              <span>KHO TÀI LIỆU & BIỂU MẪU MIỄN PHÍ</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight mb-3">
              Biểu Mẫu Pháp Lý Chuẩn Mực Do Luật Sư Biên Soạn
            </h2>
            <p className="text-[#5F6368] text-sm sm:text-base font-body leading-relaxed">
              Các mẫu hợp đồng, văn bản và đơn từ thông dụng được SaigonLex chuẩn hóa theo quy định
              pháp luật hiện hành, hỗ trợ cá nhân và doanh nghiệp sử dụng thuận tiện.
            </p>
          </div>

          <div className="mt-5 md:mt-0">
            <Link
              href="/mau-3/bieu-mau"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#17365D] hover:text-[#AD8B55] transition-colors group"
            >
              <span>Xem toàn bộ biểu mẫu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#AD8B55]" />
            </Link>
          </div>
        </div>

        {/* Download notification popup */}
        {downloadSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] flex items-center gap-3 text-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
            <span>
              Đang tải biểu mẫu: <strong>{downloadSuccess}</strong>. Nếu quý vị cần điều chỉnh điều
              khoản chuyên sâu, hãy liên hệ luật sư để được tư vấn.
            </span>
          </motion.div>
        )}

        {/* 6 Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEGAL_FORMS_MAU3.map((form, idx) => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white rounded-xl p-6 border border-[#E5E7EB] hover:border-[#AD8B55] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#17365D]/5 text-[#17365D] flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#AD8B55]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-[#17365D] bg-[#F1F5F9] px-2 py-0.5 rounded">
                      {form.fileType}
                    </span>
                    <span className="text-[11px] text-[#6B7280]">
                      {form.fileSize}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-bold text-[#AD8B55] uppercase tracking-wider mb-1">
                  {form.category}
                </div>

                <h3 className="font-heading text-base font-bold text-[#17365D] group-hover:text-[#AD8B55] transition-colors mb-2 leading-snug">
                  {form.title}
                </h3>

                <p className="text-xs text-[#5F6368] leading-relaxed mb-4 line-clamp-2">
                  {form.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
                <span className="text-[11px] text-[#9CA3AF]">
                  Cập nhật: {form.updatedDate}
                </span>

                <button
                  type="button"
                  onClick={() => handleDownload(form.title)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#17365D] hover:bg-[#0E2945] text-white text-xs font-semibold transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải mẫu</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-[#E5E7EB] flex items-start sm:items-center gap-3 text-xs text-[#5F6368]">
          <AlertTriangle className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-[#17365D]">Lưu ý pháp lý:</strong> Các biểu mẫu được cung cấp
            nhằm mục đích tham khảo khung nội dung cơ bản. Đối với các giao dịch có giá trị lớn hoặc
            tình tiết phức tạp, quý vị nên tham vấn ý kiến luật sư để phòng ngừa rủi ro tranh chấp.
          </p>
        </div>
      </div>
    </section>
  );
}
