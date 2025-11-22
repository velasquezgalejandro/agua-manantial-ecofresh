import { object, string, number, array, any, boolean } from 'valibot'

export const EventSchema = object({
  id: number(),
  name: string(),
  descripcion: string(),
  imagen: string(),
  activo: boolean(),
  categoria: string(),
})

export const EventsListSchema = array(EventSchema)

export type TEventsList = typeof EventsListSchema
export type TEvent = typeof EventSchema

// ------------------------------------------- //

export const TimelineSchema = object({
  id: number(),
  title: string(),
  description: string(),
  year: string(),
  date: string(),
  imagen: string(),
})

export const TimelineListSchema = array(TimelineSchema)

export type TTimelineList = typeof TimelineListSchema
export type TTimeline = typeof TimelineSchema

// ------------------------------------------- //

export const ProductSchema = object({
  id: number(),
  name: string(),
  description: string(),
  imagen: string(),
  // presentation: array(
  //   object({
  //     tipo: string(),
  //     tamaño: number(),
  //     price: number(),
  //   }),
  // ),
  presentation: any(),
})

export const ProductsListSchema = any()

export type TProductList = typeof ProductsListSchema
export type TProduct = typeof ProductSchema

/* ====================================================================== */
/* ESQUEMAS DE Regiones
/* ====================================================================== */

export const RegionesSchema = object({
  id: number(),
  nombre: string(),
  area: number(),
  perimetro: number(),
  color: string(),
  latitud: number(),
  longitud: number(),
  poligono: any(),
})

export const RegionesListSchema = array(RegionesSchema)

export type TRegiones = InferInput<typeof RegionesSchema>
export type TRegionesList = InferInput<typeof RegionesListSchema>

/* ====================================================================== */
/* ESQUEMAS DE Municipios
/* ====================================================================== */

export const MunicipiosSchema = object({
  id: number(),
  nombre: string(),
  cod_dane: string(),
  area: number(),
  perimetro: number(),
  color: string(),
  region: number(),
  latitud: number(),
  longitud: number(),
  poligono: any(),
})

export const MunicipiosListSchema = array(MunicipiosSchema)

export type TMunicipios = InferInput<typeof MunicipiosSchema>
export type TMunicipiosList = InferInput<typeof MunicipiosListSchema>

// /* ====================================================================== */
// /* ESQUEMAS DE Parametros
// /* ====================================================================== */

// export const ParametrosSchema = object({
//   id: string(),
//   nombre: string(),
//   nombre_corto: string(),
//   codigo: string(),
//   unidad: string(),
//   descripcion: string(),
//   limite: nullable(number()),
//   tiempo_exposicion: nullable(number()),
//   tipo_parametro: number(),
//   tipo_parametro_nombre: string(),
//   minimo: number(),
//   maximo: number(),
//   indice: number(),
//   src_color: string(),
//   src_dark: string(),
//   src_light: string(),
// });

// export const ParametrosListSchema = array(ParametrosSchema);

// export type TParametros = InferInput<typeof ParametrosSchema>;
// export type TParametrosList = InferInput<typeof ParametrosListSchema>;

// /* ====================================================================== */
// /* ESQUEMAS DE Secciones
// /* ====================================================================== */

// export const SeccionesSchema = object({
//   id: string(),
//   codigo: string(),
//   x: array(number()),
//   y: array(number()),
//   offset: number(),
//   umbral_amarillo: number(),
//   umbral_naranja: number(),
//   umbral_rojo: number(),
// });

// export const SeccionesListSchema = array(SeccionesSchema);

// export type TSecciones = InferInput<typeof SeccionesSchema>;
// export type TSeccionesList = InferInput<typeof SeccionesListSchema>;
