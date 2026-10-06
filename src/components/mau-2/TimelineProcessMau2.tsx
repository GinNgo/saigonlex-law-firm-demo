"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/common/Motion";

export function TimelineProcessMau2() {
  const steps = [
    {
      number: "I",
      title: "Hội đàm Khởi đầu & Xác lập Thỏa thuận Bảo mật",
      timeline: "Ngày 01",
      desc: "Luật sư thành viên trực tiếp tiếp đón thân chủ tại phòng hội nghị kín. Ký kết NDA ngay trước khi tiếp cận bất kỳ tài liệu hay chiến lược nhạy cảm nào.",
      focus: "Đặc quyền Luật sư - Thân chủ được kích hoạt tuyệt đối"
    },
    {
      number: "II",
      title: "Nghiên cứu Pháp lý & Thiết kế Phương án Đa tầng",
      timeline: "Ngày 02 – 03",
      desc: "Soát xét văn bản pháp luật, rà soát án lệ tương tự và lập ma trận rủi ro. Đưa ra tối thiểu 02 kịch bản xử lý: giải pháp thương lượng hòa bình và phương án tố tụng quyết liệt.",
      focus: "Báo cáo phân tích Legal Strategy Memorandum"
    },
    {
      number: "III",
      title: "Chỉ định Ban Luật sư Chuyên trách & Ký Hợp đồng",
      timeline: "Ngày 04",
      desc: "Xác lập Hợp đồng Dịch vụ Pháp lý với khung chi phí trọn gói rõ ràng. Phân định vai trò Luật sư trưởng phụ trách đàm phán và Luật sư thư ký hỗ trợ tố tụng.",
      focus: "Minh bạch 100% thù lao & lộ trình triển khai"
    },
    {
      number: "IV",
      title: "Thực thi Thực chiến & Báo cáo Tiến độ Trực tiếp",
      timeline: "Giai đoạn Thực thi",
      desc: "Đại diện thân chủ trước các bên đối tác, cơ quan quản lý nhà nước hoặc hội đồng xét xử. Cung cấp báo cáo diễn biến vụ việc hàng tuần cho ban điều hành.",
      focus: "Kiên định bảo vệ mục tiêu kinh doanh và danh dự thân chủ"
    }
  ];

  return (
    <section className="py-24 bg-[#FAF7F0] text-[#111827] relative border-b border-[#EFE9D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-[#997836] font-serif text-xs uppercase tracking-[0.25em]">
              TIẾN TRÌNH CỐ VẤN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C1829]">
              Lộ trình 4 Giai đoạn Chuẩn hóa
            </h2>
            <p className="text-slate-600 font-sans text-sm font-light leading-relaxed">
              Mỗi bước đi đều được tính toán với độ chính xác cao nhất nhằm giảm thiểu xung đột và gia tăng ưu thế đàm phán.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Layout */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-[2px] before:bg-gradient-to-b before:from-[#E5DEC9] before:via-[#C5A059] before:to-[#E5DEC9]">
          {steps.map((st, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={st.number}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-8 md:gap-16`}
              >
                {/* Center Node Pin */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-[#C5A059] flex items-center justify-center text-[#0C1829] font-serif font-bold text-xs shadow-md z-10">
                  {st.number}
                </div>

                {/* Content Box */}
                <FadeIn
                  direction={isEven ? "left" : "right"}
                  className="ml-16 md:ml-0 md:w-1/2"
                  delay={0.1 * idx}
                >
                  <div className="p-6 sm:p-8 rounded-sm border border-[#E5DEC9] bg-white editorial-card-shadow hover:border-[#C5A059] hover:-translate-y-1 transition duration-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#997836] tracking-widest uppercase font-bold">
                        GIAI ĐOẠN {st.number}
                      </span>
                      <span className="text-[11px] text-slate-500 font-sans px-2.5 py-0.5 rounded-sm bg-[#FAF7F0] border border-[#E5DEC9]">
                        {st.timeline}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#0C1829]">
                      {st.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-sans font-light leading-relaxed">
                      {st.desc}
                    </p>

                    <div className="pt-2 text-[11px] font-mono text-[#0C1829] flex items-center gap-1.5 border-t border-[#F0EAD8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{st.focus}</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
