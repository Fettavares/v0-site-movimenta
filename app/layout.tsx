import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Movimenta+ | Saúde Acessível para Todos',
  description: 'Projeto social focado na promoção da saúde, bem-estar e incentivo à prática de atividades físicas. Participe dos nossos aulões gratuitos!',
  keywords: ['saúde', 'atividade física', 'bem-estar', 'projeto social', 'exercícios', 'qualidade de vida'],
  authors: [{ name: 'Movimenta+' }],
  openGraph: {
    title: 'Movimenta+ | Saúde Acessível para Todos',
    description: 'Projeto social focado na promoção da saúde e bem-estar. Aulões gratuitos, conteúdos online e comunidade ativa.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d8a4e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
