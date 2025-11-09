"use client";

// Full-screen decorative background video, autoplaying, muted, and looping.
export default function BackgroundVideo() {
  return (
    <video
      className="absolute min-h-screen top-20 sm:top-0 left-0 w-full h-full pointer-events-none object-cover -z-10 opacity-0 background-video"
      autoPlay
      preload="auto"
      muted
      loop
      playsInline
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/videos/grain-smoke.mp4" type="video/mp4" />
    </video>
  );
}
