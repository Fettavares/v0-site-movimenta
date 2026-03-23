import Image from "next/image"
import Link from "next/link"
import { Instagram, Heart } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#auloes", label: "Aulões" },
  { href: "#conteudos", label: "Conteúdos" },
  { href: "#impacto", label: "Impacto" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Movimenta+ Logo"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-background/70 max-w-md mb-6">
              Projeto social dedicado a promover saúde e bem-estar através da atividade física. 
              Acreditamos que todos merecem acesso a uma vida mais saudável.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/projeto_movimentamais/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-background/70">
              <a
                href="https://www.instagram.com/projeto_movimentamais/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-background transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @projeto_movimentamais
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              {currentYear} Movimenta+. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              Feito com <Heart className="h-4 w-4 text-red-400 fill-red-400" /> para a comunidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
