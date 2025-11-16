import { GenericContainer } from '~utils/GenericContainer'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

export const FutureView = () => {
  const items = [
    `Se producirá: línea Premium y línea ecológica Ecofresh, todas con enfoque saludable, seguro y educativo, comprometidos con el medio ambiente.`,
    `Promovemos sensibilización ambiental mediante estrategias de reforestación con clientes comprometidos con el medio ambiente.`,
    `Además involucramos a nuestros clientes y público en general en la recolección de plástico para ser transformado en pupitres y platos para futuras donaciones a comunidades vulnerables.`,
  ]

  return (
    <GenericContainer
      sx={{
        position: 'relative',
        overflow: 'hidden',

        // pseudo-elemento para el fondo
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '40%',
          background: 'linear-gradient(to bottom, #d8dcf4, #d4d8f3)',
          zIndex: 0,
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          width: 1,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Stack spacing={1} alignItems="center">
          <Typography variant="h4" align="center">
            Compromiso con el futuro y nuestras cifras
          </Typography>
        </Stack>

        <Typography variant="h5" align="center">
          A futuro
        </Typography>

        <Grid container spacing={3}>
          {items.map((text, idx) => (
            <Grid item size={4} key={idx}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', height: '100%' }}
                >
                  <Typography variant="body1">{text}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </GenericContainer>
  )
}
