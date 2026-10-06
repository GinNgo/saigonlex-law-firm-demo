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
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#111827]">
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
        <section className="py-20 bg-[#FAF7F0] border-b border-[#E5DEC9] relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu B", href: "/mau-2" },
                { label: "Triết lý hành nghề" }
              ]}
              theme="editorial"
            />
            <div className="max-w-3xl space-y-4 pt-4">
              <span className="text-xs text-[#997836] uppercase tracking-wider block font-semibold">
                TUYÊN NGÔN THƯƠNG HIỆU
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
                Triết lý Hành nghề & Tôn chỉ Tối thượng
              </h1>
              <p className="text-[#202124] text-sm sm:text-base leading-[1.7]">
                Nơi nghệ thuật tư pháp giao hòa cùng tư duy tài chính chiến lược. Chúng tôi không giải quyết các vụ việc đại trà, mà tập trung kiến tạo ưu thế pháp lý tuyệt đối cho từng thân chủ.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 bg-[#FDFBF7]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[#997836] text-xs uppercase tracking-wider block font-semibold">
                  ĐẶC QUYỀN TRÍ TUỆ
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-snug">
                  Định hình vị thế pháp lý của bạn trước khi bước vào phòng đàm phán
                </h2>
                <p className="text-[#202124] text-sm sm:text-base leading-[1.7]">
                  Tại SAIGONLEX, mỗi luật sư không chỉ là người giải thích câu chữ của pháp luật thực định. Chúng tôi phân tích bối cảnh thương mại, tâm lý đối tác và dự báo trước mọi biến số tố tụng để thiết lập thế chủ động vững vàng nhất.
                </p>
                <p className="text-[#202124] text-sm sm:text-base leading-[1.7]">
                  Nguyên tắc cốt lõi của chúng tôi là: <em>“Một thắng lợi trọn vẹn nhất là thắng lợi đạt được thông qua một cấu trúc giao dịch không thể bị phá vỡ, triệt tiêu mọi động cơ khởi kiện từ đối phương.”</em>
                </p>

                <div className="p-6 rounded-sm border border-[#E5DEC9] bg-white shadow-sm space-y-3">
                  <div className="font-bold text-[#997836] text-sm">
                    Quy chuẩn Lựa chọn Thụ lý Vụ việc
                  </div>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    Hội đồng luật sư thành viên SAIGONLEX giới hạn định mức hồ sơ nhận mới hàng tháng để bảo đảm Luật sư Thành viên trực tiếp phụ trách và tham gia mọi phiên làm việc quan trọng.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative rounded-sm overflow-hidden aspect-[4/5] border border-[#E5DEC9] shadow-xl">
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

        {/* 3 Pillars of Prestige - Contrast Navy Section */}
        <section className="py-24 bg-[#0C1829] text-[#FAF8F5] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-[#EBD59B] text-xs uppercase tracking-wider font-semibold">
                BA TRỤ CỘT ĐẲNG CẤP
              </span>
              <h3 className="text-3xl font-bold text-[#FAF8F5]">
                Cam kết Không Thể Thỏa hiệp
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-sm border border-white/10 bg-[#101F33] space-y-4">
                <div className="w-12 h-12 rounded-sm bg-[#162740] border border-[#C5A059]/40 flex items-center justify-center text-[#DFBF7E]">
                  <Scale className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#FAF8F5]">Lập luận Tinh hoa</h4>
                <p className="text-xs sm:text-[13px] text-slate-200 leading-[1.7] font-normal">
                  Mỗi bản luận cứ, thư tư vấn đều đạt độ chuẩn xác học thuật và sức thuyết phục thực tiễn cao nhất.
                </p>
              </div>

              <div className="p-8 rounded-sm border border-white/10 bg-[#101F33] space-y-4">
                <div className="w-12 h-12 rounded-sm bg-[#162740] border border-[#C5A059]/40 flex items-center justify-center text-[#DFBF7E]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#FAF8F5]">Tuyệt mật Vĩnh viễn</h4>
                <p className="text-xs sm:text-[13px] text-slate-200 leading-[1.7] font-normal">
                  Đặc quyền bảo mật thông tin thân chủ được duy trì vô thời hạn, kể cả sau khi vụ việc đã hoàn tất.
                </p>
              </div>

              <div className="p-8 rounded-sm border border-white/10 bg-[#101F33] space-y-4">
                <div className="w-12 h-12 rounded-sm bg-[#162740] border border-[#C5A059]/40 flex items-center justify-center text-[#DFBF7E]">
                  <Crown className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#FAF8F5]">Đồng hành Cấp cao</h4>
                <p className="text-xs sm:text-[13px] text-slate-200 leading-[1.7] font-normal">
                  Tư vấn trực tiếp giữa Luật sư Điều hành và Ban Lãnh đạo cấp cao nhất của doanh nghiệp thân chủ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#FAF7F0] text-center border-t border-[#E5DEC9]">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            <h3 className="text-3xl font-bold text-[#0F172A]">
              Xác lập Hội đàm Cơ mật cùng Luật sư Trưởng
            </h3>
            <p className="text-[#202124] text-sm leading-[1.7] max-w-xl mx-auto">
              Chúng tôi tôn trọng thời gian và vị thế của bạn. Cuộc hẹn sẽ được sắp xếp riêng tư tại văn phòng SAIGONLEX hoặc trực tuyến theo yêu cầu.
            </p>
            <div className="pt-2">
              <Link
                href="/mau-2/lien-he"
                className="inline-flex items-center gap-2 bg-[#17365D] hover:bg-[#0f2746] text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-sm shadow-md transition group"
              >
                <span className="text-[#DFBF7E]">Đặt lịch hội đàm kín</span>
                <ArrowUpRight className="w-4 h-4 text-[#DFBF7E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterMau2 />
    </div>
  );
}
