import { object, string, number, array } from 'valibot'

export const EventSchema = object({
  id: number(),
  name: string(),
  descripcion: string(),
  imagen: string(),
  activo: string(),
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
  presentation: array(
    object({
      tipo: string(),
      tamaño: number(),
      price: number(),
    }),
  ),
})

export const ProductListSchema = array(ProductSchema)

export type TProductList = typeof ProductListSchema
export type TProduct = typeof ProductSchema
