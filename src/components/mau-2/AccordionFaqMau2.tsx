"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { GENERAL_FAQS } from "@/data/faq";

export function AccordionFaqMau2() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#090E17] text-[#FAF8F5] relative border-t border-white/5" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.25em]">
            GIẢI ĐÁP QUY CHUẨN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5]">
            Những Câu hỏi Thường Gặp
          </h2>
          <p className="text-slate-400 font-sans text-sm font-light leading-relaxed">
            Quy trình tiếp nhận vụ việc cơ mật, chính sách tính thù lao luật sư và cam kết bảo vệ quyền lợi thân chủ.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {GENERAL_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id}
                className="rounded border border-amber-500/20 bg-[#101826] overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#FAF8F5] hover:text-[#D4AF37] transition"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#D4AF37]">0{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm font-sans font-light leading-relaxed border-t border-white/5 bg-black/20">
                    <p className="mt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
