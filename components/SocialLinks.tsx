import Image from "next/image";
import { socialLinkData } from "@/lib/socialLinkData";
import Dots from "./ui/dots";

/**
 * SocialLinks – renders social profile icons linking to external sites.
 * Uses <nav> with aria-label for accessibility; links open safely in new tabs.
 */

export default function SocialLinks() {
  return (
    <nav aria-label="Social links">
      <div className="absolute hidden md:block top-6 -left-5 z-[10000]">
        <Dots
          size="xsmallShortLine"
          shape="round"
          cols={1}
          rows={1}
          duration={1}
          opacityFrom={1}
          opacityTo={1}
          xFrom={-100}
          xTo={0}
          repeat={0}
          yoyo={false}
          delay={0}
          rotateFrom={90}
          rotateTo={-90}
        />
      </div>
      <div className="absolute hidden md:block top-19 -left-5 z-[10000]">
        <Dots
          size="xsmallShortLine"
          shape="round"
          cols={1}
          rows={1}
          duration={1}
          opacityFrom={1}
          opacityTo={1}
          xFrom={-100}
          xTo={0}
          repeat={0}
          yoyo={false}
          delay={0.1}
          rotateFrom={90}
          rotateTo={-90}
        />
      </div>
      <ul className="flex flex-row md:items-center  md:flex-col fade-in-left">
        {socialLinkData.map((link) => (
          <li key={link.id} className="md:my-3 mr-3">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title}
            >
              <Image
                src={link.src}
                width={link.nextWidth}
                height={link.nextHeight}
                alt={link.alt}
                className="w-7 rounded-sm border-cyan-300 duration-300 md:hover:scale-120"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
