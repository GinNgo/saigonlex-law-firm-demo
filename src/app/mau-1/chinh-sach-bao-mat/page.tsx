import React from "react";
import type { Metadata } from "next";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau1 } from "@/components/mau-1/HeaderMau1";
import { FooterMau1 } from "@/components/mau-1/FooterMau1";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ShieldCheck, Lock, FileText, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Chính sách Bảo mật Thông tin | SAIGONLEX",
  description:
    "Chính sách bảo mật dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP và cam kết bảo vệ bí mật thông tin thân chủ theo Luật Luật sư Việt Nam."
};

export default function PrivacyMau1Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <DemoBanner />
      <HeaderMau1 />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 1", href: "/mau-1" },
                { label: "Chính sách bảo mật" }
              ]}
              theme="dark"
            />
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-[#C5A880] uppercase tracking-widest block">
                QUY ƯỚC NGHỀ NGHIỆP & PHÁP LÝ
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Chính sách Bảo mật Thông tin & Dữ liệu Thân chủ
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed">
                Áp dụng đối với mọi thông tin được thu thập qua website, thư từ trao đổi và hồ sơ vụ việc pháp lý tại SAIGONLEX.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Body */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-sm sm:text-base leading-[1.75] text-[#202124] space-y-8">
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong>Nguyên tắc thượng tôn:</strong> Bảo mật thông tin của khách hàng là nghĩa vụ pháp lý bắt buộc theo Điều 25 Luật Luật sư Việt Nam và quy chuẩn đạo đức nghề nghiệp cao nhất của SAIGONLEX.
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">
                1. Mục đích thu thập dữ liệu cá nhân
              </h2>
              <p>
                Khi quý khách gửi biểu mẫu đặt lịch tư vấn hoặc liên hệ qua website, chúng tôi thu thập các thông tin bao gồm: Họ và tên, Số điện thoại, Địa chỉ email, và Tóm tắt nội dung vụ việc cần hỗ trợ. Các dữ liệu này chỉ được sử dụng cho các mục đích:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Tiếp nhận, phân loại và phân công luật sư phụ trách chuyên môn phù hợp.</li>
                <li>Liên hệ xác nhận lịch hẹn tư vấn và trao đổi ý kiến sơ bộ.</li>
                <li>Thực hiện kiểm tra xung đột lợi ích (Conflicts of Interest) trước khi nhận vụ việc.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">
                2. Tuân thủ Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân
              </h2>
              <p>
                SAIGONLEX cam kết thực hiện đầy đủ các biện pháp kỹ thuật và tổ chức nhằm bảo vệ dữ liệu cá nhân của thân chủ:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Không mua bán, chia sẻ hoặc chuyển giao thông tin cá nhân của khách hàng cho bất kỳ bên thứ ba nào vì mục đích thương mại.</li>
                <li>Toàn bộ dữ liệu số được truyền tải qua giao thức HTTPS bảo mật và lưu trữ trên hệ thống máy chủ được mã hóa.</li>
                <li>Khách hàng có toàn quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân của mình khỏi hệ thống bằng cách gửi yêu cầu tới email: {SITE_CONFIG.email}.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">
                3. Cam kết ký Thỏa thuận bảo mật riêng (Non-Disclosure Agreement - NDA)
              </h2>
              <p>
                Đối với các giao dịch mua bán sáp nhập (M&A), bí mật công nghệ, bằng sáng chế hoặc các vụ việc tranh chấp kinh doanh nhạy cảm, SAIGONLEX luôn chủ động phát hành và ký kết hợp đồng NDA độc lập trước khi thân chủ bàn giao hồ sơ tài liệu chính thức.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">
                4. Thông tin liên hệ về công tác bảo mật
              </h2>
              <p>
                Mọi thắc mắc hoặc yêu cầu liên quan đến chính sách bảo mật dữ liệu, quý khách vui lòng liên hệ:
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-[#202124] space-y-1">
                <div><strong className="text-[#111827]">Bộ phận Tuân thủ & Bảo mật SAIGONLEX</strong></div>
                <div>Địa chỉ: {SITE_CONFIG.address}</div>
                <div>Điện thoại: {SITE_CONFIG.phone} • Email: {SITE_CONFIG.email}</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMau1 />
    </div>
  );
}
