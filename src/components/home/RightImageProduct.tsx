import { type FC, useState } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ChevronDown } from 'lucide-react'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { base } from '~constants/constantsBase'

type TProduct = {
  id: number
  name: string
  description: string
  imagen: string
  presentations: Record<string, string>[]
  isBiggerThanXl: boolean
}

export const RightImageProduct: FC<TProduct> = ({ id, name, description, imagen, presentations, isBiggerThanXl }) => {
  const theme = useTheme()

  return (
    <Grid container spacing={2} sx={{ py: 4 }} key={id}>
      <Grid size={{ xs: 12, md: 7 }}>
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Estado inicial
          animate={{ opacity: 1, x: 0 }} // Estado final
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
        >
          <Stack
            sx={{
              width: 1,
              height: 1,
              rowGap: 3,
              alignItems: 'center',
              justifyContent: 'center',
              px: 2,
            }}
          >
            <Stack
              sx={{
                width: 1,
                rowGap: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h3" sx={{ color: 'text.primary' }}>
                {name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', px: 3 }}>
                {description}
              </Typography>
            </Stack>
            <Stack
              sx={{
                rowGap: 1,
                width: 1,
              }}
            >
              <Typography align='center' variant='body1' sx={{ fontWeight: 'bold' }}>
                Nuestras presentaciones
              </Typography>
              <Grid
                container
                spacing={{ xs: 0, xl: 0 }}
                sx={{
                  width: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {[...new Set(presentations.map((p) => p.tipo))].map((tipo) => {
                  const itemsByType = presentations.filter(
                    (p) => p.tipo === tipo,
                  )

                  return (
                    <Grid size={{ xs: 12, xl: 3 }} key={tipo} >
                      <Stack
                        sx={{
                          width: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        {isBiggerThanXl ?
                          <Box
                            sx={{
                              width: '100%',
                              boxShadow: 2,
                              background: `linear-gradient(135deg, #fff 0%,  ${theme.palette.primary.main}22 50%, #fff 100%)`,
                              minHeight: 175,
                              py: 1,
                              px: 2
                            }}
                          >
                            <Stack sx={{ gap: 1 }}>
                              <Typography
                                variant='h6'
                                sx={{ fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase' }}
                              >
                                {tipo}</Typography>
                              <Stack sx={{ rowGap: 0.5 }}>
                                {itemsByType.map(({ tamaño, price }, i) => (
                                  <Typography
                                    key={i}
                                    sx={{
                                      fontWeight: 'bold',
                                      fontSize: '0.85rem',
                                    }}
                                  >
                                    {tamaño} ml — {price.toLocaleString()} COP
                                  </Typography>
                                ))}
                              </Stack>
                            </Stack>
                          </Box>
                          :
                          <Accordion
                            sx={{
                              width: '100%',
                              boxShadow: 2,
                              background: `linear-gradient(135deg, #fff 0%,  ${theme.palette.primary.main}22 50%, #fff 100%)`,
                              minHeight: "auto",
                            }}
                          >
                            <AccordionSummary expandIcon={<ChevronDown />}>
                              <Typography
                                variant="h6"
                                sx={{ fontSize: '1rem', fontWeight: 'bold' }}
                              >
                                {tipo}
                              </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                              <Stack sx={{ rowGap: 0.5 }}>
                                {itemsByType.map(({ tamaño, price }, i) => (
                                  <Typography
                                    key={i}
                                    sx={{
                                      fontWeight: 'bold',
                                      fontSize: '0.85rem',
                                    }}
                                  >
                                    {tamaño} ml — {price.toLocaleString()} COP
                                  </Typography>
                                ))}
                              </Stack>
                            </AccordionDetails>
                          </Accordion>
                        }

                      </Stack>
                    </Grid>
                  )
                })}
              </Grid>
            </Stack>
          </Stack>
        </motion.div>
      </Grid>
      <Grid size={{ xs: 12, md: 5 }} sx={{ p: { xs: 2, md: 0 } }}>
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Estado inicial
          animate={{ opacity: 1, x: 0 }} // Estado final
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
        >
          <Box
            component={'img'}
            sx={{
              width: 1,
              height: 'auto',
            }}
            src={`${base}${imagen}`}
          />
        </motion.div>
      </Grid>
    </Grid>
  )
}
