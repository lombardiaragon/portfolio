import { projects } from "../data/projects";

function Mockup() {
  return (
    <div className="mockup">
      <div className="mockup-bar">
        {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
          <div key={c} className="mockup-dot" style={{ "--dot-color": c }} />
        ))}
        <span className="mockup-url">client-financial-manager.netlify.app</span>
      </div>
      <div className="mockup-body">
        <div className="mockup-stats">
          {[
            { val: "12", lbl: "Active clients", color: "var(--orange)" },
            { val: "24", lbl: "Active credits", color: "var(--blue)" },
            { val: "48k€", lbl: "Total debt", color: "var(--orange)" },
            { val: "6.2k€", lbl: "Interest", color: "#5ecb82" },
          ].map(({ val, lbl, color }) => (
            <div key={lbl} className="mockup-stat">
              <div
                className="mockup-stat-val"
                style={{ "--stat-color": color }}
              >
                {val}
              </div>
              <div className="mockup-stat-label">{lbl}</div>
            </div>
          ))}
        </div>

        <div className="mockup-table">
          <div className="mockup-row mockup-header">
            {["Client", "Credits", "Balance", "Status"].map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>

          {[
            ["Dupont, M.", "3", "4 200 €"],
            ["Martin, S.", "1", "1 850 €"],
            ["Leblanc, A.", "2", "7 300 €"],
          ].map(([name, credits, balance]) => (
            <div key={name} className="mockup-row">
              <span>{name}</span>
              <span className="mockup-muted">{credits}</span>
              <span className="mockup-orange">{balance}</span>
              <span className="pill-active">Active</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-container">
      <div className="eyebrow">
        <span className="eyebrow-mark" />
        Projects <span className="muted-number">/ 04</span>
      </div>

      <h2 className="section-title">
        What I've <span className="text-orange">built.</span>
      </h2>
      <p className="section-subtitle">
        Real projects, real decisions, real code. No tutorials followed, no
        shortcuts taken.
      </p>

      {/* Featured */}
      <div className="projects-grid">
        <div className="projects-preview">
          <div className="radial-bg" />
          <Mockup />
        </div>

        <div className="project-card">
          <div className="project-header">
            <span className="project-index">01 · Featured</span>
            <span className="project-badge">Live demo</span>
          </div>
          <div className="project-title">{featured.title}</div>
          <p className="project-desc">{featured.description}</p>

          <div className="project-highlights">
            {featured.highlights.map((h) => (
              <div key={h} className="project-highlight">
                <span className="project-highlight-icon">→</span>
                {h}
              </div>
            ))}
          </div>

          <div className="project-tags">
            {featured.tags.map((t) => (
              <span key={t} className="project-tag">
                {t}
              </span>
            ))}
          </div>

          <div className="project-actions">
            <a href={featured.demoUrl} className="btn-demo">
              Live demo →
            </a>
            <a href={featured.githubUrl} className="btn-code">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      {/* Secondary */}
      <div className="projects-secondary-grid">
        {secondary.map((p, i) => (
          <div key={p.id} className="project-card">
            <div className="project-header">
              <span className="project-index">0{i + 2}</span>
              {p.status === "live" && (
                <span className="project-badge">Live</span>
              )}
              {p.status === "wip" && (
                <span className="project-badge project-badge--wip">
                  Coming soon
                </span>
              )}
            </div>
            <div className="project-title">{p.title}</div>
            <p className="project-desc">{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="project-tag">
                  {t}
                </span>
              ))}
            </div>
            {p.status === "live" && (
              <div className="project-actions">
                <a href={p.demoUrl} className="btn-demo">
                  Demo →
                </a>
                <a href={p.githubUrl} className="btn-code">
                  GitHub ↗
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
