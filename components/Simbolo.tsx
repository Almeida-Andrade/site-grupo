// O "A" do logo do grupo redesenhado em vetor: duas pernas e a barra em tinta, a faixa interna em lavanda.
export function Simbolo({ className, titulo }: { className?: string; titulo?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 340 270"
      role={titulo ? 'img' : undefined}
      aria-hidden={titulo ? undefined : true}
      aria-label={titulo}
    >
      <polygon fill="var(--simbolo-tinta, #1B2470)" points="86,0 108,0 108,168 80,270 0,270" />
      <polygon fill="var(--simbolo-tinta, #1B2470)" points="108,168 214,168 206,196 108,196" />
      <polygon fill="var(--simbolo-tinta, #1B2470)" points="168,0 250,0 340,270 262,270" />
      <polygon fill="var(--simbolo-lavanda, #9D9BD3)" points="152,0 196,0 140,168 108,168" />
    </svg>
  )
}
