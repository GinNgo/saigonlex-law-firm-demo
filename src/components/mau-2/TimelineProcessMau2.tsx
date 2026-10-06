"use client";

import React, { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { FadeIn } from "@/components/common/Motion";

export function TimelineProcessMau2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"]
  });

  const steps = [
    {
      number: "I",
      title: "Hội đàm Khởi đầu & Xác lập Thỏa thuận Bảo mật",
      timeline: "Ngày 01",
      desc: "Luật sư thành viên trực tiếp tiếp đón thân chủ tại phòng hội nghị kín. Ký kết NDA ngay trước khi tiếp cận bất kỳ tài liệu hay chiến lược nhạy cảm nào.",
      focus: "Đặc quyền Luật sư - Thân chủ được kích hoạt tuyệt đối"
    },
    {
      number: "II",
      title: "Nghiên cứu Pháp lý & Thiết kế Phương án Đa tầng",
      timeline: "Ngày 02 – 03",
      desc: "Soát xét văn bản pháp luật, rà soát án lệ tương tự và lập ma trận rủi ro. Đưa ra tối thiểu 02 kịch bản xử lý: giải pháp thương lượng hòa bình và phương án tố tụng quyết liệt.",
      focus: "Báo cáo phân tích Legal Strategy Memorandum"
    },
    {
      number: "III",
      title: "Chỉ định Ban Luật sư Chuyên trách & Ký Hợp đồng",
      timeline: "Ngày 04",
      desc: "Xác lập Hợp đồng Dịch vụ Pháp lý với khung chi phí trọn gói rõ ràng. Phân định vai trò Luật sư trưởng phụ trách đàm phán và Luật sư thư ký hỗ trợ tố tụng.",
      focus: "Minh bạch 100% thù lao & lộ trình triển khai"
    },
    {
      number: "IV",
      title: "Thực thi Thực chiến & Báo cáo Tiến độ Trực tiếp",
      timeline: "Giai đoạn Thực thi",
      desc: "Đại diện thân chủ trước các bên đối tác, cơ quan quản lý nhà nước hoặc hội đồng xét xử. Cung cấp báo cáo diễn biến vụ việc hàng tuần cho ban điều hành.",
      focus: "Kiên định bảo vệ mục tiêu kinh doanh và danh dự thân chủ"
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg-section-alt)] text-[var(--color-heading)] relative border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" once={true}>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider font-semibold">
              TIẾN TRÌNH CỐ VẤN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)]">
              Lộ trình 4 Giai đoạn Chuẩn hóa
            </h2>
            <p className="text-[var(--color-text)] text-sm sm:text-base leading-[1.7]">
              Mỗi bước đi đều được tính toán với độ chính xác cao nhất nhằm giảm thiểu xung đột và gia tăng ưu thế đàm phán.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Layout with Continuous Scroll Progress Line */}
        <div ref={containerRef} className="space-y-8 relative">
          {/* Static Background Track */}
          <div className="absolute inset-y-0 left-8 md:left-1/2 -translate-x-1/2 w-[2px] bg-[var(--color-border)]" />

          {/* Continuous Scroll Progress Line */}
          <motion.div
            className="absolute top-0 bottom-0 left-8 md:left-1/2 -translate-x-1/2 w-[2px] bg-[var(--color-accent)] origin-top z-0"
            style={{ scaleY: scrollYProgress }}
          />

          {steps.map((st, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={st.number}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-8 md:gap-16`}
              >
                {/* Center Node Pin */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[var(--surface)] border-2 border-[var(--color-accent)] flex items-center justify-center text-[var(--color-heading)] font-bold text-xs shadow-md z-10">
                  {st.number}
                </div>

                {/* Content Box with one-time entrance reveal */}
                <FadeIn
                  direction={isEven ? "left" : "right"}
                  className="ml-16 md:ml-0 md:w-1/2"
                  delay={0.08 * idx}
                  once={true}
                >
                  <div className="p-6 sm:p-8 rounded-sm border border-[var(--color-border)] bg-[var(--surface)] editorial-card-shadow hover:border-[var(--color-accent)] hover:-translate-y-1 transition duration-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[var(--color-accent)] tracking-wider uppercase font-bold">
                        GIAI ĐOẠN {st.number}
                      </span>
                      <span className="text-xs text-[var(--color-text-secondary)] px-2.5 py-0.5 rounded-sm bg-[var(--bg-section-alt)] border border-[var(--color-border)] font-medium">
                        {st.timeline}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-heading)]">
                      {st.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--color-text)] leading-[1.7] font-normal">
                      {st.desc}
                    </p>

                    <div className="pt-2 text-xs font-mono text-[var(--color-heading)] flex items-center gap-1.5 border-t border-[var(--color-border)] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span>{st.focus}</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
