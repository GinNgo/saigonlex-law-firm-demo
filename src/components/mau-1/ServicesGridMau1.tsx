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
    <section className="py-20 bg-slate-50 border-y border-slate-200" id="linh-vuc">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A880] uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-[#C5A880]" />
            <span>NĂNG LỰC HÀNH NGHỀ CHUYÊN MÔN</span>
            <span className="w-6 h-0.5 bg-[#C5A880]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            8 Lĩnh vực Pháp luật Chuyên sâu
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Chúng tôi tập trung nguồn lực chuyên môn cao nhất vào các lĩnh vực pháp luật then chốt phục vụ doanh nghiệp, nhà đầu tư và cá nhân.
          </p>
        </FadeIn>

        {/* 8 Services Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRACTICE_AREAS.map((svc) => (
            <StaggerItem key={svc.slug}>
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200 corporate-card-shadow hover:corporate-card-shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group h-full">
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
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-[#0A2540] text-[#C5A880] flex items-center justify-center shadow border border-blue-900/50">
                    {ICON_MAP[svc.iconName] || <Briefcase className="w-5 h-5" />}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0A2540] text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                    {svc.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-[#0A2540] group-hover:text-blue-700 transition leading-snug line-clamp-2">
                      {svc.shortTitle}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-3">
                      {svc.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/mau-1/linh-vuc/${svc.slug}`}
                      className="text-xs font-bold text-[#0A2540] group-hover:text-blue-800 flex items-center gap-1 transition"
                    >
                      <span>Xem chi tiết dịch vụ</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
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
            className="inline-flex items-center gap-2 bg-[#0A2540] hover:bg-[#0f3d68] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-lg shadow hover:shadow-md transition"
          >
            <span>Liên hệ trao đổi bảo mật với Luật sư chủ nhiệm</span>
            <ArrowRight className="w-4 h-4 text-[#C5A880]" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
