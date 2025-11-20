import axios from 'axios';
import { safeParse } from 'valibot';
import type { BaseSchema, InferOutput } from 'valibot';

import { API } from '~server/domain.ts';
import type { TModelKeys } from '~client/clientTypes.ts';

export const apiClient = axios.create({
  baseURL: API,
  // timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
  adapter: 'fetch',
});

const createFetcherList = async <T extends BaseSchema<any, any, any>>(
  url: string,
  schema: T,
): Promise<InferOutput<T>> => {
  const response = await apiClient.get(url);
  const data = safeParse(schema, response.data.values);

  if (!data.success)
    throw new Error(`SCHEMA ERROR: failed to fetch data list: ${url}`);

  return data.output;
};

const createFetcherInstance = async <T extends BaseSchema<any, any, any>>(
  url: string,
  schema: T,
): Promise<InferOutput<T>> => {
  const response = await apiClient.get(url);
  const data = safeParse(schema, response.data);

  if (!data.success) throw new Error(`Failed to fetch data instance: ${url}`);

  return data.output;
};

export const fetchList = async <T extends BaseSchema<any, any, any>>(
  model: TModelKeys,
  schema: T,
): Promise<InferOutput<T>> => {
  return createFetcherList(`${model}/`, schema);
};

export const fetchInstance = async <T extends BaseSchema<any, any, any>>(
  model: TModelKeys,
  schema: T,
  id: string,
): Promise<InferOutput<T>> => {
  return createFetcherInstance(`${model}/${id}`, schema);
};
