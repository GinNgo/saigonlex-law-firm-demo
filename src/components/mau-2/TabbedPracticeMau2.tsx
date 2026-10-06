"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PRACTICE_AREAS } from "@/data/services";
import { FadeIn } from "@/components/common/Motion";

export function TabbedPracticeMau2() {
  const [selectedSlug, setSelectedSlug] = useState<string>(PRACTICE_AREAS[0].slug);
  const currentService = PRACTICE_AREAS.find((s) => s.slug === selectedSlug) || PRACTICE_AREAS[0];

  return (
    <section className="py-24 bg-[var(--bg-section)] text-[var(--color-heading)] relative border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider font-semibold">
              DANH MỤC THẨM QUYỀN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)]">
              Lĩnh vực Cố vấn Chuyên sâu
            </h2>
            <p className="text-[var(--color-text)] text-sm sm:text-base leading-[1.7]">
              Chọn từng lĩnh vực để xem phạm vi tư vấn, rủi ro cần kiểm soát và phương pháp tiếp cận của SAIGONLEX.
            </p>
          </div>
        </FadeIn>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PRACTICE_AREAS.map((svc) => {
            const isSelected = svc.slug === selectedSlug;
            return (
              <button
                key={svc.slug}
                type="button"
                onClick={() => setSelectedSlug(svc.slug)}
                className={`px-4 py-2.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? "bg-[var(--color-primary)] text-white font-semibold border-[var(--color-primary)] shadow-md -translate-y-0.5"
                    : "bg-[var(--surface)] text-[var(--color-text)] border-[var(--color-border)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] font-medium"
                }`}
              >
                {svc.shortTitle}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display (Bright Luxury Card) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSlug}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-sm border border-[var(--color-border)] bg-[var(--surface)] overflow-hidden p-6 sm:p-10 editorial-card-shadow"
          >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-sm aspect-[4/3] overflow-hidden border border-[var(--color-border)] shadow-md bg-[var(--bg-dark)]">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 bg-[var(--surface)]/95 backdrop-blur-md px-3 py-1 rounded-sm border border-[var(--color-border)] text-[11px] text-[var(--color-heading)] font-bold">
                  {currentService.category}
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-mono text-[var(--color-accent)] uppercase tracking-wider block mb-1 font-bold">
                  ĐẶC TẢ PHẠM VI DỊCH VỤ
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-heading)] leading-snug">
                  {currentService.title}
                </h3>
              </div>

              <p className="text-[var(--color-text)] text-sm leading-[1.7] font-normal">
                {currentService.overview}
              </p>

              {/* Service Scope Bullets */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] font-bold">
                  Phạm vi thực hiện tiêu biểu:
                </div>
                {currentService.serviceScope.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text)] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/mau-2/linh-vuc/${currentService.slug}`}
                  className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition"
                >
                  <span>Xem chuyên trang chi tiết</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-accent)]" />
                </Link>

                <Link
                  href="/mau-2/lien-he"
                  className="text-xs uppercase tracking-wider text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition font-semibold"
                >
                  Yêu cầu phân tích hồ sơ riêng →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </section>
  );
}
