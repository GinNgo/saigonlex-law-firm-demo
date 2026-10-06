"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { FadeIn } from "@/components/common/Motion";

export function MapSectionMau1() {
  return (
    <section className="py-16 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Office Details Card */}
          <FadeIn direction="left" className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 corporate-card-shadow flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A880] uppercase tracking-widest">
                <span className="w-6 h-0.5 bg-[#C5A880]" />
                <span>VỊ TRÍ TRỤ SỞ CHÍNH</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0A2540]">
                Văn phòng SAIGONLEX tại Trung tâm Quận 1
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Tọa lạc tại tòa nhà tài chính hàng đầu khu trung tâm TP. Hồ Chí Minh, thuận tiện cho các buổi tiếp đón thân chủ, đàm phán hợp đồng thương mại và làm việc cùng các cơ quan tố tụng.
              </p>
            </div>

            <div className="space-y-3.5 text-xs text-slate-700">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0A2540] block">Địa chỉ:</strong>
                  <span>{SITE_CONFIG.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0A2540] block">Thời gian làm việc:</strong>
                  <span>{SITE_CONFIG.workingHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0A2540] block">Điện thoại / Hotline:</strong>
                  <span>{SITE_CONFIG.phone} • Hotline: {SITE_CONFIG.hotline}</span>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Saigon+Centre+Tower+2+Ho+Chi+Minh+City"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#0A2540] text-white text-xs font-semibold hover:bg-[#0f3d68] transition"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Chỉ đường trên Google Maps</span>
            </a>
          </FadeIn>

          {/* Map Embed Container */}
          <FadeIn direction="right" className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-md min-h-[350px] relative bg-slate-200">
            <iframe
              title="Bản đồ chỉ dẫn tới văn phòng luật sư SAIGONLEX"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.516568862804!2d106.70034621533407!3d10.771694262227187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f41656096a5%3A0x67396a846c44955b!2sSaigon%20Centre!5e0!3m2!1svi!2svn!4v1680000000000!5m2!1svi!2svn"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
