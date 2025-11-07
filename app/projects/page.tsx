import ProjectCards from "@/components/ProjectCards";

import type { JSX } from "react";

export default function ProjectsPage(): JSX.Element {
  return (
    <div className="isolate px-6 pt-24 sm:pt-27 lg:px-8 page-swipe">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl fade-in-down">
          Projects
        </h2>
        <p className="mt-2 text-lg/8 text-gray-400 fade-in-down delay-0-3">
          Developing solutions that make an impact.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-10 items-center my-8 mx-auto w-full">
        <ProjectCards />
      </div>
    </div>
  );
}
