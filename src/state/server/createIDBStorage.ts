import type {
  PersistedClient,
  Persister,
} from '@tanstack/react-query-persist-client';

import { openDB } from 'idb';

const DB_NAME = 'eafit';
const STORE_NAME = 'server-state';
const KEY = 'queries';

const openQueryDB = async () => {
  return await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
};

export const createIDBPersister = (): Persister => {
  return {
    persistClient: async (client: PersistedClient) => {
      const db = await openQueryDB();
      await db.put(STORE_NAME, client, KEY);
    },
    restoreClient: async () => {
      const db = await openQueryDB();
      return (await db.get(STORE_NAME, KEY)) as PersistedClient | undefined;
    },
    removeClient: async () => {
      const db = await openQueryDB();
      await db.delete(STORE_NAME, KEY);
    },
  };
};
