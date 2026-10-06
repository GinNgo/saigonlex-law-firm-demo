import React from "react";
import { Lock, EyeOff, ShieldCheck, Scale, FileSpreadsheet, KeyRound } from "lucide-react";

export function SecurityValuesMau2() {
  const commitments = [
    {
      title: "Đặc quyền Luật sư – Thân chủ",
      desc: "Mọi hội đàm, thư từ trao đổi và tài liệu dự thảo đều được pháp luật Việt Nam và tập quán quốc tế bảo vệ trước mọi yêu cầu cung cấp không tự nguyện.",
      icon: <Lock className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      title: "Rà soát Xung đột Lợi ích",
      desc: "Quy trình kiểm tra Conflicts of Interest độc lập trước khi mở hồ sơ. Chúng tôi tuyệt đối từ chối nhận vụ việc nếu có khả năng phương hại đến thân chủ hiện hữu.",
      icon: <Scale className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      title: "Hạ tầng Dữ liệu Mã hóa",
      desc: "Toàn bộ tài liệu số của vụ việc được lưu trữ trên máy chủ riêng biệt với giao thức mã hóa quân sự, chỉ các luật sư được phân quyền mới có thể tiếp cận.",
      icon: <KeyRound className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      title: "Minh bạch 100% Cấu trúc Phí",
      desc: "Bảng phân tích thù lao luật sư chi tiết từng hạng mục. Cam kết không phát sinh bất kỳ khoản phí ngoài dự toán nếu không có văn bản chấp thuận trước.",
      icon: <FileSpreadsheet className="w-6 h-6 text-[#D4AF37]" />
    }
  ];

  return (
    <section className="py-24 bg-[#090E17] text-[#FAF8F5] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.25em]">
            CAM KẾT CƠ MẬT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5]">
            Bảo mật Thông tin & Tính Minh bạch
          </h2>
          <p className="text-slate-400 font-sans text-sm font-light leading-relaxed">
            Uy tín của một hãng luật được tôi luyện qua năng lực giữ trọn bí mật kinh doanh cho thân chủ trước mọi biến động thị trường.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((c, i) => (
            <div
              key={i}
              className="p-8 rounded border border-amber-500/20 bg-[#0F1726] hover:border-[#D4AF37] transition duration-300 space-y-4 group shadow-xl"
            >
              <div className="w-12 h-12 rounded bg-[#1A2639] border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                {c.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FAF8F5]">
                {c.title}
              </h3>
              <p className="text-xs text-slate-400 font-sans font-light leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
