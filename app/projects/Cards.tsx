"use client";

import type { JSX } from "react";
import type { CardData } from "@/types";
import { cardData } from "@/lib/cardData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Cards(): JSX.Element {
  const [loaded, setLoaded] = useState(false);
  const handleCardClick = (url: string | null) => {
    if (url) window.open(url, "_blank");
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800); // match animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 md:mb-15 bg-cyan-950 rounded-t-4xl sm:rounded-4xl shadow-xl w-full sm:w-[80%] max-w-8xl mx-auto lg:p-10 place-items-center opacity-0 fade-in">
      {cardData.map((card) => (
        <div
          key={card.id}
          onClick={() =>
            handleCardClick(card.id !== 3 ? card.vercel : card.github)
          }
          popoverTarget="_blank"
          className={`${card.className} ${
            loaded ? "has-loaded" : "swipe-in-left"
          }`}
        >
          <Image
            src={card.imageSrc}
            width={card.width}
            height={card.height}
            alt={card.alt}
            className="rounded-t-3xl"
          />
          <div className="flex flex-col justify-start items-center h-full p-6 gap-2">
            <h2 className="text-3xl leading-snug font-semibold text-cyan-900">
              {card.name}
            </h2>
            <p className="text-sm text-justify mb-5 leading-relaxed max-w-100 md:max-w-90 text-slate-800">
              {card.description}
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
        absolute right-15 translate-y-1/2 
        text-cyan-950 text-sm
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
        absolute  left-15 translate-y-1/2 
        text-cyan-950 text-sm  
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
      ))}
    </div>
  );
}

{
  /* <div className="flex flex-col justify-evenly  w-100 h-60 rounded-2xl bg-white/50 shadow-lg shadow-neutral-500/50"></div> */
}
