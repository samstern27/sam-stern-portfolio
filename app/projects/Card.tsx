import type { JSX } from "react";

export default function Card(): JSX.Element {
  return (
    <div className="flex flex-col justify-evenly  w-100 h-60 rounded-2xl bg-white/50 shadow-lg shadow-neutral-500/50">
      <h2>Card goes here</h2>
    </div>
  );
}
