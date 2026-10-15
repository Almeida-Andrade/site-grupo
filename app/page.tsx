import Image from 'next/image'
import logo from '@/public/logo-grupo.png'
import saguao from '@/public/fotos/galeria-a-saguao.jpg'
import fachada from '@/public/fotos/galeria-a-fachada.jpg'
import { Entradas } from '@/components/Entradas'
import { Palco, type Cena } from '@/components/Palco'
import { EMPRESAS, GRUPO, URL_SITE, dominio } from '@/lib/empresas'
import s from './page.module.css'

// O grupo e as empresas ligadas por subOrganization: é o que diz ao Google que os subdomínios são da mesma casa.
const DADOS = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: GRUPO.nome,
  url: URL_SITE,
  logo: `${URL_SITE}/logo-grupo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: GRUPO.endereco,
    addressLocality: GRUPO.cidade,
    addressRegion: GRUPO.uf,
    addressCountry: 'BR',
  },
  subOrganization: EMPRESAS.map((e) => ({
    '@type': 'Organization',
    name: e.nome,
    url: e.url,
    description: e.resumo,
  })),
}

// A ideia da página: o quadro de empresas do saguão da Galeria A, a sede do grupo.
// A coluna da direita é o quadro; a metade fixa da esquerda mostra o trabalho de quem está passando nele.
const CENAS: Cena[] = [
  { id: 'sede', rotulo: 'Saguão da Galeria A, a sede do grupo', foto: { arquivo: saguao.src, alt: '', foco: '50% 40%' } },
  ...EMPRESAS.map((e) => ({
    id: e.slug,
    rotulo: e.foto?.legenda ?? e.nome,
    foto: e.foto ? { arquivo: e.foto.arquivo, alt: '', foco: e.foto.foco } : undefined,
    logo: e.foto ? undefined : e.logo,
    cor: e.cor,
  })),
]

const SEDE = GRUPO.endereco.replace(/.*— Ed\. /, '')

const ordem = (n: number) => ({ '--ordem': n }) as React.CSSProperties

function externo(href: string) {
  return href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}

function Seta({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Inicio() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DADOS) }} />
      <Entradas />

      <div className={s.palcoGrade} id="inicio">
        <Palco cenas={CENAS} className={s.palco}
          classes={{ quadro: s.palcoQuadro, foto: s.palcoFoto, marca: s.palcoMarca, marcaLogo: s.palcoMarcaLogo, legenda: s.palcoLegenda }} />

        <div className={s.coluna}>
          {/* Primeira tela */}
          <header className={s.abertura} data-cena="sede">
            <div className={s.topo}>
              <a href="#inicio" className={s.marca} aria-label={`${GRUPO.nome}, início`}>
                <Image src={logo} alt="" sizes="56px" priority className={s.marcaLogo} />
              </a>
              <nav aria-label="Principal" className={s.nav}>
                <a href="#empresas">Empresas</a>
                <a href="#contato" className={s.navAcao}>Contato</a>
              </nav>
            </div>

            {/* No celular a foto da sede aparece aqui, já que o palco fica só no desktop */}
            <div className={s.aberturaFoto}>
              <Image src={saguao} alt="O saguão da Galeria A: parede escura com plantas, luminárias douradas e o letreiro da Galeria"
                fill priority sizes="100vw" />
            </div>

            <p className={s.aberturaFrase} data-entra>
              Imóveis, containers, construção, energia solar e estacionamento, todos de São Luís.
            </p>
            <h1 className={s.titulo} data-entra style={ordem(1)}>
              Cinco empresas, um&nbsp;só&nbsp;grupo.
            </h1>
          </header>

          {/* Apresentação: a coluna estreita */}
          <section className={s.intro} data-cena="sede" aria-label="Sobre o grupo">
            <p data-entra>
              O {GRUPO.nome} é uma casa de empresas de São Luís. Cada uma tem o seu ofício, o seu site e o seu
              contato.
            </p>
            <p data-entra style={ordem(1)}>
              A Exclusiva Engenharia constrói no Maranhão desde 1989. Levantou a Galeria A, onde fica a sede do
              grupo, e as quatro usinas solares da Energy-E, à beira da BR-222.
            </p>
            <p data-entra style={ordem(2)}>
              A E.G.I aluga imóveis próprios, de galpões a apartamentos. A EGI Rental leva containers prontos
              até a obra. E no subsolo da Galeria A funciona a iParking.
            </p>
          </section>

          {/* O quadro de empresas, como o do saguão */}
          <section id="empresas" className={s.quadroEmpresas} data-cena="sede" aria-labelledby="titulo-quadro">
            <h2 id="titulo-quadro" className={s.quadroTitulo} data-entra>Quadro de empresas</h2>
            <ul className={s.quadroLista}>
              {EMPRESAS.map((e, i) => (
                <li key={e.slug} data-entra style={ordem(i)}>
                  <a href={`#${e.slug}`} className={s.linha} style={{ '--cor': e.cor } as React.CSSProperties}>
                    <span className={s.linhaNome}>{e.nome}</span>
                    <span className={s.linhaSegmento}>{e.segmento}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Uma empresa por vez: o palco troca para o trabalho dela */}
          {EMPRESAS.map((e) => {
            const whatsapp = e.contatos.find((c) => c.href.includes('wa.me'))
            const outros = e.contatos.filter((c) => c !== whatsapp)
            return (
              <article key={e.slug} id={e.slug} data-cena={e.slug} className={s.empresa}
                style={{ '--cor': e.cor } as React.CSSProperties} aria-labelledby={`nome-${e.slug}`}>
                {e.foto && (
                  <div className={s.empresaMidia}>
                    <Image src={e.foto.arquivo} alt={e.foto.alt} fill sizes="100vw" style={{ objectPosition: e.foto.foco }} />
                  </div>
                )}

                <div className={s.empresaLogo} data-entra>
                  <Image src={e.logo.arquivo} alt={`Logo da ${e.nome}`} width={e.logo.largura} height={e.logo.altura}
                    sizes="200px" />
                </div>
                <h2 id={`nome-${e.slug}`} className={s.empresaNome} data-entra style={ordem(1)}>{e.nome}</h2>
                <p className={s.empresaResumo} data-entra style={ordem(2)}>
                  <strong>{e.segmento}.</strong> {e.resumo}
                </p>
                <ul className={s.frentes} aria-label={`O que a ${e.nome} faz`} data-entra style={ordem(3)}>
                  {e.frentes.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div className={s.acoes} data-entra style={ordem(4)}>
                  <a href={e.url} className={s.acaoSite}>
                    <span>Visitar o site<small>{dominio(e.url)}</small></span>
                    <Seta className={s.acaoSeta} />
                  </a>
                  {whatsapp && (
                    <a href={whatsapp.href} {...externo(whatsapp.href)} className={s.acaoWhats}>
                      <span>WhatsApp<small>{whatsapp.rotulo.replace('WhatsApp ', '')}</small></span>
                      <Seta className={s.acaoSeta} />
                    </a>
                  )}
                </div>
                {outros.length > 0 && (
                  <p className={s.outros} data-entra style={ordem(5)}>
                    {outros.map((c, i) => (
                      <span key={c.href}>
                        {i > 0 && ' · '}
                        <a href={c.href} {...externo(c.href)}>{c.rotulo.replace('@', '@​')}</a>
                      </span>
                    ))}
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </div>

      {/* Contato: a fachada da sede com o cartão de visita */}
      <section id="contato" className={s.contato} aria-labelledby="titulo-contato">
        <div className={s.contatoFoto}>
          <Image src={fachada} alt="A Galeria A, sede do grupo, vista da Av. dos Sambaquis: fachada de vidro e palmeiras"
            fill sizes="100vw" />
        </div>
        <div className={s.cartao} data-entra>
          <h2 id="titulo-contato" className={s.cartaoTitulo}>Na {SEDE}</h2>
          <address className={s.cartaoEndereco}>
            {GRUPO.endereco.replace(/ — Ed\. .*/, '')}
            <br />
            {GRUPO.bairro}, {GRUPO.cidade} — {GRUPO.uf}
          </address>
          <ul className={s.cartaoLista} aria-label="WhatsApp de cada empresa">
            {EMPRESAS.map((e) => {
              const w = e.contatos.find((c) => c.href.includes('wa.me'))
              return w ? (
                <li key={e.slug} style={{ '--cor': e.cor } as React.CSSProperties}>
                  <span>{e.nome}</span>
                  <a href={w.href} {...externo(w.href)}>{w.rotulo.replace('WhatsApp ', '')}</a>
                </li>
              ) : null
            })}
          </ul>
          <a href={GRUPO.mapa} {...externo(GRUPO.mapa)} className={s.cartaoBotao}>Abrir no mapa</a>
        </div>
      </section>

      {/* Rodapé: foto de um lado, os sites do outro */}
      <footer className={s.rodape}>
        <div className={s.rodapeFoto}>
          <Image src={saguao} alt="" fill sizes="(max-width: 860px) 100vw, 50vw" />
        </div>
        <div className={s.rodapeConteudo}>
          <Image src={logo} alt={GRUPO.nome} sizes="72px" className={s.rodapeLogo} />
          <nav aria-label="Sites das empresas" className={s.rodapeSites}>
            {EMPRESAS.map((e) => (
              <a key={e.slug} href={e.url} style={{ '--cor': e.cor } as React.CSSProperties}>{e.nome}</a>
            ))}
          </nav>
          <div className={s.rodapeBlocos}>
            <p>
              {GRUPO.endereco}
              <br />
              {GRUPO.bairro}, {GRUPO.cidade} — {GRUPO.uf}
            </p>
            <p>
              <a href="#contato">WhatsApp de cada empresa</a>
              <br />
              <a href={GRUPO.mapa} {...externo(GRUPO.mapa)}>Abrir no mapa</a>
            </p>
          </div>
          <p className={s.legal}>© {new Date().getFullYear()} {GRUPO.nome}</p>
        </div>
      </footer>
    </>
  )
}
