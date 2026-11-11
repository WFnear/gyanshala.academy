import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/",
          "/admin/*",
          "/api/",
          "/api/*",
          "/_next/",
        ],
      },
    ],
    sitemap: "https://gyanshala.in/sitemap.xml",
    host: "https://gyanshala.in",
  };
}
