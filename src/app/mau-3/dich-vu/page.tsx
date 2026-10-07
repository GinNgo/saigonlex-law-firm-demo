import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau3 } from "@/components/mau-3/HeaderMau3";
import { FooterMau3 } from "@/components/mau-3/FooterMau3";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";
import { FEATURED_SERVICES_MAU3 } from "@/data/mau3Data";
import {
  Briefcase,
  FileText,
  ShieldAlert,
  Building,
  Globe2,
  GitMerge,
  CheckCircle2,
  PhoneCall,
  Home
} from "lucide-react";

const serviceIcons: Record<string, any> = {
  Briefcase,
  FileText,
  ShieldAlert,
  Building,
  Globe2,
  GitMerge,
  Home
};

export const metadata: Metadata = {
  title: "Dịch Vụ Pháp Lý Đóng Gói | CÔNG TY LUẬT SAIGONLEX",
  description:
    "Các gói dịch vụ pháp lý chuẩn hóa của SaigonLex: Tư vấn thường xuyên, Rà soát hợp đồng, Giải quyết tranh chấp, Thẩm định M&A, Cấp phép đầu tư FDI."
};

export default function ServicesMau3Page() {
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
            { name: "Dịch vụ pháp lý", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/dich-vu" }
          ]
        }}
      />
      <HeaderMau3 />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="bg-gradient-to-r from-[#17365D] via-[#0E2945] to-[#17365D] text-white py-14 lg:py-16 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu C", href: "/mau-3" },
                { label: "Dịch vụ pháp lý" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl mt-4 space-y-3">
              <span className="text-xs font-bold text-[#AD8B55] uppercase tracking-widest block">
                GIẢI PHÁP ĐÓNG GÓI THỰC TIỄN
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Gói Dịch Vụ Pháp Lý Chuẩn Hóa
              </h1>
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed font-body">
                SaigonLex xây dựng các gói dịch vụ pháp lý minh bạch về sản phẩm bàn giao, tiến độ
                thực hiện và chi phí cố định, giúp khách hàng chủ động ngân sách và kiểm soát rủi ro.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {FEATURED_SERVICES_MAU3.map((svc) => {
              const Icon = serviceIcons[svc.iconName] || Briefcase;
              return (
                <div
                  key={svc.id}
                  className="bg-[#F8F9FA] rounded-2xl p-7 sm:p-9 border border-[#E5E7EB] hover:border-[#AD8B55] transition-all duration-300 shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-[#17365D] text-white flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#AD8B55]" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#17365D]/10 text-[#17365D]">
                            {svc.subtitle}
                          </span>
                          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#17365D] mt-1">
                            {svc.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-6 font-body">
                        {svc.description}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        <Link
                          href="/mau-3/lien-he"
                          className="px-6 py-2.5 rounded-md bg-[#17365D] hover:bg-[#0E2945] text-white text-xs font-bold transition-colors shadow-sm"
                        >
                          Yêu cầu báo phí dịch vụ
                        </Link>
                        <a
                          href="tel:0908033115"
                          className="px-5 py-2.5 rounded-md bg-white border border-[#E5E7EB] text-[#17365D] text-xs font-bold hover:bg-[#F5F1E9] transition-colors inline-flex items-center gap-1.5"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-[#AD8B55]" />
                          <span>0908 033 115</span>
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
                      <h4 className="font-heading text-xs font-bold text-[#17365D] uppercase tracking-wider mb-3">
                        Sản phẩm bàn giao cụ thể:
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {svc.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#374151]">
                            <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-3 border-t border-[#F3F4F6] text-[11px] text-[#6B7280]">
                        ✓ Cam kết ký thỏa thuận bảo mật thông tin (NDA) trước khi nhận tài liệu.
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
