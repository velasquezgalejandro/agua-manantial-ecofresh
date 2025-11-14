import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { motion } from 'framer-motion'

const values = [
  'Bienestar',
  'Innovación',
  'Sostenibilidad',
  'Transparencia',
  'Responsabilidad social',
]

export const AboutsUsOption = () => {
  return (
    <Stack sx={{ pt: 4 }}>
      <Grid container spacing={4}>
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
            <Stack spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4" fontWeight="bold" align="center">
                  ¿Quiénes somos?
                </Typography>
                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  sx={{ px: 2 }}
                >
                  Somos una empresa comprometida con el bienestar integral, el
                  cuidado ambiental y la sostenibilidad social.
                </Typography>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h4" fontWeight="bold" align="center">
                  Nuestros valores
                </Typography>

                <List sx={{ px: 4 }}>
                  {values.map((text) => (
                    <ListItem key={text} disablePadding sx={{ py: 0.3 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleRoundedIcon sx={{ fontSize: 22 }} />
                      </ListItemIcon>
                      <Typography variant="subtitle1">{text}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Stack>
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
                src="templates/template_1920x1080.png"
                sx={{
                  width: 1,
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: 3,
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
