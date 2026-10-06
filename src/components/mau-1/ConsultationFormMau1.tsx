"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Shield, Clock, Phone } from "lucide-react";
import { PRACTICE_AREAS } from "@/data/services";
import { SITE_CONFIG } from "@/data/siteConfig";
import { FadeIn } from "@/components/common/Motion";

export function ConsultationFormMau1() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    honeypot: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<any | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Vui lòng nhập họ và tên của bạn.";
    
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      errs.phone = "Số điện thoại chưa đúng định dạng (Ví dụ: 0901 234 567).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = "Địa chỉ email không hợp lệ.";
    }

    if (!formData.service) errs.service = "Vui lòng chọn một lĩnh vực cần tư vấn.";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Vui lòng nhập tóm tắt nội dung vụ việc (tối thiểu 10 ký tự).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setSubmitError(data.error || "Gửi yêu cầu không thành công. Vui lòng thử lại.");
        if (data.fieldErrors) setErrors(data.fieldErrors);
      } else {
        setSubmitSuccess(data);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          service: "",
          message: "",
          honeypot: ""
        });
      }
    } catch (err: any) {
      setSubmitError("Lỗi kết nối mạng hoặc máy chủ. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-[var(--bg-section)]" id="tu-van">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <FadeIn direction="left" className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-[var(--color-accent)]" />
              <span>TIẾP NHẬN YÊU CẦU BẢO MẬT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Đặt Lịch Hẹn Tư Vấn Với Luật Sư
            </h2>

            <p className="text-[#202124] text-sm sm:text-base leading-[1.7]">
              Mọi thông tin ban đầu quý khách chia sẻ đều được bảo vệ nghiêm ngặt theo quy tắc bảo mật bí mật thông tin của khách hàng. Luật sư phụ trách chuyên môn sẽ chủ động liên hệ phản hồi trong vòng 24 giờ.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-section-alt)] border border-[var(--color-border)]">
                <Shield className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#111827]">Cam kết Ký NDA trước khi nhận hồ sơ</h4>
                  <p className="text-xs text-[#4B5563] leading-relaxed mt-0.5">
                    Đối với các vụ việc M&A, bí mật công nghệ hoặc tranh chấp cổ đông, chúng tôi luôn chủ động ký thỏa thuận bảo mật trước.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-section-alt)] border border-[var(--color-border)]">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#111827]">Đánh giá sơ bộ miễn phí</h4>
                  <p className="text-xs text-[#4B5563] leading-relaxed mt-0.5">
                    Luật sư nghiên cứu bước 1 về thẩm quyền thụ lý, thời hiệu khởi kiện và phương án khả thi ban đầu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-section-alt)] border border-[var(--color-border)]">
                <Phone className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#111827]">Hỗ trợ khẩn cấp 24/7</h4>
                  <p className="text-xs text-[#4B5563] leading-relaxed mt-0.5">
                    Trường hợp khẩn cấp, vui lòng gọi trực tiếp hotline: <strong className="text-[var(--color-primary)]">{SITE_CONFIG.hotline}</strong>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Form Card */}
          <FadeIn direction="right" className="lg:col-span-7 bg-[var(--surface)] p-6 sm:p-8 rounded-2xl border border-[var(--color-border)] corporate-card-shadow">
            {submitSuccess ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-emerald-900">
                    Gửi yêu cầu tư vấn thành công!
                  </h3>
                  <p className="text-xs text-emerald-800">
                    Mã tiếp nhận hồ sơ: <span className="font-mono font-bold text-emerald-950 bg-emerald-200 px-2 py-0.5 rounded">{submitSuccess.ticketId}</span>
                  </p>
                  <p className="text-xs text-emerald-700 leading-relaxed max-w-md mx-auto">
                    {submitSuccess.message} Luật sư phụ trách lĩnh vực <strong>{submitSuccess.summary?.service}</strong> sẽ liên hệ lại với bạn theo số điện thoại đã cung cấp ({submitSuccess.consultantResponseEstimate}).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(null)}
                  className="w-full mt-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2.5 rounded-lg text-xs transition"
                >
                  Gửi thêm yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot field (hidden from users, traps bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="honeypot">Do not fill this</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {submitError && (
                  <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#111827] mb-1">
                      Họ và tên của bạn <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-[var(--color-text)] bg-[var(--surface)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                        errors.fullName ? "border-rose-400 bg-rose-50/30" : "border-[var(--color-border)]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-heading)] mb-1">
                      Số điện thoại liên hệ <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="0901 234 567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-[var(--color-text)] bg-[var(--surface)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                        errors.phone ? "border-rose-400 bg-rose-50/30" : "border-[var(--color-border)]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-heading)] mb-1">
                      Địa chỉ Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="example@company.vn"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-[var(--color-text)] bg-[var(--surface)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                        errors.email ? "border-rose-400 bg-rose-50/30" : "border-[var(--color-border)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Practice Area Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-heading)] mb-1">
                      Lĩnh vực cần tư vấn <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-[var(--color-text)] bg-[var(--surface)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                        errors.service ? "border-rose-400 bg-rose-50/30" : "border-[var(--color-border)]"
                      }`}
                    >
                      <option value="">-- Chọn lĩnh vực pháp lý --</option>
                      {PRACTICE_AREAS.map((svc) => (
                        <option key={svc.slug} value={svc.shortTitle}>
                          {svc.shortTitle}
                        </option>
                      ))}
                      <option value="Khác">Lĩnh vực pháp lý khác</option>
                    </select>
                    {errors.service && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.service}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-heading)] mb-1">
                    Tóm tắt nội dung vụ việc hoặc yêu cầu hỗ trợ <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mô tả sơ lược tình huống pháp lý, các bên liên quan và thời hạn mong muốn..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-[var(--color-text)] bg-[var(--surface)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                      errors.message ? "border-rose-400 bg-rose-50/30" : "border-[var(--color-border)]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Privacy and Terms Notice */}
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Bằng việc gửi thông tin, quý khách đồng ý để SAIGONLEX bảo mật và sử dụng dữ liệu này cho mục đích tiếp nhận, phản hồi và xử lý hồ sơ pháp lý theo <a href="/mau-1/chinh-sach-bao-mat" className="text-[var(--color-primary)] underline font-semibold">Chính sách bảo mật</a> của hãng luật.
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold text-xs sm:text-sm py-3.5 rounded-lg shadow hover:shadow-md transition flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Đang mã hóa & gửi thông tin...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4 text-[var(--color-accent)]" />
                      <span>Gửi yêu cầu tư vấn bảo mật</span>
                    </span>
                  )}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
