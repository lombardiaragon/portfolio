import fedePhoto from "../assets/fede-photo.jpg";
import { useTheme } from "../App";
import logoDark from "../assets/semivertical-dark.svg";
import logoLight from "../assets/semivertical-light.svg";
import Isotipo from "../components/Isotipo";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Glow */}
      <div className="absolute top-[10%] left-[-10%] w-[60%] h-[70%] bg-[radial-gradient(ellipse,rgba(242,136,75,0.07)_0%,transparent_70%)] pointer-events-none" />
      {/* Isotipo */}
      <div className="hero-isotipo-wrapper">
        <div className="hero-isotipo-glow" />
        <Isotipo size={835} color="rgba(242,136,75,0.06)" />
      </div>
      {/* Max-width container */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 min-h-screen flex items-center relative pt-16">
        {/* Content */}
        <div className="relative z-[1] max-w-[700px]">
          <div className="eyebrow animate-[fadeUp_0.7s_ease_0.3s_both]">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-[pulse_2s_infinite] inline-block" />
            Frontend Developer · Toulouse, France
          </div>

          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="Federico Lombardi — Frontend Developer"
            className="w-full max-w-[620px] h-auto mb-8 block py-6 animate-[fadeUp_0.7s_ease_0.45s_both]"
          />

          <p className="text-[1.05rem] font-light leading-[1.75] text-[var(--muted)] max-w-[520px] mb-10 animate-[fadeUp_0.7s_ease_0.6s_both]">
            I build{" "}
            <strong className="font-semibold text-[var(--text)]">
              React applications
            </strong>{" "}
            that do what they promise. Arrived in France without speaking the
            language — today I build interfaces in{" "}
            <strong className="font-semibold text-[var(--text)]">
              three of them
            </strong>
            .
          </p>

          <div className="flex flex-wrap gap-4 items-center animate-[fadeUp_0.7s_ease_0.75s_both]">
            <a href="#projects" className="btn-primary">
              View my work →
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <a
          href="https://linkedin.com/in/flombardidev"
          target="_blank"
          rel="noreferrer"
          className="hidden xl:block absolute right-12 top-1/2 w-[280px] bg-[linear-gradient(135deg,#1a3a5c_0%,#0f2340_60%,#0a1628_100%)] border border-[rgba(255,255,255,0.1)] rounded-[12px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.5)] z-[2] no-underline cursor-pointer hover:border-[rgba(255,255,255,0.2)] hover:shadow-[0_32px_64px_rgba(0,0,0,0.6)] transition-all duration-300 animate-[slideInRight_1.1s_ease_1.1s_both]"
        >
          <div className="h-[72px] bg-[linear-gradient(135deg,#0a66c2_0%,#004182_100%)] relative">
            <span className="absolute top-[10px] right-[14px] text-[1.1rem] font-bold text-[rgba(255,255,255,0.9)]">
              in
            </span>
            <div className="w-14 h-14 rounded-full border-[3px] border-[#0f2340] absolute top-11 left-4 overflow-hidden">
              <img
                src={fedePhoto}
                alt="Federico Lombardi"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="pt-8 px-4 pb-4">
            <div className="font-bold text-[0.95rem] text-white mb-[0.2rem]">
              Federico Lombardi
            </div>
            <div className="text-[0.75rem] text-[rgba(255,255,255,0.65)] mb-3 leading-[1.4]">
              Frontend Developer · React · Tailwind
            </div>
            <div className="flex flex-wrap gap-[0.3rem] mb-3">
              {["React", "Vite", "Tailwind", "JavaScript"].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.58rem] py-[0.2rem] px-[0.55rem] rounded-[3px] bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.6)] border border-[rgba(255,255,255,0.1)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="font-mono text-[0.6rem] text-[rgba(255,255,255,0.4)] tracking-[0.06em]">
              📍 Toulouse · Open to work · Remote OK
            </div>
            <div className="font-mono text-[0.58rem] text-orange border-t border-[rgba(255,255,255,0.07)] pt-[0.6rem] mt-2 block w-full">
              ↗ flombardi.dev
            </div>
          </div>
        </a>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-5 md:left-12 flex items-center gap-[0.6rem] font-mono text-[0.58rem] tracking-[0.14em] uppercase text-[var(--muted)] animate-[fadeUp_0.7s_ease_1.4s_both]">
          <div className="w-8 h-px bg-[var(--border2)] relative overflow-hidden">
            <div className="absolute left-[-100%] top-0 w-full h-full bg-orange animate-[scanline_2s_ease-in-out_1.8s_infinite]" />
          </div>
          Scroll
        </div>
      </div>
    </section>
  );
}
