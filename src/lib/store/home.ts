import { writable } from "svelte/store";

const initValue: CarouselsResponse = {
  id: 1,
  timestamp: 1234,
  items: []
}

export const homeStore = writable<CarouselsResponse>(initValue);