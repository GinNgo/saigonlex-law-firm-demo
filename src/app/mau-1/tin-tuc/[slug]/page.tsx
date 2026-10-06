import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau1 } from "@/components/mau-1/HeaderMau1";
import { FooterMau1 } from "@/components/mau-1/FooterMau1";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { BLOG_POSTS } from "@/data/blogs";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  List,
  ShieldAlert,
  Share2,
  ChevronRight
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Bài viết không tồn tại" };

  return {
    title: `${post.title} | SAIGONLEX`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | SAIGONLEX`,
      description: post.excerpt,
      images: [{ url: post.image }]
    }
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-1" },
            { name: "Bài viết pháp luật", url: "https://saigonlex-demo.vercel.app/mau-1/tin-tuc" },
            { name: post.title, url: `https://saigonlex-demo.vercel.app/mau-1/tin-tuc/${post.slug}` }
          ]
        }}
      />
      <JsonLd type="Article" data={{ article: post }} />
      <HeaderMau1 />

      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 1", href: "/mau-1" },
                { label: "Kiến thức", href: "/mau-1/tin-tuc" },
                { label: post.category }
              ]}
              theme="dark"
            />

            <div className="space-y-4 pt-2">
              <span className="bg-[#C5A880] text-slate-950 text-xs font-bold px-3 py-1 rounded inline-block uppercase">
                {post.category}
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1.5 font-medium">
                  <User className="w-4 h-4 text-[#C5A880]" />
                  <span>{post.author} ({post.authorRole})</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>{post.publishDate}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-800">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>

        {/* Content Body with TOC */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Table of Contents */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 mb-10">
              <div className="flex items-center gap-2 font-bold text-sm text-[#0A2540] mb-3">
                <List className="w-4 h-4 text-[#C5A880]" />
                <span>MỤC LỤC NỘI DUNG CHÍNH</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {post.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a
                      href={`#${toc.id}`}
                      className="text-slate-700 hover:text-blue-700 hover:underline flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{toc.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Legal Disclaimer Box */}
            <div className="mt-12 p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-950">
                <ShieldAlert className="w-4 h-4 text-amber-700" />
                <span>Khuyến cáo pháp lý quan trọng:</span>
              </div>
              <p>
                Bài viết trên được biên tập dựa trên các quy định pháp luật hiện hành tại thời điểm xuất bản nhằm mục đích thông tin tham khảo. Do quy định pháp luật thường xuyên sửa đổi và mỗi vụ việc cụ thể có tình tiết riêng biệt, quý độc giả vui lòng liên hệ luật sư chính thức để được tư vấn áp dụng chuẩn xác nhất.
              </p>
            </div>

            {/* Author Box */}
            <div className="mt-10 p-6 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#0A2540] text-[#C5A880] flex items-center justify-center font-bold text-lg shrink-0">
                <User className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-[#0A2540] text-sm">
                  Tác giả: {post.author}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {post.authorRole} • Hãng luật SAIGONLEX
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Chuyên trách tư vấn giải quyết tranh chấp kinh doanh thương mại và đầu tư doanh nghiệp.
                </p>
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-12 p-8 rounded-2xl bg-[#0A2540] text-white text-center space-y-4">
              <h3 className="text-xl font-bold">
                Cần ý kiến tư vấn pháp lý trực tiếp từ Luật sư SAIGONLEX?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                Hãy gửi hồ sơ hoặc mô tả tình huống pháp lý của bạn để nhận phản hồi phân tích sơ bộ trong 24h làm việc.
              </p>
              <div className="pt-2">
                <Link
                  href="/mau-1/lien-he"
                  className="inline-flex items-center gap-2 bg-[#C5A880] hover:bg-[#b39266] text-slate-950 font-bold px-6 py-3 rounded-lg text-xs transition"
                >
                  <span>Đặt lịch tư vấn bảo mật ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16 pt-10 border-t border-slate-200 space-y-6">
              <h3 className="text-lg font-bold text-[#0A2540]">
                Bài viết liên quan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/mau-1/tin-tuc/${rel.slug}`}
                    className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition flex flex-col justify-between space-y-2 group"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#C5A880] uppercase">
                        {rel.category}
                      </span>
                      <h4 className="text-sm font-bold text-[#0A2540] group-hover:text-blue-700 transition line-clamp-2 mt-1">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <span>Đọc bài viết</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMau1 />
    </div>
  );
}
