import { Target, Heart, TrendingUp, Users } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Nossa Missão",
    description: "Incentivar a prática de atividade física e promover qualidade de vida para todas as pessoas, independente da idade ou condição física.",
  },
  {
    icon: Heart,
    title: "Saúde para Todos",
    description: "Oferecemos atividades gratuitas e acessíveis, combatendo o sedentarismo e prevenindo doenças crônicas na comunidade.",
  },
  {
    icon: TrendingUp,
    title: "Evolução Constante",
    description: "Acompanhamos o progresso de cada participante, celebrando cada conquista no caminho para uma vida mais saudável.",
  },
  {
    icon: Users,
    title: "Comunidade Unida",
    description: "Criamos um ambiente acolhedor onde todos se apoiam mutuamente, tornando a jornada mais leve e prazerosa.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Sobre o Projeto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            O que é o Movimenta+?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos um projeto social dedicado a transformar vidas através do movimento. 
            Acreditamos que a atividade física é um direito de todos e trabalhamos para 
            torná-la acessível à nossa comunidade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Participantes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24</div>
            <p className="text-muted-foreground">Aulões Realizados</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
            <p className="text-muted-foreground">Meses de Atividade</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">Gratuito</p>
          </div>
        </div>
      </div>
    </section>
  )
}
