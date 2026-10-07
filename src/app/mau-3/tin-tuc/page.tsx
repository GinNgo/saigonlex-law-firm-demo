import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau3 } from "@/components/mau-3/HeaderMau3";
import { FooterMau3 } from "@/components/mau-3/FooterMau3";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";
import { NEWS_ARTICLES_MAU3 } from "@/data/mau3Data";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";

export const metadata: Metadata = {
  title: "Bản Tin & Sự Kiện Pháp Luật | CÔNG TY LUẬT SAIGONLEX",
  description:
    "Cập nhật các chính sách pháp luật mới, hoạt động tọa đàm và sự kiện chuyên môn của đội ngũ luật sư SaigonLex tại TP. Hồ Chí Minh."
};

export default function NewsListMau3Page() {
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
            { name: "Tin tức", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/tin-tuc" }
          ]
        }}
      />
      <HeaderMau3 />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--bg-dark)] to-[var(--color-primary)] text-white py-14 lg:py-16 border-b border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu C", href: "/mau-3" },
                { label: "Bản tin & Sự kiện" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl mt-4 space-y-3">
              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest block">
                TIN TỨC & HOẠT ĐỘNG CHUYÊN MÔN
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Bản Tin Pháp Luật & Sự Kiện Hãng Luật
              </h1>
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed font-body">
                Kênh thông tin cập nhật các thay đổi quy phạm pháp luật quan trọng cùng các hoạt
                động đóng góp cho cộng đồng doanh nghiệp của SaigonLex.
              </p>
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="py-16 sm:py-20 bg-[var(--bg-section)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {NEWS_ARTICLES_MAU3.map((item) => (
                <div
                  key={item.id}
                  className="bg-[var(--surface)] rounded-xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-[var(--color-primary)]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {item.category}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 text-[11px] text-[var(--color-text-muted)] mb-2">
                        <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        <span>{item.publishDate}</span>
                      </div>

                      <h2 className="font-heading text-sm sm:text-base font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-snug mb-2.5 line-clamp-2">
                        <Link href={`/mau-3/tin-tuc/${item.slug}`}>{item.title}</Link>
                      </h2>

                      <p className="text-xs text-[var(--color-text-muted)] line-clamp-3 leading-relaxed mb-4">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-[var(--color-border)]/50 mt-auto">
                    <Link
                      href={`/mau-3/tin-tuc/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors"
                    >
                      <span>Đọc chi tiết</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterMau3 />
    </TemplatePageWrapper>
  );
}
