import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Paper from '@mui/material/Paper'
import { motion } from 'framer-motion'
import type { OverridableComponent } from '@mui/material/OverridableComponent'
import type { SvgIconTypeMap } from '@mui/material/SvgIcon'

export const VisionOption = () => {
  const renderVision = (
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
    title: string,
    description: string,
  ) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Estado inicial
        animate={{ opacity: 1, y: 0 }} // Estado final
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            width: 1,
            maxWidth: 600,
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 1.5,
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
            <Icon sx={{ fontSize: 36, color: 'white' }} />
          </Box>

          <Typography variant="h4" fontWeight="bold">
            {title}
          </Typography>

          <Typography variant="subtitle1" sx={{ px: 2 }}>
            {description}
          </Typography>
        </Paper>
      </motion.div>
    )
  }

  return (
    <Stack spacing={4} sx={{ width: 1, pt: 4, alignItems: 'center' }}>
      {renderVision(
        CrisisAlertIcon,
        'Misión',
        'Ofrecer agua purificada, saludable y ecológica, utilizando tecnologías sostenibles que beneficien tanto al consumidor como al planeta.',
      )}

      {renderVision(
        VisibilityIcon,
        'Visión',
        'Ser la empresa líder en el suroccidente colombiano en soluciones de hidratación ecológicas y personalizadas, con impacto social positivo.',
      )}
    </Stack>
  )
}
