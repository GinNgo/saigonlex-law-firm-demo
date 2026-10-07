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
    <section id="dich-vu" className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#AD8B55]/10 text-[#AD8B55] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DỊCH VỤ PHÁP LÝ NỔI BẬT</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight mb-4">
            Giải Pháp Đóng Gói Thực Tiễn Cho Khách Hàng
          </h2>
          <p className="text-[#5F6368] text-sm sm:text-base font-body leading-relaxed">
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
                className="bg-white rounded-xl p-7 border border-[#E5E7EB] hover:border-[#AD8B55] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Subtitle & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-[#17365D]/5 text-[#17365D] text-[11px] font-semibold">
                      {svc.subtitle}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#AD8B55]/10 text-[#AD8B55] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-[#17365D] mb-3 leading-snug">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed font-body mb-5">
                    {svc.description}
                  </p>

                  {/* Deliverables / Output */}
                  <div className="bg-[#F8F9FA] rounded-lg p-3.5 mb-6 border border-[#E5E7EB]/70">
                    <div className="text-[11px] font-bold text-[#17365D] uppercase tracking-wider mb-2">
                      Sản phẩm bàn giao:
                    </div>
                    <ul className="space-y-1.5">
                      {svc.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#4B5563]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <a
                    href="#dat-lich-tu-van"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17365D] hover:text-[#AD8B55] transition-colors"
                  >
                    <span>Yêu cầu báo phí</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href={svc.href}
                    className="text-xs text-[#6B7280] hover:text-[#17365D] underline"
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
