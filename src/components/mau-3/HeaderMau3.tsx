"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Shield,
  Briefcase,
  FileText,
  Users,
  Scale,
  BookOpen,
  Newspaper
} from "lucide-react";
import { PRACTICE_AREAS_MAU3, FEATURED_SERVICES_MAU3 } from "@/data/mau3Data";

const RESOURCE_ITEMS_MAU3 = [
  {
    title: "Tin tức & Sự kiện",
    desc: "Cập nhật hoạt động SaigonLex, thông cáo & án lệ",
    href: "/mau-3/tin-tuc",
    icon: Newspaper,
    badge: "Mới",
    badgeColor: "bg-red-50 text-red-700 border border-red-200/60"
  },
  {
    title: "Kiến thức pháp lý",
    desc: "Cẩm nang chuyên sâu, giải đáp & phân tích văn bản",
    href: "/mau-3/kien-thuc",
    icon: BookOpen,
    badge: "Chuyên sâu",
    badgeColor: "bg-blue-50 text-blue-700 border border-blue-200/60"
  },
  {
    title: "Biểu mẫu pháp luật",
    desc: "Kho biểu mẫu chuẩn doanh nghiệp & tố tụng tải về",
    href: "/mau-3/bieu-mau",
    icon: FileText,
    badge: "Tải mẫu",
    badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
  },
  {
    title: "Tuyển dụng nhân tài",
    desc: "Cơ hội nghề nghiệp luật sư, cộng sự & thực tập sinh",
    href: "/mau-3/tuyen-dung",
    icon: Briefcase,
    badge: "Đang tuyển",
    badgeColor: "bg-amber-50 text-amber-700 border border-amber-200/60"
  }
];

export function HeaderMau3() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Trang chủ", href: "/mau-3" },
    { label: "Giới thiệu", href: "/mau-3/gioi-thieu" },
    {
      label: "Lĩnh vực",
      href: "/mau-3/linh-vuc",
      hasDropdown: "practice"
    },
    {
      label: "Dịch vụ",
      href: "/mau-3/dich-vu",
      hasDropdown: "services"
    },
    { label: "Đội ngũ", href: "/mau-3/doi-ngu" },
    {
      label: "Tài nguyên & Tin tức",
      href: "/mau-3/tin-tuc",
      hasDropdown: "resources"
    },
    { label: "Liên hệ", href: "/mau-3/lien-he" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white select-none transition-shadow duration-300 shadow-xs">
      {/* 01. Top Information Bar (Corporate standard) */}
      <div
        className={`bg-[#0E2945] text-slate-200 text-xs px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 py-0 opacity-0 border-b-0" : "max-h-12 py-2 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-[12.5px]">
            <a
              href="tel:0908033115"
              className="flex items-center gap-1.5 hover:text-[#AD8B55] transition text-amber-200/90 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#AD8B55]" />
              <span>Hotline: <strong>0908 033 115</strong></span>
            </a>
            <a
              href="mailto:info.saigonlex@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>info.saigonlex@gmail.com</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-300 hidden lg:flex">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>26-28 Cao Đức Lân, P. An Phú, TP. Thủ Đức, TP.HCM</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[12px] text-slate-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400/80" />
              <span>T2 – T6: 08:00 – 17:30 | T7: 08:00 – 12:00</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span className="text-amber-200/80 font-semibold tracking-wide">
              Đoàn Luật sư TP.HCM
            </span>
          </div>
        </div>
      </div>

      {/* 02. Premium Main Navbar */}
      <nav
        aria-label="Menu chính"
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-white/98 text-[#171A1F] shadow-sm backdrop-blur-md py-3 border-stone-200"
            : "bg-white text-[#171A1F] py-3.5 sm:py-4 border-stone-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/mau-3" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative shrink-0">
              <Image
                src="/brand/logo.png"
                alt="Logo Công ty Luật SaigonLex"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#AD8B55] font-bold leading-none">
                Công ty Luật TNHH
              </span>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#17365D] group-hover:text-[#0E2945] transition-colors leading-tight font-serif">
                SAIGON<span className="text-[#AD8B55]">LEX</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/mau-3"
                  ? pathname === "/mau-3"
                  : pathname.startsWith(item.href);

              if (item.hasDropdown === "practice") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setPracticeDropdownOpen(true)}
                    onMouseLeave={() => setPracticeDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition ${
                        isActive
                          ? "text-[#17365D] bg-stone-100/90 font-bold"
                          : "text-[#202124] hover:text-[#17365D] hover:bg-stone-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          practiceDropdownOpen ? "rotate-180 text-[#17365D]" : "text-stone-400"
                        }`}
                      />
                    </Link>

                    {/* Mega Dropdown for Practice Areas */}
                    <AnimatePresence>
                      {practiceDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 w-[540px] bg-white rounded-2xl shadow-2xl border border-stone-200 p-5 grid grid-cols-2 gap-3 z-50 mt-1"
                        >
                          <div className="col-span-2 pb-2.5 mb-1 border-b border-stone-100 flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                              8 Lĩnh Vực Hoạt Động Trọng Tâm
                            </span>
                            <Link
                              href="/mau-3/linh-vuc"
                              className="text-xs text-[#17365D] font-bold hover:underline flex items-center gap-1"
                            >
                              <span>Tất cả lĩnh vực</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                          {PRACTICE_AREAS_MAU3.map((pa) => (
                            <Link
                              key={pa.id}
                              href={`/mau-3/linh-vuc/${pa.slug}`}
                              className="group/item p-2.5 rounded-xl hover:bg-stone-50 transition border border-transparent hover:border-stone-200/80 flex items-start gap-2.5"
                            >
                              <span className="text-[11px] font-mono font-bold text-[#AD8B55] mt-0.5">
                                {pa.number}
                              </span>
                              <div>
                                <h4 className="text-xs font-bold text-[#111827] group-hover/item:text-[#17365D] transition">
                                  {pa.title}
                                </h4>
                                <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                                  {pa.shortDesc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (item.hasDropdown === "services") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition ${
                        isActive
                          ? "text-[#17365D] bg-stone-100/90 font-bold"
                          : "text-[#202124] hover:text-[#17365D] hover:bg-stone-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-[#17365D]" : "text-stone-400"
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-stone-200 p-4 space-y-1.5 z-50 mt-1"
                        >
                          <div className="pb-2 mb-1 border-b border-stone-100 flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                              Dịch Vụ Pháp Lý Nổi Bật
                            </span>
                            <Link
                              href="/mau-3/dich-vu"
                              className="text-xs text-[#17365D] font-bold hover:underline"
                            >
                              Xem tất cả
                            </Link>
                          </div>
                          {FEATURED_SERVICES_MAU3.map((svc) => (
                            <Link
                              key={svc.id}
                              href={svc.href}
                              className="group/item p-2 rounded-lg hover:bg-stone-50 transition block"
                            >
                              <div className="text-xs font-bold text-stone-900 group-hover/item:text-[#17365D]">
                                {svc.title}
                              </div>
                              <div className="text-[10.5px] text-stone-500 font-mono">
                                {svc.subtitle}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (item.hasDropdown === "resources") {
                const isResourcesActive =
                  pathname.startsWith("/mau-3/tin-tuc") ||
                  pathname.startsWith("/mau-3/kien-thuc") ||
                  pathname.startsWith("/mau-3/bieu-mau") ||
                  pathname.startsWith("/mau-3/tuyen-dung");

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setResourcesDropdownOpen(true)}
                    onMouseLeave={() => setResourcesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition cursor-pointer ${
                        isResourcesActive
                          ? "text-[#17365D] bg-stone-100/90 font-bold"
                          : "text-[#202124] hover:text-[#17365D] hover:bg-stone-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          resourcesDropdownOpen ? "rotate-180 text-[#17365D]" : "text-stone-400"
                        }`}
                      />
                    </button>

                    {/* Resources Dropdown */}
                    <AnimatePresence>
                      {resourcesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 w-[380px] bg-white rounded-2xl shadow-2xl border border-stone-200 p-3 space-y-1 z-50 mt-1"
                        >
                          <div className="px-3 py-2 border-b border-stone-100 flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                              Tài Nguyên & Truyền Thông
                            </span>
                            <span className="text-[10px] bg-amber-50 text-[#AD8B55] font-semibold px-2 py-0.5 rounded-full border border-amber-200/60">
                              Cập nhật liên tục
                            </span>
                          </div>
                          {RESOURCE_ITEMS_MAU3.map((res) => {
                            const Icon = res.icon;
                            const isItemActive =
                              pathname === res.href || pathname.startsWith(res.href + "/");
                            return (
                              <Link
                                key={res.href}
                                href={res.href}
                                onClick={() => setResourcesDropdownOpen(false)}
                                className={`group/item p-2.5 rounded-xl hover:bg-stone-50 transition flex items-start gap-3 border ${
                                  isItemActive
                                    ? "bg-stone-50 border-stone-200"
                                    : "border-transparent"
                                }`}
                              >
                                <div
                                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition ${
                                    isItemActive
                                      ? "bg-[#17365D] text-white"
                                      : "bg-stone-100 text-[#17365D] group-hover/item:bg-[#17365D] group-hover/item:text-white"
                                  }`}
                                >
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1">
                                    <h4 className="text-xs font-bold text-[#111827] group-hover/item:text-[#17365D] transition">
                                      {res.title}
                                    </h4>
                                    {res.badge && (
                                      <span
                                        className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${res.badgeColor}`}
                                      >
                                        {res.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                                    {res.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                    isActive
                      ? "text-[#17365D] bg-stone-100/90 font-bold"
                      : "text-[#202124] hover:text-[#17365D] hover:bg-stone-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Header CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/mau-3/lien-he"
              className="bg-[#17365D] hover:bg-[#0E2945] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              <span>Đặt lịch tư vấn</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:0908033115"
              className="p-2 rounded-lg bg-stone-100 text-[#17365D] sm:hidden"
              aria-label="Gọi hotline"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-100 text-stone-700 hover:text-stone-900 focus:outline-hidden"
              aria-label="Mở menu di động"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-stone-200 overflow-hidden shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <div className="px-4 py-5 space-y-3">
              <div className="space-y-1">
                {navLinks.map((item) => {
                  if (item.hasDropdown === "resources") {
                    return (
                      <div
                        key={item.href}
                        className="rounded-xl border border-stone-200/80 bg-stone-50/70 p-2.5 space-y-1.5 my-2"
                      >
                        <div className="px-1.5 py-1 text-xs font-bold uppercase tracking-wider text-[#17365D] flex items-center justify-between">
                          <span>{item.label}</span>
                          <span className="text-[10px] bg-stone-200/80 text-stone-700 px-1.5 py-0.5 rounded font-medium">
                            4 chuyên mục
                          </span>
                        </div>
                        <div className="space-y-1">
                          {RESOURCE_ITEMS_MAU3.map((res) => {
                            const Icon = res.icon;
                            const isItemActive =
                              pathname === res.href || pathname.startsWith(res.href + "/");
                            return (
                              <Link
                                key={res.href}
                                href={res.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition ${
                                  isItemActive
                                    ? "bg-white text-[#17365D] font-bold shadow-xs border border-stone-200"
                                    : "text-stone-700 hover:bg-white"
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <Icon className="w-3.5 h-3.5 text-[#AD8B55]" />
                                  <span>{res.title}</span>
                                </span>
                                {res.badge && (
                                  <span
                                    className={`text-[9.5px] px-1.5 py-0.5 rounded ${res.badgeColor}`}
                                  >
                                    {res.badge}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }

                  const isActive =
                    item.href === "/mau-3"
                      ? pathname === "/mau-3"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                        isActive
                          ? "bg-stone-100 text-[#17365D] font-bold"
                          : "text-stone-800 hover:bg-stone-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="pt-3 border-t border-stone-100 space-y-2">
                <Link
                  href="/mau-3/lien-he"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#17365D] text-white font-bold text-center py-3 rounded-xl block text-sm"
                >
                  Đặt lịch tư vấn trực tiếp
                </Link>
                <a
                  href="tel:0908033115"
                  className="w-full bg-stone-100 text-stone-800 font-semibold text-center py-2.5 rounded-xl block text-xs flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#AD8B55]" />
                  <span>Hotline: 0908 033 115</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
