import { GenericContainer } from '~utils/GenericContainer'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import AddIcon from '@mui/icons-material/Add'
import Chip from '@mui/material/Chip'

import Paper from '@mui/material/Paper'

const evento = [
  {
    id: 1,
    name: 'Evento 1',
    descripcion: 'Descripción del evento 1',
    imagen: '',
    activo: true,
    categoria: 'Categoría A',
  },
  {
    id: 2,
    name: 'Evento 2',
    descripcion: 'Descripción del evento 2',
    imagen: '',
    activo: true,
    categoria: 'Categoría A',
  },
  {
    id: 3,
    name: 'Evento 3',
    descripcion: 'Descripción del evento 3',
    imagen: '',
    activo: true,
    categoria: 'Categoría A',
  },
]

export const CampaingsView = () => {
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
          {evento.map(({ id, name, descripcion, categoria, activo }) => {
            if (!activo) {
              return
            }
            return (
              <Grid size={{ xs: 12, smh: 6, mdh: 4 }} key={id}>
                <Paper sx={{ py: 3, px: 2, boxShadow: 2 }}>
                  <Stack sx={{ rowGap: 2 }}>
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
