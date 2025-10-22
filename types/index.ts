import type { ReactNode } from "react";

export type NavLinkProps = {
  children: ReactNode;
  href: string;
  isActive: boolean;
  aria: string;
};

export type Link = {
  href: string;
  label: string;
  id: number;
  aria: string;
};

export type TechStackLogo = {
  id: number;
  name: string;
  className: string;
  src: string;
  alt: string;
};
