import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, AlertCircle, CheckCircle2 } from "lucide-react";
import { LEGAL_CASES } from "@/data/cases";

export function AnonymizedCasesMau2() {
  return (
    <section className="py-24 bg-[#0D1522] text-[#FAF8F5] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.25em] block">
              HỒ SƠ THỰC TIỄN MINH HỌA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5]">
              Tình huống Cố vấn Tiêu biểu (Đã Ẩn danh)
            </h2>
            <p className="text-slate-400 font-sans text-sm font-light">
              Nhằm tuân thủ tuyệt đối quy định bảo mật thông tin thân chủ theo Luật Luật sư, các chi tiết nhận diện về tên thương hiệu, số liệu cá nhân và đối tác liên quan trong các tình huống dưới đây đã được thay đổi hoặc giả định cho mục đích minh họa năng lực xử lý (DEMO).
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>DỮ LIỆU ĐÃ ẨN DANH [DEMO]</span>
          </div>
        </div>

        {/* 3 Cases Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LEGAL_CASES.map((item, idx) => (
            <div
              key={item.id}
              className="p-8 rounded border border-amber-500/20 bg-[#101826] hover:border-[#D4AF37] transition duration-300 flex flex-col justify-between space-y-6 shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase">
                    VỤ VIỆC 0{idx + 1}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-serif">
                    {item.field}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#FAF8F5] group-hover:text-[#F3E5AB] transition">
                  {item.title}
                </h3>

                <div className="text-[11px] text-slate-400 border-l border-amber-500/40 pl-3">
                  <strong>Đối tượng thân chủ:</strong> {item.clientType}
                </div>

                {/* Challenge */}
                <div className="space-y-1 text-xs">
                  <div className="font-serif font-bold text-slate-300 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Thách thức pháp lý cốt lõi:</span>
                  </div>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-1 text-xs">
                  <div className="font-serif font-bold text-[#D4AF37] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Giải pháp chiến lược từ SAIGONLEX:</span>
                  </div>
                  <p className="text-slate-400 font-light leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="pt-4 border-t border-white/5 space-y-1 text-xs bg-black/20 p-3 rounded">
                <span className="text-[#F3E5AB] font-serif font-bold block">
                  Kết quả giải quyết:
                </span>
                <p className="text-slate-300 font-light text-[11px] leading-relaxed">
                  {item.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
