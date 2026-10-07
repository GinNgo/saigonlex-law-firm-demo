"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  ShieldCheck,
  Scale,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { PRACTICE_AREAS_MAU3 } from "@/data/mau3Data";

export function FooterMau3() {
  return (
    <footer className="bg-[var(--bg-dark)] text-slate-300 border-t-2 border-[var(--color-accent)] pt-16 pb-8 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Office (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/brand/logo.png"
                  alt="SaigonLex Law Firm Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-heading text-lg font-bold tracking-tight text-white block">
                  SAIGONLEX LAW FIRM
                </span>
                <span className="text-[11px] text-[var(--color-accent)] uppercase tracking-wider block font-medium">
                  ĐOÀN LUẬT SƯ TP. HỒ CHÍ MINH
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-body">
              Hãng luật uy tín tại TP. Hồ Chí Minh với triết lý hành nghề{" "}
              <strong className="text-white">Tận Tâm – Linh Hoạt – Đúng Pháp Luật</strong>.
              Bảo vệ quyền và lợi ích hợp pháp tối đa cho thân chủ.
            </p>

            {/* Direct Contact info */}
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="text-slate-300">Trụ sở: Quận 1, TP. Hồ Chí Minh, Việt Nam</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span className="text-slate-300">
                  Hotline:{" "}
                  <a href="tel:0908033115" className="text-white font-bold hover:text-[var(--color-accent)] transition-colors">
                    0908 033 115
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span className="text-slate-300">Email: contact@saigonlex.vn</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span className="text-slate-300">Giờ làm việc: Thứ Hai – Thứ Sáu (08:00 – 17:30)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Practice Areas (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full" />
              <span>Lĩnh Vực Hành Nghề</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PRACTICE_AREAS_MAU3.slice(0, 6).map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/mau-3/linh-vuc/${area.slug}`}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[var(--color-accent)] group-hover:translate-x-0.5 transition-transform" />
                    <span>{area.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/mau-3/linh-vuc"
                  className="text-[var(--color-accent)] font-semibold hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <span>Xem tất cả 8 lĩnh vực</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Resources (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full" />
              <span>Dịch Vụ & Tài Liệu</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/mau-3/dich-vu"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[var(--color-accent)] group-hover:translate-x-0.5 transition-transform" />
                  <span>Tư vấn Doanh nghiệp Thường xuyên</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/mau-3/dich-vu"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[var(--color-accent)] group-hover:translate-x-0.5 transition-transform" />
                  <span>Rà soát & Soạn thảo Hợp đồng</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/mau-3/bieu-mau"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[var(--color-accent)] group-hover:translate-x-0.5 transition-transform" />
                  <span>Kho Biểu mẫu Pháp lý Miễn phí</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/mau-3/kien-thuc"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[var(--color-accent)] group-hover:translate-x-0.5 transition-transform" />
                  <span>Kiến thức Pháp luật Chuyên sâu</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/mau-3/tin-tuc"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[var(--color-accent)] group-hover:translate-x-0.5 transition-transform" />
                  <span>Bản tin Chính sách & Pháp luật</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/mau-3/tuyen-dung"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[var(--color-accent)] group-hover:translate-x-0.5 transition-transform" />
                  <span>Cơ hội Tuyển dụng Luật sư</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Compliance (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full" />
              <span>Pháp Lý & Hãng Luật</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/mau-3/gioi-thieu" className="text-slate-300 hover:text-white transition-colors">
                  Về Hãng luật SaigonLex
                </Link>
              </li>
              <li>
                <Link href="/mau-3/doi-ngu" className="text-slate-300 hover:text-white transition-colors">
                  Đội ngũ Luật sư
                </Link>
              </li>
              <li>
                <Link href="/mau-3/lien-he" className="text-slate-300 hover:text-white transition-colors">
                  Liên hệ & Đặt lịch
                </Link>
              </li>
              <li>
                <Link href="/mau-3/chinh-sach-bao-mat" className="text-slate-300 hover:text-white transition-colors">
                  Chính sách Bảo mật
                </Link>
              </li>
              <li>
                <a href="#dat-lich-tu-van" className="text-slate-300 hover:text-white transition-colors">
                  Tư vấn Trực tuyến
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-[11px] text-[var(--color-accent)] font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Bảo mật 100% hồ sơ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="py-6 border-b border-white/10 text-[11px] leading-relaxed text-center sm:text-left">
          <div className="p-4 rounded-lg bg-black/25 border border-white/10 text-slate-300 space-y-1">
            <p className="text-slate-300 text-xs leading-relaxed">
              <strong className="text-[var(--color-accent)] font-semibold">Lưu ý miễn trừ trách nhiệm pháp lý:</strong>{" "}
              Các bài viết, ý kiến pháp lý và biểu mẫu được công bố trên website của Công ty Luật SaigonLex chỉ mang
              tính chất thông tin tham khảo chung, không được coi là ý kiến tư vấn pháp lý chính thức
              cho bất kỳ trường hợp hoặc vụ việc cụ thể nào. Quý vị cần liên hệ trực tiếp với Luật sư
              để được nghiên cứu hồ sơ và cung cấp giải pháp pháp lý phù hợp.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} CÔNG TY LUẬT SAIGONLEX • ĐOÀN LUẬT SƯ TP. HỒ CHÍ MINH. Tất cả
            quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/mau-3/chinh-sach-bao-mat" className="text-slate-400 hover:text-white transition-colors">
              Chính sách bảo mật
            </Link>
            <span>•</span>
            <Link href="/mau-3/lien-he" className="text-slate-400 hover:text-white transition-colors">
              Bản đồ chỉ đường
            </Link>
            <span>•</span>
            <span className="text-[var(--color-accent)] font-medium">MẪU C – Classic Modern Premium</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
