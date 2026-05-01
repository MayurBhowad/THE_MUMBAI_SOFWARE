"use client";
const testimonials = [
  {
    quote: "The Mumbai Software didn't just build our app — they understood our business deeply and made recommendations that genuinely changed how we operate.",
    author: "Kavya Reddy",
    role: "CEO, FinTrack Pro",
    location: "Hyderabad",
  },
  {
    quote: "They delivered on time, within budget, and the code quality was exceptional. We've worked with agencies before, but TMS is on a different level.",
    author: "Sameer Khan",
    role: "CTO, LogiHub",
    location: "Delhi",
  },
  {
    quote: "Our user engagement doubled within three months of launching the redesigned product. The team's attention to UX detail is remarkable.",
    author: "Dr. Nisha Verma",
    role: "Founder, MedConnect",
    location: "Pune",
  },
  {
    quote: "What sets them apart is their communication. No jargon, no surprises — just clear updates and honest advice throughout the project.",
    author: "Aditya Joshi",
    role: "Head of Product, EduLeap",
    location: "Bangalore",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 md:px-12 py-24" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <span className="divider-line mb-6" />
        <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "var(--ink)" }}>
          What clients say
        </h2>
        <p className="text-lg mb-16 max-w-md" style={{ color: "var(--muted)" }}>
          We let our work — and our clients — speak for us.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-8 rounded-2xl"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <span className="font-display text-4xl" style={{ color: "var(--accent)", lineHeight: 1 }}>"</span>
              <p className="text-base leading-relaxed mt-2 mb-6" style={{ color: "var(--ink)" }}>
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium"
                  style={{ background: "var(--ink)", color: "var(--paper)" }}
                >
                  {t.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-medium text-sm" style={{ color: "var(--ink)" }}>{t.author}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
