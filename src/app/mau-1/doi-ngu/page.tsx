import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau1 } from "@/components/mau-1/HeaderMau1";
import { FooterMau1 } from "@/components/mau-1/FooterMau1";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { LAWYERS } from "@/data/lawyers";
import { GraduationCap, Scale, Globe, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Đội ngũ Luật sư & Chuyên gia | SAIGONLEX",
  description:
    "Hồ sơ năng lực của đội ngũ luật sư thành viên và luật sư cố vấn tại SAIGONLEX. Chuyên gia hàng đầu trong lĩnh vực pháp luật doanh nghiệp, hợp đồng và tranh tụng."
};

export default function TeamMau1Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-1" },
            { name: "Đội ngũ luật sư", url: "https://saigonlex-demo.vercel.app/mau-1/doi-ngu" }
          ]
        }}
      />
      <HeaderMau1 />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 1", href: "/mau-1" },
                { label: "Đội ngũ luật sư" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-[#C5A880] uppercase tracking-widest block">
                CON NGƯỜI & TRÍ TUỆ PHÁP LÝ
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Đội ngũ Luật sư & Chuyên gia
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Tập hợp những luật sư tận tâm, bản lĩnh, am tường thực tiễn xét xử và có tư duy chiến lược thương mại vượt trội.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Lưu ý về hồ sơ nhân sự (Bản DEMO):</span>
              </div>
              Tất cả các thông tin chức danh, bằng cấp và hình ảnh nhân sự dưới đây được xây dựng nhằm mục đích minh họa cấu trúc hồ sơ trên website. SAIGONLEX cam kết không bịa đặt số năm kinh nghiệm hay giấy phép hành nghề thực tế.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LAWYERS.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 corporate-card-shadow p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="relative w-full sm:w-44 aspect-[3/4] shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-slate-800">
                    <Image
                      src={lawyer.image}
                      alt={lawyer.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 180px"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500/90 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                      DEMO
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <h2 className="text-xl font-bold text-[#0A2540]">
                        {lawyer.name}
                      </h2>
                      <div className="text-xs font-semibold text-[#C5A880] mt-0.5">
                        {lawyer.role}
                      </div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">
                        {lawyer.department}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {lawyer.bio}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                      <div className="flex items-start gap-2 text-slate-700">
                        <GraduationCap className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <div>
                          <strong>Học vấn:</strong>
                          <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-slate-500 text-[11px]">
                            {lawyer.education.map((e, idx) => (
                              <li key={idx}>{e}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-slate-700">
                        <Scale className="w-4 h-4 text-[#C5A880] shrink-0" />
                        <span><strong>Đoàn luật sư:</strong> {lawyer.barAssociation}</span>
                      </div>

                      <div className="flex items-center gap-2 text-slate-700">
                        <Globe className="w-4 h-4 text-[#C5A880] shrink-0" />
                        <span><strong>Ngôn ngữ:</strong> {lawyer.languages.join(", ")}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/mau-1/lien-he"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2540] hover:text-blue-700"
                      >
                        <span>Đặt lịch tư vấn với luật sư này</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterMau1 />
    </div>
  );
}
