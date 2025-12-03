import { describe, it, expect } from 'vitest'
import {
  corte33,
  corte66,
  corte33ISO,
  corte66ISO,
} from '../../../components/utils/DatePercentage'

describe('Calcular cortes de tiempo (33% y 66%)', () => {
  const limiteInferior = new Date('2025-07-18T13:00:00Z').getTime()
  const limiteSuperior = new Date('2025-07-18T13:22:00Z').getTime()

  const intervalo = limiteSuperior - limiteInferior
  const tercio = intervalo / 3

  const expected33 = limiteInferior + tercio
  const expected66 = limiteInferior + 2 * tercio

  it('calcula correctamente el corte del 33%', () => {
    expect(corte33).toBeCloseTo(expected33)
  })

  it('calcula correctamente el corte del 66%', () => {
    expect(corte66).toBeCloseTo(expected66)
  })

  it('genera el ISO string correcto para el 33%', () => {
    expect(corte33ISO).toBe(new Date(expected33).toISOString())
  })

  it('genera el ISO string correcto para el 66%', () => {
    expect(corte66ISO).toBe(new Date(expected66).toISOString())
  })
})
