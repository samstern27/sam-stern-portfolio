import type { JSX } from "react";
import TechStackLogos from "@/components/TechStackLogos";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col justify-evenly items-center h-screen overflow-hidden pb-40 gap-20 backdrop-blur-sm sm:backdrop-blur-none w-screen sm:w-full">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <h1 className="text-white text-center font-sans text-7xl md:text-9xl font-semibold tracking-tight leading-tight fade-in-down">
          Sam Stern
        </h1>
        <h2 className="text-cyan-300 font-sans text-2xl md:text-4xl tracking-tight leading-tight mx-auto fade-in-down delay-1">
          Front-End Developer
        </h2>
        <p className="text-md text-center md:text-lg text-white md:text-gray-600 max-w-80 mx-auto fade-in-down delay-2">
          Building modern web experiences with React, Next.js, and Tailwind CSS
        </p>
      </div>
      <TechStackLogos />
    </div>
  );
}
