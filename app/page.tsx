import type { JSX } from "react";
import Image from "next/image";
import { techStackLogos } from "@/lib/techStackLogos";
import { TechStackLogo } from "@/types";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col justify-center sm:justify-between h-screen overflow-hidden py-15  gap-10 backdrop-blur-sm sm:backdrop-blur-none w-screen sm:w-full">
      <div className=" flex flex-col justify-center items-center gap-2 ">
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
      <div className="grid grid-cols-7 gap-y-2 md:gap-y-0 md:gap-2 lg:gap-4 mx-5 md:mx-0 px-3">
        {techStackLogos.map((logo: TechStackLogo) => (
          <Image
            className={logo.className}
            src={logo.src}
            width={56}
            height={56}
            alt={logo.alt}
            key={logo.id}
          />
        ))}
      </div>
    </div>
  );
}
