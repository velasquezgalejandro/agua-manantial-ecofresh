import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from '@/layout/ThemeProvider/themeProvider'
import { NotFoundRoute } from '@/views/NotFoundRoute'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => <NotFoundRoute />,
})

function RootLayout() {
  return (
    <ThemeProvider>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </ThemeProvider>
  )
}
