import type { Link } from "@/types";

export const links: Link[] = [
  {
    href: "/",
    label: "home",
    id: 1,
    aria: "Go to Home page",
  },
  {
    href: "/projects",
    label: "projects",
    id: 2,
    aria: "Go to Projects page",
  },
  {
    href: "/about",
    label: "about",
    id: 3,
    aria: "Go to About page",
  },
  {
    href: "/contact",
    label: "contact",
    id: 4,
    aria: "Go to Contact page",
  },
] as const;
