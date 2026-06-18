"use client";
import { FadeIn } from "./FadeIn";

const experiences = [
  {
    company: "India Space Lab",
    role: "Space Technology Intern",
    period: "Jun – Jul 2025",
    desc: "Analyzed CubeSat and CanSat system architecture. Processed NOAA satellite telemetry using Python to extract orbital data patterns. Studied remote sensing pipelines and multispectral imagery.",
    tags: ["Python", "Telemetry", "Remote Sensing"],
  },
  {
    company: "Bustler",
    role: "Growth & User Engagement Intern",
    period: "Jan 2025 – Present",
    desc: "Designed 8+ in-app banner variants to drive user activation. Built urgency-based and reactivation campaign frameworks. Estimated 25–30% improvement in CTA engagement.",
    tags: ["Growth", "Campaigns", "A/B Testing"],
  },
  {
    company: "Bustler Pulse",
    role: "Backend & Intelligence Layer Developer",
    period: "Jun 2026",
    desc: "Architected 17+ production REST APIs powering AI triage, analytics, authentication, and dispute resolution. Live at bustler-pulse.onrender.com.",
    tags: ["FastAPI", "PostgreSQL", "AI Triage", "SQLAlchemy"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: "#0C0C0C",
        paddingTop: "120px",
        paddingBottom: "120px",
        paddingLeft: "clamp(24px, 8vw, 140px)",
        paddingRight: "clamp(24px, 8vw, 140px)",
      }}
    >
      <FadeIn y={40} className="text-center" style={{ marginBottom: "100px" }}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Experience
        </h2>
      </FadeIn>

      <div style={{ maxWidth: "780px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "36px" }}>
        {experiences.map((exp, i) => (
          <FadeIn key={exp.company} delay={i * 0.1} y={30}>
            <div
              style={{
                borderRadius: "32px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(8px)",
                padding: "44px",
              }}
              className="hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3" style={{ marginBottom: "28px" }}>
                <div>
                  <h3 className="text-white font-semibold text-lg sm:text-xl">{exp.role}</h3>
                  <p className="text-[#a78bfa] text-sm uppercase tracking-wider" style={{ marginTop: "10px" }}>{exp.company}</p>
                </div>
                <span className="text-[#666] text-xs uppercase tracking-widest flex-shrink-0 sm:pt-1">{exp.period}</span>
              </div>
              <p className="text-[#aaa] leading-relaxed text-sm sm:text-base" style={{ marginBottom: "32px" }}>{exp.desc}</p>
              <div className="flex flex-wrap" style={{ gap: "14px" }}>
                {exp.tags.map(t => (
                  <span key={t} className="text-xs rounded-full border border-white/10 bg-white/[0.03] text-[#999]" style={{ padding: "9px 18px" }}>{t}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
