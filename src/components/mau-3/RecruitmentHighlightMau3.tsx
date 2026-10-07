"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users2, MapPin, Clock, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { JOB_OPENINGS_MAU3 } from "@/data/mau3Data";

export function RecruitmentHighlightMau3() {
  return (
    <section id="tuyen-dung" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-section)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Employer Value Proposition (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-3">
              <Users2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>GIA NHẬP ĐỘI NGŨ SAIGONLEX</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-4">
              Cơ Hội Nghề Nghiệp & Phát Triển Bền Vững
            </h2>

            <p className="text-sm sm:text-base text-[var(--color-text-muted)] font-body leading-relaxed mb-6">
              SaigonLex luôn chào đón các luật sư, chuyên viên pháp lý tài năng và những bạn trẻ
              nhiệt huyết có mong muốn cống hiến trong môi trường hành nghề chuẩn mực, chuyên nghiệp.
            </p>

            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[var(--color-text)]">
                  Được hướng dẫn trực tiếp bởi các Luật sư thành viên giàu kinh nghiệm thực chiến.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[var(--color-text)]">
                  Tiếp cận đa dạng vụ việc thực tế: từ tư vấn doanh nghiệp FDI đến tranh tụng tòa án.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[var(--color-text)]">
                  Môi trường làm việc tôn trọng cá nhân, minh bạch đãi ngộ và lộ trình thăng tiến rõ ràng.
                </span>
              </div>
            </div>

            <Link
              href="/mau-3/tuyen-dung"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition-colors shadow text-sm group"
            >
              <span>Xem chi tiết tuyển dụng & Nộp hồ sơ</span>
              <ArrowRight className="w-4 h-4 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: 3 Open Positions Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {JOB_OPENINGS_MAU3.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-[var(--bg-section-alt)] rounded-xl p-5 sm:p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[11px] font-bold rounded">
                      {job.department}
                    </span>
                    <span className="px-2 py-0.5 bg-[var(--surface)] text-[var(--color-text-muted)] text-[11px] font-medium rounded border border-[var(--color-border)]">
                      {job.employmentType}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                    {job.position}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-text-muted)]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      Hạn nộp: {job.deadline}
                    </span>
                  </div>
                </div>

                <div className="sm:self-center shrink-0">
                  <Link
                    href="/mau-3/tuyen-dung"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[var(--surface)] text-xs font-bold text-[var(--color-primary)] border border-[var(--color-border)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors"
                  >
                    <span>Ứng tuyển</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
