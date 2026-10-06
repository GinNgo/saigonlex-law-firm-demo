"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Scale, Quote } from "lucide-react";

export function PhilosophyMau2() {
  return (
    <section className="py-24 bg-[#090E17] text-[#FAF8F5] relative border-b border-white/5" id="triet-ly">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image with Luxury Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded aspect-[4/5] overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <Image
                src="/images/about-philosophy.png"
                alt="Thư viện pháp luật và phòng hội nghị kín SAIGONLEX"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090E17]/90 via-transparent to-transparent" />
            </div>

            {/* Overlapping Gold Accent Frame */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#D4AF37]/20 -z-10 rounded" />
          </div>

          {/* Right Column: Editorial Creed */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.25em] block">
                TRIẾT LÝ HÀNH NGHỀ & TÔN CHỈ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5] leading-tight">
                Pháp luật không phải là sự gò bó, mà là công cụ kiến tạo quyền lực
              </h2>
            </div>

            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-light">
              Tại SAIGONLEX, chúng tôi nhìn nhận mỗi văn bản luật như một tác phẩm cấu trúc hoàn chỉnh. Sứ mệnh của luật sư không chỉ dừng lại ở việc tuân thủ thụ động, mà là vận dụng sự am hiểu tường tận hệ thống tư pháp để thiết kế những hành lang an toàn nhất cho thân chủ vươn tầm.
            </p>

            {/* Managing Partner Quote Card */}
            <div className="p-6 rounded bg-[#101826] border-l-2 border-[#D4AF37] relative space-y-4 shadow-xl">
              <Quote className="w-8 h-8 text-[#D4AF37]/30 absolute top-4 right-4" />
              <p className="font-serif italic text-base sm:text-lg text-[#F3E5AB] leading-relaxed">
                “Một vụ việc pháp lý thành công không đo đếm bằng số lượng văn bản được ký kết, mà bằng sự an tâm tuyệt đối của thân chủ khi đối diện với các ngã rẽ định mệnh.”
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-[#1A2639] border border-[#D4AF37]/50 flex items-center justify-center font-serif text-xs text-[#D4AF37]">
                  NT
                </div>
                <div>
                  <div className="font-serif font-bold text-sm text-[#FAF8F5]">
                    Luật sư Nguyễn Văn Thành
                  </div>
                  <div className="text-[11px] text-[#94A3B8]">
                    Luật sư Điều hành (Managing Partner) • SAIGONLEX [DEMO]
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/mau-2/gioi-thieu"
                className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.2em] text-[#D4AF37] hover:text-[#FAF8F5] transition group"
              >
                <span>Đọc bản tuyên ngôn triết lý đầy đủ</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
