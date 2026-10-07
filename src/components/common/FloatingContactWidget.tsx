"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageSquare,
  CalendarCheck,
  X,
  Send,
  CheckCircle2,
  ChevronUp,
  ChevronDown,
  Sparkles
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

// Authentic Zalo SVG Icon
function ZaloIcon({ className = "w-5 h-5 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 4C12.95 4 4 12.51 4 23.01C4 29.34 7.23 34.98 12.37 38.48L10.74 44.2C10.51 45.02 11.39 45.71 12.13 45.28L18.88 41.34C20.52 41.78 22.23 42.02 24 42.02C35.05 42.02 44 33.51 44 23.01C44 12.51 35.05 4 24 4Z"
        fill="currentColor"
      />
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fontSize="17"
        fontWeight="800"
        fontFamily="sans-serif"
        fill="white"
        letterSpacing="-0.5"
      >
        Zalo
      </text>
    </svg>
  );
}

// Authentic Facebook Messenger SVG Icon
function MessengerIcon({ className = "w-5 h-5 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.42 3.16 7.15.16.14.26.35.25.57l-.14 2.1c-.05.7.6 1.22 1.24.96l2.36-.97c.18-.07.38-.07.56-.01.81.23 1.67.36 2.57.36 5.64 0 10-4.13 10-9.7S17.64 2 12 2zm1.09 13.09l-2.61-2.79-5.1 2.79 5.61-5.96 2.67 2.79 5.04-2.79-5.61 5.96z" />
    </svg>
  );
}

export function FloatingContactWidget() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Doanh nghiệp & Hợp đồng");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const directPhone = "0908033115";
  const displayPhone = "0908 033 115";
  const zaloUrl = "https://zalo.me/0908033115";
  const messengerUrl = "https://m.me/saigonlex";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setIsSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
      setTimeout(() => {
        setModalOpen(false);
        setIsSubmitted(false);
        setFullName("");
        setPhone("");
      }, 2500);
    }, 500);
  };

  return (
    <>
      {/* ======================================================== */}
      {/* 1. FLOATING CONTACT BUTTONS STACK (Bottom Right)         */}
      {/* ======================================================== */}
      <aside
        aria-label="Liên hệ nhanh với luật sư"
        className="fixed bottom-6 right-3.5 md:bottom-8 md:right-8 z-40 select-none print:hidden flex flex-col items-end gap-3"
      >
        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-end gap-3"
            >
              {/* ITEM 1: Đặt lịch tư vấn / Yêu cầu gọi lại */}
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  aria-label="Yêu cầu luật sư gọi lại trong 5 phút"
                  className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-[var(--color-accent)]/80 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] cursor-pointer"
                >
                  <CalendarCheck className="w-5 h-5 text-[var(--color-accent)]" />
                </button>

                {/* Tooltip on Desktop */}
                <div className="hidden md:flex items-center absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[var(--surface)] text-[var(--color-text)] border border-[var(--color-border)] px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-xs font-semibold gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  <span>Đặt hẹn tư vấn nhanh</span>
                </div>
              </div>

              {/* ITEM 2: Facebook Messenger */}
              <div className="relative group">
                <a
                  href={messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nhắn tin qua Facebook Messenger"
                  className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-gradient-to-tr from-[#0084FF] to-[#00C6FF] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-white/40 focus:outline-none focus:ring-2 focus:ring-[#0084FF] cursor-pointer"
                >
                  <MessengerIcon className="w-6 h-6 text-white" />
                </a>

                {/* Tooltip on Desktop */}
                <div className="hidden md:flex items-center absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[var(--surface)] text-[var(--color-text)] border border-[var(--color-border)] px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-xs font-semibold gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0084FF]" />
                  <span>Chat Facebook Messenger</span>
                </div>
              </div>

              {/* ITEM 3: Zalo Chat (Với hiệu ứng nhịp thở nhẹ) */}
              <div className="relative group">
                {/* Subtle soft pulse halo */}
                <div className="absolute inset-0 rounded-full bg-[#0068FF]/30 animate-soft-pulse pointer-events-none" />

                <a
                  href={zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat Zalo tư vấn pháp luật 24/7"
                  className="relative w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#0068FF] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-white/50 focus:outline-none focus:ring-2 focus:ring-[#0068FF] cursor-pointer"
                >
                  <ZaloIcon className="w-7 h-7 text-white" />
                </a>

                {/* Tooltip on Desktop */}
                <div className="hidden md:flex items-center absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[var(--surface)] text-[var(--color-text)] border border-[var(--color-border)] px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-xs font-semibold gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                  <span>Chat Zalo tư vấn ngay</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ITEM 4: HOTLINE GỌI NGAY - Với hiệu ứng RUNG ĐỘNG NHẸ & SÓNG LAN TỎA (Heartbeat of the widget) */}
        <div className="relative group">
          {/* Sóng lan tỏa radar pulse rings */}
          <span className="absolute -inset-1.5 rounded-full bg-rose-500/50 animate-radar-ripple pointer-events-none" />
          <span className="absolute -inset-1.5 rounded-full bg-red-500/40 animate-radar-ripple-delay pointer-events-none" />

          {/* Hotline Trigger Link */}
          <a
            href={`tel:${directPhone}`}
            aria-label={`Gọi ngay Hotline tư vấn pháp luật 24/7: ${displayPhone}`}
            className="relative flex items-center w-12 h-12 md:w-13 md:h-13 rounded-full bg-gradient-to-tr from-red-600 via-rose-600 to-amber-600 text-white shadow-2xl hover:shadow-red-500/40 transition-transform duration-300 border-2 border-white focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer justify-center"
          >
            {/* Phone icon với chuông rung ngắt quãng nhẹ nhàng */}
            <Phone className="w-6 h-6 text-white animate-ring-shake" />
          </a>

          {/* Desktop Hover Pill Badge */}
          <div className="hidden md:flex items-center absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[var(--surface)] text-[var(--color-text)] border border-[var(--color-border)] px-3.5 py-1.5 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-xs font-bold gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Hotline 24/7: <strong className="text-red-600">{displayPhone}</strong></span>
          </div>
        </div>

        {/* Toggle Minimize/Maximize Button (Subtle & clean) */}
        <button
          type="button"
          onClick={() => setIsMinimized(!isMinimized)}
          aria-label={isMinimized ? "Mở danh sách liên hệ" : "Thu gọn danh sách liên hệ"}
          title={isMinimized ? "Mở rộng liên hệ" : "Thu gọn"}
          className="w-7 h-7 rounded-full bg-[var(--surface)]/90 hover:bg-[var(--surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] border border-[var(--color-border)] shadow-sm flex items-center justify-center transition-all hover:scale-105 focus:outline-none cursor-pointer self-center"
        >
          {isMinimized ? (
            <ChevronUp className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
          )}
        </button>
      </aside>

      {/* ======================================================== */}
      {/* 2. MODAL YÊU CẦU GỌI LẠI TRONG 5 PHÚT                     */}
      {/* ======================================================== */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md bg-[var(--surface)] rounded-2xl shadow-2xl border border-[var(--color-border)] p-6 z-10 text-[var(--color-text)]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition focus:outline-none cursor-pointer"
                aria-label="Đóng cửa sổ"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    Đã gửi yêu cầu thành công!
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-xs mx-auto">
                    Luật sư chuyên môn của SaigonLex sẽ liên hệ lại với Quý khách qua số điện thoại <strong>{phone}</strong> trong vòng 10 phút làm việc.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Tư vấn sơ bộ miễn phí</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] mt-1">
                      Yêu Cầu Luật Sư Gọi Lại
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                      Để lại số điện thoại, đội ngũ luật sư SaigonLex sẽ chủ động liên hệ tư vấn trực tiếp ngay.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-[#171A1F] mb-1">
                        Họ và tên của Quý khách
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--bg-section-alt)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#171A1F] mb-1">
                        Số điện thoại nhận cuộc gọi <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0908 xxx xxx"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--bg-section-alt)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#171A1F] mb-1">
                        Vấn đề pháp lý cần tư vấn
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--bg-section-alt)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]"
                      >
                        <option value="Doanh nghiệp & Hợp đồng">Tư vấn Doanh nghiệp & Hợp đồng</option>
                        <option value="Tranh tụng Tòa án & Trọng tài">Tranh tụng Tòa án & Trọng tài</option>
                        <option value="Đất đai & Bất động sản">Đất đai, Nhà ở & Bất động sản</option>
                        <option value="Sở hữu trí tuệ">Sở hữu trí tuệ & Bản quyền</option>
                        <option value="Hình sự & Dân sự">Hình sự & Dân sự chuyên sâu</option>
                        <option value="Khác">Nhu cầu pháp lý khác</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[var(--color-accent)]" />
                      <span>Gửi yêu cầu gọi lại ngay</span>
                    </button>
                    <p className="text-[11px] text-center text-stone-400 mt-2">
                      Cam kết bảo mật 100% danh tính và nội dung trao đổi.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
