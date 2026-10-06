import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau2 } from "@/components/mau-2/HeaderMau2";
import { FooterMau2 } from "@/components/mau-2/FooterMau2";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PRACTICE_AREAS } from "@/data/services";

export const metadata: Metadata = {
  title: "Lĩnh vực Hoạt động & Cố vấn Pháp lý | SAIGONLEX Premium",
  description:
    "Danh mục 8 lĩnh vực pháp lý trọng điểm dành cho doanh nghiệp và khách hàng tư nhân cao cấp: M&A, Hợp đồng, Đất đai, Đầu tư FDI, Trọng tài thương mại."
};

export default function ServicesMau2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#111827]">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-2" },
            { name: "Lĩnh vực hoạt động", url: "https://saigonlex-demo.vercel.app/mau-2/linh-vuc" }
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
                { label: "Lĩnh vực hoạt động" }
              ]}
              theme="editorial"
            />
            <div className="max-w-3xl space-y-4 pt-4">
              <span className="text-xs text-[#997836] uppercase tracking-wider block font-semibold">
                DANH MỤC CỐ VẤN CHIẾN LƯỢC
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A]">
                Lĩnh vực Hành nghề Chuyên sâu
              </h1>
              <p className="text-[#202124] text-sm sm:text-base leading-[1.7]">
                Tập trung vào các lĩnh vực pháp lý then chốt của giới kinh doanh và thân chủ tư nhân. Giải pháp mang tính chiến lược dài hạn và tính thực thi vượt trội.
              </p>
            </div>
          </div>
        </section>

        {/* 8 Areas Grid */}
        <section className="py-24 bg-[#FDFBF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRACTICE_AREAS.map((svc, idx) => (
                <div
                  key={svc.slug}
                  className="rounded-sm border border-[#E5DEC9] bg-white hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-sm"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#FAF7F0]">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <span className="absolute top-3 left-3 font-mono text-[10px] text-[#DFBF7E] bg-[#0C1829]/90 px-2.5 py-0.5 rounded-sm border border-[#C5A059]/30 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h2 className="text-lg font-bold text-[#111827] group-hover:text-[#17365D] transition leading-snug line-clamp-2">
                        {svc.shortTitle}
                      </h2>
                      <p className="text-xs text-[#4B5563] mt-2 line-clamp-3 leading-[1.7] font-normal">
                        {svc.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E5DEC9]/60">
                      <Link
                        href={`/mau-2/linh-vuc/${svc.slug}`}
                        className="w-full inline-flex items-center justify-between text-xs uppercase tracking-wider text-[#17365D] group-hover:text-[#0f2746] transition font-semibold"
                      >
                        <span>Chi tiết đặc tả</span>
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
