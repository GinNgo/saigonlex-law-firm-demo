import React from "react";
import type { Metadata } from "next";
import { DemoBanner } from "@/components/common/DemoBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";

// Mau 3 Components
import { HeaderMau3 } from "@/components/mau-3/HeaderMau3";
import { HeroMau3 } from "@/components/mau-3/HeroMau3";
import { TrustBarMau3 } from "@/components/mau-3/TrustBarMau3";
import { AboutSplitMau3 } from "@/components/mau-3/AboutSplitMau3";
import { CoreValuesMau3 } from "@/components/mau-3/CoreValuesMau3";
import { PracticeAreasGridMau3 } from "@/components/mau-3/PracticeAreasGridMau3";
import { FeaturedServicesMau3 } from "@/components/mau-3/FeaturedServicesMau3";
import { WhyChooseUsMau3 } from "@/components/mau-3/WhyChooseUsMau3";
import { ConsultationTimelineMau3 } from "@/components/mau-3/ConsultationTimelineMau3";
import { AnonymizedMattersMau3 } from "@/components/mau-3/AnonymizedMattersMau3";
import { TeamMau3 } from "@/components/mau-3/TeamMau3";
import { CredentialsMau3 } from "@/components/mau-3/CredentialsMau3";
import { KnowledgeHubMau3 } from "@/components/mau-3/KnowledgeHubMau3";
import { NewsSectionMau3 } from "@/components/mau-3/NewsSectionMau3";
import { RecruitmentHighlightMau3 } from "@/components/mau-3/RecruitmentHighlightMau3";
import { LegalFormsSectionMau3 } from "@/components/mau-3/LegalFormsSectionMau3";
import { FaqAccordionMau3 } from "@/components/mau-3/FaqAccordionMau3";
import { ContactExperienceMau3 } from "@/components/mau-3/ContactExperienceMau3";
import { FinalCtaMau3 } from "@/components/mau-3/FinalCtaMau3";
import { FooterMau3 } from "@/components/mau-3/FooterMau3";

export const metadata: Metadata = {
  title: "MẪU C – Classic Modern Premium | CÔNG TY LUẬT SAIGONLEX",
  description:
    "Giao diện website luật phong cách Classic Modern Premium kết hợp cấu trúc doanh nghiệp truyền thống uy tín với chuẩn mực thiết kế cao cấp, 21 section thông tin toàn diện và trải nghiệm chuyển đổi tối ưu."
};

export default function Mau3HomePage() {
  return (
    <TemplatePageWrapper
      templateId="mau-c"
      className="min-h-screen flex flex-col bg-white text-[#202124] font-body selection:bg-[#AD8B55]/20 selection:text-[#17365D]"
    >
      {/* Sticky Demo Selector Banner */}
      <DemoBanner />

      {/* Structured Data */}
      <JsonLd type="LawFirm" />

      {/* Sections 01 & 02: Top Information Bar & Sticky Navigation */}
      <HeaderMau3 />

      <main className="flex-1">
        {/* Section 03: Hero Section */}
        <HeroMau3 />

        {/* Section 04: Trust / Authority Bar */}
        <TrustBarMau3 />

        {/* Section 05: About the Law Firm – Split Story */}
        <AboutSplitMau3 />

        {/* Section 06: Core Values */}
        <CoreValuesMau3 />

        {/* Section 07: Practice Areas Grid (8 areas) */}
        <PracticeAreasGridMau3 />

        {/* Section 08: Featured Legal Services */}
        <FeaturedServicesMau3 />

        {/* Section 09: Why Clients Choose SaigonLex */}
        <WhyChooseUsMau3 />

        {/* Section 10: Consultation Process Timeline (6 steps) */}
        <ConsultationTimelineMau3 />

        {/* Section 11: Representative Legal Matters & Solutions (Anonymized) */}
        <AnonymizedMattersMau3 />

        {/* Section 12: Legal Team & Managing Lawyer */}
        <TeamMau3 />

        {/* Section 13: Practice Credentials & Professional Standing */}
        <CredentialsMau3 />

        {/* Section 14: Legal Knowledge Hub / Articles */}
        <KnowledgeHubMau3 />

        {/* Section 15: Legal News & Activity Updates */}
        <NewsSectionMau3 />

        {/* Section 16: Career & Recruitment Highlight */}
        <RecruitmentHighlightMau3 />

        {/* Section 17: Free Legal Resources & Forms Download */}
        <LegalFormsSectionMau3 />

        {/* Section 18: FAQ – Frequently Asked Questions */}
        <FaqAccordionMau3 />

        {/* Section 19: Direct Consultation Booking & Office Contact */}
        <ContactExperienceMau3 />

        {/* Section 20: Final Confidence Call-to-Action */}
        <FinalCtaMau3 />
      </main>

      {/* Section 21: Comprehensive Corporate Footer */}
      <FooterMau3 />
    </TemplatePageWrapper>
  );
}
