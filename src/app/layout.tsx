import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap"
});

const serifFont = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-serif",
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
    <html lang="vi" className={`${sansFont.variable} ${serifFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
