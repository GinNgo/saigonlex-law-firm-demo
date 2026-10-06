import React from "react";
import { CheckCircle2, Shield, HeartHandshake, Zap, Scale, FileText } from "lucide-react";

export function CoreValuesMau1() {
  const values = [
    {
      title: "Chuẩn xác & Sâu sắc",
      desc: "Mọi văn bản tư vấn và phương án pháp lý đều được kiểm tra chéo (Peer Review) bởi ít nhất 02 luật sư trước khi phát hành cho thân chủ.",
      icon: <Scale className="w-6 h-6 text-[#C5A880]" />
    },
    {
      title: "Minh bạch Tuyệt đối",
      desc: "Rõ ràng về khả năng thành công, dự liệu chi phí trọn gói không phát sinh và cung cấp báo cáo tiến độ định kỳ mỗi tuần.",
      icon: <FileText className="w-6 h-6 text-[#C5A880]" />
    },
    {
      title: "Tận tâm & Trách nhiệm",
      desc: "Đặt lợi ích hợp pháp của thân chủ lên hàng đầu. Kiên trì theo đuổi vụ việc đến giai đoạn thi hành án thực tế.",
      icon: <HeartHandshake className="w-6 h-6 text-[#C5A880]" />
    },
    {
      title: "Tốc độ & Thực chiến",
      desc: "Phản hồi sơ bộ trong 24 giờ. Đưa ra giải pháp thương mại khả thi thay vì chỉ trích dẫn điều luật chung chung.",
      icon: <Zap className="w-6 h-6 text-[#C5A880]" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Title & Strategy */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A880] uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-[#C5A880]" />
              <span>NGUYÊN TẮC HÀNH NGHỀ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              Giá trị cốt lõi và Phương pháp tiếp cận vụ việc
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Chúng tôi tin rằng niềm tin của khách hàng không được xây dựng bằng những lời hứa hoa mỹ, mà bằng tính kỷ luật, sự chuẩn xác trong từng điều khoản và phong cách làm việc chuyên nghiệp, minh bạch.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-[#0A2540] flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#C5A880]" />
                <span>Tiêu chuẩn Đạo đức Nghề nghiệp Luật sư Việt Nam</span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                SAIGONLEX tuân thủ nghiêm ngặt Bộ Quy tắc Đạo đức và Ứng xử nghề nghiệp Luật sư Việt Nam do Liên đoàn Luật sư Việt Nam ban hành.
              </p>
            </div>
          </div>

          {/* Right Grid of 4 Core Values */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#C5A880] hover:shadow-lg transition-all duration-200 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-[#0A2540] transition">
                  {v.icon}
                </div>
                <h3 className="text-base font-bold text-[#0A2540]">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
