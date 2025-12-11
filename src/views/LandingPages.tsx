import { InitialView } from '~home/IntialView.tsx'
import { ProductsView } from '~home/ProductoView.tsx'
import { SustainabilityView } from '~home/SustainabilityView.tsx'
import { HistoryView } from '~home/HistoryView.tsx'
import { FutureView } from '~home/FutureView.tsx'
import { CampaingsView } from '~home/CampaingsView.tsx'
import { useScroll } from '~context/ScrollContext.tsx'

export const LandingPage = () => {
  const { sections } = useScroll()

  return (
    <>
      <InitialView ref={sections.home} />
      <ProductsView ref={sections.product} />
      <SustainabilityView ref={sections.sustainability} />
      <HistoryView ref={sections.history} />
      <FutureView ref={sections.future} />
      <CampaingsView ref={sections.campaing} />
    </>
  )
}
