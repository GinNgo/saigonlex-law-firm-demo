import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau3 } from "@/components/mau-3/HeaderMau3";
import { FooterMau3 } from "@/components/mau-3/FooterMau3";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";
import { BLOG_POSTS } from "@/data/blogs";
import {
  Calendar,
  Clock,
  User,
  AlertCircle,
  PhoneCall,
  Share2,
  Tag,
  ArrowRight,
  List
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Không tìm thấy bài viết" };

  return {
    title: `${post.title} | Kiến thức Pháp luật SaigonLex`,
    description: post.excerpt
  };
}

export default async function KnowledgeDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

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
            { name: "Kiến thức", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/kien-thuc" },
            { name: post.title, url: `https://saigonlex-law-firm-demo.vercel.app/mau-3/kien-thuc/${post.slug}` }
          ]
        }}
      />
      <HeaderMau3 />

      <main className="flex-1">
        {/* Banner with Breadcrumbs */}
        <section className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--bg-dark)] to-[var(--color-primary)] text-white py-12 lg:py-14 border-b border-[var(--color-border)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu C", href: "/mau-3" },
                { label: "Kiến thức pháp luật", href: "/mau-3/kien-thuc" },
                { label: post.category }
              ]}
              theme="dark"
            />
            <div className="mt-4">
              <span className="px-3 py-1 rounded bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider inline-block mb-3">
                {post.category}
              </span>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#D1D5DB] mt-4 pt-4 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  {post.author} ({post.authorRole})
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  {post.publishDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <section className="py-12 sm:py-16 bg-[var(--bg-section)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-border)] mb-8">
              <Image
                src={post.image || "/images/blog-1.png"}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>

            {/* Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="bg-[var(--bg-section-alt)] rounded-xl p-6 border border-[var(--color-border)] mb-10">
                <div className="flex items-center gap-2 font-heading text-sm font-bold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                  <List className="w-4 h-4 text-[var(--color-accent)]" />
                  <span>Mục lục bài viết</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {post.tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-[var(--color-text)] hover:text-[var(--color-primary)] hover:underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* HTML Body */}
            <div
              className="prose prose-slate max-w-none text-[var(--color-text)] leading-relaxed font-body text-base space-y-4"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-xs font-bold text-[var(--color-primary)]">Từ khóa:</span>
                {post.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[var(--bg-section-alt)] text-[var(--color-text)] px-2.5 py-1 rounded-md border border-[var(--color-border)]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Legal Advisory Disclaimer */}
            <div className="mt-8 p-5 rounded-xl bg-[#FEF3C7]/40 border border-[#FDE68A] flex items-start gap-3 text-xs text-[#92400E]">
              <AlertCircle className="w-5 h-5 shrink-0 text-[#D97706] mt-0.5" />
              <p>
                <strong>Tuyên bố miễn trừ:</strong> Bài viết trên chỉ phản ánh quan điểm pháp lý của
                tác giả tại thời điểm công bố dựa trên các văn bản quy phạm pháp luật đang có hiệu lực.
                Quý khách không nên áp dụng máy móc vào vụ việc thực tế mà cần sự tham vấn trực tiếp từ Luật sư.
              </p>
            </div>

            {/* Author Card & Consultation Callout */}
            <div className="mt-10 bg-[#17365D] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-heading text-lg font-bold mb-1">
                  Cần Tư Vấn Chuyên Sâu Về Vụ Việc Của Bạn?
                </h4>
                <p className="text-xs text-[#D1D5DB] font-body max-w-md">
                  Đội ngũ Luật sư SaigonLex sẵn sàng nghiên cứu hồ sơ và tư vấn phương án giải quyết cụ thể.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="tel:0908033115"
                  className="px-5 py-2.5 rounded bg-[#AD8B55] hover:bg-[#92723E] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>0908 033 115</span>
                </a>
                <Link
                  href="/mau-3/lien-he"
                  className="px-5 py-2.5 rounded bg-white text-[#17365D] text-xs font-bold hover:bg-[#F5F1E9] transition-colors"
                >
                  Đặt Lịch Tư Vấn
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-10 border-t border-[#E5E7EB]">
                <h3 className="font-heading text-xl font-bold text-[#17365D] mb-6">
                  Bài Viết Liên Quan
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {relatedPosts.map((rPost) => (
                    <div
                      key={rPost.id}
                      className="bg-[#F8F9FA] rounded-xl p-4 border border-[#E5E7EB] hover:border-[#AD8B55] transition-colors"
                    >
                      <span className="text-[10px] font-bold text-[#AD8B55] uppercase block mb-1">
                        {rPost.category}
                      </span>
                      <h4 className="font-heading text-xs font-bold text-[#17365D] hover:underline line-clamp-2 mb-2">
                        <Link href={`/mau-3/kien-thuc/${rPost.slug}`}>{rPost.title}</Link>
                      </h4>
                      <span className="text-[10px] text-[#9CA3AF]">{rPost.publishDate}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <FooterMau3 />
    </TemplatePageWrapper>
  );
}
