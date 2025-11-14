import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/hello', (resolver) => {
    return HttpResponse.json({ message: 'Hello, world!' })
  }),
]
