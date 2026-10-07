"use client";

import React from "react";
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";

export function CredentialsMau3() {
  const credentials = [
    {
      icon: FileCheck,
      title: "Giấy Phép Hoạt Động Sở Tư Pháp",
      subtitle: "Sở Tư pháp TP. Hồ Chí Minh cấp phép",
      detail: "Hoạt động theo đúng phạm vi điều chỉnh của Luật Luật sư Việt Nam, mã số thuế và trụ sở đăng ký minh bạch."
    },
    {
      icon: Award,
      title: "Đoàn Luật Sư TP. Hồ Chí Minh",
      subtitle: "Thành viên Liên đoàn Luật sư Việt Nam",
      detail: "Toàn bộ luật sư tham gia tư vấn và tranh tụng đều có Thẻ Luật sư đang còn hiệu lực và được giám sát hành nghề."
    },
    {
      icon: ShieldCheck,
      title: "Bảo Hiểm Trách Nhiệm Nghề Nghiệp",
      subtitle: "Bảo vệ an toàn tối đa cho thân chủ",
      detail: "Duy trì hợp đồng bảo hiểm trách nhiệm nghề nghiệp luật sư theo quy chuẩn hành nghề quốc tế và Việt Nam."
    },
    {
      icon: CheckCircle2,
      title: "Quy Tắc Đạo Đức & Bảo Mật",
      subtitle: "Tuyệt đối không xung đột lợi ích",
      detail: "Thực hiện kiểm tra xung đột lợi ích trước mọi vụ việc, cam kết giữ bí mật thông tin trọn đời hồ sơ."
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-[#17365D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#AD8B55]/20 text-[#AD8B55] text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>TÍNH CHÍNH DANH PHÁP LÝ</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Năng Lực Hành Nghề & Pháp Lý Minh Bạch
          </h2>
          <p className="text-[#D1D5DB] text-xs sm:text-sm font-body">
            Cam kết hành nghề hợp pháp, đạo đức chuẩn mực và đặt trách nhiệm pháp lý lên vị trí cao nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="bg-[#0E2945]/70 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-[#AD8B55]/60 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#AD8B55]/20 text-[#AD8B55] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-white mb-1">
                    {cred.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#AD8B55] mb-3">
                    {cred.subtitle}
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {cred.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Xác thực pháp lý đầy đủ</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
