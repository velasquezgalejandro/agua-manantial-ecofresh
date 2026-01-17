import { type FC } from 'react'
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

type TProduct = {
  id: number
  name: string
  description: string
  imagen: string
  presentations: Record<string, string>[]
}

export const RightImageProduct: FC<TProduct> = (
  { id, name, description, imagen, presentations },
  isBiggerThanXl,
) => {
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
              <Typography variant="h5" sx={{ color: 'text.primary' }}>
                {name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                {description}
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: 1,
              }}
            >
              <Grid
                container
                spacing={{ xs: 0, xl: 2 }}
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
                    <Grid size={{ xs: 12, xl: 3 }} key={tipo}>
                      <Stack
                        sx={{
                          width: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        {isBiggerThanXl ? (
                          <motion.div
                            initial={{
                              opacity: 0,
                              background: `linear-gradient(135deg, #fff 0%,  ${theme.palette.primary.main}22 50%, #fff 100%)`,
                            }}
                            animate={{ opacity: 1 }}
                            whileHover={{
                              scale: 1.01,
                              background: `linear-gradient(135deg, ${theme.palette.primary.main}22 0%, #fff 50%, ${theme.palette.primary.main}22 100%)`,
                            }}
                            transition={{
                              duration: 0.5,
                              ease: 'easeOut',
                            }}
                            style={{ width: '100%' }}
                          >
                            <Stack
                              sx={{
                                boxShadow: 2,
                                ':hover': {
                                  cursor: 'pointer',
                                },
                              }}
                            >
                              <Stack
                                sx={{
                                  p: 1,
                                  rowGap: 2,
                                  width: 180,
                                  height: 150,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <Stack sx={{ rowGap: 1 }}>
                                  <Typography
                                    variant="h5"
                                    sx={{ fontSize: '1rem !important' }}
                                  >
                                    {tipo}
                                  </Typography>
                                  {itemsByType.map(({ tamaño, price }, i) => (
                                    <Typography
                                      key={i}
                                      sx={{
                                        fontWeight: 'bold',
                                        fontSize: '0.75rem',
                                      }}
                                    >
                                      {tamaño} ml — {price.toLocaleString()} COP
                                    </Typography>
                                  ))}
                                </Stack>
                              </Stack>
                            </Stack>
                          </motion.div>
                        ) : (
                          <Accordion
                            sx={{
                              width: '100%',
                              boxShadow: 2,
                              background: `linear-gradient(135deg, #fff 0%,  ${theme.palette.primary.main}22 50%, #fff 100%)`,
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
                              <Stack sx={{ rowGap: 1 }}>
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
                        )}
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
            src={imagen}
          />
        </motion.div>
      </Grid>
    </Grid>
  )
}
