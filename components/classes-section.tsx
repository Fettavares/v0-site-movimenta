import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, Users, ArrowRight, CheckCircle } from "lucide-react"

const benefits = [
  "Atividades para todos os níveis",
  "Profissionais qualificados",
  "Ambiente seguro e acolhedor",
  "Totalmente gratuito",
  "Sorteios e brindes",
  "Música e animação",
]

export function ClassesSection() {
  return (
    <section id="auloes" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Aulões Presenciais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Venha se Exercitar com a Gente!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Todo mês realizamos aulões abertos ao público no Parque das Águas. 
              É a oportunidade perfeita para cuidar da saúde, fazer amigos e se divertir!
            </p>

            {/* Event Details */}
            <div className="bg-muted/50 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-foreground mb-4">Próximo Aulão</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Parque das Águas</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Último sábado do mês</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>8h às 11h</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Aberto para todas as idades</span>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#cadastro">
                Quero Participar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Benefits Card */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-10 text-primary-foreground">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              O que você encontra nos nossos aulões
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-primary-foreground/20">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">
                    A
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center text-primary font-bold text-sm">
                    M
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">
                    J
                  </div>
                </div>
                <p className="text-sm">
                  <span className="font-bold">+50 pessoas</span> já confirmaram presença no próximo aulão!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
