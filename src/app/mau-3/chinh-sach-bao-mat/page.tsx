import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DemoBanner } from "@/components/common/DemoBanner";
import { HeaderMau3 } from "@/components/mau-3/HeaderMau3";
import { FooterMau3 } from "@/components/mau-3/FooterMau3";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { TemplatePageWrapper } from "@/components/common/TemplatePageWrapper";
import { ShieldCheck, Lock, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật Thông Tin | CÔNG TY LUẬT SAIGONLEX",
  description:
    "Cam kết bảo mật thông tin thân chủ và bảo vệ dữ liệu cá nhân theo Luật Luật sư Việt Nam và Nghị định 13/2023/NĐ-CP của Công ty Luật SaigonLex."
};

export default function PrivacyPolicyMau3Page() {
  return (
    <TemplatePageWrapper
      templateId="mau-c"
      className="min-h-screen flex flex-col bg-white text-[#202124] font-body"
    >
      <DemoBanner />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: "Trang chủ", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3" },
            { name: "Chính sách bảo mật", url: "https://saigonlex-law-firm-demo.vercel.app/mau-3/chinh-sach-bao-mat" }
          ]
        }}
      />
      <HeaderMau3 />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-gradient-to-r from-[#17365D] via-[#0E2945] to-[#17365D] text-white py-12 lg:py-14 border-b border-[#E5E7EB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Trang chủ Mẫu C", href: "/mau-3" },
                { label: "Chính sách bảo mật" }
              ]}
              theme="dark"
            />
            <div className="mt-4">
              <span className="text-xs font-bold text-[#AD8B55] uppercase tracking-widest block mb-2">
                NGUYÊN TẮC BẢO MẬT NGHỀ NGHIỆP LUẬT SƯ
              </span>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                Chính Sách Bảo Mật & Bảo Vệ Dữ Liệu Thân Chủ
              </h1>
              <p className="text-xs text-[#D1D5DB] mt-2">
                Áp dụng đối với mọi thông tin thu thập qua website và trong quá trình cung cấp dịch vụ pháp lý.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-[#4B5563] text-sm sm:text-base leading-relaxed space-y-8 font-body">
            <div>
              <h2 className="font-heading text-xl font-bold text-[#17365D] mb-3">
                1. Nguyên Tắc Bảo Mật Nghề Nghiệp Của Luật Sư
              </h2>
              <p>
                Tại <strong>Công ty Luật SaigonLex</strong>, bảo mật thông tin không chỉ là nghĩa vụ
                pháp lý mà còn là nền tảng đạo đức cốt lõi của nghề luật sư. Căn cứ theo Điều 25 Luật
                Luật sư số 65/2006/QH11 (sửa đổi, bổ sung 2012) và Bộ Quy tắc Đạo đức và Ứng xử nghề
                nghiệp Luật sư Việt Nam, luật sư có trách nhiệm giữ bí mật thông tin về vụ việc và mọi
                tài liệu do khách hàng cung cấp.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-[#17365D] mb-3">
                2. Phạm Vi Thu Thập Dữ Liệu Qua Website
              </h2>
              <p>
                Khi quý vị sử dụng tính năng liên hệ, yêu cầu tư vấn hoặc tải biểu mẫu trên website
                của chúng tôi, chúng tôi chỉ thu thập các dữ liệu cần thiết phục vụ việc liên lạc sơ bộ:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Họ và tên của người liên hệ hoặc tên pháp nhân đại diện;</li>
                <li>Số điện thoại và địa chỉ email tiếp nhận trao đổi;</li>
                <li>Lĩnh vực pháp lý quan tâm và tóm tắt nội dung sơ bộ của yêu cầu tư vấn.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-[#17365D] mb-3">
                3. Mục Đích & Cam Kết Sử Dụng Thông Tin
              </h2>
              <p>
                Toàn bộ dữ liệu quý vị cung cấp chỉ được sử dụng cho các mục đích hợp pháp sau:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Luật sư phụ trách nghiên cứu sơ bộ tình trạng pháp lý và phản hồi tư vấn;</li>
                <li>Liên lạc xếp lịch hẹn làm việc tại văn phòng hoặc qua hội thảo trực tuyến;</li>
                <li>Gửi thông báo cập nhật tiến độ công việc trong trường hợp hai bên ký kết hợp đồng dịch vụ pháp lý.</li>
              </ul>
              <p className="mt-3">
                <strong>Cam kết tuyệt đối:</strong> SaigonLex không mua bán, trao đổi, chia sẻ hoặc
                tiết lộ thông tin cá nhân của quý vị cho bất kỳ bên thứ ba nào vì mục đích thương mại
                hay quảng cáo.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-[#17365D] mb-3">
                4. Tuân Thủ Nghị Định 13/2023/NĐ-CP Về Bảo Vệ Dữ Liệu Cá Nhân
              </h2>
              <p>
                Chúng tôi áp dụng các biện pháp kỹ thuật và an ninh dữ liệu phù hợp nhằm bảo vệ dữ liệu
                cá nhân trước sự truy cập trái phép, rò rỉ, mất mát hoặc phá hủy dữ liệu. Thân chủ có
                đầy đủ các quyền yêu cầu xem lại, chỉnh sửa hoặc xóa dữ liệu cá nhân theo quy định của
                pháp luật hiện hành.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
              <h3 className="font-heading text-base font-bold text-[#17365D] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#AD8B55]" />
                <span>Liên Hệ Bộ Phận Quản Trị & Pháp Lý</span>
              </h3>
              <p className="text-xs text-[#5F6368] mb-0">
                Mọi thắc mắc hoặc yêu cầu liên quan đến chính sách bảo mật, quý khách vui lòng gửi văn
                bản đến địa chỉ email: <strong>contact@saigonlex.vn</strong> hoặc liên hệ hotline:{" "}
                <strong>0908 033 115</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <FooterMau3 />
    </TemplatePageWrapper>
  );
}
