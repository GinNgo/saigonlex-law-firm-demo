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
    <div className="min-h-screen flex flex-col bg-[#090E17] text-[#FAF8F5]">
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
        <section className="py-20 bg-[#05080E] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 2", href: "/mau-2" },
                { label: "Đội ngũ luật sư" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl space-y-4 pt-4">
              <span className="text-xs font-serif text-[#D4AF37] uppercase tracking-[0.25em] block">
                HỘI ĐỒNG THÀNH VIÊN
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF8F5]">
                Đội ngũ Luật sư Trưởng & Cố vấn
              </h1>
              <p className="text-slate-300 font-sans text-sm sm:text-base font-light leading-relaxed">
                Nơi quy tụ những luật sư tranh tụng và cố vấn chiến lược bản lĩnh, thấu triệt sâu sắc hệ thống pháp lý Việt Nam và thông lệ thương mại toàn cầu.
              </p>
            </div>
          </div>
        </section>

        {/* Team List */}
        <section className="py-24 bg-[#090E17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="p-4 rounded border border-amber-900/30 bg-[#0D1522] text-xs text-amber-200/90 font-light">
              <strong className="font-serif text-[#D4AF37]">Lưu ý về hồ sơ nhân sự (DEMO):</strong> Dữ liệu và hình ảnh nhân sự trên website phục vụ mục đích trình bày bản thiết kế giao diện theo quy định nghề nghiệp.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {LAWYERS.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="rounded border border-white/10 bg-[#101826] p-8 flex flex-col sm:flex-row gap-8 items-start hover:border-[#D4AF37] transition duration-500 shadow-2xl"
                >
                  <div className="relative w-full sm:w-48 aspect-[3/4] shrink-0 rounded overflow-hidden border border-white/10 bg-slate-900">
                    <Image
                      src={lawyer.image}
                      alt={lawyer.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 border border-amber-500/30 text-[#D4AF37] text-[9px] font-mono px-2 py-0.5 rounded">
                      DEMO
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-[#FAF8F5]">
                        {lawyer.name}
                      </h2>
                      <div className="text-xs font-serif text-[#D4AF37] tracking-wider mt-0.5">
                        {lawyer.role}
                      </div>
                      <div className="text-xs text-slate-400 font-sans font-light mt-0.5">
                        {lawyer.department}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">
                      {lawyer.bio}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-white/5 text-xs text-slate-400 font-sans font-light">
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-300">Học vị & Đào tạo:</strong>
                          <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-slate-400 text-[11px]">
                            {lawyer.education.map((e, idx) => (
                              <li key={idx}>{e}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Scale className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span><strong className="text-slate-300">Đoàn Luật sư:</strong> {lawyer.barAssociation}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span><strong className="text-slate-300">Ngôn ngữ:</strong> {lawyer.languages.join(", ")}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/mau-2/lien-he"
                        className="inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-wider text-[#D4AF37] hover:text-white transition"
                      >
                        <span>Đặt lịch hội đàm với luật sư này</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
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
