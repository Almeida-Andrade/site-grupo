import { Simbolo } from './Simbolo'

// O "A" do logo no fundo azul, parado à direita: a posição é do CSS (.fundoALetra).
export function FundoA({ classes }: { classes: { camada: string; palco: string; letra: string } }) {
  return (
    <div className={classes.camada} aria-hidden="true">
      <div className={classes.palco}>
        <div className={classes.letra}>
          <Simbolo chapado />
        </div>
      </div>
    </div>
  )
}
