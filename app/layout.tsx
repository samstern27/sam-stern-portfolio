import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import AnimationProvider from "@/context/AnimationContext";
import ScrollToTop from "./hooks/scroll";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Dots from "@/components/ui/dots";
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
          <div className="absolute hidden md:block top-19 right-5 z-[10000] opacity-40">
            <Dots
              size="xsmall"
              shape="round"
              cols={3}
              rows={10}
              duration={2}
              stagger={0.005}
              opacityFrom={0}
              opacityTo={1}
              yFrom={430}
              yTo={0}
              repeat={0}
              yoyo={false}
            />
          </div>
          <div className="absolute hidden md:block top-26 left-5 z-[10000] animate-pulse">
            <Dots
              size="xsmall"
              shape="round"
              cols={1}
              rows={3}
              duration={1}
              stagger={0.1}
              opacityFrom={1}
              opacityTo={1}
              xFrom={-100}
              xTo={0}
              repeat={0}
              yoyo={false}
            />
          </div>
          <div className="absolute hidden md:block top-39 left-5 z-[10000] animate-pulse">
            <Dots
              size="xsmall"
              shape="round"
              cols={1}
              rows={3}
              duration={1}
              stagger={0.1}
              opacityFrom={1}
              opacityTo={1}
              xFrom={-100}
              xTo={0}
              repeat={0}
              yoyo={false}
            />
          </div>

          {/* Aceternity UI background */}
          <AuroraBackground>
            <main className="flex-1 overflow-auto z-10 pt-9 pb-10">
              {children}
            </main>
          </AuroraBackground>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
