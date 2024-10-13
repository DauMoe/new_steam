import { get } from "svelte/store"
import { clientStore } from "./store"

export const getSecondaryHeaderItem = (id: number) => {
  const { header: { client } } = get(clientStore);
  for(let i=0; i<client.length; i++) {
    if (client[i].id === id) {
      return client[i].items;
    }
  }
}