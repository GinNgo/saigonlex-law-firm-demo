"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronDown,
  Scale,
  Shield,
  ArrowRight
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { PRACTICE_AREAS } from "@/data/services";

export function HeaderMau1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Trang chủ", href: "/mau-1" },
    { label: "Giới thiệu", href: "/mau-1/gioi-thieu" },
    {
      label: "Lĩnh vực hành nghề",
      href: "/mau-1/linh-vuc",
      hasDropdown: true
    },
    { label: "Đội ngũ luật sư", href: "/mau-1/doi-ngu" },
    { label: "Kiến thức pháp lý", href: "/mau-1/tin-tuc" },
    { label: "Liên hệ", href: "/mau-1/lien-he" }
  ];

  return (
    <header className="w-full z-40 bg-white">
      {/* Top Bar */}
      <div className="bg-[#0A2540] text-slate-300 text-xs py-2 px-4 border-b border-blue-950 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{SITE_CONFIG.workingHours}</span>
            </span>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-amber-300/80 font-medium">Bản quyền thử nghiệm [DEMO]</span>
            <a
              href={`tel:${SITE_CONFIG.hotline.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 text-white font-semibold hover:text-amber-300 transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Hotline 24/7: {SITE_CONFIG.hotline}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? "sticky top-0 bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3"
            : "relative bg-white border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/mau-1" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-[#0A2540] text-[#C5A880] flex items-center justify-center font-bold shadow-sm group-hover:bg-[#0f3d68] transition">
              <Scale className="w-5 h-5 text-[#C5A880]" />
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-[#0A2540] leading-none">
                SAIGON<span className="text-[#C5A880]">LEX</span>
              </div>
              <div className="text-[10px] tracking-wider text-slate-500 font-semibold uppercase mt-0.5">
                Corporate Law Firm • DEMO
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition ${
                        pathname.startsWith(link.href)
                          ? "text-[#0A2540] bg-slate-100"
                          : "text-slate-700 hover:text-[#0A2540] hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </Link>

                    {/* Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                          8 Lĩnh vực chuyên sâu
                        </div>
                        <div className="grid grid-cols-1 gap-0.5">
                          {PRACTICE_AREAS.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/mau-1/linh-vuc/${svc.slug}`}
                              className="px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#0A2540] hover:bg-slate-50 rounded flex items-center justify-between group/item"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <span>{svc.shortTitle}</span>
                              <ArrowRight className="w-3 h-3 text-slate-400 group-hover/item:text-[#0A2540] group-hover/item:translate-x-0.5 transition" />
                            </Link>
                          ))}
                        </div>
                        <div className="pt-2 mt-1 border-t border-slate-100 px-3 pb-1">
                          <Link
                            href="/mau-1/linh-vuc"
                            className="text-xs text-[#0A2540] font-semibold hover:underline flex items-center gap-1"
                          >
                            <span>Xem tất cả lĩnh vực</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition ${
                    isActive
                      ? "text-[#0A2540] bg-slate-100 font-bold"
                      : "text-slate-700 hover:text-[#0A2540] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/mau-1/lien-he"
              className="bg-[#0A2540] hover:bg-[#0f3d68] text-white text-sm font-semibold px-5 py-2.5 rounded shadow-sm hover:shadow transition flex items-center gap-2"
            >
              <span>Đặt lịch tư vấn</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded text-slate-700 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 rounded text-sm font-semibold text-slate-800 hover:bg-slate-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`tel:${SITE_CONFIG.hotline.replace(/[^0-9]/g, "")}`}
                  className="text-xs text-slate-600 flex items-center gap-2 px-3 py-2 bg-slate-50 rounded"
                >
                  <Phone className="w-4 h-4 text-[#0A2540]" />
                  <span>Hotline: {SITE_CONFIG.hotline}</span>
                </a>
                <Link
                  href="/mau-1/lien-he"
                  className="w-full text-center bg-[#0A2540] text-white text-sm font-semibold py-2.5 rounded shadow"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Đặt lịch tư vấn ngay
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
