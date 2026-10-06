import React from "react";
import { ShieldCheck, AlertCircle, CheckCircle2 } from "lucide-react";
import { LEGAL_CASES } from "@/data/cases";

export function AnonymizedCasesMau2() {
  return (
    <section className="py-24 bg-[#FDFBF7] text-[#111827] relative border-b border-[#EFE9D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E8E1CE] pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[#997836] font-serif text-xs uppercase tracking-[0.25em] block">
              HỒ SƠ THỰC TIỄN MINH HỌA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C1829]">
              Tình huống Cố vấn Tiêu biểu (Đã Ẩn danh)
            </h2>
            <p className="text-slate-600 font-sans text-sm font-light">
              Nhằm tuân thủ tuyệt đối quy định bảo mật thông tin thân chủ theo Luật Luật sư, các chi tiết nhận diện về tên thương hiệu, số liệu cá nhân và đối tác liên quan trong các tình huống dưới đây đã được thay đổi hoặc giả định cho mục đích minh họa năng lực xử lý (DEMO).
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-[#997836] bg-[#C5A059]/10 border border-[#C5A059]/30 px-3.5 py-1.5 rounded-sm font-mono font-medium">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>DỮ LIỆU ĐÃ ẨN DANH [DEMO]</span>
          </div>
        </div>

        {/* 3 Cases Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LEGAL_CASES.map((item, idx) => (
            <div
              key={item.id}
              className="p-8 rounded-sm border border-[#E5DEC9] bg-white hover:border-[#C5A059] transition duration-300 flex flex-col justify-between space-y-6 editorial-card-shadow group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#0C1829] tracking-widest uppercase bg-[#FAF7F0] px-2.5 py-0.5 rounded-sm border border-[#E0D7BE] font-bold">
                    VỤ VIỆC 0{idx + 1}
                  </span>
                  <span className="text-[11px] text-[#8C7A58] uppercase tracking-wider font-serif font-semibold">
                    {item.field}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#0C1829] group-hover:text-[#997836] transition">
                  {item.title}
                </h3>

                <div className="text-[11px] text-slate-600 border-l-2 border-[#C5A059] pl-3 py-0.5 font-light">
                  <strong className="text-slate-800 font-serif">Đối tượng thân chủ:</strong> {item.clientType}
                </div>

                {/* Challenge */}
                <div className="space-y-1.5 text-xs">
                  <div className="font-serif font-bold text-slate-800 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Thách thức pháp lý cốt lõi:</span>
                  </div>
                  <p className="text-slate-600 font-sans font-light leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-1.5 text-xs">
                  <div className="font-serif font-bold text-[#0C1829] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Giải pháp chiến lược từ SAIGONLEX:</span>
                  </div>
                  <p className="text-slate-600 font-sans font-light leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="pt-4 border-t border-[#F0EAD8] space-y-1 text-xs bg-[#FAF7F0] p-4 rounded-sm border border-[#EFE9D9]">
                <span className="text-[#0C1829] font-serif font-bold block">
                  Kết quả giải quyết:
                </span>
                <p className="text-slate-700 font-sans font-light text-[11px] leading-relaxed">
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
