"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";

export function FeaturedServiceMau1() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A880] uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-[#C5A880]" />
              <span>DỊCH VỤ NỔI BẬT DÀNH CHO DOANH NGHIỆP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Gói Luật sư Nội bộ Thuê ngoài (Retainer Counsel) – An tâm vận hành
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Giải pháp pháp lý toàn diện thay thế hoặc bổ trợ cho phòng pháp chế nội bộ. Doanh nghiệp được tiếp cận với cả một đội ngũ luật sư chuyên trách ở nhiều lĩnh vực với chi phí tối ưu, sẵn sàng đồng hành trong mọi quyết định quản trị.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Rà soát không giới hạn hợp đồng:</strong> Kiểm tra tính pháp lý của mọi giao dịch thương mại, đối tác và nhà cung cấp.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Tư vấn xử lý lao động & nhân sự:</strong> Xây dựng thỏa ước lao động, nội quy và xử lý kỷ luật chuẩn xác theo Bộ luật Lao động.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Hotline ưu tiên 24/7:</strong> Luật sư chủ trì trực tiếp hỗ trợ các tình huống khẩn cấp của Hội đồng Quản trị và Ban Giám đốc.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/mau-1/linh-vuc/tu-van-doanh-nghiep"
                className="bg-[#C5A880] hover:bg-[#b39266] text-slate-950 font-bold text-sm px-6 py-3.5 rounded transition flex items-center gap-2"
              >
                <span>Xem chi tiết gói doanh nghiệp</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/mau-1/lien-he"
                className="text-white hover:text-[#C5A880] font-semibold text-sm border border-slate-700 px-5 py-3 rounded transition"
              >
                Nhận đề xuất báo giá riêng
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 aspect-[4/3]">
              <Image
                src="/images/consultation-meeting.png"
                alt="Luật sư SAIGONLEX tư vấn pháp lý trực tiếp cho đại diện ban giám đốc doanh nghiệp"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Inset Metric Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Thời gian phản hồi cam kết</div>
                  <div className="text-lg font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-4 h-4 text-[#C5A880]" />
                    <span>Dưới 24 giờ làm việc</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Tỷ lệ rủi ro kiểm soát</div>
                  <div className="text-lg font-bold text-[#C5A880]">99.4% [DEMO]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
