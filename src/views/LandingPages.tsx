import { InitialView } from '~home/IntialView.tsx'
import { ProductsView } from '~home/ProductoView.tsx'
import { SustainabilityView } from '~home/SustainabilityView.tsx'
import { HistoryView } from '~home/HistoryView.tsx'
import { FutureView } from '~home/FutureView.tsx'
import { CampaingsView } from '~home/CampaingsView.tsx'
import { useGetEventosData } from '~server/hooks/useGetEventos'
import { use } from 'react'

export const LandingPage = () => {
  const { data, isLoading, isError } = useGetEventosData()

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  // if (isError) {
  //   return <div>Error loading data</div>
  // }

  console.log('Eventos Data:', data)

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
