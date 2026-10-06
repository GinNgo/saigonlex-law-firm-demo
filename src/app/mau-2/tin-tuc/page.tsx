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
    <div className="min-h-screen flex flex-col bg-[#090E17] text-[#FAF8F5]">
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
        <section className="py-20 bg-[#05080E] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 2", href: "/mau-2" },
                { label: "Ấn phẩm pháp lý" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl space-y-4 pt-4">
              <span className="text-xs font-serif text-[#D4AF37] uppercase tracking-[0.25em] block">
                DIỄN ĐÀN CHUYÊN KHẢO
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF8F5]">
                Ấn phẩm & Phân tích Độc quyền
              </h1>
              <p className="text-slate-300 font-sans text-sm sm:text-base font-light leading-relaxed">
                Những góc nhìn học thuật và thực tiễn chuẩn xác về các chuyển dịch của hành lang pháp lý thương mại tại Việt Nam.
              </p>
            </div>
          </div>
        </section>

        {/* Magazine Grid */}
        <section className="py-24 bg-[#090E17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="rounded border border-white/10 bg-[#101826] overflow-hidden hover:border-[#D4AF37] transition duration-500 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full bg-[#090E17] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono tracking-wider text-[#D4AF37] border border-white/10 uppercase">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                        <span>{post.publishDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="font-serif text-xl font-bold text-[#FAF8F5] group-hover:text-[#F3E5AB] transition leading-snug line-clamp-2">
                        <Link href={`/mau-2/tin-tuc/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-xs text-slate-400 font-sans font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-4">
                    <span className="text-[11px] text-slate-400 font-serif">
                      Tác giả: {post.author}
                    </span>

                    <Link
                      href={`/mau-2/tin-tuc/${post.slug}`}
                      className="text-xs font-serif text-[#D4AF37] group-hover:text-white flex items-center gap-1 transition"
                    >
                      <span>Khảo cứu</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
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
