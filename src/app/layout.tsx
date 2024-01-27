import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// components
import "@/components/navbar/Navbar";
import Navbar from "@/components/navbar/Navbar";
import Transition from "./transition";

// Font
const inter = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500"],
});

// TODO: later add title and description
export const metadata: Metadata = {
  title: "WalickiDev",
  description: "Maksymilian Walicki is a fullstack web developer",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container m-auto px-12 min-h-screen flex flex-col">
          <Navbar />
          <Transition>{children}</Transition>
        </div>
      </body>
    </html>
  );
}
