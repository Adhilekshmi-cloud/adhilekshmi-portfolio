"use client";
import { FadeIn } from "./FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center"
      style={{
        background: "#0C0C0C",
        overflowX: "clip",
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: "clamp(24px, 8vw, 140px)",
        paddingRight: "clamp(24px, 8vw, 140px)",
        gap: "70px",
      }}
    >
      <FadeIn delay={0} y={40} className="text-center relative z-10">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          About me
        </h2>
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center" style={{ gap: "70px" }}>
        <FadeIn delay={0.1} y={20}>
          <p className="text-[#D7E2EA] font-medium text-center leading-relaxed" style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)", maxWidth: "680px" }}>
            I am a <span className="text-white font-semibold">Computer Science and Artificial Intelligence</span> student at Providence College of Engineering, Chengannur, currently in my 4th year. My interests include Machine Learning, backend systems, and NLP — I love turning complex technical problems into clean, working software. At Bustler, I architected the intelligence layer of Bustler Pulse from the ground up: 17+ APIs, AI triage, analytics, and auth, all live in production.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: "24px" }}>
          {[
            { value: "3+", label: "Projects" },
            { value: "17+", label: "APIs Built" },
            { value: "2", label: "Internships" },
            { value: "4th Yr", label: "B.Tech CSE" },
          ].map(({ value, label }, i) => (
            <FadeIn key={label} delay={0.2 + i * 0.08} y={20}>
              <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03]" style={{ gap: "10px", padding: "32px 28px" }}>
                <span className="hero-heading font-black text-3xl sm:text-4xl">{value}</span>
                <span className="text-[#8a8a8a] text-xs uppercase tracking-widest">{label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
