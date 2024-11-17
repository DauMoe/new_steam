import { homeStore } from "$lib/store/home";
import { ensureHost } from "$lib/utils";
import { HOME_STORE_ENDPOINT } from "./endpoints";
import request from "./request";

export async function getHomeData(): Promise<void> {
  try {
    let resp = await request<CarouselsResponse>(HOME_STORE_ENDPOINT);
    let requests: Array<Promise<CarouselResponse> | null> = [];

    resp.items.forEach(item => {
      if (item.image_url) {
        item.image_url = ensureHost(item.image_url);
      }

      if (item.path) {
        requests.push(request(item.path))
      } else {
        requests.push(null);
      }
    });

    const results = await Promise.allSettled(requests);

    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        if (result.value?.items) {
          let carouselsData = result.value?.items;
          carouselsData.forEach(carouselData => {
            carouselData.primary_image = ensureHost(carouselData.primary_image);
            if (carouselData.sub_images) {
              carouselData.sub_images = carouselData.sub_images.map(p => ensureHost(p));
            }
          });
        }
        resp.items[index].data = result.value?.items || [];
      } else if (result.status === "rejected") {
        resp.items[index].data = [];
      }
    });    
    
    homeStore.set(resp);
  } catch(e) {
    console.error("[HOME APIs] Err", e);
  }
}