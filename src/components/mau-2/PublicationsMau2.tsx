"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

export function PublicationsMau2() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24 bg-[#FDFBF7] text-[#111827] relative border-b border-[#EFE9D9]" id="an-pham">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E8E1CE] pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[#997836] font-serif text-xs uppercase tracking-[0.25em] block">
              GÓC NHÌN PHÁP LÝ & DIỄN ĐÀN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C1829]">
              Ấn phẩm & Phân tích Độc quyền
            </h2>
            <p className="text-slate-600 font-sans text-sm font-light">
              Tuyển tập các báo cáo nghiên cứu quy định mới, rủi ro giao dịch M&A và các điểm nghẽn pháp lý doanh nghiệp được chắt lọc bởi ban luật sư SAIGONLEX.
            </p>
          </div>

          <div>
            <Link
              href="/mau-2/tin-tuc"
              className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.2em] text-[#0C1829] hover:text-[#997836] transition font-semibold"
            >
              <span>Xem tất cả ấn phẩm</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
            </Link>
          </div>
        </div>

        {/* 3 Editorial Articles (Bright Ivory Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-[#E5DEC9] rounded-sm overflow-hidden bg-white hover:border-[#C5A059] transition duration-500 flex flex-col justify-between editorial-card-shadow group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-[#0C1829] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF7F0] backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono tracking-wider text-[#0C1829] border border-[#E0D7BE] uppercase font-bold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono">
                    <span>{post.publishDate}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0C1829] group-hover:text-[#997836] transition leading-snug line-clamp-2">
                    <Link href={`/mau-2/tin-tuc/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 font-sans font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#F0EAD8] flex items-center justify-between mt-4">
                <span className="text-[11px] text-slate-500 font-serif">
                  Tác giả: {post.author}
                </span>

                <Link
                  href={`/mau-2/tin-tuc/${post.slug}`}
                  className="text-xs font-serif text-[#0C1829] group-hover:text-[#997836] flex items-center gap-1 transition font-bold"
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
  );
}
