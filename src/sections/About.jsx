import fedePhoto from "../assets/fede-photo.jpg";

const textBlocks = [
  {
    label: "The journey",
    text: (
      <>
        I sold everything in Argentina and moved to France with my wife,
        starting from zero. No language, no network, no safety net. I learned
        French from scratch, adapted to a new culture, and kept building —
        because{" "}
        <strong className="font-semibold text-[var(--text)]">
          that's what I do
        </strong>
        . Three and a half years later, I'm here, fluent in three languages and
        writing code that works.
      </>
    ),
  },
  {
    label: "How I work",
    text: (
      <>
        I'm a self-taught frontend developer with a real project to show: a{" "}
        <strong className="font-semibold text-[var(--text)]">
          React SPA for financial client management
        </strong>{" "}
        — feature-based architecture, business logic properly separated, fr-FR
        formatting, no tutorial followed. I use GitHub Copilot as a professional
        tool, not a crutch. I understand what I build.
      </>
    ),
  },
  {
    label: "What I'm looking for",
    text: (
      <>
        A position where I can{" "}
        <strong className="font-semibold text-[var(--text)]">
          contribute from day one
        </strong>{" "}
        and keep growing — remote, hybrid, or on-site. Based in Toulouse, open
        to opportunities{" "}
        <strong className="font-semibold text-[var(--text)]">
          anywhere in the world
        </strong>
        . I got into this field precisely because good code doesn't care where
        you write it.
      </>
    ),
  },
];

const values = [
  "Curious",
  "Direct",
  "Adaptable",
  "Loyal",
  "Honest",
  "Resilient",
  "Autodidact",
];

const stats = [
  { value: "3+", label: "Years in France" },
  { value: "3", label: "Languages" },
  { value: "5+", label: "Projects built" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  return (
    <section id="about" className="section-container">
      {/* Eyebrow */}
      <div className="eyebrow">
        <span className="w-8 h-px bg-orange inline-block" />
        About{" "}
        <span className="text-[var(--muted)] ml-2">/ 02</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-20 items-start">
        {/* LEFT */}
        <div>
          {/* Photo */}
          <div className="relative w-full max-w-[320px] mx-auto lg:max-w-none aspect-[4/5] rounded-[4px] overflow-hidden border border-[var(--border)]">
            <img
              src={fedePhoto}
              alt="Federico Lombardi — Frontend Developer"
              className="w-full h-full object-cover object-top block grayscale contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-[var(--orange)] opacity-[0.07] mix-blend-multiply pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-12 h-[3px] bg-orange" />
          </div>

          {/* Stats */}
          <div className="max-w-[320px] mx-auto lg:max-w-none grid grid-cols-2 gap-px mt-px bg-[var(--border)] border border-[var(--border)] border-t-0">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-bg2 p-4 flex flex-col gap-[0.2rem]">
                <div className="text-[1.6rem] font-extrabold text-[var(--text)] leading-none tracking-[-0.03em]">
                  {value.includes("+") ? (
                    <>
                      {value.replace("+", "")}
                      <span className="text-orange">+</span>
                    </>
                  ) : (
                    value
                  )}
                </div>
                <div className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-[var(--muted)]">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3 mt-6 max-w-[320px] mx-auto lg:max-w-none">
            {[
              { label: "↗ GitHub", href: "https://github.com/flombardidev" },
              { label: "↗ LinkedIn", href: "https://linkedin.com/in/flombardidev" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="social-btn no-underline">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="pt-2">
          <h2 className="text-h3 font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--text)] mb-10">
            Someone who always
            <br />
            found the way — even
            <br />
            when it{" "}
            <span className="text-orange">didn't exist.</span>
          </h2>

          <div className="flex flex-col gap-8">
            {textBlocks.map(({ label, text }) => (
              <div
                key={label}
                className="pl-5 border-l-2 border-[var(--border)] hover:border-[var(--orange)] transition-colors duration-200"
              >
                <div className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-orange mb-[0.6rem]">
                  {label}
                </div>
                <p className="text-[0.95rem] font-light leading-[1.8] text-[var(--muted)]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="flex flex-wrap gap-2 mt-10 pt-10 border-t border-[var(--border)]">
            {values.map((v) => (
              <span
                key={v}
                className="font-mono text-[0.62rem] tracking-[0.08em] py-[0.35rem] px-[0.9rem] rounded-full border border-[var(--border2)] hover:border-[var(--orange)] text-[var(--muted)] hover:text-[var(--orange)] bg-bg2 hover:bg-[rgba(242,136,75,0.06)] transition-all duration-150 cursor-default"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
