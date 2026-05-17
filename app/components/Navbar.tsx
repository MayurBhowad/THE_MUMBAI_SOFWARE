"use client";
import { useState, useEffect } from "react";

const links = ["Services", "Work", "About", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        background: scrolled ? "rgba(250,249,247,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between"
    >
      <a href="#" className="font-display text-xl" style={{ color: "var(--ink)" }}>
        THE MUMBAI SOFTWARE'S<span style={{ color: "var(--accent)" }}>.</span>
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-sm font-medium tracking-wide transition-colors duration-200"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {l}
          </a>
        ))}
        <a
          href="#contact"
          className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
          style={{ background: "var(--ink)", color: "var(--paper)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink)")}
        >
          Get in touch
        </a>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden flex flex-col gap-1.5" onClick={() => setOpen(!open)}>
        <span style={{ width: 24, height: 2, background: "var(--ink)", display: "block", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
        <span style={{ width: 24, height: 2, background: "var(--ink)", display: "block", opacity: open ? 0 : 1 }} />
        <span style={{ width: 24, height: 2, background: "var(--ink)", display: "block", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 p-6 flex flex-col gap-4" style={{ background: "var(--paper)", borderBottom: "1px solid var(--border)" }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-lg font-medium" style={{ color: "var(--ink)" }} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
