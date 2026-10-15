'use client'

import { useEffect, useRef } from 'react'
import { Simbolo } from './Simbolo'

// O "A" do logo no fundo azul, seguindo o mouse com atraso (cada quadro anda 8% do caminho que falta).
// Sem mouse (celular) ou com "reduzir movimento" ligado, ele fica parado onde o CSS o coloca.
export function FundoA({ classes }: { classes: { camada: string; palco: string; letra: string } }) {
  const letra = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = letra.current
    if (!el) return
    if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let alvoX = innerWidth * 0.74
    let alvoY = innerHeight * 0.58
    let x = alvoX
    let y = alvoY
    let quadro = 0

    const passo = () => {
      x += (alvoX - x) * 0.08
      y += (alvoY - y) * 0.08
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -50%)`
      // Para de redesenhar quando chega perto do mouse: nada roda com a página parada
      quadro = Math.abs(alvoX - x) + Math.abs(alvoY - y) > 0.5 ? requestAnimationFrame(passo) : 0
    }
    const segue = (e: PointerEvent) => {
      alvoX = e.clientX
      alvoY = e.clientY
      if (!quadro) quadro = requestAnimationFrame(passo)
    }

    addEventListener('pointermove', segue, { passive: true })
    return () => {
      removeEventListener('pointermove', segue)
      cancelAnimationFrame(quadro)
    }
  }, [])

  return (
    <div className={classes.camada} aria-hidden="true">
      <div className={classes.palco}>
        <div ref={letra} className={classes.letra}>
          <Simbolo chapado />
        </div>
      </div>
    </div>
  )
}
