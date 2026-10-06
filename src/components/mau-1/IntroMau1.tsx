import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, ShieldCheck, Target, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Motion";

export function IntroMau1() {
  return (
    <section className="py-20 bg-[var(--bg-section)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Grid */}
          <FadeIn direction="right" className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-[var(--color-border)] aspect-[4/3] group">
              <Image
                src="/images/about-firm.png"
                alt="Khu vực sảnh lễ tân sang trọng và hiện đại của công ty luật SAIGONLEX"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div className="hidden sm:block absolute -bottom-10 -right-6 w-3/5 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--surface)] z-20 group">
              <Image
                src="/images/desk-contract-1.png"
                alt="Hợp đồng pháp lý và bút ký tại bàn làm việc luật sư SAIGONLEX"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="30vw"
              />
            </div>

            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--bg-section-alt)] rounded-full -z-10" />
          </FadeIn>

          {/* Text Content */}
          <FadeIn direction="left" className="lg:col-span-7 space-y-6 lg:pl-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-[var(--color-accent)]" />
              <span>VỀ CHÚNG TÔI – SAIGONLEX</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight">
              Đồng hành pháp lý chiến lược, bảo vệ tối đa lợi ích của thân chủ
            </h2>

            <p className="text-[#202124] leading-[1.7] text-[15px] sm:text-[16px]">
              Được thành lập bởi đội ngũ luật sư giàu kinh nghiệm thực chiến từ các tổ chức tư vấn quốc tế và cơ quan tư pháp, <strong>SAIGONLEX</strong> định vị là hãng luật cung cấp dịch vụ pháp lý chuẩn mực, chuyên sâu và tận tâm tại Việt Nam.
            </p>

            <p className="text-[#202124] leading-[1.7] text-[15px] sm:text-[16px]">
              Chúng tôi không chỉ trả lời câu hỏi <em>“Pháp luật quy định như thế nào?”</em> mà luôn nỗ lực giải đáp <em>“Đâu là giải pháp tối ưu và an toàn nhất cho bài toán kinh doanh của khách hàng?”</em>. Mỗi ý kiến tư vấn đều được xây dựng dựa trên sự thấu hiểu môi trường kinh doanh nội địa và tiêu chuẩn quản trị rủi ro quốc tế.
            </p>

            {/* Value Pillars */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <StaggerItem className="border border-[var(--color-border)] p-4 rounded-xl hover:border-[var(--color-primary)] hover:shadow-md transition bg-[var(--bg-section-alt)]">
                <div className="w-8 h-8 rounded-lg bg-[var(--bg-soft)] text-[var(--color-primary)] flex items-center justify-center mb-2">
                  <Scale className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-sm font-semibold text-[#111827] mb-1">Thượng tôn Pháp luật</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">Mọi giải pháp đều đảm bảo tính hợp pháp, bền vững và chống chịu rủi ro lâu dài.</p>
              </StaggerItem>

              <StaggerItem className="border border-[var(--color-border)] p-4 rounded-xl hover:border-[var(--color-primary)] hover:shadow-md transition bg-[var(--bg-section-alt)]">
                <div className="w-8 h-8 rounded-lg bg-[var(--bg-soft)] text-[var(--color-accent)] flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-sm font-semibold text-[#111827] mb-1">Bảo mật Nghiêm ngặt</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">Thông tin vụ việc và chiến lược của thân chủ là tài sản vô giá cần được bảo vệ tuyệt đối.</p>
              </StaggerItem>
            </StaggerContainer>

            <div className="pt-2">
              <Link
                href="/mau-1/gioi-thieu"
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-semibold text-sm inline-flex items-center gap-1.5 group hover:underline"
              >
                <span>Xem thêm chi tiết lịch sử và sứ mệnh SAIGONLEX</span>
                <ArrowRight className="w-4 h-4 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
