import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { Map } from '~utils/Map'
import { useEffect } from 'react'

export const FindUsOption = () => {


  const renderCard = (title: string, test: string) => {

    return <></>;
  }

  return (
    <Grid container spacing={2} sx={{ height: 1, pt: 4 }}>
      <Grid size={{ xs: 12, lg: 6 }}>
        <Stack
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            p: 3,
            rowGap: 3,
            bgcolor: 'common.white',
            height: 1,
          }}
        >
          <Stack sx={{ rowGap: 1 }}>
            <Typography variant="h4" fontWeight="bold">
              Encuéntranos
            </Typography>

            <Typography variant="subtitle1" sx={{ px: 2 }}>
              Puedes encontrarnos en las siguientes ubicaciones:
            </Typography>
            <ul>
              <li>Oficina Central: Calle Falsa 123, Ciudad, País</li>
              <li>Tienda Principal: Avenida Siempre Viva 456, Ciudad, País</li>
              <li>Tienda Principal: Avenida Siempre Viva 456, Ciudad, País</li>
              <li>Tienda Principal: Avenida Siempre Viva 456, Ciudad, País</li>
            </ul>
          </Stack>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, lg: 6 }}>
        <Map />
      </Grid>
    </Grid>
  )
}
