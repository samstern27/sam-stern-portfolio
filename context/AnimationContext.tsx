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

    // Remove y animation on mobile to prevent background animation restart
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      gsap.fromTo(
        targets,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 },
      );
    } else {
      gsap.fromTo(
        targets,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1 },
      );
    }
  };

  useEffect(() => {
    fadeInPage();
  }, [pathname]);

  const animateLayout = (): Promise<void> => {
    return new Promise((resolve) => {
      if (!containerRef.current) return resolve();

      const targets =
        containerRef.current.querySelectorAll<HTMLElement>(".page-swipe");

      const tl = gsap.timeline({ onComplete: resolve });

      tl.to(targets, {
        y: 20,
        opacity: 0,
        duration: 0.5,
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
