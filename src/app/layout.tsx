import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Devit Nur Azaqi - Mobile Developer Portfolio",
  description:
    "Graduate of Telkom University's Information Systems program with over 2 years of experience in cross-platform mobile application development (Flutter/React Native). Implementing Clean Architecture, client-server integration, and passionate about AI-driven development.",
  keywords: [
    "Mobile Developer",
    "Flutter",
    "React Native",
    "Clean Architecture",
    "Telkom University",
    "Information Systems",
    "Cross-platform Development",
    "AI Development",
    "Devit Nur Azaqi",
  ],
  authors: [{ name: "Devit Nur Azaqi" }],
  // icons: {
  //   icon: "/fav-icon.png",
  // },
  openGraph: {
    title: "Devit Nur Azaqi - Mobile Developer Portfolio",
    description:
      "Graduate of Telkom University specializing in cross-platform mobile development with Flutter & React Native",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
