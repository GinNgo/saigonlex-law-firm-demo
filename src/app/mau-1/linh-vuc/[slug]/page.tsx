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
import { ConsultationFormMau1 } from "@/components/mau-1/ConsultationFormMau1";
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
  Clock,
  Shield,
  PhoneCall
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
  if (!svc) return { title: "Dịch vụ không tồn tại" };

  return {
    title: `${svc.title} | SAIGONLEX`,
    description: svc.shortDesc,
    openGraph: {
      title: `${svc.title} | SAIGONLEX`,
      description: svc.shortDesc,
      images: [{ url: svc.image }]
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const svc = PRACTICE_AREAS.find((s) => s.slug === slug);

  if (!svc) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-1" },
            { name: "Lĩnh vực hoạt động", url: "https://saigonlex-demo.vercel.app/mau-1/linh-vuc" },
            { name: svc.shortTitle, url: `https://saigonlex-demo.vercel.app/mau-1/linh-vuc/${svc.slug}` }
          ]
        }}
      />
      <JsonLd type="FAQPage" data={{ faqs: svc.faqs }} />
      <HeaderMau1 />

      <main className="flex-1">
        {/* Banner with H1 and Image */}
        <section className="bg-slate-900 text-white py-16 border-b border-slate-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 1", href: "/mau-1" },
                { label: "Lĩnh vực", href: "/mau-1/linh-vuc" },
                { label: svc.shortTitle }
              ]}
              theme="dark"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#C5A880] uppercase tracking-widest block">
                  CHUYÊN MỤC: {svc.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {svc.title}
                </h1>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {svc.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {svc.highlights.map((hl, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-amber-300 text-xs px-3 py-1 rounded border border-white/10"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border-4 border-white/20 shadow-2xl">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body: Overview, Issues, Scope */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content (8 cols) */}
              <div className="lg:col-span-8 space-y-12">
                {/* 1. Tổng quan lĩnh vực */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0A2540] border-b border-slate-200 pb-3">
                    1. Tổng quan & Bối cảnh Pháp lý
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {svc.overview}
                  </p>
                </div>

                {/* 2. Các vấn đề thường gặp */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0A2540] border-b border-slate-200 pb-3">
                    2. Các Vấn đề & Rủi ro Thường gặp
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {svc.commonIssues.map((issue, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5"
                      >
                        <div className="flex items-center gap-2 font-bold text-sm text-amber-950">
                          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>{issue.title}</span>
                        </div>
                        <p className="text-xs text-amber-900 leading-relaxed pl-6">
                          {issue.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Phạm vi hỗ trợ của SAIGONLEX */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0A2540] border-b border-slate-200 pb-3">
                    3. Phạm vi Dịch vụ Hỗ trợ của SAIGONLEX
                  </h2>
                  <ul className="space-y-3">
                    {svc.serviceScope.map((scope, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-lg border border-slate-100 bg-slate-50 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Quy trình tiếp nhận */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0A2540] border-b border-slate-200 pb-3">
                    4. Quy trình Tiếp nhận & Xử lý Vụ việc
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {svc.processSteps.map((st) => (
                      <div
                        key={st.step}
                        className="p-5 rounded-xl border border-slate-200 bg-white corporate-card-shadow space-y-2"
                      >
                        <span className="w-7 h-7 rounded-full bg-[#0A2540] text-white text-xs font-bold flex items-center justify-center">
                          {st.step}
                        </span>
                        <h4 className="text-sm font-bold text-[#0A2540]">{st.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. FAQ chi tiết */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0A2540] border-b border-slate-200 pb-3">
                    5. Câu hỏi Thường gặp về {svc.shortTitle}
                  </h2>
                  <div className="space-y-3">
                    {svc.faqs.map((f, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2"
                      >
                        <h4 className="text-sm font-bold text-[#0A2540] flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
                          <span>{f.question}</span>
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed pl-6">
                          {f.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Right (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                {/* Quick Consultation Booking Card */}
                <div className="bg-[#0A2540] text-white p-6 rounded-2xl space-y-4 shadow-xl sticky top-24">
                  <div className="flex items-center gap-2 text-xs text-[#C5A880] font-bold uppercase tracking-wider">
                    <Shield className="w-4 h-4" />
                    <span>HỖ TRỢ PHÁP LÝ NHANH</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Cần giải đáp ngay về {svc.shortTitle}?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Liên hệ với luật sư phụ trách lĩnh vực để được tiếp nhận hồ sơ và tư vấn sơ bộ trong 24h làm việc.
                  </p>

                  <div className="pt-2 space-y-2">
                    <a
                      href={`tel:${SITE_CONFIG.hotline.replace(/[^0-9]/g, "")}`}
                      className="w-full bg-[#C5A880] hover:bg-[#b39266] text-slate-950 font-bold py-3 px-4 rounded-lg text-xs flex items-center justify-center gap-2 transition"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Gọi ngay {SITE_CONFIG.hotline}</span>
                    </a>

                    <a
                      href="#dat-lich-tu-van"
                      className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2 transition border border-white/20"
                    >
                      <span>Để lại thông tin tư vấn</span>
                    </a>
                  </div>

                  <div className="pt-3 border-t border-slate-700 text-[11px] text-slate-400 space-y-1">
                    <div>✓ Cam kết ký thỏa thuận bảo mật (NDA)</div>
                    <div>✓ Luật sư chuyên trách từng lĩnh vực</div>
                    <div>✓ Minh bạch thù lao trọn gói</div>
                  </div>
                </div>

                {/* Other services list */}
                <div className="border border-slate-200 rounded-xl p-5 bg-white space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Các lĩnh vực khác:
                  </h4>
                  <ul className="space-y-1.5 text-xs">
                    {PRACTICE_AREAS.filter((s) => s.slug !== svc.slug).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/mau-1/linh-vuc/${s.slug}`}
                          className="py-1.5 px-2 rounded hover:bg-slate-50 text-slate-700 hover:text-[#0A2540] flex items-center justify-between transition"
                        >
                          <span>{s.shortTitle}</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Đặt lịch tư vấn */}
        <div id="dat-lich-tu-van">
          <ConsultationFormMau1 />
        </div>
      </main>

      <FooterMau1 />
    </div>
  );
}
