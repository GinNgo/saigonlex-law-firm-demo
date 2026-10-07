"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ArrowRight, Mail, Phone, Scale } from "lucide-react";

export function TeamMau3() {
  const teamMembers = [
    {
      name: "Luật sư Trần Thị Sương",
      role: "Luật sư Điều hành (Managing Partner)",
      credentials: "Đoàn Luật sư TP. Hồ Chí Minh",
      specialties: ["Doanh nghiệp & Đầu tư", "Bất động sản & Xây dựng", "Tranh tụng Tòa án"],
      image: "/images/lawyer-1.png",
      experience: "Chuyên gia pháp lý với nhiều năm kinh nghiệm đại diện cho doanh nghiệp và nhà đầu tư trong các giao dịch phức tạp.",
      featured: true
    },
    {
      name: "Luật sư Nguyễn Văn Hùng",
      role: "Luật sư Cao cấp (Senior Associate)",
      credentials: "Đoàn Luật sư TP. Hồ Chí Minh",
      specialties: ["Tranh tụng Dân sự - Kinh doanh", "Thu hồi công nợ", "Hợp đồng"],
      image: "/images/lawyer-2.png",
      experience: "Dày dạn kinh nghiệm tranh tụng tại Tòa án các cấp và Trọng tài thương mại quốc tế (VIAC).",
      featured: false
    },
    {
      name: "Luật sư Lê Thu Trang",
      role: "Luật sư Tư vấn (Associate)",
      credentials: "Đoàn Luật sư TP. Hồ Chí Minh",
      specialties: ["Pháp chế nội bộ Doanh nghiệp", "Lao động", "Thủ tục M&A"],
      image: "/images/lawyer-3.png",
      experience: "Tư vấn thường xuyên cho nhiều doanh nghiệp FDI và công ty công nghệ tại TP.HCM.",
      featured: false
    },
    {
      name: "Chuyên viên Đỗ Hoàng Nam",
      role: "Chuyên viên Pháp lý Cấp cao",
      credentials: "Cử nhân Luật học (ĐH Luật TP.HCM)",
      specialties: ["Cấp phép Đầu tư (FDI)", "Thủ tục Đất đai", "Sở hữu trí tuệ"],
      image: "/images/lawyer-4.png",
      experience: "Phụ trách rà soát hồ sơ hành chính, hỗ trợ làm việc với các cơ quan quản lý nhà nước.",
      featured: false
    }
  ];

  return (
    <section id="doi-ngu" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17365D]/5 text-[#17365D] text-xs font-bold uppercase tracking-wider mb-3">
              <Scale className="w-3.5 h-3.5 text-[#AD8B55]" />
              <span>ĐỘI NGŨ LUẬT SƯ & CHUYÊN GIA</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight mb-4">
              Người Đồng Hành Đáng Tin Cậy Của Thân Chủ
            </h2>
            <p className="text-[#5F6368] text-sm sm:text-base font-body leading-relaxed">
              Các luật sư thành viên và cộng sự của SaigonLex đều có chứng chỉ hành nghề chính thức,
              kinh nghiệm thực tiễn phong phú và luôn đặt đạo đức nghề nghiệp lên hàng đầu.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/mau-3/doi-ngu"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#17365D] hover:text-[#AD8B55] transition-colors group"
            >
              <span>Xem đầy đủ hồ sơ nhân sự</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#AD8B55]" />
            </Link>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`bg-[#F8F9FA] rounded-xl overflow-hidden border border-[#E5E7EB] hover:border-[#AD8B55] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md ${
                member.featured ? "ring-2 ring-[#AD8B55]/30" : ""
              }`}
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17365D]/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {member.featured && (
                    <div className="absolute top-3 left-3 bg-[#AD8B55] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                      Managing Partner
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[11px] font-medium text-[#F5F1E9]">{member.credentials}</div>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-5">
                  <h3 className="font-heading text-base font-bold text-[#17365D] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#AD8B55] mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#5F6368] leading-relaxed mb-4 line-clamp-3">
                    {member.experience}
                  </p>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {member.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-white text-[#17365D] px-2 py-0.5 rounded border border-[#E5E7EB] font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <Link
                  href="/mau-3/doi-ngu"
                  className="w-full py-2 rounded bg-white text-center text-xs font-semibold text-[#17365D] border border-[#E5E7EB] hover:bg-[#17365D] hover:text-white transition-colors block"
                >
                  Xem chi tiết kinh nghiệm
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
