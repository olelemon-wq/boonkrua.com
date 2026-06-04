import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Boonkrua — Memorial Web Portal",
  description:
    "แด่พ่อผู้ล่วงลับ เรื่องราว ความดี และพระคุณจะสถิตอยู่ในใจของพวกเราตลอดไป",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={cn("h-full", sarabun.variable)}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
