"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  FileCheck2,
  Home,
  Scale,
  Users2,
  Briefcase,
  Lightbulb,
  Receipt,
  ArrowRight,
  Shield,
  HeartHandshake,
  FileSignature,
  Users,
  Compass
} from "lucide-react";
import { PRACTICE_AREAS_MAU3 } from "@/data/mau3Data";

const iconMap: Record<string, any> = {
  Building2,
  Home,
  Scale,
  HeartHandshake,
  FileSignature,
  Users,
  Briefcase,
  Compass
};

export function PracticeAreasGridMau3() {
  return (
    <section id="linh-vuc" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17365D]/5 text-[#17365D] text-xs font-bold uppercase tracking-wider mb-3">
              <Scale className="w-3.5 h-3.5 text-[#AD8B55]" />
              <span>LĨNH VỰC HOẠT ĐỘNG CHUYÊN SÂU</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight mb-4">
              8 Lĩnh Vực Pháp Lý Trọng Tâm Của SaigonLex
            </h2>
            <p className="text-[#5F6368] text-sm sm:text-base font-body leading-relaxed">
              Chúng tôi cung cấp dịch vụ tư vấn pháp lý toàn diện từ doanh nghiệp, đầu tư đến bảo vệ
              quyền lợi cá nhân trong các quan hệ dân sự và tố tụng.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/mau-3/linh-vuc"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#17365D] hover:text-[#AD8B55] transition-colors group"
            >
              <span>Xem tất cả lĩnh vực</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#AD8B55]" />
            </Link>
          </div>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRACTICE_AREAS_MAU3.map((area, idx) => {
            const Icon = iconMap[area.iconName] || Scale;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative bg-[#F8F9FA]/70 hover:bg-white rounded-xl p-6 border border-[#E5E7EB] hover:border-[#AD8B55] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-white group-hover:bg-[#17365D] text-[#17365D] group-hover:text-white border border-[#E5E7EB] flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-6 h-6 group-hover:text-[#AD8B55]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#9CA3AF] group-hover:text-[#AD8B55] transition-colors">
                      {area.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-[#17365D] group-hover:text-[#17365D] mb-3 leading-snug">
                    <Link href={`/mau-3/linh-vuc/${area.slug}`} className="hover:underline">
                      {area.title}
                    </Link>
                  </h3>

                  {/* Short summary */}
                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed font-body mb-4">
                    {area.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {area.commonIssues.slice(0, 3).map((issue, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#4B5563]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#AD8B55] shrink-0 mt-1.5" />
                        <span className="line-clamp-1">{issue.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#E5E7EB]/80">
                  <Link
                    href={`/mau-3/linh-vuc/${area.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17365D] group-hover:text-[#AD8B55] transition-colors"
                  >
                    <span>Chi tiết lĩnh vực</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
