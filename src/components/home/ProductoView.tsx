import { Fragment, type FC } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { GenericContainer } from '~utils/GenericContainer'
import { LiquidButtons } from '~utils/LiquidButtons'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { useGetProductosData } from '~server/hooks/useGetProductos'

type TProduct = {
  id: number
  name: string
  description: string
  imagen: string
  presentations: Record<string, string>[]
}

const renderRightImageProduct: FC<TProduct> = ({
  id,
  name,
  description,
  imagen,
  presentations,
}) => {
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
                spacing={2}
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
                    <Grid size={{ xs: 12, lg: 3 }} key={tipo}>
                      <Stack
                        sx={{
                          width: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
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
                                width: 200,
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

const renderLeftImageProduct = ({
  id,
  name,
  description,
  imagen,
  presentations,
}) => {
  const theme = useTheme()
  return (
    <Stack key={id}>
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
          }}
        >
          <path
            d="M0,80 L500,10 L500,100 L0,100 Z"
            style={{ fill: theme.palette.primary[200] }}
          />
        </svg>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ bgcolor: theme.palette.primary[200], py: 4 }}
      >
        <Grid size={{ xs: 12, md: 5 }} sx={{ p: { xs: 2, md: 0 } }}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            <Box
              component="img"
              src={imagen}
              sx={{
                width: 1,
                height: 'auto',
              }}
            />
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Estado inicial
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
                <Typography variant="h5" sx={{ color: 'text.primary' }}>
                  {name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'text.secondary' }}
                >
                  {description}
                </Typography>
              </Stack>
              <Stack sx={{ width: 1 }}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    width: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {[...new Set(presentations.map((p) => p.tipo))].map(
                    (tipo) => {
                      const itemsByType = presentations.filter(
                        (p) => p.tipo === tipo,
                      )

                      return (
                        <Grid size={{ xs: 12, lg: 3 }} key={tipo}>
                          <Stack
                            sx={{
                              width: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <motion.div
                              initial={{
                                opacity: 0,
                                background: `linear-gradient(135deg,  ${theme.palette.primary.main}22 0%, #fff 50%,  ${theme.palette.primary.main}22 100%)`,
                              }}
                              animate={{ opacity: 1 }}
                              whileHover={{
                                scale: 1.01,
                                background: `linear-gradient(135deg, #fff 0%, ${theme.palette.primary.main}22 50%, #fff 100%)`,
                              }}
                              transition={{
                                duration: 0.5,
                                ease: 'easeOut',
                              }}
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
                                    width: 200,
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
                                        {tamaño} ml — ${price.toLocaleString()}
                                      </Typography>
                                    ))}
                                  </Stack>
                                </Stack>
                              </Stack>
                            </motion.div>
                          </Stack>
                        </Grid>
                      )
                    },
                  )}
                </Grid>
              </Stack>
            </Stack>
          </motion.div>
        </Grid>
      </Grid>
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
            d="M0,80 L500,10 L500,100 L0,100 Z"
            style={{ fill: theme.palette.primary[200] }}
          />
        </svg>
      </Box>
    </Stack>
  )
}

export const ProductsView = () => {
  const { data: dataProducts, isLoading, isError } = useGetProductosData()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading products</div>

  const data = Object.values(dataProducts)

  return (
    <GenericContainer sx={{ pb: 0, px: 0 }}>
      <Stack sx={{ rowGap: 6, width: 1 }}>
        <Typography variant="h3" align="center">
          Nuestros Productos
        </Typography>
        <Stack sx={{ width: 1, rowGap: 4 }}>
          {data?.map((product, index) => {
            const isEven = index % 2 === 0
            return isEven
              ? renderRightImageProduct(product)
              : renderLeftImageProduct(product)
          })}
        </Stack>
      </Stack>
    </GenericContainer>
  )
}
