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
    <section className="py-24 bg-[#FAF7F0] text-[#0C1829] relative border-t border-[#E5DEC9]" id="dat-lich">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <FadeIn direction="left" className="lg:col-span-5 space-y-6">
            <span className="text-[#C5A059] font-serif text-xs uppercase tracking-[0.25em] block font-semibold">
              HỘI ĐÀM CƠ MẬT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C1829] tracking-tight">
              Yêu cầu Tư vấn Riêng & Xác lập Lịch hẹn
            </h2>
            <p className="text-slate-600 font-sans text-sm font-light leading-relaxed">
              Mọi dữ liệu trao đổi được bảo đảm tuyệt mật. Văn phòng sẽ sắp xếp buổi diện kiến trực tiếp hoặc trực tuyến cùng Luật sư Thành viên phụ trách chuyên môn trong vòng 24 giờ làm việc.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5 p-4 rounded-sm border border-[#E5DEC9] bg-white shadow-sm">
                <Lock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-serif text-xs font-bold text-[#0C1829] block">
                    Đặc quyền Giữ kín Bí mật Thân chủ
                  </span>
                  <p className="text-[11px] text-slate-500 font-sans font-light">
                    Ký thỏa thuận NDA bảo vệ danh tính và bí mật giao dịch trước khi đi vào chi tiết.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-sm border border-[#E5DEC9] bg-white shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-serif text-xs font-bold text-[#0C1829] block">
                    Báo giá Cố vấn Trọn gói & Minh bạch
                  </span>
                  <p className="text-[11px] text-slate-500 font-sans font-light">
                    Tuyệt đối không phát sinh thù lao ẩn. Dự toán tài chính chuẩn xác ngay từ Thư đề xuất ban đầu.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Form Card */}
          <FadeIn direction="right" className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-[#E5DEC9] shadow-xl">
            {submitSuccess ? (
              <div className="p-8 rounded-sm bg-[#FAF7F0] border border-[#E5DEC9] text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-[#C5A059] flex items-center justify-center text-[#C5A059] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0C1829]">
                  Hồ sơ Yêu cầu đã được Tiếp nhận An toàn
                </h3>
                <div className="font-mono text-xs text-[#0C1829] bg-[#E5DEC9]/40 py-1.5 px-3 rounded inline-block border border-[#C5A059]/40 font-semibold">
                  MÃ HỒ SƠ: {submitSuccess.ticketId}
                </div>
                <p className="text-xs text-slate-600 font-sans font-light leading-relaxed max-w-md mx-auto">
                  {submitSuccess.message} Luật sư điều hành phụ trách lĩnh vực <strong>{submitSuccess.summary?.service}</strong> sẽ liên lạc bảo mật với bạn ({submitSuccess.consultantResponseEstimate}).
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(null)}
                  className="mt-4 bg-[#C5A059] hover:bg-[#b08b43] text-white font-serif font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-sm transition shadow-sm"
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
                    <label className="block text-xs font-serif uppercase tracking-wider text-[#0C1829] mb-2 font-medium">
                      Quý danh thân chủ <span className="text-[#C5A059]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[#FAF7F0] border border-[#E5DEC9] text-xs text-[#0C1829] focus:outline-none focus:border-[#C5A059] focus:bg-white transition placeholder:text-slate-400"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-[#0C1829] mb-2 font-medium">
                      Số điện thoại cơ mật <span className="text-[#C5A059]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="0901 234 567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[#FAF7F0] border border-[#E5DEC9] text-xs text-[#0C1829] focus:outline-none focus:border-[#C5A059] focus:bg-white transition placeholder:text-slate-400"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-[#0C1829] mb-2 font-medium">
                      Địa chỉ Thư điện tử (Email) <span className="text-[#C5A059]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="executive@enterprise.vn"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[#FAF7F0] border border-[#E5DEC9] text-xs text-[#0C1829] focus:outline-none focus:border-[#C5A059] focus:bg-white transition placeholder:text-slate-400"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-[#0C1829] mb-2 font-medium">
                      Lĩnh vực Thỉnh ý <span className="text-[#C5A059]">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[#FAF7F0] border border-[#E5DEC9] text-xs text-[#0C1829] focus:outline-none focus:border-[#C5A059] focus:bg-white transition"
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
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#0C1829] mb-2 font-medium">
                    Tóm lược Bối cảnh Vụ việc <span className="text-[#C5A059]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Khái quát tính chất vụ việc, mốc thời gian và mục tiêu mong đợi..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-[#FAF7F0] border border-[#E5DEC9] text-xs text-[#0C1829] focus:outline-none focus:border-[#C5A059] focus:bg-white transition placeholder:text-slate-400"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="text-[11px] text-slate-500 font-light leading-relaxed">
                  Thông tin cung cấp được bảo mật tuyệt đối theo Quy ước Bảo vệ Dữ liệu Cá nhân và Đặc quyền Nghề nghiệp Luật sư.
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-sm bg-[#0C1829] hover:bg-[#152338] text-white font-serif font-bold text-xs uppercase tracking-[0.2em] shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-60 group"
                >
                  {isSubmitting ? (
                    <span>ĐANG TIẾP NHẬN BẢO MẬT...</span>
                  ) : (
                    <>
                      <span className="text-[#DFBF7E]">XÁC LẬP YÊU CẦU CƠ MẬT</span>
                      <ArrowUpRight className="w-4 h-4 text-[#DFBF7E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
