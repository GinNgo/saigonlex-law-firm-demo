"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, PhoneCall } from "lucide-react";
import { FAQ_MAU3 } from "@/data/mau3Data";

export function FaqAccordionMau3() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & Help Box (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17365D]/5 text-[#17365D] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#AD8B55]" />
              <span>GIẢI ĐÁP THẮC MẮC</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight mb-4">
              Câu Hỏi Thường Gặp Khi Làm Việc Cùng SaigonLex
            </h2>

            <p className="text-sm sm:text-base text-[#5F6368] font-body leading-relaxed mb-8">
              Những thông tin cơ bản về phương thức tính phí, quy trình bảo mật và cách thức phối hợp
              giữa khách hàng và luật sư.
            </p>

            <div className="bg-[#F8F9FA] rounded-xl p-6 border border-[#E5E7EB]">
              <h3 className="font-heading text-base font-bold text-[#17365D] mb-2">
                Chưa tìm thấy câu trả lời?
              </h3>
              <p className="text-xs text-[#5F6368] leading-relaxed mb-5">
                Luật sư chúng tôi luôn sẵn sàng lắng nghe và giải đáp trực tiếp vụ việc của bạn.
              </p>
              <a
                href="tel:0908033115"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded bg-[#17365D] text-white text-xs font-semibold hover:bg-[#0E2945] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#AD8B55]" />
                <span>Gọi Hotline: 0908 033 115</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {FAQ_MAU3.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#17365D] bg-[#F8F9FA]/70 shadow-sm"
                      : "border-[#E5E7EB] bg-white hover:border-[#CBD5E1]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading text-base font-bold text-[#17365D]"
                    aria-expanded={isOpen}
                  >
                    <span className="flex-1">{faq.question}</span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#17365D] text-white rotate-180"
                          : "bg-[#F3F4F6] text-[#6B7280]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm text-[#4B5563] leading-relaxed font-body border-t border-[#E5E7EB]/60 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
