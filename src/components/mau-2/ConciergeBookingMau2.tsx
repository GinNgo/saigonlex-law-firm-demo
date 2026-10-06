"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Lock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PRACTICE_AREAS } from "@/data/services";
import { SITE_CONFIG } from "@/data/siteConfig";
import { FadeIn } from "@/components/common/Motion";

export function ConciergeBookingMau2() {
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
    if (!formData.fullName.trim()) errs.fullName = "Vui lòng cho biết quý danh của bạn.";

    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      errs.phone = "Số điện thoại liên lạc chưa đúng định dạng (Ví dụ: 0901 234 567).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = "Địa chỉ email chưa chính xác.";
    }

    if (!formData.service) errs.service = "Vui lòng chọn lĩnh vực pháp lý cần thỉnh ý.";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Vui lòng mô tả sơ lược nội dung (tối thiểu 10 ký tự).";
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
      setSubmitError("Lỗi đường truyền máy chủ. Vui lòng liên hệ trực tiếp văn phòng.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-[var(--bg-section-alt)] text-[var(--color-heading)] relative border-t border-[var(--color-border)]" id="dat-lich">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <FadeIn direction="left" className="lg:col-span-5 space-y-6">
            <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider block font-semibold">
              HỘI ĐÀM CƠ MẬT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-heading)] tracking-tight">
              Yêu cầu Tư vấn Riêng & Xác lập Lịch hẹn
            </h2>
            <p className="text-[var(--color-text)] text-sm sm:text-base leading-[1.7]">
              Mọi dữ liệu trao đổi được bảo đảm tuyệt mật. Văn phòng sẽ sắp xếp buổi diện kiến trực tiếp hoặc trực tuyến cùng Luật sư Thành viên phụ trách chuyên môn trong vòng 24 giờ làm việc.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5 p-4 rounded-sm border border-[var(--color-border)] bg-[var(--surface)] shadow-sm">
                <Lock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-sm font-semibold text-[var(--color-heading)] block">
                    Đặc quyền Giữ kín Bí mật Thân chủ
                  </span>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Ký thỏa thuận NDA bảo vệ danh tính và bí mật giao dịch trước khi đi vào chi tiết.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-sm border border-[var(--color-border)] bg-[var(--surface)] shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-sm font-semibold text-[var(--color-heading)] block">
                    Báo giá Cố vấn Trọn gói & Minh bạch
                  </span>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    Tuyệt đối không phát sinh thù lao ẩn. Dự toán tài chính chuẩn xác ngay từ Thư đề xuất ban đầu.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Form Card */}
          <FadeIn direction="right" className="lg:col-span-7 bg-[var(--surface)] p-8 sm:p-10 rounded-sm border border-[var(--color-border)] shadow-xl">
            {submitSuccess ? (
              <div className="p-8 rounded-sm bg-[var(--bg-section-alt)] border border-[var(--color-border)] text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-heading)]">
                  Hồ sơ Yêu cầu đã được Tiếp nhận An toàn
                </h3>
                <div className="font-mono text-xs text-[var(--color-heading)] bg-[var(--color-border)]/40 py-1.5 px-3 rounded inline-block border border-[var(--color-accent)]/40 font-semibold">
                  MÃ HỒ SƠ: {submitSuccess.ticketId}
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text)] leading-[1.7] max-w-md mx-auto">
                  {submitSuccess.message} Luật sư điều hành phụ trách lĩnh vực <strong>{submitSuccess.summary?.service}</strong> sẽ liên lạc bảo mật với bạn ({submitSuccess.consultantResponseEstimate}).
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(null)}
                  className="mt-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold text-xs uppercase tracking-wider py-3 px-6 rounded-sm transition shadow-sm"
                >
                  Gửi yêu cầu thỉnh ý khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot field for anti-spam */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {submitError && (
                  <div className="p-4 rounded-sm bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--color-heading)] mb-2 font-semibold">
                      Quý danh thân chủ <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[var(--bg-section-alt)] border border-[var(--color-border)] text-xs sm:text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:bg-[var(--surface)] transition placeholder:text-[var(--color-text-muted)]"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--color-heading)] mb-2 font-semibold">
                      Số điện thoại cơ mật <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="0901 234 567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[var(--bg-section-alt)] border border-[var(--color-border)] text-xs sm:text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:bg-[var(--surface)] transition placeholder:text-[var(--color-text-muted)]"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--color-heading)] mb-2 font-semibold">
                      Địa chỉ Thư điện tử (Email) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="executive@enterprise.vn"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[var(--bg-section-alt)] border border-[var(--color-border)] text-xs sm:text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:bg-[var(--surface)] transition placeholder:text-[var(--color-text-muted)]"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--color-heading)] mb-2 font-semibold">
                      Lĩnh vực Thỉnh ý <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[var(--bg-section-alt)] border border-[var(--color-border)] text-xs sm:text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:bg-[var(--surface)] transition"
                    >
                      <option value="">-- Lựa chọn chuyên môn --</option>
                      {PRACTICE_AREAS.map((svc) => (
                        <option key={svc.slug} value={svc.shortTitle}>
                          {svc.shortTitle}
                        </option>
                      ))}
                      <option value="Khác">Lĩnh vực đặc thù khác</option>
                    </select>
                    {errors.service && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.service}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--color-heading)] mb-2 font-semibold">
                    Tóm lược Bối cảnh Vụ việc <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Khái quát tính chất vụ việc, mốc thời gian và mục tiêu mong đợi..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-[var(--bg-section-alt)] border border-[var(--color-border)] text-xs sm:text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:bg-[var(--surface)] transition placeholder:text-[var(--color-text-muted)]"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Thông tin cung cấp được bảo mật tuyệt đối theo Quy ước Bảo vệ Dữ liệu Cá nhân và Đặc quyền Nghề nghiệp Luật sư.
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-sm bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold text-xs uppercase tracking-wider shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-60 group"
                >
                  {isSubmitting ? (
                    <span>ĐANG TIẾP NHẬN BẢO MẬT...</span>
                  ) : (
                    <>
                      <span className="text-[var(--color-accent)]">XÁC LẬP YÊU CẦU CƠ MẬT</span>
                      <ArrowUpRight className="w-4 h-4 text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
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
