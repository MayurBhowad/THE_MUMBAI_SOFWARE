"use client";
export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <span className="font-display text-lg" style={{ color: "var(--paper)" }}>
        TMS<span style={{ color: "var(--accent)" }}>.</span>
      </span>
      <p className="text-sm text-center" style={{ color: "#6b6b6b" }}>
        © {new Date().getFullYear()} The Mumbai Software. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Twitter", "LinkedIn", "GitHub"].map((s) => (
          <a
            key={s}
            href="#"
            className="text-sm transition-colors duration-200"
            style={{ color: "#6b6b6b" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6b6b")}
          >
            {s}
          </a>
        ))}
      </div>
    </footer>
  );
}
