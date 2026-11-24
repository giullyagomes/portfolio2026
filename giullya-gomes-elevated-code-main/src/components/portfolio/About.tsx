import { Music, BookOpen, Flower2, Film } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--rose-deep)]">01 · Sobre</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Tecnologia com <span className="italic">propósito</span>, código com cuidado.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm">
            {[
              { icon: Music, label: "Música" },
              { icon: BookOpen, label: "Livros" },
              { icon: Flower2, label: "Flores" },
              { icon: Film, label: "Cinema" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="glass flex items-center gap-3 rounded-2xl p-3">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-[var(--rose-soft)] text-[var(--rose-deep)]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm text-foreground/80">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
          <p>
            Sou <span className="text-foreground font-medium">desenvolvedora Full Stack</span> com maior interesse em desenvolvimento backend.{" "}
            <span className="text-foreground font-medium">Trabalho principalmente com Java e Spring Boot, e tenho experiência na construção de aplicações web, 
              APIs REST e integração com bancos de dados.</span>
          </p>
          <p>
            Durante minha experiência com desenvolvimento de sistemas, tive contato com diferentes etapas do processo: 
            entender necessidades, implementar funcionalidades, testar, corrigir problemas e manter aplicações existentes. 
            Isso me ensinou que desenvolver software vai além de fazer o código funcionar: é importante entender o problema e pensar em quem vai utilizar e manter aquela solução.
          </p>
          <p>
            Gosto de aprender, explorar novas tecnologias e entender como as coisas funcionam por trás da interface. 
            Também valorizo a organização do código, a colaboração e a troca de ideias durante o desenvolvimento.
          </p>
          <p> 
            Fora da programação, gosto de música, livros, cinema, esportes e origami. 
            São interesses diferentes, mas todos alimentam minha curiosidade e meu lado criativo.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Backend Development", "Código organizado", "APIs REST", "Visão de produto"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-foreground/70 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}