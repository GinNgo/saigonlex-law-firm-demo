"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";

export function PhilosophyMau2() {
  return (
    <section className="py-24 bg-[#FAF7F0] text-[#111827] relative border-b border-[#EFE9D9]" id="triet-ly">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image with Fine Editorial Border */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm aspect-[4/5] overflow-hidden border-2 border-[#E5DEC9] shadow-xl bg-slate-900">
              <Image
                src="/images/about-philosophy.png"
                alt="Thư viện pháp luật và không gian hội đàm kín SAIGONLEX"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1829]/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Fine Accent Line */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-40 h-40 border-2 border-[#C5A059]/30 -z-10 rounded-sm" />
          </div>

          {/* Right Column: Editorial Creed */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[#997836] font-serif text-xs uppercase tracking-[0.25em] block">
                TRIẾT LÝ HÀNH NGHỀ & TÔN CHỈ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C1829] leading-tight">
                Pháp luật không phải là sự gò bó, mà là công cụ kiến tạo quyền lực
              </h2>
            </div>

            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-light">
              Tại SAIGONLEX, chúng tôi nhìn nhận mỗi văn bản luật như một tác phẩm cấu trúc hoàn chỉnh. Sứ mệnh của luật sư không chỉ dừng lại ở việc tuân thủ thụ động, mà là vận dụng sự am hiểu tường tận hệ thống tư pháp để thiết kế những hành lang an toàn nhất cho thân chủ vươn tầm.
            </p>

            {/* Managing Partner Quote Card (Bright Luxury with Gold Accent) */}
            <div className="p-8 rounded-sm bg-white border-l-4 border-[#C5A059] border-t border-r border-b border-[#EAE3D2] relative space-y-4 editorial-card-shadow">
              <Quote className="w-8 h-8 text-[#C5A059]/30 absolute top-4 right-4" />
              <p className="font-serif italic text-base sm:text-lg text-[#0C1829] leading-relaxed">
                “Một vụ việc pháp lý thành công không đo đếm bằng số lượng văn bản được ký kết, mà bằng sự an tâm tuyệt đối của thân chủ khi đối diện với các ngã rẽ định mệnh.”
              </p>
              <div className="flex items-center gap-3.5 pt-2 border-t border-[#F0EAD8]">
                <div className="w-10 h-10 rounded-sm bg-[#0C1829] border border-[#C5A059]/40 flex items-center justify-center font-serif text-sm text-[#F5E6BE] font-bold">
                  NT
                </div>
                <div>
                  <div className="font-serif font-bold text-sm text-[#0C1829]">
                    Luật sư Nguyễn Văn Thành
                  </div>
                  <div className="text-[11px] text-slate-500 font-sans">
                    Luật sư Điều hành (Managing Partner) • SAIGONLEX [DEMO]
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/mau-2/gioi-thieu"
                className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.2em] text-[#0C1829] hover:text-[#997836] transition group font-semibold"
              >
                <span>Đọc bản tuyên ngôn triết lý đầy đủ</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
