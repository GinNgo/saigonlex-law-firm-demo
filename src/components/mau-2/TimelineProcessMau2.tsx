import React from "react";
import { Shield, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

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
    <section className="py-24 bg-[#090E17] text-[#FAF8F5] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.25em]">
            TIẾN TRÌNH CỐ VẤN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5]">
            Lộ trình 4 Giai đoạn Chuẩn hóa
          </h2>
          <p className="text-slate-400 font-sans text-sm font-light leading-relaxed">
            Mỗi bước đi đều được tính toán với độ chính xác cao nhất nhằm giảm thiểu xung đột và gia tăng ưu thế đàm phán.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-px before:bg-gradient-to-b before:from-transparent before:via-[#D4AF37]/40 before:to-transparent">
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
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#090E17] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif font-bold text-xs shadow-lg z-10">
                  {st.number}
                </div>

                {/* Content Box */}
                <div className="ml-16 md:ml-0 md:w-1/2">
                  <div
                    className={`p-6 sm:p-8 rounded border border-amber-500/20 bg-[#101826] shadow-xl hover:border-[#D4AF37] transition duration-300 space-y-3 ${
                      isEven ? "md:text-left" : "md:text-left"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase">
                        GIAI ĐOẠN {st.number}
                      </span>
                      <span className="text-[11px] text-slate-400 font-sans px-2.5 py-0.5 rounded bg-white/5 border border-white/5">
                        {st.timeline}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#FAF8F5]">
                      {st.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
                      {st.desc}
                    </p>

                    <div className="pt-2 text-[11px] font-mono text-[#F3E5AB] flex items-center gap-1.5 border-t border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{st.focus}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
