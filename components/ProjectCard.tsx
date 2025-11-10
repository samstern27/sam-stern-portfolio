"use client";

import { CardData } from "@/types";
import Image from "next/image";

export default function ProjectCardB({
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
      <div
        className="flex md:flex-row glowing-border w-90 sm:w-120 md:w-full h-130 sm:h-140 md:h-70 flex-col px-3.5 sm:px-0 pt-4 sm:pt-0 md:hover:scale-103 duration-500"
        onClick={() => handleCardClick(id === 3 ? github : vercel)}
        popoverTarget="_blank"
      >
        <div
          className="flex flex-col md:flex-row justify-start md:justify-evenly w-full sm:mt-4 md:mt-0 md:ml-5 md:pr-7 items-center
                 gap-5 sm:rounded-t-xl"
        >
          <Image
            src={imageSrc}
            width={width}
            height={height}
            alt={alt}
            className="max-w-80 sm:max-w-none w-auto sm:w-110 md:w-60 md:h-60 sm:object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)] md:[mask-image:linear-gradient(to_right,black_0%,transparent_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat]"
          />
          <div className="flex w-full flex-row justify-between items-center">
            <div className="flex flex-col justify-center items-center md:items-start h-auto w-full gap-3 md:pr-15">
              <h2 className="text-3xl w-40 font-semibold tracking-tight text-center md:text-left text-white">
                {name}
              </h2>
              <p className="text-sm/7 text-center md:text-left max-w-60 sm:max-w-90 text-gray-400">
                {brief}
              </p>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-center gap-5 items-center my-5">
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
                          absolute right-12 md:right-13 bottom-5 translate-y-1/2 
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
                          absolute left-12 md:left-auto md:right-13 bottom-5 translate-y-1/2 
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
