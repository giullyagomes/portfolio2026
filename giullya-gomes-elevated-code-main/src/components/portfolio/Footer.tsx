import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl">
            giullya<span className="text-[var(--rose-deep)]">.</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground italic">
            Tecnologia com cuidado. Código com propósito.
          </p>
        </div>
        <div className="flex items-center gap-4 text-foreground/70">
          <a aria-label="GitHub" href="https://github.com/giullyagomes" target="_blank" rel="noreferrer" className="transition hover:text-[var(--rose-deep)]">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com/in/giullyagomes" target="_blank" rel="noreferrer" className="transition hover:text-[var(--rose-deep)]">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="mailto:contato@giullyagomes.dev" className="transition hover:text-[var(--rose-deep)]">
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Giullya Gomes. Feito com cuidado.
        </p>
      </div>
    </footer>
  );
}