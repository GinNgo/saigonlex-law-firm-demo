import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau3 } from "@/components/mau-3/HeaderMau3";
import { FooterMau3 } from "@/components/mau-3/FooterMau3";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";
import { Scale, Award, Mail, Phone, GraduationCap, Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Đội Ngũ Luật Sư & Chuyên Gia | CÔNG TY LUẬT SAIGONLEX",
  description:
    "Gặp gỡ đội ngũ Luật sư thành viên và cộng sự của SaigonLex: Đoàn Luật sư TP.HCM, chuyên sâu Doanh nghiệp, Đầu tư, Tranh tụng và Hợp đồng thương mại."
};

const fullTeam = [
  {
    name: "Luật sư Trần Thị Sương",
    role: "Luật sư Điều hành (Managing Partner)",
    bar: "Đoàn Luật sư TP. Hồ Chí Minh / Liên đoàn Luật sư Việt Nam",
    education: "Thạc sĩ Luật học (ĐH Luật TP.HCM), Cử nhân Ngoại ngữ",
    experience: "15+ năm kinh nghiệm hành nghề thực tiễn",
    image: "/images/lawyer-1.png",
    bio: "Luật sư Trần Thị Sương là người sáng lập và điều hành SaigonLex. Bà có kinh nghiệm sâu rộng trong việc tư vấn cấu trúc doanh nghiệp, đàm phán các hợp đồng thương mại phức tạp, mua bán sáp nhập (M&A) và đại diện tranh tụng tại Tòa án các cấp.",
    specialties: [
      "Quản trị Doanh nghiệp & Cổ đông",
      "Đầu tư nước ngoài (FDI)",
      "Bất động sản & Xây dựng",
      "Tranh tụng Thương mại"
    ],
    featured: true
  },
  {
    name: "Luật sư Nguyễn Văn Hùng",
    role: "Luật sư Cao cấp (Senior Associate)",
    bar: "Đoàn Luật sư TP. Hồ Chí Minh",
    education: "Cử nhân Luật học (Khoa Luật - ĐHQG TP.HCM)",
    experience: "10+ năm kinh nghiệm tranh tụng & thi hành án",
    image: "/images/lawyer-2.png",
    bio: "Luật sư Nguyễn Văn Hùng phụ trách mảng Tranh tụng và Thi hành án dân sự - kinh doanh thương mại. Ông đã tham gia bảo vệ quyền lợi hợp pháp cho nhiều doanh nghiệp trong các vụ án tranh chấp hợp đồng kinh tế và thu hồi công nợ khó đòi.",
    specialties: [
      "Tranh tụng Tòa án & Trọng tài VIAC",
      "Hợp đồng Kinh doanh thương mại",
      "Thi hành án dân sự",
      "Tranh chấp Đất đai"
    ],
    featured: false
  },
  {
    name: "Luật sư Lê Thu Trang",
    role: "Luật sư Tư vấn (Associate)",
    bar: "Đoàn Luật sư TP. Hồ Chí Minh",
    education: "Cử nhân Luật Kinh tế (ĐH Kinh tế - Luật TP.HCM)",
    experience: "6+ năm kinh nghiệm tư vấn doanh nghiệp",
    image: "/images/lawyer-3.png",
    bio: "Luật sư Lê Thu Trang phụ trách mảng tư vấn pháp chế thường xuyên và quan hệ lao động. Bà có thế mạnh đặc biệt trong việc xây dựng hệ thống quy chế nội bộ, thỏa ước lao động tập thể và giải quyết các xung đột lao động cấp quản lý.",
    specialties: [
      "Pháp chế Doanh nghiệp thường xuyên",
      "Lao động & Tiền lương",
      "Sở hữu trí tuệ & Nhãn hiệu",
      "Thủ tục Giấy phép con"
    ],
    featured: false
  },
  {
    name: "Chuyên viên Đỗ Hoàng Nam",
    role: "Chuyên viên Pháp lý Cấp cao",
    bar: "Đang tập sự hành nghề luật sư",
    education: "Cử nhân Luật Quốc tế (ĐH Luật TP.HCM)",
    experience: "4+ năm kinh nghiệm hỗ trợ thủ tục đầu tư",
    image: "/images/lawyer-4.png",
    bio: "Chuyên viên Đỗ Hoàng Nam hỗ trợ đắc lực cho các luật sư thành viên trong công tác tra cứu án lệ, rà soát hồ sơ hành chính đầu tư và trực tiếp làm việc với các cơ quan đăng ký kinh doanh, Sở Kế hoạch & Đầu tư các tỉnh thành.",
    specialties: [
      "Đăng ký Doanh nghiệp & Chi nhánh",
      "Cấp phép Đầu tư (IRC, ERC)",
      "Thủ tục Đất đai & Nhà ở",
      "Soạn thảo Biên bản nội bộ"
    ],
    featured: false
  }
];

export default function TeamMau3Page() {
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
            { name: "Đội ngũ luật sư", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/doi-ngu" }
          ]
        }}
      />
      <HeaderMau3 />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--bg-dark)] to-[var(--color-primary)] text-white py-14 lg:py-16 border-b border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu C", href: "/mau-3" },
                { label: "Đội ngũ luật sư" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl mt-4 space-y-3">
              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest block">
                CON NGƯỜI & TRÍ TUỆ SAIGONLEX
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Đội Ngũ Luật Sư & Cộng Sự
              </h1>
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed font-body">
                Sức mạnh của SaigonLex nằm ở năng lực chuyên môn sắc bén, tinh thần trách nhiệm cao
                và cam kết tuyệt đối với đạo đức nghề luật sư Việt Nam.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members List */}
        <section className="py-16 sm:py-20 bg-[var(--bg-section)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {fullTeam.map((lawyer, idx) => (
              <div
                key={idx}
                className={`bg-[var(--bg-section-alt)] rounded-2xl p-7 sm:p-10 border border-[var(--color-border)] shadow-sm ${
                  lawyer.featured ? "ring-2 ring-[var(--color-accent)]/40" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Photo Column (4 cols) */}
                  <div className="lg:col-span-4">
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md border border-[var(--color-border)]">
                      <Image
                        src={lawyer.image}
                        alt={lawyer.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 360px"
                        className="object-cover object-top"
                      />
                      {lawyer.featured && (
                        <div className="absolute top-4 left-4 bg-[var(--color-accent)] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow">
                          Luật sư Sáng lập
                        </div>
                      )}
                    </div>

                    <div className="mt-5 space-y-2 text-xs text-[var(--color-text-muted)]">
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span>{lawyer.bar}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span>{lawyer.education}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio Column (8 cols) */}
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                        {lawyer.role}
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
                        {lawyer.name}
                      </h2>
                      <div className="text-xs font-semibold text-[#10B981] mt-1">
                        ✓ {lawyer.experience}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[var(--color-text)] leading-relaxed font-body">
                      {lawyer.bio}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                        Lĩnh vực chuyên môn trọng tâm:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {lawyer.specialties.map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--color-border)] text-xs font-semibold text-[var(--color-primary)]"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap gap-4">
                      <Link
                        href="/mau-3/lien-he"
                        className="px-6 py-2.5 rounded-md bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        Đặt lịch làm việc cùng {lawyer.name.split(" ").slice(-2).join(" ")}
                      </Link>
                      <a
                        href="tel:0908033115"
                        className="px-5 py-2.5 rounded-md bg-[var(--surface)] border border-[var(--color-border)] text-[var(--color-primary)] text-xs font-bold hover:bg-[var(--bg-section-alt)] transition-colors inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        <span>0908 033 115</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <FooterMau3 />
    </TemplatePageWrapper>
  );
}
