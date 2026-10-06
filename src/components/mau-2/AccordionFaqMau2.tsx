"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GENERAL_FAQS } from "@/data/faq";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Motion";

export function AccordionFaqMau2() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#FAF7F0] text-[#111827] relative border-b border-[#EFE9D9]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16 space-y-3">
            <span className="text-[#997836] font-serif text-xs uppercase tracking-[0.25em]">
              GIẢI ĐÁP QUY CHUẨN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C1829]">
              Những Câu hỏi Thường Gặp
            </h2>
            <p className="text-slate-600 font-sans text-sm font-light leading-relaxed">
              Quy trình tiếp nhận vụ việc cơ mật, chính sách tính thù lao luật sư và cam kết bảo vệ quyền lợi thân chủ.
            </p>
          </div>
        </FadeIn>

        {/* Accordions (Bright Ivory Cards) */}
        <StaggerContainer className="space-y-4" staggerDelay={0.08}>
          {GENERAL_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <StaggerItem key={faq.id}>
                <div
                  className="rounded-sm border border-[#E5DEC9] bg-white overflow-hidden transition-all duration-300 editorial-card-shadow"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#0C1829] hover:text-[#997836] transition cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#997836] font-bold">0{idx + 1}.</span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
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
                        <div className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm font-sans font-light leading-relaxed border-t border-[#F0EAD8] bg-[#FAF7F0]">
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
