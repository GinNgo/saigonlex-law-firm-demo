"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";
import { FadeIn, ScaleReveal, CounterNumber } from "@/components/common/Motion";

export function FeaturedServiceMau1() {
  return (
    <section className="py-20 bg-[var(--bg-dark)] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <FadeIn direction="left" className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-[var(--color-accent)]" />
              <span>DỊCH VỤ NỔI BẬT DÀNH CHO DOANH NGHIỆP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Gói Luật sư Nội bộ Thuê ngoài (Retainer Counsel) – An tâm vận hành
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Giải pháp pháp lý toàn diện thay thế hoặc bổ trợ cho phòng pháp chế nội bộ. Doanh nghiệp được tiếp cận với cả một đội ngũ luật sư chuyên trách ở nhiều lĩnh vực với chi phí tối ưu, sẵn sàng đồng hành trong mọi quyết định quản trị.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Rà soát không giới hạn hợp đồng:</strong> Kiểm tra tính pháp lý của mọi giao dịch thương mại, đối tác và nhà cung cấp.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Tư vấn xử lý lao động & nhân sự:</strong> Xây dựng thỏa ước lao động, nội quy và xử lý kỷ luật chuẩn xác theo Bộ luật Lao động.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Hotline ưu tiên 24/7:</strong> Luật sư chủ trì trực tiếp hỗ trợ các tình huống khẩn cấp của Hội đồng Quản trị và Ban Giám đốc.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/mau-1/linh-vuc/tu-van-doanh-nghiep"
                className="bg-[var(--color-accent)] hover:opacity-95 text-slate-950 font-bold text-sm px-6 py-3.5 rounded transition flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Xem chi tiết gói doanh nghiệp</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/mau-1/lien-he"
                className="text-white hover:text-[var(--color-accent)] font-semibold text-sm border border-white/20 hover:border-[var(--color-accent)] px-5 py-3 rounded transition"
              >
                Nhận đề xuất báo giá riêng
              </Link>
            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn direction="right" className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] group">
              <Image
                src="/images/consultation-meeting.png"
                alt="Luật sư SAIGONLEX tư vấn pháp lý trực tiếp cho đại diện ban giám đốc doanh nghiệp"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/90 via-transparent to-transparent" />

              {/* Inset Metric Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[var(--bg-dark)]/90 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center justify-between shadow-lg">
                <div>
                  <div className="text-xs text-slate-300">Thời gian phản hồi cam kết</div>
                  <div className="text-lg font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-4 h-4 text-[var(--color-accent)]" />
                    <span>Dưới 24 giờ làm việc</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-300">Tỷ lệ rủi ro kiểm soát</div>
                  <div className="text-lg font-bold text-[var(--color-accent)]">99.4% [DEMO]</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
