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

export type CardData = {
  id: number;
  name: string;
  github: string;
  vercel: string;
  description: string;
  brief: string;
  imageSrc: string;
  width: number;
  height: number;
  alt: string;
  className: string;
};
