import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { TransitionProvider } from "@/components/ui/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Harbi Ajans | Gerçek İşletmeler İçin Gerçek Çözümler",
    template: "%s | Harbi Ajans",
  },
  description: "Harbi Ajans. Günler içinde inanılmaz hızlı, premium ve yüksek dönüşümlü bir web sitesi başlatın. Gerçek büyüme için ürünleştirilmiş web tasarımı ve geliştirme.",
  keywords: ["Harbi Ajans", "Harbi", "Web Tasarım", "Ürünleştirilmiş Web Ajansı", "Next.js Web Geliştirme", "Hızlı Web Sitesi Tasarımı", "Yüksek Dönüşümlü Web Siteleri"],
  authors: [{ name: "Harbi Ajans", url: "https://harbi.agency" }],
  creator: "Harbi Ajans",
  publisher: "Harbi Ajans",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://harbi.agency",
    siteName: "Harbi Ajans",
    title: "Harbi Ajans | Premium Dijital Web Ajansı",
    description: "Günler içinde inanılmaz hızlı, premium ve yüksek dönüşümlü bir web sitesi başlatın. Harbi Ajans.",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Harbi Ajans Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harbi Ajans | Gerçek İşletmeler İçin Gerçek Çözümler",
    description: "Günler içinde inanılmaz hızlı, premium ve yüksek dönüşümlü bir web sitesi başlatın.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#fafafa] text-neutral-900 w-full min-h-screen flex flex-col relative overflow-x-hidden selection-purple selection:text-white transition-colors duration-500 font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <SmoothScroll>
            <TransitionProvider>
              {children}
            </TransitionProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}


