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

// Foto do trabalho da própria empresa (nada de banco de imagens). Sem foto, o palco mostra a logo na cor da marca.
export interface Foto {
  arquivo: string
  largura: number
  altura: number
  alt: string
  legenda: string
  foco?: string
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
  foto?: Foto
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
    foto: { arquivo: '/fotos/egi-center-valley.jpg', largura: 2000, altura: 1199, alt: 'Entrada do Center Valley, centro comercial da E.G.I, com a fachada vermelha e a caixa-d’água com o logo', legenda: 'Center Valley, centro comercial da E.G.I', foco: '30% 50%' },
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
      'Containers para escritório, almoxarifado, sanitário e cozinha em locação de médio e longo prazo, com entrega e retirada no local e projetos sob medida para obras e indústrias.',
    frentes: ['Escritório', 'Almoxarifado', 'Sanitário', 'Sob medida'],
    url: 'https://egi.rental.grupoaandrade.com.br',
    logo: { arquivo: '/marcas/egi-rental.png', largura: 470, altura: 214 },
    cor: '#597B97',
    contatos: [
      { rotulo: 'WhatsApp (98) 99102-2068', href: 'https://wa.me/5598991022068' },
      { rotulo: 'contato@grupoaandrade.com.br', href: 'mailto:contato@grupoaandrade.com.br' },
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
    foto: { arquivo: '/fotos/exclusiva-mateus-maiobao.jpg', largura: 1385, altura: 792, alt: 'O Supermercado Mateus Maiobão, obra da Exclusiva entregue em 2010, com o estacionamento cheio', legenda: 'Mateus Maiobão, obra da Exclusiva entregue em 2010', foco: '40% 50%' },
    contatos: [
      { rotulo: 'WhatsApp (98) 98481-2793', href: 'https://wa.me/5598984812793' },
      {
        rotulo: 'exclusivaeng@grupoaandrade.com.br',
        href: 'mailto:exclusivaeng@grupoaandrade.com.br',
      },
    ],
  },
  {
    slug: 'energy-e',
    nome: 'Energy-E',
    segmento: 'Energia solar',
    resumo:
      'Quatro usinas solares, as Canis, às margens da BR-222, entre Pindaré-Mirim e Santa Inês, no interior do Maranhão. Entraram em operação em 2025 e foram construídas pela Exclusiva Engenharia.',
    frentes: ['Usinas solares', 'Canis 1, 2, 3 e 5', 'Vale do Pindaré'],
    url: 'https://energy-e.grupoaandrade.com.br',
    logo: { arquivo: '/marcas/energy-e.png', largura: 1420, altura: 505 },
    // Ciano do globo do logo: o verde da Energy-E é quase o mesmo da iParking
    cor: '#00AEEF',
    foto: { arquivo: '/fotos/energy-e-canis.jpg', largura: 1800, altura: 1012, alt: 'As usinas Canis 1, 2 e 3 vistas do alto, com a mata em volta', legenda: 'Usinas Canis 1, 2 e 3, à beira da BR-222', foco: '35% 50%' },
    // Mesmo contato da EGI (decisão de 15/10/2026)
    contatos: [
      { rotulo: 'WhatsApp (98) 98481-2793', href: 'https://wa.me/5598984812793' },
      {
        rotulo: 'egiempreendimentos@grupoaandrade.com.br',
        href: 'mailto:egiempreendimentos@grupoaandrade.com.br',
      },
    ],
  },
  {
    slug: 'iparking',
    nome: 'iParking',
    segmento: 'Estacionamento rotativo',
    resumo:
      'Estacionamento rotativo e mensal no subsolo da Galeria A, no Calhau, com cancela que lê a placa e registra a hora de entrada.',
    frentes: ['Avulso', 'Diária', 'Mensalista'],
    url: 'https://iparking.grupoaandrade.com.br',
    logo: { arquivo: '/marcas/iparking.png', largura: 900, altura: 318 },
    cor: '#019A48',
    contatos: [
      { rotulo: 'WhatsApp (98) 98481-2793', href: 'https://wa.me/5598984812793' },
    ],
  },
]

export function dominio(url: string) {
  return url.replace(/^https?:\/\//, '')
}
