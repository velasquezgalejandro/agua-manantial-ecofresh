import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { motion } from 'framer-motion'
import { Map } from '~utils/Map'
import { Pin } from 'lucide-react'
import { PinOff } from 'lucide-react'

import { locations } from '~constants/constantsBase'

export const FindUsOption = () => {
  const [selectId, setSelectId] = useState<number | null>(null)

  const renderCard = (
    nombre: string,
    direccion: string,
    cuidad: string,
    pais: string,
    id: number,
  ) => {
    return (
      <motion.div
        key={id}
        initial={{ opacity: 0 }} // Estado inicial
        animate={{ opacity: 1 }} // Estado final
        onClick={() => setSelectId(id === selectId ? null : id)}
        whileHover={{
          scale: 1.02,
          background: `linear-gradient(135deg, #d4d8f322 0%, #fff 50%, #686fc122 100%)`,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      >
        <Stack
          sx={{
            width: 1,
            boxShadow: 2,
            ':hover': {
              cursor: 'pointer',
            },
          }}
        >
          <Stack
            sx={{
              py: 1,
              px: 0.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              columnGap: 2,
            }}
          >
            <Stack sx={{ rowGap: 0.5, width: 1 }}>
              <Typography variant="subtitle1">{nombre}</Typography>
              <Stack
                sx={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 1,
                }}
              >
                <Typography variant="body2">{direccion}</Typography>
                <Typography variant="body2">
                  {cuidad}, {pais}
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <IconButton
                sx={{
                  bgcolor: 'primary.200',
                  // color: 'white',
                  borderRadius: 0,
                }}
              >
                {id === selectId ? <PinOff /> : <Pin />}
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    )
  }

  return (
    <Grid container spacing={2} sx={{ height: 1, pt: 4 }}>
      <Grid
        size={1}
        sx={{
          width: 1,
          bgcolor: 'common.white',
          flexDirection: 'row',
        }}
      >
        <Stack
          sx={{
            width: 1,
            flexDirection: { xs: 'column', lg: 'row' },
            height: 1,
            columnGap: 2,
            rowGap: 2,
          }}
        >
          <Stack
            sx={{
              height: 1,
              width: { xs: 1, lg: 0.5 },
            }}
          >
            <Map selectId={selectId} />
          </Stack>
          <Stack
            sx={{
              px: 2,
              width: { xs: 1, lg: 0.5 },
              rowGap: 1,
              justifyContent: 'center',
              py: 1,
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold">
                Encuéntranos
              </Typography>
              <Typography variant="subtitle1" sx={{ px: 2 }}>
                Puedes encontrarnos en las siguientes ubicaciones:
              </Typography>
            </Box>

            {locations.map((location) => {
              const { id, nombre, direccion, cuidad, pais } = location
              return renderCard(nombre, direccion, cuidad, pais, id)
            })}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}
