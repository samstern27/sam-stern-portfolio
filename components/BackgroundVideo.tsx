"use client";

import type { JSX } from "react";

export default function BackgroundVideo(): JSX.Element {
  return (
    <video
      className="absolute min-h-screen top-20 sm:top-0 left-0 w-full h-full object-cover zoom-in-100 -z-10 opacity-0 background-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/videos/grain-smoke.mp4" type="video/mp4" />
    </video>
  );
}
