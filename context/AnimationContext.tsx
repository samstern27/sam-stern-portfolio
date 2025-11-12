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

  // Fade in new page content on route change
  const fadeInPage = () => {
    if (!containerRef.current) return;
    const targets =
      containerRef.current.querySelectorAll<HTMLElement>(".page-swipe");
    gsap.fromTo(
      targets,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1 }
    );
  };

  useEffect(() => {
    fadeInPage();
  }, [pathname]);

  const animateLayout = (pageToPage: string): Promise<void> => {
    return new Promise((resolve) => {
      if (!containerRef.current) return resolve();

      const targets =
        containerRef.current.querySelectorAll<HTMLElement>(".page-swipe");
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
      });
    });
  };

  return (
    <AnimationContext.Provider value={{ animateLayout }}>
      <div ref={containerRef}>{children}</div>
    </AnimationContext.Provider>
  );
}
