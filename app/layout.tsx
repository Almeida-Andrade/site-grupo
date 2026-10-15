import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import { URL_SITE } from '@/lib/empresas'
import './globals.css'

const fonte = Archivo({
  subsets: ['latin'], variable: '--fonte', display: 'swap', axes: ['wdth'],
})

const TITULO = 'Grupo Almeida Andrade — cinco empresas de São Luís'
const DESCRICAO =
  'O Grupo Almeida Andrade reúne a E.G.I Empreendimentos (locação de imóveis próprios), ' +
  'a EGI Rental (locação de containers), a Exclusiva Engenharia (construção desde 1989), a Energy-E (energia solar) ' +
  'e a iParking (estacionamento), em São Luís — MA.'

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITE),
  title: { default: TITULO, template: '%s · Grupo Almeida Andrade' },
  description: DESCRICAO,
  applicationName: 'Grupo Almeida Andrade',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Grupo Almeida Andrade',
    title: TITULO,
    description: DESCRICAO,
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

// Liga as entradas animadas só quando há script; sem ele, tudo aparece de uma vez.
const LIGA_JS = "document.documentElement.classList.add('js')"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={fonte.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LIGA_JS }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
