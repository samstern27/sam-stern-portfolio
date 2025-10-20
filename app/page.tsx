import type { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col justify-center item-center gap-5">
      <h1 className="text-white text-center font-sans text-7xl md:text-9xl font-semibold tracking-tight leading-tight">
        Sam Stern
      </h1>
      <h2 className="text-cyan-300 font-sans text-2xl md:text-4xl tracking-tight leading-tight mx-auto">
        Front-End Developer
      </h2>
      <p className="text-md text-center md:text-lg text-gray-600 max-w-80 mx-auto">
        Building modern web experiences with React, Next.js, and Tailwind CSS
      </p>
    </div>
  );
}
