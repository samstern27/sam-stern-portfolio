import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import AnimationProvider from "@/context/AnimationContext";
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
      <body
        className={`${inter.className} bg-neutral-950 min-h-screen flex flex-col overflow-auto`}
      >
        <AnimationProvider>
          <Navbar />
          <aside className="hidden md:block absolute top-21 left-10 z-50">
            <SocialLinks />
          </aside>
          <main className="flex-1 h-[calc(100vh-3.531rem)] overflow-auto z-10">
            {children}
          </main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
