import type { Metadata } from "next";
import { roboto } from "@/config/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cubit",
  description: "Cubit Ecommerce para venta de insumos tecnologicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} max-w-[1600px] mx-auto px-3 antialiased bg-background text-slate-300 relative`}
      >
        {children}
      </body>
    </html>
  );
}
