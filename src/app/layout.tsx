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
  description: "Professional Mobile Developer with 2+ years of experience in Flutter and experience in React Native. Specialized in Clean Architecture, Laravel backend, and building scalable mobile applications.",
  keywords: ["Mobile Developer", "Flutter", "React Native", "Laravel", "Clean Architecture", "Devit Nur Azaqi"],
  authors: [{ name: "Devit Nur Azaqi" }],
  openGraph: {
    title: "Devit Nur Azaqi - Mobile Developer Portfolio",
    description: "Professional Mobile Developer specializing in Flutter & React Native",
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
