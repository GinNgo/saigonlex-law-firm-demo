"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Motion";

export function InsightsMau1() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 bg-white" id="tin-tuc">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A880] uppercase tracking-widest">
                <span className="w-6 h-0.5 bg-[#C5A880]" />
                <span>GÓC NHÌN PHÁP LÝ & ẤN PHẨM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
                Bài viết Kiến thức Pháp luật Mới nhất
              </h2>
              <p className="text-[#202124] text-[15px] sm:text-[16px] leading-[1.7]">
                Cập nhật các phân tích chuyên sâu, điểm mới luật định và bài học kinh nghiệm xử lý tranh chấp thực tế từ luật sư SAIGONLEX.
              </p>
            </div>

            <div>
              <Link
                href="/mau-1/tin-tuc"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#17365D] hover:underline group"
              >
                <span>Xem tất cả bài viết & ấn phẩm</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* 3 Articles Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {featuredPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <article
                className="bg-white rounded-xl overflow-hidden border border-slate-200 corporate-card-shadow hover:corporate-card-shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group h-full"
              >
                <div className="relative h-52 w-full bg-slate-800 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A2540] text-white text-[11px] font-bold px-2.5 py-1 rounded shadow">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.publishDate}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-[#111827] group-hover:text-[#17365D] transition leading-snug line-clamp-2">
                      <Link href={`/mau-1/tin-tuc/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-[#4B5563] font-medium">
                      <User className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{post.author}</span>
                    </div>

                    <Link
                      href={`/mau-1/tin-tuc/${post.slug}`}
                      className="text-xs font-semibold text-[#17365D] hover:underline flex items-center gap-1 group/btn"
                    >
                      <span>Đọc tiếp</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
