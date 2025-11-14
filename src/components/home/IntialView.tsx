import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { GenericContainer } from '~utils/GenericContainer'
import { LiquidButtons } from '~utils/LiquidButtons.tsx'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'

export const InitialView = () => {
  const theme = useTheme()
  return (
    // Intentar box externo
    <Box
      sx={{
        height: '80dvh',
        backgroundImage: `url('templates/template_1920x1080.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        px: 2,
        py: 4,
        // mb: 18,
        position: 'relative',
      }}
    >
      <GenericContainer maxWidth="xl">
        <motion.div
          initial={{ opacity: 0 }} // Estado inicial
          animate={{ opacity: 1 }} // Estado final
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          sx={{
            position: 'absolute',
            bottom: '50%',
            bgcolor: 'white',
            color: 'black',
            transform: 'translateY(50%)',
            boxShadow: 2,
            p: 3,
            borderRadius: 2,
            bgcolor: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            width: { xs: '90%', md: '60%', lg: '40%' },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: '50%',
              bgcolor: 'white',
              color: 'black',
              transform: 'translateY(50%)',
              boxShadow: 2,
              p: 3,
              borderRadius: 2,
              bgcolor: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              width: { xs: '90%', md: '60%', lg: '40%' },
            }}
          >
            <Stack sx={{ width: 1 }}>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                Ecofresh
              </Typography>
              <Typography variant="h6" sx={{ mb: 4 }}>
                ¡Bienvenido a Agua Manantial Fresh! Donde la pureza del agua y
                el compromiso con el planeta se unen para refrescar tu vida.
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <LiquidButtons
                  label={'Nuestros Productos'}
                  buttonAnimationColor={theme.palette.primary[900]}
                  sx={{ bgcolor: theme.palette.primary[600] }}
                />
                <LiquidButtons
                  label={'Conocenos'}
                  buttonAnimationColor={theme.palette.primary[900]}
                  sx={{ bgcolor: theme.palette.primary[600] }}
                />
              </Stack>
            </Stack>
          </Box>
        </motion.div>
      </GenericContainer>
    </Box>
  )
}
