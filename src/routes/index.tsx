import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '@/views/LandingPages.tsx'
import { Footer } from '~layout/Footer.tsx'

export const App = () => {
  return (
    <>
      <LandingPage />
      <Footer />
    </>
  )
}

// Necesario para test unitarios
export const ErrorComponent = () => <div>There was an error</div>
export const NotFoundComponent = () => <div>Page Not Found</div>

export const Route = createFileRoute('/')({
  component: App,
  errorComponent: ErrorComponent,
  notFoundComponent: NotFoundComponent,
})
