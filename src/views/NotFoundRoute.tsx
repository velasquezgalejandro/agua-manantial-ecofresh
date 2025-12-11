import { GenericContainer } from '~utils/GenericContainer'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { House } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'

export const NotFoundRoute = () => {
  const navigate = useNavigate()

  return (
    <GenericContainer maxWidth="xl" sx={{ height: '100dvh' }}>
      <Stack
        sx={{
          width: 1,
          height: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        rowGap={4}
      >
        <Stack>
          <Typography variant="h2" textAlign={'center'}>
            404
          </Typography>
          <Typography variant="h4" textAlign={'center'}>
            La pagina no ha sido encontrada
          </Typography>
        </Stack>
        <Button
          startIcon={<House />}
          onClick={() => {
            navigate({ to: '/' })
          }}
        >
          Volver al inicio
        </Button>
      </Stack>
    </GenericContainer>
  )
}
