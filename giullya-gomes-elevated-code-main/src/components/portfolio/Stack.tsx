import { Server, Code2, Database, Wrench, Cloud } from "lucide-react";

const groups = [
  {
    icon: Server,
    title: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "JPA / Hibernate"],
  },
  {
    icon: Code2,
    title: "Frontend",
    items: ["JavaScript", "HTML5", "CSS3", "React", "TypeScript", "Angular"],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    items: ["SQL", "PL/SQL", "Microsoft SQL Server"],
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    items: ["Git", "GitHub", "VS Code", "IntelliJ"],
  },
  {
    icon: Cloud,
    title: "DevOps",
    items: ["Docker", "Linux", "CI/CD básicas"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative py-24 md:py-32 bg-[var(--rose-soft)]/40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--rose-deep)]">02 · Stack</p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              Ferramentas que <span className="italic">domino</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="group glass relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  background:
                    "radial-gradient(closest-side, color-mix(in oklab, var(--rose) 60%, transparent), transparent)",
                }}
              />
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-foreground text-background">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="font-display text-2xl">{title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-foreground/80"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="glass rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--rose-deep)]">
                Atualmente estudando
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug">
                Arquitetura de microsserviços, mensageria & boas práticas de design de APIs.
              </h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Kafka", "RabbitMQ", "Clean Architecture", "Testes"].map((t) => (
                <span key={t} className="rounded-full bg-foreground px-3 py-1 text-xs text-background">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}