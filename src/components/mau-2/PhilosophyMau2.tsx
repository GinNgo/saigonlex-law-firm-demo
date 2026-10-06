"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import { FadeIn } from "@/components/common/Motion";

export function PhilosophyMau2() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const accentBorderY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--bg-section-alt)] text-[var(--color-heading)] relative border-b border-[var(--color-border)]" id="triet-ly">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image with Fine Editorial Border */}
          <FadeIn direction="left" className="lg:col-span-5 relative" once={true}>
            <div className="relative rounded-sm aspect-[4/5] overflow-hidden border-2 border-[var(--color-border)] shadow-xl bg-[var(--bg-dark)] group">
              <Image
                src="/images/about-philosophy.png"
                alt="Thư viện pháp luật và không gian hội đàm kín SAIGONLEX"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Fine Accent Line with subtle continuous scroll parallax */}
            <motion.div
              style={{ y: accentBorderY }}
              className="hidden sm:block absolute -bottom-6 -right-6 w-40 h-40 border-2 border-[var(--color-accent)]/30 -z-10 rounded-sm pointer-events-none"
            />
          </FadeIn>

          {/* Right Column: Editorial Creed */}
          <FadeIn direction="right" className="lg:col-span-7 space-y-8" once={true}>
            <div className="space-y-3">
              <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider font-semibold block">
                TRIẾT LÝ HÀNH NGHỀ & TÔN CHỈ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] leading-tight">
                Pháp luật không phải là sự gò bó, mà là công cụ kiến tạo quyền lực
              </h2>
            </div>

            <p className="text-[var(--color-text)] text-[15px] sm:text-base leading-[1.72]">
              Tại SAIGONLEX, chúng tôi nhìn nhận mỗi văn bản luật như một tác phẩm cấu trúc hoàn chỉnh. Sứ mệnh của luật sư không chỉ dừng lại ở việc tuân thủ thụ động, mà là vận dụng sự am hiểu tường tận hệ thống tư pháp để thiết kế những hành lang an toàn nhất cho thân chủ vươn tầm.
            </p>

            {/* Managing Partner Quote Card (Bright Luxury with Themed Accent) */}
            <div className="p-8 rounded-sm bg-[var(--surface)] border-l-4 border-[var(--color-accent)] border-t border-r border-b border-[var(--color-border)] relative space-y-4 editorial-card-shadow hover:-translate-y-1 transition-all duration-300">
              <Quote className="w-8 h-8 text-[var(--color-accent)]/30 absolute top-4 right-4" />
              <p className="italic text-base sm:text-lg text-[var(--color-heading)] leading-relaxed font-medium">
                “Một vụ việc pháp lý thành công không đo đếm bằng số lượng văn bản được ký kết, mà bằng sự an tâm tuyệt đối của thân chủ khi đối diện với các ngã rẽ định mệnh.”
              </p>
              <div className="flex items-center gap-3.5 pt-2 border-t border-[var(--color-border)]">
                <div className="w-10 h-10 rounded-sm bg-[var(--color-primary)] border border-[var(--color-accent)]/40 flex items-center justify-center text-sm text-[var(--color-accent)] font-bold">
                  NT
                </div>
                <div>
                  <div className="font-bold text-sm text-[var(--color-heading)]">
                    Luật sư Nguyễn Văn Thành
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    Luật sư Điều hành (Managing Partner) • SAIGONLEX [DEMO]
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/mau-2/gioi-thieu"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition group font-semibold"
              >
                <span>Đọc bản tuyên ngôn triết lý đầy đủ</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
