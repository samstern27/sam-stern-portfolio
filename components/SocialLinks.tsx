import Image from "next/image";
import { linkData } from "@/lib/linkData";
import type { JSX } from "react";

export default function SocialLinks(): JSX.Element {
  return (
    <ul className="flex flex-row md:items-center md:flex-col">
      {linkData.map((link) => (
        <li key={link.id}>
          <a href={link.href} target="_blank">
            <Image
              src={link.src}
              width={link.nextWidth}
              height={link.nextHeight}
              alt={link.alt}
              title={link.title}
              className="w-7 md:hover:scale-120 p-0.5 rounded-sm border-cyan-300 duration-300 mr-3 md:my-3 "
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
