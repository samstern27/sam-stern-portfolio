// Footer component: fixed at the bottom, shows current year and developer credit
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="fixed bottom-0 left-0 w-full py-3 px-4 bg-neutral-900 md:bg-transparent text-neutral-400 text-center md:text-left text-sm z-50"
      role="contentinfo"
    >
      © {currentYear} Sam Stern
    </footer>
  );
}
