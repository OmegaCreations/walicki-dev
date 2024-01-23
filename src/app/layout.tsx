import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// components
import "@/components/navbar/Navbar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Sidebar from "@/components/sidebar/Sidebar";

// Font
const inter = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500"],
});

// TODO: later add title and description
export const metadata: Metadata = {
  title: "WalickiDev",
  description: "Maksymilian Walicki portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container m-auto px-12 min-h-screen flex flex-col justify-between">
          <Navbar />
          <Sidebar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
