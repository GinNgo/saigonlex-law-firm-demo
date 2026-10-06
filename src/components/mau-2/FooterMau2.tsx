import React from "react";
import Link from "next/link";
import { Scale, ArrowUpRight, MapPin, Phone, Mail, ShieldAlert } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { PRACTICE_AREAS } from "@/data/services";

export function FooterMau2() {
  return (
    <footer className="bg-[#05080F] text-[#94A3B8] border-t border-amber-900/20 relative overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Presentation (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-sm bg-gradient-to-br from-[#1A2639] to-[#0A101D] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shadow">
                <span className="font-serif font-black text-xl text-[#D4AF37]">SL</span>
              </div>
              <div>
                <span className="font-serif text-2xl tracking-wider text-[#FAF8F5]">
                  SAIGON<span className="text-[#D4AF37] font-semibold">LEX</span>
                </span>
                <p className="text-[9px] font-sans tracking-[0.3em] text-[#94A3B8] uppercase mt-0.5">
                  PREMIUM LAW FIRM
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-sans leading-relaxed max-w-sm">
              Hãng luật cao cấp dành cho doanh nghiệp, định chế tài chính và thân chủ tư nhân. Tôn vinh nghệ thuật lập luận pháp lý chuẩn mực, tư duy chiến lược và sự bảo mật tuyệt đối.
            </p>

            <div className="p-4 rounded border border-amber-500/20 bg-[#0A101D]/80 text-[11px] text-amber-200/80 space-y-1">
              <div className="font-bold text-[#D4AF37] flex items-center gap-1.5">
                <span>Giấy phép hoạt động hành nghề [DEMO]</span>
              </div>
              <p className="text-slate-300">
                {SITE_CONFIG.licensePlaceholder}
              </p>
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#FAF8F5] mb-5 border-b border-amber-500/20 pb-2 font-semibold">
              Lĩnh vực Trọng điểm
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PRACTICE_AREAS.slice(0, 5).map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/mau-2/linh-vuc/${svc.slug}`}
                    className="text-slate-300 hover:text-[#D4AF37] transition flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37]/50">✦</span>
                    <span>{svc.shortTitle}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/mau-2/linh-vuc"
                  className="text-[#D4AF37] hover:underline text-xs flex items-center gap-1 font-semibold"
                >
                  <span>Khám phá 8 lĩnh vực</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#FAF8F5] mb-5 border-b border-amber-500/20 pb-2 font-semibold">
              Danh mục
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/mau-2/gioi-thieu" className="text-slate-300 hover:text-[#D4AF37] transition">
                  Triết lý & Tôn chỉ
                </Link>
              </li>
              <li>
                <Link href="/mau-2/doi-ngu" className="text-slate-300 hover:text-[#D4AF37] transition">
                  Đội ngũ Luật sư Trưởng
                </Link>
              </li>
              <li>
                <Link href="/mau-2/tin-tuc" className="text-slate-300 hover:text-[#D4AF37] transition">
                  Ấn phẩm & Phân tích Pháp lý
                </Link>
              </li>
              <li>
                <Link href="/mau-2/lien-he" className="text-slate-300 hover:text-[#D4AF37] transition">
                  Đặt lịch Thỉnh ý Kín
                </Link>
              </li>
              <li>
                <Link href="/mau-2/chinh-sach-bao-mat" className="text-slate-300 hover:text-[#D4AF37] transition">
                  Quy ước Bảo mật Thân chủ
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/mau-1" className="text-blue-400 hover:underline flex items-center gap-1 font-semibold">
                  <span>Xem MẪU A (Corporate Premium)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Private Office */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#FAF8F5] mb-5 border-b border-amber-500/20 pb-2 font-semibold">
              Văn phòng Cố vấn
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{SITE_CONFIG.hotline}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-14 pt-8 border-t border-white/5 space-y-4">
          <div className="p-4 rounded bg-[#080D17] border border-amber-900/30 text-[11px] text-slate-300 leading-relaxed">
            <span className="text-[#D4AF37] font-bold uppercase tracking-wider block mb-1">
              Khuyến cáo Bản quyền Giao diện Demo:
            </span>
            {SITE_CONFIG.disclaimer}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-2">
            <div>
              © 2026 SAIGONLEX Premium Law Firm. Thiết kế mẫu trình duyệt khách hàng.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/mau-2/chinh-sach-bao-mat" className="text-slate-300 hover:text-white transition">
                Chính sách Bảo mật
              </Link>
              <Link href="/mau-2/lien-he" className="text-slate-300 hover:text-white transition">
                Liên hệ
              </Link>
              <Link href="/" className="hover:text-amber-400 transition font-medium">
                Trang so sánh mẫu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
