import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau2 } from "@/components/mau-2/HeaderMau2";
import { FooterMau2 } from "@/components/mau-2/FooterMau2";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { BLOG_POSTS } from "@/data/blogs";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ấn phẩm & Phân tích Pháp lý | SAIGONLEX Premium",
  description:
    "Tuyển tập các chuyên khảo pháp lý, phân tích chuyên sâu về thị trường M&A, pháp luật đất đai 2024, tái cấu trúc chuỗi cung ứng và tranh chấp thương mại."
};

export default function BlogListMau2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#111827]">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-2" },
            { name: "Ấn phẩm pháp lý", url: "https://saigonlex-demo.vercel.app/mau-2/tin-tuc" }
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
                { label: "Trang chủ Mẫu 2", href: "/mau-2" },
                { label: "Ấn phẩm pháp lý" }
              ]}
              theme="editorial"
            />
            <div className="max-w-3xl space-y-4 pt-4">
              <span className="text-xs text-[#997836] uppercase tracking-wider block font-semibold">
                DIỄN ĐÀN CHUYÊN KHẢO
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A]">
                Ấn phẩm & Phân tích Độc quyền
              </h1>
              <p className="text-[#202124] text-sm sm:text-base leading-[1.7]">
                Những góc nhìn học thuật và thực tiễn chuẩn xác về các chuyển dịch của hành lang pháp lý thương mại tại Việt Nam.
              </p>
            </div>
          </div>
        </section>

        {/* Magazine Grid */}
        <section className="py-24 bg-[#FDFBF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-sm border border-[#E5DEC9] bg-white overflow-hidden hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full bg-[#FAF7F0] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-[#0C1829]/90 px-2.5 py-1 text-[10px] font-mono tracking-wider text-[#DFBF7E] border border-[#C5A059]/30 uppercase rounded-sm font-bold">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-[11px] text-[#6B7280] font-mono">
                        <span>{post.publishDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                    <h2 className="text-lg sm:text-xl font-bold text-[#111827] group-hover:text-[#17365D] transition leading-snug line-clamp-2">
                        <Link href={`/mau-2/tin-tuc/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-[13px] text-[#4B5563] leading-[1.7] line-clamp-3 font-normal">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#E5DEC9]/60 flex items-center justify-between mt-4">
                    <span className="text-xs text-[#6B7280] font-medium">
                      Tác giả: {post.author}
                    </span>

                    <Link
                      href={`/mau-2/tin-tuc/${post.slug}`}
                      className="text-xs uppercase tracking-wider text-[#17365D] group-hover:text-[#0f2746] flex items-center gap-1 transition font-semibold"
                    >
                      <span>Khảo cứu</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterMau2 />
    </div>
  );
}
