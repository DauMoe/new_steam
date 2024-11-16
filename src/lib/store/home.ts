import { writable } from "svelte/store";

const initValue: StoreType = {
  id: 1,
  timestamp: 1234,
  items: []
}

export const homeStore = writable<StoreType>(initValue);