"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, ShieldCheck, Target, ArrowRight } from "lucide-react";

export function IntroMau1() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-slate-100 aspect-[4/3]">
              <Image
                src="/images/about-firm.png"
                alt="Khu vực sảnh lễ tân sang trọng và hiện đại của công ty luật SAIGONLEX"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div className="hidden sm:block absolute -bottom-10 -right-6 w-3/5 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <Image
                src="/images/desk-contract-1.png"
                alt="Hợp đồng pháp lý và bút ký tại bàn làm việc luật sư SAIGONLEX"
                fill
                className="object-cover"
                sizes="30vw"
              />
            </div>

            <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-10" />
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A880] uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-[#C5A880]" />
              <span>VỀ CHÚNG TÔI – SAIGONLEX</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              Đồng hành pháp lý chiến lược, bảo vệ tối đa lợi ích của thân chủ
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Được thành lập bởi đội ngũ luật sư giàu kinh nghiệm thực chiến từ các tổ chức tư vấn quốc tế và cơ quan tư pháp, <strong>SAIGONLEX</strong> định vị là hãng luật cung cấp dịch vụ pháp lý chuẩn mực, chuyên sâu và tận tâm tại Việt Nam.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Chúng tôi không chỉ trả lời câu hỏi <em>“Pháp luật quy định như thế nào?”</em> mà luôn nỗ lực giải đáp <em>“Đâu là giải pháp tối ưu và an toàn nhất cho bài toán kinh doanh của khách hàng?”</em>. Mỗi ý kiến tư vấn đều được xây dựng dựa trên sự thấu hiểu môi trường kinh doanh nội địa và tiêu chuẩn quản trị rủi ro quốc tế.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="border border-slate-200 p-4 rounded-xl hover:border-blue-400 transition bg-slate-50/50">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0A2540] flex items-center justify-center mb-2">
                  <Scale className="w-4 h-4 text-[#0A2540]" />
                </div>
                <h3 className="text-sm font-bold text-[#0A2540] mb-1">Thượng tôn Pháp luật</h3>
                <p className="text-xs text-slate-500">Mọi giải pháp đều đảm bảo tính hợp pháp, bền vững và chống chịu rủi ro lâu dài.</p>
              </div>

              <div className="border border-slate-200 p-4 rounded-xl hover:border-blue-400 transition bg-slate-50/50">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#C5A880] flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-800" />
                </div>
                <h3 className="text-sm font-bold text-[#0A2540] mb-1">Bảo mật Nghiêm ngặt</h3>
                <p className="text-xs text-slate-500">Thông tin vụ việc và chiến lược của thân chủ là tài sản vô giá cần được bảo vệ tuyệt đối.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/mau-1/gioi-thieu"
                className="text-[#0A2540] hover:text-[#0f3d68] font-bold text-sm inline-flex items-center gap-1.5 group"
              >
                <span>Xem thêm chi tiết lịch sử và sứ mệnh SAIGONLEX</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
