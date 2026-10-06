import React from "react";
import type { Metadata } from "next";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau2 } from "@/components/mau-2/HeaderMau2";
import { FooterMau2 } from "@/components/mau-2/FooterMau2";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ShieldCheck, Lock, FileText, KeyRound } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Quy ước Bảo mật & Cơ chế Thân chủ | SAIGONLEX Premium",
  description:
    "Quy ước giữ bí mật thông tin thân chủ, đặc quyền luật sư và cam kết bảo vệ dữ liệu cá nhân theo quy chuẩn pháp lý tối thượng của SAIGONLEX."
};

export default function PrivacyMau2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#111827]">
      <DemoBanner />
      <HeaderMau2 />

      <main className="flex-1">
        {/* Banner */}
        <section className="py-20 bg-[#FAF7F0] border-b border-[#E5DEC9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu 2", href: "/mau-2" },
                { label: "Quy ước bảo mật" }
              ]}
              theme="editorial"
            />
            <div className="space-y-4 pt-4">
              <span className="text-xs font-serif text-[#C5A059] uppercase tracking-[0.25em] block font-semibold">
                NGUYÊN TẮC BẢO MẬT TỐI CAO
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0C1829]">
                Quy ước Cơ mật & Đặc quyền Luật sư – Thân chủ
              </h1>
              <p className="text-slate-600 font-sans text-sm sm:text-base font-light leading-relaxed">
                Áp dụng đối với mọi giao dịch, trao đổi thông tin và lưu trữ dữ liệu giữa thân chủ và SAIGONLEX Premium Law Firm.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Body */}
        <section className="py-20 bg-[#FDFBF7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-600 font-sans font-light text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-sm border border-[#E5DEC9] bg-white shadow-sm flex items-start gap-4">
              <Lock className="w-6 h-6 text-[#C5A059] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-serif font-bold text-base text-[#0C1829] block">
                  Đặc quyền Bất khả Xâm phạm
                </span>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Tại SAIGONLEX, bí mật của thân chủ là thành trì không thể xâm phạm. Mọi dữ liệu trao đổi được bảo đảm tuyệt đối theo Điều 25 Luật Luật sư Việt Nam và quy chuẩn đặc quyền luật sư quốc tế.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-[#0C1829]">
                I. Thu thập Dữ liệu có Giới hạn
              </h2>
              <p>
                Chúng tôi chỉ tiếp nhận các dữ liệu cá nhân thực sự cần thiết cho việc thẩm định vụ việc: Họ tên, Số điện thoại, Email và Tóm lược bối cảnh giao dịch. Toàn bộ thông tin này không bao giờ được chia sẻ với bất kỳ bên thứ ba nào vì mục đích thương mại.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-[#0C1829]">
                II. Tuân thủ Nghị định 13/2023/NĐ-CP & Mã hóa Cấp cao
              </h2>
              <p>
                Hệ thống dữ liệu số của SAIGONLEX được trang bị tường lửa đa lớp và chuẩn mã hóa lưu trữ tiên tiến. Khách hàng có toàn quyền yêu cầu trích xuất, hiệu chỉnh hoặc xóa dữ liệu cá nhân theo quy định của pháp luật hiện hành.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-[#0C1829]">
                III. Cơ chế Ký Cam kết Bảo mật Riêng (NDA)
              </h2>
              <p>
                Trước khi tiếp nhận bất kỳ tài liệu nào chứa bí mật kinh doanh, bản quyền công nghệ hay dữ liệu tài chính nội bộ, SAIGONLEX luôn chủ động phát hành và thực hiện thủ tục ký kết Thỏa thuận bảo mật thông tin (NDA) hai chiều có chế tài ràng buộc pháp lý chặt chẽ.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#E5DEC9]">
              <h2 className="font-serif text-xl font-bold text-[#0C1829]">
                IV. Thông tin Liên lạc Bộ phận Cơ mật
              </h2>
              <div className="p-6 rounded-sm border border-[#E5DEC9] bg-[#FAF7F0] text-xs text-slate-600 space-y-1">
                <div className="font-serif font-bold text-[#0C1829]">Ban Thư ký Pháp lý & Kiểm toán Tuân thủ SAIGONLEX</div>
                <div>Địa chỉ: {SITE_CONFIG.address}</div>
                <div>Hotline: {SITE_CONFIG.hotline} • Email: {SITE_CONFIG.email}</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMau2 />
    </div>
  );
}
