import Link from 'next/link'

export default function NaoEncontrada() {
  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: '120px 24px', color: 'var(--tinta)' }}>
      <h1 style={{ fontSize: '2rem', fontStretch: '112%' }}>Página não encontrada</h1>
      <p style={{ marginTop: 16, color: 'var(--tinta-70)' }}>
        O endereço pode ter mudado. Os sites das empresas continuam no mesmo lugar.
      </p>
      <p style={{ marginTop: 24 }}>
        <Link href="/" style={{ fontWeight: 600, borderBottom: '1px solid currentColor' }}>
          Voltar para o início →
        </Link>
      </p>
    </main>
  )
}
