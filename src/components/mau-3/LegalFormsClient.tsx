"use client";

import React, { useState } from "react";
import { LEGAL_FORMS_MAU3 } from "@/data/mau3Data";
import {
  FileText,
  Download,
  Search,
  CheckCircle2,
  AlertTriangle,
  FolderOpen
} from "lucide-react";

export function LegalFormsClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("Tất cả");
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categories = ["Tất cả", "Doanh nghiệp", "Đất đai", "Dân sự", "Lao động", "Tố tụng"];

  const filteredForms = LEGAL_FORMS_MAU3.filter((form) => {
    const matchesCat = selectedCat === "Tất cả" || form.category.includes(selectedCat as any);
    const matchesSearch =
      form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDownload = (title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <>
      {/* Filters & Search */}
      <section className="py-8 bg-[#F8F9FA] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCat === cat
                      ? "bg-[#17365D] text-white shadow"
                      : "bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#F3F4F6]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm biểu mẫu..."
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-[#E5E7EB] text-xs focus:outline-none focus:ring-2 focus:ring-[#17365D] bg-white font-body"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Forms List */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {downloadSuccess && (
            <div className="mb-6 p-4 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
              <span>
                Đang khởi tạo tải xuống: <strong>{downloadSuccess}</strong>. Chúc quý vị sử dụng tài liệu hiệu quả!
              </span>
            </div>
          )}

          {filteredForms.length === 0 ? (
            <div className="text-center py-16 bg-[#F8F9FA] rounded-2xl border border-[#E5E7EB]">
              <FolderOpen className="w-12 h-12 text-[#9CA3AF] mx-auto mb-3" />
              <h3 className="font-heading text-lg font-bold text-[#17365D]">Không tìm thấy biểu mẫu phù hợp</h3>
              <p className="text-xs text-[#6B7280] mt-1">Vui lòng thử tìm với từ khóa khác hoặc liên hệ luật sư.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredForms.map((form) => (
                <div
                  key={form.id}
                  className="bg-white rounded-xl p-6 border border-[#E5E7EB] hover:border-[#AD8B55] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
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
                        <span className="text-[11px] text-[#6B7280]">{form.fileSize}</span>
                      </div>
                    </div>

                    <div className="text-[11px] font-bold text-[#AD8B55] uppercase tracking-wider mb-1">
                      {form.category}
                    </div>

                    <h3 className="font-heading text-base font-bold text-[#17365D] group-hover:text-[#AD8B55] transition-colors mb-2 leading-snug">
                      {form.title}
                    </h3>

                    <p className="text-xs text-[#5F6368] leading-relaxed mb-4">{form.description}</p>
                  </div>

                  <div className="pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
                    <span className="text-[11px] text-[#9CA3AF]">Cập nhật: {form.updatedDate}</span>
                    <button
                      type="button"
                      onClick={() => handleDownload(form.title)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#17365D] hover:bg-[#0E2945] text-white text-xs font-semibold transition-colors shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Tải mẫu</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Advisory disclaimer */}
          <div className="mt-12 p-5 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] flex items-start sm:items-center gap-3 text-xs text-[#5F6368]">
            <AlertTriangle className="w-5 h-5 text-[#F59E0B] shrink-0" />
            <p>
              <strong>Khuyến cáo pháp lý:</strong> Các biểu mẫu được cung cấp nhằm mục đích tham khảo.
              Mỗi giao dịch hoặc quan hệ pháp lý đều có các điều kiện đặc thù riêng biệt. Quý khách nên
              liên hệ luật sư để rà soát hoặc soạn thảo riêng biệt nhằm hạn chế tối đa rủi ro tranh chấp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
