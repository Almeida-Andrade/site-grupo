import { useId } from 'react'

// O "A" do logo do grupo em vetor, nas coordenadas do arquivo original (1413 × 1060).
export const PERNA_ESQUERDA = '468,2 655,2 453,571 800,571 847,702 404,702 349,862 158,862'
export const PERNA_DIREITA = '715,2 902,2 1211,862 1021,862'
export const FAIXA = '694,2 715,2 798,240 694,527 507,527'
export const CAIXA = '158 2 1053 860'

export function Simbolo({ className, chapado }: { className?: string; chapado?: boolean }) {
  const id = useId()
  const tinta = chapado ? 'currentColor' : `url(#${id})`
  return (
    <svg className={className} viewBox={CAIXA} aria-hidden>
      {!chapado && (
        <defs>
          <linearGradient id={id} x1="158" x2="1211" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#273A90" />
            <stop offset="0.6" stopColor="#33365C" />
            <stop offset="1" stopColor="#283A90" />
          </linearGradient>
        </defs>
      )}
      <polygon fill={tinta} points={PERNA_ESQUERDA} />
      <polygon fill={tinta} points={PERNA_DIREITA} />
      <polygon fill={chapado ? 'currentColor' : '#9A97C8'} points={FAIXA} />
    </svg>
  )
}
