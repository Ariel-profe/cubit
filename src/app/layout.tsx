import type { Metadata } from "next";
import { roboto } from "@/config/fonts";

import "./globals.css";
import { Provider } from "@/components";

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
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
