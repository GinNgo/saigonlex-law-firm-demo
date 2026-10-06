import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau1 } from "@/components/mau-1/HeaderMau1";
import { FooterMau1 } from "@/components/mau-1/FooterMau1";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { Scale, ShieldCheck, Target, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Giới thiệu Hãng luật SAIGONLEX | Corporate Legal",
  description:
    "Tìm hiểu lịch sử phát triển, tầm nhìn, sứ mệnh, giá trị cốt lõi và cam kết đạo đức nghề nghiệp của công ty luật SAIGONLEX."
};

export default function AboutMau1Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-1" },
            { name: "Giới thiệu", url: "https://saigonlex-demo.vercel.app/mau-1/gioi-thieu" }
          ]
        }}
      />
      <HeaderMau1 />

      <main className="flex-1">
        {/* Page Banner */}
        <section className="bg-slate-900 text-white py-16 border-b border-slate-800 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 1", href: "/mau-1" },
                { label: "Giới thiệu về SAIGONLEX" }
              ]}
              theme="dark"
            />
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-[#C5A880] uppercase tracking-widest block">
                VỀ HÃNG LUẬT CỦA CHÚNG TÔI
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Vững vàng Pháp lý – Bứt phá Tương lai
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Đồng hành cùng cộng đồng doanh nghiệp và nhà đầu tư trong mọi quyết định quản trị chiến lược, giải quyết tranh chấp và kiến tạo giá trị pháp lý bền vững.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                  Hơn một thập kỷ cống hiến cho công lý và sự phát triển bền vững
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Được thành lập tại trung tâm tài chính TP. Hồ Chí Minh, <strong>SAIGONLEX</strong> quy tụ đội ngũ luật sư thành viên, cố vấn cao cấp xuất thân từ các viện nghiên cứu lập pháp, tòa án nhân dân và các tổ chức tư vấn quốc tế.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Chúng tôi xây dựng uy tín dựa trên sự chuẩn xác tuyệt đối trong từng điều khoản hợp đồng, tư duy phản biện sắc sảo tại phiên tòa và tinh thần tận tâm phục vụ lợi ích hợp pháp của thân chủ.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-black text-[#0A2540]">850+ <span className="text-xs text-amber-600">[DEMO]</span></div>
                    <div className="text-xs text-slate-500 mt-1">Giao dịch & Hợp đồng</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-black text-[#0A2540]">98.2% <span className="text-xs text-amber-600">[DEMO]</span></div>
                    <div className="text-xs text-slate-500 mt-1">Đánh giá hài lòng</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
                  <Image
                    src="/images/architecture-interior.png"
                    alt="Kiến trúc nội thất đại sảnh công ty luật SAIGONLEX"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Ethics */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-slate-200 corporate-card-shadow space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0A2540] flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#C5A880]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540]">Tầm nhìn Chiến lược</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Trở thành hãng luật doanh nghiệp và tranh tụng hàng đầu Việt Nam, được các tập đoàn đa quốc gia và quỹ đầu tư tín nhiệm trong các thương vụ chiến lược.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 corporate-card-shadow space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0A2540] flex items-center justify-center">
                  <Scale className="w-6 h-6 text-[#C5A880]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540]">Sứ mệnh Hành nghề</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cung cấp các giải pháp pháp lý sáng tạo, khả thi và an toàn tuyệt đối; bảo vệ quyền lợi hợp pháp của thân chủ đồng thời thúc đẩy thượng tôn pháp luật trong xã hội.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 corporate-card-shadow space-y-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0A2540] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#C5A880]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540]">Đạo đức Nghề nghiệp</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Trung thực, khách quan và bảo mật tuyệt đối thông tin vụ việc. Tuyệt đối không xung đột lợi ích và luôn minh bạch trong mọi thỏa thuận thù lao.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-[#0A2540] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Sẵn sàng trao đổi vụ việc của bạn cùng Luật sư SAIGONLEX?
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe, phân tích hồ sơ và đưa ra định hướng pháp lý sơ bộ trong vòng 24 giờ làm việc.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link
                href="/mau-1/lien-he"
                className="bg-[#C5A880] hover:bg-[#b39266] text-slate-950 font-bold px-8 py-3.5 rounded text-sm transition flex items-center gap-2"
              >
                <span>Đặt lịch hẹn tư vấn</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterMau1 />
    </div>
  );
}
