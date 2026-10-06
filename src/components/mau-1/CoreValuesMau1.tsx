import React from "react";
import { CheckCircle2, Shield, HeartHandshake, Zap, Scale, FileText } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Motion";

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
    <section className="py-20 bg-[var(--bg-section)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Title & Strategy */}
          <FadeIn direction="right" className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-accent)] uppercase tracking-wide">
              <span className="w-6 h-0.5 bg-[var(--color-accent)]" />
              <span>NGUYÊN TẮC HÀNH NGHỀ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight">
              Giá trị cốt lõi và Phương pháp tiếp cận vụ việc
            </h2>
            <p className="text-[#202124] text-[15px] sm:text-[16px] leading-[1.7]">
              Chúng tôi tin rằng niềm tin của khách hàng không được xây dựng bằng những lời hứa hoa mỹ, mà bằng tính kỷ luật, sự chuẩn xác trong từng điều khoản và phong cách làm việc chuyên nghiệp, minh bạch.
            </p>
            <div className="p-4 rounded-xl bg-[var(--bg-section-alt)] border border-[var(--color-border)] text-xs text-[var(--color-text)] space-y-2">
              <div className="font-semibold text-[#111827] flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Tiêu chuẩn Đạo đức Nghề nghiệp Luật sư Việt Nam</span>
              </div>
              <p className="text-[#4B5563] leading-relaxed">
                SAIGONLEX tuân thủ nghiêm ngặt Bộ Quy tắc Đạo đức và Ứng xử nghề nghiệp Luật sư Việt Nam do Liên đoàn Luật sư Việt Nam ban hành.
              </p>
            </div>
          </FadeIn>

          {/* Right Grid of 4 Core Values */}
          <StaggerContainer className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--surface)] hover:border-[var(--color-accent)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3 group h-full">
                  <div className="w-12 h-12 rounded-lg bg-[var(--bg-soft)] flex items-center justify-center group-hover:bg-[var(--color-primary)] transition">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[#111827]">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
