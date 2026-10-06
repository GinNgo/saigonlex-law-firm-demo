"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GENERAL_FAQS } from "@/data/faq";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Motion";

export function FaqMau1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A880] uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-[#C5A880]" />
              <span>GIẢI ĐÁP THẮC MẮC PHỔ BIẾN</span>
              <span className="w-6 h-0.5 bg-[#C5A880]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Câu hỏi Thường gặp (FAQ)
            </h2>
            <p className="text-[#202124] text-sm sm:text-base leading-[1.7]">
              Các câu hỏi mà doanh nghiệp và thân chủ thường quan tâm nhất trước khi ký kết hợp đồng dịch vụ pháp lý tại SAIGONLEX.
            </p>
          </div>
        </FadeIn>

        {/* Accordion list */}
        <StaggerContainer className="space-y-4" staggerDelay={0.08}>
          {GENERAL_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <StaggerItem key={faq.id}>
                <div
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden corporate-card-shadow transition duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-base sm:text-[17px] text-[#111827] hover:text-[#17365D] transition"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#C5A880] shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6B7280] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#17365D]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 pt-1 text-[#202124] text-sm sm:text-[15px] leading-[1.72] border-t border-slate-100 bg-slate-50/50">
                          <p className="mt-2">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
