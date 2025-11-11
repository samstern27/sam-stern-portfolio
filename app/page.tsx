import TechStack from "@/components/TechStack";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function Home() {
  return (
    <>
      <BackgroundVideo />
      <div className="flex flex-col justify-evenly items-center min-h-screen gap-20 w-full page-swipe">
        <header className="flex flex-col justify-center items-center gap-2 ">
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
