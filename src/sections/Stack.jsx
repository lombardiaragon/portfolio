import { capabilities, alsoWith } from "../data/stack";

export default function Stack() {
  return (
    <section id="stack" className="section-container">
      <div className="eyebrow">
        <span className="w-8 h-px bg-orange inline-block" />
        Stack{" "}
        <span className="text-[var(--muted)] ml-2">/ 03</span>
      </div>

      <h2 className="section-title">
        What I build <span className="text-orange">with.</span>
      </h2>
      <p className="section-subtitle">
        Three things I can do for you — and the tools I use to do them.
      </p>

      {/* Capability cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mb-px bg-[var(--border)] border border-[var(--border)] rounded-t-[6px] overflow-hidden">
        {capabilities.map(({ id, title, description, tags }) => (
          <div key={id} className="bg-bg2 hover:bg-bg3 p-8 flex flex-col gap-4 transition-colors duration-150 cursor-default">
            <div className="font-mono text-[0.6rem] tracking-[0.14em] text-orange">
              {id}
            </div>
            <div className="text-[1.05rem] font-bold text-[var(--text)] leading-[1.2]">
              {title}
            </div>
            <p className="text-[0.82rem] font-light text-[var(--muted)] leading-[1.75] flex-1">
              {description}
            </p>
            <div className="flex flex-wrap gap-[0.35rem] pt-4 border-t border-[var(--border)]">
              {tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.58rem] tracking-[0.06em] py-[0.2rem] px-[0.6rem] rounded-[3px] border border-[var(--border2)] text-[var(--muted)] bg-bg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Also with */}
      <div className="flex items-center gap-6 flex-wrap py-5 px-8 bg-bg2 border border-[var(--border)] border-t-0 rounded-b-[6px]">
        <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[var(--muted)] shrink-0 whitespace-nowrap">
          Also comfortable with
        </span>
        <div className="w-px h-5 bg-[var(--border2)] shrink-0" />
        <div className="flex flex-wrap gap-2">
          {alsoWith.map((t) => (
            <span key={t} className="also-chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
