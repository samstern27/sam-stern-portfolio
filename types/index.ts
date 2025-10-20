import type { ReactNode } from "react";

export type NavLinkProps = {
  children: ReactNode;
  href: string;
  isActive: boolean;
};

export type Link = {
  href: string;
  label: string;
  id: number;
};
