"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Check,
  ChevronRight,
  ChevronLeft,
  X,
  Sparkles,
  Layers,
  Sliders,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import {
  useDemoTheme,
  DEMO_THEMES,
  DemoThemeId,
  DemoTemplateId
} from "@/context/DemoThemeContext";

export function DemoToolbar() {
  const {
    theme,
    setTheme,
    activeTemplate,
    switchToTemplate,
    isTransitioning
  } = useDemoTheme();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [hoveredTheme, setHoveredTheme] = useState<DemoThemeId | null>(null);

  const themeList: DemoThemeId[] = [
    "navy-gold",
    "burgundy-cream",
    "emerald-ivory",
    "charcoal-blue"
  ];

  return (
    <>
      {/* ======================================================== */}
      {/* 1. DESKTOP FLOATING DEMO TOOLBAR (Hidden on mobile)     */}
      {/* ======================================================== */}
      <aside
        aria-label="Demo Theme & Template Controls"
        className="hidden md:block fixed right-5 top-28 z-40 select-none transition-all duration-300"
      >
        <div className="relative">
          {/* Collapsed Pill Button */}
          {isCollapsed ? (
            <button
              onClick={() => setIsCollapsed(false)}
              className="flex items-center gap-2 bg-slate-900/95 hover:bg-slate-900 text-white text-xs font-semibold px-3.5 py-2.5 rounded-full shadow-2xl border border-white/20 backdrop-blur-md transition-all hover:scale-105 group"
              title="Mở bảng điều khiển giao diện demo"
            >
              <Palette className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>Giao diện & Màu sắc</span>
              <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="w-72 bg-white/95 text-slate-900 rounded-2xl shadow-2xl border border-slate-200/90 backdrop-blur-md p-4 space-y-4"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Bản xem trước giao diện
                  </span>
                </div>
                <button
                  onClick={() => setIsCollapsed(true)}
                  className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
                  title="Thu nhỏ thanh điều khiển"
                  aria-label="Thu nhỏ"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* SECTION 1: GIAO DIỆN (A / B) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="uppercase tracking-wider text-[11px] text-slate-500">
                    Giao diện
                  </span>
                  <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {activeTemplate === "mau-a" ? "Corporate" : "Signature"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
                  {/* Button Template A */}
                  <button
                    onClick={() => switchToTemplate("mau-a")}
                    disabled={isTransitioning}
                    className={`py-2 px-2.5 rounded-lg text-xs font-semibold transition-all flex flex-col items-center justify-center gap-0.5 ${
                      activeTemplate === "mau-a"
                        ? "bg-white text-slate-950 shadow-md font-bold border border-slate-200/80"
                        : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
                    }`}
                  >
                    <span className="flex items-center gap-1 text-[11px]">
                      <span>MẪU A</span>
                      {activeTemplate === "mau-a" && (
                        <Check className="w-3 h-3 text-emerald-600" />
                      )}
                    </span>
                    <span className="text-[9.5px] opacity-75 font-normal">
                      Corporate Premium
                    </span>
                  </button>

                  {/* Button Template B */}
                  <button
                    onClick={() => switchToTemplate("mau-b")}
                    disabled={isTransitioning}
                    className={`py-2 px-2.5 rounded-lg text-xs font-semibold transition-all flex flex-col items-center justify-center gap-0.5 ${
                      activeTemplate === "mau-b"
                        ? "bg-white text-slate-950 shadow-md font-bold border border-slate-200/80"
                        : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
                    }`}
                  >
                    <span className="flex items-center gap-1 text-[11px]">
                      <span>MẪU B</span>
                      {activeTemplate === "mau-b" && (
                        <Check className="w-3 h-3 text-emerald-600" />
                      )}
                    </span>
                    <span className="text-[9.5px] opacity-75 font-normal">
                      Signature Premium
                    </span>
                  </button>
                </div>
              </div>

              {/* SECTION 2: MÀU SẮC (4 Dots with Tooltips) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="uppercase tracking-wider text-[11px] text-slate-500">
                    Màu sắc
                  </span>
                  <span className="text-[11px] font-semibold text-[#0F172A]">
                    {DEMO_THEMES[theme].name}
                  </span>
                </div>

                <div className="flex items-center justify-between px-1 py-1 bg-slate-50 rounded-xl border border-slate-100">
                  {themeList.map((thId) => {
                    const thInfo = DEMO_THEMES[thId];
                    const isActive = theme === thId;

                    return (
                      <div
                        key={thId}
                        className="relative"
                        onMouseEnter={() => setHoveredTheme(thId)}
                        onMouseLeave={() => setHoveredTheme(null)}
                      >
                        <button
                          onClick={() => setTheme(thId)}
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 relative ${
                            isActive
                              ? "ring-2 ring-offset-2 ring-slate-900 shadow-md"
                              : "hover:ring-1 hover:ring-slate-300"
                          }`}
                          aria-label={`Chọn màu ${thInfo.name}`}
                          title={thInfo.name}
                        >
                          {/* Split Dual-Color Swatch */}
                          <div className="w-full h-full rounded-full overflow-hidden flex border border-black/10">
                            <span
                              className="w-1/2 h-full"
                              style={{ backgroundColor: thInfo.primary }}
                            />
                            <span
                              className="w-1/2 h-full"
                              style={{ backgroundColor: thInfo.accent }}
                            />
                          </div>

                          {/* Active Indicator Icon */}
                          {isActive && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-4 h-4 rounded-full bg-white/90 shadow-sm flex items-center justify-center">
                                <Check className="w-2.5 h-2.5 text-slate-900 stroke-[3]" />
                              </div>
                            </div>
                          )}
                        </button>

                        {/* Hover Tooltip */}
                        {hoveredTheme === thId && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-36 p-2 rounded-lg bg-slate-900 text-white text-[10px] text-center shadow-xl pointer-events-none z-50 animate-in fade-in zoom-in-95 duration-150">
                            <div className="font-bold">{thInfo.name}</div>
                            <div className="text-slate-300 text-[9px] mt-0.5 leading-tight">
                              {thInfo.nameVi}
                            </div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="text-[11px] text-slate-500 italic text-center pt-0.5">
                  {DEMO_THEMES[theme].desc}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </aside>

      {/* ======================================================== */}
      {/* 2. MOBILE DEMO CONTROLS (Floating trigger + Bottom Sheet)*/}
      {/* ======================================================== */}
      <div className="block md:hidden fixed bottom-5 right-4 z-40">
        <button
          onClick={() => setMobileDrawerOpen(true)}
          className="flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl border border-white/20 backdrop-blur-md active:scale-95 transition"
        >
          <Palette className="w-4 h-4 text-amber-400" />
          <span>Tùy chọn giao diện</span>
        </button>
      </div>

      {/* Mobile Bottom Sheet Modal */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex items-end justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            />

            {/* Slide-up Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative w-full max-w-lg bg-white rounded-t-3xl shadow-2xl p-6 space-y-6 max-h-[85vh] overflow-y-auto z-10"
            >
              {/* Sheet Drag Indicator */}
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto -mt-2 mb-2" />

              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Tùy chọn giao diện demo
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Bản xem trước giao diện • SAIGONLEX
                  </p>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Section: Chọn Mẫu */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Chọn mẫu giao diện
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {/* Card Mẫu A */}
                  <button
                    onClick={() => {
                      switchToTemplate("mau-a");
                      setMobileDrawerOpen(false);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition flex items-center justify-between ${
                      activeTemplate === "mau-a"
                        ? "border-[#17365D] bg-blue-50/50 shadow-sm"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#0F172A]">
                          MẪU A – Corporate Premium
                        </span>
                        {activeTemplate === "mau-a" && (
                          <span className="text-[10px] bg-[#17365D] text-white px-2 py-0.5 rounded font-semibold">
                            Đang xem
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Bố cục doanh nghiệp vững chãi, rõ ràng, thực tiễn xét xử và tư vấn.
                      </p>
                    </div>
                  </button>

                  {/* Card Mẫu B */}
                  <button
                    onClick={() => {
                      switchToTemplate("mau-b");
                      setMobileDrawerOpen(false);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition flex items-center justify-between ${
                      activeTemplate === "mau-b"
                        ? "border-[#17365D] bg-blue-50/50 shadow-sm"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#0F172A]">
                          MẪU B – Signature Premium
                        </span>
                        {activeTemplate === "mau-b" && (
                          <span className="text-[10px] bg-[#17365D] text-white px-2 py-0.5 rounded font-semibold">
                            Đang xem
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Bố cục tạp chí pháp lý cao cấp, giàu hình ảnh và khoảng không tinh tế.
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Section: Chọn Màu */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Chọn bảng màu chủ đạo (4 màu)
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {themeList.map((thId) => {
                    const thInfo = DEMO_THEMES[thId];
                    const isActive = theme === thId;

                    return (
                      <button
                        key={thId}
                        onClick={() => setTheme(thId)}
                        className={`p-3 rounded-xl border text-left transition flex flex-col justify-between space-y-2 ${
                          isActive
                            ? "border-slate-900 bg-slate-50 ring-2 ring-slate-900 shadow-sm"
                            : "border-slate-200 bg-white hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-1.5">
                            <span
                              className="w-4 h-4 rounded-full border border-black/10 inline-block"
                              style={{ backgroundColor: thInfo.primary }}
                            />
                            <span
                              className="w-4 h-4 rounded-full border border-black/10 inline-block"
                              style={{ backgroundColor: thInfo.accent }}
                            />
                          </div>
                          {isActive && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                        </div>

                        <div>
                          <div className="font-bold text-xs text-slate-900">
                            {thInfo.name}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                            {thInfo.nameVi}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="w-full py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs transition active:bg-slate-800"
              >
                Đóng tùy chọn
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
