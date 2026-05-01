"use client";
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }}
      />

      {/* Accent circle */}
      <div
        className="absolute top-1/3 right-8 md:right-24 w-64 h-64 md:w-96 md:h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-muted) 0%, transparent 70%)",
          opacity: 0.6,
        }}
      />

      <div className="relative max-w-5xl">
        <span
          className="animate-fade-up delay-1 inline-block text-xs font-medium tracking-widest uppercase mb-6"
          style={{ color: "var(--accent)" }}
        >
          Software Development · Mumbai
        </span>

        <h1
          className="font-display animate-fade-up delay-2"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", lineHeight: 1.05, color: "var(--ink)" }}
        >
          We build software
          <br />
          <em style={{ color: "var(--accent)" }}>that grows</em>
          <br />
          businesses.
        </h1>

        <p
          className="animate-fade-up delay-3 mt-8 text-lg md:text-xl max-w-xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          The Mumbai Software partners with startups and enterprises to craft
          high-quality digital products — from idea to launch and beyond.
        </p>

        <div className="animate-fade-up delay-4 flex flex-wrap gap-4 mt-10">
          <a
            href="#work"
            className="px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-200"
            style={{ background: "var(--ink)", color: "var(--paper)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--ink)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--paper)"; }}
          >
            View our work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full font-medium text-sm border transition-all duration-200"
            style={{ border: "1px solid var(--border)", color: "var(--ink)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--ink)"; }}
          >
            Start a project
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-5 flex flex-wrap gap-10 mt-16 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
          {[
            { num: "50+", label: "Projects delivered" },
            { num: "30+", label: "Happy clients" },
            { num: "6+", label: "Years of experience" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl" style={{ color: "var(--ink)" }}>{s.num}</div>
              <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
