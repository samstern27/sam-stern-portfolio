import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import AnimationProvider from "@/context/AnimationContext";
import ScrollToTop from "./hooks/scroll";
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-950 min-h-screen flex flex-col overflow-x-hidden`}
      >
        <ScrollToTop />
        <AnimationProvider>
          <header className="relative w-full z-[9999]">
            <Navbar />
            <aside className="hidden md:block absolute top-21 left-10 z-50">
              <SocialLinks />
            </aside>
          </header>

          <main className="flex-1 overflow-auto z-10 pt-14 pb-10">
            {children}
          </main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
