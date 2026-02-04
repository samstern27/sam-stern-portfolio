"use client";

import { CardData } from "@/types";
import Image from "next/image";

export default function ProjectCard({
  name,
  github,
  vercel,
  primaryUrl,
  brief,
  className,
}: CardData) {
  const isPortfolio = primaryUrl === github;
  const isKcm = primaryUrl === "https://kitchen-cost-management.vercel.app/";

  return (
    <article
      className={`${className} project-card flex md:flex-row w-90 sm:w-120 md:w-full lg:w-auto max-w-200 min-h-80 md:min-h-40 flex-col px-3.5 sm:px-0 pt-4 sm:pt-0 opacity-0`}
    >
      <div
        className="flex flex-col md:flex-row justify-center md:justify-between w-full sm:mt-4 md:mt-0 md:ml-5 md:pr-7 items-center md:items-start
                 gap-5 sm:rounded-t-xl"
      >
        {/* Project title & brief */}
        <div className="flex w-full flex-row justify-between items-start mt-5 md:mt-10">
          <div className="flex flex-col justify-start items-center md:items-start h-auto w-full gap-3 md:pr-15">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <h2 className="text-3xl font-semibold tracking-tight text-center md:text-left text-white">
                {name}{" "}
              </h2>
              {isKcm && (
                <span className="text-sm font-bold text-purple-300">
                  {" "}
                  (beta)
                </span>
              )}
            </div>

            <p className="text-sm/7 text-center md:text-left max-w-60 sm:max-w-100 text-gray-400">
              {brief}
            </p>
            {isKcm && (
              <p className="text-xs italic text-center md:text-left max-w-60 sm:max-w-100 text-purple-300">
                Testing the app? Use Stripe card 4242 4242 4242 4242 (any future
                expiry, any CVC) to unlock AI features.{" "}
                <span className="italic font-bold text-neutral-50">
                  Note: marketing page is yet to be implemented.
                </span>
              </p>
            )}
          </div>
        </div>
        {/* Github & Vercel links */}
        <div className="flex flex-row md:flex-col justify-center gap-5 items-center my-5 md:my-0 md:mr-10 md:self-center">
          {isKcm ? null : (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative flex group"
              title="Github"
              aria-label={`View ${name} on GitHub, opens in a new tab`}
            >
              <span
                className="
                          absolute right-12 md:right-13 bottom-5 translate-y-1/2 
                          text-neutral-200 text-xs
                          md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300
                        "
              >
                GitHub
              </span>
              <Image
                src="/gh.svg"
                width={64}
                height={64}
                alt="Github logo"
                className="w-10 flex-shrink-0 transform transition-transform duration-300 hover:scale-110"
              />
            </a>
          )}
          {!isPortfolio && (
            <a
              href={vercel}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative flex group"
              title="Vercel"
              aria-label={`View ${name} on Vercel, opens in a new tab`}
            >
              <Image
                src="/vercel.svg"
                width={683}
                height={683}
                alt="Vercel logo"
                className="w-10 flex-shrink-0 transform transition-transform duration-300 hover:scale-110"
              />
              <span
                className="
                          absolute left-12 md:left-auto md:right-13 bottom-5 translate-y-1/2 
                          text-neutral-200 text-xs  
                          md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300
                        "
              >
                Vercel
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
