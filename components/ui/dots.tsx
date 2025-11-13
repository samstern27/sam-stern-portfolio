"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import type { DotsProps } from "@/types";

export default function Dots({
  rows = 3,
  cols = 3,
  size = "medium",
  shape = "round",
  opacityFrom = 1,
  opacityTo = 1,
  duration = 0.5,
  scaleFrom = 1,
  scaleTo = 1,
  stagger = 0,
  xFrom = 0,
  xTo = 0,
  yFrom = 0,
  yTo = 0,
  repeat = 0,
  yoyo = false,
}: DotsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);

  // GSAP Animation
  useGSAP(() => {
    gsap.fromTo(
      dotsRef.current,
      { opacity: opacityFrom, scale: scaleFrom, x: xFrom, y: yFrom },
      {
        opacity: opacityTo,
        scale: scaleTo,
        x: xTo,
        y: yTo,
        duration: duration,
        stagger: stagger,
        repeat: repeat,
        yoyo: yoyo,
        ease: "power2.inOut",
      }
    );
  });

  // Tailwind-safe size mapping
  const sizeClasses: Record<string, string> = {
    xsmall: "w-0.5 h-0.5",
    small: "w-1 h-1",
    medium: "w-2 h-2",
    large: "w-3 h-3",
  };

  const shapeClass = shape === "round" ? "rounded-full" : "";

  // Create grid cells
  const totalDots = rows * cols;
  const dots = Array.from({ length: totalDots }).map((_, i) => (
    <div
      key={i}
      ref={(el) => {
        if (el) dotsRef.current[i] = el;
      }}
      className={`bg-neutral-400 border border-neutral-100 ${shapeClass} ${sizeClasses[size]} mx-auto my-auto dot`}
    />
  ));

  // Inline grid setup so rows/cols are dynamic
  return (
    <div
      className="grid gap-1 place-items-center"
      ref={containerRef}
      style={{
        gridTemplateColumns: `repeat(${cols}, auto)`,
        gridTemplateRows: `repeat(${rows}, auto)`,
      }}
    >
      {dots}
    </div>
  );
}
