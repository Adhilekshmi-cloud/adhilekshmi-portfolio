"use client";
import { FadeIn } from "./FadeIn";

const NAV_LINKS = ["About", "Experience", "Skills", "Projects", "Contact"];

export default function Hero() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: "clip" }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        {NAV_LINKS.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs md:text-base lg:text-lg hover:opacity-70 transition-opacity duration-200">
            {link}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden mt-10 sm:mt-6 md:mt-0 px-2">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[13vw] sm:text-[12vw] md:text-[11vw] lg:text-[9.5vw]">
            Adhilekshmi R
          </h1>
        </FadeIn>
      </div>

      <div className="mt-auto flex flex-col items-start gap-6 pb-8 sm:pb-10 md:pb-12 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[260px] md:max-w-[320px]"
            style={{ fontSize: "clamp(0.7rem, 1.3vw, 1.15rem)" }}>
            AI Engineer & Backend Developer building intelligent products that solve real-world problems
          </p>
        </FadeIn>
      </div>

      {/* Portrait */}
      <FadeIn delay={0.6} y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px]">
        <div className="relative">
          <div className="aspect-[3/4] rounded-t-[100px] overflow-hidden border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile.jpg" alt="Adhilekshmi R" className="w-full h-full object-cover object-top select-none pointer-events-none" draggable={false} />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
