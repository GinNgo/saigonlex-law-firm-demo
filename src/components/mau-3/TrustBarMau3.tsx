"use client";

import React from "react";
import { Scale, ShieldCheck, Users, MapPin } from "lucide-react";

export function TrustBarMau3() {
  const trustItems = [
    {
      icon: Scale,
      title: "Đa Lĩnh Vực Hành Nghề",
      description: "Doanh nghiệp, Đầu tư, Bất động sản, Hôn nhân gia đình, Tranh tụng"
    },
    {
      icon: ShieldCheck,
      title: "Bảo Mật Thông Tin",
      description: "Tuân thủ nghiêm ngặt Quy tắc Đạo đức và Ứng xử nghề nghiệp Luật sư"
    },
    {
      icon: Users,
      title: "Khách Hàng Đa Dạng",
      description: "Giải pháp may đo chuyên biệt cho Cá nhân, Hộ kinh doanh & Doanh nghiệp"
    },
    {
      icon: MapPin,
      title: "Hiện Diện Tại TP.HCM",
      description: "Thuận tiện gặp gỡ trực tiếp, làm việc với Tòa án & Cơ quan Nhà nước"
    }
  ];

  return (
    <section className="bg-[#F8F9FA] border-b border-[#E5E7EB] py-7 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-white/80 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#17365D]/5 border border-[#17365D]/10 flex items-center justify-center shrink-0 text-[#17365D]">
                  <Icon className="w-5 h-5 text-[#AD8B55]" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#17365D] mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5F6368] leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
