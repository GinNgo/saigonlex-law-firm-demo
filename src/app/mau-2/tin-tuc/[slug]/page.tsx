import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau2 } from "@/components/mau-2/HeaderMau2";
import { FooterMau2 } from "@/components/mau-2/FooterMau2";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { BLOG_POSTS } from "@/data/blogs";
import { ArrowUpRight, List, ShieldAlert, ChevronRight, User } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Ấn phẩm không tồn tại" };

  return {
    title: `${post.title} | SAIGONLEX Premium`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | SAIGONLEX Premium`,
      description: post.excerpt,
      images: [{ url: post.image }]
    }
  };
}

export default async function BlogPostDetailMau2Page({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#111827]">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-2" },
            { name: "Ấn phẩm", url: "https://saigonlex-demo.vercel.app/mau-2/tin-tuc" },
            { name: post.title, url: `https://saigonlex-demo.vercel.app/mau-2/tin-tuc/${post.slug}` }
          ]
        }}
      />
      <JsonLd type="Article" data={{ article: post }} />
      <HeaderMau2 />

      <main className="flex-1">
        {/* Banner */}
        <section className="py-20 bg-[#FAF7F0] border-b border-[#E5DEC9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 2", href: "/mau-2" },
                { label: "Ấn phẩm", href: "/mau-2/tin-tuc" },
                { label: post.category }
              ]}
              theme="editorial"
            />

            <div className="space-y-4 pt-4">
              <span className="font-mono text-xs text-[#111827] uppercase tracking-wider border border-[#E5DEC9] px-3 py-1 rounded-sm bg-white inline-block shadow-sm font-semibold">
                {post.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs text-[#6B7280] pt-2 border-t border-[#E5DEC9]">
                <span className="text-[#111827] font-semibold">{post.author} ({post.authorRole})</span>
                <span>•</span>
                <span>{post.publishDate}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-[#E5DEC9] shadow-xl bg-white">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="896px"
            />
          </div>
        </div>

        {/* Content Body */}
        <section className="py-20 bg-[#FDFBF7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Table of contents */}
            <div className="p-6 rounded-sm border border-[#E5DEC9] bg-white shadow-sm">
              <div className="font-bold text-sm text-[#111827] mb-3 flex items-center gap-2">
                <List className="w-4 h-4 text-[#C5A059]" />
                <span>MỤC LỤC CHUYÊN KHẢO</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#202124]">
                {post.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a
                      href={`#${toc.id}`}
                      className="text-[#202124] hover:text-[#17365D] flex items-center gap-2 transition font-medium"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{toc.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content html with luxury styling */}
            <div
              className="prose max-w-none text-base leading-[1.75] text-[#202124] prose-headings:text-[#0F172A] prose-headings:font-bold prose-a:text-[#17365D] prose-strong:text-[#0F172A] prose-p:text-[#202124] prose-li:text-[#202124]"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Disclaimer */}
            <div className="p-6 rounded-sm border border-[#E5DEC9] bg-[#FAF7F0] text-xs sm:text-[13px] text-[#202124] leading-[1.7] space-y-2">
              <div className="font-bold text-[#0F172A] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#C5A059]" />
                <span>Khuyến cáo Về Giá trị Áp dụng Pháp lý:</span>
              </div>
              <p>
                Ấn phẩm nghiên cứu được biên soạn nhằm phục vụ góc nhìn tham khảo học thuật và không cấu thành lời tư vấn pháp lý chính thức đối với bất kỳ vụ việc cụ thể nào. Quý thân chủ vui lòng liên hệ trực tiếp luật sư thụ lý để được thẩm định chuyên sâu.
              </p>
            </div>

            {/* Author */}
            <div className="p-6 rounded-sm border border-[#E5DEC9] bg-white shadow-sm flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#FAF7F0] border border-[#E5DEC9] flex items-center justify-center text-[#111827] text-lg font-bold shrink-0">
                <User className="w-7 h-7 text-[#C5A059]" />
              </div>
              <div>
                <div className="font-bold text-base text-[#111827]">
                  {post.author}
                </div>
                <div className="text-xs text-[#997836] mt-0.5 font-bold">
                  {post.authorRole} • Ban Cố vấn SAIGONLEX
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-10 rounded-sm border border-[#E5DEC9] bg-white shadow-md text-center space-y-4">
              <h3 className="text-2xl font-bold text-[#0F172A]">
                Cần Thẩm định Chuyên sâu về Tình huống của Bạn?
              </h3>
              <p className="text-sm text-[#202124] max-w-lg mx-auto leading-[1.7]">
                Đăng ký hội đàm cơ mật với nhóm luật sư chuyên trách để được rà soát hồ sơ và bảo mật thông tin tuyệt đối.
              </p>
              <div className="pt-2">
                <Link
                  href="/mau-2/lien-he"
                  className="inline-flex items-center gap-2 bg-[#17365D] hover:bg-[#0f2746] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm shadow transition group"
                >
                  <span className="text-[#EBD59B]">Đặt lịch thỉnh ý kín</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EBD59B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Related */}
            <div className="pt-10 border-t border-[#E5DEC9] space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#0F172A]">
                Ấn phẩm Liên quan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/mau-2/tin-tuc/${rel.slug}`}
                    className="p-5 rounded-sm border border-[#E5DEC9] bg-white hover:border-[#C5A059] hover:shadow-lg transition flex flex-col justify-between space-y-3 shadow-sm"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#C5A059] uppercase font-semibold">
                        {rel.category}
                      </span>
                      <h4 className="font-serif text-base font-bold text-[#111827] line-clamp-2 mt-1">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="text-xs font-semibold text-[#17365D] flex items-center gap-1">
                      <span>Đọc bài</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMau2 />
    </div>
  );
}
