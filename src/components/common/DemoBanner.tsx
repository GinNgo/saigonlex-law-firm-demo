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
  const isMauC = pathname.startsWith("/mau-3");

  if (pathname === "/") return null;

  return (
    <div className="hidden md:block bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 z-30 relative backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded border border-amber-500/30">
            <Sparkles className="w-3 h-3" /> BẢN XEM TRƯỚC
          </span>
          <span className="text-slate-300 hidden sm:inline">
            Đang xem:{" "}
            <strong className="text-white">
              {isMauA
                ? "MẪU A – Corporate Premium"
                : isMauB
                ? "MẪU B – Signature Premium"
                : isMauC
                ? "MẪU C – Classic Modern Premium"
                : "Trang Demo"}
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
            className="text-slate-300 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition flex items-center gap-1 text-[11px]"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-slate-400" />
            <span>So sánh 3 Mẫu</span>
          </Link>

          {/* Quick template switch buttons */}
          <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
            <button
              onClick={() => switchToTemplate("mau-a")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                isMauA ? "bg-blue-600 text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              Mẫu A
            </button>
            <button
              onClick={() => switchToTemplate("mau-b")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                isMauB ? "bg-amber-600 text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              Mẫu B
            </button>
            <button
              onClick={() => switchToTemplate("mau-c")}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                isMauC ? "bg-emerald-600 text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              Mẫu C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
