import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { GenericContainer } from '~utils/GenericContainer'
import { LiquidButtons } from '~utils/LiquidButtons.tsx'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useScroll } from '~context/ScrollContext'
import { base } from '~constants/constantsBase'

export const InitialView = ({ ref }) => {
  const { scrollTo } = useScroll()

  const isBiggerThanSmh = useMediaQuery((theme) => theme.breakpoints.up('smh'))
  const theme = useTheme()
  return (
    // Intentar box externo
    <Box
      ref={ref}
      sx={{
        height: '80dvh',
        backgroundImage: `url('${base}templates/manantial.png')`,
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
          styles={{
            position: 'absolute',
            bottom: '50%',
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
              color: 'black',
              transform: 'translateY(50%)',
              boxShadow: 2,
              p: 3,
              borderRadius: 2,
              bgcolor: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              width: { xs: '80%', md: '60%', lg: '40%' },
            }}
          >
            <Stack sx={{ width: 1 }}>
              <Typography variant="h1" fontWeight="bold" gutterBottom>
                Ecofresh
              </Typography>
              <Typography variant="h6" sx={{ mb: { xs: 2, smh: 3 } }}>
                ¡Bienvenido a{' '}
                <Box
                  component="span"
                  sx={{
                    backgroundImage: (theme) =>
                      `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main}  )`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 'bold',
                  }}
                >
                  Agua Manantial Fresh
                </Box>
                ! Donde la pureza del agua y el compromiso con el planeta se
                unen para refrescar tu vida.
              </Typography>
              <Stack
                direction={isBiggerThanSmh ? 'row' : 'column'}
                spacing={2}
                sx={{
                  justifyContent: { xs: 'center', smh: 'flex-end' },
                  alignItems: { xs: 'center' },
                }}
              >
                <LiquidButtons
                  label={'Nuestros Productos'}
                  buttonAnimationColor={theme.palette.primary[900]}
                  sx={{ bgcolor: theme.palette.primary[600], width: 200 }}
                  action={() => scrollTo('product')}
                />
                <LiquidButtons
                  label={'Conocenos'}
                  buttonAnimationColor={theme.palette.primary[900]}
                  sx={{ bgcolor: theme.palette.primary[600], width: 200 }}
                  action={() => scrollTo('footer')}
                />
              </Stack>
            </Stack>
          </Box>
        </motion.div>
      </GenericContainer>
    </Box >
  )
}
