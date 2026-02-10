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
import { useGetTimelineData } from '~server/hooks/useGetTimeline'
import { base } from '~constants/constantsBase'

export const WeHistoryOption = () => {
  const { data: timelineData, isError, isLoading } = useGetTimelineData()
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  const data = Object.values(timelineData || {})

  const renderTimeLine = () => {
    return (
      <Timeline
        position="alternate"
        sx={{
          '& .MuiTimelineItem-root': { minHeight: 120 }, // antes era el default (~80)
          // py: 2,
        }}
      >
        {data?.map((ev, index) => (
          <TimelineItem key={ev.id}>
            <TimelineSeparator>
              <TimelineDot
                color={selectedStep === ev.id ? 'primary' : (ev.color as any)}
                sx={{
                  transform:
                    selectedStep === ev.id ? 'scale(1.35)' : 'scale(1)',
                  transition: 'all 0.25s ease-in-out',
                  boxShadow:
                    selectedStep === ev.id
                      ? '0px 0px 12px rgba(0,0,0,0.25)'
                      : '0px 0px 6px rgba(0,0,0,0.15)', // nuevo
                }}
              />
              {index < data.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
              <Stack
                sx={{
                  width: 1,
                  flexDirection: 'row',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                }}
              >
                <Button
                  onClick={() => setSelectedStep(ev.id)}
                  sx={{
                    // maxWidth: 250,
                    width: 1,
                    textTransform: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: index % 2 === 0 ? 'flex-start' : 'flex-end',
                    border: 1,
                    borderColor: 'primary.main',
                    color: selectedStep === ev.id ? 'white' : 'text.primary',
                    px: 1.5,
                    py: 1,
                    transition: 'all 0.25s ease',
                    backgroundColor:
                      selectedStep === ev.id
                        ? 'primary.main + 20'
                        : 'transparent',
                    // boxShadow: selectedStep === ev.id ? 4 : 2,
                    '&:hover': {
                      color: 'primary.main',
                      boxShadow: selectedStep === ev.id ? 6 : 4,
                      // backgroundColor: 'grey.300', // nuevo
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {ev.year}
                  </Typography>
                  <Typography variant="body2">{ev.title}</Typography>
                </Button>
              </Stack>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    )
  }

  const renderDetailsCard = () => {
    const eventSelected = data.find((e) => e.id === selectedStep)

    return (
      <Paper
        elevation={4}
        sx={{
          width: 1,
          height: 1,
          borderRadius: 3,
          bgcolor: 'background.paper',
          p: 3,
          border: '1px solid',
          borderColor: 'grey.200',
          transition: '0.3s ease',
          '&:hover': {
            boxShadow: 6,
          },
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
                flexDirection: 'column',
                gap: 2,
                height: 1,
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={`${base}${eventSelected.imagen}`}
                sx={{
                  width: { xs: '100%' },
                  height: { xs: 180, md: 260 },
                  borderRadius: 3,
                  objectFit: 'cover',
                  boxShadow: 3,
                }}
              />
              <Typography
                sx={{
                  fontSize: '1rem',
                  lineHeight: 1.5,
                  textAlign: 'justify',
                  color: 'grey.800',
                }}
              >
                {eventSelected.description}
              </Typography>
            </Stack>
          </Stack>
        )}
      </Paper>
    )
  }

  if (isLoading) {
    return <div>Cargando línea del tiempo...</div>
  }

  if (isError) {
    return <div>Error al cargar la línea del tiempo.</div>
  }

  return (
    <Grid container spacing={2} sx={{ height: 1, pt: 4 }}>
      <Grid
        size={{ xs: 12, lg: 6 }}
        sx={{
          boxShadow: 4,
          height: 1,
          overflowY: 'auto',
          bgcolor: 'primary.50',
          borderRadius: 2,
          pr: 1,
          py: 2,
          pl: 1,
          '&::-webkit-scrollbar': { width: 0 },
        }}
      >
        {renderTimeLine()}
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>{renderDetailsCard()}</Grid>
    </Grid>
  )
}
