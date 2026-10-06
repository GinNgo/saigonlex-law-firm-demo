import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau1 } from "@/components/mau-1/HeaderMau1";
import { FooterMau1 } from "@/components/mau-1/FooterMau1";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PRACTICE_AREAS } from "@/data/services";

export const metadata: Metadata = {
  title: "Lĩnh vực Hoạt động & Dịch vụ Pháp lý | SAIGONLEX",
  description:
    "Danh mục 8 lĩnh vực hành nghề chuyên sâu: Tư vấn Doanh nghiệp, Hợp đồng thương mại, Đăng ký kinh doanh, Đầu tư FDI, Bất động sản, Lao động, Hôn nhân gia đình và Tranh tụng."
};

export default function ServicesMau1Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-1" },
            { name: "Lĩnh vực hoạt động", url: "https://saigonlex-demo.vercel.app/mau-1/linh-vuc" }
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
                { label: "Lĩnh vực hành nghề" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-[#C5A880] uppercase tracking-widest block">
                DANH MỤC DỊCH VỤ PHÁP LÝ TOÀN DIỆN
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Lĩnh vực Hoạt động Chuyên sâu
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                SAIGONLEX cung cấp giải pháp pháp lý đồng bộ, từ giai đoạn phòng ngừa rủi ro tuân thủ ban đầu đến giai đoạn xử lý tranh chấp thực chiến tại Tòa án và Trọng tài.
              </p>
            </div>
          </div>
        </section>

        {/* 8 Practice Areas Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRACTICE_AREAS.map((svc) => (
                <div
                  key={svc.slug}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 corporate-card-shadow hover:corporate-card-shadow-hover hover:-translate-y-1 transition duration-300 flex flex-col group"
                >
                  <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0A2540] text-[10px] font-bold px-2 py-0.5 rounded">
                      {svc.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h2 className="text-base font-bold text-[#0A2540] group-hover:text-blue-700 transition leading-snug line-clamp-2">
                        {svc.shortTitle}
                      </h2>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                        {svc.shortDesc}
                      </p>

                      <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                        {svc.highlights.slice(0, 2).map((hl, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                            <span className="truncate">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <Link
                        href={`/mau-1/linh-vuc/${svc.slug}`}
                        className="w-full bg-slate-100 hover:bg-[#0A2540] text-[#0A2540] hover:text-white text-xs font-bold py-2.5 px-3 rounded flex items-center justify-center gap-1.5 transition"
                      >
                        <span>Chi tiết dịch vụ & FAQ</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
