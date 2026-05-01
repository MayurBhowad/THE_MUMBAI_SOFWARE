"use client";
const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", initials: "AM" },
  { name: "Priya Sharma", role: "Head of Design", initials: "PS" },
  { name: "Rohan Patel", role: "Lead Engineer", initials: "RP" },
  { name: "Sneha Iyer", role: "Product Manager", initials: "SI" },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24" style={{ borderTop: "1px solid var(--border)", background: "var(--card)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="divider-line mb-6" />
            <h2 className="font-display text-4xl md:text-5xl mb-6" style={{ color: "var(--ink)" }}>
              Built in Mumbai,<br />
              <em>for the world.</em>
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              The Mumbai Software was founded with a simple belief — great software should be accessible to every business, not just the ones with deep pockets or connections in Silicon Valley.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              We're a tight-knit team of engineers, designers, and strategists who genuinely care about the products we build. Every line of code, every pixel, every decision is made with your users in mind.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              From early-stage startups to established enterprises, we've helped clients across India, the Middle East, and Europe ship faster, scale smarter, and grow confidently.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: "Founded", value: "2018" },
                { label: "Team size", value: "15–20" },
                { label: "Industries", value: "10+" },
                { label: "HQ", value: "Mumbai, IN" },
              ].map((i) => (
                <div key={i.label} className="p-4 rounded-xl" style={{ background: "var(--paper)", border: "1px solid var(--border)" }}>
                  <div className="font-display text-2xl" style={{ color: "var(--ink)" }}>{i.value}</div>
                  <div className="text-xs mt-1 uppercase tracking-widest" style={{ color: "var(--muted)" }}>{i.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Team */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--muted)" }}>Core team</h3>
            <div className="flex flex-col gap-4">
              {team.map((m) => (
                <div
                  key={m.name}
                  className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-200"
                  style={{ border: "1px solid var(--border)", background: "var(--paper)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-medium text-sm flex-shrink-0"
                    style={{ background: "var(--accent-muted)", color: "var(--ink)" }}
                  >
                    {m.initials}
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: "var(--ink)" }}>{m.name}</div>
                    <div className="text-sm" style={{ color: "var(--muted)" }}>{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
