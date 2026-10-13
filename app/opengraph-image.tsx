import { ImageResponse } from 'next/og'

export const alt = 'Grupo Almeida Andrade'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Imagem() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', alignItems: 'center',
          gap: 64, padding: '0 96px', background: '#F6F6FA', color: '#1B2470',
        }}
      >
        <svg width="340" height="270" viewBox="0 0 340 270">
          <polygon fill="#1B2470" points="86,0 108,0 108,168 80,270 0,270" />
          <polygon fill="#1B2470" points="108,168 214,168 206,196 108,196" />
          <polygon fill="#1B2470" points="168,0 250,0 340,270 262,270" />
          <polygon fill="#9D9BD3" points="152,0 196,0 140,168 108,168" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 30, letterSpacing: 12, color: '#6B70A8' }}>GRUPO</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>Almeida Andrade</div>
          <div style={{ marginTop: 24, fontSize: 30, color: '#4A5090' }}>
            Imóveis, containers e engenharia em São Luís
          </div>
        </div>
      </div>
    ),
    size,
  )
}
