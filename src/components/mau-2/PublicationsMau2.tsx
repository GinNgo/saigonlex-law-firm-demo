"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Motion";

export function PublicationsMau2() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24 bg-[#FDFBF7] text-[#111827] relative border-b border-[#EFE9D9]" id="an-pham">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E8E1CE] pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[#997836] text-xs uppercase tracking-wider font-semibold block">
                GÓC NHÌN PHÁP LÝ & DIỄN ĐÀN
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
                Ấn phẩm & Phân tích Độc quyền
              </h2>
              <p className="text-[#202124] text-sm sm:text-base leading-[1.7]">
                Tuyển tập các báo cáo nghiên cứu quy định mới, rủi ro giao dịch M&A và các điểm nghẽn pháp lý doanh nghiệp được chắt lọc bởi ban luật sư SAIGONLEX.
              </p>
            </div>

            <div>
              <Link
                href="/mau-2/tin-tuc"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#17365D] hover:text-[#0f2746] transition font-semibold"
              >
                <span>Xem tất cả ấn phẩm</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* 3 Editorial Articles (Bright Ivory Cards) */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <article
                className="border border-[#E5DEC9] rounded-sm overflow-hidden bg-white hover:border-[#C5A059] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between editorial-card-shadow group h-full"
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
                    <div className="absolute top-3 left-3 bg-[#FAF7F0] backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono tracking-wider text-[#111827] border border-[#E0D7BE] uppercase font-bold">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-[#6B7280] font-mono">
                      <span>{post.publishDate}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] group-hover:text-[#17365D] transition leading-snug line-clamp-2">
                      <Link href={`/mau-2/tin-tuc/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#4B5563] leading-[1.7] line-clamp-3 font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#F0EAD8] flex items-center justify-between mt-4">
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
