import TechStack from "@/components/TechStack";
import ScrollToTop from "@/app/hooks/scroll";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <div className="relative w-screen h-[calc(100vh-10rem)] flex flex-col justify-center items-center gap-30 mt-15 sm:gap-50 overflow-hidden page-swipe">
        <header className="flex flex-col justify-center items-center gap-2 mt-15">
          <h1 className="text-white text-center font-sans text-7xl md:text-9xl font-semibold tracking-tight leading-tight fade-in-down">
            Sam Stern
          </h1>
          <h2 className="text-cyan-300 font-sans text-2xl md:text-4xl tracking-tight leading-tight mx-auto fade-in-down delay-1">
            Front-End Developer
          </h2>
          <p className="text-md text-center md:text-lg text-white max-w-80 md:max-w-100 fade-in-down delay-2">
            Building modern web experiences with React, Next.js, and Tailwind
            CSS
          </p>
        </header>
        <TechStack />
      </div>
    </>
  );
}
