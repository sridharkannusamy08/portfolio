import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { CustomCursor } from "@/components/providers/custom-cursor";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { GradientMesh, NoiseOverlay } from "@/components/effects/background-effects";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sridharkannusamy.com"),
  title: {
    default: `${SITE.name} | Digital Marketing Strategist & Brand Consultant`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Sridhar Kannusamy helps businesses build memorable brands, generate qualified leads, and scale profitably. Founder of BRANDZ. Book a strategy call today.",
  keywords: [
    "digital marketing",
    "brand strategy",
    "SEO",
    "Meta ads",
    "lead generation",
    "BRANDZ",
    "Sridhar Kannusamy",
    "marketing consultant",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "https://www.sridharkannusamy.com",
  },
  openGraph: {
    title: `${SITE.name} | Brand Consultant & Digital Marketing Strategist`,
    description: SITE.tagline,
    url: "https://www.sridharkannusamy.com",
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Brand Consultant & Digital Marketing Strategist`,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
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
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} relative min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <GradientMesh />
        <NoiseOverlay />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
