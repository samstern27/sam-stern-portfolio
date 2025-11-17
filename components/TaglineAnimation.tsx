"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function TaglineAnimation() {
  const taglineRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      // animate tagline width
      gsap.fromTo(
        taglineRef.current,
        { width: "0%" },
        { width: "100%", duration: 2, delay: 0.5, ease: "power3.inOut" }
      );

      // cursor flash
      const flash = gsap.to(cursorRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
        repeat: -1,
        yoyo: true,
      });

      // move cursor
      gsap.to(cursorRef.current, {
        x: 316,
        duration: 2,
        delay: 0.49,
        ease: "power3.inOut",
      });

      // final cursor transform
      gsap.to(cursorRef.current, {
        scaleY: 0.1,
        scaleX: 0.5,
        y: 6,
        duration: 0.5,
        delay: 2,
        ease: "power3.inOut",
      });

      // stop flashing after 5 seconds
      setTimeout(() => {
        flash.kill();
        gsap.set(cursorRef.current, { opacity: 1 });
      }, 2600);
    },
    { scope: taglineRef }
  );
  return (
    <div className="relative flex overflow-hidden max-w-81  mx-auto">
      <div className="flex overflow-hidden max-w-81" ref={taglineRef}>
        <div
          className="absolute flex w-1 h-5.5 top-3 bg-white opacity-0"
          ref={cursorRef}
        ></div>
        <p className="mt-2 text-md leading-8 gradient-text text-nowrap">
          Developing solutions that make an impact
        </p>
      </div>
    </div>
  );
}
