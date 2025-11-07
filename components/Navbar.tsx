"use client";

import SocialLinks from "@/components/SocialLinks";

import NavLink from "@/components/NavLink";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import type { Link } from "@/types/index";
import type { JSX } from "react";

const links: Link[] = [
  {
    href: "/",
    label: "home",
    id: 1,
    aria: "Home",
  },
  {
    href: "/projects",
    label: "projects",
    id: 2,
    aria: "Projects",
  },
  {
    href: "/about",
    label: "about",
    id: 3,
    aria: "About",
  },
  {
    href: "/contact",
    label: "contact",
    id: 4,
    aria: "Contact",
  },
] as const;

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className="sticky  top-0 w-full z-[9999] px-0 py-0 md:px-4 md:py-4 bg-neutral-900 border-b-1 border-b-neutral-700 box-border"
      aria-label="Main navigation"
    >
      <h3 className="absolute top-6 left-5 md:top-4 text-neutral-300 text-center font-sans text-xl font-light tracking-tighter leading-tight swipe-in-left">
        sam stern
      </h3>
      <div className="flex">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-end items-center max-w-6xl ml-auto bg-neutral-900 ">
          <ul className="flex justify-end gap-10 w-full">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  href={link.href}
                  name={link.label}
                  isActive={mounted ? pathname === link.href : false}
                  aria={link.aria}
                  pathname={pathname}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
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
          {links.map((link) => (
            <li key={link.id} onClick={() => setIsMobileOpen(false)}>
              <NavLink
                href={link.href}
                name={link.label}
                isActive={mounted ? pathname === link.href : false}
                aria={link.aria}
                pathname={pathname}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex flex-row md:hidden justify-start p-5 z-50">
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
}
