"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRACTICE_AREAS } from "@/data/services";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Motion";

export function LargeServicesMau2() {
  const featured = PRACTICE_AREAS.slice(0, 4);

  return (
    <section className="py-24 bg-[#FDFBF7] text-[#111827] relative border-b border-[#EFE9D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E8E1CE] pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[#997836] text-xs uppercase tracking-wider font-semibold block">
                TRỌNG TÂM CHIẾN LƯỢC
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
                Năng lực Cố vấn Tuyển chọn
              </h2>
              <p className="text-[#202124] text-sm sm:text-base leading-[1.7]">
                Những lĩnh vực phức tạp nhất, đòi hỏi sự phối hợp đa ngành giữa luật pháp, tài chính doanh nghiệp và nghệ thuật điều đình.
              </p>
            </div>

            <div>
              <Link
                href="/mau-2/linh-vuc"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#17365D] hover:text-[#0f2746] transition font-semibold"
              >
                <span>Xem toàn bộ 8 lĩnh vực</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Large Cards Grid (Bright Luxury with Editorial Photography) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {featured.map((svc, idx) => (
            <StaggerItem key={svc.slug}>
              <div
                className="group relative rounded-sm overflow-hidden border border-[#E5DEC9] bg-white flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:border-[#C5A059] hover:-translate-y-1.5 editorial-card-hover h-full"
              >
                {/* Background Image with Bright Contrast Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={`Minh họa ${svc.shortTitle} – SAIGONLEX Editorial`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-20 group-hover:opacity-30"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                </div>

                {/* Card Top Pill */}
                <div className="p-8 relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#111827] tracking-wider uppercase bg-[#FAF7F0] px-3 py-1 rounded-sm border border-[#E0D7BE] font-bold">
                    SECTOR 0{idx + 1}
                  </span>
                  <span className="text-[11px] text-[#8C7A58] uppercase tracking-wider font-semibold">
                    {svc.category}
                  </span>
                </div>

                {/* Card Bottom Body */}
                <div className="p-8 relative z-10 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827] group-hover:text-[#17365D] transition">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed line-clamp-3 font-normal">
                    {svc.overview}
                  </p>

                  <div className="pt-4 border-t border-[#EFE9D9] flex items-center justify-between">
                    <div className="flex gap-2">
                      {svc.highlights.slice(0, 2).map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-[#4B5563] border border-[#E5DEC9] px-2 py-0.5 rounded-sm bg-[#FAF7F0]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/mau-2/linh-vuc/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#17365D] group-hover:text-[#0f2746] transition font-semibold"
                    >
                      <span>Khảo sát</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
