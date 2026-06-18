"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { ExternalLink } from "lucide-react";

interface Project {
  n: string;
  category: string;
  name: string;
  desc: string;
  tech: string[];
  live?: string;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    category: "EdTech · AI",
    name: "LabMateAI",
    desc: "AI-powered lab exam preparation platform. AI Viva Assistant, program generator, PDF analysis, and personalized learning paths for CS students.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Gemini API", "Supabase"],
  },
  {
    n: "02",
    category: "SaaS · Production",
    name: "Bustler Pulse",
    desc: "Intelligent customer support & dispute resolution platform. 17+ REST APIs, AI triage engine, analytics, authentication, and report generation.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Next.js", "Render"],
    live: "https://bustler-pulse.onrender.com",
  },
  {
    n: "03",
    category: "FinTech · AI",
    name: "TaxShield",
    desc: "GST validation pipeline for 10,000+ invoice records. Isolation Forest-based anomaly detection with 91% precision and rule-based validation engine.",
    tech: ["Python", "Scikit-learn", "Pandas", "Isolation Forest"],
  },
  {
    n: "04",
    category: "HR Tech · AI",
    name: "HireSenseAI",
    desc: "NLP pipeline ranking 500+ resumes in under 4 seconds. TF-IDF and cosine similarity scoring with 87% agreement with manual recruiter rankings.",
    tech: ["Python", "NLP", "TF-IDF", "Scikit-learn", "FastAPI"],
  },
];

function ProjectCard({ project, index, total, progress }: {
  project: Project; index: number; total: number; progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky" style={{ top: `${index * 24 + 96}px` }}>
      <motion.div
        style={{
          scale,
          borderRadius: "36px",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(12,12,12,0.95)",
          backdropFilter: "blur(20px)",
          padding: "44px",
          boxShadow: "0 0 60px rgba(255,255,255,0.03)",
        }}
        className="transition-all duration-300 hover:border-white/20"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-7" style={{ marginBottom: "40px" }}>
          <div className="flex items-center flex-wrap" style={{ gap: "28px" }}>
            <div className="hero-heading font-black text-white/15" style={{ fontSize: "clamp(2.5rem, 8vw, 100px)", lineHeight: 1 }}>
              {project.n}
            </div>
            <div className="flex flex-col" style={{ gap: "6px" }}>
              <span className="text-white/50 uppercase tracking-[0.25em] text-xs sm:text-sm">{project.category}</span>
              <span className="text-white font-medium" style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}>{project.name}</span>
            </div>
          </div>

          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="glow-btn inline-flex items-center rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ gap: "10px", padding: "14px 28px" }}>
              Live <ExternalLink size={14} />
            </a>
          )}
        </div>

        <p className="text-[#aaa] leading-relaxed text-sm sm:text-base" style={{ marginBottom: "32px", maxWidth: "640px" }}>{project.desc}</p>

        <div className="flex flex-wrap" style={{ gap: "14px" }}>
          {project.tech.map(t => (
            <span key={t} className="text-xs rounded-full border border-white/10 bg-white/[0.03] text-[#999]" style={{ padding: "9px 18px" }}>{t}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <section
      id="projects"
      ref={containerRef}
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
          Projects
        </h2>
      </FadeIn>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {PROJECTS.map((project, index) => (
          <div key={project.n} className="h-[70vh]">
            <ProjectCard project={project} index={index} total={PROJECTS.length} progress={scrollYProgress} />
          </div>
        ))}
      </div>

      <FadeIn y={20} className="text-center" style={{ marginTop: "64px" }}>
        <a href="https://github.com/Adhilekshmi-cloud" target="_blank" rel="noopener noreferrer"
          className="text-[#666] hover:text-[#aaa] text-sm uppercase tracking-widest transition-colors">
          → github.com/Adhilekshmi-cloud
        </a>
      </FadeIn>
    </section>
  );
}
