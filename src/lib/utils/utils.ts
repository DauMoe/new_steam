import { get } from "svelte/store"
import { clientStore } from "../store/user"

const HOST_URL = __API_BASE_URL__;

export const getSecondaryHeaderItem = (id: number) => {
  const { header: { client } } = get(clientStore);
  for(let i=0; i<client.length; i++) {
    if (client[i].id === id) {
      return client[i].items;
    }
  }
}

export const ensureHost = (path: string): string => {
  const hasHost = /^https?:\/\//i.test(path);
  const url = hasHost ? path : `${HOST_URL}/${path}`;
  return encodeURI(url);
}