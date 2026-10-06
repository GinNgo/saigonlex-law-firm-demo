import React from "react";
import type { Metadata } from "next";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau1 } from "@/components/mau-1/HeaderMau1";
import { FooterMau1 } from "@/components/mau-1/FooterMau1";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { ConsultationFormMau1 } from "@/components/mau-1/ConsultationFormMau1";
import { MapSectionMau1 } from "@/components/mau-1/MapSectionMau1";
import { Phone, Mail, Clock, MapPin, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Liên hệ & Đặt lịch Hẹn Tư vấn | SAIGONLEX",
  description:
    "Liên hệ với đội ngũ luật sư SAIGONLEX tại TP. Hồ Chí Minh. Đặt lịch tư vấn trực tiếp hoặc trực tuyến, cam kết bảo mật thông tin và phản hồi trong 24 giờ."
};

export default function ContactMau1Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-1" },
            { name: "Liên hệ & Đặt lịch tư vấn", url: "https://saigonlex-demo.vercel.app/mau-1/lien-he" }
          ]
        }}
      />
      <HeaderMau1 />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 1", href: "/mau-1" },
                { label: "Liên hệ & Đặt lịch" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-[#C5A880] uppercase tracking-widest block">
                TIẾP NHẬN YÊU CẦU TRÊN TOÀN QUỐC
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Liên hệ & Đặt Lịch Hẹn Tư Vấn
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Chúng tôi sẵn sàng lắng nghe và đồng hành cùng quý khách hàng. Mọi yêu cầu ban đầu đều được tiếp nhận với quy trình bảo mật nghiêm ngặt nhất.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Info Cards Strip */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#17365D] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#17365D]" />
                </div>
                <div className="text-xs font-bold text-[#6B7280] uppercase">Hotline 24/7</div>
                <div className="text-base font-bold text-[#0F172A]">{SITE_CONFIG.hotline}</div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#17365D] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#17365D]" />
                </div>
                <div className="text-xs font-bold text-[#6B7280] uppercase">Hòm thư điện tử</div>
                <div className="text-sm font-bold text-[#0F172A] truncate">{SITE_CONFIG.email}</div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#17365D] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#17365D]" />
                </div>
                <div className="text-xs font-bold text-[#6B7280] uppercase">Giờ làm việc</div>
                <div className="text-xs font-bold text-[#0F172A]">T2 – T6: 8:30 – 18:00</div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#17365D] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div className="text-xs font-bold text-[#6B7280] uppercase">Cam kết bảo mật</div>
                <div className="text-xs font-bold text-emerald-700">Ký NDA trước thụ lý</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Consultation Form */}
        <ConsultationFormMau1 />

        {/* Map & Office Location */}
        <MapSectionMau1 />
      </main>

      <FooterMau1 />
    </div>
  );
}
