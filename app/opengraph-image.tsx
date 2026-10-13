import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'Grupo Almeida Andrade'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Imagem() {
  const logo = await readFile(join(process.cwd(), 'public/logo-grupo.png'))
  const src = `data:image/png;base64,${logo.toString('base64')}`
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', background: '#F6F6FA',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={1411 * 0.33} height={1059 * 0.33} alt="" />
        <div style={{ marginTop: 40, fontSize: 34, color: '#33365C' }}>
          Imóveis, containers e engenharia em São Luís
        </div>
      </div>
    ),
    size,
  )
}
