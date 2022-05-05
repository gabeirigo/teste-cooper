import { Acoes } from "./acoes.model"

export interface Investimento {
  id?: number
  nome?: string,
  objetivo?: string,
  saldoTotal?: number,
  indicadorCarencia?: string
  acoes?: Acoes[]
}
