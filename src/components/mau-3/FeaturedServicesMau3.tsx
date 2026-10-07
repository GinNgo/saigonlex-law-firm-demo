"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  ShieldAlert,
  Building,
  Globe2,
  GitMerge,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Home
} from "lucide-react";
import { FEATURED_SERVICES_MAU3 } from "@/data/mau3Data";

const serviceIcons: Record<string, any> = {
  Briefcase,
  FileText,
  ShieldAlert,
  Building,
  Globe2,
  GitMerge,
  Home
};

export function FeaturedServicesMau3() {
  return (
    <section id="dich-vu" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-section-alt)] border-b border-[var(--color-border)] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DỊCH VỤ PHÁP LÝ NỔI BẬT</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-4">
            Giải Pháp Đóng Gói Thực Tiễn Cho Khách Hàng
          </h2>
          <p className="text-[var(--color-text-secondary)] text-sm sm:text-base font-body leading-relaxed">
            Các gói dịch vụ pháp lý được chuẩn hóa theo quy trình chuyên nghiệp, cam kết rõ ràng về
            sản phẩm bàn giao, tiến độ và chi phí minh bạch.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_SERVICES_MAU3.map((svc, idx) => {
            const Icon = serviceIcons[svc.iconName] || Briefcase;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-[var(--surface)] rounded-xl p-7 border border-[var(--color-border)] hover:border-[var(--color-accent)] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Subtitle & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[11px] font-semibold">
                      {svc.subtitle}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent)] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] mb-3 leading-snug">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-body mb-5">
                    {svc.description}
                  </p>

                  {/* Deliverables / Output */}
                  <div className="bg-[var(--bg-section-alt)] rounded-lg p-3.5 mb-6 border border-[var(--color-border)]">
                    <div className="text-[11px] font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                      Sản phẩm bàn giao:
                    </div>
                    <ul className="space-y-1.5">
                      {svc.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                  <a
                    href="#dat-lich-tu-van"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <span>Yêu cầu báo phí</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href={svc.href}
                    className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] underline"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
