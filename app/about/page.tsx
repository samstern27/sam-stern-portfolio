export default function AboutPage() {
  return (
    <>
      <div className="isolate px-6 py-24 sm:py-50 lg:px-8 page-swipe">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-2xl text-center gap-5 flex flex-col">
          <header>
            <h1 className="text-5xl mt-9 sm:mt-0 font-semibold tracking-tight text-balance text-white sm:text-5xl fade-in-down">
              About
            </h1>
          </header>
          <section className="flex flex-col gap-5">
            <p className="mt-2 text-md text-neutral-300 center-justified fade-in-down">
              I’m Sam, a front-end developer who enjoys creating practical
              solutions for real-world challenges. My background in hospitality
              taught me how much smoother things can run with the right tools,
              inspiring me to design and build products that bridge gaps,
              simplify work, and make life easier for people. One of those
              projects is Barbid — a platform that connects venues with flexible
              staff, helping people find shifts that fit their own schedules,
              preferences, and rates.{" "}
            </p>
            <p className="mt-2 text-md text-neutral-300 center-justified fade-in-down">
              I work with modern frameworks and tools such as React, Next.js,
              Tailwind, TypeScript, Firebase, SQL, Vite, Figma, Netlify, and
              Vercel to turn ideas into reality. My focus is on building
              applications that are both functional and intuitive, blending
              clean design with interactivity to solve real problems. For me,
              development means turning challenges into practical solutions
              through curiosity, experimentation, and continuous refinement.
            </p>
            <p className="mt-2 text-md text-neutral-300 center-justified fade-in-down">
              Outside of development, I’m always exploring new projects and
              thinking about ways technology can improve everyday experiences.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
