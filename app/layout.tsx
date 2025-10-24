import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Sam Stern - Developer",
  description: "Sam Stern's frontend developer portfolio",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        <main className="flex-1 overflow-auto">{children}</main>
      </body>
    </html>
  );
}
