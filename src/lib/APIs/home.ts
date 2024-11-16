import { homeStore } from "$lib/store/home";
import { HOME_STORE_ENDPOINT } from "./endpoints";
import request from "./request";

export async function getHomeData(): Promise<void> {
  try {
    const resp = await request<StoreType>(HOME_STORE_ENDPOINT);
    // let requests:Array<CarouselItem | null> = [];
    // resp.items.forEach(item => {
    //   if (item.path) {
    //     requests.push(request<CarouselItem>(item.path))
    //   } else {
    //     requests.push(null);
    //   }
    // });
    // const detailDatas = await Promise.all(requests);    
    console.log("resp", resp);
    
    homeStore.set(resp);
  } catch(e) {
    console.error("[HOME APIs] Err", e);
  }
}