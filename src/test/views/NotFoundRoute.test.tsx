import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { NotFoundRoute } from '~views/NotFoundRoute'

vi.mock('~utils/GenericContainer', () => ({
  GenericContainer: ({ children }: any) => (
    <div data-testid="generic-container">{children}</div>
  ),
}))

const mockNavigate = vi.fn()

vi.mock('@tanstack/react-router', () => ({
  useNavigate: () => mockNavigate,
}))

vi.mock('lucide-react', () => ({
  House: () => <div data-testid="house-icon" />,
}))

describe('<NotFoundRoute />', () => {
  it('renderiza el contenido correcto y navega al hacer click', () => {
    render(<NotFoundRoute />)

    expect(screen.getByText('404')).toBeInTheDocument()
    expect(
      screen.getByText('La pagina no ha sido encontrada'),
    ).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /Volver al inicio/i })

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(mockNavigate).toHaveBeenCalledWith({ to: '/' })
  })
})
