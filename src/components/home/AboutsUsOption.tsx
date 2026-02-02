import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import Paper from '@mui/material/Paper'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Lightbulb } from 'lucide-react'
import { Leaf } from 'lucide-react'
import { Eye } from 'lucide-react'
import { Handshake } from 'lucide-react'
import { base } from '~constants/constantsBase'

const values = [
  { label: 'Bienestar', icon: Heart, color: '#ff0000' },
  { label: 'Innovación', icon: Lightbulb, color: '#4b4b0070' },
  { label: 'Sostenibilidad', icon: Leaf, color: '#1e4b1eff' },
  { label: 'Transparencia', icon: Eye, color: '#05022cff' },
  { label: 'Responsabilidad social', icon: Handshake, color: '#000000' },
]

export const AboutsUsOption = () => {
  return (
    <Stack sx={{ pt: 4 }}>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, lg: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Estado inicial
            animate={{ opacity: 1, x: 0 }} // Estado final
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            style={{ width: '100%' }}
          >
            <Stack spacing={3}>
              <Paper
                elevation={3}
                sx={{
                  // p: 3,
                  width: 1,
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 1.5,
                  px: 2,
                  py: 1,
                }}
              >
                <Typography variant="h4" fontWeight="bold" align="center">
                  ¿Quiénes somos?
                </Typography>
                <Typography variant="subtitle1" textAlign="center" sx={{}}>
                  Somos una empresa comprometida con el bienestar integral, el
                  cuidado ambiental y la sostenibilidad social.
                </Typography>
                <Typography variant="h4" fontWeight="bold" align="center">
                  Nuestros Valores
                </Typography>
                <Stack sx={{ width: 1 }}>
                  {values.map((value) => {
                    const { label, icon: Icon, color } = value
                    return (
                      <Typography
                        variant="subtitle1"
                        key={label}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          py: 0.3,
                        }}
                      >
                        <SvgIcon sx={{ fontSize: '1rem', color }}>
                          <Icon />
                        </SvgIcon>
                        {label}
                      </Typography>
                    )
                  })}
                </Stack>
              </Paper>
            </Stack>
          </motion.div>
        </Grid>

        <Grid item size={{ xs: 12, lg: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Estado inicial
            animate={{ opacity: 1, x: 0 }} // Estado final
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            style={{ width: '100%' }}
          >
            <Stack
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={`${base}logos/ecofresh-2.png`}
                sx={{
                  width: 1,
                  height: 'auto',
                  maxHeight: 420,
                  borderRadius: 3,
                  boxShadow: 0,
                  objectFit: 'cover',
                  maxWidth: 600,
                }}
              />
            </Stack>
          </motion.div>
        </Grid>
      </Grid>
    </Stack>
  )
}
