import { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useNavigate } from '@tanstack/react-router'
import Typography from '@mui/material/Typography'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.900' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          component={'img'}
          src="/logos/images.png"
          sx={{
            height: 50,
            width: 'auto',
          }}
        />
        <Typography>"El sol nos da energía, el agua nos da fuerza„</Typography>
      </Toolbar>
    </AppBar>
  )
}
