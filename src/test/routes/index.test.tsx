import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App, ErrorComponent, NotFoundComponent } from '~routes/index'

// mocks (Tener cuidado con las rutas relativas deben de ser exactas para no generar problemas)
vi.mock('@/views/LandingPages.tsx', () => ({
  LandingPage: () => <div data-testid="landing-page" />,
}))

vi.mock('~layout/Footer.tsx', () => ({
  Footer: () => <div data-testid="footer" />,
}))

describe('Route component', () => {
  it('renderiza landing y footer', () => {
    render(<App />)

    expect(screen.getByTestId('landing-page')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renderiza componente de error', () => {
    render(<ErrorComponent />)

    expect(screen.getByText('There was an error')).toBeInTheDocument()
  })

  it('renderiza componente de no encontrado', () => {
    render(<NotFoundComponent />)

    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
  })
})
