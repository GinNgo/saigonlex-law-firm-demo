import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau3 } from "@/components/mau-3/HeaderMau3";
import { FooterMau3 } from "@/components/mau-3/FooterMau3";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";
import { PRACTICE_AREAS_MAU3 } from "@/data/mau3Data";
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
  CheckCircle2,
  HelpCircle,
  HeartHandshake,
  FileSignature,
  Users,
  Compass
} from "lucide-react";

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

export const metadata: Metadata = {
  title: "Lĩnh Vực Hành Nghề | CÔNG TY LUẬT SAIGONLEX",
  description:
    "Danh mục 8 lĩnh vực pháp lý trọng tâm của SaigonLex: Doanh nghiệp, Đầu tư nước ngoài, Hợp đồng, Bất động sản, Tranh tụng, Hôn nhân, Lao động và Sở hữu trí tuệ."
};

export default function PracticeAreasMau3Page() {
  return (
    <TemplatePageWrapper
      templateId="mau-c"
      className="min-h-screen flex flex-col bg-white text-[#202124] font-body"
    >
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3" },
            { name: "Lĩnh vực hành nghề", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/linh-vuc" }
          ]
        }}
      />
      <HeaderMau3 />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--bg-dark)] to-[var(--color-primary)] text-white py-14 lg:py-16 border-b border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu C", href: "/mau-3" },
                { label: "Lĩnh vực hành nghề" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl mt-4 space-y-3">
              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest block">
                NĂNG LỰC CHUYÊN MÔN SAIGONLEX
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Lĩnh Vực Hoạt Động Pháp Lý Trọng Tâm
              </h1>
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed font-body">
                Chúng tôi cung cấp giải pháp pháp lý toàn diện, kết hợp chặt chẽ giữa lý luận pháp
                luật và thực tiễn xét xử, thủ tục hành chính tại Việt Nam.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas List */}
        <section className="py-16 sm:py-20 bg-[var(--bg-section)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {PRACTICE_AREAS_MAU3.map((area, idx) => {
              const Icon = iconMap[area.iconName] || Scale;
              return (
                <div
                  key={area.id}
                  id={area.slug}
                  className="bg-[var(--bg-section-alt)] rounded-2xl p-7 sm:p-9 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 scroll-mt-24 shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Info & Summary (7 cols) */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold text-[var(--color-accent)]">
                            LĨNH VỰC {area.number}
                          </span>
                          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-primary)]">
                            {area.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-[var(--color-text)] leading-relaxed mb-6 font-body">
                        {area.overview}
                      </p>

                      <div className="space-y-3 mb-6">
                        <h4 className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                          Vấn đề pháp lý chúng tôi giải quyết cho thân chủ:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {area.commonIssues.map((issue, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-[var(--color-text)]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                              <span>{issue.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/mau-3/linh-vuc/${area.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[var(--color-primary)] text-white text-xs font-bold hover:bg-[var(--color-primary-dark)] transition-colors shadow-sm group"
                      >
                        <span>Xem chi tiết & quy trình xử lý</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Right: Process Steps & Common FAQ (5 cols) */}
                    <div className="lg:col-span-5 bg-[var(--surface)] p-6 rounded-xl border border-[var(--color-border)] space-y-5">
                      <div>
                        <h4 className="font-heading text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                          Quy trình triển khai dịch vụ:
                        </h4>
                        <div className="space-y-2">
                          {area.processSteps.map((step, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2.5 text-xs text-[var(--color-text)]">
                              <span className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-mono font-bold flex items-center justify-center text-[10px] shrink-0">
                                {step.step}
                              </span>
                              <span>{step.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[var(--color-border)]/50">
                        <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] mb-2">
                          <HelpCircle className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          <span>Câu hỏi tiêu biểu:</span>
                        </div>
                        <p className="text-xs font-medium text-[var(--color-primary)] mb-1">
                          {area.faqs[0]?.question}
                        </p>
                        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
                          {area.faqs[0]?.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <FooterMau3 />
    </TemplatePageWrapper>
  );
}
