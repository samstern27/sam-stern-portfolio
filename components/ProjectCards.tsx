"use client";

import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { cardData } from "@/lib/cardData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ProjectCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          delay: 0.5,
          stagger: 0.5,
          duration: 1,
          ease: "power2.out",
        }
      );
    },
    { scope: containerRef }
  );
  return (
    <div
      className="flex flex-col justify-center gap-10 items-center my-8 mx-auto w-full px-15"
      ref={containerRef}
    >
      {cardData.map((card) => (
        <ProjectCard key={card.name} {...card} />
      ))}
    </div>
  );
}
