import React from "react";
import type { Metadata } from "next";
import { DemoBanner } from "@/components/common/DemoBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { HeaderMau1 } from "@/components/mau-1/HeaderMau1";
import { HeroMau1 } from "@/components/mau-1/HeroMau1";
import { IntroMau1 } from "@/components/mau-1/IntroMau1";
import { ServicesGridMau1 } from "@/components/mau-1/ServicesGridMau1";
import { CoreValuesMau1 } from "@/components/mau-1/CoreValuesMau1";
import { TeamMau1 } from "@/components/mau-1/TeamMau1";
import { ProcessMau1 } from "@/components/mau-1/ProcessMau1";
import { FeaturedServiceMau1 } from "@/components/mau-1/FeaturedServiceMau1";
import { InsightsMau1 } from "@/components/mau-1/InsightsMau1";
import { FaqMau1 } from "@/components/mau-1/FaqMau1";
import { ConsultationFormMau1 } from "@/components/mau-1/ConsultationFormMau1";
import { MapSectionMau1 } from "@/components/mau-1/MapSectionMau1";
import { FooterMau1 } from "@/components/mau-1/FooterMau1";

export const metadata: Metadata = {
  title: "Mẫu 1 – Corporate Legal | SAIGONLEX – Hãng luật Doanh nghiệp Uy tín",
  description:
    "Giao diện website luật phong cách Corporate Legal hiện đại, cấu trúc rõ ràng, chuyên nghiệp với 12 section toàn diện và nội dung pháp lý chuyên sâu."
};

export default function Mau1HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Demo Switcher Banner */}
      <DemoBanner />

      {/* JSON-LD Structured Data */}
      <JsonLd type="LawFirm" />

      {/* 1. Header (Sticky & Topbar) */}
      <HeaderMau1 />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroMau1 />

        {/* Section 2: Giới thiệu công ty luật */}
        <IntroMau1 />

        {/* Section 3: 8 Lĩnh vực hành nghề */}
        <ServicesGridMau1 />

        {/* Section 4: Giá trị cốt lõi & Phương pháp làm việc */}
        <CoreValuesMau1 />

        {/* Section 5: Đội ngũ luật sư */}
        <TeamMau1 />

        {/* Section 6: Quy trình tư vấn 4 bước */}
        <ProcessMau1 />

        {/* Section 7: Lĩnh vực tư vấn nổi bật */}
        <FeaturedServiceMau1 />

        {/* Section 8: Bài viết kiến thức pháp luật */}
        <InsightsMau1 />

        {/* Section 9: Câu hỏi thường gặp */}
        <FaqMau1 />

        {/* Section 10: Đặt lịch tư vấn */}
        <ConsultationFormMau1 />

        {/* Section 11: Google Maps & Trụ sở */}
        <MapSectionMau1 />
      </main>

      {/* Section 12: Footer đầy đủ */}
      <FooterMau1 />
    </div>
  );
}
