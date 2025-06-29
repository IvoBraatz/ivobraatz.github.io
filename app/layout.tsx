import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Fira_Code } from 'next/font/google'
import './globals.scss'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap'
})

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Netto.codes - Código com propósito. Soluções que conectam.',
  description: 'Desenvolvedor Full Stack especialista em soluções digitais personalizadas. Ivo Netto - 22 anos de experiência em tecnologia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  )
} 