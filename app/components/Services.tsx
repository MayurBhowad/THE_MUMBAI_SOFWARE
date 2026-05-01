"use client";
const services = [
  {
    no: "01",
    title: "Custom Software Development",
    desc: "End-to-end development of web, mobile, and desktop applications tailored to your unique business needs.",
    tags: ["React", "Next.js", "Node.js", "Python"],
  },
  {
    no: "02",
    title: "Product Design & UX",
    desc: "We turn complex problems into elegant, intuitive interfaces that users actually love to use.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    no: "03",
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure, CI/CD pipelines, and cloud architecture on AWS, GCP, or Azure.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    no: "04",
    title: "API & Integrations",
    desc: "Seamlessly connect your software ecosystem with third-party services, payment gateways, and more.",
    tags: ["REST", "GraphQL", "Webhooks"],
  },
  {
    no: "05",
    title: "AI & Automation",
    desc: "Leverage machine learning and intelligent automation to streamline operations and unlock new value.",
    tags: ["LLMs", "Python", "MLOps"],
  },
  {
    no: "06",
    title: "Growth & Consulting",
    desc: "Strategic technology consulting to help your team make better product and engineering decisions.",
    tags: ["Roadmapping", "Tech Audits", "Hiring"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-12 py-24" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <span className="divider-line mb-6" />
        <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "var(--ink)" }}>
          What we do
        </h2>
        <p className="text-lg mb-16 max-w-xl" style={{ color: "var(--muted)" }}>
          Full-spectrum software services — from pixel to production.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {services.map((s) => (
            <div
              key={s.no}
              className="p-8 group transition-colors duration-200"
              style={{ background: "var(--paper)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--card)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--paper)")}
            >
              <span className="text-xs font-medium tracking-widest" style={{ color: "var(--accent)" }}>{s.no}</span>
              <h3 className="font-display text-xl mt-3 mb-3" style={{ color: "var(--ink)" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: "var(--accent-muted)", color: "var(--ink)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
