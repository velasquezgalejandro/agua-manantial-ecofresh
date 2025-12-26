import { describe, it, expect } from 'vitest'
import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Route } from '~routes/__root'

vi.mock('@tanstack/react-router', async () => {
  const actual = await vi.importActual<any>('@tanstack/react-router')
  return {
    ...actual,
    HeadContent: () => <meta data-testid="head-content" />,
    Scripts: () => <div data-testid="scripts" />,
  }
})

vi.mock('@tanstack/react-router-devtools', () => ({
  TanStackRouterDevtoolsPanel: () => <div data-testid="router-devtools" />,
}))

export const tanstackDevtoolsSpy = vi.fn()

vi.mock('@tanstack/react-devtools', () => ({
  TanStackDevtools: (props: any) => {
    tanstackDevtoolsSpy(props)
    return <div data-testid="tanstack-devtools" />
  },
}))

vi.mock('~layout/ThemeProvider/themeProvider.tsx', () => ({
  ThemeProvider: ({ children }: any) => (
    <div data-testid="theme-provider">{children}</div>
  ),
}))

vi.mock('~views/NotFoundRoute', () => ({
  NotFoundRoute: () => <div>Not Found Page</div>,
}))

vi.mock('../integrations/tanstack-query/devtools', () => ({
  default: {
    name: 'Tanstack Query',
    render: <div data-testid="query-devtools" />,
  },
}))

describe('root route', () => {
  it('define title correctamente', () => {
    const head = Route.options.head?.()

    expect(head?.meta).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ charSet: 'utf-8' }),
        expect.objectContaining({
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        }),
        expect.objectContaining({
          title: 'TanStack Start Starter',
        }),
      ]),
    )

    expect(head?.links?.[0]).toEqual(
      expect.objectContaining({
        rel: 'stylesheet',
      }),
    )
  })

  it('renderiza errorComponent', () => {
    const ErrorComponent = Route.options.errorComponent!
    render(<ErrorComponent />)

    expect(screen.getByText('There was an error')).toBeInTheDocument()
  })

  it('renderiza notFoundComponent', () => {
    const NotFound = Route.options.notFoundComponent!
    render(<NotFound />)

    expect(screen.getByText('Not Found Page')).toBeInTheDocument()
  })
})

describe('RootDocument', () => {
  it('renderiza estructura base', () => {
    const Shell = Route.options.shellComponent!

    render(
      <Shell>
        <div>App Content</div>
      </Shell>,
    )

    expect(screen.getByText('App Content')).toBeInTheDocument()
    expect(screen.getByTestId('theme-provider')).toBeInTheDocument()
    expect(screen.getByTestId('scripts')).toBeInTheDocument()
    expect(screen.getByTestId('tanstack-devtools')).toBeInTheDocument()
  })
})
