import React from "react";
import type { Metadata } from "next";
import { DemoBanner } from "@/components/common/DemoBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { HeaderMau2 } from "@/components/mau-2/HeaderMau2";
import { HeroMau2 } from "@/components/mau-2/HeroMau2";
import { PhilosophyMau2 } from "@/components/mau-2/PhilosophyMau2";
import { LargeServicesMau2 } from "@/components/mau-2/LargeServicesMau2";
import { TabbedPracticeMau2 } from "@/components/mau-2/TabbedPracticeMau2";
import { EditorialTeamMau2 } from "@/components/mau-2/EditorialTeamMau2";
import { TimelineProcessMau2 } from "@/components/mau-2/TimelineProcessMau2";
import { AnonymizedCasesMau2 } from "@/components/mau-2/AnonymizedCasesMau2";
import { SecurityValuesMau2 } from "@/components/mau-2/SecurityValuesMau2";
import { PublicationsMau2 } from "@/components/mau-2/PublicationsMau2";
import { AccordionFaqMau2 } from "@/components/mau-2/AccordionFaqMau2";
import { ConciergeBookingMau2 } from "@/components/mau-2/ConciergeBookingMau2";
import { FooterMau2 } from "@/components/mau-2/FooterMau2";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";

export const metadata: Metadata = {
  title: "MẪU B – Signature Premium | SAIGONLEX – Hãng luật Cao cấp",
  description:
    "Giao diện website luật phong cách Signature Premium sang trọng, phong cách tối giản thanh lịch, nghệ thuật thị giác và nội dung pháp lý đẳng cấp."
};

export default function Mau2HomePage() {
  return (
    <TemplatePageWrapper templateId="mau-b" className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--color-heading)]">
      {/* Demo Switcher Banner */}
      <DemoBanner />

      {/* JSON-LD Structured Data */}
      <JsonLd type="LawFirm" />

      {/* 1. Header (Luxury Sticky & Monogram) */}
      <HeaderMau2 />

      <main className="flex-1">
        {/* Section 1: Hero toàn màn hình */}
        <HeroMau2 />

        {/* Section 2: Giới thiệu và triết lý hành nghề */}
        <PhilosophyMau2 />

        {/* Section 3: Dịch vụ pháp lý nổi bật dạng large cards */}
        <LargeServicesMau2 />

        {/* Section 4: Lĩnh vực chuyên môn dạng tab */}
        <TabbedPracticeMau2 />

        {/* Section 5: Đội ngũ luật sư dạng editorial portraits */}
        <EditorialTeamMau2 />

        {/* Section 6: Quy trình tư vấn dạng timeline */}
        <TimelineProcessMau2 />

        {/* Section 7: Tình huống pháp lý minh họa được ẩn danh */}
        <AnonymizedCasesMau2 />

        {/* Section 8: Giá trị cam kết về bảo mật và minh bạch */}
        <SecurityValuesMau2 />

        {/* Section 9: Legal Insights / Tin tức pháp luật */}
        <PublicationsMau2 />

        {/* Section 10: FAQ dạng accordion */}
        <AccordionFaqMau2 />

        {/* Section 11: Form yêu cầu tư vấn cao cấp */}
        <ConciergeBookingMau2 />
      </main>

      {/* Section 12: Footer sang trọng */}
      <FooterMau2 />
    </TemplatePageWrapper>
  );
}
