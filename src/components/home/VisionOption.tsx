import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { motion } from 'framer-motion'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import useMediaQuery from '@mui/material/useMediaQuery'
import { base } from '~constants/constantsBase'

export const VisionOption = () => {
  const isBiggerThanLg = useMediaQuery((theme) => theme.breakpoints.up('lg'))
  const [showVision, setShowVision] = useState(true)

  const renderButton = () => {
    return (
      <Button
        variant="text"
        startIcon={showVision && isBiggerThanLg ? <ArrowBackIcon /> : undefined}
        endIcon={
          !showVision && isBiggerThanLg ? <ArrowForwardIcon /> : undefined
        }
        onClick={() => {
          setShowVision(!showVision)
        }}
      >
        Ver {showVision ? 'misión' : 'visión'}
      </Button>
    )
  }

  const renderImage = () => {
    return (
      <motion.div
        transition={{ duration: 0.6, ease: 'easeOut' }}
        initial={{ left: '0%' }}
        animate={{ left: showVision ? '0%' : '50%' }}
        style={{
          width: '50%',
          height: '100%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 1000,
        }}
      >
        <Box
          component={'img'}
          src={`${base}templates/template_1920x1080_2.jpg`}
          alt="Vision"
          sx={{
            width: 1,
            height: 1,
            objectFit: 'cover',
          }}
        />
      </motion.div>
    )
  }

  const renderMision = () => {
    return (
      <Grid size={{ xs: 12, lg: 6 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
        >
          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              p: 3,
              rowGap: 3,
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                bgcolor: 'primary.main',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CrisisAlertIcon sx={{ fontSize: 36, color: 'white' }} />
            </Box>

            <Stack sx={{ rowGap: 1 }}>
              <Typography variant="h4" fontWeight="bold">
                Misión
              </Typography>

              <Typography variant="subtitle1" sx={{ px: 2 }}>
                Ofrecer agua purificada, saludable y ecológica, utilizando
                tecnologías sostenibles que beneficien tanto al consumidor como
                al planeta.
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
        {!showVision ? (
          <Stack sx={{ px: 3, alignItems: { xs: 'center', lg: 'flex-end' } }}>
            {renderButton()}
          </Stack>
        ) : null}
      </Grid>
    )
  }

  const renderVision = () => {
    return (
      <Grid size={{ xs: 12, lg: 6 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        >
          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              p: 3,
              rowGap: 3,
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                bgcolor: 'primary.main',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CrisisAlertIcon sx={{ fontSize: 36, color: 'white' }} />
            </Box>

            <Stack sx={{ rowGap: 1 }}>
              <Typography variant="h4" fontWeight="bold">
                Visión
              </Typography>

              <Typography variant="subtitle1" sx={{ px: 2 }}>
                Ser la empresa líder en el suroccidente colombiano en soluciones
                de hidratación ecológicas y personalizadas, con impacto social
                positivo.
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
        {showVision ? (
          <Stack sx={{ px: 3, alignItems: { xs: 'center', lg: 'flex-start' } }}>
            {renderButton()}
          </Stack>
        ) : null}
      </Grid>
    )
  }

  return (
    <Stack spacing={4} sx={{ width: 1, pt: 4, alignItems: 'center' }}>
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
          height: 420,
        }}
      >
        <Grid container sx={{ width: 1, height: 1, position: 'relative' }}>
          {isBiggerThanLg ? renderMision() : showVision ? null : renderMision()}
          {isBiggerThanLg ? renderImage() : null}
          {isBiggerThanLg ? renderVision() : showVision ? renderVision() : null}
        </Grid>
      </Paper>
    </Stack>
  )
}
