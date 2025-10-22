"use client";

import NavLink from "@/components/NavLink";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import type { Link } from "@/types/index";
import type { JSX } from "react";

const links: Link[] = [
  { href: "/", label: "home", id: 1, aria: "Home" },
  { href: "/projects", label: "projects", id: 2, aria: "Projects" },
  { href: "/about", label: "about", id: 3, aria: "About" },
  { href: "/contact", label: "contact", id: 4, aria: "Contact" },
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
      className="sticky top-0 w-full z-[9999] px-5 py-3 fade-in-left"
      aria-label="Main navigation"
    >
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-end items-center max-w-6xl ml-auto">
        <ul className="flex justify-end gap-10 w-full">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                href={link.href}
                isActive={mounted ? pathname === link.href : false}
                aria={link.aria}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden justify-end items-center max-w-6xl mx-auto bg-black">
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
        className={`lg:hidden fixed top-[64px] left-0 w-full bg-black/95 transition-max-height duration-600 overflow-hidden ${
          isMobileOpen ? "max-h-[calc(100vh-64px)]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-4 gap-4">
          {links.map((link) => (
            <li key={link.id} onClick={() => setIsMobileOpen(false)}>
              <NavLink
                href={link.href}
                isActive={mounted ? pathname === link.href : false}
                aria={link.aria}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
