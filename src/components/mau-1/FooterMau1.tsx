import React from "react";
import Link from "next/link";
import { Scale, MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { PRACTICE_AREAS } from "@/data/services";

export function FooterMau1() {
  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t border-slate-800">
      {/* Top CTA Strip */}
      <div className="bg-[#071324] border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Cần đánh giá hồ sơ pháp lý hoặc bảo vệ quyền lợi doanh nghiệp?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Đội ngũ luật sư SAIGONLEX sẵn sàng tiếp nhận, phân tích rủi ro và phản hồi phương án sơ bộ trong vòng 24 giờ làm việc.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/mau-1/lien-he"
              className="bg-[#C5A880] hover:bg-[#b39266] text-slate-950 font-bold px-6 py-3 rounded text-sm transition flex items-center gap-2"
            >
              <span>Đặt lịch hẹn tư vấn</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.hotline.replace(/[^0-9]/g, "")}`}
              className="bg-slate-800/80 hover:bg-slate-800 text-white font-semibold px-5 py-3 rounded text-sm border border-slate-700 transition"
            >
              Gọi {SITE_CONFIG.hotline}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#132E50] text-[#C5A880] flex items-center justify-center font-bold">
                <Scale className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white tracking-tight">
                  SAIGON<span className="text-[#C5A880]">LEX</span>
                </span>
                <p className="text-[11px] text-slate-300 uppercase tracking-widest font-medium">
                  Corporate Law Firm • DEMO
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Hãng luật chuyên sâu về tư vấn quản trị doanh nghiệp, M&A, hợp đồng thương mại, đầu tư FDI và giải quyết tranh chấp kinh doanh tại Việt Nam.
            </p>

            <div className="pt-2 text-xs text-amber-300/80 bg-slate-900/80 p-3 rounded border border-slate-800">
              <div className="flex items-center gap-1.5 font-semibold text-amber-300 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Thông tin pháp lý công ty [DEMO]</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {SITE_CONFIG.licensePlaceholder}
              </p>
            </div>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-[#C5A880] pl-2.5">
              Lĩnh vực hành nghề
            </h4>
            <ul className="space-y-2 text-xs">
              {PRACTICE_AREAS.slice(0, 5).map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/mau-1/linh-vuc/${svc.slug}`}
                    className="text-slate-300 hover:text-white transition flex items-center gap-1.5"
                  >
                    <span className="text-[#C5A880]">›</span>
                    <span>{svc.shortTitle}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/mau-1/linh-vuc"
                  className="text-[#C5A880] hover:underline font-semibold inline-block pt-1"
                >
                  Xem tất cả 8 lĩnh vực →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-[#C5A880] pl-2.5">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/mau-1/gioi-thieu" className="text-slate-300 hover:text-white transition">
                  Giới thiệu SAIGONLEX
                </Link>
              </li>
              <li>
                <Link href="/mau-1/doi-ngu" className="text-slate-300 hover:text-white transition">
                  Đội ngũ luật sư & chuyên gia
                </Link>
              </li>
              <li>
                <Link href="/mau-1/tin-tuc" className="text-slate-300 hover:text-white transition">
                  Bài viết kiến thức pháp luật
                </Link>
              </li>
              <li>
                <Link href="/mau-1/lien-he" className="text-slate-300 hover:text-white transition">
                  Đặt lịch hẹn & Liên hệ
                </Link>
              </li>
              <li>
                <Link href="/mau-1/chinh-sach-bao-mat" className="text-slate-300 hover:text-white transition">
                  Chính sách bảo mật & Điều khoản
                </Link>
              </li>
              <li>
                <Link href="/mau-2" className="text-amber-400 hover:underline font-semibold flex items-center gap-1">
                  <span>Xem MẪU B (Signature Premium)</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-[#C5A880] pl-2.5">
              Trụ sở SAIGONLEX
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{SITE_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{SITE_CONFIG.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 space-y-3">
          <p className="leading-relaxed bg-slate-900/50 p-4 rounded text-slate-300 border border-slate-800/80">
            <strong className="text-amber-400">Tuyên bố miễn trừ trách nhiệm pháp lý (Bản DEMO):</strong> {SITE_CONFIG.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
            <div>
              © 2026 SAIGONLEX Law Firm – Bản quyền thử nghiệm giao diện (DEMO). All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <Link href="/mau-1/chinh-sach-bao-mat" className="hover:text-white transition">
                Bảo mật thông tin
              </Link>
              <span>•</span>
              <Link href="/mau-1/lien-he" className="hover:text-white transition">
                Hỗ trợ khách hàng
              </Link>
              <span>•</span>
              <Link href="/" className="hover:text-white transition">
                Trang chọn mẫu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
