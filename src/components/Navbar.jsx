import { useState, useEffect } from "react";
import { useTheme } from "../App";
import { Sun, Moon } from "lucide-react";
import logoDark from "../assets/fede2026_horizontal_dark-bg.svg";
import logoLight from "../assets/fede2026_horizontal_light-bg.svg";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) setActive(s.id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] h-16 flex items-center justify-between px-5 md:px-12 border-b transition-all duration-300 animate-[fadeDown_0.6s_ease_both] ${
        scrolled
          ? "bg-[var(--nav-bg)] backdrop-blur-md border-[var(--border)]"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#hero" className="no-underline">
        <img
          src={theme === "dark" ? logoDark : logoLight}
          alt="Federico Lombardi"
          className="h-8 w-auto block"
        />
      </a>

      {/* Links — hidden on mobile, shown md+ */}
      <div className="hidden md:flex gap-10">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`font-mono text-[0.65rem] tracking-[0.12em] uppercase no-underline transition-colors duration-150 hover:text-[var(--text)] ${
              active === href.slice(1)
                ? "text-[var(--text)]"
                : "text-[var(--muted)]"
            }`}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className="font-mono text-[0.62rem] font-medium tracking-[0.1em] uppercase py-[0.4rem] px-4 rounded-[4px] bg-orange hover:bg-orange2 text-bg no-underline flex items-center gap-[0.4rem] transition-colors duration-150"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-bg animate-[pulse_2s_infinite] inline-block" />
          Available →
        </a>

        <button
          onClick={toggleTheme}
          title="Toggle theme"
          className="w-8 h-8 rounded-[6px] border border-[var(--border2)] hover:border-[var(--orange)] bg-transparent text-[var(--muted)] hover:text-[var(--orange)] cursor-pointer flex items-center justify-center text-[0.85rem] transition-all duration-150"
        >
          {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </div>
    </nav>
  );
}
