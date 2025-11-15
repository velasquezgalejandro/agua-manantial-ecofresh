import { http, HttpResponse } from 'msw'
import eventos from './data/eventos.json'
import productos from './data/productos.json'
import lineaTiempo from './data/linea_tiempo.json'

export const handlers = [
  http.get('/api/eventos', () => {
    return HttpResponse.json(eventos)
  }),
  http.get('/api/productos', () => {
    return HttpResponse.json(productos)
  }),
  http.get('/api/linea-tiempo', () => {
    return HttpResponse.json(lineaTiempo)
  }),
]
