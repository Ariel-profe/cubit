import type { Metadata } from "next";
import { roboto } from "@/config/fonts";

import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    template: "%s | Cubit",
    default: "Cubit",
  },
  description: "Cubit Ecommerce para venta de insumos tecnológicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-background text-slate-300 relative`}>
        {children}
        <Toaster position='bottom-right' />
      </body>
    </html>
  );
}
