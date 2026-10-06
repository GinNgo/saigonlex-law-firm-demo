"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { PRACTICE_AREAS, PracticeArea } from "@/data/services";

export function TabbedPracticeMau2() {
  const [selectedSlug, setSelectedSlug] = useState<string>(PRACTICE_AREAS[0].slug);
  const currentService = PRACTICE_AREAS.find((s) => s.slug === selectedSlug) || PRACTICE_AREAS[0];

  return (
    <section className="py-24 bg-[#090E17] text-[#FAF8F5] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.25em]">
            DANH MỤC THẨM QUYỀN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5]">
            Lĩnh vực Cố vấn Chuyên sâu
          </h2>
          <p className="text-slate-400 font-sans text-sm font-light leading-relaxed">
            Chọn từng lĩnh vực để xem phạm vi tư vấn, rủi ro cần kiểm soát và phương pháp tiếp cận của SAIGONLEX.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PRACTICE_AREAS.map((svc) => {
            const isSelected = svc.slug === selectedSlug;
            return (
              <button
                key={svc.slug}
                type="button"
                onClick={() => setSelectedSlug(svc.slug)}
                className={`px-4 py-2.5 rounded-sm text-xs font-serif uppercase tracking-wider transition-all duration-200 border ${
                  isSelected
                    ? "bg-[#D4AF37] text-slate-950 font-bold border-[#D4AF37] shadow-lg shadow-amber-500/10"
                    : "bg-[#101826] text-slate-400 border-white/10 hover:text-white hover:border-amber-500/40"
                }`}
              >
                {svc.shortTitle}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="rounded-lg border border-amber-500/20 bg-[#0F1726] overflow-hidden p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded aspect-[4/3] overflow-hidden border border-white/10 shadow-xl">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1726]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-[11px] font-serif text-[#D4AF37]">
                  {currentService.category}
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest block mb-1">
                  ĐẶC TẢ PHẠM VI DỊCH VỤ
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5] leading-snug">
                  {currentService.title}
                </h3>
              </div>

              <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed font-light">
                {currentService.overview}
              </p>

              {/* Service Scope Bullets */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-serif uppercase tracking-wider text-[#D4AF37]">
                  Phạm vi thực hiện tiêu biểu:
                </div>
                {currentService.serviceScope.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/mau-2/linh-vuc/${currentService.slug}`}
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b59227] text-slate-950 font-serif font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition"
                >
                  <span>Xem chuyên trang chi tiết</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/mau-2/lien-he"
                  className="text-xs font-serif uppercase tracking-wider text-slate-400 hover:text-[#D4AF37] transition"
                >
                  Yêu cầu phân tích hồ sơ riêng →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
