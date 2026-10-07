import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau3 } from "@/components/mau-3/HeaderMau3";
import { FooterMau3 } from "@/components/mau-3/FooterMau3";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";
import { PRACTICE_AREAS_MAU3 } from "@/data/mau3Data";
import {
  Scale,
  CheckCircle2,
  Clock,
  HelpCircle,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  FileCheck
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRACTICE_AREAS_MAU3.map((area) => ({
    slug: area.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = PRACTICE_AREAS_MAU3.find((p) => p.slug === slug);
  if (!area) return { title: "Không tìm thấy lĩnh vực" };

  return {
    title: `${area.title} | SaigonLex Law Firm`,
    description: area.shortDesc
  };
}

export default async function PracticeAreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = PRACTICE_AREAS_MAU3.find((p) => p.slug === slug);

  if (!area) {
    notFound();
  }

  const otherAreas = PRACTICE_AREAS_MAU3.filter((p) => p.slug !== slug);

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
            { name: "Lĩnh vực hành nghề", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/linh-vuc" },
            { name: area.title, url: `https://saigonlex-law-firm-demo.vercel.app/mau-3/linh-vuc/${area.slug}` }
          ]
        }}
      />
      <HeaderMau3 />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-gradient-to-r from-[#17365D] via-[#0E2945] to-[#17365D] text-white py-14 lg:py-16 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu C", href: "/mau-3" },
                { label: "Lĩnh vực hành nghề", href: "/mau-3/linh-vuc" },
                { label: area.title }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl mt-4 space-y-3">
              <span className="text-xs font-bold text-[#AD8B55] uppercase tracking-widest block">
                DỊCH VỤ TƯ VẤN PHÁP LÝ CHUYÊN SÂU
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {area.title}
              </h1>
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed font-body">
                {area.shortDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Main Content (8 cols) */}
              <div className="lg:col-span-8 space-y-10">
                {/* Description */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-[#17365D] mb-4">
                    Tổng Quan & Phương Thức Tiếp Cận
                  </h2>
                  <p className="text-base text-[#4B5563] leading-relaxed font-body">
                    {area.overview}
                  </p>
                </div>

                {/* Common Issues Solved */}
                <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#E5E7EB]">
                  <h3 className="font-heading text-lg font-bold text-[#17365D] mb-4">
                    Các Vấn Đề Thường Gặp SaigonLex Hỗ Trợ Giải Quyết
                  </h3>
                  <div className="space-y-3">
                    {area.commonIssues.map((issue, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-[#374151]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#17365D] block mb-0.5">{issue.title}</strong>
                          <span className="text-xs text-[#5F6368]">{issue.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Steps */}
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#17365D] mb-6">
                    Quy Trình Triển Khai Hồ Sơ
                  </h3>
                  <div className="space-y-4">
                    {area.processSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-xl border border-[#E5E7EB] hover:border-[#AD8B55] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#17365D] text-white flex items-center justify-center font-bold text-xs shrink-0">
                          0{step.step}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#AD8B55] uppercase tracking-wider mb-0.5">
                            Bước {step.step}: {step.title}
                          </div>
                          <div className="text-xs text-[#5F6368]">
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope of service */}
                {area.serviceScope && area.serviceScope.length > 0 && (
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#17365D] mb-4">
                      Phạm Vi Công Việc Luật Sư Đảm Nhận
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {area.serviceScope.map((scope, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F8F9FA] text-xs text-[#374151]">
                          <CheckCircle2 className="w-4 h-4 text-[#AD8B55] shrink-0 mt-0.5" />
                          <span>{scope}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* FAQs for this area */}
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#17365D] mb-6">
                    Câu Hỏi Thường Gặp Về {area.title}
                  </h3>
                  <div className="space-y-4">
                    {area.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border border-[#E5E7EB] bg-[#F8F9FA]"
                      >
                        <div className="flex items-start gap-2.5 font-bold text-sm text-[#17365D] mb-2">
                          <HelpCircle className="w-4 h-4 text-[#AD8B55] shrink-0 mt-0.5" />
                          <span>{faq.question}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                {/* Consultation Card */}
                <div className="bg-[#17365D] text-white rounded-2xl p-6 sm:p-7 shadow-lg">
                  <div className="w-10 h-10 rounded-lg bg-[#AD8B55]/20 text-[#AD8B55] flex items-center justify-center mb-4">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-lg font-bold mb-2">
                    Cần Tư Vấn Trực Tiếp Về {area.title}?
                  </h4>
                  <p className="text-xs text-[#D1D5DB] leading-relaxed mb-6 font-body">
                    Luật sư chuyên trách sẽ trực tiếp liên hệ và tư vấn hướng xử lý phù hợp cho hồ sơ của bạn.
                  </p>
                  <a
                    href="tel:0908033115"
                    className="w-full py-3 rounded bg-[#AD8B55] hover:bg-[#92723E] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors mb-3"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Hotline: 0908 033 115</span>
                  </a>
                  <Link
                    href="/mau-3/lien-he"
                    className="w-full py-2.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center transition-colors"
                  >
                    Đặt Lịch Hẹn Tư Vấn
                  </Link>
                </div>

                {/* Other Practice Areas */}
                <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-[#E5E7EB]">
                  <h4 className="font-heading text-sm font-bold text-[#17365D] uppercase tracking-wider mb-4">
                    Lĩnh Vực Khác
                  </h4>
                  <div className="space-y-2">
                    {otherAreas.map((item) => (
                      <Link
                        key={item.id}
                        href={`/mau-3/linh-vuc/${item.slug}`}
                        className="block p-2.5 rounded-lg text-xs font-semibold text-[#4B5563] hover:text-[#17365D] hover:bg-white transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMau3 />
    </TemplatePageWrapper>
  );
}
