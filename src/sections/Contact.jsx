import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, form, EMAILJS_PUBLIC)
      // ↑ descomentar cuando tengas las keys de EmailJS
      await new Promise((r) => setTimeout(r, 1000)); // simulación
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const btnBg = status === "sent" ? "bg-[#5ecb82]" : "bg-orange hover:bg-orange2";

  return (
    <section id="contact" className="section-container">
      <div className="eyebrow">
        <span className="w-8 h-px bg-orange inline-block" />
        Contact{" "}
        <span className="text-[var(--muted)] ml-2">/ 05</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-10 lg:gap-20 items-start">
        {/* LEFT */}
        <div>
          <h2 className="text-h3 font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--text)] mb-5">
            Let's build
            <br />
            something <span className="text-orange">together.</span>
          </h2>
          <p className="text-[0.92rem] font-light text-[var(--muted)] leading-[1.75] max-w-[420px] mb-10">
            Whether you need a{" "}
            <strong className="font-semibold text-[var(--text)]">
              React application
            </strong>
            , a{" "}
            <strong className="font-semibold text-[var(--text)]">
              website for your business
            </strong>
            , or just want to talk about a potential collaboration — I'm open to
            it. Remote, hybrid, anywhere.
          </p>

          <div className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.1em] uppercase py-2 px-4 rounded-[4px] border border-[rgba(242,136,75,0.3)] text-[var(--orange)] bg-[rgba(242,136,75,0.06)] mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-[pulse_2s_infinite] inline-block" />
            Available for new projects
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                icon: "✉",
                label: "federico@flombardi.dev",
                href: "mailto:federico@flombardi.dev",
              },
              {
                icon: "gh",
                label: "github.com/flombardi",
                href: "https://github.com/flombardi",
              },
              {
                icon: "in",
                label: "linkedin.com/in/flombardi",
                href: "https://linkedin.com/in/flombardi",
              },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="direct-link"
              >
                <span>{icon}</span>
                <span>{label}</span>
                <span className="link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-bg2 border border-[var(--border)] rounded-[6px] p-5 lg:p-8 flex flex-col gap-5"
        >
          <div className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-[var(--muted)] pb-4 border-b border-[var(--border)]">
            Send a message
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ["name", "Name", "Your name", "text"],
              ["email", "Email", "your@email.com", "email"],
            ].map(([name, label, placeholder, type]) => (
              <div key={name} className="flex flex-col gap-[0.4rem]">
                <label className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-[var(--muted)]">
                  {label}
                </label>
                <input
                  className="form-input"
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={form[name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[0.4rem]">
            <label className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-[var(--muted)]">
              Subject
            </label>
            <select
              className="form-select font-mono text-[0.72rem] cursor-pointer appearance-none"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                What's this about?
              </option>
              <option>Job opportunity</option>
              <option>Freelance project</option>
              <option>React application</option>
              <option>WordPress site</option>
              <option>Just saying hi</option>
            </select>
          </div>

          <div className="flex flex-col gap-[0.4rem]">
            <label className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-[var(--muted)]">
              Message
            </label>
            <textarea
              className="form-textarea resize-none leading-[1.6]"
              name="message"
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`font-sans font-semibold text-[0.9rem] py-[0.8rem] px-[1.8rem] rounded-[4px] border-none text-bg cursor-pointer w-full transition-all duration-150 ${btnBg} ${status === "sending" ? "opacity-70" : "opacity-100"}`}
          >
            {status === "idle" && "Send message →"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "✓ Message sent!"}
            {status === "error" && "Error — try again"}
          </button>

          <div className="font-mono text-[0.56rem] tracking-[0.06em] text-[var(--muted)] text-center opacity-60">
            Powered by EmailJS · I'll reply within 24h
          </div>
        </form>
      </div>
    </section>
  );
}
