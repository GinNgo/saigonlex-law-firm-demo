import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau3 } from "@/components/mau-3/HeaderMau3";
import { FooterMau3 } from "@/components/mau-3/FooterMau3";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";
import { CoreValuesMau3 } from "@/components/mau-3/CoreValuesMau3";
import { CredentialsMau3 } from "@/components/mau-3/CredentialsMau3";
import { WhyChooseUsMau3 } from "@/components/mau-3/WhyChooseUsMau3";
import {
  Scale,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Giới Thiệu Hãng Luật SaigonLex | Classic Modern Premium",
  description:
    "Tìm hiểu lịch sử, sứ mệnh, triết lý Tận Tâm – Linh Hoạt – Đúng Pháp Luật và cam kết đạo đức nghề nghiệp của Công ty Luật SaigonLex tại TP. Hồ Chí Minh."
};

export default function AboutMau3Page() {
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
            { name: "Giới thiệu", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/gioi-thieu" }
          ]
        }}
      />
      <HeaderMau3 />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--bg-dark)] to-[var(--color-primary)] text-white py-14 lg:py-16 border-b border-[var(--color-border)] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu C", href: "/mau-3" },
                { label: "Giới thiệu về SaigonLex" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl mt-4 space-y-3">
              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest block">
                VỀ HÃNG LUẬT SAIGONLEX • ĐOÀN LUẬT SƯ TP.HCM
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Tận Tâm Đồng Hành – Vững Bước Tương Lai
              </h1>
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed font-body">
                SaigonLex là điểm tựa pháp lý vững chắc cho cộng đồng doanh nghiệp và cá nhân,
                kết hợp kiến thức pháp luật chuyên sâu với sự thấu hiểu thực tiễn quản trị và đời sống xã hội.
              </p>
            </div>
          </div>
        </section>

        {/* Story & Heritage Section */}
        <section className="py-16 sm:py-20 bg-[var(--bg-section)] border-b border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-[var(--color-border)]">
                  <Image
                    src="/images/about-firm.png"
                    alt="Văn phòng làm việc Công ty Luật SaigonLex"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden sm:block w-48 aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-white">
                  <Image
                    src="/images/architecture-interior.png"
                    alt="Phòng họp luật sư"
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider">
                  <Scale className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>SỨ MỆNH & TẦM NHÌN</span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-primary)] leading-tight">
                  Xây Dựng Văn Hóa Pháp Lý Minh Bạch & Thực Chất
                </h2>

                <p className="text-sm sm:text-base text-[var(--color-text)] leading-relaxed">
                  Được thành lập tại trung tâm kinh tế sôi động TP. Hồ Chí Minh, SaigonLex ra đời với niềm
                  tin rằng dịch vụ pháp lý đích thực phải xuất phát từ sự lắng nghe chân thành và nỗ lực
                  tìm kiếm phương án an toàn nhất cho khách hàng.
                </p>

                <p className="text-sm sm:text-base text-[var(--color-text)] leading-relaxed">
                  Chúng tôi không tiếp cận vụ việc như một giao dịch thương mại đơn thuần. Mỗi vụ việc
                  là một bài toán pháp lý đòi hỏi tính cẩn trọng cao nhất, từ việc thẩm định kỹ lưỡng
                  từng điều khoản hợp đồng đến việc xây dựng chiến lược tranh tụng chặt chẽ tại Tòa án.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
                  <div className="p-4 rounded-xl bg-[var(--bg-section-alt)] border border-[var(--color-border)]">
                    <div className="font-heading text-2xl font-bold text-[var(--color-primary)] mb-1">100%</div>
                    <div className="text-xs text-[var(--color-text-muted)]">Luật sư có Thẻ hành nghề chính thức</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-section-alt)] border border-[var(--color-border)]">
                    <div className="font-heading text-2xl font-bold text-[var(--color-accent)] mb-1">24/7</div>
                    <div className="text-xs text-[var(--color-text-muted)]">Tiếp nhận yêu cầu pháp lý khẩn cấp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <CoreValuesMau3 />

        {/* Why Choose Us */}
        <WhyChooseUsMau3 />

        {/* Credentials */}
        <CredentialsMau3 />

        {/* Contact CTA */}
        <section className="py-16 bg-[var(--bg-section-alt)] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mb-4">
              Sẵn Sàng Trao Đổi Cùng Luật Sư SaigonLex?
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
              Hãy liên hệ với chúng tôi để được tư vấn sơ bộ về tình trạng pháp lý và phương án xử lý
              tối ưu nhất cho vụ việc của bạn.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/mau-3/lien-he"
                className="px-6 py-3 rounded-md bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition-colors shadow"
              >
                Đặt Lịch Hẹn Tư Vấn
              </Link>
              <Link
                href="/mau-3/doi-ngu"
                className="px-6 py-3 rounded-md bg-[var(--surface)] border border-[var(--color-border)] text-[var(--color-primary)] font-medium hover:bg-[var(--bg-section)] transition-colors"
              >
                Tìm Hiểu Đội Ngũ Luật Sư
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterMau3 />
    </TemplatePageWrapper>
  );
}
