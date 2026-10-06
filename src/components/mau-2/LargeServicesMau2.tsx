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
    <section className="py-24 bg-[var(--bg-section-alt)] text-[var(--color-heading)] relative border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[var(--color-border)] pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider font-semibold block">
                TRỌNG TÂM CHIẾN LƯỢC
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)]">
                Năng lực Cố vấn Tuyển chọn
              </h2>
              <p className="text-[var(--color-text)] text-sm sm:text-base leading-[1.7]">
                Những lĩnh vực phức tạp nhất, đòi hỏi sự phối hợp đa ngành giữa luật pháp, tài chính doanh nghiệp và nghệ thuật điều đình.
              </p>
            </div>

            <div>
              <Link
                href="/mau-2/linh-vuc"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition font-semibold"
              >
                <span>Xem toàn bộ 8 lĩnh vực</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--color-accent)]" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Large Cards Grid (Bright Luxury with Editorial Photography) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {featured.map((svc, idx) => (
            <StaggerItem key={svc.slug}>
              <div
                className="group relative rounded-sm overflow-hidden border border-[var(--color-border)] bg-[var(--surface)] flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:border-[var(--color-accent)] hover:-translate-y-1.5 editorial-card-hover h-full"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/85 to-transparent" />
                </div>

                {/* Card Top Pill */}
                <div className="p-8 relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--color-heading)] tracking-wider uppercase bg-[var(--bg-section-alt)] px-3 py-1 rounded-sm border border-[var(--color-border)] font-bold">
                    SECTOR 0{idx + 1}
                  </span>
                  <span className="text-[11px] text-[var(--color-accent)] uppercase tracking-wider font-semibold">
                    {svc.category}
                  </span>
                </div>

                {/* Card Bottom Body */}
                <div className="p-8 relative z-10 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-heading)] group-hover:text-[var(--color-primary)] transition">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 font-normal">
                    {svc.overview}
                  </p>

                  <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                    <div className="flex gap-2">
                      {svc.highlights.slice(0, 2).map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-[var(--color-text-secondary)] border border-[var(--color-border)] px-2 py-0.5 rounded-sm bg-[var(--bg-section-alt)]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/mau-2/linh-vuc/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[var(--color-primary)] group-hover:text-[var(--color-primary-dark)] transition font-semibold"
                    >
                      <span>Khảo sát</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent)]" />
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
