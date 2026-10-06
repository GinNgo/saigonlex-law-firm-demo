import { MetadataRoute } from "next";
import { PRACTICE_AREAS } from "@/data/services";
import { BLOG_POSTS } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saigonlex-demo.vercel.app";
  const now = new Date();

  // Root gateway
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0
    }
  ];

  // Templates
  const templates = ["mau-1", "mau-2"];

  templates.forEach((mau) => {
    // Main pages
    routes.push(
      {
        url: `${baseUrl}/${mau}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.9
      },
      {
        url: `${baseUrl}/${mau}/gioi-thieu`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8
      },
      {
        url: `${baseUrl}/${mau}/linh-vuc`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8
      },
      {
        url: `${baseUrl}/${mau}/doi-ngu`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7
      },
      {
        url: `${baseUrl}/${mau}/tin-tuc`,
        lastModified: now,
        changeFrequency: "daily",
        priority: 0.8
      },
      {
        url: `${baseUrl}/${mau}/lien-he`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8
      },
      {
        url: `${baseUrl}/${mau}/chinh-sach-bao-mat`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.5
      }
    );

    // Practice areas details
    PRACTICE_AREAS.forEach((svc) => {
      routes.push({
        url: `${baseUrl}/${mau}/linh-vuc/${svc.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8
      });
    });

    // Blog details
    BLOG_POSTS.forEach((blog) => {
      routes.push({
        url: `${baseUrl}/${mau}/tin-tuc/${blog.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7
      });
    });
  });

  return routes;
}
