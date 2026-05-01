"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-24" style={{ borderTop: "1px solid var(--border)", background: "var(--ink)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="divider-line mb-6" />
            <h2 className="font-display text-4xl md:text-5xl mb-6" style={{ color: "var(--paper)" }}>
              Let's build<br />
              <em style={{ color: "var(--accent)" }}>something great.</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#9a9a9a" }}>
              Tell us about your project and we'll get back to you within 24 hours. No sales pressure — just a genuine conversation about how we can help.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: "📍", label: "Mumbai, Maharashtra, India" },
                { icon: "✉️", label: "hello@mumbaisoftware.in" },
                { icon: "📞", label: "+91 98765 43210" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span>{c.icon}</span>
                  <span className="text-sm" style={{ color: "#9a9a9a" }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {sent ? (
              <div
                className="p-10 rounded-2xl text-center"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="font-display text-4xl mb-4" style={{ color: "var(--accent)" }}>✓</div>
                <h3 className="font-display text-2xl mb-2" style={{ color: "var(--paper)" }}>Message sent!</h3>
                <p style={{ color: "#9a9a9a" }}>We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <div
                className="p-8 rounded-2xl flex flex-col gap-4"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {[
                  { key: "name", label: "Your name", type: "text", placeholder: "Rahul Sharma" },
                  { key: "email", label: "Email address", type: "email", placeholder: "rahul@company.com" },
                  { key: "company", label: "Company (optional)", type: "text", placeholder: "Acme Corp" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-xs mb-2 uppercase tracking-widest" style={{ color: "#9a9a9a" }}>{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors duration-200"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "var(--paper)",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs mb-2 uppercase tracking-widest" style={{ color: "#9a9a9a" }}>Tell us about your project</label>
                  <textarea
                    rows={4}
                    placeholder="We're looking to build a..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none transition-colors duration-200"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "var(--paper)",
                    }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="mt-2 py-3.5 rounded-full font-medium text-sm transition-all duration-200"
                  style={{ background: "var(--accent)", color: "var(--ink)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Send message →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
