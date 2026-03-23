import { Play, Stretch, Wind, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const videoContent = [
  {
    icon: Stretch,
    title: "Alongamento",
    description: "Exercícios de alongamento para melhorar flexibilidade e aliviar tensões musculares.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Wind,
    title: "Mobilidade",
    description: "Movimentos funcionais que aumentam a amplitude de movimento e preparam o corpo.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Lightbulb,
    title: "Exercícios Leves",
    description: "Atividades de baixo impacto e fácil execução, ideais para começar ou recuperação.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Play,
    title: "Práticas Orientadas",
    description: "Sessões completas com instrutor para orientação correta e motivação constante.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
]

export function ContentSection() {
  return (
    <section id="conteudos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Conteúdos em Vídeo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Exercícios e Orientações Online
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tenha acesso a vídeos de exercícios, orientações e práticas para incentivar uma vida mais ativa, 
            sem sair de casa. Conteúdos criados para todos os níveis de condicionamento físico.
          </p>
        </div>

        {/* Video Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoContent.map((content) => (
            <Card key={content.title} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${content.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <content.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {content.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {content.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-card rounded-3xl border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Por Que Fazer Exercício Online?
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-foreground">Praticidade: treina quando quiser</span>
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-foreground">Segurança: exercícios apropriados para seu nível</span>
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-foreground">Acompanhamento: instruções claras e profissionais</span>
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-foreground">Consistência: mantenha o ritmo entre os aulões</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <Play className="h-20 w-20 text-primary mx-auto mb-4 opacity-50" />
                <p className="text-lg font-semibold text-foreground">
                  Acesse nossos vídeos agora
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
