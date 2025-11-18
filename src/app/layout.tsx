import { StructuredData } from "@/components/StructuredData";
// import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heyitsdevit.com"),
  title: {
    default: "Mobile Developer Portfolio | Devit Nur Azaqi",
    template: "%s | HeyItsDevit",
  },
  description:
    "HeyItsDevit - Professional Mobile Developer specializing in Flutter & React Native. Graduate of Telkom University with 2+ years experience building cross-platform apps. Expert in Clean Architecture, API Integration, and modern mobile development.",
  keywords: [
    "HeyItsDevit",
    "Devit Nur Azaqi",
    "Mobile Developer",
    "Flutter Developer",
    "React Native Developer",
    "Cross-platform Development",
    "Clean Architecture",
    "Mobile App Development",
    "Telkom University",
    "Information Systems",
    "Indonesia Mobile Developer",
    "Freelance Mobile Developer",
    "App Developer Portfolio",
    "Flutter Expert",
    "React Native Expert",
    "API Integration",
    "Mobile UI/UX",
    "Android Developer",
    "iOS Developer",
  ],
  authors: [{ name: "Devit Nur Azaqi", url: "https://heyitsdevit.com" }],
  creator: "HeyItsDevit",
  publisher: "HeyItsDevit",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heyitsdevit.com",
    siteName: "HeyItsDevit",
    title: "Mobile Developer Portfolio | Devit Nur Azaqi",
    description:
      "Professional Mobile Developer specializing in Flutter & React Native. Building high-quality cross-platform applications with Clean Architecture.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "HeyItsDevit - Mobile Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HeyItsDevit - Mobile Developer Portfolio",
    description:
      "Professional Mobile Developer specializing in Flutter & React Native. Building high-quality cross-platform applications.",
    images: ["/images/og-image.png"],
    creator: "@HeyItsDevit",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://heyitsdevit.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        {/* Uncomment after getting GA ID from Google Analytics */}
        {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} /> */}
      </head>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
