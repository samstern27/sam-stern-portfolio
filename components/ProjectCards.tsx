"use client";

import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { cardData } from "@/lib/cardData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ProjectCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(".project-card", {
      opacity: 0,
      x: -100,
      delay: 1,
      stagger: 0.5,
      duration: 1,
    });
  }, [{ scope: containerRef }]);
  return (
    <div
      className="flex flex-col justify-center gap-10 items-center my-8 mx-auto w-full"
      ref={containerRef}
    >
      {cardData.map((card) => (
        <ProjectCard
          key={card.id}
          id={card.id}
          name={card.name}
          github={card.github}
          vercel={card.vercel}
          brief={card.brief}
          imageSrc={card.imageSrc}
          width={card.width}
          height={card.height}
          alt={card.alt}
        />
      ))}
    </div>
  );
}
