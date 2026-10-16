
import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "AI Bridge",
  description: "ChatGPT Claude AI Bridge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
