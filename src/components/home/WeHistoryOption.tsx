import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

const events = [
  {
    id: 1,
    year: 'Inicio',
    title: 'Problemas',
    descripcion:
      '¿Cómo nació la compañía?  Remitámonos a 2023. Colombia era un país con una sociedad en la que  persisten desafíos como: Falta de acceso constante a agua potable de calidad, especialmente en sectores rurales o en expansión. El mundo, por su parte, se debatía en la generación indiscriminada de residuos plásticos de un solo uso, que afectan el medio ambiente.',
  },
  {
    id: 2,
    year: '2023',
    title: 'Necesidades',
    descripcion:
      'Las personas se distinguían por la poca conciencia sobre el consumo sostenible y reutilización de envases. Al tiempo la baja oferta de productos de agua que sean saludables, accesibles, infantiles  y a la vez amigables con el ambiente era limitada. Se crea la preocupación por la falta de un producto que mezclara estas  características.',
  },
  {
    id: 3,
    year: '2024',
    title: 'Nuestro inicio',
    descripcion:
      'Mas tarde en el 2024, en Mocoa se plantaba la primera semilla de nuestra empresa. Melba Narvaez Garzon  una mujer empoderada, madre cabeza de familia nariñense de Pasto. Tubo la oportunidad de comercializar productos de una empresa de agua purificada y tratada. Durante ese tiempo aprendió el proceso de producción del agua incluyendo manejo de equipos de filtración, rayos ultravioleta y empaque utilizando maquinas selladoras y etiquetadoras de bolsas.',
    color: 'success',
  },
  {
    id: 4,
    year: '2025',
    title: 'Nace Ecofresh',
    descripcion:
      'Evolucionamos con propósito firme no solo de ofrecer un producto de calidad si no también con compromiso ambiental. Fue así como en el 2025 nació Ecofresh, asumiendo un reto ambicioso al éxito, nuestros primeros productos Agua normal sin gas y La linea infantil Toñíto, ha generado expectativa y cada día mas vallunos deciden beber nuestra agua. Cada vez se disfruta en mas hogares, jardines colegios, universidades, hoteles, gimnasios, empresas, discotecas, fiestas y conciertos. Ganándose  su espacio en la vida de los colombianos.',
  },
  {
    id: 5,
    year: '2025',
    title: 'Un hogar propio: inauguramos nuestra planta de producción',
    descripcion:
      'Un hogar propio, reconocemos el valor fundamental de la infraestructura en el desarrollo y crecimiento de nuestra empresa es por eso que en el 2025 inauguramos en Jamundi, Valle nuestra planta de producción con compromiso ambiental. Nuestro lema " El sol nos da energía, el agua nos da fuerza „ de ahi que nuestra planta funciona con energía solar, nuestra linea ecológica - Ecofresh se realizara a partir de agua de Lluvia mediante un proceso de producción que inicia con la Recolección y Aprovechamiento Inteligente de la lluvia. Nuestros productos son empacados en empaques reciclables y reutilizables. Ademas innovamos con empaques y etiqueta con Código QR para que nuestros clientes y consumidores puedan estar continuamente informados acerca de nuestros avances.',
  },
  {
    id: 6,
    year: '2025',
    title: 'Evolucion',
    descripcion:
      'Nuestra empresa evoluciona con una propuesta que no solo resuelve un problema de acceso y calidad, sino que sensibiliza, recicla, reforesta, reutiliza y genera empleo verde.',
    color: 'success',
  },
]

export const WeHistoryOption = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  const renderTimeLine = () => {
    return (
      <Timeline position="alternate">
        {events.map((ev, index) => (
          <TimelineItem key={ev.id}>
            <TimelineSeparator>
              <TimelineDot
                color={selectedStep === ev.id ? 'primary' : (ev.color as any)}
                sx={{
                  transform: selectedStep === ev.id ? 'scale(1.3)' : 'scale(1)',
                  transition: 'all 0.25s ease-in-out',
                }}
              />
              {index < events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
              <Button
                onClick={() => setSelectedStep(ev.id)}
                sx={{
                  textTransform: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: index % 2 === 0 ? 'flex-end' : 'flex-start',
                  color: selectedStep === ev.id ? 'primary.main' : 'white',
                  transition: '0.2s',
                  '&:hover': {
                    color: 'primary.main',
                    opacity: 0.85,
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {ev.year}
                </Typography>
                <Typography variant="body2">{ev.title}</Typography>
              </Button>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    )
  }

  const renderDetailsCard = () => {
    const eventSelected = events.find((e) => e.id === selectedStep)

    return (
      <Paper
        elevation={4}
        sx={{
          width: 1,
          height: 1,
          borderRadius: 3,
          bgcolor: 'background.paper',
          p: 3,
        }}
      >
        {!eventSelected ? (
          <Stack
            height="100%"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{ opacity: 0.7 }}
          >
            <Typography variant="h6">
              Selecciona un evento en la línea del tiempo
            </Typography>
          </Stack>
        ) : (
          <Stack spacing={2} height="100%">
            <Typography variant="h4" fontWeight="bold" textAlign="center">
              {eventSelected.title}
            </Typography>

            <Stack
              sx={{
                flexDirection: 'row',
                gap: 2,
                height: 1,
              }}
            >
              <Typography
                sx={{
                  width: '55%',
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  textAlign: 'justify',
                }}
              >
                {eventSelected.descripcion}
              </Typography>

              <Box
                component="img"
                src="templates/template_1920x1080_2.jpg"
                sx={{
                  width: '45%',
                  height: 220,
                  borderRadius: 3,
                  objectFit: 'cover',
                }}
              />
            </Stack>
          </Stack>
        )}
      </Paper>
    )
  }

  return (
    <Grid container spacing={2} sx={{ height: 1, pt: 4 }}>
      <Grid
        size={6}
        sx={{
          height: 1,
          overflowY: 'auto',
          bgcolor: 'primary.50',
          borderRadius: 2,
          pr: 1,
          '&::-webkit-scrollbar': { width: 0 },
        }}
      >
        {renderTimeLine()}
      </Grid>

      <Grid size={6}>{renderDetailsCard()}</Grid>
    </Grid>
  )
}
