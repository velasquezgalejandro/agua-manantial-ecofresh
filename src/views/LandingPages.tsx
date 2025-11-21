import { InitialView } from '~home/IntialView.tsx'
import { ProductsView } from '~home/ProductoView.tsx'
import { SustainabilityView } from '~home/SustainabilityView.tsx'
import { HistoryView } from '~home/HistoryView.tsx'
import { FutureView } from '~home/FutureView.tsx'
import { CampaingsView } from '~home/CampaingsView.tsx'

export const LandingPage = () => {
  return (
    <>
      <InitialView />
      <ProductsView />
      <SustainabilityView />
      <HistoryView />
      <FutureView />
      <CampaingsView />
    </>
  )
}
