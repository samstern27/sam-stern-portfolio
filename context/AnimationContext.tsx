"use client";

import { createContext, useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import type { AnimationContextType } from "@/types";

const AnimationContext = createContext<AnimationContextType>({
  animateLayout: () => Promise.resolve(),
});

export function useAnimation() {
  return useContext(AnimationContext);
}

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const fadeInVideo = () => {
    gsap.to(".background-video", {
      opacity: 0.2,
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    fadeInVideo();
  }, [pathname]);

  const animateLayout = (pageToPage: string): Promise<void> => {
    return new Promise((resolve) => {
      if (!containerRef.current) return resolve();

      const targets = containerRef.current.querySelectorAll(".page-swipe");
      let yValue = 0;

      switch (pageToPage) {
        case "-projects":
        case "-about":
        case "-contact":
        case "projects-about":
        case "projects-contact":
        case "projects-home":
        case "contact-about":
        case "contact-projects":
        case "contact-home":
          yValue = 100;
          break;
        case "about-home":
        case "about-projects":
        case "about-contact":
          yValue = -100;
          break;
        default:
          return resolve();
      }

      const tl = gsap.timeline({ onComplete: resolve });

      tl.to(targets, {
        y: yValue,
        opacity: 0,
        duration: 1,
        ease: "power2.in",
      }).to(
        ".background-video",
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );
    });
  };

  return (
    <AnimationContext.Provider value={{ animateLayout }}>
      <div ref={containerRef}>{children}</div>
    </AnimationContext.Provider>
  );
}
