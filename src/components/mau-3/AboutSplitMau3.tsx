"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Scale, Award } from "lucide-react";

export function AboutSplitMau3() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-section)] border-b border-[var(--color-border)] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-[var(--color-border)] aspect-[4/5]">
                <Image
                  src="/images/about-firm.png"
                  alt="Không gian làm việc và tư vấn pháp lý tại Công ty Luật SaigonLex"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs uppercase tracking-widest text-slate-200 font-medium mb-1">
                    Trụ sở TP. Hồ Chí Minh
                  </div>
                  <div className="font-heading text-lg font-bold">
                    Không gian tư vấn trang trọng & bảo mật
                  </div>
                </div>
              </div>

              {/* Secondary Floating Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 sm:w-56 aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-2 border-[var(--surface)]">
                <Image
                  src="/images/desk-contract-1.png"
                  alt="Rà soát hồ sơ và hợp đồng pháp lý"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>

              {/* Badge Overlay */}
              <div className="absolute -top-4 -left-4 bg-[var(--color-primary)] text-white p-3 sm:p-4 rounded-lg shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">SaigonLex Law Firm</div>
                  <div className="text-[11px] text-[var(--color-accent)]">Đoàn Luật sư TP.HCM</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story & Philosophy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider mb-3">
              <Shield className="w-3.5 h-3.5" />
              <span>VỀ CÔNG TY LUẬT SAIGONLEX</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] leading-tight mb-6">
              Điểm Tựa Pháp Lý Vững Chắc Cho Cá Nhân & Doanh Nghiệp
            </h2>

            <div className="space-y-4 text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed font-body mb-8">
              <p>
                <strong>Công ty Luật SaigonLex</strong> được thành lập và hoạt động theo quy định
                của Luật Luật sư Việt Nam, trực thuộc Đoàn Luật sư TP. Hồ Chí Minh. Chúng tôi định vị
                là đối tác pháp lý tin cậy, đồng hành cùng thân chủ vượt qua những thách thức pháp lý
                phức tạp trong đời sống và hoạt động thương mại.
              </p>
              <p>
                Với phương châm <em>"Tận Tâm – Linh Hoạt – Đúng Pháp Luật"</em>, đội ngũ luật sư của
                chúng tôi không chỉ nắm vững lý luận pháp lý mà còn am hiểu thực tiễn xét xử, thủ tục
                hành chính và bối cảnh kinh doanh tại Việt Nam, mang lại phương án xử lý tối ưu về thời gian
                lẫn chi phí.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-primary)]">Pháp lý vững vàng – Giải pháp thực tiễn</h4>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                    Đề xuất phương án khả thi, áp dụng đúng quy định pháp luật và tôn trọng lợi ích tối đa của thân chủ.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-primary)]">Minh bạch chi phí & Tiến độ vụ việc</h4>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                    Hợp đồng dịch vụ pháp lý rõ ràng, không phát sinh chi phí ẩn, cập nhật tiến độ định kỳ.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-primary)]">Đồng hành tận tâm đến kết quả cuối cùng</h4>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                    Luật sư trực tiếp phụ trách, tư vấn thẳng thắn điểm mạnh – yếu của hồ sơ để thân chủ chủ động quyết định.
                  </p>
                </div>
              </div>
            </div>

            {/* Action link */}
            <div className="flex items-center gap-4">
              <Link
                href="/mau-3/gioi-thieu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition-colors shadow text-sm sm:text-base group"
              >
                <span>Tìm hiểu thêm về SaigonLex</span>
                <ArrowRight className="w-4 h-4 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
