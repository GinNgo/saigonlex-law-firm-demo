"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  SearchCheck,
  Target,
  Lock,
  Coins,
  Clock,
  Lightbulb,
  CheckCircle2,
  Award
} from "lucide-react";
import { WHY_CHOOSE_US_MAU3 } from "@/data/mau3Data";

const iconMap: Record<string, any> = {
  SearchCheck,
  Target,
  Lock,
  Coins,
  Clock,
  Lightbulb
};

export function WhyChooseUsMau3() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-section-alt)] border-b border-[var(--color-border)] relative transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Title & Credibility Statement (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>UY TÍN & TRÁCH NHIỆM</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-5 leading-tight">
              Vì Sao Khách Hàng Tin Chọn SaigonLex?
            </h2>

            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed font-body mb-6">
              Chúng tôi không đưa ra những lời hứa phi thực tế. SaigonLex xây dựng uy tín dựa trên sự
              tận tâm phục vụ, phương án thực chất và sự minh bạch trong từng cam kết pháp lý.
            </p>

            <div className="bg-[var(--surface)] rounded-xl p-6 border border-[var(--color-border)] shadow-sm">
              <div className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                Cam kết nguyên tắc
              </div>
              <div className="font-heading text-base font-bold text-[var(--color-primary)] mb-3">
                “Tận Tâm – Linh Hoạt – Đúng Pháp Luật”
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Mỗi hồ sơ của khách hàng đều được nghiên cứu kỹ lưỡng bởi Luật sư có kinh nghiệm trước
                khi đưa ra bất kỳ kết luận hay giải pháp nào.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Cards in 2x3 Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US_MAU3.map((item, idx) => {
              const Icon = iconMap[item.iconName] || Award;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-[var(--surface)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>

                    <h3 className="font-heading text-base font-bold text-[var(--color-primary)] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-body mb-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--color-border)] flex items-center gap-1.5 text-xs font-semibold text-[#10B981]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Cam kết chuẩn mực nghề nghiệp</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
