"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Fale Conosco
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tem alguma dúvida ou sugestão? Queremos ouvir você! 
              Entre em contato por uma de nossas redes ou envie uma mensagem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Nossas Redes
              </h3>
              <a
                href="https://www.instagram.com/projeto_movimentamais/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card transition-colors hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200"
              >
                <Instagram className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-sm text-muted-foreground">@projeto_movimentamais</p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-3xl border border-border p-8 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Obrigado pelo contato! Responderemos em breve.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Enviar nova mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-foreground">
                      Nome
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-foreground">
                      E-mail
                    </Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Mensagem
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Escreva sua mensagem..."
                      required
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Enviar Mensagem
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
