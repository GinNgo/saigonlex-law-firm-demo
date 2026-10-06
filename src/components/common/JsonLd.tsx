import React from "react";
import { SITE_CONFIG } from "@/data/siteConfig";

interface JsonLdProps {
  type: "LawFirm" | "FAQPage" | "Article" | "BreadcrumbList";
  data?: Record<string, any>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  let schema: Record<string, any> = {};

  if (type === "LawFirm") {
    schema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "SAIGONLEX – Hãng luật Doanh nghiệp & Tranh tụng [DEMO]",
      alternateName: "SAIGONLEX Law Firm",
      url: "https://saigonlex-demo.vercel.app",
      logo: "https://saigonlex-demo.vercel.app/images/hero-corporate.png",
      image: "https://saigonlex-demo.vercel.app/images/hero-corporate.png",
      description:
        "Hãng luật chuyên sâu tư vấn doanh nghiệp, M&A, hợp đồng thương mại, đầu tư FDI và giải quyết tranh chấp tại TP. Hồ Chí Minh.",
      telephone: "+842838229999",
      email: SITE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tầng 26, Tòa nhà Saigon Centre Tower 2, 67 Lê Lợi",
        addressLocality: "Quận 1",
        addressRegion: "TP. Hồ Chí Minh",
        addressCountry: "VN"
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "08:30",
          closes: "12:00"
        }
      ],
      priceRange: "$$$"
    };
  } else if (type === "FAQPage" && data?.faqs) {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((f: { question: string; answer: string }) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer
        }
      }))
    };
  } else if (type === "Article" && data?.article) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.article.title,
      description: data.article.excerpt,
      image: data.article.image,
      author: {
        "@type": "Person",
        name: data.article.author
      },
      publisher: {
        "@type": "Organization",
        name: "SAIGONLEX [DEMO]",
        logo: {
          "@type": "ImageObject",
          url: "https://saigonlex-demo.vercel.app/images/hero-corporate.png"
        }
      },
      datePublished: "2026-09-01T08:00:00+07:00",
      dateModified: "2026-09-28T10:00:00+07:00"
    };
  } else if (type === "BreadcrumbList" && data?.items) {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: data.items.map((item: { name: string; url: string }, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
