"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll, motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronDown,
  Scale,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { PRACTICE_AREAS } from "@/data/services";

export function HeaderMau1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
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
    <header className="sticky top-0 z-40 w-full bg-[var(--surface)] transition-shadow duration-300">
      {/* Executive Top Bar */}
      <div
        className={`bg-[var(--bg-dark)] text-slate-200 text-xs px-4 border-b border-white/10 hidden md:block transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 py-0 opacity-0 border-b-0" : "max-h-12 py-2 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>{SITE_CONFIG.workingHours}</span>
            </span>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300/90 bg-white/10 px-2 py-0.5 rounded border border-white/20">
              <ShieldCheck className="w-3 h-3 text-[var(--color-accent)]" />
              <span>MẪU A • CORPORATE PREMIUM</span>
            </span>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${SITE_CONFIG.hotline.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 text-white font-bold hover:text-[var(--color-accent)] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>Hotline 24/7: {SITE_CONFIG.hotline}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-[var(--surface)]/95 backdrop-blur-md shadow-sm border-[var(--color-border)] py-3"
            : "relative bg-[var(--surface)] border-[var(--color-border)] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/mau-1" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-sm bg-[var(--color-primary)] text-[var(--color-accent)] flex items-center justify-center font-bold shadow-sm group-hover:bg-[var(--color-primary-dark)] transition">
              <Scale className="w-5 h-5 text-[var(--color-accent)]" />
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-[var(--color-primary)] leading-none">
                SAIGON<span className="text-[var(--color-accent)]">LEX</span>
              </div>
              <div className="text-[10px] tracking-wider text-slate-500 font-semibold uppercase mt-0.5">
                Corporate Law Firm
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
                          ? "text-[var(--color-primary)] bg-[var(--bg-section-alt)] font-bold"
                          : "text-[#1F2937] hover:text-[var(--color-primary)] hover:bg-[var(--bg-section-alt)]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                    </Link>

                    {/* Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-84 bg-[var(--surface)] rounded-lg shadow-xl border border-[var(--color-border)] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wide px-3 py-1.5 border-b border-[var(--color-border)] mb-1">
                          8 Lĩnh vực chuyên sâu
                        </div>
                        <div className="grid grid-cols-1 gap-0.5">
                          {PRACTICE_AREAS.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/mau-1/linh-vuc/${svc.slug}`}
                              className="px-3 py-2 text-xs font-medium text-[#1F2937] hover:text-[var(--color-primary)] hover:bg-[var(--bg-section-alt)] rounded flex items-center justify-between group/item"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <span>{svc.shortTitle}</span>
                              <ArrowRight className="w-3 h-3 text-[#6B7280] group-hover/item:text-[var(--color-primary)] group-hover/item:translate-x-0.5 transition" />
                            </Link>
                          ))}
                        </div>
                        <div className="pt-2 mt-1 border-t border-[var(--color-border)] px-3 pb-1">
                          <Link
                            href="/mau-1/linh-vuc"
                            className="text-xs text-[var(--color-primary)] font-bold hover:underline flex items-center gap-1"
                          >
                            <span>Xem tất cả lĩnh vực</span>
                            <ArrowRight className="w-3 h-3 text-[var(--color-accent)]" />
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
                      ? "text-[var(--color-primary)] bg-[var(--bg-section-alt)] font-bold"
                      : "text-[#1F2937] hover:text-[var(--color-primary)] hover:bg-[var(--bg-section-alt)]"
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
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded shadow-sm hover:shadow transition flex items-center gap-2"
            >
              <span>Đặt lịch tư vấn</span>
              <ArrowRight className="w-4 h-4 text-[var(--color-accent)]" />
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
          <div className="lg:hidden bg-[var(--surface)] border-t border-[var(--color-border)] px-4 pt-3 pb-6 shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 rounded text-sm font-semibold text-[var(--color-text)] hover:bg-[var(--bg-section-alt)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-[var(--color-border)] flex flex-col gap-2">
                <a
                  href={`tel:${SITE_CONFIG.hotline.replace(/[^0-9]/g, "")}`}
                  className="text-xs text-[var(--color-text-secondary)] flex items-center gap-2 px-3 py-2 bg-[var(--bg-section-alt)] rounded"
                >
                  <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Hotline: {SITE_CONFIG.hotline}</span>
                </a>
                <Link
                  href="/mau-1/lien-he"
                  className="w-full text-center bg-[var(--color-primary)] text-white text-sm font-semibold py-2.5 rounded shadow"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Đặt lịch tư vấn ngay
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Subtle Scroll Reading Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[var(--color-accent,#B3955B)] origin-left z-50 pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}
