import type { JSX } from "react";
import { techStackLogos } from "@/lib/techStackLogos";
import { TechStackLogo } from "@/types";
import Image from "next/image";

export default function TechStack(): JSX.Element {
  return (
    <div className="w-250 overflow-hidden flex fade-wrapper bg-transparent mb-20">
      <ul className="flex gap-10 bg-transparent infinite-scroll">
        {[...techStackLogos, ...techStackLogos].map(
          (logo: TechStackLogo, index) => (
            <li className="min-w-18" key={`${logo.id}-${index}`}>
              <Image
                className={`${logo.className}`}
                src={logo.src}
                width={56}
                height={56}
                alt={logo.alt}
                title={logo.name}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}
