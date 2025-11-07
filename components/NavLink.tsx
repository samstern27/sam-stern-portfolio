"use client";

import Link from "next/link";
import { NavLinkProps } from "@/types/index";
import { useAnimation } from "@/context/AnimationContext";
import { useRouter } from "next/navigation";

export default function NavLink({
  children,
  href,
  name,
  isActive,
  aria,
  pathname,
}: NavLinkProps) {
  const router = useRouter();
  const { animateLayout } = useAnimation();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await animateLayout(`${pathname.slice(1)}-${name}`);
    console.log(`${pathname.slice(1)}-${name}`);
    router.push(href);
  };
  return (
    <Link
      href={href}
      aria-label={aria}
      onClick={handleClick}
      className={`${
        isActive ? "text-cyan-500" : "text-cyan-50"
      } relative inline-block text-md font-sans tracking-widest font-thin
      pb-[2px] md:pb-0
      after:content-[''] after:absolute after:left-0 
      after:bottom-0 md:after:bottom-[-17.5px] 
      after:h-[1px] after:w-full after:origin-left md:after:origin-center
      ${
        isActive
          ? "after:scale-x-100 after:bg-cyan-500"
          : "after:scale-x-0 after:bg-cyan-50"
      }
      after:transition-transform after:duration-300 hover:after:scale-x-100`}
    >
      {children}
    </Link>
  );
}
