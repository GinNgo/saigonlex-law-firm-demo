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
import { NEWS_ARTICLES_MAU3 } from "@/data/mau3Data";
import { Calendar, User, ArrowRight, Share2, PhoneCall } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return NEWS_ARTICLES_MAU3.map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = NEWS_ARTICLES_MAU3.find((p) => p.slug === slug);
  if (!item) return { title: "Không tìm thấy tin tức" };

  return {
    title: `${item.title} | Bản tin SaigonLex`,
    description: item.excerpt
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = NEWS_ARTICLES_MAU3.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  const otherNews = NEWS_ARTICLES_MAU3.filter((p) => p.slug !== slug);

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
            { name: "Tin tức", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/tin-tuc" },
            { name: item.title, url: `https://saigonlex-law-firm-demo.vercel.app/mau-3/tin-tuc/${item.slug}` }
          ]
        }}
      />
      <HeaderMau3 />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--bg-dark)] to-[var(--color-primary)] text-white py-12 lg:py-14 border-b border-[var(--color-border)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu C", href: "/mau-3" },
                { label: "Tin tức", href: "/mau-3/tin-tuc" },
                { label: item.category }
              ]}
              theme="dark"
            />
            <div className="mt-4">
              <span className="px-3 py-1 rounded bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider inline-block mb-3">
                {item.category}
              </span>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                {item.title}
              </h1>
              <div className="flex items-center gap-4 text-xs text-[#D1D5DB] mt-4 pt-4 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  Ngày đăng: {item.publishDate}
                </span>
                <span>•</span>
                <span>{item.author}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <section className="py-12 sm:py-16 bg-[var(--bg-section)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-[var(--color-border)] mb-8">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>

            {/* Lead text */}
            <p className="text-base sm:text-lg font-medium text-[var(--color-primary)] leading-relaxed mb-6 font-heading">
              {item.excerpt}
            </p>

            {/* Content HTML */}
            <div
              className="prose prose-slate max-w-none text-[var(--color-text)] text-sm sm:text-base leading-relaxed space-y-4 font-body"
              dangerouslySetInnerHTML={{ __html: item.contentHtml }}
            />

            {/* Other News */}
            <div className="mt-14 pt-10 border-t border-[var(--color-border)]">
              <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] mb-6">
                Bản Tin Khác
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {otherNews.slice(0, 3).map((n) => (
                  <div
                    key={n.id}
                    className="bg-[var(--bg-section-alt)] rounded-xl p-4 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
                  >
                    <span className="text-[10px] font-bold text-[var(--color-accent)] block mb-1">
                      {n.category}
                    </span>
                    <h4 className="font-heading text-xs font-bold text-[var(--color-primary)] hover:underline line-clamp-2 mb-2">
                      <Link href={`/mau-3/tin-tuc/${n.slug}`}>{n.title}</Link>
                    </h4>
                    <span className="text-[10px] text-[var(--color-text-muted)]">{n.publishDate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMau3 />
    </TemplatePageWrapper>
  );
}
