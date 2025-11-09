"use client";

import { CardData } from "@/types";
import Image from "next/image";

export default function ProjectCard({
  id,
  name,
  github,
  vercel,
  brief,
  imageSrc,
  width,
  height,
  alt,
}: CardData) {
  const handleCardClick = (url: string | null) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="project-card">
      {/* Medium/Large Screen */}
      <div
        className="hidden md:flex glowing-border w-full h-70 flex-row  md:hover:scale-103 duration-500 cursor-pointer"
        onClick={() => handleCardClick(id !== 3 ? vercel : github)}
        popoverTarget="_blank"
      >
        <div
          className="flex flex-row justify-evenly w-full ml-5 pr-7 items-center
         gap-5 rounded-t-xl"
        >
          <Image
            src={imageSrc}
            width={width}
            height={height}
            alt={alt}
            className="w-60 h-60 object-cover rounded-l-lg [mask-image:linear-gradient(to_right,black_0%,transparent_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat]"
          />
          <div className="flex w-full flex-row justify-between items-center">
            <div className="flex flex-col justify-center items-left h-auto pr-15 w-full gap-3">
              <h2 className="text-3xl md:text-3xl w-40 font-semibold tracking-tight text-left text-white">
                {name}
              </h2>
              <p className="text-sm/7 text-left max-w-60 text-gray-400 ">
                {brief}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-5 items-center my-5">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative flex group"
                title="Github"
              >
                <span
                  className="
                  absolute right-13 bottom-5 translate-y-1/2 
                  text-neutral-500 text-xs
                  md:opacity-0 md:group-hover:opacity-100  md:hover:hidden md:transition-opacity md:duration-300
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
              {id !== 3 ? (
                <a
                  href={vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="relative flex group"
                  title="Vercel"
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
                  absolute  right-13 bottom-5 translate-y-1/2 
                  text-neutral-500 text-xs  
                  md:opacity-0 md:group-hover:opacity-100  md:hover:hidden md:transition-opacity md:duration-300
                "
                  >
                    Vercel
                  </span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className="hidden sm:flex md:hidden glowing-border w-120 h-140 flex-row  md:hover:scale-103 duration-500">
        <div
          className="flex flex-col justify-start w-full mt-4 items-center
         gap-5 rounded-t-xl"
        >
          <Image
            src={imageSrc}
            width={width}
            height={height}
            alt={alt}
            className="w-110 object-cover rounded-t-lg [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat]"
          />
          <div className="flex w-full flex-row justify-between items-center">
            <div className="flex flex-col justify-center items-center h-auto w-full gap-3 ">
              <h2 className="text-3xl md:text-3xl w-40 font-semibold tracking-tight text-center text-white">
                {name}
              </h2>
              <p className="text-sm/7 text-center max-w-90 text-gray-400 ">
                {brief}
              </p>
            </div>
          </div>
          <div className="flex flex-crow justify-center gap-5 items-center my-5">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative flex group"
              title="Github"
            >
              <span
                className="
                  absolute right-12 bottom-5 translate-y-1/2 
                  text-neutral-500 text-xs
                  md:opacity-0 md:group-hover:opacity-100  md:hover:hidden md:transition-opacity md:duration-300
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
            {id !== 3 ? (
              <a
                href={vercel}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative flex group"
                title="Vercel"
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
                  absolute  left-12 bottom-5 translate-y-1/2 
                  text-neutral-500 text-xs  
                  md:opacity-0 md:group-hover:opacity-100  md:hover:hidden md:transition-opacity md:duration-300
                "
                >
                  Vercel
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
      {/* Mobile Screen */}
      <div className="sm:hidden flex glowing-border w-90 h-130 flex-row px-3.5 pt-4 md:hover:scale-103 duration-500">
        <div
          className="flex flex-col justify-start w-full items-center
         gap-5"
        >
          <Image
            src={imageSrc}
            width={width}
            height={height}
            alt={alt}
            className="max-w-80 w-auto rounded-t-lg [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat]"
          />
          <div className="flex w-full flex-row justify-between items-center">
            <div className="flex flex-col justify-center items-center h-auto w-full gap-3 ">
              <h2 className="text-3xl md:text-3xl w-40 font-semibold tracking-tight text-center text-white">
                {name}
              </h2>
              <p className="text-sm/7 text-center max-w-60 text-gray-400 ">
                {brief}
              </p>
            </div>
          </div>
          <div className="flex flex-crow justify-center gap-5 items-center my-5">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative flex group"
              title="Github"
            >
              <span
                className="
                  absolute right-12 bottom-5 translate-y-1/2 
                  text-neutral-500 text-xs
                  md:opacity-0 md:group-hover:opacity-100  md:hover:hidden md:transition-opacity md:duration-300
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
            {id !== 3 ? (
              <a
                href={vercel}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative flex group"
                title="Vercel"
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
                  absolute  left-12 bottom-5 translate-y-1/2 
                  text-neutral-500 text-xs  
                  md:opacity-0 md:group-hover:opacity-100  md:hover:hidden md:transition-opacity md:duration-300
                "
                >
                  Vercel
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
