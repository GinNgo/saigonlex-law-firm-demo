import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau2 } from "@/components/mau-2/HeaderMau2";
import { FooterMau2 } from "@/components/mau-2/FooterMau2";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { ArrowUpRight, Scale, ShieldCheck, Quote, Crown } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Triết lý & Tôn chỉ Hành nghề | SAIGONLEX Premium",
  description:
    "Khám phá triết lý hành nghề, nghệ thuật lập luận pháp lý và định vị hãng luật cố vấn cao cấp SAIGONLEX dành cho thân chủ tư nhân và doanh nghiệp."
};

export default function AboutMau2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090E17] text-[#FAF8F5]">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-2" },
            { name: "Triết lý & Tôn chỉ", url: "https://saigonlex-demo.vercel.app/mau-2/gioi-thieu" }
          ]
        }}
      />
      <HeaderMau2 />

      <main className="flex-1">
        {/* Banner */}
        <section className="py-20 bg-[#05080E] border-b border-white/5 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 2", href: "/mau-2" },
                { label: "Triết lý hành nghề" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl space-y-4 pt-4">
              <span className="text-xs font-serif text-[#D4AF37] uppercase tracking-[0.25em] block">
                TUYÊN NGÔN THƯƠNG HIỆU
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF8F5] leading-tight">
                Triết lý Hành nghề & Tôn chỉ Tối thượng
              </h1>
              <p className="text-slate-300 font-sans text-sm sm:text-base font-light leading-relaxed">
                Nơi nghệ thuật tư pháp giao hòa cùng tư duy tài chính chiến lược. Chúng tôi không giải quyết các vụ việc đại trà, mà tập trung kiến tạo ưu thế pháp lý tuyệt đối cho từng thân chủ.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 bg-[#090E17]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.2em] block">
                  ĐẶC QUYỀN TRÍ TUỆ
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF8F5] leading-snug">
                  Định hình vị thế pháp lý của bạn trước khi bước vào phòng đàm phán
                </h2>
                <p className="text-slate-300 text-sm font-sans font-light leading-relaxed">
                  Tại SAIGONLEX, mỗi luật sư không chỉ là người giải thích câu chữ của pháp luật thực định. Chúng tôi phân tích bối cảnh thương mại, tâm lý đối tác và dự báo trước mọi biến số tố tụng để thiết lập thế chủ động vững vàng nhất.
                </p>
                <p className="text-slate-300 text-sm font-sans font-light leading-relaxed">
                  Nguyên tắc cốt lõi của chúng tôi là: <em>“Một thắng lợi trọn vẹn nhất là thắng lợi đạt được thông qua một cấu trúc giao dịch không thể bị phá vỡ, triệt tiêu mọi động cơ khởi kiện từ đối phương.”</em>
                </p>

                <div className="p-6 rounded border border-amber-500/20 bg-[#101826] space-y-3">
                  <div className="font-serif font-bold text-[#D4AF37] text-sm">
                    Quy chuẩn Lựa chọn Thụ lý Vụ việc
                  </div>
                  <p className="text-xs text-slate-400 font-sans font-light leading-relaxed">
                    Hội đồng luật sư thành viên SAIGONLEX giới hạn định mức hồ sơ nhận mới hàng tháng để bảo đảm Luật sư Thành viên trực tiếp phụ trách và tham gia mọi phiên làm việc quan trọng.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative rounded overflow-hidden aspect-[4/5] border border-amber-500/30 shadow-2xl">
                  <Image
                    src="/images/about-philosophy.png"
                    alt="Phòng họp đại sảnh danh vọng SAIGONLEX"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Pillars of Prestige */}
        <section className="py-24 bg-[#0D1522] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.25em]">
                BA TRỤ CỘT ĐẲNG CẤP
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#FAF8F5]">
                Cam kết Không Thể Thỏa hiệp
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded border border-white/10 bg-[#101826] space-y-4">
                <div className="w-12 h-12 rounded bg-[#1A2639] border border-amber-500/30 flex items-center justify-center text-[#D4AF37]">
                  <Scale className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#FAF8F5]">Lập luận Tinh hoa</h4>
                <p className="text-xs text-slate-400 font-sans font-light leading-relaxed">
                  Mỗi bản luận cứ, thư tư vấn đều đạt độ chuẩn xác học thuật và sức thuyết phục thực tiễn cao nhất.
                </p>
              </div>

              <div className="p-8 rounded border border-white/10 bg-[#101826] space-y-4">
                <div className="w-12 h-12 rounded bg-[#1A2639] border border-amber-500/30 flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#FAF8F5]">Tuyệt mật Vĩnh viễn</h4>
                <p className="text-xs text-slate-400 font-sans font-light leading-relaxed">
                  Đặc quyền bảo mật thông tin thân chủ được duy trì vô thời hạn, kể cả sau khi vụ việc đã hoàn tất.
                </p>
              </div>

              <div className="p-8 rounded border border-white/10 bg-[#101826] space-y-4">
                <div className="w-12 h-12 rounded bg-[#1A2639] border border-amber-500/30 flex items-center justify-center text-[#D4AF37]">
                  <Crown className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#FAF8F5]">Đồng hành Cấp cao</h4>
                <p className="text-xs text-slate-400 font-sans font-light leading-relaxed">
                  Tư vấn trực tiếp giữa Luật sư Điều hành và Ban Lãnh đạo cấp cao nhất của doanh nghiệp thân chủ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#090E17] text-center border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            <h3 className="font-serif text-3xl font-bold text-[#FAF8F5]">
              Xác lập Hội đàm Cơ mật cùng Luật sư Trưởng
            </h3>
            <p className="text-slate-400 text-sm font-sans font-light max-w-xl mx-auto">
              Chúng tôi tôn trọng thời gian và vị thế của bạn. Cuộc hẹn sẽ được sắp xếp riêng tư tại văn phòng SAIGONLEX hoặc trực tuyến theo yêu cầu.
            </p>
            <div className="pt-2">
              <Link
                href="/mau-2/lien-he"
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b59227] text-slate-950 font-serif font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-sm transition"
              >
                <span>Đặt lịch hội đàm kín</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterMau2 />
    </div>
  );
}
