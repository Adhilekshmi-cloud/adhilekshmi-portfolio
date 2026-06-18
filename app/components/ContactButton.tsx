export function ContactButton({ href = "mailto:adhilekshmir@gmail.com", label = "Contact Me" }: { href?: string; label?: string }) {
  return (
    <a
      href={href}
      className="glow-btn inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
    >
      {label}
    </a>
  );
}
