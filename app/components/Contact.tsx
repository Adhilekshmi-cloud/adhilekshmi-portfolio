"use client";
import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Mail, GitFork, Link2, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:adhilekshmir@gmail.com?subject=Hi from ${form.name}&body=${encodeURIComponent(form.message + "\n\n— " + form.name + " (" + form.email + ")")}`;
  };

  return (
    <section
      id="contact"
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
          Let&apos;s Talk
        </h2>
      </FadeIn>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }} className="grid lg:grid-cols-2 gap-16 md:gap-20">
        <FadeIn x={-30} y={0} delay={0.1}>
          <p className="text-[#aaa] leading-relaxed text-base sm:text-lg" style={{ marginBottom: "48px" }}>
            Open to full-time roles, internships, and interesting projects in AI engineering and backend development.
          </p>

          <div className="flex flex-col" style={{ gap: "20px", marginBottom: "48px" }}>
            {[
              { icon: Mail, label: "adhilekshmir@gmail.com", href: "mailto:adhilekshmir@gmail.com" },
              { icon: Link2, label: "linkedin.com/in/adhilekshmi-r", href: "https://www.linkedin.com/in/adhilekshmi-r-0449a22b7" },
              { icon: GitFork, label: "github.com/Adhilekshmi-cloud", href: "https://github.com/Adhilekshmi-cloud" },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="flex items-center rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300"
                style={{ gap: "20px", padding: "20px 28px" }}>
                <Icon size={18} className="text-[#999]" />
                <span className="text-sm text-[#ccc]">{label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center" style={{ gap: "12px" }}>
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs uppercase tracking-widest text-[#666]">Open to opportunities · Kerala, India</span>
          </div>
        </FadeIn>

        <FadeIn x={30} y={0} delay={0.15}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              { key: "name", label: "Name", type: "text", placeholder: "Jane Smith" },
              { key: "email", label: "Email", type: "email", placeholder: "jane@company.com" },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label className="text-xs uppercase tracking-widest text-[#666] block" style={{ marginBottom: "12px" }}>{label}</label>
                <input type={type} required placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] text-white text-sm placeholder-[#444] focus:outline-none focus:border-white/25 transition-colors"
                  style={{ padding: "18px 24px" }} />
              </div>
            ))}
            <div>
              <label className="text-xs uppercase tracking-widest text-[#666] block" style={{ marginBottom: "12px" }}>Message</label>
              <textarea required rows={5} placeholder="Hi Adhilekshmi, I'd like to..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] text-white text-sm placeholder-[#444] focus:outline-none focus:border-white/25 transition-colors resize-none"
                style={{ padding: "18px 24px" }} />
            </div>
            <button type="submit"
              className="glow-btn w-full flex items-center justify-center rounded-full text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-[1.02]"
              style={{ gap: "12px", padding: "18px" }}>
              <Send size={15} /> Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
