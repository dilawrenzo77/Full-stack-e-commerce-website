import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/Context/cartContext";
import Footer from "@/components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veldt",
  description: "A fullstack e-commerce application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen overflow-y-scroll scrollbar-hide bg-white`}
      suppressHydrationWarning={true} >
        <div className="w-full max-w-screen mx-auto xl:max-w-[75rem] flex flex-col">
          <main className="min-h-screen scrollbar-hide size-full">{children}</main>
          <Footer />
        </div>
      </body>
      </CartProvider>
    </html>
  );
}

