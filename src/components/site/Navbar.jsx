import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SITE } from "../../lib/site";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#lab", label: "The Lab" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-offwhite/85 backdrop-blur border-b border-navy-100"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-center gap-2.5 group"
        >
          <span className="grid place-items-center size-9 rounded-md bg-navy-900 text-offwhite font-mono text-sm group-hover:bg-indigo-600 transition-colors">
            {"{K}"}
          </span>
          <div className="leading-tight">
            <div className="font-display font-bold text-navy-900 text-[17px]">
              Kaviv Software Labs
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-navy-500 font-mono">
              software · sdlc · sustained
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-navy-700 hover:text-indigo-600 transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-indigo-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE.internFormUrl}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-cta-intern"
            className="text-sm font-medium text-navy-700 hover:text-indigo-600 transition-colors"
          >
            Join the Lab
          </a>
          <a
            href={SITE.clientFormUrl}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-cta-client"
            className="shine inline-flex items-center gap-2 rounded-full bg-navy-900 hover:bg-indigo-600 transition-colors text-offwhite text-sm font-medium px-5 py-2.5"
          >
            Get a Solution
            <span className="text-indigo-300 group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          data-testid="nav-menu-toggle"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden size-10 grid place-items-center rounded-md border border-navy-200 text-navy-900"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-navy-100 bg-offwhite" data-testid="nav-mobile-menu">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-navy-800 font-medium"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href={SITE.internFormUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center rounded-full border border-navy-200 px-4 py-2.5 text-sm font-medium"
              >
                Join the Lab
              </a>
              <a
                href={SITE.clientFormUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center rounded-full bg-navy-900 text-offwhite px-4 py-2.5 text-sm font-medium"
              >
                Get a Solution
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}