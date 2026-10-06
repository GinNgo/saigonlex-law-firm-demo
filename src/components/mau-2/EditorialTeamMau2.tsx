"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LAWYERS } from "@/data/lawyers";

export function EditorialTeamMau2() {
  return (
    <section className="py-24 bg-[#FDFBF7] text-[#111827] relative border-b border-[#EFE9D9]" id="luat-su">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E8E1CE] pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[#997836] font-serif text-xs uppercase tracking-[0.25em] block">
              HỘI ĐỒNG THÀNH VIÊN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C1829]">
              Đội đồng Luật sư Trưởng & Cố vấn
            </h2>
            <p className="text-slate-600 font-sans text-sm font-light">
              Mỗi luật sư thành viên là chuyên gia đầu ngành trong lĩnh vực phụ trách, sở hữu nền tảng học thuật quốc tế và bề dày kinh nghiệm thực tế tại Việt Nam.
            </p>
          </div>

          <div>
            <Link
              href="/mau-2/doi-ngu"
              className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.2em] text-[#0C1829] hover:text-[#997836] transition font-semibold"
            >
              <span>Xem toàn thể thành viên</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
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
              {/* Photo Frame with Editorial Border */}
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden border border-[#E5DEC9] bg-[#0C1829] group-hover:border-[#C5A059] transition-all duration-500 shadow-lg">
                <Image
                  src={lawyer.image}
                  alt={`Chân dung minh họa ${lawyer.name}`}
                  fill
                  className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1829]/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition" />

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-[#E5DEC9] text-[#0C1829] text-[9px] font-mono tracking-widest px-2 py-0.5 rounded-sm font-bold">
                  DEMO PROFILE
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] font-mono text-[#F5E6BE] uppercase tracking-wider mb-0.5">
                    {lawyer.barAssociation}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F5E6BE] transition">
                    {lawyer.name}
                  </h3>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-1.5">
                <div className="text-xs font-serif text-[#997836] tracking-wide font-semibold">
                  {lawyer.role}
                </div>
                <p className="text-[11px] text-slate-500 font-sans font-light leading-relaxed line-clamp-2">
                  {lawyer.department}
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {lawyer.practices.slice(0, 2).map((p, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-sans text-slate-600 border border-[#E5DEC9] px-2 py-0.5 rounded-sm bg-white"
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
        <div className="mt-12 p-4 text-center border border-[#E5DEC9] bg-[#FAF7F0] text-slate-600 text-xs font-light rounded-sm">
          <strong className="font-serif text-[#0C1829]">Thông báo minh họa dữ liệu nhân sự (DEMO):</strong> Ảnh chân dung phong cách editorial và hồ sơ luật sư trên là mẫu thiết kế giao diện. Website khi vận hành chính thức sẽ cập nhật chân dung thực tế và số thẻ luật sư được cấp bởi Liên đoàn Luật sư Việt Nam.
        </div>
      </div>
    </section>
  );
}
