"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  FileCheck,
  FileSignature,
  Globe2,
  Building2,
  HeartHandshake,
  ShieldAlert,
  Scale,
  ArrowRight
} from "lucide-react";
import { PRACTICE_AREAS } from "@/data/services";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Motion";

const ICON_MAP: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
  FileSignature: <FileSignature className="w-5 h-5" />,
  Globe2: <Globe2 className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  Scale: <Scale className="w-5 h-5" />
};

export function ServicesGridMau1() {
  return (
    <section className="py-20 bg-[var(--bg-section-alt)] border-y border-[var(--color-border)]" id="linh-vuc">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-[var(--color-accent)]" />
            <span>NĂNG LỰC HÀNH NGHỀ CHUYÊN MÔN</span>
            <span className="w-6 h-0.5 bg-[var(--color-accent)]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            8 Lĩnh vực Pháp luật Chuyên sâu
          </h2>
          <p className="text-[#202124] text-[15px] sm:text-[16px] leading-[1.7]">
            Chúng tôi tập trung nguồn lực chuyên môn cao nhất vào các lĩnh vực pháp luật then chốt phục vụ doanh nghiệp, nhà đầu tư và cá nhân.
          </p>
        </FadeIn>

        {/* 8 Services Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRACTICE_AREAS.map((svc) => (
            <StaggerItem key={svc.slug}>
              <div className="bg-[var(--surface)] rounded-xl overflow-hidden border border-[var(--color-border)] corporate-card-shadow hover:corporate-card-shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group h-full">
                {/* Card Image */}
                <div className="relative h-44 w-full bg-slate-800 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={`Dịch vụ ${svc.shortTitle} tại hãng luật SAIGONLEX`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-[var(--color-primary)] text-[var(--color-accent)] flex items-center justify-center shadow border border-white/10">
                    {ICON_MAP[svc.iconName] || <Briefcase className="w-5 h-5" />}
                  </div>

                  <div className="absolute top-3 right-3 bg-[var(--surface)]/90 backdrop-blur-sm text-[var(--color-primary)] text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                    {svc.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-[#111827] group-hover:text-[var(--color-primary)] transition leading-snug line-clamp-2">
                      {svc.shortTitle}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#4B5563] mt-2 leading-relaxed line-clamp-3">
                      {svc.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between">
                    <Link
                      href={`/mau-1/linh-vuc/${svc.slug}`}
                      className="text-xs font-semibold text-[var(--color-primary)] group-hover:underline flex items-center gap-1 transition"
                    >
                      <span>Xem chi tiết dịch vụ</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Notice */}
        <FadeIn delay={0.2} className="mt-12 text-center">
          <p className="text-xs text-slate-500 mb-4">
            Cần tư vấn một vụ việc mang tính chất liên ngành hoặc tình huống đặc thù?
          </p>
          <Link
            href="/mau-1/lien-he"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-lg shadow hover:shadow-md transition"
          >
            <span>Liên hệ trao đổi bảo mật với Luật sư chủ nhiệm</span>
            <ArrowRight className="w-4 h-4 text-[var(--color-accent)]" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
