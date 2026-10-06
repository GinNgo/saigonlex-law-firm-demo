"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Sparkles } from "lucide-react";
import { useDemoTheme } from "@/context/DemoThemeContext";

export function TemplateTransitionOverlay() {
  const { isTransitioning, transitionTarget } = useDemoTheme();

  const isTargetMauA = transitionTarget === "mau-a";

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="template-transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none backdrop-blur-md ${
            isTargetMauA
              ? "bg-[#F8FAFC]/95 text-slate-900"
              : "bg-[#FAF7F0]/95 text-slate-900"
          }`}
          aria-live="polite"
          aria-busy="true"
        >
          {/* Subtle architectural watermarks */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#17365D_1px,transparent_1px)] [background-size:24px_24px]" />

          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center text-center px-6 max-w-md"
          >
            {/* Logo Emblem */}
            <div className="relative mb-6">
              <div
                className="w-16 h-16 rounded-md flex items-center justify-center shadow-xl border border-white/40"
                style={{
                  backgroundColor: "var(--color-primary, #17365D)",
                  color: "var(--color-accent, #B3955B)"
                }}
              >
                <Scale className="w-8 h-8" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1.5 rounded-lg border border-dashed opacity-40 pointer-events-none"
                style={{ borderColor: "var(--color-accent, #B3955B)" }}
              />
            </div>

            {/* Brand Title */}
            <div className="text-xl font-bold tracking-tight text-[#0F172A] mb-1">
              SAIGON<span style={{ color: "var(--color-accent, #B3955B)" }}>LEX</span>
            </div>

            {/* Loading Status */}
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 mt-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>Đang tải giao diện...</span>
            </div>

            {/* Target Template Details */}
            <div className="inline-block px-3.5 py-1 rounded-full border border-slate-200 bg-white shadow-sm text-xs font-medium text-slate-700">
              {isTargetMauA ? (
                <span>
                  Chuyển sang: <strong className="text-[#0F172A]">MẪU A • Corporate Premium</strong>
                </span>
              ) : (
                <span>
                  Chuyển sang: <strong className="text-[#0F172A]">MẪU B • Signature Premium</strong>
                </span>
              )}
            </div>

            {/* Elegant Progress Line */}
            <div className="w-56 h-0.5 bg-slate-200 rounded-full mt-7 overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.65, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: `linear-gradient(90deg, var(--color-primary, #17365D), var(--color-accent, #B3955B))`
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
