import type { Metadata } from "next";
import { Be_Vietnam_Pro, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  display: "swap",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-be-vietnam",
});

const plusJakarta = Plus_Jakarta_Sans({
  display: "swap",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "AMAC REWARDS | Luxury Voucher Campaign",
  description: "Trải nghiệm đẳng cấp cùng AMAC. Đăng ký nhận ngay Voucher ưu đãi đặc quyền.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={`${beVietnam.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
