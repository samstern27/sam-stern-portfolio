import Link from "next/link";
import { NavLinkProps } from "@/types/index";

export default function NavLink({ children, href, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${
        isActive ? "text-cyan-300" : "text-cyan-50"
      } relative inline-block text-xl font-sans tracking-widest font-thin
             after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[3px] 
             after:w-full  after:origin-left md:after:origin-center ${
               isActive ? "after:scale-x-100" : "after:scale-x-0"
             } ${isActive ? "after:bg-cyan-400" : "after:bg-cyan-50"}
             after:transition-transform after:duration-300 hover:after:scale-x-100`}
    >
      {children}
    </Link>
  );
}
