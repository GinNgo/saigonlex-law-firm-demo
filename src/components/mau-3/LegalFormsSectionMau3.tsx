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
    <section id="bieu-mau" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-section-alt)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--color-accent)]/15 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider mb-3">
              <Download className="w-3.5 h-3.5" />
              <span>KHO TÀI LIỆU & BIỂU MẪU MIỄN PHÍ</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-3">
              Biểu Mẫu Pháp Lý Chuẩn Mực Do Luật Sư Biên Soạn
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm sm:text-base font-body leading-relaxed">
              Các mẫu hợp đồng, văn bản và đơn từ thông dụng được SaigonLex chuẩn hóa theo quy định
              pháp luật hiện hành, hỗ trợ cá nhân và doanh nghiệp sử dụng thuận tiện.
            </p>
          </div>

          <div className="mt-5 md:mt-0">
            <Link
              href="/mau-3/bieu-mau"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group"
            >
              <span>Xem toàn bộ biểu mẫu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--color-accent)]" />
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
              className="bg-[var(--surface)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-[var(--color-primary)] bg-[var(--bg-section-alt)] px-2 py-0.5 rounded">
                      {form.fileType}
                    </span>
                    <span className="text-[11px] text-[var(--color-text-muted)]">
                      {form.fileSize}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-bold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                  {form.category}
                </div>

                <h3 className="font-heading text-base font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-2 leading-snug">
                  {form.title}
                </h3>

                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4 line-clamp-2">
                  {form.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)]/50 flex items-center justify-between">
                <span className="text-[11px] text-[var(--color-text-muted)]">
                  Cập nhật: {form.updatedDate}
                </span>

                <button
                  type="button"
                  onClick={() => handleDownload(form.title)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-xs font-semibold transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải mẫu</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-10 p-4 rounded-xl bg-[var(--surface)] border border-[var(--color-border)] flex items-start sm:items-center gap-3 text-xs text-[var(--color-text-muted)]">
          <AlertTriangle className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-[var(--color-primary)]">Lưu ý pháp lý:</strong> Các biểu mẫu được cung cấp
            nhằm mục đích tham khảo khung nội dung cơ bản. Đối với các giao dịch có giá trị lớn hoặc
            tình tiết phức tạp, quý vị nên tham vấn ý kiến luật sư để phòng ngừa rủi ro tranh chấp.
          </p>
        </div>
      </div>
    </section>
  );
}
