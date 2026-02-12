import { GenericContainer } from '~utils/GenericContainer'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import { TreePine, Users, HeartPulse } from 'lucide-react'
import { motion } from 'framer-motion'

export const FutureView = ({ ref }) => {
  const items = [
    {
      id: 1,
      titulo: 'Innovación Saludable y Responsable',
      text: `Se producirá: línea Premium y línea ecológica Ecofresh, todas con enfoque saludable, seguro y educativo, comprometidos con el medio ambiente.`,
      Icon: HeartPulse,
      color: '#ff0000',
    },
    {
      id: 2,
      titulo: 'Compromiso con la Reforestación',
      text: `Promovemos sensibilización ambiental mediante estrategias de reforestación con clientes comprometidos con el medio ambiente.`,
      Icon: TreePine,
      color: '#008f34',
    },
    {
      id: 3,
      titulo: 'Impacto Social y Economía Circular',
      text: `Además involucramos a nuestros clientes y público en general en la recolección de plástico para ser transformado en pupitres y platos para futuras donaciones a comunidades vulnerables.`,
      Icon: Users,
      color: '#000000',
    },
  ]

  return (
    <GenericContainer
      ref={ref}
      sx={{
        position: 'relative',
        overflow: 'hidden',
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
          {items.map(({ titulo, text, id, Icon, color }) => (
            <Grid size={{ xs: 12, smh: 6, mdh: 4 }} key={id}>
              <motion.div
                initial={{ opacity: 0 }} // Estado inicial
                animate={{ opacity: 1 }} // Estado final
                whileHover={{
                  scale: 1.02,
                  background: `linear-gradient(135deg, ${color}22 0%, #fff 50%, ${color}22 100%)`,
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                }}
              >
                <Paper
                  sx={{
                    p: 2,
                    minHeight: 250,
                    height: '100%',
                    boxShadow: 2,
                    bgcolor: '#00000000',
                  }}
                >
                  <Stack sx={{ rowGap: 2 }}>
                    <Stack
                      sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 2,
                      }}
                    >
                      <SvgIcon sx={{ fontSize: '5rem', color }}>
                        <Icon />
                      </SvgIcon>
                      <Typography variant="h5">{titulo}</Typography>
                    </Stack>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, color: 'common.g50' }}
                      >
                        {text}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </GenericContainer>
  )
}
