import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="relative mb-10 page-swipe">
        {/* Bulb */}
        <Image
          src="/light.svg"
          width={150}
          height={150}
          alt="Ceiling light"
          className="absolute -top-2 z-50 left-1/2 -translate-x-1/2 swipe-down-light"
        />

        {/* Lighting */}
        <div className="absolute top-31 left-1/2 -translate-x-1/2 w-[1000px] h-[150px] overflow-visible pointer-events-none light-fade border-white">
          <div
            className="w-[1000px] h-full animate-pulse  glowing-light "
            style={{
              clipPath: "polygon(47.7% 0%, 16% 75%, 84% 75%, 52.3% 0%)",
            }}
          />
        </div>
      </div>

      <div className="isolate px-6 py-24 sm:py-32 lg:px-8 page-swipe">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-2xl text-center gap-5 flex flex-col">
          <header>
            <h1 className="text-5xl mt-9 sm:mt-0 font-semibold tracking-tight text-balance text-white sm:text-5xl fade-in-down delay-5">
              About
            </h1>
          </header>

          <p className="mt-2 text-md text-neutral-300 center-justified fade-in-down delay-7">
            I’m Sam, a front-end developer who enjoys creating practical
            solutions for real-world challenges. My background in hospitality
            taught me how much smoother things can run with the right tools,
            inspiring me to design and build products that bridge gaps, simplify
            work, and make life easier for people. One of those projects is
            Barbid — a platform that connects venues with flexible staff,
            helping people find shifts that fit their own schedules,
            preferences, and rates.{" "}
          </p>
          <p className="mt-2 text-md text-neutral-300 center-justified fade-in-down delay-9">
            I work with modern frameworks and tools such as React, Next.js,
            Tailwind, TypeScript, Firebase, SQL, Vite, Figma, Netlify, and
            Vercel to turn ideas into reality. My focus is on building
            applications that are both functional and intuitive, blending clean
            design with interactivity to solve real problems. For me,
            development means turning challenges into practical solutions
            through curiosity, experimentation, and continuous refinement.
          </p>
          <p className="mt-2 text-md text-neutral-300 center-justified fade-in-down delay-11">
            Outside of development, I’m always exploring new projects and
            thinking about ways technology can improve everyday experiences.
          </p>
        </div>
      </div>
    </>
  );
}
