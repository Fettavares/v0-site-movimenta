import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const events = [
  {
    title: "Aulão de Mobilidade e Alongamento",
    date: "12 de abril",
    time: "8h",
    location: "Parque das Águas – Resende",
  },
  {
    title: "Aulão Funcional para Iniciantes",
    date: "20 de abril",
    time: "9h",
    location: "Parque das Águas – Resende",
  },
  {
    title: "Aulão Saúde em Movimento",
    date: "27 de abril",
    time: "8h30",
    location: "Parque das Águas – Resende",
  },
]

export function ClassesSection() {
  return (
    <section id="auloes" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Eventos Presenciais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Próximos Aulões
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Participe dos nossos aulões gratuitos e se mova com a comunidade. 
            Todos os eventos são abertos e gratuitos para toda a população de Resende.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {events.map((event, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 overflow-hidden flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold text-foreground mb-6 leading-tight">
                  {event.title}
                </h3>
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase">Data</p>
                      <p className="text-foreground font-medium">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase">Horário</p>
                      <p className="text-foreground font-medium">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase">Local</p>
                      <p className="text-foreground font-medium">{event.location}</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="#cadastro">
                    Confirmar Presença
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                O Que Encontra nos Aulões?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-foreground">Atividades para todos os níveis</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-foreground">Profissionais qualificados</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-foreground">Ambiente seguro e acolhedor</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-foreground">Totalmente gratuito</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-foreground">Sorteios e brindes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-foreground">Música e animação</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Por Que Participar?
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Os aulões são mais do que exercício. É oportunidade de conhecer pessoas que compartilham os mesmos objetivos, criar vínculos comunitários e celebrar cada progresso juntos.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Todos são bem-vindos, independente da idade ou nível de condicionamento físico. O importante é se mover e cuidar da saúde.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#cadastro">
                  Quero Participar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
