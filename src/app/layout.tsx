import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Sider from "./components/sider/Sider";
import Search from "./components/search/Search";
import Play from "./components/play/Play";
import { Suspense } from "react";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Music",
  description: "Chill Music Real-Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-[#292929] text-white`}>
        <div className="container mx-auto ">
          <div className="flex items-start">
            <div className="w-[280px]">
              <Sider />
            </div>
            <div className="flex-1 ml-[20px]">
              <Suspense><Search /></Suspense>
              <main className="mb-[120px] mt-[30px]">{children}</main>
            </div>
          </div>
        </div>
        <Play />
      </body>
    </html>
  );
}
