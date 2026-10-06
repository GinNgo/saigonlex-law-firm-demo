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
    <div className="min-h-screen flex flex-col bg-[#090E17] text-[#FAF8F5]">
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
        <section className="py-20 bg-[#05080E] border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 2", href: "/mau-2" },
                { label: "Ấn phẩm", href: "/mau-2/tin-tuc" },
                { label: post.category }
              ]}
              theme="dark"
            />

            <div className="space-y-4 pt-4">
              <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest border border-amber-500/30 px-3 py-1 rounded bg-black/40 inline-block">
                {post.category}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5] leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-sans font-light pt-2 border-t border-white/5">
                <span className="text-[#D4AF37] font-serif font-medium">{post.author} ({post.authorRole})</span>
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
          <div className="relative aspect-[16/9] w-full rounded overflow-hidden border border-amber-500/30 shadow-2xl bg-[#05080E]">
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
        <section className="py-20 bg-[#090E17]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Table of contents */}
            <div className="p-6 rounded border border-amber-500/20 bg-[#101826]">
              <div className="font-serif font-bold text-sm text-[#D4AF37] mb-3 flex items-center gap-2">
                <List className="w-4 h-4 text-[#D4AF37]" />
                <span>MỤC LỤC CHUYÊN KHẢO</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm font-sans font-light">
                {post.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a
                      href={`#${toc.id}`}
                      className="text-slate-300 hover:text-[#D4AF37] flex items-center gap-2 transition"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{toc.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content html with luxury styling */}
            <div
              className="prose prose-invert prose-amber max-w-none text-sm sm:text-base leading-relaxed text-slate-300 font-sans font-light"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Disclaimer */}
            <div className="p-6 rounded border border-amber-900/40 bg-[#0A101D] text-xs text-amber-200/90 leading-relaxed space-y-2 font-light">
              <div className="font-serif font-bold text-[#D4AF37] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />
                <span>Khuyến cáo Về Giá trị Áp dụng Pháp lý:</span>
              </div>
              <p>
                Ấn phẩm nghiên cứu được biên soạn nhằm phục vụ góc nhìn tham khảo học thuật và không cấu thành lời tư vấn pháp lý chính thức đối với bất kỳ vụ việc cụ thể nào. Quý thân chủ vui lòng liên hệ trực tiếp luật sư thụ lý để được thẩm định chuyên sâu.
              </p>
            </div>

            {/* Author */}
            <div className="p-6 rounded border border-white/10 bg-[#101826] flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#1A2639] border border-amber-500/30 flex items-center justify-center text-[#D4AF37] font-serif text-lg font-bold shrink-0">
                <User className="w-7 h-7" />
              </div>
              <div>
                <div className="font-serif font-bold text-base text-[#FAF8F5]">
                  {post.author}
                </div>
                <div className="text-xs text-[#D4AF37] mt-0.5 font-serif">
                  {post.authorRole} • Ban Cố vấn SAIGONLEX
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-10 rounded border border-amber-500/30 bg-[#0F1726] text-center space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#FAF8F5]">
                Cần Thẩm định Chuyên sâu về Tình huống của Bạn?
              </h3>
              <p className="text-xs text-slate-400 font-sans font-light max-w-lg mx-auto leading-relaxed">
                Đăng ký hội đàm cơ mật với nhóm luật sư chuyên trách để được rà soát hồ sơ và bảo mật thông tin tuyệt đối.
              </p>
              <div className="pt-2">
                <Link
                  href="/mau-2/lien-he"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b59227] text-slate-950 font-serif font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition"
                >
                  <span>Đặt lịch thỉnh ý kín</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Related */}
            <div className="pt-10 border-t border-white/5 space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#FAF8F5]">
                Ấn phẩm Liên quan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/mau-2/tin-tuc/${rel.slug}`}
                    className="p-5 rounded border border-white/10 bg-[#101826] hover:border-[#D4AF37] transition flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#D4AF37] uppercase">
                        {rel.category}
                      </span>
                      <h4 className="font-serif text-base font-bold text-[#FAF8F5] line-clamp-2 mt-1">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="text-xs font-serif text-slate-400 flex items-center gap-1">
                      <span>Đọc bài</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
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
