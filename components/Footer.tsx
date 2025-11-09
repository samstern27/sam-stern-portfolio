import type { JSX } from "react";

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full py-3 px-4 bg-neutral-900 md:bg-transparent text-neutral-400 text-center md:text-left text-sm z-50">
      &copy; {currentYear} Sam Stern
    </footer>
  );
}
