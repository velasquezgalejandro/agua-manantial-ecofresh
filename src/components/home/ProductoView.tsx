import { Fragment, type FC } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { GenericContainer } from '~utils/GenericContainer'
import { LiquidButtons } from '~utils/LiquidButtons'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'

const dummyData = [
  {
    id: 1,
    nombre: 'Agua normal sin gas',
    descripcion:
      'Agua tratada con procesos de alta calidad, ideal para consumo diario en hogares, empresas e instituciones. Producto sin saborizantes, ni calorias 100% natural. ',
    imagen: 'templates/template_1920x1080.png',
    presentaciones: [
      {
        tipo: 'Bolsa',
        tamaños: ['350 ml', '6 L'],
      },
      {
        tipo: 'Botella',
        tamaños: ['300 ml', '600 ml'],
      },
      { tipo: 'Botellon', tamaños: ['20 L'] },
    ],
    precio: 49.99,
  },
  {
    id: 2,
    nombre: 'Linea Ecologica',
    descripcion:
      'Agua de lluvia recolectada , tratada, filtrada y purificada con tecnología sostenible. Se entrega en envases reciclables. Ideal para consumidores comprometidos con el medio ambiente.',
    imagen: 'templates/template_1920x1080.png',
    presentaciones: [
      {
        tipo: 'Bolsa',
        tamaños: ['350 ml', '6 L'],
      },
      {
        tipo: 'Botella',
        tamaños: ['300 ml', '600 ml'],
      },
    ],
    precio: 29.5,
  },
  {
    id: 3,
    nombre: 'Linea infantil',
    descripcion:
      'Agua purificada presentada en botellas con diseños coloridos, adaptados para niños. Las botellas ergonómicas, seguras, fáciles de abrir y con personajes infantiles que fomentan el consumo saludable de agua.',
    imagen: 'templates/template_1920x1080.png',
    presentaciones: [
      {
        tipo: 'Botella',
        tamaños: ['300 ml'],
      },
    ],
    precio: 89.0,
  },
  {
    id: 4,
    nombre: 'Linea premium',
    descripcion:
      'Agua tratada con procesos de alta calidad, ideal para consumomidores comprometidos con el ambiente  con sabores naturales: limon, frutos rojos, frutos amarillos.  sin calorias 100% natural.',
    presentaciones: [
      {
        tipo: 'Botella',
        tamaños: ['300 ml', '600 ml'],
      },
    ],
    imagen: 'templates/template_1920x1080.png',
    precio: 34.75,
  },
]

type TProduct = {
  id: number
  nombre: string
  descripcion: string
  imagen: string
  precio: number
  presentaciones: Record<string, string>[]
}

const renderRightImageProduct: FC<TProduct> = ({
  id,
  nombre,
  descripcion,
  imagen,
  precio,
  presentaciones,
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
            }}
          >
            <Stack
              sx={{
                width: 1,
                rowGap: 2,
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
              }}
            >
              <Typography variant="h5" sx={{ color: 'text.primary' }}>
                {nombre}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {descripcion}
              </Typography>
            </Stack>
            <Stack sx={{ flexDirection: 'row', columnGap: 2 }}>
              {presentaciones.map(({ tipo, tamaños }, index) => {
                return (
                  <Stack key={index}>
                    <Typography>{tipo}</Typography>
                    {tamaños?.map((tamaño, index) => (
                      <Typography key={index}>{tamaño}</Typography>
                    ))}
                  </Stack>
                )
              })}
            </Stack>
            <Typography sx={{ fontWeight: 'bold' }}>$ {precio} COP</Typography>
            <LiquidButtons
              label={'Ver mas'}
              buttonAnimationColor={theme.palette.primary[900]}
              sx={{ bgcolor: theme.palette.primary[600] }}
            />
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
  nombre,
  descripcion,
  imagen,
  precio,
  presentaciones,
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
                  rowGap: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: 2,
                }}
              >
                <Typography variant="h5" sx={{ color: 'text.primary' }}>
                  {nombre}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {descripcion}
                </Typography>
              </Stack>
              <Stack sx={{ flexDirection: 'row', columnGap: 2 }}>
                {presentaciones.map(({ tipo, tamaños }, index) => {
                  return (
                    <Stack key={index}>
                      <Typography>{tipo}</Typography>
                      {tamaños?.map((tamaño, index) => (
                        <Typography key={index}>{tamaño}</Typography>
                      ))}
                    </Stack>
                  )
                })}
              </Stack>
              <Typography sx={{ fontWeight: 'bold' }}>
                $ {precio} COP
              </Typography>
              <LiquidButtons
                label={'Ver mas'}
                buttonAnimationColor={theme.palette.primary[900]}
                sx={{ bgcolor: theme.palette.primary[600] }}
              />
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
  return (
    <GenericContainer sx={{ pb: 0, px: 0 }}>
      <Stack sx={{ rowGap: 6, width: 1 }}>
        <Typography variant="h3" align="center">
          Nuestros Productos
        </Typography>
        <Stack sx={{ width: 1, rowGap: 4 }}>
          {dummyData.map((product, index) => {
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
