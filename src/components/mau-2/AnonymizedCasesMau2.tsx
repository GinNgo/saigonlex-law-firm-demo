"use client";

import React from "react";
import { ShieldCheck, AlertCircle, CheckCircle2 } from "lucide-react";
import { LEGAL_CASES } from "@/data/cases";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Motion";

export function AnonymizedCasesMau2() {
  return (
    <section className="py-24 bg-[var(--bg-section)] text-[var(--color-heading)] relative border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[var(--color-border)] pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider font-semibold block">
                HỒ SƠ THỰC TIỄN MINH HỌA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)]">
                Tình huống Cố vấn Tiêu biểu (Đã Ẩn danh)
              </h2>
              <p className="text-[var(--color-text)] text-sm sm:text-base leading-[1.7]">
                Nhằm tuân thủ tuyệt đối quy định bảo mật thông tin thân chủ theo Luật Luật sư, các chi tiết nhận diện về tên thương hiệu, số liệu cá nhân và đối tác liên quan trong các tình huống dưới đây đã được thay đổi hoặc giả định cho mục đích minh họa năng lực xử lý (DEMO).
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-[var(--color-accent)] bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 px-3.5 py-1.5 rounded-sm font-mono font-medium">
              <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
              <span>DỮ LIỆU ĐÃ ẨN DANH [DEMO]</span>
            </div>
          </div>
        </FadeIn>

        {/* 3 Cases Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {LEGAL_CASES.map((item, idx) => (
            <StaggerItem key={item.id}>
              <div
                className="p-8 rounded-sm border border-[var(--color-border)] bg-[var(--surface)] hover:border-[var(--color-accent)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 editorial-card-shadow group h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[var(--color-heading)] tracking-wider uppercase bg-[var(--bg-section-alt)] px-2.5 py-0.5 rounded-sm border border-[var(--color-border)] font-bold">
                      VỤ VIỆC 0{idx + 1}
                    </span>
                    <span className="text-[11px] text-[var(--color-accent)] uppercase tracking-wider font-semibold">
                      {item.field}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-heading)] group-hover:text-[var(--color-primary)] transition">
                    {item.title}
                  </h3>

                  <div className="text-xs text-[var(--color-text-secondary)] border-l-2 border-[var(--color-accent)] pl-3 py-0.5 font-normal">
                    <strong className="text-[var(--color-heading)] font-semibold">Đối tượng thân chủ:</strong> {item.clientType}
                  </div>

                  {/* Challenge */}
                  <div className="space-y-1.5 text-xs">
                    <div className="font-semibold text-xs text-[var(--color-heading)] flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                      <span>Thách thức pháp lý cốt lõi:</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[var(--color-text)] leading-[1.7] font-normal">
                      {item.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-1.5 text-xs">
                    <div className="font-semibold text-xs text-[var(--color-heading)] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span>Giải pháp chiến lược từ SAIGONLEX:</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[var(--color-text)] leading-[1.7] font-normal">
                      {item.solution}
                    </p>
                  </div>
                </div>

                {/* Result */}
                <div className="pt-4 border-t border-[var(--color-border)] space-y-1 text-xs bg-[var(--bg-section-alt)] p-4 rounded-sm border border-[var(--color-border)]">
                  <span className="text-[var(--color-heading)] font-semibold block text-xs">
                    Kết quả giải quyết:
                  </span>
                  <p className="text-[var(--color-text)] text-xs leading-[1.7] font-normal">
                    {item.result}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
