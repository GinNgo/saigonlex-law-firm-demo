"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, Menu, X, ArrowUpRight, Phone, ShieldCheck, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { PRACTICE_AREAS } from "@/data/services";

export function HeaderMau2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Trang chủ", href: "/mau-2" },
    { label: "Triết lý", href: "/mau-2/gioi-thieu" },
    { label: "Lĩnh vực", href: "/mau-2/linh-vuc", hasDropdown: true },
    { label: "Luật sư", href: "/mau-2/doi-ngu" },
    { label: "Ấn phẩm", href: "/mau-2/tin-tuc" },
    { label: "Liên hệ", href: "/mau-2/lien-he" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top micro ticker */}
      <div className="bg-[#05080E] text-[#94A3B8] text-[11px] py-1.5 px-4 border-b border-amber-900/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[#D4AF37] font-serif tracking-wider">SAIGONLEX PRIVATE CLIENT & CORPORATE</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Cam kết bảo mật & tiêu chuẩn pháp lý quốc tế</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400/80">Hotline cố vấn: {SITE_CONFIG.hotline}</span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-500 font-mono text-[10px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              BẢN DEMO SANG TRỌNG
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#090E17]/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl"
            : "bg-[#090E17]/90 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram Logo */}
          <Link href="/mau-2" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#1A2639] to-[#0A101D] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-inner group-hover:border-[#D4AF37] transition">
              <span className="font-serif font-black text-lg tracking-tighter text-[#D4AF37]">
                SL
              </span>
            </div>
            <div>
              <div className="font-serif text-xl tracking-wider text-[#FAF8F5] leading-none group-hover:text-[#D4AF37] transition">
                SAIGON<span className="text-[#D4AF37] font-semibold">LEX</span>
              </div>
              <div className="text-[9px] font-sans tracking-[0.25em] text-[#94A3B8] uppercase mt-1">
                PREMIUM LAW FIRM
              </div>
            </div>
          </Link>

          {/* Nav links desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-xs uppercase tracking-widest font-medium rounded transition flex items-center gap-1 ${
                        pathname.startsWith(link.href)
                          ? "text-[#D4AF37] bg-white/5"
                          : "text-slate-300 hover:text-[#D4AF37] hover:bg-white/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3 h-3 text-[#D4AF37]/60" />
                    </Link>

                    {/* Dropdown */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-[#0F1726] border border-amber-500/20 rounded shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-[10px] font-serif uppercase tracking-widest text-[#D4AF37] px-3 py-1.5 border-b border-white/5 mb-1">
                          Lĩnh vực tư vấn trọng điểm
                        </div>
                        {PRACTICE_AREAS.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/mau-2/linh-vuc/${svc.slug}`}
                            className="px-3 py-2 text-xs text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 rounded flex items-center justify-between transition group/item"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <span>{svc.shortTitle}</span>
                            <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover/item:text-[#D4AF37] transition" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-xs uppercase tracking-widest font-medium rounded transition ${
                    isActive
                      ? "text-[#D4AF37] bg-white/5 font-semibold"
                      : "text-slate-300 hover:text-[#D4AF37] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/mau-2/lien-he"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded group bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA820A] hover:bg-gradient-to-l text-slate-950 shadow-lg hover:shadow-amber-500/20 transition"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-150 bg-[#090E17] group-hover:bg-opacity-0 text-[#F3E5AB] group-hover:text-slate-950 font-sans tracking-wide uppercase text-[11px] flex items-center gap-2">
                <span>Tư vấn Kín & Bảo Mật</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#090E17] border-t border-amber-500/20 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-wider text-slate-300 hover:text-[#D4AF37] py-2 border-b border-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/mau-2/lien-he"
                className="w-full text-center block bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-slate-950 font-bold py-3 rounded text-xs uppercase tracking-widest shadow"
                onClick={() => setMobileOpen(false)}
              >
                Đặt lịch tư vấn kín
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
