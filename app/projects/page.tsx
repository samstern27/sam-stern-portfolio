import Cards from "./Cards";
import type { JSX } from "react";

export default function ProjectsPage(): JSX.Element {
  return (
    <section className="flex flex-col justify-between items-center overflow-auto pt-1">
      <h1 className="w-full mb-5 text-white text-start lg:text-center lg:pl-0 pl-10 md:pl-20 font-sans text-4xl md:text-6xl font-semibold tracking-tight leading-tight fade-in-down">
        Projects
      </h1>
      <Cards />
    </section>
  );
}
