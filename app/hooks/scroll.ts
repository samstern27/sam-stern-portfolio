"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      // extreme scroll: jump immediately to the top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      
      // backup: forcefully set scrollTop
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}