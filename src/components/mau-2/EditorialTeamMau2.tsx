"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LAWYERS } from "@/data/lawyers";

export function EditorialTeamMau2() {
  return (
    <section className="py-24 bg-[#0D1522] text-[#FAF8F5] relative" id="luat-su">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.25em] block">
              HỘI ĐỒNG THÀNH VIÊN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5]">
              Đội đồng Luật sư Trưởng & Cố vấn
            </h2>
            <p className="text-slate-400 font-sans text-sm font-light">
              Mỗi luật sư thành viên là chuyên gia đầu ngành trong lĩnh vực phụ trách, sở hữu nền tảng học thuật quốc tế và bề dày kinh nghiệm thực tế tại Việt Nam.
            </p>
          </div>

          <div>
            <Link
              href="/mau-2/doi-ngu"
              className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.2em] text-[#D4AF37] hover:text-[#FAF8F5] transition"
            >
              <span>Xem toàn thể thành viên</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Editorial Portraits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LAWYERS.map((lawyer) => (
            <div
              key={lawyer.id}
              className="group flex flex-col justify-between space-y-4"
            >
              {/* Photo Frame with subtle gold glow on hover */}
              <div className="relative aspect-[3/4] w-full rounded overflow-hidden border border-white/10 bg-[#090E17] group-hover:border-[#D4AF37]/60 transition-all duration-500 shadow-xl">
                <Image
                  src={lawyer.image}
                  alt={`Chân dung minh họa ${lawyer.name}`}
                  fill
                  className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090E17] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition" />

                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm border border-amber-500/30 text-[#D4AF37] text-[9px] font-mono tracking-widest px-2 py-0.5 rounded">
                  DEMO PROFILE
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider mb-0.5">
                    {lawyer.barAssociation}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#FAF8F5] group-hover:text-[#F3E5AB] transition">
                    {lawyer.name}
                  </h3>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <div className="text-xs font-serif text-[#D4AF37] tracking-wide">
                  {lawyer.role}
                </div>
                <p className="text-[11px] text-slate-400 font-sans font-light leading-relaxed line-clamp-2">
                  {lawyer.department}
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {lawyer.practices.slice(0, 2).map((p, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-sans text-slate-300 border border-white/10 px-2 py-0.5 rounded bg-white/5"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer notice */}
        <div className="mt-12 p-3 text-center border border-amber-900/30 bg-[#080D17] text-amber-300/80 text-xs font-light">
          <strong>Thông báo minh họa dữ liệu nhân sự (DEMO):</strong> Ảnh chân dung phong cách studio và hồ sơ luật sư trên là mẫu thiết kế giao diện. Website khi vận hành chính thức sẽ cập nhật chân dung thực tế và số thẻ luật sư được cấp bởi Liên đoàn Luật sư Việt Nam.
        </div>
      </div>
    </section>
  );
}
