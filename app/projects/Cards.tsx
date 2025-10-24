"use client";

import type { JSX } from "react";
import type { CardData } from "@/types";
import { cardData } from "@/lib/cardData";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Cards(): JSX.Element {
  const handleCardClick = (url: string | null) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5 bg-neutral-500/30 rounded-t-4xl sm:rounded-4xl shadow-xl w-full sm:w-[90%] max-w-6xl mx-auto place-items-center">
      {cardData.map((card) => (
        <div
          key={card.id}
          onClick={() =>
            handleCardClick(card.id !== 3 ? card.vercel : card.github)
          }
          popoverTarget="_blank"
          className="cursor-pointer flex flex-col justify-between w-full h-full rounded-3xl lg:max-w-sm bg-neutral-900 text-white shadow-xl transform transition-transform duration-300 hover:scale-102"
        >
          <Image
            src={card.imageSrc}
            width={card.width}
            height={card.height}
            alt={card.alt}
            className="rounded-t-3xl"
          />
          <div className="flex flex-col justify-start items-center h-full p-6 gap-4">
            <h2 className="text-3xl leading-snug font-semibold text-cyan-100">
              {card.name}
            </h2>
            <p className="text-base text-center leading-relaxed max-w-100 md:max-w-70">
              {card.brief}
            </p>
            <div className="flex flex-row justify-center mt-auto gap-5 items-center my-5">
              <a
                href={card.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative flex group"
                title="Github"
              >
                <span
                  className="
        absolute  right-15 translate-y-1/2 
        text-white text-sm  
        opacity-0 group-hover:opacity-100  hover:hidden transition-opacity duration-300
      "
                >
                  GitHub
                </span>
                <Image
                  src="/gh.svg"
                  width={64}
                  height={64}
                  alt="Github logo"
                  className="w-10 transform transition-transform duration-300 hover:scale-130"
                />
              </a>
              {card.id !== 3 ? (
                <a
                  href={card.vercel}
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
                    className="w-10 transform transition-transform duration-300 hover:scale-130"
                  />
                  <span
                    className="
        absolute left-15 translate-y-1/5 bg-white py-1 px-3 inv-rad-l-3
        text-cyan-800 text-sm   
        opacity-0 group-hover:opacity-100  hover:hidden transition-opacity duration-300
      "
                  >
                    Vercel
                  </span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <div className="flex flex-col justify-evenly  w-100 h-60 rounded-2xl bg-white/50 shadow-lg shadow-neutral-500/50"></div> */
}
