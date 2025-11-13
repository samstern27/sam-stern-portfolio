import type { ReactNode } from "react";

export type NavLinkProps = {
  children: ReactNode;
  href: string;
  name: string;
  isActive?: boolean;
  aria?: string;
  pathname?: string;
  onClick?: () => void;
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
  name: string;
  github: string;
  vercel: string;
  primaryUrl: string;
  brief: string;
  imageSrc: string;
  width: number;
  height: number;
  alt: string;
  className: string;
};

export type SocialLinkData = {
  id: number;
  name: string;
  href: string;
  src: string;
  alt: string;
  title: string;
  nextWidth: number;
  nextHeight: number;
}

export type AnimationContextType = {
  animateLayout: (action: string) => void;
};

export type DotsProps = {
  rows?: number;
  cols?: number;
  size?: string;
  shape?: string;
  opacityFrom?: number;
  opacityTo?: number;
  duration?: number;
  scaleFrom?: number;
  scaleTo?: number;
  stagger?: number;
  xFrom?: number;
  xTo?: number;
  yFrom?: number;
  yTo?: number;
  repeat?: number;
  yoyo?: boolean;
  delay?: number;
  rotateFrom?: number;
  rotateTo?: number;
}
