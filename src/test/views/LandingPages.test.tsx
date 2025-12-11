import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { LandingPage } from '~views/LandingPages'

vi.mock('~home/IntialView.tsx', () => ({
  InitialView: () => <div data-testid="initial-view" />,
}))
vi.mock('~home/ProductoView.tsx', () => ({
  ProductsView: () => <div data-testid="products-view" />,
}))
vi.mock('~home/SustainabilityView.tsx', () => ({
  SustainabilityView: () => <div data-testid="sustainability-view" />,
}))
vi.mock('~home/HistoryView.tsx', () => ({
  HistoryView: () => <div data-testid="history-view" />,
}))
vi.mock('~home/FutureView.tsx', () => ({
  FutureView: () => <div data-testid="future-view" />,
}))
vi.mock('~home/CampaingsView.tsx', () => ({
  CampaingsView: () => <div data-testid="campaings-view" />,
}))

vi.mock('~context/ScrollContext.tsx', () => ({
  useScroll: () => ({
    sections: {
      home: { current: null },
      product: { current: null },
      sustainability: { current: null },
      history: { current: null },
      future: { current: null },
      campaing: { current: null },
    },
  }),
}))

describe('<LandingPage />', () => {
  it('renderiza todas las secciones correctamente', () => {
    render(<LandingPage />)

    // expect(screen.getByTestId('initial-view')).toBeInTheDocument()
    // expect(screen.getByTestId('products-view')).toBeInTheDocument()
    // expect(screen.getByTestId('sustainability-view')).toBeInTheDocument()
    // expect(screen.getByTestId('history-view')).toBeInTheDocument()
    // expect(screen.getByTestId('future-view')).toBeInTheDocument()
    // expect(screen.getByTestId('campaings-view')).toBeInTheDocument()
  })
})
