"use client";

import Link from "next/link";
import { NavLinkProps } from "@/types/index";
import { useAnimation } from "@/context/AnimationContext";
import { useRouter } from "next/navigation";
import clsx from "clsx";

/**
 * NavLink — a single navigational link for the site’s navbar.
 * Handles animated page transitions and active link styling.
 */

export default function NavLink({
  children,
  href,
  name,
  isActive,
  aria,
  pathname,
  onClick,
}: NavLinkProps & { onClick?: () => void }) {
  const router = useRouter();
  const { animateLayout } = useAnimation();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    /* Prevent Next.js <Link> from instantly navigating
     * so the custom page transition animation can finish first.
     */
    e.preventDefault();
    if (onClick) onClick();
    try {
      /* Run a layout animation based on the current route and link name.
       * Example: if pathname is "/about" and name is "contact",
       * this generates a unique animation key like "about-contact".
       */
      await animateLayout(`${pathname?.slice(1)}-${name}`);
    } catch (err) {
      console.error("Animation error:", err);
    } finally {
      // After animation completes (or fails), proceed with navigation.
      router.push(href);
    }
  };
  return (
    <Link
      href={href}
      aria-label={aria}
      onClick={handleClick}
      className={clsx(
        "relative inline-block text-md font-sans tracking-widest font-thin pb-[2px] md:pb-0 after:content-[''] after:absolute after:left-0 after:bottom-0 md:after:bottom-[-1.1em] after:h-[1px] after:w-full after:origin-left md:after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 focus:text-cyan-700",
        {
          "text-cyan-500 after:bg-cyan-500": isActive,
          "after:scale-x-100": isActive, // animate underline when active
          "text-cyan-50 after:scale-x-0 after:bg-cyan-50": !isActive,
        }
      )}
    >
      {children}
    </Link>
  );
}
