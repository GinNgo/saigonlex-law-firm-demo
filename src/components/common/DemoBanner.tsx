"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, ArrowRight, LayoutGrid, CheckCircle2 } from "lucide-react";

export function DemoBanner() {
  const pathname = usePathname();
  const isMau1 = pathname.startsWith("/mau-1");
  const isMau2 = pathname.startsWith("/mau-2");

  if (pathname === "/") return null;

  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 z-50 sticky top-0 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded border border-amber-500/30">
            <Sparkles className="w-3 h-3" /> DEMO PREVIEW
          </span>
          <span className="text-slate-300 hidden sm:inline">
            Đang xem: <strong className="text-white">{isMau1 ? "Mẫu 1 – Corporate Legal" : isMau2 ? "Mẫu 2 – Premium Law Firm" : "Trang Demo"}</strong>
          </span>
          <span className="text-slate-400 text-[11px] hidden md:inline">
            (Dữ liệu nhân sự & thành tích được gắn nhãn DEMO)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-slate-300 hover:text-white px-2.5 py-1 rounded hover:bg-slate-800 transition flex items-center gap-1.5"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-slate-400" />
            <span>Chọn Mẫu</span>
          </Link>

          {isMau1 ? (
            <Link
              href={pathname.replace("/mau-1", "/mau-2")}
              className="bg-amber-600 hover:bg-amber-500 text-white font-medium px-3 py-1 rounded transition flex items-center gap-1"
            >
              <span>Xem Mẫu 2 (Premium)</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          ) : (
            <Link
              href={pathname.replace("/mau-2", "/mau-1")}
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-3 py-1 rounded transition flex items-center gap-1"
            >
              <span>Xem Mẫu 1 (Corporate)</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
