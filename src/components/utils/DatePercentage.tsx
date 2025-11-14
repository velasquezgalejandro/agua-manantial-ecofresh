const limiteInferior = '2025-07-18T13:00:00Z'
const limiteSuperior = '2025-07-18T13:22:00Z'

const inicio = new Date(limiteInferior).getTime()
const fin = new Date(limiteSuperior).getTime()

const intervalo = fin - inicio
const tercio = intervalo / 3

export const corte33 = inicio + tercio
export const corte66 = inicio + 2 * tercio

export const corte33ISO = new Date(corte33).toISOString()
export const corte66ISO = new Date(corte66).toISOString()
