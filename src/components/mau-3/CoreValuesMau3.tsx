"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Zap, ShieldCheck, Scale } from "lucide-react";
import { CORE_VALUES_MAU3 } from "@/data/mau3Data";

const iconMap: Record<string, any> = {
  Heart: Heart,
  Zap: Zap,
  ShieldCheck: ShieldCheck
};

export function CoreValuesMau3() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-section-alt)] border-b border-[var(--color-border)] relative transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>TRIẾT LÝ HÀNH NGHỀ</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-4">
            3 Giá Trị Cốt Lõi Định Hình SaigonLex
          </h2>
          <p className="text-[var(--color-text-secondary)] text-sm sm:text-base font-body leading-relaxed">
            Nguyên tắc nền tảng được toàn thể luật sư và chuyên viên SaigonLex tuân thủ trong mọi
            vụ việc và quan hệ với thân chủ.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_VALUES_MAU3.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Scale;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[var(--surface)] rounded-xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md hover:border-[var(--color-accent)]/50 transition-all duration-300 flex flex-col relative group"
              >
                {/* Accent Top Bar on Hover */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-[var(--color-primary)] group-hover:bg-[var(--color-accent)] transition-colors rounded-t" />

                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-5 pt-2">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 group-hover:bg-[var(--color-accent)]/15 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[var(--color-accent)] uppercase tracking-wider block">
                      GIÁ TRỊ {item.number} • {item.enTitle}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[var(--color-primary)]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Subtitle / Promise */}
                <p className="text-xs font-semibold text-[var(--color-primary)] mb-3">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-body">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
