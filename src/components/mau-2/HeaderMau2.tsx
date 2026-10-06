"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
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
      {/* Editorial Micro Header Strip */}
      <div className="bg-[#FAF7F0] text-[#6B7280] text-[11px] py-1.5 px-4 border-b border-[#E5DEC9] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-serif tracking-wider text-[#0C1829] font-medium">SAIGONLEX PRIVATE CLIENT & ADVISORY</span>
            <span className="text-[#D1C7B2]">/</span>
            <span className="font-light text-slate-500">Đặc quyền Cố vấn Chiến lược & Trọng tài Thương mại</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-600 font-serif">Hotline: <strong className="text-[#0C1829] font-sans">{SITE_CONFIG.hotline}</strong></span>
            <span className="text-[#D1C7B2]">/</span>
            <span className="font-mono text-[10px] text-[#997836] bg-[#C5A059]/10 px-2 py-0.5 rounded border border-[#C5A059]/30">
              EDITORIAL DEMO
            </span>
          </div>
        </div>
      </div>

      {/* Main Luxury Bar (Bright Ivory Surface) */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E5DEC9] py-3.5 shadow-sm"
            : "bg-[#FDFBF7] border-b border-[#EFE9D9] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Monogram Brand Mark */}
          <Link href="/mau-2" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-sm bg-[#0C1829] border border-[#C5A059]/50 flex items-center justify-center text-[#F5E6BE] shadow-sm group-hover:border-[#C5A059] transition">
              <span className="font-serif font-black text-lg tracking-tighter text-[#EBD59B]">
                SL
              </span>
            </div>
            <div>
              <div className="font-serif text-xl tracking-wider text-[#0C1829] leading-none group-hover:text-[#997836] transition">
                SAIGON<span className="text-[#C5A059] font-semibold">LEX</span>
              </div>
              <div className="text-[9px] font-sans tracking-[0.28em] text-[#8C7A58] uppercase mt-1 font-medium">
                EDITORIAL LEGAL ADVISORY
              </div>
            </div>
          </Link>

          {/* Desktop Links (Refined Editorial Spacing) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
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
                      className={`px-3 py-2 text-xs uppercase tracking-widest font-serif rounded transition flex items-center gap-1 ${
                        pathname.startsWith(link.href)
                          ? "text-[#0C1829] font-bold bg-[#FAF7F0]"
                          : "text-slate-700 hover:text-[#0C1829] hover:bg-[#FAF7F0]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3 h-3 text-[#C5A059]" />
                    </Link>

                    {/* Editorial Dropdown */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white border border-[#E5DEC9] rounded-sm shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="text-[10px] font-serif uppercase tracking-widest text-[#997836] px-2 py-1 border-b border-[#F0EAD8] mb-1 font-semibold">
                          Lĩnh vực Cố vấn Tuyển chọn
                        </div>
                        {PRACTICE_AREAS.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/mau-2/linh-vuc/${svc.slug}`}
                            className="px-2.5 py-2 text-xs text-slate-700 hover:text-[#0C1829] hover:bg-[#FAF7F0] rounded-sm flex items-center justify-between transition group/item font-serif"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <span>{svc.shortTitle}</span>
                            <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover/item:text-[#C5A059] transition" />
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
                  className={`px-3 py-2 text-xs uppercase tracking-widest font-serif transition rounded ${
                    isActive
                      ? "text-[#0C1829] font-bold bg-[#FAF7F0]"
                      : "text-slate-700 hover:text-[#0C1829] hover:bg-[#FAF7F0]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Editorial Outline Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/mau-2/lien-he"
              className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-sm group bg-[#0C1829] hover:bg-[#152740] transition shadow-sm"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-150 text-[#F5E6BE] font-serif tracking-widest uppercase text-[11px] flex items-center gap-1.5 font-medium">
                <span>Hội đàm Kín</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-800 hover:text-[#0C1829]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-[#0C1829]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#FDFBF7] border-t border-[#E5DEC9] px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-serif uppercase tracking-wider text-slate-800 hover:text-[#C5A059] py-2 border-b border-[#F0EAD8]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/mau-2/lien-he"
                className="w-full text-center block bg-[#0C1829] text-[#F5E6BE] font-serif font-bold py-3 rounded-sm text-xs uppercase tracking-widest shadow"
                onClick={() => setMobileOpen(false)}
              >
                Đặt lịch hội đàm kín
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
