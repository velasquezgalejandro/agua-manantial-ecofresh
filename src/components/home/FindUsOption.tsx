import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Map } from '~utils/Map'

export const FindUsOption = () => {
  return (
    <Grid container spacing={2} sx={{ height: 1, pt: 4 }}>
      <Grid size={6}>
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Encuéntranos
          </Typography>
          <Typography variant="body1" gutterBottom>
            Puedes encontrarnos en las siguientes ubicaciones:
          </Typography>
          <ul>
            <li>Oficina Central: Calle Falsa 123, Ciudad, País</li>
            <li>Tienda Principal: Avenida Siempre Viva 456, Ciudad, País</li>
            <li>Distribuidores Autorizados en todo el país</li>
          </ul>
          <Typography variant="body1" gutterBottom>
            También puedes contactarnos a través de nuestro sitio web o redes
            sociales para más información.
          </Typography>
        </Box>
      </Grid>
      <Grid size={6}>
        <Map />
      </Grid>
    </Grid>
  )
}
