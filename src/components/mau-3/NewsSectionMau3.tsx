"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Newspaper, Calendar, ArrowRight, Tag } from "lucide-react";
import { NEWS_ARTICLES_MAU3 } from "@/data/mau3Data";

export function NewsSectionMau3() {
  return (
    <section id="tin-tuc" className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#AD8B55]/10 text-[#AD8B55] text-xs font-bold uppercase tracking-wider mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>BẢN TIN PHÁP LUẬT & HOẠT ĐỘNG</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17365D] tracking-tight mb-3">
              Tin Tức Pháp Lý & Sự Kiện SaigonLex
            </h2>
            <p className="text-[#5F6368] text-sm sm:text-base font-body leading-relaxed">
              Cập nhật các chính sách pháp luật mới nhất, sự kiện tọa đàm và hoạt động nghiệp vụ
              của đội ngũ luật sư SaigonLex.
            </p>
          </div>

          <div className="mt-5 md:mt-0">
            <Link
              href="/mau-3/tin-tuc"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#17365D] hover:text-[#AD8B55] transition-colors group"
            >
              <span>Xem tất cả tin tức</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#AD8B55]" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ARTICLES_MAU3.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="bg-white rounded-xl overflow-hidden border border-[#E5E7EB] hover:border-[#AD8B55] transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#17365D]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {item.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-[#6B7280] mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#AD8B55]" />
                    <span>{item.publishDate}</span>
                  </div>

                  <h3 className="font-heading text-sm sm:text-base font-bold text-[#17365D] group-hover:text-[#AD8B55] transition-colors leading-snug mb-2.5 line-clamp-2">
                    <Link href={`/mau-3/tin-tuc/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#5F6368] line-clamp-3 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#F3F4F6] mt-auto">
                <Link
                  href={`/mau-3/tin-tuc/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17365D] group-hover:text-[#AD8B55] transition-colors"
                >
                  <span>Đọc chi tiết</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
