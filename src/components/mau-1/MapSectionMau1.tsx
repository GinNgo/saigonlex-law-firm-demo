"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { FadeIn } from "@/components/common/Motion";

export function MapSectionMau1() {
  return (
    <section className="py-16 bg-[var(--bg-section-alt)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Office Details Card */}
          <FadeIn direction="left" className="lg:col-span-5 bg-[var(--surface)] p-6 sm:p-8 rounded-2xl border border-[var(--color-border)] corporate-card-shadow flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
                <span className="w-6 h-0.5 bg-[var(--color-accent)]" />
                <span>VỊ TRÍ TRỤ SỞ CHÍNH</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-heading)]">
                Văn phòng SAIGONLEX tại Trung tâm Quận 1
              </h3>
              <p className="text-[var(--color-text)] text-sm leading-[1.7]">
                Tọa lạc tại tòa nhà tài chính hàng đầu khu trung tâm TP. Hồ Chí Minh, thuận tiện cho các buổi tiếp đón thân chủ, đàm phán hợp đồng thương mại và làm việc cùng các cơ quan tố tụng.
              </p>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-[var(--color-text)]">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-section-alt)] border border-[var(--color-border)]">
                <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--color-heading)] block font-semibold">Địa chỉ:</strong>
                  <span>{SITE_CONFIG.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-section-alt)] border border-[var(--color-border)]">
                <Clock className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--color-heading)] block font-semibold">Thời gian làm việc:</strong>
                  <span>{SITE_CONFIG.workingHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-section-alt)] border border-[var(--color-border)]">
                <Phone className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--color-heading)] block font-semibold">Điện thoại / Hotline:</strong>
                  <span>{SITE_CONFIG.phone} • Hotline: {SITE_CONFIG.hotline}</span>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Saigon+Centre+Tower+2+Ho+Chi+Minh+City"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[var(--color-primary)] text-white text-xs sm:text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition"
            >
              <Navigation className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>Chỉ đường trên Google Maps</span>
            </a>
          </FadeIn>

          {/* Map Embed Container */}
          <FadeIn direction="right" className="lg:col-span-7 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md min-h-[350px] relative bg-[var(--surface)]">
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
