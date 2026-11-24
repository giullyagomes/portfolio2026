import { useState } from "react";
import { Github, Linkedin, Mail, Send, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Contato do portfólio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    setTimeout(() => {
      window.location.href = `mailto:giullya.dev@gmail.com?subject=${subject}&body=${body}`;
      setSent(true);
      setLoading(false);
      form.reset();
    }, 600);
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-[var(--rose-soft)]/40">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--rose-deep)]">06 · Contato</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Vamos construir algo <span className="italic">memorável</span>?
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Estou aberta a oportunidades, conexões e projetos que gerem impacto através da
            tecnologia. Responderei o mais breve possível.
          </p>

          <div className="mt-10 space-y-3">
            <a href="mailto:giullya.dev@gmail.com" className="glass flex items-center gap-3 rounded-2xl p-4 transition hover:-translate-y-0.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background"><Mail className="h-4 w-4" /></span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
                <p className="text-sm font-medium">giullya.dev@gmail.com</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/giullyagomes" target="_blank" rel="noreferrer" className="glass flex items-center gap-3 rounded-2xl p-4 transition hover:-translate-y-0.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background"><Linkedin className="h-4 w-4" /></span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium">/in/giullyagomes</p>
              </div>
            </a>
            <a href="https://github.com/giullyagomes" target="_blank" rel="noreferrer" className="glass flex items-center gap-3 rounded-2xl p-4 transition hover:-translate-y-0.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background"><Github className="h-4 w-4" /></span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">GitHub</p>
                <p className="text-sm font-medium">/giullyagomes</p>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-3xl p-6 md:p-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Nome</span>
              <input
                required
                name="name"
                className="mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-[var(--rose-deep)] focus:ring-2 focus:ring-[var(--rose)]/30"
                placeholder="Seu nome"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</span>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-[var(--rose-deep)] focus:ring-2 focus:ring-[var(--rose)]/30"
                placeholder="voce@email.com"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Assunto</span>
            <input
              name="subject"
              className="mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-[var(--rose-deep)] focus:ring-2 focus:ring-[var(--rose)]/30"
              placeholder="Sobre o que é?"
            />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Mensagem</span>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-none rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-[var(--rose-deep)] focus:ring-2 focus:ring-[var(--rose)]/30"
              placeholder="Conta um pouco sobre o projeto ou oportunidade..."
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-60"
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" /> Aberto no seu cliente de email
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> {loading ? "Enviando..." : "Enviar mensagem"}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}