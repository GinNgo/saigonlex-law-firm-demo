"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Lock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PRACTICE_AREAS } from "@/data/services";
import { SITE_CONFIG } from "@/data/siteConfig";

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
    <section className="py-24 bg-[#0D1522] text-[#FAF8F5] relative border-t border-white/5" id="dat-lich">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#D4AF37] font-serif text-xs uppercase tracking-[0.25em] block">
              HỘI ĐÀM CƠ MẬT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5]">
              Yêu cầu Tư vấn Riêng & Xác lập Lịch hẹn
            </h2>
            <p className="text-slate-300 font-sans text-sm font-light leading-relaxed">
              Mọi dữ liệu trao đổi được bảo đảm tuyệt mật. Văn phòng sẽ sắp xếp buổi diện kiến trực tiếp hoặc trực tuyến cùng Luật sư Thành viên phụ trách chuyên môn trong vòng 24 giờ làm việc.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5 p-4 rounded border border-amber-500/20 bg-[#101826]">
                <Lock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-serif text-xs font-bold text-[#FAF8F5] block">
                    Đặc quyền Giữ kín Bí mật Thân chủ
                  </span>
                  <p className="text-[11px] text-slate-400 font-sans font-light">
                    Ký thỏa thuận NDA bảo vệ danh tính và bí mật giao dịch trước khi đi vào chi tiết.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded border border-amber-500/20 bg-[#101826]">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-serif text-xs font-bold text-[#FAF8F5] block">
                    Báo giá Cố vấn Trọn gói & Minh bạch
                  </span>
                  <p className="text-[11px] text-slate-400 font-sans font-light">
                    Tuyệt đối không phát sinh thù lao ẩn. Dự toán tài chính chuẩn xác ngay từ Thư đề xuất ban đầu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-[#101826] p-8 sm:p-10 rounded border border-amber-500/30 shadow-2xl">
            {submitSuccess ? (
              <div className="p-8 rounded bg-[#162236] border border-amber-500/40 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#FAF8F5]">
                  Hồ sơ Yêu cầu đã được Tiếp nhận An toàn
                </h3>
                <div className="font-mono text-xs text-[#D4AF37] bg-black/40 py-1.5 px-3 rounded inline-block border border-amber-500/30">
                  MÃ HỒ SƠ: {submitSuccess.ticketId}
                </div>
                <p className="text-xs text-slate-300 font-sans font-light leading-relaxed max-w-md mx-auto">
                  {submitSuccess.message} Luật sư điều hành phụ trách lĩnh vực <strong>{submitSuccess.summary?.service}</strong> sẽ liên lạc bảo mật với bạn ({submitSuccess.consultantResponseEstimate}).
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(null)}
                  className="mt-4 bg-[#D4AF37] hover:bg-[#b59227] text-slate-950 font-serif font-bold text-xs uppercase tracking-wider py-3 px-6 rounded transition"
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
                  <div className="p-4 rounded bg-rose-950/50 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-slate-300 mb-2">
                      Quý danh thân chủ <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-[#090E17] border border-white/10 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#D4AF37] transition"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-slate-300 mb-2">
                      Số điện thoại cơ mật <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="0901 234 567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-[#090E17] border border-white/10 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#D4AF37] transition"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-slate-300 mb-2">
                      Địa chỉ Thư điện tử (Email) <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="executive@enterprise.vn"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-[#090E17] border border-white/10 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#D4AF37] transition"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-slate-300 mb-2">
                      Lĩnh vực Thỉnh ý <span className="text-[#D4AF37]">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-[#090E17] border border-white/10 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#D4AF37] transition"
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
                      <p className="text-[11px] text-rose-400 mt-1">{errors.service}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-slate-300 mb-2">
                    Tóm lược Bối cảnh Vụ việc <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Khái quát tính chất vụ việc, mốc thời gian và mục tiêu mong đợi..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#090E17] border border-white/10 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#D4AF37] transition"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="text-[11px] text-slate-400 font-light leading-relaxed">
                  Thông tin cung cấp được bảo mật tuyệt đối theo Quy ước Bảo vệ Dữ liệu Cá nhân và Đặc quyền Nghề nghiệp Luật sư.
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA820A] text-slate-950 font-serif font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:shadow-amber-500/20 transition flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>ĐANG MÃ HÓA & TIẾP NHẬN...</span>
                  ) : (
                    <>
                      <span>XÁC LẬP YÊU CẦU CƠ MẬT</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-950" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
