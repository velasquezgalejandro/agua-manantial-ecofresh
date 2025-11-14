import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationPinIcon from '@mui/icons-material/LocationOn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

export const Footer = () => {
  const theme = useTheme()
  const isBiggerThanMd = useMediaQuery(theme.breakpoints.down('smh'))

  const renderIconText = (Icon: any, text: string) => (
    <Stack direction="row" spacing={1} alignItems="center">
      <Icon fontSize="small" />
      <Typography variant="body2">{text}</Typography>
    </Stack>
  )

  const renderIconMedia = (Icon: any, enlace: string) => (
    <IconButton
      sx={{ border: 1, borderColor: 'primary.50', p: 1 }}
      href={enlace}
      target="_blank"
      rel="noopener"
    >
      <Icon sx={{ color: 'primary.50', fontSize: 24 }} />
    </IconButton>
  )

  return (
    <>
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
            transform: 'rotate(180deg)',
          }}
        >
          <path
            d="M0,0 C100,40 200,-20 300,30 C400,80 500,-10 600,35 C700,90 800,0 900,25 L900,0 L0,0 Z"
            style={{ fill: theme.palette.primary[900] }}
          />
        </svg>
      </Box>
      <Stack
        component="footer"
        sx={{
          backgroundColor: 'primary.900',
          color: 'primary.50',
          textAlign: 'center',
          py: 3,
          px: 2,
        }}
        rowGap={3}
      >
        <Stack
          direction={isBiggerThanMd ? 'column' : 'row'}
          spacing={isBiggerThanMd ? 3 : 0}
          alignItems="center"
          justifyContent="space-around"
          divider={
            !isBiggerThanMd ? (
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: 'common.white' }}
              />
            ) : (
              <Divider flexItem sx={{ borderColor: 'common.white' }} />
            )
          }
          sx={{ width: '100%' }}
        >
          <Stack
            spacing={1}
            alignItems={isBiggerThanMd ? 'center' : 'flex-start'}
          >
            {renderIconText(
              AccessTimeIcon,
              'Horario: Lunes a Viernes 9:00 - 18:00',
            )}
            {renderIconText(
              LocationPinIcon,
              'Dirección: Calle Falsa 123, Ciudad',
            )}
            {renderIconText(LocalPhoneIcon, 'Teléfono: +1 (555) 123-4567')}
          </Stack>
          <Stack direction="row" spacing={2}>
            {renderIconMedia(FacebookIcon, 'https://www.facebook.com')}
            {renderIconMedia(InstagramIcon, 'https://www.instagram.com')}
            {renderIconMedia(WhatsAppIcon, 'https://www.whatsapp.com')}
          </Stack>
          <Box>
            <Typography variant="body2">Información extra</Typography>
          </Box>
        </Stack>
        <Typography variant="body2">
          © 2025 Todos los derechos reservados.
        </Typography>
      </Stack>
    </>
  )
}
