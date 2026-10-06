"use client";

import React from "react";
import { Lock, EyeOff, ShieldCheck, Scale, FileSpreadsheet, KeyRound } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Motion";

export function SecurityValuesMau2() {
  const commitments = [
    {
      title: "Đặc quyền Luật sư – Thân chủ",
      desc: "Mọi hội đàm, thư từ trao đổi và tài liệu dự thảo đều được pháp luật Việt Nam và tập quán quốc tế bảo vệ trước mọi yêu cầu cung cấp không tự nguyện.",
      icon: <Lock className="w-6 h-6 text-[var(--color-accent)]" />
    },
    {
      title: "Rà soát Xung đột Lợi ích",
      desc: "Quy trình kiểm tra Conflicts of Interest độc lập trước khi mở hồ sơ. Chúng tôi tuyệt đối từ chối nhận vụ việc nếu có khả năng phương hại đến thân chủ hiện hữu.",
      icon: <Scale className="w-6 h-6 text-[var(--color-accent)]" />
    },
    {
      title: "Hạ tầng Dữ liệu Mã hóa",
      desc: "Toàn bộ tài liệu số của vụ việc được lưu trữ trên máy chủ riêng biệt với giao thức mã hóa quân sự, chỉ các luật sư được phân quyền mới có thể tiếp cận.",
      icon: <KeyRound className="w-6 h-6 text-[var(--color-accent)]" />
    },
    {
      title: "Minh bạch 100% Cấu trúc Phí",
      desc: "Bảng phân tích thù lao luật sư chi tiết từng hạng mục. Cam kết không phát sinh bất kỳ khoản phí ngoài dự toán nếu không có văn bản chấp thuận trước.",
      icon: <FileSpreadsheet className="w-6 h-6 text-[var(--color-accent)]" />
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg-dark)] text-slate-100 relative overflow-hidden border-b border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider font-semibold">
              CAM KẾT CƠ MẬT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Bảo mật Thông tin & Tính Minh bạch
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-[1.7] font-normal">
              Uy tín của một hãng luật được tôi luyện qua năng lực giữ trọn bí mật kinh doanh cho thân chủ trước mọi biến động thị trường.
            </p>
          </div>
        </FadeIn>

        {/* 4 Pillars Grid (Deep Themed Dark Section) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
          {commitments.map((c, i) => (
            <StaggerItem key={i}>
              <div
                className="p-8 rounded-sm border border-white/10 bg-white/5 hover:border-[var(--color-accent)] hover:-translate-y-1.5 transition-all duration-300 space-y-4 group shadow-lg h-full backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-sm bg-black/30 border border-[var(--color-accent)]/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-200 leading-[1.7] font-normal">
                  {c.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
