import Image from "next/image";
import { socialLinkData } from "@/lib/socialLinkData";

/**
 * SocialLinks – renders social profile icons linking to external sites.
 * Uses <nav> with aria-label for accessibility; links open safely in new tabs.
 */

export default function SocialLinks() {
  return (
    <nav aria-label="Social links">
      <ul className="flex flex-row md:items-center  md:flex-col">
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
