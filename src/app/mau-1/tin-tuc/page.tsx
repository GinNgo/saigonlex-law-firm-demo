import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau1 } from "@/components/mau-1/HeaderMau1";
import { FooterMau1 } from "@/components/mau-1/FooterMau1";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { BLOG_POSTS } from "@/data/blogs";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Kiến thức Pháp luật & Ấn phẩm Chuyên sâu | SAIGONLEX",
  description:
    "Cập nhật các bài viết pháp lý, phân tích điểm mới của luật doanh nghiệp, hợp đồng, đất đai 2024, đầu tư FDI và lao động từ luật sư SAIGONLEX."
};

export default function BlogListMau1Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-1" },
            { name: "Bài viết kiến thức pháp luật", url: "https://saigonlex-demo.vercel.app/mau-1/tin-tuc" }
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
                { label: "Bài viết pháp luật" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-[#C5A880] uppercase tracking-widest block">
                ẤN PHẨM & PHÂN TÍCH CHUYÊN MÔN
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Kiến thức Pháp luật & Phân tích Án lệ
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nơi tổng hợp các bài nghiên cứu thực chiến, bình luận văn bản quy phạm pháp luật mới và chia sẻ kinh nghiệm xử lý tranh chấp của luật sư SAIGONLEX.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 corporate-card-shadow hover:corporate-card-shadow-hover transition duration-300 flex flex-col group"
                >
                  <div className="relative h-52 w-full bg-slate-800 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A2540] text-white text-[11px] font-bold px-2.5 py-1 rounded shadow">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.publishDate}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h2 className="text-base font-bold text-[#0A2540] group-hover:text-blue-700 transition leading-snug line-clamp-2">
                        <Link href={`/mau-1/tin-tuc/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {post.tags.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <User className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>{post.author}</span>
                      </div>

                      <Link
                        href={`/mau-1/tin-tuc/${post.slug}`}
                        className="text-xs font-bold text-[#0A2540] hover:text-blue-700 flex items-center gap-1 group/btn"
                      >
                        <span>Đọc tiếp</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterMau1 />
    </div>
  );
}
