import { techStackLogos } from "@/lib/techStackLogos";
import { TechStackLogo } from "@/types";
import type { JSX } from "react";
import Image from "next/image";

export default function TechStackLogos(): JSX.Element {
  return (
    <div className="max-w-150 grid grid-cols-7 gap-y-2 md:gap-y-0 md:gap-2 lg:gap-4 mx-auto md:mx-0 px-3 ">
      {techStackLogos.map((logo: TechStackLogo) => (
        <Image
          className={logo.className}
          src={logo.src}
          width={56}
          height={56}
          alt={logo.alt}
          key={logo.id}
        />
      ))}
    </div>
  );
}
