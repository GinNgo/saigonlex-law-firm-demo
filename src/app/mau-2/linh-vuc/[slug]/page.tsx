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
import { ConciergeBookingMau2 } from "@/components/mau-2/ConciergeBookingMau2";
import {
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  HelpCircle,
  Lock,
  Scale
} from "lucide-react";
import { PRACTICE_AREAS } from "@/data/services";
import { SITE_CONFIG } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRACTICE_AREAS.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const svc = PRACTICE_AREAS.find((s) => s.slug === slug);
  if (!svc) return { title: "Lĩnh vực không tồn tại" };

  return {
    title: `${svc.title} | SAIGONLEX Premium`,
    description: svc.shortDesc,
    openGraph: {
      title: `${svc.title} | SAIGONLEX Premium`,
      description: svc.shortDesc,
      images: [{ url: svc.image }]
    }
  };
}

export default async function ServiceDetailMau2Page({ params }: PageProps) {
  const { slug } = await params;
  const svc = PRACTICE_AREAS.find((s) => s.slug === slug);

  if (!svc) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#090E17] text-[#FAF8F5]">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-2" },
            { name: "Lĩnh vực", url: "https://saigonlex-demo.vercel.app/mau-2/linh-vuc" },
            { name: svc.shortTitle, url: `https://saigonlex-demo.vercel.app/mau-2/linh-vuc/${svc.slug}` }
          ]
        }}
      />
      <JsonLd type="FAQPage" data={{ faqs: svc.faqs }} />
      <HeaderMau2 />

      <main className="flex-1">
        {/* Banner with H1 and Image */}
        <section className="py-20 bg-[#05080E] border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 2", href: "/mau-2" },
                { label: "Lĩnh vực", href: "/mau-2/linh-vuc" },
                { label: svc.shortTitle }
              ]}
              theme="dark"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
              <div className="lg:col-span-7 space-y-4">
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#D4AF37] block">
                  ĐẶC TẢ CHUYÊN MÔN: {svc.category}
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF8F5] leading-tight">
                  {svc.title}
                </h1>
                <p className="text-slate-300 font-sans text-sm sm:text-base font-light leading-relaxed">
                  {svc.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {svc.highlights.map((hl, i) => (
                    <span
                      key={i}
                      className="text-xs font-serif text-[#D4AF37] border border-amber-500/30 bg-black/40 px-3 py-1 rounded"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded overflow-hidden aspect-[16/10] border border-amber-500/30 shadow-2xl">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080E]/80 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body: Overview, Issues, Scope, Process, FAQ */}
        <section className="py-20 bg-[#090E17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Main Content (8 cols) */}
              <div className="lg:col-span-8 space-y-14">
                {/* 1. Tổng quan */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-bold text-[#FAF8F5] border-b border-white/10 pb-3">
                    I. Bối cảnh & Mục tiêu Chiến lược
                  </h2>
                  <p className="text-slate-300 font-sans text-sm sm:text-base font-light leading-relaxed">
                    {svc.overview}
                  </p>
                </div>

                {/* 2. Các rủi ro tiềm ẩn */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-bold text-[#FAF8F5] border-b border-white/10 pb-3">
                    II. Những Rủi ro Trọng yếu Cần Kiểm soát
                  </h2>
                  <div className="space-y-4">
                    {svc.commonIssues.map((issue, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded border border-amber-500/20 bg-[#101826] space-y-2"
                      >
                        <div className="font-serif font-bold text-base text-[#F3E5AB] flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <span>{issue.title}</span>
                        </div>
                        <p className="text-xs text-slate-300 font-sans font-light leading-relaxed pl-6">
                          {issue.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Phạm vi can thiệp */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-bold text-[#FAF8F5] border-b border-white/10 pb-3">
                    III. Phạm vi Cố vấn Chuyên môn
                  </h2>
                  <div className="space-y-3">
                    {svc.serviceScope.map((scope, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded border border-white/5 bg-[#101826] flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{scope}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Quy trình xử lý */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-bold text-[#FAF8F5] border-b border-white/10 pb-3">
                    IV. Lộ trình Thực thi Chuẩn hóa
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {svc.processSteps.map((st) => (
                      <div
                        key={st.step}
                        className="p-6 rounded border border-white/10 bg-[#101826] space-y-2"
                      >
                        <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest block">
                          BƯỚC 0{st.step}
                        </span>
                        <h4 className="font-serif font-bold text-base text-[#FAF8F5]">{st.title}</h4>
                        <p className="text-xs text-slate-400 font-sans font-light leading-relaxed">{st.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. FAQ */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-bold text-[#FAF8F5] border-b border-white/10 pb-3">
                    V. Giải đáp về {svc.shortTitle}
                  </h2>
                  <div className="space-y-3">
                    {svc.faqs.map((f, i) => (
                      <div
                        key={i}
                        className="p-6 rounded border border-white/10 bg-[#101826] space-y-2"
                      >
                        <h4 className="font-serif font-bold text-sm text-[#F3E5AB] flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <span>{f.question}</span>
                        </h4>
                        <p className="text-xs text-slate-300 font-sans font-light leading-relaxed pl-6">
                          {f.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Right (4 cols) */}
              <div className="lg:col-span-4 space-y-8">
                {/* Concierge Widget */}
                <div className="p-6 rounded border border-amber-500/30 bg-[#101826] space-y-4 sticky top-24 shadow-2xl">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] block">
                    ĐẶC QUYỀN THÂN CHỦ
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#FAF8F5]">
                    Thỉnh ý Luật sư Trưởng về {svc.shortTitle}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans font-light leading-relaxed">
                    Sắp xếp buổi hội đàm trực tiếp cơ mật cùng Luật sư Thành viên phụ trách trong 24 giờ.
                  </p>

                  <div className="pt-2">
                    <a
                      href="#dat-lich-kin"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#D4AF37] hover:bg-[#b59227] text-slate-950 font-serif font-bold text-xs uppercase tracking-wider transition"
                    >
                      <span>Yêu cầu hội đàm kín</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 font-sans font-light space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-300/80">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Ký NDA trước khi nhận hồ sơ</span>
                    </div>
                    <div>✓ Minh bạch chi phí trọn gói</div>
                    <div>✓ Luật sư Partner trực tiếp chủ trì</div>
                  </div>
                </div>

                {/* Other Services */}
                <div className="p-6 rounded border border-white/5 bg-[#0F1726] space-y-3">
                  <h4 className="font-serif text-xs uppercase tracking-widest text-slate-400">
                    Lĩnh vực liên quan:
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {PRACTICE_AREAS.filter((s) => s.slug !== svc.slug).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/mau-2/linh-vuc/${s.slug}`}
                          className="py-1 px-2 rounded hover:bg-white/5 text-slate-400 hover:text-[#D4AF37] flex items-center justify-between transition"
                        >
                          <span>{s.shortTitle}</span>
                          <ArrowUpRight className="w-3 h-3 text-slate-600" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Đặt lịch tư vấn kín */}
        <div id="dat-lich-kin">
          <ConciergeBookingMau2 />
        </div>
      </main>

      <FooterMau2 />
    </div>
  );
}
