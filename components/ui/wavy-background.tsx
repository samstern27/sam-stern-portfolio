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
      ctx.fillStyle = backgroundFill || "black";
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
      ctx.fillStyle = backgroundFill || "black";
      ctx.fillRect(0, 0, w, h);
    });

    render();
  };

  useEffect(() => {
    init();
    return () => cancelAnimationFrame(animationId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ok to leave deps empty because animationId & init are stable inside useEffect

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-black",
        containerClassName
      )}
      {...props}
    >
      <canvas
        className="absolute inset-0 z-0 h-full w-full"
        ref={canvasRef}
        id="canvas"
        style={{ ...(isSafari ? { filter: `blur(${blur}px)` } : {}) }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
