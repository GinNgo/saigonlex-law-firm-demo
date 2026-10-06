"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Scale } from "lucide-react";
import { LAWYERS } from "@/data/lawyers";

export function TeamMau1() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="doi-ngu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A880] uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-[#C5A880]" />
              <span>ĐỘI NGŨ LUẬT SƯ CHỦ CHỐT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              Luật sư Thành viên & Cố vấn Cấp cao
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Các luật sư tại SAIGONLEX sở hữu tư duy sắc bén, am hiểu sâu rộng thị trường nội địa cùng kỹ năng tranh tụng thực chiến.
            </p>
          </div>

          <div>
            <Link
              href="/mau-1/doi-ngu"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0A2540] hover:text-[#0f3d68] group"
            >
              <span>Xem toàn bộ đội ngũ & hồ sơ năng lực</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Lawyer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LAWYERS.map((lawyer) => (
            <div
              key={lawyer.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 corporate-card-shadow hover:corporate-card-shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] w-full bg-slate-800 overflow-hidden">
                <Image
                  src={lawyer.image}
                  alt={`Chân dung minh họa ${lawyer.name} – SAIGONLEX`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Badge Demo */}
                <div className="absolute top-3 right-3 bg-amber-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                  DEMO PROFILE
                </div>

                {/* Bar Association at bottom of image */}
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <div className="text-[11px] text-amber-300 font-medium">{lawyer.barAssociation}</div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-[#0A2540] group-hover:text-blue-700 transition">
                    {lawyer.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#C5A880] mt-0.5">
                    {lawyer.role}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {lawyer.department}
                  </p>
                </div>

                {/* Practices */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Chuyên môn chính:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {lawyer.practices.map((p, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer notice for Team */}
        <div className="mt-8 p-3 rounded-lg bg-amber-50 border border-amber-200 text-center text-xs text-amber-800">
          <strong>Ghi chú bản quyền hình ảnh & thông tin:</strong> Hình ảnh chân dung và lý lịch nhân sự trên là dữ liệu mẫu minh họa giao diện (DEMO). Website chính thức sẽ được cập nhật hình ảnh chụp thực tế và số chứng chỉ hành nghề được Sở Tư pháp cấp phép.
        </div>
      </div>
    </section>
  );
}
