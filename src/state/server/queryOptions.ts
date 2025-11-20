import { queryOptions, skipToken } from '@tanstack/react-query'
import type { BaseSchema } from 'valibot'

import { fetchInstance, fetchList } from '~server/fetchers.ts'
import type { TModelKeys } from '~client/clientTypes.ts'
import {
  RegionesSchema,
  RegionesListSchema,
  MunicipiosSchema,
  MunicipiosListSchema,
  EventSchema,
  EventsListSchema,
  ProductSchema,
  ProductsListSchema,
  TimelineSchema,
  TimelineListSchema,
} from '~schemas/schemas.ts'

const queryFactory = <
  V extends BaseSchema<any, any, any>,
  U extends BaseSchema<any, any, any>,
>(
  key: TModelKeys,
  schemaList: V,
  schemaInstance: U,
) => ({
  // list
  allKey: () => [key] as const,
  listKey: () => [key, 'list'] as const,
  list: () =>
    queryOptions({
      queryKey: [key, 'list'] as const,
      queryFn: () => fetchList(key, schemaList),
    }),
  // instance
  detailKey: () => [key, 'detail'] as const,
  detail: (id: string | null) =>
    queryOptions({
      queryKey: [key, 'detail', id] as const,
      queryFn: id ? () => fetchInstance(key, schemaInstance, id) : skipToken,
    }),
})

export const queries = {
  regiones: queryFactory('regiones', RegionesListSchema, RegionesSchema),
  municipios: queryFactory(
    'municipios',
    MunicipiosListSchema,
    MunicipiosSchema,
  ),
  productos: queryFactory('productos', ProductsListSchema, ProductSchema),
  'linea-tiempo': queryFactory(
    'linea-tiempo',
    TimelineListSchema,
    TimelineSchema,
  ),
  eventos: queryFactory('eventos', EventsListSchema, EventSchema),
} as const satisfies Record<
  TModelKeys,
  ReturnType<typeof queryFactory<any, any>>
>
