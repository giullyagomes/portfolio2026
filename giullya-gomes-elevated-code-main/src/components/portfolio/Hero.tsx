import { Github, Linkedin, Mail, ArrowDown, Download, FolderGit2 } from "lucide-react";
import heroImg from "@/assets/foto-formatura.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] -z-10 opacity-60 blur-3xl animate-float"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--rose) 55%, transparent), transparent)",
          animation: "blob 14s ease-in-out infinite, float 9s ease-in-out infinite",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--rose-deep)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--rose-deep)]" />
            </span>
            Disponível para novas oportunidades projetos freelance
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem] animate-fade-in-up">
            Giullya
            <br />
            <span className="italic text-gradient">Gomes</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-in-up delay-200">
            <span className="text-foreground font-medium">Full Stack Developer</span> com experiência
            no desenvolvimento de aplicações web, APIs REST e integração com bancos de dados. 
            Trabalho principalmente com Java e Spring Boot, mas também tenho experiência com desenvolvimento front-end. 
            Gosto de transformar necessidades reais em soluções funcionais, pensando tanto na experiência de quem usa quanto na qualidade do código.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-in-up delay-300">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              <FolderGit2 className="h-4 w-4" />
              Ver projetos
            </a>
            <a
              href="/cv-giullya-gomes.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:border-[var(--rose-deep)]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              Vamos conversar →
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-foreground/70 animate-fade-in-up delay-500">
            <a aria-label="GitHub" href="https://github.com/giullyagomes" target="_blank" rel="noreferrer" className="transition hover:text-[var(--rose-deep)] hover:-translate-y-0.5">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com/in/giullyagomes" target="_blank" rel="noreferrer" className="transition hover:text-[var(--rose-deep)] hover:-translate-y-0.5">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="mailto:contato@giullyagomes.dev" className="transition hover:text-[var(--rose-deep)] hover:-translate-y-0.5">
              <Mail className="h-5 w-5" />
            </a>
            <span className="ml-2 h-px w-16 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Recife · BR
            </span>
          </div>
        </div>

        <div className="relative animate-fade-in delay-300">
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div
              aria-hidden
              className="absolute inset-0 -m-6 rounded-[3rem] opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--rose) 40%, transparent), transparent 60%)",
                animation: "blob 16s ease-in-out infinite",
              }}
            />
            <div className="glass relative h-full w-full overflow-hidden rounded-[2.25rem] shadow-[var(--shadow-elegant)]">
              <img
                src={heroImg}
                alt="Giullya Gomes, desenvolvedora de software"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating tag */}
            <div className="absolute -left-6 bottom-10 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] animate-fade-in-up delay-500">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Tecnologias
              </p>
              <p className="text-sm font-medium">Java · Spring Boot · SQL</p>
            </div>
            <div className="absolute -right-4 top-8 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)]" style={{ animation: "float 2s ease-in-out" }}>
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Atuação</p>
              <p className="text-sm font-medium">Backend · Full Stack</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para Sobre"
        className="mt-20 mx-auto hidden md:flex w-fit items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground"
      >
        scroll <ArrowDown className="h-3 w-3 animate-bounce" />
      </a>
    </section>
  );
}