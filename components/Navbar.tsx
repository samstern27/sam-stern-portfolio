"use client";

import SocialLinks from "@/components/SocialLinks";
import { links } from "@/lib/navLinkData";
import Link from "next/link";

import NavLink from "@/components/NavLink";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Navbar component:
 * A responsive navigation bar with:
 * - Desktop links (highlight active)
 * - Mobile hamburger menu
 * - Mobile menu with links and social icons
 */

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        isMobileOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileOpen]);

  // Render navigation links; closes mobile menu on click if callback provided
  function NavLinks({ onClick }: { onClick?: () => void }) {
    return links.map((link) => (
      <li key={link.id}>
        <NavLink
          href={link.href}
          name={link.label}
          isActive={pathname === link.href}
          aria={link.aria}
          pathname={pathname}
          onClick={onClick}
        >
          {link.label}
        </NavLink>
      </li>
    ));
  }

  return (
    <nav
      className="fixed top-0 w-full z-[9999] px-0 py-0 md:px-4 md:py-4 bg-neutral-900 border-b-1 border-b-neutral-700 box-border fade-in-down"
      aria-label="Main navigation"
      ref={navRef}
    >
      <Link
        href="/"
        aria-label="Sam Stern logotype, also link to home page"
        className="absolute top-5.5 left-7 md:top-3.5 text-neutral-300 text-center font-sans text-xl font-light tracking-tighter leading-tight "
      >
        sam stern
      </Link>

      <div className="flex">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-end items-center max-w-6xl ml-auto bg-neutral-900 ">
          <ul className="flex justify-end gap-10 w-full">
            <NavLinks />
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden z-[9999] justify-end items-center max-w-6xl mx-auto p-3 bg-neutral-900">
        <button
          className="group h-12 w-12 flex flex-col justify-center items-center gap-1.5 p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          {/* Hamburger */}
          <span
            className={`h-1 w-8 rounded-full bg-cyan-50 transition-all duration-300 ${
              isMobileOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-8 rounded-full bg-cyan-50 transition-all duration-300 ${
              isMobileOpen ? "scale-x-0" : ""
            }`}
          />
          <span
            className={`h-1 w-8 rounded-full bg-cyan-50 transition-all duration-300 ${
              isMobileOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-0 w-full bg-neutral-800 transition-max-height duration-600 overflow-hidden  box-border ${
          isMobileOpen ? "max-h-[calc(100vh-64px)]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-4">
          <NavLinks onClick={() => setIsMobileOpen(false)} />
        </ul>
        <div className="flex flex-row md:hidden justify-start p-5 z-50">
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
}
