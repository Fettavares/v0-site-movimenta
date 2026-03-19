import { Target, Shield, Globe, TrendingDown, Activity, Accessibility } from "lucide-react"

const odsGoals = [
  {
    icon: Activity,
    meta: "Meta 3.4",
    title: "Prevenção de Doenças",
    description: "Reduzir em um terço a mortalidade prematura por doenças não transmissíveis através de prevenção e tratamento.",
  },
  {
    icon: Accessibility,
    meta: "Meta 3.8",
    title: "Acesso à Saúde",
    description: "Atingir a cobertura universal de saúde, incluindo o acesso a serviços de saúde essenciais de qualidade.",
  },
]

const impacts = [
  {
    icon: TrendingDown,
    title: "Redução do Sedentarismo",
    description: "Promovemos atividade física regular para combater o sedentarismo na comunidade.",
  },
  {
    icon: Shield,
    title: "Prevenção de Doenças",
    description: "Exercícios regulares ajudam a prevenir diabetes, hipertensão e doenças cardíacas.",
  },
  {
    icon: Globe,
    title: "Acesso Gratuito",
    description: "Todas as nossas atividades são gratuitas, garantindo acesso universal à saúde.",
  },
]

export function ImpactSection() {
  return (
    <section id="impacto" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            ODS e Impacto Social
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Construindo um Futuro mais Saudável
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O Movimenta+ está alinhado com os Objetivos de Desenvolvimento Sustentável da ONU, 
            especialmente o ODS 3 - Saúde e Bem-Estar.
          </p>
        </div>

        {/* ODS 3 Card */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-primary-foreground mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                <Target className="h-12 w-12 md:h-16 md:w-16" />
              </div>
            </div>
            <div>
              <span className="inline-block bg-primary-foreground/20 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                ODS 3
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Saúde e Bem-Estar
              </h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Assegurar uma vida saudável e promover o bem-estar para todas e todos, em todas as idades.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {odsGoals.map((goal) => (
              <div 
                key={goal.meta}
                className="bg-primary-foreground/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <goal.icon className="h-6 w-6 text-secondary" />
                  <span className="font-bold text-secondary">{goal.meta}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{goal.title}</h4>
                <p className="text-primary-foreground/80">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Grid */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            Nosso Impacto na Comunidade
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact) => (
              <div 
                key={impact.title}
                className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <impact.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {impact.title}
                </h4>
                <p className="text-muted-foreground">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
