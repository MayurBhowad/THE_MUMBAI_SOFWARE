"use client";
const projects = [
  {
    title: "FinTrack Pro",
    category: "FinTech · Web App",
    desc: "A comprehensive personal finance platform helping 10,000+ users manage budgets, investments, and savings goals.",
    outcome: "3× user retention after redesign",
    color: "#1a1a2e",
    light: "#e8d9b8",
  },
  {
    title: "MedConnect",
    category: "HealthTech · Mobile + Web",
    desc: "Telemedicine platform connecting 500+ doctors with patients across Maharashtra for remote consultations.",
    outcome: "40% faster appointment booking",
    color: "#0f2017",
    light: "#d4e8d4",
  },
  {
    title: "LogiHub",
    category: "Logistics · SaaS",
    desc: "Real-time supply chain management dashboard for a pan-India logistics company handling 1M+ shipments/month.",
    outcome: "₹2Cr saved in operational costs",
    color: "#1e1208",
    light: "#f0e0c0",
  },
  {
    title: "EduLeap",
    category: "EdTech · Platform",
    desc: "An adaptive learning platform for K-12 students with AI-driven personalized curricula and progress tracking.",
    outcome: "25% improvement in test scores",
    color: "#0d1a2e",
    light: "#c0d4f0",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="px-6 md:px-12 py-24" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <span className="divider-line mb-6" />
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--ink)" }}>Selected work</h2>
            <p className="text-lg mt-3 max-w-md" style={{ color: "var(--muted)" }}>Projects we're proud to have built.</p>
          </div>
          <span className="text-sm" style={{ color: "var(--muted)" }}>Case studies available on request</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl overflow-hidden group cursor-pointer"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Preview area */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden transition-transform duration-500"
                style={{ background: p.color }}
              >
                <span
                  className="font-display text-5xl opacity-10 absolute"
                  style={{ color: p.light, fontSize: "8rem", userSelect: "none" }}
                >
                  {p.title[0]}
                </span>
                <span
                  className="font-display text-2xl relative z-10"
                  style={{ color: p.light }}
                >
                  {p.title}
                </span>
              </div>

              {/* Content */}
              <div className="p-6" style={{ background: "var(--paper)" }}>
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                  {p.category}
                </span>
                <h3 className="font-display text-xl mt-2 mb-3" style={{ color: "var(--ink)" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{p.desc}</p>
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "var(--accent)", flexShrink: 0 }}
                  />
                  <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>{p.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
