import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { GenericContainer } from '~utils/GenericContainer'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useGetProductosData } from '~server/hooks/useGetProductos'
import { LeftImageProduct } from '~home/LeftImageProduct.tsx'
import { RightImageProduct } from '~home/RightImageProduct.tsx'

export const ProductsView = ({ ref }) => {
  const isBiggerThanXl = useMediaQuery((theme) => theme.breakpoints.up('xl'))
  const { data: dataProducts, isLoading, isError } = useGetProductosData()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading products</div>

  const data = Object.values(dataProducts)

  return (
    <GenericContainer sx={{ pb: 0, px: 0 }} ref={ref}>
      <Stack sx={{ rowGap: 6, width: 1 }}>
        <Typography variant="h3" align="center">
          Nuestros Productos
        </Typography>
        <Stack sx={{ width: 1, rowGap: 4 }}>
          {data?.map((product, index) => {
            const isEven = index % 2 === 0
            return isEven ? (
              <RightImageProduct {...product} isBiggerThanXl={isBiggerThanXl} />
            ) : (
              <LeftImageProduct {...product} isBiggerThanXl={isBiggerThanXl} />
            )
          })}
        </Stack>
      </Stack>
    </GenericContainer>
  )
}
