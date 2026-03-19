import { Play, FileText, Video, Dumbbell } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const contentTypes = [
  {
    icon: Dumbbell,
    title: "Treinos Simples",
    description: "Exercícios fáceis que você pode fazer em casa, sem equipamentos. Perfeitos para iniciantes!",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: FileText,
    title: "Dicas de Saúde",
    description: "Artigos e orientações sobre alimentação, hidratação e hábitos saudáveis para o dia a dia.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Video,
    title: "Vídeos Curtos",
    description: "Demonstrações rápidas de exercícios e alongamentos para você acompanhar onde estiver.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Play,
    title: "Aulas Gravadas",
    description: "Replay dos nossos aulões para você praticar em casa quando quiser. Sempre disponível!",
    color: "bg-secondary/20 text-secondary-foreground",
  },
]

const tips = [
  {
    title: "Comece Devagar",
    description: "Não tenha pressa! Inicie com exercícios leves e vá aumentando a intensidade aos poucos.",
  },
  {
    title: "Mantenha-se Hidratado",
    description: "Beba água antes, durante e depois dos exercícios. A hidratação é fundamental!",
  },
  {
    title: "Estabeleça uma Rotina",
    description: "Escolha horários fixos para se exercitar. A consistência traz resultados!",
  },
]

export function ContentSection() {
  return (
    <section id="conteudos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Conteúdos Online
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Continue se Movendo em Casa
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Além dos aulões presenciais, oferecemos conteúdos digitais para você manter 
            a atividade física em dia, onde quer que esteja.
          </p>
        </div>

        {/* Content Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contentTypes.map((content) => (
            <Card key={content.title} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${content.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <content.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {content.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {content.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-card rounded-3xl border border-border p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Dicas para Começar Sua Jornada
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div key={tip.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {tip.title}
                </h4>
                <p className="text-muted-foreground">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
