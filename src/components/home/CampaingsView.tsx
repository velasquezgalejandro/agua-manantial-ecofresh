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
    <Stack sx={{ width: 1, columnGap: 2, rowGap: 6 }}>
      <Typography variant="h4" align="center">
        Eventos
      </Typography>
      <Box sx={{ px: 4 }}>
        {evento.map(({ id, name, descripcion, categoria, activo }) => {
          if (!activo) {
            return
          }
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id={id}
              >
                <Stack
                  sx={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 1,
                    pr: 8,
                  }}
                >
                  <Typography component="span">{name}</Typography>
                  <Chip
                    label={categoria}
                    // color="success"
                    slotProps={{
                      root: {
                        sx: { bgcolor: 'red', color: 'white' },
                      },
                    }}
                  />
                </Stack>
              </AccordionSummary>
              <AccordionDetails>{descripcion}</AccordionDetails>
            </Accordion>
          )
        })}
      </Box>
    </Stack>
  )
}
