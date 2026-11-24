import { Sparkles, Brain, Users, Layers, GitBranch, TrendingUp, ShieldCheck, Code2 } from "lucide-react";

const items = [
  { icon: Code2, title: "Código limpo & organizado", text: "Legibilidade, padrões consistentes e estrutura que envelhece bem." },
  { icon: Brain, title: "Perfil analítico", text: "Resolução de problemas com clareza, dados e visão sistêmica." },
  { icon: Sparkles, title: "Facilidade de aprendizado", text: "Curva de adaptação rápida a novas linguagens, frameworks e domínios." },
  { icon: Users, title: "Comunicação colaborativa", text: "Documentação clara, code reviews respeitosas e trabalho em equipe." },
  { icon: Layers, title: "Foco em arquitetura backend", text: "Decisões pensando em escala, manutenção e desempenho." },
  { icon: ShieldCheck, title: "Boas práticas", text: "Tratamento de erros, segurança básica, validações e testes." },
  { icon: GitBranch, title: "Versionamento maduro", text: "Fluxos com Git, commits significativos e branches organizadas." },
  { icon: TrendingUp, title: "Crescimento contínuo", text: "Estudo constante de novas tecnologias e tendências de mercado." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--rose-deep)]">05 · Diferenciais</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            O que eu trago para o seu time.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Mais do que tecnologia, atitudes profissionais que sustentam um time que cresce.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-[var(--rose-soft)]/60"
            >
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-foreground text-background transition group-hover:bg-[var(--rose-deep)]">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="font-display text-xl leading-snug">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}