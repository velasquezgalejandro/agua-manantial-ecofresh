import { GenericContainer } from '~utils/GenericContainer'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import {
  MapPinned,
  MapPin,
  MapPinMinus,
  Earth,
  Leaf,
  Recycle,
  SunDim,
  Sun,
  SunMedium,
  Truck,
  TruckElectric,
  Pin,
} from 'lucide-react'
import SvgIcon from '@mui/material/SvgIcon'
import Grid from '@mui/material/Grid'

const dummyData = [
  {
    titulo: 'Línea Ecológica EcoFresh',
    Icono: Leaf,
    descripcion:
      'EcoFresh: agua producida con procesos responsables que cuidan el ambiente en cada etapa.',
    color: '#008f34',
  },
  {
    titulo: 'Energía Solar',
    Icono: Sun,
    descripcion:
      'Energía limpia que impulsa nuestra planta para un futuro más sostenible.',
    color: '#fed200',
  },
  {
    titulo: 'Transporte Limpio',
    Icono: TruckElectric,
    descripcion:
      'Movemos nuestra agua con una flota híbrida para reducir nuestra huella ambiental.',
    color: '#000000',
  },
  {
    titulo: 'Ecopunto: conciencia social',
    Icono: MapPinned,
    descripcion:
      'EcoPuntos Fresh: espacios donde compartimos nuestra historia ambiental mientras disfrutas de nuestra agua.',
    color: '#f00000',
  },
]

export const SustainabilityView = () => {
  const renderCard = (titulo, Icono, descripcion, color) => {
    return (
      <motion.div
        initial={{ opacity: 0 }} // Estado inicial
        animate={{ opacity: 1 }} // Estado final
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      >
        <Stack
          sx={{
            maxWidth: 350,
            height: 310,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Stack
            sx={{
              p: 2,
              rowGap: 2,
            }}
          >
            <SvgIcon sx={{ fontSize: '6rem', color }}>
              <Icono />
            </SvgIcon>
            <Stack sx={{ rowGap: 1 }}>
              <Typography variant="h5">{titulo}</Typography>
              <Typography variant="body2">{descripcion}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    )
  }

  return (
    <GenericContainer sx={{ pb: 0, px: 0 }}>
      <Stack sx={{ rowGap: 6, width: 1 }}>
        <Typography variant="h4" align="center">
          Nuestro compromiso con la sostenibilidad
        </Typography>

        <Grid></Grid>
        <Stack
          sx={{
            width: 1,
            rowGap: 4,
            columnGap: 4,
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            px: 2,
          }}
        >
          {dummyData?.map(({ titulo, Icono, descripcion, color }) => {
            return renderCard(titulo, Icono, descripcion, color)
          })}
        </Stack>
      </Stack>
    </GenericContainer>
  )
}
