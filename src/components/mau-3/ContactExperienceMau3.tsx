"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building2
} from "lucide-react";

export function ContactExperienceMau3() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    field: "Doanh nghiệp & Đầu tư",
    message: "",
    consent: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        field: "Doanh nghiệp & Đầu tư",
        message: "",
        consent: true
      });
    }, 1200);
  };

  return (
    <section id="dat-lich-tu-van" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-section-alt)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office Contact & Info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>KẾT NỐI VỚI LUẬT SƯ</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-4">
              Đặt Lịch Tư Vấn Trực Tiếp Cùng SaigonLex
            </h2>

            <p className="text-sm sm:text-base text-[var(--color-text-muted)] font-body leading-relaxed mb-8">
              Mọi trao đổi ban đầu đều được tiếp nhận với tinh thần trách nhiệm cao và bảo mật tuyệt
              đối theo Quy tắc Đạo đức và Ứng xử nghề nghiệp Luật sư.
            </p>

            {/* Contact Details List */}
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--color-text-muted)]">Địa chỉ văn phòng</div>
                  <div className="text-sm font-bold text-[var(--color-primary)]">
                    Quận 1, TP. Hồ Chí Minh, Việt Nam
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-0.5">
                    (Vui lòng đặt lịch hẹn trước để Luật sư sắp xếp phòng họp chu đáo)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--color-text-muted)]">Đường dây nóng 24/7</div>
                  <a
                    href="tel:0908033115"
                    className="text-base font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    0908 033 115
                  </a>
                  <div className="text-xs text-[var(--color-text-muted)] mt-0.5">
                    Hỗ trợ khẩn cấp vụ việc tạm giữ, tranh chấp khẩn cấp
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--color-text-muted)]">Thư điện tử tiếp nhận hồ sơ</div>
                  <a
                    href="mailto:contact@saigonlex.vn"
                    className="text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    contact@saigonlex.vn
                  </a>
                  <div className="text-xs text-[var(--color-text-muted)] mt-0.5">
                    Phản hồi xác nhận trong vòng 24 giờ làm việc
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--color-text-muted)]">Thời gian làm việc</div>
                  <div className="text-sm font-bold text-[var(--color-primary)]">
                    Thứ Hai – Thứ Sáu: 08:00 – 17:30
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-0.5">
                    Thứ Bảy: 08:30 – 12:00 (Theo lịch hẹn trước)
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Mockup */}
            <div className="rounded-xl overflow-hidden border border-[var(--color-border)] bg-slate-100 shadow-sm aspect-[16/9] relative">
              <iframe
                title="Bản đồ văn phòng SaigonLex"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4975489815024!2d106.6974343757037!3d10.773149989375177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x119490a6f6039152!2zUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2svn!4v1710000000000!5m2!1svi!2svn"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--surface)] rounded-2xl p-7 sm:p-9 border border-[var(--color-border)] shadow-lg">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--color-border)]">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--color-primary)]">
                    Phiếu Yêu Cầu Tư Vấn Pháp Lý
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">
                    Vui lòng điền thông tin tóm tắt để Luật sư phụ trách chuẩn bị chu đáo trước khi liên hệ.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#10B981]/10 text-[#047857] text-xs font-semibold rounded-full">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Bảo mật 100%</span>
                </div>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-[var(--color-primary)] mb-2">
                    Tiếp Nhận Thông Tin Thành Công!
                  </h4>
                  <p className="text-sm text-[var(--color-text)] max-w-md mx-auto mb-6">
                    Luật sư SaigonLex đã nhận được yêu cầu của quý vị và sẽ trực tiếp liên hệ lại qua
                    số điện thoại trong vòng 24 giờ làm việc.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-5 py-2.5 rounded bg-[var(--color-primary)] text-white text-xs font-bold hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    Gửi thêm yêu cầu khác
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[var(--color-primary)] mb-1.5">
                        Họ và tên của bạn <span className="text-[#DA1E48]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent font-body bg-[var(--surface)] text-[var(--color-text)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--color-primary)] mb-1.5">
                        Số điện thoại liên hệ <span className="text-[#DA1E48]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0908 xxx xxx"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent font-body bg-[var(--surface)] text-[var(--color-text)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[var(--color-primary)] mb-1.5">
                        Địa chỉ Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent font-body bg-[var(--surface)] text-[var(--color-text)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--color-primary)] mb-1.5">
                        Lĩnh vực quan tâm
                      </label>
                      <select
                        value={formData.field}
                        onChange={(e) => setFormData({ ...formData, field: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent font-body bg-[var(--surface)] text-[var(--color-text)]"
                      >
                        <option value="Doanh nghiệp & Đầu tư">Doanh nghiệp & Đầu tư</option>
                        <option value="Hợp đồng thương mại">Hợp đồng thương mại</option>
                        <option value="Bất động sản & Đất đai">Bất động sản & Đất đai</option>
                        <option value="Tranh tụng tại Tòa án">Tranh tụng tại Tòa án</option>
                        <option value="Hôn nhân & Thừa kế">Hôn nhân & Thừa kế</option>
                        <option value="Lao động & Nhân sự">Lao động & Nhân sự</option>
                        <option value="Sở hữu trí tuệ">Sở hữu trí tuệ</option>
                        <option value="Khác">Lĩnh vực khác...</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--color-primary)] mb-1.5">
                      Tóm tắt nội dung vụ việc / Câu hỏi pháp lý
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mô tả ngắn gọn bối cảnh vụ việc, tranh chấp hoặc yêu cầu tư vấn cụ thể của bạn..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent font-body resize-y bg-[var(--surface)] text-[var(--color-text)]"
                    />
                  </div>

                  {/* Consent checkbox */}
                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 text-[var(--color-primary)] rounded border-[var(--color-border)] focus:ring-[var(--color-primary)]"
                    />
                    <label htmlFor="consent" className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      Tôi xác nhận thông tin trên là chính xác và đồng ý để Luật sư SaigonLex liên hệ
                      tư vấn vụ việc theo nguyên tắc bảo mật nghề nghiệp.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Đang gửi thông tin...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[var(--color-accent)]" />
                          <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
