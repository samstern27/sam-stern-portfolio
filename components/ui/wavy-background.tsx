"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSafari, setIsSafari] = useState(false);

  const noise = createNoise3D();
  let animationId: number;

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (ctx.canvas.width = window.innerWidth);
    let h = (ctx.canvas.height = window.innerHeight);
    ctx.filter = `blur(${blur}px)`;

    let nt = 0;

    const waveColors = colors ?? [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ];

    const drawWave = (n: number) => {
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      // Draw background
      ctx.globalAlpha = 1;
      ctx.fillStyle = backgroundFill || "black";
      ctx.fillRect(0, 0, w, h);

      // Draw waves
      ctx.globalAlpha = waveOpacity;
      drawWave(5);

      animationId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    });

    render();
  };

  useEffect(() => {
    init();
    return () => cancelAnimationFrame(animationId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn("relative w-full min-h-screen", containerClassName)}
      {...props}
    >
      {/* Fixed background canvas */}
      <canvas
        className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
        ref={canvasRef}
        style={{ ...(isSafari ? { filter: `blur(${blur}px)` } : {}) }}
      />
      {/* Scrollable content */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

{
  /* <WavyBackground
            waveWidth={5}
            waveOpacity={0.1}
            blur={0}
            colors={["#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8"]}
            containerClassName="z-10  opacity-0 fade-in"
          /> */
}
