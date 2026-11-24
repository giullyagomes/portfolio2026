const items = [
  {
    period: "Nov/2025 — Jun/2026",
    title: "Estagiária em Desenvolvimento de Sistemas Web",
    org: "UNICAP · Universidade Católica de Pernambuco",
    text: "Desenvolvimento e manutenção de sistemas web, trabalhando com Java, Spring Boot, APIs REST e SQL Server. Participei da implementação de funcionalidades, integração com banco de dados, testes e correção de problemas. Também tive contato com integrações ao ERP TOTVS, utilizando consultas SQL e dados em XML e JSON.",
  },
  {
    period: "Ago/2025 — Out/2025",
    title: "Estagiária de Suporte de TI",
    org: "UNICAP · Universidade Católica de Pernambuco",
    text: "Primeira experiência profissional na área de tecnologia, com atuação em suporte de TI e contato com as demandas e rotinas internas da instituição.",
  },
  {
    period: "2024 — 2026",
    title: "Tecnologia em Sistemas para Internet",
    org: "UNICAP · Formação concluída",
    text: "Formação voltada ao desenvolvimento de software, com estudos em programação, orientação a objetos, desenvolvimento web, banco de dados e engenharia de software.",
  },
  {
    period: "2025 — Presente",
    title: "Desenvolvedora de Software Freelancer",
    org: "Projetos para clientes",
    text: "Atuação como desenvolvedora freelance, trabalhando em projetos variados para diferentes clientes, com foco em soluções web e manutenção de sistemas.",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--rose-deep)]">03 · Trajetória</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Da formação acadêmica à experiência profissional, cada etapa
            contribuiu para minha forma de aprender e desenvolver software.
          </h2>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent"
          />
          <ul className="space-y-10 md:space-y-16">
            {items.map((it, i) => (
              <li
                key={it.title}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:col-start-2" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="absolute left-[7px] md:left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-[var(--rose-deep)]"
                />
                <div
                  className={`pl-10 md:pl-0 ${
                    i % 2 === 1 ? "md:pl-12" : "md:pr-12 md:text-right"
                  }`}
                >
                  <div className="glass inline-block rounded-2xl p-6 text-left transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--rose-deep)]">
                      {it.period}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-snug">{it.title}</h3>
                    <p className="mt-1 text-sm text-foreground/70">{it.org}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {it.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}