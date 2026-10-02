import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Permanent_Marker } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "../public/hoodframe.png";
import NavBar from "@/components/ui/navBar";
import SideBar from "@/components/ui/sideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HoodFrame",
  description:
    "Is a movie website that allows users to search for movies and view details about them.",
  icons: {
    icon: "/hoodframe.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${permanentMarker.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-defjam-bg text-defjam-text ">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative">
          <div className=" grid grid-cols-1 grid-rows-[auto_1fr] min-h-dvh gap-y-6">
            <div className="col-span-full ">
              {" "}
              <nav className="flex shrink-0 items-center justify-between py-4">
                <div className="flex items-center">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={180}
                    height={180}
                    priority
                  />
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-defjam-muted" />
              </nav>
            </div>

            {/* Main */}
            <div className="grid md:grid-cols-[auto_1fr]">

              <aside className="hidden sm:block">
                <SideBar />
              </aside>

              <main className="min-w-0 pb-24 sm:pb-0 lg:pb-0 ">{children}</main>
            </div>
          </div>

          <div className="fixed inset-x-0 bottom-0 z-10 sm:hidden absolute z-10">
            <NavBar />
          </div>
        </div>
      </body>
    </html>
  );
}
