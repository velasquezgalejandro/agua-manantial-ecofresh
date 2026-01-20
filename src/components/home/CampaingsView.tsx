import { GenericContainer } from '~utils/GenericContainer'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

import Paper from '@mui/material/Paper'
import { useGetEventosData } from '~server/hooks/useGetEventos'

export const CampaingsView = ({ ref }) => {
  const { data: eventosData, isLoading, isError } = useGetEventosData()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading eventos data</div>
  }

  const data = Object?.values(eventosData) || []

  return (
    <GenericContainer
      ref={ref}
      sx={{
        position: 'relative',
        overflow: 'hidden',

        // pseudo-elemento para el fondo
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '70%',
          background: 'linear-gradient(to bottom, #d4d8f3, #d8dcf4)',
          zIndex: 0,
        },
      }}
    >
      <Stack
        sx={{
          width: 1,
          columnGap: 2,
          rowGap: 6,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography variant="h4" align="center">
          Eventos
        </Typography>
        <Grid container spacing={2}>
          {data?.map(({ id, name, descripcion, categoria, activo, imagen }) => {
            if (!activo) {
              return
            }
            return (
              <Grid size={{ xs: 12, smh: 6, mdh: 4 }} key={id}>
                <Paper sx={{ boxShadow: 2 }}>
                  <Box
                    component="img"
                    src={imagen}
                    sx={{ width: 1, height: 180, objectFit: 'cover' }}
                  />
                  <Stack sx={{ rowGap: 2, py: 3, px: 2 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {name}
                      </Typography>
                      <Chip
                        label={categoria}
                        sx={{
                          bgcolor: '#5c6bc0',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    </Stack>

                    {/* Descripción */}
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      {descripcion}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </Stack>
    </GenericContainer>
  )
}
