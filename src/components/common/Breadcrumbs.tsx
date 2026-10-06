import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
}

export function Breadcrumbs({ items, theme = "light" }: BreadcrumbsProps) {
  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-3 px-4 rounded-lg text-sm mb-6 ${
        isDark ? "bg-slate-900/60 text-slate-300 border border-slate-800" : "bg-slate-100 text-slate-600"
      }`}
    >
      <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
        <li className="flex items-center">
          <Link
            href="/"
            className={`flex items-center gap-1 transition ${
              isDark ? "hover:text-amber-300 text-slate-400" : "hover:text-blue-900 text-slate-500"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Trang chủ</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight
                className={`w-3.5 h-3.5 ${isDark ? "text-slate-600" : "text-slate-400"}`}
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`transition ${
                    isDark
                      ? "hover:text-amber-300 text-slate-400"
                      : "hover:text-blue-900 text-slate-600"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`font-medium ${
                    isDark ? "text-amber-400 font-serif" : "text-slate-900"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
