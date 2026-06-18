"use client";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import {
  SiPython, SiFastapi, SiPostgresql, SiReact, SiNextdotjs, SiTypescript,
  SiTailwindcss, SiFramer, SiGit, SiGithub, SiFirebase, SiVercel, SiRender,
  SiNumpy, SiPandas, SiScikitlearn, SiJavascript, SiHtml5, SiCss,
} from "react-icons/si";

const row1 = [
  { Icon: SiPython, name: "Python", color: "#3776AB" },
  { Icon: SiScikitlearn, name: "Scikit-learn", color: "#F7931E" },
  { Icon: SiPandas, name: "Pandas", color: "#150458" },
  { Icon: SiNumpy, name: "NumPy", color: "#4DABCF" },
  { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
];

const row2 = [
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { Icon: SiFramer, name: "Framer Motion", color: "#0055FF" },
  { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: SiCss, name: "CSS3", color: "#1572B6" },
];

const row3 = [
  { Icon: SiGit, name: "Git", color: "#F05032" },
  { Icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
  { Icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
  { Icon: SiRender, name: "Render", color: "#46E3B7" },
];

function SkillRow({ skills, reverse = false }: { skills: typeof row1; reverse?: boolean }) {
  return (
    <motion.div
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      style={{ display: "flex", gap: "24px", whiteSpace: "nowrap" }}
    >
      {[...skills, ...skills].map((skill, index) => {
        const Icon = skill.Icon;
        return (
          <div key={index} className="skill-chip">
            <Icon size={28} color={skill.color} />
            <span className="text-white font-medium text-base">{skill.name}</span>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: "#0C0C0C",
        overflow: "hidden",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <FadeIn y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: "clamp(3rem, 12vw, 160px)", marginBottom: "100px" }}>
          Skills
        </h2>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
        <SkillRow skills={row1} />
        <SkillRow skills={row2} reverse />
        <SkillRow skills={row3} />
      </div>
    </section>
  );
}
