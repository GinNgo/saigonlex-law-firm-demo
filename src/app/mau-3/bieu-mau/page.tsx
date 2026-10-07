import React from "react";
import type { Metadata } from "next";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau3 } from "@/components/mau-3/HeaderMau3";
import { FooterMau3 } from "@/components/mau-3/FooterMau3";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";
import { LegalFormsClient } from "@/components/mau-3/LegalFormsClient";

export const metadata: Metadata = {
  title: "Kho Biểu Mẫu Pháp Lý Miễn Phí | CÔNG TY LUẬT SAIGONLEX",
  description:
    "Kho tài liệu và biểu mẫu hợp đồng, mẫu đơn tố tụng, biên bản cổ đông chuẩn mực do Luật sư SaigonLex biên soạn, tải về miễn phí."
};

export default function LegalFormsPageMau3() {
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
            { name: "Biểu mẫu pháp lý", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/bieu-mau" }
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
                { label: "Biểu mẫu pháp lý" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl mt-4 space-y-3">
              <span className="text-xs font-bold text-[#AD8B55] uppercase tracking-widest block">
                TÀI NGUYÊN PHÁP LÝ MIỄN PHÍ
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Kho Biểu Mẫu Pháp Lý Chuẩn Mực
              </h1>
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed font-body">
                Biểu mẫu hợp đồng, đơn từ và văn bản hành chính do Luật sư SaigonLex biên soạn theo
                quy định pháp luật hiện hành, cập nhật định kỳ.
              </p>
            </div>
          </div>
        </section>

        {/* Client Interactive Filter & Download Area */}
        <LegalFormsClient />
      </main>

      <FooterMau3 />
    </TemplatePageWrapper>
  );
}
