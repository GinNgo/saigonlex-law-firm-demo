import React from "react";
import type { Metadata } from "next";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau2 } from "@/components/mau-2/HeaderMau2";
import { FooterMau2 } from "@/components/mau-2/FooterMau2";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { ConciergeBookingMau2 } from "@/components/mau-2/ConciergeBookingMau2";
import { MapPin, Phone, Mail, Clock, Lock, ShieldCheck, Navigation } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Liên hệ & Đặt lịch Hội đàm Kín | SAIGONLEX Premium",
  description:
    "Liên hệ với văn phòng luật sư cao cấp SAIGONLEX tại Quận 1, TP. Hồ Chí Minh. Xác lập lịch hẹn cơ mật cùng Luật sư Thành viên phụ trách."
};

export default function ContactMau2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#111827]">
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-demo.vercel.app/mau-2" },
            { name: "Liên hệ & Đặt lịch", url: "https://saigonlex-demo.vercel.app/mau-2/lien-he" }
          ]
        }}
      />
      <HeaderMau2 />

      <main className="flex-1">
        {/* Banner */}
        <section className="py-20 bg-[#FAF7F0] border-b border-[#E5DEC9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 2", href: "/mau-2" },
                { label: "Liên hệ & Hội đàm" }
              ]}
              theme="editorial"
            />
            <div className="max-w-3xl space-y-4 pt-4">
              <span className="text-xs font-serif text-[#C5A059] uppercase tracking-[0.25em] block font-semibold">
                TIẾP NHẬN BẢO MẬT
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0C1829]">
                Xác lập Lịch Hội đàm Cơ mật
              </h1>
              <p className="text-slate-600 font-sans text-sm sm:text-base font-light leading-relaxed">
                Văn phòng tiếp đón thân chủ tại tòa nhà Saigon Centre Tower 2, trung tâm Quận 1 hoặc sắp xếp buổi trao đổi trực tuyến mã hóa riêng tư.
              </p>
            </div>
          </div>
        </section>

        {/* Private Contact Strips */}
        <section className="py-12 bg-[#FDFBF7] border-b border-[#E5DEC9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-sm border border-[#E5DEC9] bg-white shadow-sm space-y-2">
                <div className="font-serif text-xs text-[#C5A059] uppercase tracking-wider font-semibold">Đường dây nóng Cố vấn</div>
                <div className="text-base font-serif font-bold text-[#0C1829]">{SITE_CONFIG.hotline}</div>
              </div>

              <div className="p-6 rounded-sm border border-[#E5DEC9] bg-white shadow-sm space-y-2">
                <div className="font-serif text-xs text-[#C5A059] uppercase tracking-wider font-semibold">Email Tiếp nhận</div>
                <div className="text-xs font-mono font-bold text-slate-700 truncate">{SITE_CONFIG.email}</div>
              </div>

              <div className="p-6 rounded-sm border border-[#E5DEC9] bg-white shadow-sm space-y-2">
                <div className="font-serif text-xs text-[#C5A059] uppercase tracking-wider font-semibold">Thời gian Tiếp khách</div>
                <div className="text-xs text-slate-600 font-light">T2 – T6: 08:30 – 18:00</div>
              </div>

              <div className="p-6 rounded-sm border border-[#E5DEC9] bg-white shadow-sm space-y-2">
                <div className="font-serif text-xs text-[#C5A059] uppercase tracking-wider font-semibold">Tiêu chuẩn An ninh</div>
                <div className="text-xs text-emerald-700 font-bold">Ký NDA trước hội đàm</div>
              </div>
            </div>
          </div>
        </section>

        {/* Concierge Form */}
        <ConciergeBookingMau2 />

        {/* Map and Address */}
        <section className="py-20 bg-[#FAF7F0] border-t border-[#E5DEC9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              <div className="lg:col-span-5 p-8 rounded-sm border border-[#E5DEC9] bg-white flex flex-col justify-between space-y-6 shadow-md">
                <div className="space-y-4">
                  <span className="text-xs font-serif text-[#C5A059] uppercase tracking-widest block font-semibold">
                    VỊ TRÍ TRỤ SỞ
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0C1829]">
                    Văn phòng SAIGONLEX Private Office
                  </h3>
                  <p className="text-slate-600 font-sans text-xs sm:text-sm font-light leading-relaxed">
                    Không gian tiếp khách riêng tư, sang trọng, đảm bảo không gian yên tĩnh tuyệt đối cho các buổi hội đàm đàm phán cấp cao.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-600 font-sans font-light">
                  <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#FAF7F0] border border-[#E5DEC9]">
                    <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{SITE_CONFIG.address}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 rounded-sm bg-[#FAF7F0] border border-[#E5DEC9]">
                    <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Hotline: {SITE_CONFIG.hotline}</span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Saigon+Centre+Tower+2+Ho+Chi+Minh+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm border border-[#0C1829] text-[#0C1829] hover:bg-[#0C1829] hover:text-[#DFBF7E] font-serif font-bold text-xs uppercase tracking-wider transition shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-[#C5A059]" />
                  <span>Mở Google Maps chỉ dẫn</span>
                </a>
              </div>

              <div className="lg:col-span-7 rounded-sm overflow-hidden border border-[#E5DEC9] min-h-[350px] relative bg-white shadow-md">
                <iframe
                  title="Bản đồ vị trí SAIGONLEX Premium"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.516568862804!2d106.70034621533407!3d10.771694262227187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f41656096a5%3A0x67396a846c44955b!2sSaigon%20Centre!5e0!3m2!1svi!2svn!4v1680000000000!5m2!1svi!2svn"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMau2 />
    </div>
  );
}
