import Isotipo from './Isotipo'

const links = ['About', 'Stack', 'Projects', 'Contact']

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-5 md:px-12 py-8 flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-3">
        <Isotipo size={18} />
        <span className="font-mono text-[0.58rem] tracking-[0.1em] text-[var(--muted)]">
          © 2026 <span className="text-orange">Federico Lombardi</span> · flombardi.dev
        </span>
      </div>

      <div className="flex gap-6">
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-[var(--muted)] hover:text-[var(--orange)] no-underline transition-colors duration-150"
          >
            {l}
          </a>
        ))}
        <a href="/federico-lombardi-cv.pdf" className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-[var(--muted)] hover:text-[var(--orange)] no-underline transition-colors duration-150">
          CV ↓
        </a>
      </div>

      <div className="font-mono text-[0.58rem] tracking-[0.08em] text-[var(--muted)] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-orange animate-[pulse_2s_infinite] inline-block" />
        Open to work · Remote OK
      </div>
    </footer>
  )
}
