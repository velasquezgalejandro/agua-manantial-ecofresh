import { useState } from 'react'
import type { FC } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { GenericContainer } from '~utils/GenericContainer'
import { AboutsUsOption } from '~home/AboutsUsOption.tsx'
import { VisionOption } from '~home/VisionOption.tsx'
import { WeHistoryOption } from '~home/WeHistoryOption'
import { FindUsOption } from '~home/FindUsOption.tsx'
import { motion } from 'framer-motion'

export const HistoryView = ({ ref }) => {
  const theme = useTheme()
  const [alignment, setAlignment] = useState('option1')

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }

  const renderToggleButton: FC<{ value: string; label: string }> = (
    value,
    label,
  ) => {
    return (
      <ToggleButton
        value={value}
        sx={{
          minWidth: 140,
          color: 'common.white',
          bgcolor: 'primary.900',
          ':hover': {
            bgcolor: 'primary.800',
          },
          '&.Mui-selected': {
            bgcolor: 'primary.main',
            color: 'common.white',
            ':hover': {
              bgcolor: 'primary.700',
            },
          },
        }}
      >
        {label}
      </ToggleButton>
    )
  }

  const renderOption = () => {
    switch (alignment) {
      case 'option1':
        return <AboutsUsOption />
      case 'option2':
        return <VisionOption />
      case 'option3':
        return <WeHistoryOption />
      case 'option4':
        return <FindUsOption />
      default:
        return <Box>Opción no válida</Box>
    }
  }

  return (
    <>
      <Box
        ref={ref}
        component="div"
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            width: '100%',
            height: '50px',
            transform: 'rotate(180deg)',
          }}
        >
          <path
            d="M0,0 C100,40 200,-20 300,30 C400,80 500,-10 600,35 C700,90 800,0 900,25 L900,0 L0,0 Z"
            style={{ fill: theme.palette.primary[200] }}
          />
        </svg>
      </Box>
      <Box
        sx={{
          bgcolor: 'primary.200',
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 4,
          position: 'relative',
        }}
      >
        <GenericContainer sx={{}}>
          <motion.div
            initial={{ opacity: 0, y: 0 }} // Estado inicial
            animate={{ opacity: 1, y: 0 }} // Estado final
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Opciones"
              sx={{
                position: 'absolute',
                top: 16,
                right: '50%',
                transform: 'translate(50%, 0%)',
              }}
            >
              {renderToggleButton('option1', '¿Quienes somos?')}
              {renderToggleButton('option2', 'Misión y Visión')}
              {renderToggleButton('option3', 'Nuestra historia')}
              {renderToggleButton('option4', 'Encuentranos')}
            </ToggleButtonGroup>
          </motion.div>
          {renderOption()}
        </GenericContainer>
      </Box>
      <Box
        component="div"
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            width: '100%',
            height: '50px',
            // transform: 'rotate(180deg)',
          }}
        >
          <path
            d="M0,0 C100,40 200,-20 300,30 C400,80 500,-10 600,35 C700,90 800,0 900,25 L900,0 L0,0 Z"
            style={{ fill: theme.palette.primary[200] }}
          />
        </svg>
      </Box>
    </>
  )
}
