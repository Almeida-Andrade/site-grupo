import Image from 'next/image'
import logo from '@/public/logo-grupo.png'
import { Simbolo } from '@/components/Simbolo'
import { EMPRESAS, GRUPO, URL_SITE, dominio } from '@/lib/empresas'
import estilos from './page.module.css'

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

function externo(href: string) {
  return href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}

export default function Inicio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DADOS) }}
      />

      <header className={estilos.cabecalho}>
        <a href="#inicio" className={estilos.marca} aria-label={GRUPO.nome}>
          <Image src={logo} alt="" className={estilos.marcaLogo} sizes="120px" priority />
        </a>
        <nav aria-label="Principal" className={estilos.nav}>
          <a href="#empresas">Empresas</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main id="inicio">
        <section className={estilos.abertura} aria-labelledby="titulo">
          <Simbolo className={estilos.aberturaSimbolo} chapado />
          <div className={estilos.aberturaTexto}>
            <h1 id="titulo" className={estilos.titulo}>
              Imóveis, containers e engenharia para o Maranhão.
            </h1>
            <p className={estilos.lead}>
              O Grupo Almeida Andrade reúne quatro empresas de São Luís: uma que aluga os próprios
              imóveis, uma que leva containers prontos até a obra, uma que constrói no estado desde
              1989 e o estacionamento da Galeria A.
            </p>
            <ul className={estilos.atalhos}>
              {EMPRESAS.map((e) => (
                <li key={e.slug}>
                  <a href={`#${e.slug}`} style={{ '--cor': e.cor } as React.CSSProperties}>
                    {e.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="empresas" className={estilos.empresas} aria-labelledby="titulo-empresas">
          <h2 id="titulo-empresas" className={estilos.secaoTitulo}>
            As empresas do grupo
          </h2>

          <ol className={estilos.lista}>
            {EMPRESAS.map((e, i) => (
              <li
                key={e.slug}
                id={e.slug}
                className={estilos.empresa}
                style={{ '--cor': e.cor } as React.CSSProperties}
              >
                <div className={estilos.logo}>
                  <Image
                    src={e.logo.arquivo}
                    alt={`Logo da ${e.nome}`}
                    width={e.logo.largura}
                    height={e.logo.altura}
                    sizes="(max-width: 760px) 60vw, 260px"
                  />
                </div>

                <div className={estilos.empresaTexto}>
                  <p className={estilos.ordem}>
                    <span>0{i + 1}</span> {e.segmento}
                  </p>
                  <h3 className={estilos.empresaNome}>{e.nome}</h3>
                  <p className={estilos.resumo}>{e.resumo}</p>
                  <ul className={estilos.frentes} aria-label={`O que a ${e.nome} faz`}>
                    {e.frentes.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a className={estilos.visitar} href={e.url}>
                    Conhecer a {e.nome}
                    <span className={estilos.dominio}>{dominio(e.url)} →</span>
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contato" className={estilos.contato} aria-labelledby="titulo-contato">
          <div className={estilos.contatoTopo}>
            <h2 id="titulo-contato" className={estilos.secaoTitulo}>
              Fale com a empresa certa
            </h2>
            <address className={estilos.sede}>
              {GRUPO.endereco}
              <br />
              {GRUPO.bairro}, {GRUPO.cidade} — {GRUPO.uf}
              <br />
              <a href={GRUPO.mapa} {...externo(GRUPO.mapa)}>
                Abrir no Google Maps →
              </a>
            </address>
          </div>

          <ul className={estilos.contatos}>
            {EMPRESAS.map((e) => (
              <li key={e.slug} style={{ '--cor': e.cor } as React.CSSProperties}>
                <h3>{e.nome}</h3>
                <p>{e.segmento}</p>
                <ul>
                  {e.contatos.map((c) => (
                    <li key={c.href}>
                      <a href={c.href} {...externo(c.href)}>
                        {c.rotulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className={estilos.rodape}>
        <div className={estilos.rodapeMarca}>
          <Image src={logo} alt={GRUPO.nome} className={estilos.rodapeLogo} sizes="64px" />
          <span>
            © {new Date().getFullYear()} {GRUPO.nome} · {GRUPO.cidade} — {GRUPO.uf}
          </span>
        </div>
        <nav aria-label="Sites das empresas" className={estilos.rodapeSites}>
          {EMPRESAS.map((e) => (
            <a key={e.slug} href={e.url}>
              {e.nome}
            </a>
          ))}
        </nav>
      </footer>
    </>
  )
}
