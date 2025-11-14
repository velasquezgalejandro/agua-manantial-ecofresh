import { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import useMediaQuery from '@mui/material/useMediaQuery'
import { LiquidButtons } from '~utils/LiquidButton'
import { useNavigate } from '@tanstack/react-router'
import Typography from '@mui/material/Typography'

export const Header = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const isBiggerThanMd = useMediaQuery((theme: any) =>
    theme.breakpoints.up('md'),
  )

  const renderButtons = (label: string) => {
    return (
      <Button variant="text" sx={{ color: 'primary.50' }}>
        {label}
      </Button>
    )
  }

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
