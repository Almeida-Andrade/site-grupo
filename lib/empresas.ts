export const URL_SITE = process.env.NEXT_PUBLIC_URL_SITE
  ? process.env.NEXT_PUBLIC_URL_SITE
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000'

export const GRUPO = {
  nome: 'Grupo Almeida Andrade',
  cidade: 'São Luís',
  uf: 'MA',
  endereco: 'Av. dos Sambaquis, 33 — Ed. Galeria A',
  bairro: 'Calhau',
  mapa: 'https://maps.app.goo.gl/eQFgEmat3vfh1Wz97',
}

export interface Contato {
  rotulo: string
  href: string
}

export interface Empresa {
  slug: string
  nome: string
  segmento: string
  resumo: string
  frentes: string[]
  url: string
  logo: { arquivo: string; largura: number; altura: number }
  cor: string
  contatos: Contato[]
}

// Contatos copiados dos sites de cada empresa: número mudou lá, muda aqui.
export const EMPRESAS: Empresa[] = [
  {
    slug: 'egi',
    nome: 'E.G.I Empreendimentos',
    segmento: 'Locação de imóveis próprios',
    resumo:
      'Portfólio próprio de galpões, salas comerciais, lojas e apartamentos para locação em São Luís, São José de Ribamar e no interior do Maranhão, administrado pela própria empresa.',
    frentes: ['Centros comerciais', 'Galpões', 'Salas comerciais', 'Residenciais'],
    url: 'https://egi.grupoaandrade.com.br',
    logo: { arquivo: '/marcas/egi.png', largura: 1608, altura: 549 },
    cor: '#0A2BE0',
    contatos: [
      { rotulo: 'WhatsApp (98) 98481-2793', href: 'https://wa.me/5598984812793' },
      {
        rotulo: 'egiempreendimentos@grupoaandrade.com.br',
        href: 'mailto:egiempreendimentos@grupoaandrade.com.br',
      },
    ],
  },
  {
    slug: 'egi-rental',
    nome: 'EGI Rental',
    segmento: 'Locação de containers',
    resumo:
      'Containers para escritório, almoxarifado, sanitário e cozinha em locação de curto, médio e longo prazo, com entrega e retirada no local e projetos sob medida para obras e indústrias.',
    frentes: ['Escritório', 'Almoxarifado', 'Sanitário', 'Sob medida'],
    url: 'https://egi.rental.grupoaandrade.com.br',
    logo: { arquivo: '/marcas/egi-rental.png', largura: 470, altura: 214 },
    cor: '#597B97',
    contatos: [
      { rotulo: 'WhatsApp (98) 99102-2068', href: 'https://wa.me/5598991022068' },
      { rotulo: 'contato@egirental.com.br', href: 'mailto:contato@egirental.com.br' },
      { rotulo: '@egi.rental', href: 'https://www.instagram.com/egi.rental' },
    ],
  },
  {
    slug: 'exclusiva',
    nome: 'Exclusiva Engenharia',
    segmento: 'Construção e incorporação',
    resumo:
      'Construção, incorporação e obras de grande porte no Maranhão desde 1989: centros comerciais, galpões, escolas e residenciais, do projeto à entrega.',
    frentes: ['Obras comerciais', 'Galpões', 'Residenciais', 'Incorporação'],
    url: 'https://exclusiva.grupoaandrade.com.br',
    logo: { arquivo: '/marcas/exclusiva.png', largura: 274, altura: 292 },
    cor: '#C11F22',
    contatos: [
      { rotulo: 'WhatsApp (98) 98481-2793', href: 'https://wa.me/5598984812793' },
      {
        rotulo: 'exclusivaeng@grupoaandrade.com.br',
        href: 'mailto:exclusivaeng@grupoaandrade.com.br',
      },
    ],
  },
]

export function dominio(url: string) {
  return url.replace(/^https?:\/\//, '')
}
