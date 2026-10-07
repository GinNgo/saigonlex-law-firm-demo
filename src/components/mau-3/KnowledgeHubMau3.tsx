"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight, User } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

export function KnowledgeHubMau3() {
  const [selectedCat, setSelectedCat] = useState<string>("Tất cả");

  const categories = ["Tất cả", "Doanh nghiệp", "Hợp đồng", "Bất động sản", "Lao động"];

  const filteredPosts =
    selectedCat === "Tất cả"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCat);

  const featured = filteredPosts[0] || BLOG_POSTS[0];
  const secondary = filteredPosts.slice(1, 4);

  return (
    <section id="kien-thuc" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-section)] border-b border-[var(--color-border)] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>GÓC NHÌN PHÁP LÝ & BÌNH LUẬN</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-3">
              Kiến Thức Pháp Luật Ứng Dụng
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm sm:text-base font-body leading-relaxed">
              Các bài phân tích chuyên sâu từ luật sư thực chiến, giúp quý doanh nghiệp và cá nhân
              chủ động nhận diện và phòng ngừa rủi ro pháp lý.
            </p>
          </div>

          <div className="mt-5 md:mt-0">
            <Link
              href="/mau-3/kien-thuc"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group"
            >
              <span>Xem tất cả bài viết</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--color-accent)]" />
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[var(--color-border)]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCat === cat
                  ? "bg-[var(--color-primary)] text-white shadow"
                  : "bg-[var(--bg-section-alt)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid: 1 Featured Major (5 cols) + Secondary List (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6 bg-[var(--surface)] rounded-xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={featured.image || "/images/blog-1.png"}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    {featured.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)] mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {featured.publishDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--color-primary)] mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                    <Link href={`/mau-3/kien-thuc/${featured.slug}`}>
                      {featured.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-3">
                    {featured.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[var(--color-border)] flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-xs text-[var(--color-primary)] font-medium">
                  <User className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>{featured.author}</span>
                </div>

                <Link
                  href={`/mau-3/kien-thuc/${featured.slug}`}
                  className="text-xs font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] inline-flex items-center gap-1"
                >
                  <span>Đọc tiếp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          )}

          {/* Secondary Posts List */}
          <div className="lg:col-span-6 space-y-6">
            {secondary.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-[var(--surface)] p-5 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group flex gap-4 sm:gap-6 items-start shadow-sm"
              >
                <div className="relative w-24 sm:w-32 aspect-square rounded-lg overflow-hidden shrink-0 bg-slate-100">
                  <Image
                    src={post.image || "/images/blog-2.png"}
                    alt={post.title}
                    fill
                    sizes="128px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 text-[11px] text-[var(--color-text-secondary)] mb-1.5">
                    <span className="font-semibold text-[var(--color-accent)]">{post.category}</span>
                    <span>•</span>
                    <span>{post.publishDate}</span>
                  </div>

                  <h4 className="font-heading text-sm sm:text-base font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-snug mb-2 line-clamp-2">
                    <Link href={`/mau-3/kien-thuc/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h4>

                  <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 mb-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/mau-3/kien-thuc/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)]"
                  >
                    <span>Xem bài viết</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
