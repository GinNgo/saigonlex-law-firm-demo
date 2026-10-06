import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau2 } from "@/components/mau-2/HeaderMau2";
import { FooterMau2 } from "@/components/mau-2/FooterMau2";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { LAWYERS } from "@/data/lawyers";
import { ArrowUpRight, GraduationCap, Scale, Globe, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Đội ngũ Luật sư Trưởng & Cố vấn | SAIGONLEX Premium",
  description:
    "Hồ sơ năng lực của các luật sư điều hành, luật sư thành viên và chuyên gia tư vấn pháp lý cao cấp tại SAIGONLEX."
};

export default function TeamMau2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#111827]">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-2" },
            { name: "Đội ngũ luật sư", url: "https://saigonlex-demo.vercel.app/mau-2/doi-ngu" }
          ]
        }}
      />
      <HeaderMau2 />

      <main className="flex-1">
        {/* Banner */}
        <section className="py-20 bg-[#FAF7F0] border-b border-[#E5DEC9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu B", href: "/mau-2" },
                { label: "Đội ngũ luật sư" }
              ]}
              theme="editorial"
            />
            <div className="max-w-3xl space-y-4 pt-4">
              <span className="text-xs text-[#997836] uppercase tracking-wider block font-semibold">
                HỘI ĐỒNG THÀNH VIÊN
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A]">
                Đội ngũ Luật sư Trưởng & Cố vấn
              </h1>
              <p className="text-[#202124] text-sm sm:text-base leading-[1.7]">
                Nơi quy tụ những luật sư tranh tụng và cố vấn chiến lược bản lĩnh, thấu triệt sâu sắc hệ thống pháp lý Việt Nam và thông lệ thương mại toàn cầu.
              </p>
            </div>
          </div>
        </section>

        {/* Team List */}
        <section className="py-24 bg-[#FDFBF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="p-4 rounded-sm border border-[#E5DEC9] bg-[#FAF7F0] text-xs text-[#202124] leading-[1.7]">
              <strong className="text-[#0F172A] font-bold">Lưu ý về hồ sơ nhân sự (DEMO):</strong> Dữ liệu và hình ảnh nhân sự trên website phục vụ mục đích trình bày bản thiết kế giao diện theo quy định nghề nghiệp.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {LAWYERS.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="rounded-sm border border-[#E5DEC9] bg-white p-8 flex flex-col sm:flex-row gap-8 items-start hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 shadow-sm"
                >
                  <div className="relative w-full sm:w-48 aspect-[3/4] shrink-0 rounded-sm overflow-hidden border border-[#E5DEC9] bg-[#FAF7F0]">
                    <Image
                      src={lawyer.image}
                      alt={lawyer.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                    <div className="absolute top-2 right-2 bg-[#0C1829]/90 border border-[#C5A059]/40 text-[#DFBF7E] text-[9px] font-mono px-2 py-0.5 rounded-sm">
                      DEMO
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                        {lawyer.name}
                      </h2>
                      <div className="text-xs text-[#997836] tracking-wide mt-0.5 font-bold">
                        {lawyer.role}
                      </div>
                      <div className="text-xs text-[#4B5563] mt-0.5">
                        {lawyer.department}
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#202124] leading-[1.7]">
                      {lawyer.bio}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#E5DEC9] text-xs text-[#202124]">
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#111827] font-semibold">Học vị & Đào tạo:</strong>
                          <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-[#4B5563] text-xs">
                            {lawyer.education.map((e, idx) => (
                              <li key={idx}>{e}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Scale className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span><strong className="text-[#111827] font-semibold">Đoàn Luật sư:</strong> {lawyer.barAssociation}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span><strong className="text-[#0C1829]">Ngôn ngữ:</strong> {lawyer.languages.join(", ")}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/mau-2/lien-he"
                        className="inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-wider text-[#0C1829] hover:text-[#C5A059] transition font-medium"
                      >
                        <span>Đặt lịch hội đàm với luật sư này</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterMau2 />
    </div>
  );
}
