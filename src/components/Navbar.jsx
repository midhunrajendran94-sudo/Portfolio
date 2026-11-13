import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks, profile } from "../data/portfolioData";
import "../styles/navbar.css";

export default function Navbar({ open, setOpen }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia("(max-width: 860px)").matches,
  );
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const marker = 110;
      let current = "home";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;
        if (section.getBoundingClientRect().top - marker <= 0) current = link.id;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 860px)");
    const onChange = () => {
      setIsMobile(media.matches);
      if (!media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [setOpen]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="logo" href="#home" onClick={close}>
        {profile.logo}
        <span>.</span>
        <span className="sr-only">{profile.name}</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className="nav-link"
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <AnimatePresence>
        {open && isMobile ? (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active === link.id ? "true" : undefined}
                    onClick={close}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
