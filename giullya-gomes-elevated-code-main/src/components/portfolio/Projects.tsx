import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

type Cat = "Todos" | "Backend" | "Full Stack" | "APIs" | "Banco de Dados" | "Estudos";

const projects: { title: string; desc: string; tech: string[]; cat: Exclude<Cat, "Todos">; gradient: string; github: string; demo?: string }[] = [
  {
    title: "API de Gestão Financeira",
    desc: "API REST robusta para controle de receitas e despesas, com autenticação JWT, paginação e relatórios.",
    tech: ["Java", "Spring Boot", "JPA", "SQL Server"],
    cat: "Backend",
    gradient: "from-[#E8B4C7] to-[#D99AAF]",
    github: "https://github.com/",
  },
  {
    title: "Plataforma de Biblioteca Digital",
    desc: "Sistema full stack para empréstimo de livros, com painel administrativo e fluxo de reservas.",
    tech: ["Spring Boot", "React", "PostgreSQL", "Docker"],
    cat: "Full Stack",
    gradient: "from-[#F6EAF0] to-[#E8B4C7]",
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Microsserviço de Notificações",
    desc: "Serviço desacoplado para envio de e-mails e webhooks, preparado para escalar horizontalmente.",
    tech: ["Java", "Spring", "Docker", "Linux"],
    cat: "APIs",
    gradient: "from-[#1f1f23] to-[#3a3a40]",
    github: "https://github.com/",
  },
  {
    title: "Modelagem & PL/SQL",
    desc: "Modelagem relacional avançada com procedures, triggers e otimização de queries em SQL Server.",
    tech: ["SQL", "PL/SQL", "MS SQL Server"],
    cat: "Banco de Dados",
    gradient: "from-[#D99AAF] to-[#1f1f23]",
    github: "https://github.com/",
  },
  {
    title: "Portfolio CMS de estudos",
    desc: "Pequeno CMS para organizar anotações técnicas, com tags, busca e markdown.",
    tech: ["React", "Node", "SQLite"],
    cat: "Estudos",
    gradient: "from-[#F6EAF0] to-[#D99AAF]",
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Auth Service",
    desc: "Serviço de autenticação reutilizável com refresh tokens, RBAC e cobertura de testes.",
    tech: ["Spring Security", "JWT", "JUnit"],
    cat: "Backend",
    gradient: "from-[#3a3a40] to-[#E8B4C7]",
    github: "https://github.com/",
  },
];

const cats: Cat[] = ["Todos", "Backend", "Full Stack", "APIs", "Banco de Dados", "Estudos"];

export function Projects() {
  const [active, setActive] = useState<Cat>("Todos");
  const filtered = active === "Todos" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projetos" className="relative py-24 md:py-32 bg-[var(--rose-soft)]/40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--rose-deep)]">04 · Projetos</p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              Construções selecionadas.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  active === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background/60 text-foreground/70 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="group glass relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                className={`relative aspect-[16/10] w-full bg-gradient-to-br ${p.gradient} overflow-hidden`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, white 0, transparent 35%), radial-gradient(circle at 70% 70%, white 0, transparent 30%)",
                  }}
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur">
                  {p.cat}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border/70 bg-background/70 px-2 py-0.5 text-[11px] text-foreground/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-border/50">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-[var(--rose-deep)]"
                  >
                    <Github className="h-3.5 w-3.5" /> Código
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background transition hover:opacity-90"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}