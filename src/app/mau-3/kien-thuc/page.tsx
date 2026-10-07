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
import { BLOG_POSTS } from "@/data/blogs";
import { Calendar, Clock, User, ArrowRight, BookOpen, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Kiến Thức Pháp Luật & Góc Nhìn Chuyên Môn | CÔNG TY LUẬT SAIGONLEX",
  description:
    "Tổng hợp các bài viết phân tích pháp lý chuyên sâu về Doanh nghiệp, Hợp đồng thương mại, Đất đai, Lao động và Tranh tụng từ đội ngũ luật sư SaigonLex."
};

export default function KnowledgeListMau3Page() {
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
            { name: "Kiến thức pháp luật", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/kien-thuc" }
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
                { label: "Kiến thức pháp luật" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl mt-4 space-y-3">
              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest block">
                BÌNH LUẬN & HƯỚNG DẪN THỰC TIỄN
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Kho Kiến Thức Pháp Lý Ứng Dụng
              </h1>
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed font-body">
                Nghiên cứu các quy định pháp luật mới nhất và giải pháp xử lý tình huống thực tế
                được đúc kết từ quá trình tranh tụng và tư vấn của SaigonLex.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 sm:py-20 bg-[var(--bg-section)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.id}
                  className="bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={post.image || "/images/blog-1.png"}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[var(--color-primary)] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          {post.publishDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-heading text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-snug mb-3 line-clamp-2">
                        <Link href={`/mau-3/kien-thuc/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[var(--color-border)]/50 flex items-center justify-between mt-auto">
                    <span className="text-xs text-[var(--color-primary)] font-medium flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span>{post.author}</span>
                    </span>

                    <Link
                      href={`/mau-3/kien-thuc/${post.slug}`}
                      className="text-xs font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] inline-flex items-center gap-1"
                    >
                      <span>Chi tiết</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
