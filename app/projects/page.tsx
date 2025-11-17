import ProjectCards from "@/components/ProjectCards";
import TaglineAnimation from "@/components/TaglineAnimation";

export default function ProjectsPage() {
  return (
    <div className="isolate px-6 pt-24 sm:pt-27 lg:px-8 w-screen  page-swipe">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl fade-in-down">
          Projects
        </h1>
        <TaglineAnimation />
      </header>
      <ProjectCards />
    </div>
  );
}
