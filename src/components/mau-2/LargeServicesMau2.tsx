"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRACTICE_AREAS } from "@/data/services";

export function LargeServicesMau2() {
  const featured = PRACTICE_AREAS.slice(0, 4);

  return (
    <section className="py-24 bg-[#0D1522] text-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.25em] block">
              TRỌNG TÂM CHIẾN LƯỢC
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5]">
              Năng lực Cố vấn Trọng điểm
            </h2>
            <p className="text-slate-400 font-sans text-sm font-light">
              Những lĩnh vực phức tạp nhất, đòi hỏi sự phối hợp đa ngành giữa luật pháp, tài chính doanh nghiệp và nghệ thuật điều đình.
            </p>
          </div>

          <div>
            <Link
              href="/mau-2/linh-vuc"
              className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.2em] text-[#D4AF37] hover:text-[#FAF8F5] transition"
            >
              <span>Xem toàn bộ 8 lĩnh vực</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Large Cards Grid (2x2 Asymmetric) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((svc, idx) => (
            <div
              key={svc.slug}
              className="group relative rounded overflow-hidden border border-amber-500/20 bg-[#101826] flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:border-[#D4AF37] hover:shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={svc.image}
                  alt={`Minh họa ${svc.shortTitle} – SAIGONLEX Premium`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-50"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101826] via-[#101826]/80 to-transparent" />
              </div>

              {/* Card Top Pill */}
              <div className="p-8 relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase bg-black/40 px-3 py-1 rounded border border-[#D4AF37]/30">
                  SECTOR 0{idx + 1}
                </span>
                <span className="text-[11px] text-slate-400 font-serif uppercase tracking-widest">
                  {svc.category}
                </span>
              </div>

              {/* Card Bottom Body */}
              <div className="p-8 relative z-10 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#FAF8F5] group-hover:text-[#F3E5AB] transition">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-3 font-light">
                  {svc.overview}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex gap-2">
                    {svc.highlights.slice(0, 2).map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] text-slate-400 border border-white/10 px-2 py-0.5 rounded bg-black/30"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/mau-2/linh-vuc/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-wider text-[#D4AF37] group-hover:text-white transition"
                  >
                    <span>Khảo sát</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
