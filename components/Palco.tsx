'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

// O palco: a metade fixa da página. Mostra a foto da cena que está na coluna de leitura
// (cada bloco marcado com data-cena) e troca em fade quando outra cena chega ao meio da tela.
export interface Cena {
  id: string
  rotulo: string
  foto?: { arquivo: string; alt: string; foco?: string }
  logo?: { arquivo: string; largura: number; altura: number }
  cor?: string
}

export function Palco({ cenas, className, classes }: {
  cenas: Cena[]
  className?: string
  classes: { quadro: string; foto: string; marca: string; marcaLogo: string; legenda: string }
}) {
  const [ativa, setAtiva] = useState<string | undefined>(cenas[0]?.id)

  useEffect(() => {
    const alvos = document.querySelectorAll<HTMLElement>('[data-cena]')
    if (!('IntersectionObserver' in window)) return
    // A cena ativa é a que cruza a faixa do meio da tela.
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) setAtiva((e.target as HTMLElement).dataset.cena)
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    alvos.forEach((a) => obs.observe(a))
    return () => obs.disconnect()
  }, [])

  return (
    <div className={className} aria-hidden="true">
      <div className={classes.quadro}>
        {cenas.map((c, i) => (
          <div key={c.id} className={c.foto ? classes.foto : classes.marca} data-ativa={c.id === ativa ? 'sim' : 'nao'}
            style={c.cor ? ({ '--cor': c.cor } as React.CSSProperties) : undefined}>
            {c.foto ? (
              <Image src={c.foto.arquivo} alt="" fill priority={i === 0} loading={i === 0 ? undefined : 'eager'} sizes="(max-width: 860px) 100vw, 47vw"
                style={{ objectPosition: c.foto.foco ?? '50% 50%' }} />
            ) : c.logo ? (
              <Image src={c.logo.arquivo} alt="" width={c.logo.largura} height={c.logo.altura}
                sizes="30vw" loading="eager" className={classes.marcaLogo} />
            ) : null}
          </div>
        ))}
        <p className={classes.legenda}>{cenas.find((c) => c.id === ativa)?.rotulo}</p>
      </div>
    </div>
  )
}
