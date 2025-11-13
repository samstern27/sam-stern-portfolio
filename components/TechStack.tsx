import { techStackLogos } from "@/lib/techStackLogos";
import { useMemo } from "react";
import Image from "next/image";

/**
 * TechStack Component
 * Displays a horizontal scrolling list of technology logos.
 * Logos are duplicated to create a seamless infinite scroll effect.
 * Uses Next.js Image for optimized rendering.
 */

export default function TechStack() {
  // Duplicate logos array for infinite scroll
  const logos = useMemo(() => [...techStackLogos, ...techStackLogos], []);
  return (
    <div className="w-200 overflow-hidden flex fade-wrapper bg-transparent mb-20">
      <ul
        className="flex gap-10 bg-transparent infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li className="min-w-18" key={`${logo.id}-${index}`}>
            <Image
              className={`${logo.className} object-contain`}
              src={logo.src}
              width={56}
              height={56}
              alt={logo.alt}
              title={logo.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
