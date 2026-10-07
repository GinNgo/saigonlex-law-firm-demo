import React from "react";
import type { Metadata } from "next";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau3 } from "@/components/mau-3/HeaderMau3";
import { FooterMau3 } from "@/components/mau-3/FooterMau3";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";
import { ContactExperienceMau3 } from "@/components/mau-3/ContactExperienceMau3";
import { MapPin, PhoneCall, Mail, Clock, ShieldCheck, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Liên Hệ & Đặt Lịch Tư Vấn | CÔNG TY LUẬT SAIGONLEX",
  description:
    "Thông tin liên hệ, hotline 24/7 và phiếu đặt lịch tư vấn trực tiếp cùng Luật sư tại văn phòng Công ty Luật SaigonLex, Quận 1, TP. Hồ Chí Minh."
};

export default function ContactMau3Page() {
  return (
    <TemplatePageWrapper
      templateId="mau-c"
      className="min-h-screen flex flex-col bg-white text-[#202124] font-body"
    >
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3" },
            { name: "Liên hệ", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/lien-he" }
          ]
        }}
      />
      <HeaderMau3 />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-gradient-to-r from-[#17365D] via-[#0E2945] to-[#17365D] text-white py-14 lg:py-16 border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu C", href: "/mau-3" },
                { label: "Liên hệ & Đặt lịch" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl mt-4 space-y-3">
              <span className="text-xs font-bold text-[#AD8B55] uppercase tracking-widest block">
                KẾT NỐI VỚI LUẬT SƯ SAIGONLEX
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Liên Hệ & Đặt Lịch Tư Vấn
              </h1>
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed font-body">
                Trụ sở văn phòng tọa lạc tại trung tâm Quận 1, TP. Hồ Chí Minh, thuận tiện tiếp đón
                thân chủ và đại diện làm việc với các cơ quan tư pháp, hành chính.
              </p>
            </div>
          </div>
        </section>

        {/* Contact form & map */}
        <ContactExperienceMau3 />
      </main>

      <FooterMau3 />
    </TemplatePageWrapper>
  );
}
