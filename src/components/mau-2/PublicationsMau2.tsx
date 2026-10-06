"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

export function PublicationsMau2() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24 bg-[#0D1522] text-[#FAF8F5] relative border-t border-white/5" id="an-pham">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.25em] block">
              GÓC NHÌN PHÁP LÝ & DIỄN ĐÀN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5]">
              Ấn phẩm & Phân tích Độc quyền
            </h2>
            <p className="text-slate-400 font-sans text-sm font-light">
              Tuyển tập các báo cáo nghiên cứu quy định mới, rủi ro giao dịch M&A và các điểm nghẽn pháp lý doanh nghiệp được chắt lọc bởi ban luật sư SAIGONLEX.
            </p>
          </div>

          <div>
            <Link
              href="/mau-2/tin-tuc"
              className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.2em] text-[#D4AF37] hover:text-[#FAF8F5] transition"
            >
              <span>Xem tất cả ấn phẩm</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Editorial Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border border-white/10 rounded overflow-hidden bg-[#101826] hover:border-[#D4AF37] transition duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-[#090E17] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono tracking-wider text-[#D4AF37] border border-white/10 uppercase">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                    <span>{post.publishDate}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#FAF8F5] group-hover:text-[#F3E5AB] transition leading-snug line-clamp-2">
                    <Link href={`/mau-2/tin-tuc/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

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
  );
}
