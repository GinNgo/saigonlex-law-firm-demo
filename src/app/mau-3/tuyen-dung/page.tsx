import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau3 } from "@/components/mau-3/HeaderMau3";
import { FooterMau3 } from "@/components/mau-3/FooterMau3";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";
import { JOB_OPENINGS_MAU3 } from "@/data/mau3Data";
import {
  Users2,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  Building2,
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tuyển Dụng Nhân Tài Pháp Lý | CÔNG TY LUẬT SAIGONLEX",
  description:
    "Cơ hội phát triển sự nghiệp dành cho Luật sư, Chuyên viên pháp lý và Thực tập sinh luật tại Công ty Luật SaigonLex, TP. Hồ Chí Minh."
};

export default function RecruitmentMau3Page() {
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
            { name: "Tuyển dụng", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/tuyen-dung" }
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
                { label: "Cơ hội nghề nghiệp" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl mt-4 space-y-3">
              <span className="text-xs font-bold text-[#AD8B55] uppercase tracking-widest block">
                GIA NHẬP ĐỘI NGŨ SAIGONLEX
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Cơ Hội Nghề Nghiệp & Phát Triển Bền Vững
              </h1>
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed font-body">
                SaigonLex kiến tạo môi trường hành nghề chuẩn mực, nhân văn và chuyên nghiệp, nơi
                mỗi luật sư và chuyên viên đều có không gian khẳng định tài năng và thăng tiến.
              </p>
            </div>
          </div>
        </section>

        {/* Culture & Benefits */}
        <section className="py-14 bg-[#F8F9FA] border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#17365D]/5 text-[#17365D] flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-[#AD8B55]" />
                </div>
                <h3 className="font-heading text-base font-bold text-[#17365D] mb-1">
                  Đào Tạo & Kèm Cặp Thực Chiến
                </h3>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  Được trực tiếp hướng dẫn bởi Luật sư Điều hành và các Luật sư thành viên dày dạn kinh nghiệm.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#17365D]/5 text-[#17365D] flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5 text-[#AD8B55]" />
                </div>
                <h3 className="font-heading text-base font-bold text-[#17365D] mb-1">
                  Môi Trường Chuyên Nghiệp
                </h3>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  Văn phòng tiện nghi tại trung tâm Quận 1, tiếp cận nguồn khách hàng đa dạng trong và ngoài nước.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#17365D]/5 text-[#17365D] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#AD8B55]" />
                </div>
                <h3 className="font-heading text-base font-bold text-[#17365D] mb-1">
                  Đãi Ngộ Cạnh Tranh & Thưởng Dự Án
                </h3>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  Lương cứng tương xứng năng lực kèm thưởng hiệu quả vụ việc minh bạch và cơ hội trở thành Partner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Positions List */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#17365D] mb-2">
                Các Vị Trí Đang Mở Tuyển Dụng
              </h2>
              <p className="text-sm text-[#5F6368]">
                Vui lòng xem chi tiết mô tả công việc và gửi CV trực tiếp đến email nhân sự của SaigonLex.
              </p>
            </div>

            <div className="space-y-8">
              {JOB_OPENINGS_MAU3.map((job) => (
                <div
                  key={job.id}
                  className="bg-[#F8F9FA] rounded-2xl p-7 sm:p-9 border border-[#E5E7EB] shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E5E7EB]">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded bg-[#17365D] text-white text-xs font-bold">
                          {job.department}
                        </span>
                        <span className="px-2.5 py-0.5 rounded bg-white text-[#17365D] border border-[#E5E7EB] text-xs font-semibold">
                          {job.employmentType}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#17365D]">
                        {job.position}
                      </h3>
                    </div>

                    <div className="text-xs text-[#5F6368] space-y-1">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#AD8B55]" />
                        <span>Địa điểm: {job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#AD8B55]" />
                        <span>Hạn nộp: {job.deadline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-bold text-[#17365D] uppercase tracking-wider mb-3">
                        Yêu cầu ứng viên:
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4B5563]">
                            <CheckCircle2 className="w-4 h-4 text-[#AD8B55] shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-[#17365D] uppercase tracking-wider mb-3">
                        Quyền lợi được hưởng:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {job.benefits.map((ben, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4B5563]">
                            <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#17365D]">
                          Gửi CV: contact@saigonlex.vn
                        </span>
                        <a
                          href={`mailto:contact@saigonlex.vn?subject=Ứng tuyển ${encodeURIComponent(job.position)}`}
                          className="px-4 py-2 rounded bg-[#17365D] hover:bg-[#0E2945] text-white text-xs font-bold transition-colors"
                        >
                          Ứng tuyển ngay
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterMau3 />
    </TemplatePageWrapper>
  );
}
