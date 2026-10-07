import type { Metadata } from "next";
import { Be_Vietnam_Pro, Roboto } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { DemoThemeProvider } from "@/context/DemoThemeContext";
import { TemplateTransitionOverlay } from "@/components/common/TemplateTransitionOverlay";
import { DemoToolbar } from "@/components/common/DemoToolbar";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { FloatingContactWidget } from "@/components/common/FloatingContactWidget";
import "./globals.css";

const headingFont = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saigonlex-demo.vercel.app"),
  title: {
    default: "SAIGONLEX – Hãng luật Doanh nghiệp & Tranh tụng Cao cấp [DEMO]",
    template: "%s | SAIGONLEX – DEMO"
  },
  description:
    "Hãng luật chuyên sâu về tư vấn doanh nghiệp, M&A, hợp đồng thương mại, đầu tư FDI và tranh tụng tòa án tại TP. Hồ Chí Minh. Phiên bản website demo giao diện cao cấp.",
  keywords: [
    "công ty luật",
    "hãng luật saigonlex",
    "luật sư doanh nghiệp tphcm",
    "tư vấn m&a",
    "hợp đồng thương mại",
    "tranh tụng trọng tài",
    "đầu tư fdi việt nam"
  ],
  authors: [{ name: "SAIGONLEX Legal Team" }],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true
    }
  },
  openGraph: {
    title: "SAIGONLEX – Hãng luật Doanh nghiệp & Tranh tụng Cao cấp [DEMO]",
    description: "Bộ đôi giao diện website luật cao cấp: Corporate Legal & Premium Law Firm.",
    url: "https://saigonlex-demo.vercel.app",
    siteName: "SAIGONLEX – DEMO",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/hero-corporate.png",
        width: 1200,
        height: 630,
        alt: "SAIGONLEX Law Firm Demo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SAIGONLEX – Hãng luật Doanh nghiệp & Tranh tụng Cao cấp [DEMO]",
    description: "Website công ty luật Việt Nam cao cấp với 2 phiên bản giao diện Corporate và Luxury.",
    images: ["/images/hero-corporate.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                  }
                  window.scrollTo(0, 0);
                  window.addEventListener('beforeunload', function() {
                    window.scrollTo(0, 0);
                  });

                  var saved = localStorage.getItem('saigonlex-demo-theme');
                  if (saved) {
                    document.documentElement.setAttribute('data-theme', saved);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'navy-gold');
                  }
                } catch(e) {}
              })();
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[var(--bg-page)] text-[var(--color-text)] selection:bg-[var(--color-accent)]/20 selection:text-[var(--color-primary-dark)]">
        <DemoThemeProvider>
          <TemplateTransitionOverlay />
          {children}
          <DemoToolbar />
          <FloatingContactWidget />
          <ScrollToTop />
        </DemoThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
