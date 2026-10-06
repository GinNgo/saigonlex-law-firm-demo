"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

export type DemoThemeId = "navy-gold" | "burgundy-cream" | "emerald-ivory" | "charcoal-blue";
export type DemoTemplateId = "mau-a" | "mau-b";

export interface DemoThemeInfo {
  id: DemoThemeId;
  name: string;
  nameVi: string;
  desc: string;
  primary: string;
  primaryDark: string;
  accent: string;
  bgLight: string;
  bgSoft: string;
  text: string;
  textSecondary: string;
}

export const DEMO_THEMES: Record<DemoThemeId, DemoThemeInfo> = {
  "navy-gold": {
    id: "navy-gold",
    name: "Navy Gold",
    nameVi: "Xanh Navy & Vàng kim",
    desc: "Cổ điển, đáng tin cậy, chuẩn mực hãng luật hàng đầu",
    primary: "#17365D",
    primaryDark: "#0F2742",
    accent: "#B3955B",
    bgLight: "#FFFFFF",
    bgSoft: "#F7F8FA",
    text: "#171A1F",
    textSecondary: "#4B5563"
  },
  "burgundy-cream": {
    id: "burgundy-cream",
    name: "Burgundy Cream",
    nameVi: "Đỏ Rượu Vang & Kem",
    desc: "Quý phái, uyên bác, trang trọng mang phong cách châu Âu",
    primary: "#6B1F2A",
    primaryDark: "#46131B",
    accent: "#B58B52",
    bgLight: "#FFFDF9",
    bgSoft: "#F6F0E8",
    text: "#1D1A1A",
    textSecondary: "#595252"
  },
  "emerald-ivory": {
    id: "emerald-ivory",
    name: "Emerald Ivory",
    nameVi: "Ngọc Lục Bảo & Ngà Voi",
    desc: "Thịnh vượng, điềm tĩnh, tượng trưng cho công lý trường tồn",
    primary: "#174C43",
    primaryDark: "#0D332D",
    accent: "#B18D59",
    bgLight: "#FFFEFA",
    bgSoft: "#F2F3EC",
    text: "#17201E",
    textSecondary: "#52605D"
  },
  "charcoal-blue": {
    id: "charcoal-blue",
    name: "Charcoal Blue",
    nameVi: "Xám Than Đá & Xanh Thép",
    desc: "Hiện đại, sắc sảo, dứt khoát và tối giản cao cấp",
    primary: "#273746",
    primaryDark: "#17222C",
    accent: "#52718A",
    bgLight: "#FFFFFF",
    bgSoft: "#F4F6F8",
    text: "#151A1F",
    textSecondary: "#515C65"
  }
};

interface DemoThemeContextType {
  theme: DemoThemeId;
  setTheme: (theme: DemoThemeId) => void;
  activeTemplate: DemoTemplateId;
  isTransitioning: boolean;
  transitionTarget: DemoTemplateId | null;
  animationKey: number;
  switchToTemplate: (target: DemoTemplateId) => void;
  replayAnimations: () => void;
}

const DemoThemeContext = createContext<DemoThemeContextType | null>(null);

const STORAGE_KEY = "saigonlex-demo-theme";

export function DemoThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [theme, setThemeState] = useState<DemoThemeId>("navy-gold");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTarget, setTransitionTarget] = useState<DemoTemplateId | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  // Derive active template from current route
  const activeTemplate: DemoTemplateId = pathname.startsWith("/mau-2") ? "mau-b" : "mau-a";

  // Initialize theme from localStorage & apply to documentElement
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY) as DemoThemeId | null;
      if (savedTheme && DEMO_THEMES[savedTheme]) {
        setThemeState(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else {
        document.documentElement.setAttribute("data-theme", "navy-gold");
      }
    } catch {
      document.documentElement.setAttribute("data-theme", "navy-gold");
    }
  }, []);

  // Update theme and persist
  const setTheme = useCallback((newTheme: DemoThemeId) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    } catch (e) {
      console.error("Failed to save theme in localStorage:", e);
    }
  }, []);

  const replayAnimations = useCallback(() => {
    setAnimationKey((prev) => prev + 1);
  }, []);

  // Switch between Template A and Template B with premium transition sequence
  const switchToTemplate = useCallback(
    (target: DemoTemplateId) => {
      if (isTransitioning) return;

      const currentIsTarget =
        (target === "mau-a" && pathname === "/mau-1") ||
        (target === "mau-b" && pathname === "/mau-2");

      if (currentIsTarget) {
        // If already on the target template home, smooth scroll to top and replay
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        replayAnimations();
        return;
      }

      // Step 1: Start transition overlay
      setIsTransitioning(true);
      setTransitionTarget(target);

      // Step 2: Overlay fades in (duration ~320ms)
      setTimeout(() => {
        // Step 3: Client-side route change
        const targetUrl = target === "mau-a" ? "/mau-1" : "/mau-2";
        router.push(targetUrl);

        // Step 4: Immediately reset scroll to top (instant)
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant"
        });

        // Step 5: Force replay of entrance animations
        setAnimationKey((prev) => prev + 1);

        // Step 6: Hold transition for complete load, then fade overlay out (around 650-700ms total)
        setTimeout(() => {
          setIsTransitioning(false);
          setTransitionTarget(null);
        }, 380);
      }, 320);
    },
    [isTransitioning, pathname, router, replayAnimations]
  );

  return (
    <DemoThemeContext.Provider
      value={{
        theme,
        setTheme,
        activeTemplate,
        isTransitioning,
        transitionTarget,
        animationKey,
        switchToTemplate,
        replayAnimations
      }}
    >
      {children}
    </DemoThemeContext.Provider>
  );
}

export function useDemoTheme() {
  const context = useContext(DemoThemeContext);
  if (!context) {
    throw new Error("useDemoTheme must be used within a DemoThemeProvider");
  }
  return context;
}
