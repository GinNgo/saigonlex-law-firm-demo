"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, ArrowRight, LayoutGrid, Palette } from "lucide-react";
import { useDemoTheme, DEMO_THEMES } from "@/context/DemoThemeContext";

export function DemoBanner() {
  const pathname = usePathname();
  const { activeTemplate, switchToTemplate, theme } = useDemoTheme();
  const isMauA = pathname.startsWith("/mau-1");
  const isMauB = pathname.startsWith("/mau-2");

  if (pathname === "/") return null;

  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 z-30 sticky top-0 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded border border-amber-500/30">
            <Sparkles className="w-3 h-3" /> BẢN XEM TRƯỚC
          </span>
          <span className="text-slate-300 hidden sm:inline">
            Đang xem:{" "}
            <strong className="text-white">
              {isMauA ? "MẪU A – Corporate Premium" : isMauB ? "MẪU B – Signature Premium" : "Trang Demo"}
            </strong>
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 bg-white/10 px-2 py-0.5 rounded">
            <Palette className="w-3 h-3 text-amber-300" />
            <span>Màu: <strong className="text-white">{DEMO_THEMES[theme].name}</strong></span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-slate-300 hover:text-white px-2.5 py-1 rounded hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-slate-400" />
            <span>So sánh 2 Mẫu</span>
          </Link>

          {isMauA ? (
            <button
              onClick={() => switchToTemplate("mau-b")}
              className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-3 py-1 rounded transition flex items-center gap-1.5 shadow-sm"
            >
              <span>Xem MẪU B (Signature)</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          ) : (
            <button
              onClick={() => switchToTemplate("mau-a")}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-3 py-1 rounded transition flex items-center gap-1.5 shadow-sm"
            >
              <span>Xem MẪU A (Corporate)</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
