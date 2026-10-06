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
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#111827]">
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
        <section className="py-20 bg-[#FAF7F0] border-b border-[#E5DEC9] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu B", href: "/mau-2" },
                { label: "Lĩnh vực", href: "/mau-2/linh-vuc" },
                { label: svc.shortTitle }
              ]}
              theme="editorial"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs uppercase tracking-wider text-[#997836] block font-semibold">
                  ĐẶC TẢ CHUYÊN MÔN: {svc.category}
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
                  {svc.title}
                </h1>
                <p className="text-[#202124] text-sm sm:text-base leading-[1.7]">
                  {svc.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {svc.highlights.map((hl, i) => (
                    <span
                      key={i}
                      className="text-xs text-[#111827] border border-[#E5DEC9] bg-white px-3 py-1 rounded-sm shadow-sm font-medium"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-sm overflow-hidden aspect-[16/10] border border-[#E5DEC9] shadow-xl">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body: Overview, Issues, Scope, Process, FAQ */}
        <section className="py-20 bg-[#FDFBF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Main Content (8 cols) */}
              <div className="lg:col-span-8 space-y-14">
                {/* 1. Tổng quan */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0F172A] border-b border-[#E5DEC9] pb-3">
                    I. Bối cảnh & Mục tiêu Chiến lược
                  </h2>
                  <p className="text-[#202124] text-sm sm:text-base leading-[1.7]">
                    {svc.overview}
                  </p>
                </div>

                {/* 2. Các rủi ro tiềm ẩn */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0F172A] border-b border-[#E5DEC9] pb-3">
                    II. Những Rủi ro Trọng yếu Cần Kiểm soát
                  </h2>
                  <div className="space-y-4">
                    {svc.commonIssues.map((issue, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-sm border border-[#E5DEC9] bg-white space-y-2 shadow-sm"
                      >
                        <div className="font-bold text-base text-[#111827] flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                          <span>{issue.title}</span>
                        </div>
                        <p className="text-xs sm:text-[13px] text-[#202124] leading-[1.7] pl-6">
                          {issue.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Phạm vi can thiệp */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0F172A] border-b border-[#E5DEC9] pb-3">
                    III. Phạm vi Cố vấn Chuyên môn
                  </h2>
                  <div className="space-y-3">
                    {svc.serviceScope.map((scope, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-sm border border-[#E5DEC9] bg-white flex items-start gap-3 text-xs sm:text-sm text-[#202124] leading-[1.7] shadow-sm font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{scope}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Quy trình xử lý */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0F172A] border-b border-[#E5DEC9] pb-3">
                    IV. Lộ trình Thực thi Chuẩn hóa
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {svc.processSteps.map((st) => (
                      <div
                        key={st.step}
                        className="p-6 rounded-sm border border-[#E5DEC9] bg-white space-y-2 shadow-sm"
                      >
                        <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider block font-bold">
                          BƯỚC 0{st.step}
                        </span>
                        <h4 className="font-bold text-base text-[#111827]">{st.title}</h4>
                        <p className="text-xs sm:text-[13px] text-[#202124] leading-[1.7]">{st.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. FAQ */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0F172A] border-b border-[#E5DEC9] pb-3">
                    V. Giải đáp về {svc.shortTitle}
                  </h2>
                  <div className="space-y-3">
                    {svc.faqs.map((f, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-sm border border-[#E5DEC9] bg-white space-y-2 shadow-sm"
                      >
                        <h4 className="font-bold text-sm text-[#111827] flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                          <span>{f.question}</span>
                        </h4>
                        <p className="text-xs sm:text-[13px] text-[#202124] leading-[1.7] pl-6">
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
                <div className="p-6 rounded-sm border border-[#E5DEC9] bg-white space-y-4 sticky top-24 shadow-xl">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#997836] block font-bold">
                    ĐẶC QUYỀN THÂN CHỦ
                  </span>
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    Thỉnh ý Luật sư Trưởng về {svc.shortTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#202124] leading-[1.7]">
                    Sắp xếp buổi hội đàm trực tiếp cơ mật cùng Luật sư Thành viên phụ trách trong 24 giờ.
                  </p>

                  <div className="pt-2">
                    <a
                      href="#dat-lich-kin"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#17365D] hover:bg-[#0f2746] text-white font-semibold text-xs uppercase tracking-wider transition group shadow"
                    >
                      <span className="text-[#EBD59B]">Yêu cầu hội đàm kín</span>
                      <ArrowUpRight className="w-4 h-4 text-[#EBD59B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  <div className="pt-3 border-t border-[#E5DEC9] text-xs text-[#4B5563] space-y-1.5">
                    <div className="flex items-center gap-2 text-[#997836] font-semibold">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Ký NDA trước khi nhận hồ sơ</span>
                    </div>
                    <div>✓ Minh bạch chi phí trọn gói</div>
                    <div>✓ Luật sư Partner trực tiếp chủ trì</div>
                  </div>
                </div>

                {/* Other Services */}
                <div className="p-6 rounded-sm border border-[#E5DEC9] bg-[#FAF7F0] space-y-3">
                  <h4 className="font-serif text-xs uppercase tracking-widest text-[#0C1829] font-semibold">
                    Lĩnh vực liên quan:
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {PRACTICE_AREAS.filter((s) => s.slug !== svc.slug).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/mau-2/linh-vuc/${s.slug}`}
                          className="py-1.5 px-2.5 rounded-sm hover:bg-white text-slate-600 hover:text-[#0C1829] flex items-center justify-between transition border border-transparent hover:border-[#E5DEC9]"
                        >
                          <span>{s.shortTitle}</span>
                          <ArrowUpRight className="w-3 h-3 text-[#C5A059]" />
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
