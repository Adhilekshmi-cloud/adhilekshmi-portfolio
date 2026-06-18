export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10" style={{ background: "#0C0C0C" }}>
      <div className="px-5 sm:px-8 md:px-10 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="hero-heading font-bold text-sm uppercase tracking-widest">Adhilekshmi R.</span>
        <span className="text-xs text-[#444] uppercase tracking-widest">© {new Date().getFullYear()} · Kerala, India</span>
      </div>
    </footer>
  );
}
