import React from "react";
import { MessageSquareText, FileSearch, FileSignature, CheckCircle2 } from "lucide-react";

export function ProcessMau1() {
  const steps = [
    {
      step: "01",
      title: "Tiếp nhận & Ký kết NDA",
      desc: "Lắng nghe vụ việc từ khách hàng, tiếp nhận hồ sơ sơ bộ và chủ động ký Thỏa thuận bảo mật thông tin (NDA) nhằm bảo vệ quyền lợi thân chủ.",
      icon: <MessageSquareText className="w-6 h-6 text-[#C5A880]" />
    },
    {
      step: "02",
      title: "Nghiên cứu & Báo cáo sơ bộ",
      desc: "Luật sư phân tích văn bản pháp quy, đối chiếu thực tiễn xét xử và gửi Thư tư vấn sơ bộ (Preliminary Advice) trong vòng 24 giờ làm việc.",
      icon: <FileSearch className="w-6 h-6 text-[#C5A880]" />
    },
    {
      step: "03",
      title: "Thỏa thuận Dịch vụ Pháp lý",
      desc: "Ký kết Hợp đồng dịch vụ pháp lý chính thức. Báo giá trọn gói minh bạch, cam kết phạm vi công việc và điều khoản trách nhiệm rõ ràng.",
      icon: <FileSignature className="w-6 h-6 text-[#C5A880]" />
    },
    {
      step: "04",
      title: "Triển khai & Báo cáo Tiến độ",
      desc: "Luật sư chủ nhiệm trực tiếp thực hiện, báo cáo cập nhật tiến độ định kỳ hàng tuần cho thân chủ đến khi giải quyết dứt điểm vụ việc.",
      icon: <CheckCircle2 className="w-6 h-6 text-[#C5A880]" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A880] uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-[#C5A880]" />
            <span>QUY TRÌNH LÀM VIỆC CHUẨN MỰC</span>
            <span className="w-6 h-0.5 bg-[#C5A880]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            4 Bước Tư vấn Pháp lý Chuẩn hóa
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Mỗi khách hàng đến với SAIGONLEX đều được áp dụng quy trình tiếp nhận và xử lý hồ sơ khoa học, bảo mật và chuẩn xác theo quy chuẩn nghề nghiệp.
          </p>
        </div>

        {/* 4 Steps Grid with connecting line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-xl border border-slate-200 bg-white corporate-card-shadow hover:corporate-card-shadow-hover transition duration-200 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-200 tracking-wider font-mono">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0A2540] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#0A2540]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span>Cam kết chuẩn mực & Đúng hạn</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
