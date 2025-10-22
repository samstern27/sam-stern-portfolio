import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

import { WavyBackground } from "@/components/ui/wavy-background";

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
    <html lang="en" className="h-full w-full bg-black">
      <body
        className={`${inter.className} h-full w-full bg-black overflow-hidden`}
      >
        <main className="relative h-screen w-screen overflow-hidden">
          <Navbar />
          <WavyBackground
            waveWidth={5}
            waveOpacity={0.1}
            blur={0}
            colors={["#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8"]}
            containerClassName="opacity-0 fade-in"
          >
            {children}
          </WavyBackground>
        </main>
      </body>
    </html>
  );
}
