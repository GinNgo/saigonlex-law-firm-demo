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
    <div className="min-h-screen flex flex-col bg-[#090E17] text-[#FAF8F5]">
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
        <section className="py-20 bg-[#05080E] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 2", href: "/mau-2" },
                { label: "Lĩnh vực hoạt động" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl space-y-4 pt-4">
              <span className="text-xs font-serif text-[#D4AF37] uppercase tracking-[0.25em] block">
                DANH MỤC CỐ VẤN CHIẾN LƯỢC
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF8F5]">
                Lĩnh vực Hành nghề Chuyên sâu
              </h1>
              <p className="text-slate-300 font-sans text-sm sm:text-base font-light leading-relaxed">
                Tập trung vào các lĩnh vực pháp lý then chốt của giới kinh doanh và thân chủ tư nhân. Giải pháp mang tính chiến lược dài hạn và tính thực thi vượt trội.
              </p>
            </div>
          </div>
        </section>

        {/* 8 Areas Grid */}
        <section className="py-24 bg-[#090E17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRACTICE_AREAS.map((svc, idx) => (
                <div
                  key={svc.slug}
                  className="rounded border border-white/10 bg-[#101826] hover:border-[#D4AF37] transition duration-500 overflow-hidden flex flex-col justify-between group shadow-xl"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#090E17]">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101826] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 font-mono text-[10px] text-[#D4AF37] bg-black/60 px-2 py-0.5 rounded border border-white/10">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h2 className="font-serif text-lg font-bold text-[#FAF8F5] group-hover:text-[#F3E5AB] transition leading-snug line-clamp-2">
                        {svc.shortTitle}
                      </h2>
                      <p className="text-xs text-slate-400 font-sans font-light mt-2 line-clamp-3 leading-relaxed">
                        {svc.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <Link
                        href={`/mau-2/linh-vuc/${svc.slug}`}
                        className="w-full inline-flex items-center justify-between text-xs font-serif uppercase tracking-wider text-[#D4AF37] group-hover:text-white transition"
                      >
                        <span>Chi tiết đặc tả</span>
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
