export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
              Sobre o Projeto Movimenta+
            </h2>
          </div>

          {/* Main Content */}
          <div className="space-y-8 mb-16">
            <div>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                O Projeto Movimenta+ é uma iniciativa que busca incentivar e promover a prática de atividades físicas para toda a população da cidade de Resende.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                A proposta nasce do entendimento de que o movimento é essencial para a saúde, o bem-estar e a qualidade de vida. Por isso, o projeto é pensado para atender pessoas de todas as idades e níveis de condicionamento físico, tornando a atividade física mais acessível, inclusiva e presente no dia a dia da população.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Mais do que estimular o exercício, o Movimenta+ busca criar uma cultura de cuidado com o corpo e com a saúde, mostrando que pequenas mudanças de hábito podem gerar grandes impactos na vida das pessoas.
              </p>
            </div>

            {/* Objetivo Card */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 mt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Objetivo
              </h3>
              <p className="text-lg leading-relaxed text-foreground">
                Incentivar a população a adotar um estilo de vida mais ativo, promovendo saúde, prevenção de doenças e melhoria da qualidade de vida por meio da prática regular de atividades físicas.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center bg-card rounded-2xl border border-border p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground text-sm md:text-base">Participantes</p>
            </div>
            <div className="text-center bg-card rounded-2xl border border-border p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24</div>
              <p className="text-muted-foreground text-sm md:text-base">Aulões Realizados</p>
            </div>
            <div className="text-center bg-card rounded-2xl border border-border p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
              <p className="text-muted-foreground text-sm md:text-base">Meses de Atividade</p>
            </div>
            <div className="text-center bg-card rounded-2xl border border-border p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground text-sm md:text-base">Gratuito</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
