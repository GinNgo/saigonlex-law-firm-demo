"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { PRACTICE_AREAS } from "@/data/services";

export function HeaderMau2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

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
    <header className="sticky top-0 z-40 w-full bg-[var(--surface)] transition-shadow duration-200 transform-gpu shadow-xs">
      {/* Editorial Micro Header Strip */}
      <div
        className={`bg-[var(--bg-section-alt)] text-[var(--color-text-secondary)] text-[11px] px-4 border-b border-[var(--color-border)] hidden md:block md:transition-all md:duration-300 md:overflow-hidden ${
          isScrolled ? "md:max-h-0 md:py-0 md:opacity-0 md:border-b-0" : "md:max-h-10 md:py-1.5 md:opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="tracking-wide text-[var(--color-heading)] font-semibold">SAIGONLEX PRIVATE CLIENT & ADVISORY</span>
            <span className="opacity-40">/</span>
            <span className="font-normal text-[var(--color-text-secondary)]">Đặc quyền Cố vấn Chiến lược & Trọng tài Thương mại</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[var(--color-text-secondary)]">Hotline: <strong className="text-[var(--color-heading)]">{SITE_CONFIG.hotline}</strong></span>
            <span className="opacity-40">/</span>
            <span className="font-mono text-[10px] text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded border border-[var(--color-accent)]/30 font-medium">
              MẪU B • SIGNATURE PREMIUM
            </span>
          </div>
        </div>
      </div>

      {/* Main Luxury Bar (Bright Ivory / Themed Surface) */}
      <div
        className={`w-full border-b transition-colors duration-200 ${
          isScrolled
            ? "bg-[var(--surface)]/98 backdrop-blur-md border-[var(--color-border)] md:py-3.5 shadow-sm"
            : "bg-[var(--surface)] border-[var(--color-border)] md:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-auto flex items-center justify-between">
          {/* Monogram Brand Mark */}
          <Link href="/mau-2" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-sm bg-[var(--color-primary)] border border-[var(--color-accent)]/50 flex items-center justify-center text-[var(--color-accent)] shadow-sm group-hover:border-[var(--color-accent)] transition">
              <span className="font-bold text-lg tracking-tight text-[var(--color-accent)]">
                SL
              </span>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-[var(--color-heading)] leading-none group-hover:text-[var(--color-primary)] transition">
                SAIGON<span className="text-[var(--color-accent)] font-bold">LEX</span>
              </div>
              <div className="text-[10px] font-sans tracking-wider text-[var(--color-accent)] uppercase mt-1 font-semibold">
                SIGNATURE LEGAL ADVISORY
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
                      className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold rounded transition flex items-center gap-1 ${
                        pathname.startsWith(link.href)
                          ? "text-[var(--color-primary)] font-bold bg-[var(--bg-section-alt)]"
                          : "text-[var(--color-nav)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-section-alt)]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3 h-3 text-[var(--color-accent)]" />
                    </Link>

                    {/* Editorial Dropdown */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-[var(--surface)] border border-[var(--color-border)] rounded-sm shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="text-[10px] uppercase tracking-wider text-[var(--color-accent)] px-2 py-1 border-b border-[var(--color-border)] mb-1 font-bold">
                          Lĩnh vực Cố vấn Tuyển chọn
                        </div>
                        {PRACTICE_AREAS.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/mau-2/linh-vuc/${svc.slug}`}
                            className="px-2.5 py-2 text-xs text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-section-alt)] rounded-sm flex items-center justify-between transition group/item font-medium"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <span>{svc.shortTitle}</span>
                            <ArrowUpRight className="w-3 h-3 text-[var(--color-text-muted)] group-hover/item:text-[var(--color-primary)] transition" />
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
                  className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold transition rounded ${
                    isActive
                      ? "text-[var(--color-primary)] font-bold bg-[var(--bg-section-alt)]"
                      : "text-[var(--color-nav)] hover:text-[var(--color-primary)] hover:bg-[var(--bg-section-alt)]"
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
              className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-sm group bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition shadow-sm"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-150 text-white tracking-wider uppercase text-xs flex items-center gap-1.5 font-semibold">
                <span>Hội đàm Kín</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-[var(--color-heading)] hover:text-[var(--color-primary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-[var(--color-primary)]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[var(--surface)] border-t border-[var(--color-border)] px-6 py-6 space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-wider text-[var(--color-nav)] font-semibold hover:text-[var(--color-primary)] py-2 border-b border-[var(--color-border)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/mau-2/lien-he"
                className="w-full text-center block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold py-3 rounded-sm text-xs uppercase tracking-wider shadow"
                onClick={() => setMobileOpen(false)}
              >
                Đặt lịch hội đàm kín
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Editorial Scroll Reading Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] origin-left z-50 pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}
