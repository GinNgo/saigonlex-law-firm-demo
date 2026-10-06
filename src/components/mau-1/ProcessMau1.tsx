"use client";

import React from "react";
import { MessageSquareText, FileSearch, FileSignature, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Motion";

export function ProcessMau1() {
  const steps = [
    {
      step: "01",
      title: "Tiếp nhận & Ký kết NDA",
      desc: "Lắng nghe vụ việc từ khách hàng, tiếp nhận hồ sơ sơ bộ và chủ động ký Thỏa thuận bảo mật thông tin (NDA) nhằm bảo vệ quyền lợi thân chủ.",
      icon: <MessageSquareText className="w-6 h-6 text-[#C5A880]" />
    },
    {
      step: "02",
      title: "Nghiên cứu & Báo cáo sơ bộ",
      desc: "Luật sư phân tích văn bản pháp quy, đối chiếu thực tiễn xét xử và gửi Thư tư vấn sơ bộ (Preliminary Advice) trong vòng 24 giờ làm việc.",
      icon: <FileSearch className="w-6 h-6 text-[#C5A880]" />
    },
    {
      step: "03",
      title: "Thỏa thuận Dịch vụ Pháp lý",
      desc: "Ký kết Hợp đồng dịch vụ pháp lý chính thức. Báo giá trọn gói minh bạch, cam kết phạm vi công việc và điều khoản trách nhiệm rõ ràng.",
      icon: <FileSignature className="w-6 h-6 text-[#C5A880]" />
    },
    {
      step: "04",
      title: "Triển khai & Báo cáo Tiến độ",
      desc: "Luật sư chủ nhiệm trực tiếp thực hiện, báo cáo cập nhật tiến độ định kỳ hàng tuần cho thân chủ đến khi giải quyết dứt điểm vụ việc.",
      icon: <CheckCircle2 className="w-6 h-6 text-[#C5A880]" />
    }
  ];

  return (
    <section className="py-20 bg-[var(--bg-section)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-[var(--color-accent)]" />
              <span>QUY TRÌNH LÀM VIỆC CHUẨN MỰC</span>
              <span className="w-6 h-0.5 bg-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              4 Bước Tư vấn Pháp lý Chuẩn hóa
            </h2>
            <p className="text-[#202124] text-[15px] sm:text-[16px] leading-[1.7]">
              Mỗi khách hàng đến với SAIGONLEX đều được áp dụng quy trình tiếp nhận và xử lý hồ sơ khoa học, bảo mật và chuẩn xác theo quy chuẩn nghề nghiệp.
            </p>
          </div>
        </FadeIn>

        {/* 4 Steps Grid with connecting line */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" staggerDelay={0.12}>
          {steps.map((item, idx) => (
            <StaggerItem key={idx}>
              <div
                className="relative p-6 rounded-xl border border-[var(--color-border)] bg-[var(--surface)] corporate-card-shadow hover:corporate-card-shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--bg-section-alt)] text-[var(--color-primary)] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-black text-slate-300 tracking-wider font-mono">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#111827] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--color-border)] flex items-center gap-1.5 text-[11px] font-semibold text-[var(--color-primary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span>Cam kết chuẩn mực & Đúng hạn</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
